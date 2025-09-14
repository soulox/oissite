import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const faqs = [
  {
    question: 'What is the difference between shared, VPS, and cloud hosting?',
    answer: 'Shared hosting is the most affordable option where multiple websites share server resources. VPS hosting provides dedicated resources within a virtual environment, offering better performance and control. Cloud hosting uses multiple servers working together, providing the highest scalability and reliability.',
  },
  {
    question: 'Do you offer a money-back guarantee?',
    answer: 'Yes, we offer a 30-day money-back guarantee on all our hosting plans. If you\'re not satisfied with our service, you can cancel within 30 days and receive a full refund.',
  },
  {
    question: 'What kind of support do you provide?',
    answer: 'We provide 24/7 expert support via live chat, phone, and email. Our support team is available around the clock to help you with any hosting-related questions or issues.',
  },
  {
    question: 'Can I upgrade or downgrade my hosting plan?',
    answer: 'Yes, you can upgrade or downgrade your hosting plan at any time. Upgrades take effect immediately, while downgrades take effect at your next billing cycle.',
  },
  {
    question: 'Do you provide free SSL certificates?',
    answer: 'Yes, all our hosting plans include free SSL certificates. We also provide automatic SSL certificate installation and renewal.',
  },
  {
    question: 'What is your uptime guarantee?',
    answer: 'We guarantee 99.9% uptime for all our hosting services. If we fail to meet this guarantee, we provide service credits as compensation.',
  },
  {
    question: 'Can I host multiple websites on one account?',
    answer: 'This depends on your hosting plan. Shared hosting typically allows one website, while VPS and cloud hosting plans allow multiple websites. Check the specific features of each plan for details.',
  },
  {
    question: 'Do you provide website migration services?',
    answer: 'Yes, we offer free website migration services for new customers. Our team will help you transfer your website from your current host to OISSite at no additional cost.',
  },
  {
    question: 'What backup options do you provide?',
    answer: 'We provide automated daily backups for all hosting plans. You can also create manual backups through your control panel. Cloud hosting plans include additional backup options and longer retention periods.',
  },
  {
    question: 'Can I install WordPress and other applications?',
    answer: 'Yes, all our hosting plans support one-click installation of popular applications including WordPress, Joomla, Drupal, and many others through our control panel.',
  },
]

export function HostingFAQ() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about our hosting services.
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
