import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const faqs = [
  {
    question: 'What are your support hours?',
    answer: 'We provide 24/7 support through live chat, phone, and email. Our support team is available around the clock to help you with any issues or questions.',
  },
  {
    question: 'How quickly do you respond to support requests?',
    answer: 'Live chat responses are typically within 2 minutes, phone support is immediate, and email responses are within 4 hours. We prioritize urgent issues and provide faster response times for critical problems.',
  },
  {
    question: 'What types of issues can you help with?',
    answer: 'We can help with hosting setup, domain management, SSL certificates, email configuration, website migration, performance optimization, security issues, and any other technical problems related to our services.',
  },
  {
    question: 'Do you provide support for third-party applications?',
    answer: 'Yes, we provide support for popular applications like WordPress, Joomla, Drupal, and other CMS platforms. We can help with installation, configuration, and troubleshooting.',
  },
  {
    question: 'Can you help me migrate my website?',
    answer: 'Absolutely! We offer free website migration services for new customers. Our team will help you transfer your website, databases, and email accounts from your current host to OISSite.',
  },
  {
    question: 'What information should I provide when contacting support?',
    answer: 'Please provide your domain name, hosting account details, a description of the issue, any error messages you\'re seeing, and steps you\'ve already tried to resolve the problem.',
  },
  {
    question: 'Do you offer phone support?',
    answer: 'Yes, we provide 24/7 phone support for all customers. You can find our phone number in your account dashboard or contact us through our support portal.',
  },
  {
    question: 'Can I get help with website development?',
    answer: 'While we focus on hosting and server-related support, our team can provide guidance on basic website setup and configuration. For complex development work, we recommend consulting with a web developer.',
  },
  {
    question: 'What if I need help outside of business hours?',
    answer: 'Our support is available 24/7, so you can get help at any time. We have support staff working around the clock to assist you with any issues.',
  },
  {
    question: 'How can I track my support tickets?',
    answer: 'You can track your support tickets through your account dashboard or by logging into our support portal. You\'ll receive email notifications when there are updates to your tickets.',
  },
]

export function SupportFAQ() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Support FAQ
            </h2>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about our support services.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background rounded-lg border px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
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
