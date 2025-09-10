import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const faqs = [
  {
    question: "How quickly will I get a response?",
    answer: "Live chat responses are typically within 2 minutes, email support within 2 hours, and phone support is immediate during business hours."
  },
  {
    question: "What information should I include in my support ticket?",
    answer: "Please include your domain name, hosting account details, a clear description of the issue, and any error messages you're seeing."
  },
  {
    question: "Do you provide phone support?",
    answer: "Yes, we provide 24/7 phone support for all customers. You can find our phone numbers on the contact page."
  },
  {
    question: "Can I get help with website development?",
    answer: "We provide support for our hosting services and can help with basic configuration, but we don't provide custom website development services."
  },
  {
    question: "What if I need urgent assistance?",
    answer: "For urgent issues, please use our live chat or phone support for immediate assistance. Email support is best for non-urgent questions."
  },
  {
    question: "Is there a limit to support requests?",
    answer: "No, there's no limit to the number of support requests you can submit. We're here to help with all your hosting and domain needs."
  }
]

export function SupportContactFAQ() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Support FAQ
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Common questions about our support services.
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
