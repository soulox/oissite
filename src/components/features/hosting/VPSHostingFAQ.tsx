import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const faqs = [
  {
    question: "What is VPS hosting?",
    answer: "VPS (Virtual Private Server) hosting provides you with dedicated resources on a virtualized server. You get the benefits of dedicated hosting at a fraction of the cost, with full root access and complete control over your server environment."
  },
  {
    question: "Do I get root access with VPS hosting?",
    answer: "Yes! All our VPS plans include full root access, allowing you to install any software, configure your server exactly as needed, and have complete control over your hosting environment."
  },
  {
    question: "What operating systems are available?",
    answer: "We offer a wide range of operating systems including Ubuntu, CentOS, Debian, and Windows Server. You can choose your preferred OS during the setup process."
  },
  {
    question: "Can I upgrade my VPS plan later?",
    answer: "Yes, you can easily upgrade your VPS resources at any time. We offer seamless upgrades for CPU, RAM, and storage without any downtime."
  },
  {
    question: "What kind of support do you provide for VPS?",
    answer: "We provide 24/7 support for all VPS plans. Our support team can help with server configuration, troubleshooting, and general VPS management questions."
  },
  {
    question: "Is there a money-back guarantee?",
    answer: "Yes, we offer a 30-day money-back guarantee on all our VPS hosting plans. If you're not satisfied, you can cancel within 30 days for a full refund."
  }
]

export function VPSHostingFAQ() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            VPS Hosting FAQ
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about our VPS hosting services.
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
