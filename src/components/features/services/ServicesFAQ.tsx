import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const faqs = [
  {
    question: 'What is an SSL certificate and why do I need one?',
    answer: 'An SSL certificate encrypts data between your website and visitors\' browsers, protecting sensitive information like passwords and credit card details. It also improves your SEO rankings and builds trust with visitors.',
  },
  {
    question: 'Do you provide free SSL certificates?',
    answer: 'Yes, we provide free SSL certificates with all our hosting plans. We also offer premium SSL certificates with additional features like wildcard support and extended validation.',
  },
  {
    question: 'How does email hosting work?',
    answer: 'Email hosting allows you to create professional email addresses using your domain name (e.g., info@yourdomain.com). We provide webmail access, spam protection, and mobile synchronization.',
  },
  {
    question: 'What backup options do you provide?',
    answer: 'We offer automated daily backups with easy restoration options. You can also create manual backups and access version history. Cloud hosting plans include additional backup features.',
  },
  {
    question: 'Can I use my own SSL certificate?',
    answer: 'Yes, you can install your own SSL certificate on our hosting plans. We also provide assistance with SSL certificate installation and configuration.',
  },
  {
    question: 'How many email accounts can I create?',
    answer: 'The number of email accounts depends on your hosting plan. Shared hosting typically includes 5-10 email accounts, while VPS and cloud hosting plans include more email accounts.',
  },
  {
    question: 'Do you provide email migration services?',
    answer: 'Yes, we offer email migration services to help you transfer your existing emails from your current provider to our email hosting service.',
  },
  {
    question: 'How often are backups performed?',
    answer: 'We perform automated daily backups for all hosting plans. You can also create manual backups at any time through your control panel.',
  },
  {
    question: 'Can I restore individual files from backups?',
    answer: 'Yes, you can restore individual files, folders, or your entire website from our backup system. We provide easy-to-use restoration tools in your control panel.',
  },
  {
    question: 'What support do you provide for these services?',
    answer: 'We provide 24/7 support for all our professional services. Our team can help you with SSL setup, email configuration, backup management, and any other service-related questions.',
  },
]

export function ServicesFAQ() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Services FAQ
            </h2>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about our professional services.
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
