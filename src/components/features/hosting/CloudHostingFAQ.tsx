import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const faqs = [
  {
    question: "What is cloud hosting?",
    answer: "Cloud hosting uses multiple servers working together to host your website or application. This provides better reliability, scalability, and performance compared to traditional hosting."
  },
  {
    question: "How does auto-scaling work?",
    answer: "Auto-scaling automatically adjusts your server resources based on traffic and demand. When traffic increases, more resources are allocated. When traffic decreases, resources are scaled down to save costs."
  },
  {
    question: "What is a CDN and why do I need it?",
    answer: "A CDN (Content Delivery Network) is a network of servers distributed globally that cache your website content. This reduces loading times for visitors worldwide by serving content from the server closest to them."
  },
  {
    question: "Can I upgrade my cloud plan?",
    answer: "Yes, you can easily upgrade your cloud hosting plan at any time. Our auto-scaling technology makes upgrades seamless with minimal to no downtime."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We provide 24/7 support for all cloud hosting plans. Our support team can help with configuration, troubleshooting, and optimization of your cloud infrastructure."
  },
  {
    question: "Is there a money-back guarantee?",
    answer: "Yes, we offer a 30-day money-back guarantee on all our cloud hosting plans. If you're not satisfied, you can cancel within 30 days for a full refund."
  }
]

export function CloudHostingFAQ() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Cloud Hosting FAQ
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about our cloud hosting services.
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
