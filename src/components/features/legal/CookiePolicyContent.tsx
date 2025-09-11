import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Shield, 
  BarChart3, 
  Settings2, 
  Target,
  Clock,
  Database,
  Globe,
  Eye,
  Lock
} from 'lucide-react'

const cookieTypes = [
  {
    icon: Shield,
    name: 'Essential Cookies',
    description: 'These cookies are necessary for the website to function and cannot be switched off in our systems.',
    required: true,
    examples: [
      'Authentication and login sessions',
      'Security and fraud prevention',
      'Load balancing and performance',
      'Shopping cart and checkout process'
    ],
    retention: 'Session or up to 1 year',
    purpose: 'Essential for website functionality'
  },
  {
    icon: BarChart3,
    name: 'Analytics Cookies',
    description: 'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.',
    required: false,
    examples: [
      'Google Analytics tracking',
      'Performance monitoring',
      'Error tracking and reporting',
      'User behavior analysis'
    ],
    retention: 'Up to 2 years',
    purpose: 'Website performance and analytics'
  },
  {
    icon: Settings2,
    name: 'Functional Cookies',
    description: 'These cookies enable the website to provide enhanced functionality and personalisation.',
    required: false,
    examples: [
      'Language and region preferences',
      'User interface customizations',
      'Remember user settings',
      'Accessibility features'
    ],
    retention: 'Up to 1 year',
    purpose: 'Enhanced user experience'
  },
  {
    icon: Target,
    name: 'Marketing Cookies',
    description: 'These cookies may be set through our site by our advertising partners to build a profile of your interests.',
    required: false,
    examples: [
      'Targeted advertising',
      'Social media integration',
      'Campaign tracking',
      'Retargeting and remarketing'
    ],
    retention: 'Up to 2 years',
    purpose: 'Marketing and advertising'
  }
]

const thirdPartyServices = [
  {
    name: 'Google Analytics',
    purpose: 'Website analytics and performance tracking',
    cookies: ['_ga', '_ga_*', '_gid', '_gat'],
    retention: 'Up to 2 years',
    privacy: 'https://policies.google.com/privacy'
  },
  {
    name: 'Google Tag Manager',
    purpose: 'Tag management and tracking implementation',
    cookies: ['_gtm', '_gtag'],
    retention: 'Up to 2 years',
    privacy: 'https://policies.google.com/privacy'
  },
  {
    name: 'Cloudflare',
    purpose: 'CDN and security services',
    cookies: ['__cfduid', '__cf_bm'],
    retention: 'Up to 1 year',
    privacy: 'https://www.cloudflare.com/privacy/'
  },
  {
    name: 'Stripe',
    purpose: 'Payment processing',
    cookies: ['__stripe_mid', '__stripe_sid'],
    retention: 'Up to 1 year',
    privacy: 'https://stripe.com/privacy'
  }
]

export function CookiePolicyContent() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">What Are Cookies?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
                They are widely used to make websites work more efficiently and to provide information to website owners.
              </p>
              <p className="text-muted-foreground">
                OISSite uses cookies and similar technologies to enhance your browsing experience, analyze our traffic, 
                and provide personalized content and advertisements. This policy explains how we use these technologies 
                and how you can control them.
              </p>
            </CardContent>
          </Card>

          {/* Types of Cookies */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Types of Cookies We Use</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {cookieTypes.map((type, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                      <type.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-semibold flex items-center space-x-2">
                          <span>{type.name}</span>
                          {type.required && (
                            <Badge variant="secondary" className="text-xs">Required</Badge>
                          )}
                        </h4>
                      </div>
                      <p className="text-muted-foreground">{type.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-medium text-sm mb-2">Examples:</h5>
                          <ul className="space-y-1">
                            {type.examples.map((example, exampleIndex) => (
                              <li key={exampleIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span>{example}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-2">
                          <div>
                            <h5 className="font-medium text-sm">Retention Period:</h5>
                            <p className="text-sm text-muted-foreground">{type.retention}</p>
                          </div>
                          <div>
                            <h5 className="font-medium text-sm">Purpose:</h5>
                            <p className="text-sm text-muted-foreground">{type.purpose}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Third-Party Cookies */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Third-Party Cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We also use third-party services that may set cookies on your device. These services help us provide 
                better functionality and analyze our website performance.
              </p>
              
              <div className="space-y-4">
                {thirdPartyServices.map((service, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <h4 className="font-semibold">{service.name}</h4>
                        <p className="text-sm text-muted-foreground">{service.purpose}</p>
                        <div className="flex flex-wrap gap-2">
                          {service.cookies.map((cookie, cookieIndex) => (
                            <Badge key={cookieIndex} variant="outline" className="text-xs">
                              {cookie}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="text-right space-y-1">
                        <p className="text-sm text-muted-foreground">Retention: {service.retention}</p>
                        <a 
                          href={service.privacy} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:underline"
                        >
                          Privacy Policy
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Managing Cookies */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Managing Your Cookie Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold flex items-center space-x-2">
                    <Settings2 className="h-5 w-5 text-primary" />
                    <span>Cookie Settings</span>
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Use our cookie settings panel to customize which cookies you want to accept. 
                    You can change your preferences at any time.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Access settings from the footer</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Choose which cookie categories to enable</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Save your preferences for future visits</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold flex items-center space-x-2">
                    <Eye className="h-5 w-5 text-primary" />
                    <span>Browser Settings</span>
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    You can also control cookies through your browser settings. Most browsers allow you to:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Block all cookies</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Block third-party cookies only</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Delete existing cookies</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Legal Basis */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Legal Basis for Processing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold flex items-center space-x-2">
                    <Lock className="h-5 w-5 text-primary" />
                    <span>Essential Cookies</span>
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Processed based on our legitimate interest in providing a functional website and 
                    fulfilling our contractual obligations to you.
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold flex items-center space-x-2">
                    <Database className="h-5 w-5 text-primary" />
                    <span>Optional Cookies</span>
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Processed based on your consent, which you can withdraw at any time through 
                    our cookie settings or by contacting us.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Updates */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Updates to This Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We may update this Cookie Policy from time to time to reflect changes in our practices or 
                for other operational, legal, or regulatory reasons. We will notify you of any material changes 
                by posting the updated policy on this page.
              </p>
              <p className="text-muted-foreground">
                We encourage you to review this Cookie Policy periodically to stay informed about how we use cookies.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
