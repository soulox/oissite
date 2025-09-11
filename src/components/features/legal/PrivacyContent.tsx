import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Shield, Eye, Lock, Database, Globe, Mail, Phone, User } from 'lucide-react'

const privacySections = [
  {
    icon: Database,
    title: 'Information We Collect',
    badge: 'Data Collection',
    content: [
      {
        subtitle: 'Personal Information',
        details: [
          'Name, email address, and contact information',
          'Billing and payment information',
          'Account credentials and preferences',
          'Communication records and support tickets'
        ]
      },
      {
        subtitle: 'Technical Information',
        details: [
          'IP addresses and device information',
          'Browser type and version',
          'Website usage patterns and analytics',
          'Server logs and performance data'
        ]
      },
      {
        subtitle: 'Hosting Data',
        details: [
          'Website content and files',
          'Database information',
          'Email communications',
          'Backup and recovery data'
        ]
      }
    ]
  },
  {
    icon: Eye,
    title: 'How We Use Your Information',
    badge: 'Data Usage',
    content: [
      {
        subtitle: 'Service Provision',
        details: [
          'Provide hosting and domain services',
          'Process payments and billing',
          'Deliver customer support',
          'Maintain and improve our services'
        ]
      },
      {
        subtitle: 'Communication',
        details: [
          'Send service notifications',
          'Provide technical support',
          'Share important updates',
          'Respond to inquiries and requests'
        ]
      },
      {
        subtitle: 'Security and Compliance',
        details: [
          'Monitor for security threats',
          'Comply with legal obligations',
          'Prevent fraud and abuse',
          'Maintain service integrity'
        ]
      }
    ]
  },
  {
    icon: Lock,
    title: 'Data Protection and Security',
    badge: 'Security',
    content: [
      {
        subtitle: 'Technical Safeguards',
        details: [
          'SSL/TLS encryption for data transmission',
          'Encrypted storage of sensitive information',
          'Regular security audits and updates',
          'Access controls and authentication'
        ]
      },
      {
        subtitle: 'Operational Security',
        details: [
          'Limited access to personal data',
          'Employee training on data protection',
          'Incident response procedures',
          'Regular backup and recovery testing'
        ]
      },
      {
        subtitle: 'Compliance Standards',
        details: [
          'GDPR compliance for EU customers',
          'PCI DSS for payment processing',
          'SOC 2 Type II certification',
          'Industry best practices'
        ]
      }
    ]
  },
  {
    icon: Globe,
    title: 'Data Sharing and Disclosure',
    badge: 'Sharing',
    content: [
      {
        subtitle: 'Third-Party Services',
        details: [
          'Payment processors (Stripe, PayPal)',
          'Email service providers (SendGrid)',
          'Analytics services (Google Analytics)',
          'CDN providers (Cloudflare)'
        ]
      },
      {
        subtitle: 'Legal Requirements',
        details: [
          'Compliance with court orders',
          'Response to legal requests',
          'Protection of rights and safety',
          'Enforcement of terms of service'
        ]
      },
      {
        subtitle: 'Business Transfers',
        details: [
          'Merger or acquisition scenarios',
          'Asset sales or transfers',
          'Corporate restructuring',
          'With explicit user consent'
        ]
      }
    ]
  },
  {
    icon: User,
    title: 'Your Rights and Choices',
    badge: 'Your Rights',
    content: [
      {
        subtitle: 'Access and Control',
        details: [
          'Access your personal information',
          'Update or correct your data',
          'Download your data (data portability)',
          'Delete your account and data'
        ]
      },
      {
        subtitle: 'Communication Preferences',
        details: [
          'Opt-out of marketing emails',
          'Choose notification preferences',
          'Manage cookie settings',
          'Control data sharing options'
        ]
      },
      {
        subtitle: 'Legal Rights (GDPR)',
        details: [
          'Right to rectification',
          'Right to erasure (right to be forgotten)',
          'Right to restrict processing',
          'Right to data portability'
        ]
      }
    ]
  }
]

const cookieTypes = [
  {
    type: 'Essential Cookies',
    description: 'Required for basic website functionality and security',
    examples: ['Authentication', 'Session management', 'Security features']
  },
  {
    type: 'Analytics Cookies',
    description: 'Help us understand how visitors use our website',
    examples: ['Google Analytics', 'Performance monitoring', 'Usage statistics']
  },
  {
    type: 'Functional Cookies',
    description: 'Enable enhanced features and personalization',
    examples: ['Language preferences', 'User settings', 'Customization']
  },
  {
    type: 'Marketing Cookies',
    description: 'Used to deliver relevant advertisements and content',
    examples: ['Targeted ads', 'Social media integration', 'Campaign tracking']
  }
]

export function PrivacyContent() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Introduction</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                OISSite ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our web hosting, 
                domain registration, and related services.
              </p>
              <p className="text-muted-foreground">
                By using our services, you agree to the collection and use of information in accordance with this policy. 
                We will not use or share your information with anyone except as described in this Privacy Policy.
              </p>
            </CardContent>
          </Card>

          {/* Privacy Sections */}
          {privacySections.map((section, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <section.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">{section.title}</CardTitle>
                    <Badge variant="secondary" className="mt-2">{section.badge}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {section.content.map((item, itemIndex) => (
                  <div key={itemIndex} className="space-y-3">
                    <h4 className="text-lg font-semibold">{item.subtitle}</h4>
                    <ul className="space-y-2">
                      {item.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}

          {/* Cookies Policy */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Cookies and Tracking Technologies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                We use cookies and similar tracking technologies to enhance your experience on our website and to analyze our traffic. 
                You can control cookie settings through your browser preferences.
              </p>
              
              <div className="grid gap-4">
                {cookieTypes.map((cookie, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">{cookie.type}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{cookie.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {cookie.examples.map((example, exampleIndex) => (
                        <Badge key={exampleIndex} variant="outline" className="text-xs">
                          {example}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Data Retention */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Data Retention</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy. 
                Specific retention periods include:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    <strong>Account Information:</strong> Retained for the duration of your account plus 3 years for legal and business purposes
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    <strong>Billing Records:</strong> Retained for 7 years to comply with tax and accounting requirements
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    <strong>Support Communications:</strong> Retained for 3 years to improve our services
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    <strong>Website Data:</strong> Retained according to your hosting plan and backup policies
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* International Transfers */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">International Data Transfers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Your information may be transferred to and processed in countries other than your own. 
                We ensure appropriate safeguards are in place to protect your data during international transfers, including:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Standard Contractual Clauses (SCCs) for EU data transfers</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Adequacy decisions by relevant data protection authorities</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Certification schemes and codes of conduct</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Children's Privacy */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Children's Privacy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. 
                If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
              </p>
            </CardContent>
          </Card>

          {/* Policy Updates */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Changes to This Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page 
                and updating the "Last Updated" date at the top of this policy.
              </p>
              <p className="text-muted-foreground">
                We encourage you to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
