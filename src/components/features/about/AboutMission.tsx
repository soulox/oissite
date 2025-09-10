import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Target, Lightbulb, Heart, Users } from 'lucide-react'

const missionPoints = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To empower businesses and individuals with reliable, scalable, and user-friendly hosting solutions that enable them to achieve their online goals and grow their digital presence.',
  },
  {
    icon: Lightbulb,
    title: 'Our Vision',
    description: 'To become the leading web hosting provider known for exceptional customer service, innovative technology, and unwavering commitment to our customers\' success.',
  },
  {
    icon: Heart,
    title: 'Our Values',
    description: 'We believe in transparency, reliability, and putting our customers first. Every decision we make is guided by our commitment to providing the best possible service.',
  },
  {
    icon: Users,
    title: 'Our Promise',
    description: 'We promise to deliver 99.9% uptime, lightning-fast performance, and 24/7 expert support to ensure your online success.',
  },
]

export function AboutMission() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Our Mission & Values
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're more than just a hosting provider. We're your partner in online success, committed to delivering exceptional service and innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {missionPoints.map((point, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <point.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{point.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {point.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Story section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Our Story</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-center">
              <p className="text-muted-foreground leading-relaxed">
                Founded in 2003, OISSite began with a simple mission: to make web hosting accessible, reliable, and affordable for everyone. 
                We started as a small team of passionate developers and hosting experts who were frustrated with the complexity and 
                unreliability of existing hosting solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we've grown to serve over 50,000 customers worldwide, but our core values remain the same. We believe that 
                every business and individual deserves access to professional-grade hosting services without the technical complexity 
                or hidden costs that plague the industry.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our commitment to customer success, combined with our cutting-edge technology and 24/7 expert support, has made us 
                a trusted partner for businesses of all sizes. From startups launching their first website to established enterprises 
                managing complex online operations, we're here to support your digital journey.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
