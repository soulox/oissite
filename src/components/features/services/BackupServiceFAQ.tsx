import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const faqs = [
  {
    question: "What is included in the backup service?",
    answer: "Our backup service includes automated daily backups of your website files, databases, and configuration files. You can restore your website to any previous backup point with just a few clicks."
  },
  {
    question: "How often are backups created?",
    answer: "Backups are created daily by default, but you can customize the schedule. Our enterprise plan includes multiple daily backups for maximum protection."
  },
  {
    question: "How long are backups kept?",
    answer: "Backup retention varies by plan. Our starter plan keeps backups for 7 days, professional plan for 30 days, and enterprise plan for 90 days."
  },
  {
    question: "Can I restore individual files?",
    answer: "Yes, you can restore individual files, folders, or your entire website from any backup point. Our control panel makes it easy to select what you want to restore."
  },
  {
    question: "Are backups encrypted?",
    answer: "Yes, all backups are encrypted to protect your data. We use industry-standard encryption to ensure your backups are secure."
  },
  {
    question: "What happens if I need to restore my website?",
    answer: "You can restore your website from any backup point through our control panel. The process is simple and our support team can help if you need assistance."
  }
]

export function BackupServiceFAQ() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Backup Service FAQ
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about our backup services.
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
