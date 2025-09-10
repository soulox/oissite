import { Users, Globe, Shield, Zap, Award, Clock } from 'lucide-react'

const stats = [
  {
    icon: Users,
    value: '50,000+',
    label: 'Happy Customers',
    description: 'Trusted by businesses worldwide',
  },
  {
    icon: Globe,
    value: '99.9%',
    label: 'Uptime Guarantee',
    description: 'Reliable hosting infrastructure',
  },
  {
    icon: Shield,
    value: '24/7',
    label: 'Expert Support',
    description: 'Always here when you need us',
  },
  {
    icon: Zap,
    value: '< 2s',
    label: 'Load Time',
    description: 'Lightning-fast performance',
  },
  {
    icon: Award,
    value: '20+',
    label: 'Years Experience',
    description: 'Proven track record',
  },
  {
    icon: Clock,
    value: '< 2h',
    label: 'Response Time',
    description: 'Quick support response',
  },
]

export function AboutStats() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="space-y-2">
                <div className="text-3xl lg:text-4xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
