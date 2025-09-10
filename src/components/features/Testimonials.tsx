import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Small Business Owner',
    company: 'Johnson Bakery',
    avatar: '/avatars/sarah.jpg',
    content: 'OISSite has been a game-changer for my bakery. The hosting is fast, reliable, and their support team is incredibly helpful. I can focus on my business while they handle the technical stuff.',
    rating: 5,
  },
  {
    name: 'Mike Chen',
    role: 'Web Developer',
    company: 'Freelance',
    avatar: '/avatars/mike.jpg',
    content: 'As a developer managing multiple client sites, OISSite\'s unified dashboard is exactly what I needed. The VPS performance is excellent, and the pricing is very competitive.',
    rating: 5,
  },
  {
    name: 'Jennifer Martinez',
    role: 'E-commerce Entrepreneur',
    company: 'Martinez Store',
    avatar: '/avatars/jennifer.jpg',
    content: 'The cloud hosting solution scaled perfectly with my growing online store. The 99.9% uptime guarantee gives me peace of mind, and the performance is outstanding.',
    rating: 5,
  },
  {
    name: 'David Thompson',
    role: 'Marketing Agency Owner',
    company: 'Thompson Marketing',
    avatar: '/avatars/david.jpg',
    content: 'We host over 50 client websites with OISSite. The reliability is unmatched, and their support team understands our needs. Highly recommended for agencies.',
    rating: 5,
  },
  {
    name: 'Lisa Wang',
    role: 'Blogger',
    company: 'Tech Blog',
    avatar: '/avatars/lisa.jpg',
    content: 'The shared hosting plan is perfect for my blog. Fast loading times, easy WordPress installation, and great value for money. Customer service is top-notch.',
    rating: 5,
  },
  {
    name: 'Robert Davis',
    role: 'Startup Founder',
    company: 'TechStart Inc.',
    avatar: '/avatars/robert.jpg',
    content: 'OISSite helped us launch our startup website quickly and affordably. The scalability options mean we can grow without switching providers. Excellent service!',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience with OISSite.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Rating */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-sm text-muted-foreground">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-sm">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span>4.9/5 average rating</span>
            </div>
            <div>50,000+ satisfied customers</div>
            <div>99.9% uptime guarantee</div>
          </div>
        </div>
      </div>
    </section>
  )
}
