'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useCookieConsent } from '@/contexts/CookieConsentContext'
import { 
  Cookie, 
  Settings, 
  Check, 
  X, 
  Shield, 
  BarChart3, 
  Settings2, 
  Target,
  Info,
  ExternalLink
} from 'lucide-react'

const cookieTypes = [
  {
    id: 'essential' as keyof import('@/contexts/CookieConsentContext').CookiePreferences,
    name: 'Essential Cookies',
    description: 'Required for basic website functionality and security. These cannot be disabled.',
    icon: Shield,
    required: true,
    examples: ['Authentication', 'Session management', 'Security features', 'Load balancing']
  },
  {
    id: 'analytics' as keyof import('@/contexts/CookieConsentContext').CookiePreferences,
    name: 'Analytics Cookies',
    description: 'Help us understand how visitors use our website to improve performance.',
    icon: BarChart3,
    required: false,
    examples: ['Google Analytics', 'Performance monitoring', 'Usage statistics', 'Error tracking']
  },
  {
    id: 'functional' as keyof import('@/contexts/CookieConsentContext').CookiePreferences,
    name: 'Functional Cookies',
    description: 'Enable enhanced features and personalization for a better user experience.',
    icon: Settings2,
    required: false,
    examples: ['Language preferences', 'User settings', 'Customization', 'Remember preferences']
  },
  {
    id: 'marketing' as keyof import('@/contexts/CookieConsentContext').CookiePreferences,
    name: 'Marketing Cookies',
    description: 'Used to deliver relevant advertisements and measure campaign effectiveness.',
    icon: Target,
    required: false,
    examples: ['Targeted ads', 'Social media integration', 'Campaign tracking', 'Retargeting']
  }
]

export function CookieConsentBanner() {
  const { 
    preferences, 
    showBanner, 
    updatePreferences, 
    acceptAll, 
    rejectAll, 
    hideBanner 
  } = useCookieConsent()
  
  const [showDetails, setShowDetails] = useState(false)
  const [tempPreferences, setTempPreferences] = useState(preferences)

  const handleSavePreferences = () => {
    updatePreferences(tempPreferences)
  }

  const handleTogglePreference = (type: keyof typeof preferences) => {
    if (type === 'essential') return // Essential cookies cannot be disabled
    
    setTempPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }))
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t">
      <div className="container mx-auto max-w-4xl">
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Cookie className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-xl">Cookie Preferences</CardTitle>
                <CardDescription>
                  We use cookies to enhance your experience and analyze our traffic. Choose your preferences below.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {!showDetails ? (
              // Simple consent view
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg">
                  <Info className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="space-y-2">
                    <p className="text-sm">
                      We use essential cookies to make our site work. We'd also like to set analytics cookies 
                      to help us improve it. We won't set optional cookies unless you enable them.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cookieTypes.map((type) => (
                        <Badge 
                          key={type.id} 
                          variant={preferences[type.id] ? "default" : "secondary"}
                          className="text-xs"
                        >
                          {type.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button onClick={acceptAll} className="flex-1">
                    <Check className="h-4 w-4 mr-2" />
                    Accept All Cookies
                  </Button>
                  <Button onClick={rejectAll} variant="outline" className="flex-1">
                    <X className="h-4 w-4 mr-2" />
                    Reject Optional
                  </Button>
                  <Button 
                    onClick={() => setShowDetails(true)} 
                    variant="outline"
                    className="flex-1"
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    Customize
                  </Button>
                </div>
              </div>
            ) : (
              // Detailed settings view
              <div className="space-y-6">
                <div className="space-y-4">
                  {cookieTypes.map((type) => {
                    const Icon = type.icon
                    return (
                      <div key={type.id} className="flex items-start space-x-4 p-4 border rounded-lg">
                        <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-semibold flex items-center space-x-2">
                                <span>{type.name}</span>
                                {type.required && (
                                  <Badge variant="secondary" className="text-xs">Required</Badge>
                                )}
                              </h4>
                              <p className="text-sm text-muted-foreground">{type.description}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Button
                                variant={tempPreferences[type.id] ? "default" : "outline"}
                                size="sm"
                                onClick={() => handleTogglePreference(type.id)}
                                disabled={type.required}
                                className="min-w-[80px]"
                              >
                                {tempPreferences[type.id] ? (
                                  <>
                                    <Check className="h-3 w-3 mr-1" />
                                    On
                                  </>
                                ) : (
                                  <>
                                    <X className="h-3 w-3 mr-1" />
                                    Off
                                  </>
                                )}
                              </Button>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {type.examples.map((example, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {example}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
                  <Button onClick={handleSavePreferences} className="flex-1">
                    <Check className="h-4 w-4 mr-2" />
                    Save Preferences
                  </Button>
                  <Button 
                    onClick={() => setShowDetails(false)} 
                    variant="outline"
                    className="flex-1"
                  >
                    Back to Simple View
                  </Button>
                </div>
              </div>
            )}

            <div className="text-center pt-4 border-t">
              <p className="text-xs text-muted-foreground">
                By using our website, you agree to our{' '}
                <a href="/privacy" className="text-primary hover:underline inline-flex items-center">
                  Privacy Policy
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
                {' '}and{' '}
                <a href="/terms" className="text-primary hover:underline inline-flex items-center">
                  Terms of Service
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
                . You can change your cookie preferences at any time.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
