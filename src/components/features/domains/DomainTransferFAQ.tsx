import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const faqs = [
  {
    question: "How much does it cost to transfer my domain?",
    answer: "Domain transfers to OISSite are completely free! There are no transfer fees or hidden costs. You only pay for the domain renewal at our competitive rates."
  },
  {
    question: "How long does a domain transfer take?",
    answer: "Domain transfers typically take 5-7 days to complete. The exact time depends on your current registrar's processing speed and your response to transfer confirmation emails."
  },
  {
    question: "Will my website be down during the transfer?",
    answer: "No, your website will remain online during the transfer process. We ensure minimal downtime and will work with you to maintain your website's availability."
  },
  {
    question: "What is an authorization code?",
    answer: "An authorization code (also called EPP code or transfer code) is a security code provided by your current registrar. You'll need this code to authorize the transfer to OISSite."
  },
  {
    question: "Can I transfer a domain that was recently registered?",
    answer: "Domains must be at least 60 days old before they can be transferred. This is a policy set by ICANN to prevent domain hijacking."
  },
  {
    question: "What happens to my email and DNS settings?",
    answer: "We'll help you migrate your DNS settings and email configuration to ensure a smooth transition. Our support team can assist with the entire process."
  }
]

export function DomainTransferFAQ() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Domain Transfer FAQ
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about transferring your domain to OISSite.
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
