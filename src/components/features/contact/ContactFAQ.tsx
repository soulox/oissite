import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const faqs = [
  {
    question: "How quickly do you respond to support requests?",
    answer: "We pride ourselves on fast response times. Live chat responses are typically under 2 minutes, email support within 2 hours, and phone support is immediate during business hours."
  },
  {
    question: "What support channels do you offer?",
    answer: "We offer multiple support channels including 24/7 live chat, email support, phone support, and a comprehensive help center with 500+ articles and tutorials."
  },
  {
    question: "Do you provide support for technical issues?",
    answer: "Yes! Our expert support team can help with technical issues including server configuration, website migration, SSL setup, email configuration, and much more."
  },
  {
    question: "Is there a charge for support?",
    answer: "No, all support is included free with your hosting plan. We don't charge extra for technical support, account assistance, or general inquiries."
  },
  {
    question: "Can you help with website migration?",
    answer: "Absolutely! We offer free website migration services to help you move your site from your current hosting provider to OISSite with minimal downtime."
  },
  {
    question: "What if I need help outside of business hours?",
    answer: "Our live chat and email support are available 24/7. For urgent technical issues, we have an on-call team that can assist you even during off-hours."
  },
  {
    question: "Do you offer phone support?",
    answer: "Yes, we provide phone support during business hours (Monday-Friday, 9 AM - 6 PM PST). For urgent issues, we also have an emergency support line."
  },
  {
    question: "Can you help with domain-related issues?",
    answer: "Yes, our support team can assist with domain registration, DNS configuration, domain transfers, SSL certificates, and other domain-related services."
  }
]

export function ContactFAQ() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get quick answers to common questions about our support and services.
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
            Still have questions? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact-form" 
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              Contact Us
            </a>
            <a 
              href="/support/help" 
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
            >
              Browse Help Center
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
