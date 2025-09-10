import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const faqs = [
  {
    question: "What is shared hosting?",
    answer: "Shared hosting is a type of web hosting where multiple websites share the same server resources. It's the most cost-effective hosting solution, perfect for personal websites, blogs, and small businesses that don't require dedicated server resources."
  },
  {
    question: "Is shared hosting right for my website?",
    answer: "Shared hosting is ideal for personal websites, blogs, small business sites, and portfolios. If you're just starting out or have moderate traffic, shared hosting provides excellent value and performance. For high-traffic websites or resource-intensive applications, consider VPS or dedicated hosting."
  },
  {
    question: "What's included with shared hosting?",
    answer: "Our shared hosting includes SSD storage, unlimited bandwidth, free SSL certificates, 24/7 support, 99.9% uptime guarantee, cPanel control panel, 1-click WordPress installation, automated backups, and professional email accounts."
  },
  {
    question: "Can I upgrade my hosting plan later?",
    answer: "Yes! You can easily upgrade your hosting plan at any time as your website grows. We offer seamless upgrades from shared hosting to VPS and cloud hosting without any downtime or data loss."
  },
  {
    question: "Do you offer a money-back guarantee?",
    answer: "Yes, we offer a 30-day money-back guarantee on all our shared hosting plans. If you're not satisfied with our service, you can cancel within 30 days for a full refund."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We provide 24/7 expert support via live chat, email, and phone. Our support team is knowledgeable about hosting, WordPress, and web development, and can help you with any questions or issues you may have."
  },
  {
    question: "Can I host multiple websites?",
    answer: "Yes, depending on your plan. Our Professional plan allows up to 5 websites, and our Business plan allows unlimited websites. Each plan includes the resources needed to host multiple sites effectively."
  },
  {
    question: "Do you provide SSL certificates?",
    answer: "Yes, we provide free SSL certificates for all our shared hosting plans. SSL certificates encrypt data between your website and visitors, improving security and SEO rankings."
  },
  {
    question: "What is your uptime guarantee?",
    answer: "We guarantee 99.9% uptime for all our shared hosting plans. This means your website should be accessible 99.9% of the time, with minimal downtime for maintenance and updates."
  },
  {
    question: "Can I install WordPress?",
    answer: "Yes! We offer 1-click WordPress installation for all shared hosting plans. You can also install other popular applications like Joomla, Drupal, and more through our cPanel control panel."
  }
]

export function SharedHostingFAQ() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about our shared hosting services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/support/contact" 
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              Contact Support
            </a>
            <a 
              href="/support/help" 
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
            >
              Help Center
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
