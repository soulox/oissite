'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useCookieConsent } from '@/contexts/CookieConsentContext'
import { 
  Cookie, 
  Check, 
  X, 
  Shield, 
  BarChart3, 
  Settings2, 
  Target,
  Info,
  Save,
  RotateCcw
} from 'lucide-react'

const cookieTypes = [
  {
    id: 'essential' as keyof import('@/contexts/CookieConsentContext').CookiePreferences,
    name: 'Essential Cookies',
    description: 'Required for basic website functionality and security. These cannot be disabled.',
    icon: Shield,
    required: true,
    examples: ['Authentication', 'Session management', 'Security features', 'Load balancing'],
    details: 'These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.'
  },
  {
    id: 'analytics' as keyof import('@/contexts/CookieConsentContext').CookiePreferences,
    name: 'Analytics Cookies',
    description: 'Help us understand how visitors use our website to improve performance.',
    icon: BarChart3,
    required: false,
    examples: ['Google Analytics', 'Performance monitoring', 'Usage statistics', 'Error tracking'],
    details: 'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.'
  },
  {
    id: 'functional' as keyof import('@/contexts/CookieConsentContext').CookiePreferences,
    name: 'Functional Cookies',
    description: 'Enable enhanced features and personalization for a better user experience.',
    icon: Settings2,
    required: false,
    examples: ['Language preferences', 'User settings', 'Customization', 'Remember preferences'],
    details: 'These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages.'
  },
  {
    id: 'marketing' as keyof import('@/contexts/CookieConsentContext').CookiePreferences,
    name: 'Marketing Cookies',
    description: 'Used to deliver relevant advertisements and measure campaign effectiveness.',
    icon: Target,
    required: false,
    examples: ['Targeted ads', 'Social media integration', 'Campaign tracking', 'Retargeting'],
    details: 'These cookies may be set through our site by our advertising partners to build a profile of your interests and show you relevant adverts on other sites. They do not store directly personal information, but are based on uniquely identifying your browser and internet device.'
  }
]

interface CookieSettingsProps {
  onClose?: () => void
}

export function CookieSettings({ onClose }: CookieSettingsProps) {
  const { 
    preferences, 
    updatePreferences, 
    acceptAll, 
    rejectAll 
  } = useCookieConsent()
  
  const [tempPreferences, setTempPreferences] = useState(preferences)

  const handleSavePreferences = () => {
    updatePreferences(tempPreferences)
    onClose?.()
  }

  const handleTogglePreference = (type: keyof typeof preferences) => {
    if (type === 'essential') return // Essential cookies cannot be disabled
    
    setTempPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }))
  }

  const handleAcceptAll = () => {
    acceptAll()
    onClose?.()
  }

  const handleRejectAll = () => {
    rejectAll()
    onClose?.()
  }

  const handleReset = () => {
    setTempPreferences(preferences)
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Cookie className="h-6 w-6 text-primary" />
          </div>
          <div>
            <CardTitle className="text-2xl">Cookie Settings</CardTitle>
            <CardDescription>
              Manage your cookie preferences and control how we use your data.
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg">
          <Info className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <div className="space-y-2">
            <p className="text-sm">
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
              By clicking "Accept All", you consent to our use of cookies. You can customize your preferences below.
            </p>
            <div className="flex flex-wrap gap-2">
              {cookieTypes.map((type) => (
                <Badge 
                  key={type.id} 
                  variant={tempPreferences[type.id] ? "default" : "secondary"}
                  className="text-xs"
                >
                  {type.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {cookieTypes.map((type) => {
            const Icon = type.icon
            return (
              <div key={type.id} className="space-y-3 p-4 border rounded-lg">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 space-y-3">
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
                    
                    <div className="space-y-2">
                      <p className="text-xs text-muted-foreground">{type.details}</p>
                      <div className="flex flex-wrap gap-1">
                        {type.examples.map((example, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {example}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
          <Button onClick={handleSavePreferences} className="flex-1">
            <Save className="h-4 w-4 mr-2" />
            Save Preferences
          </Button>
          <Button onClick={handleAcceptAll} variant="outline" className="flex-1">
            <Check className="h-4 w-4 mr-2" />
            Accept All
          </Button>
          <Button onClick={handleRejectAll} variant="outline" className="flex-1">
            <X className="h-4 w-4 mr-2" />
            Reject Optional
          </Button>
          <Button onClick={handleReset} variant="ghost" className="flex-1">
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset
          </Button>
        </div>

        <div className="text-center pt-4 border-t">
          <p className="text-xs text-muted-foreground">
            You can change these settings at any time. For more information about how we use cookies, 
            please see our{' '}
            <a href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
