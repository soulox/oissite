import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const faqs = [
  {
    question: "What is an SSL certificate?",
    answer: "An SSL certificate is a digital certificate that authenticates the identity of a website and enables an encrypted connection. It's essential for securing data transmission between your website and visitors."
  },
  {
    question: "Do I need an SSL certificate?",
    answer: "Yes, SSL certificates are essential for any website that handles sensitive information, including login forms, payment processing, or personal data. They also improve SEO rankings and user trust."
  },
  {
    question: "Is the free SSL certificate secure?",
    answer: "Yes, our free SSL certificates use Let's Encrypt, which provides the same level of encryption as paid certificates. They're trusted by all major browsers and search engines."
  },
  {
    question: "How do I install an SSL certificate?",
    answer: "SSL certificates are automatically installed with all our hosting plans. For custom installations, our support team can help you set it up through our control panel."
  },
  {
    question: "Do SSL certificates expire?",
    answer: "Yes, SSL certificates have expiration dates. Our free SSL certificates expire every 90 days but are automatically renewed. Premium certificates typically last 1-3 years."
  },
  {
    question: "Can I use SSL with multiple domains?",
    answer: "Yes, you can secure multiple domains and subdomains with a single SSL certificate. Our premium plans include multi-domain and wildcard certificate options."
  }
]

export function SSLServiceFAQ() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            SSL Certificate FAQ
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about SSL certificates.
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
      </div>
    </section>
  )
}
