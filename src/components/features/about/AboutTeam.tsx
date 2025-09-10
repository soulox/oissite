import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Linkedin, Twitter, Mail } from 'lucide-react'

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    bio: 'Passionate about making web hosting accessible to everyone. 10+ years in the hosting industry.',
    avatar: '/team/sarah.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/sarahjohnson',
      twitter: 'https://twitter.com/sarahjohnson',
      email: 'sarah@oissite.com',
    },
  },
  {
    name: 'Mike Chen',
    role: 'CTO',
    bio: 'Technology visionary with expertise in cloud infrastructure and scalable systems.',
    avatar: '/team/mike.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/mikechen',
      twitter: 'https://twitter.com/mikechen',
      email: 'mike@oissite.com',
    },
  },
  {
    name: 'Jennifer Martinez',
    role: 'Head of Customer Success',
    bio: 'Dedicated to ensuring every customer has an exceptional experience with our services.',
    avatar: '/team/jennifer.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/jennifermartinez',
      twitter: 'https://twitter.com/jennifermartinez',
      email: 'jennifer@oissite.com',
    },
  },
  {
    name: 'David Thompson',
    role: 'Head of Engineering',
    bio: 'Expert in building robust, secure, and high-performance hosting infrastructure.',
    avatar: '/team/david.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/davidthompson',
      twitter: 'https://twitter.com/davidthompson',
      email: 'david@oissite.com',
    },
  },
  {
    name: 'Lisa Wang',
    role: 'Head of Marketing',
    bio: 'Creative marketer focused on helping businesses discover the power of great hosting.',
    avatar: '/team/lisa.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/lisawang',
      twitter: 'https://twitter.com/lisawang',
      email: 'lisa@oissite.com',
    },
  },
  {
    name: 'Robert Davis',
    role: 'Head of Support',
    bio: 'Leading our support team to provide world-class customer service 24/7.',
    avatar: '/team/robert.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/robertdavis',
      twitter: 'https://twitter.com/robertdavis',
      email: 'robert@oissite.com',
    },
  },
]

export function AboutTeam() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Meet Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The passionate people behind OISSite, dedicated to providing you with the best hosting experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Avatar className="mx-auto h-24 w-24 mb-4">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback className="text-lg">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <CardDescription className="text-primary font-medium">
                  {member.role}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {member.bio}
                </p>
                <div className="flex justify-center gap-3">
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Want to join our team? We're always looking for talented individuals who share our passion for great hosting.
          </p>
          <a 
            href="/careers" 
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          >
            View Open Positions
          </a>
        </div>
      </div>
    </section>
  )
}
