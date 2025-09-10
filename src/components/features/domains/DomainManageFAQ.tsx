import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const faqs = [
  {
    question: "How do I access my domain management panel?",
    answer: "You can access your domain management panel by logging into your OISSite account and navigating to the 'Domains' section. From there, you can select any of your domains to manage its settings."
  },
  {
    question: "Can I change my domain's DNS settings?",
    answer: "Yes, you have full control over your domain's DNS settings. You can add, edit, or delete DNS records including A, CNAME, MX, TXT, and other record types through our management interface."
  },
  {
    question: "How do I set up email forwarding?",
    answer: "Email forwarding can be set up in the domain management panel. Simply go to the 'Email Forwarding' section, add the email address you want to forward from, and specify the destination email address."
  },
  {
    question: "Can I create subdomains?",
    answer: "Yes, you can create unlimited subdomains for your domain. Use the 'Subdomain Manager' tool to create subdomains like blog.yourdomain.com, shop.yourdomain.com, etc."
  },
  {
    question: "Is domain management free?",
    answer: "Yes, all domain management tools are included free with your domain registration or transfer to OISSite. There are no additional fees for using our management features."
  },
  {
    question: "How do I enable domain privacy protection?",
    answer: "Domain privacy protection is automatically enabled for free on all domains registered with OISSite. This protects your personal information from being visible in WHOIS databases."
  }
]

export function DomainManageFAQ() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Domain Management FAQ
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about managing your domains.
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
