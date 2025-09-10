import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const faqs = [
  {
    question: "How do I contact support?",
    answer: "You can contact our support team 24/7 through live chat, email, or phone. Visit our contact page for all available support channels."
  },
  {
    question: "What are your support hours?",
    answer: "We provide 24/7 support for all customers. Our support team is available around the clock to help with any issues."
  },
  {
    question: "How quickly will I get a response?",
    answer: "Live chat responses are typically within 2 minutes, email support within 2 hours, and phone support is immediate during business hours."
  },
  {
    question: "Do you provide phone support?",
    answer: "Yes, we provide phone support for all customers. You can find our phone numbers on the contact page."
  },
  {
    question: "Can I get help with third-party applications?",
    answer: "We provide support for our hosting services and can help with basic configuration of popular applications like WordPress, but we don't provide support for third-party software issues."
  },
  {
    question: "Is there a knowledge base I can search?",
    answer: "Yes, we have a comprehensive knowledge base with hundreds of articles, tutorials, and guides that you can search through."
  }
]

export function SupportHelpFAQ() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Quick answers to common support questions.
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
