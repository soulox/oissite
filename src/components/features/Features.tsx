import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

const features = [
  {
    image: '/images/uptime-icon.jpg',
    title: '100% Uptime SLA',
    description: 'Our service level agreement is second to none. Our 100% uptime guarantee promises your hosted environment will be available 100% of the time, or your money back.',
  },
  {
    image: '/images/security-icon.png',
    title: 'Disaster Recovery',
    description: 'Get continuity of business and more importantly your revenue in the event of a disaster with our Disaster Recovery. A tried and test solution based on fully redundant infrastructure.',
  },
  {
    image: '/images/support-icon.jpg',
    title: 'Cost Effective',
    description: 'Through detailed planning, project costs can be reduced and expectations better managed and exceeded.',
  },
  {
    image: '/images/setup-icon.jpg',
    title: 'Instant Setup',
    description: 'As soon as you make a successful payment, your web hosting and domain names will be activated immediately. No waiting time whatsoever.',
  },
  {
    image: '/images/backup-icon.jpg',
    title: 'PCI Compliant Hosting',
    description: 'The design strategy behind OIS secure cloud is based on specific needs of PCI-driven companies, particularly retail and financial payments organizations.',
  },
]

export function Features() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Why Choose OISSite?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We provide everything you need to succeed online with our comprehensive hosting solutions and exceptional support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-20 h-20 mb-4">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={80}
                    height={80}
                    className="rounded-lg object-cover"
                  />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
