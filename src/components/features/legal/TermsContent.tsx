import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  User, 
  CreditCard, 
  Shield, 
  AlertTriangle, 
  Server, 
  Globe, 
  Mail, 
  Phone,
  FileText,
  Settings
} from 'lucide-react'

const termsSections = [
  {
    icon: User,
    title: 'Account Terms',
    badge: 'Account',
    content: [
      {
        subtitle: 'Account Registration',
        details: [
          'You must provide accurate and complete information when creating an account',
          'You are responsible for maintaining the security of your account credentials',
          'One person or entity may not maintain multiple accounts',
          'You must be at least 18 years old to create an account'
        ]
      },
      {
        subtitle: 'Account Responsibilities',
        details: [
          'Keep your contact information up to date',
          'Monitor your account for unauthorized access',
          'Notify us immediately of any security breaches',
          'Comply with all applicable laws and regulations'
        ]
      }
    ]
  },
  {
    icon: CreditCard,
    title: 'Payment and Billing',
    badge: 'Billing',
    content: [
      {
        subtitle: 'Payment Terms',
        details: [
          'All fees are due in advance of service delivery',
          'Payment is required before account activation',
          'We accept major credit cards and PayPal',
          'Failed payments may result in service suspension'
        ]
      },
      {
        subtitle: 'Refund Policy',
        details: [
          '30-day money-back guarantee for new accounts',
          'Refunds processed within 5-7 business days',
          'Setup fees and domain registrations are non-refundable',
          'Refunds not available for accounts terminated for policy violations'
        ]
      },
      {
        subtitle: 'Price Changes',
        details: [
          'We reserve the right to change prices with 30 days notice',
          'Existing customers receive advance notification',
          'Price changes apply to renewal periods',
          'Grandfathered pricing may be available for long-term customers'
        ]
      }
    ]
  },
  {
    icon: Shield,
    title: 'Acceptable Use Policy',
    badge: 'Usage',
    content: [
      {
        subtitle: 'Prohibited Activities',
        details: [
          'Spam, phishing, or unsolicited bulk email',
          'Malware, viruses, or malicious software',
          'Copyright infringement or intellectual property violations',
          'Illegal activities or content'
        ]
      },
      {
        subtitle: 'Content Restrictions',
        details: [
          'Adult content must comply with applicable laws',
          'No content promoting violence or hate speech',
          'Respect intellectual property rights',
          'Comply with local and international laws'
        ]
      },
      {
        subtitle: 'Resource Usage',
        details: [
          'Fair use of server resources and bandwidth',
          'No excessive CPU or memory usage',
          'Reasonable email sending limits',
          'Compliance with hosting plan limitations'
        ]
      }
    ]
  },
  {
    icon: Server,
    title: 'Service Level Agreement',
    badge: 'SLA',
    content: [
      {
        subtitle: 'Uptime Guarantee',
        details: [
          '99.9% uptime guarantee for all hosting services',
          'Credits available for downtime exceeding SLA',
          'Scheduled maintenance excluded from uptime calculations',
          'Force majeure events excluded from SLA'
        ]
      },
      {
        subtitle: 'Support Response Times',
        details: [
          'Critical issues: 1 hour response time',
          'High priority: 4 hours response time',
          'Medium priority: 24 hours response time',
          'Low priority: 72 hours response time'
        ]
      },
      {
        subtitle: 'Service Credits',
        details: [
          'Credits calculated based on monthly service fees',
          'Maximum credit equal to one month of service',
          'Credits applied to next billing cycle',
          'Must be requested within 30 days of incident'
        ]
      }
    ]
  },
  {
    icon: Globe,
    title: 'Domain Services',
    badge: 'Domains',
    content: [
      {
        subtitle: 'Domain Registration',
        details: [
          'Domains registered for minimum 1-year periods',
          'Auto-renewal enabled by default',
          'Domain availability not guaranteed until registration',
          'ICANN policies and registry rules apply'
        ]
      },
      {
        subtitle: 'Domain Transfers',
        details: [
          'Transfer requests processed within 5-7 days',
          'Authorization codes required for transfers',
          'Domains must be unlocked for transfer',
          'Transfer fees may apply'
        ]
      },
      {
        subtitle: 'Domain Management',
        details: [
          'DNS management included with all domains',
          'WHOIS privacy protection available',
          'Domain forwarding and email services',
          'Domain expiration notifications sent via email'
        ]
      }
    ]
  },
  {
    icon: AlertTriangle,
    title: 'Termination and Suspension',
    badge: 'Termination',
    content: [
      {
        subtitle: 'Service Suspension',
        details: [
          'Services may be suspended for policy violations',
          'Payment failures may result in immediate suspension',
          'Security threats may trigger emergency suspension',
          'Advance notice provided when possible'
        ]
      },
      {
        subtitle: 'Account Termination',
        details: [
          'Repeated policy violations may result in termination',
          'Fraudulent activity leads to immediate termination',
          'Terminated accounts forfeit all data and services',
          'No refunds for terminated accounts'
        ]
      },
      {
        subtitle: 'Data Recovery',
        details: [
          'Backup data retained for 30 days after termination',
          'Data recovery fees may apply',
          'No guarantee of data recovery after termination',
          'Customer responsible for data backup before termination'
        ]
      }
    ]
  }
]

const liabilityLimitations = [
  'OISSite provides services "as is" without warranties',
  'Maximum liability limited to amount paid for services',
  'Not liable for indirect, incidental, or consequential damages',
  'Customer assumes responsibility for data backup',
  'Force majeure events excluded from liability'
]

const disputeResolution = [
  'Disputes resolved through binding arbitration',
  'Arbitration conducted by American Arbitration Association',
  'Individual claims only, no class action lawsuits',
  'Governing law: State of Delaware, United States',
  'Venue: Delaware courts for any legal proceedings'
]

export function TermsContent() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Agreement to Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                By accessing and using OISSite's services, you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to abide by the above, please do not use this service.
              </p>
              <p className="text-muted-foreground">
                These Terms of Service constitute a legally binding agreement between you and OISSite regarding your use of our web hosting, 
                domain registration, and related services.
              </p>
            </CardContent>
          </Card>

          {/* Terms Sections */}
          {termsSections.map((section, index) => (
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

          {/* Limitation of Liability */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                To the maximum extent permitted by law, OISSite shall not be liable for any indirect, incidental, special, consequential, 
                or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
              <ul className="space-y-2">
                {liabilityLimitations.map((limitation, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{limitation}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Dispute Resolution */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Dispute Resolution</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Any disputes arising out of or relating to these Terms of Service or our services shall be resolved through binding arbitration 
                rather than in court, except that you may assert claims in small claims court if your claims qualify.
              </p>
              <ul className="space-y-2">
                {disputeResolution.map((resolution, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{resolution}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Changes to Terms */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We reserve the right to modify these Terms of Service at any time. We will notify users of any material changes by posting 
                the new Terms of Service on this page and updating the "Last Updated" date.
              </p>
              <p className="text-muted-foreground">
                Your continued use of our services after any such changes constitutes your acceptance of the new Terms of Service. 
                If you do not agree to the modified terms, you must discontinue your use of our services.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <span className="text-sm">legal@oissite.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <span className="text-sm">+1 (555) 123-4567</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <FileText className="h-4 w-4 text-primary" />
                    <span className="text-sm">Terms of Service</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Settings className="h-4 w-4 text-primary" />
                    <span className="text-sm">Last Updated: December 2024</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
