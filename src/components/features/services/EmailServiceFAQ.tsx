import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const faqs = [
  {
    question: "What is email hosting?",
    answer: "Email hosting is a service that provides you with professional email addresses using your own domain name, along with features like spam protection, mobile sync, and webmail access."
  },
  {
    question: "How many email accounts can I create?",
    answer: "The number of email accounts depends on your plan. Our starter plan includes 5 accounts, professional plan includes 25 accounts, and enterprise plan includes unlimited accounts."
  },
  {
    question: "Can I access my email on mobile devices?",
    answer: "Yes, all our email plans include mobile sync support. You can access your email on smartphones, tablets, and other mobile devices using IMAP or POP3."
  },
  {
    question: "Is spam protection included?",
    answer: "Yes, all our email plans include spam protection. Our advanced plans include enhanced spam filtering and security features."
  },
  {
    question: "Can I use my own domain for email?",
    answer: "Yes, you can use your own domain name for email addresses. For example, if your domain is example.com, you can create email addresses like info@example.com or sales@example.com."
  },
  {
    question: "What is the storage limit?",
    answer: "Storage limits vary by plan. Our starter plan includes 10 GB, professional plan includes 50 GB, and enterprise plan includes 100 GB of storage per account."
  }
]

export function EmailServiceFAQ() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Email Hosting FAQ
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about email hosting.
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
