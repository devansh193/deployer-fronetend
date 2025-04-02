import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "How quickly can I deploy my first project?",
    answer:
      "You can deploy your first project in under 5 minutes. Simply connect your Git repository, and we'll automatically build and deploy your project. Each time you push to your repository, we'll automatically deploy your changes.",
  },
  {
    question: "Can I use custom domains with DeployNow?",
    answer:
      "Yes, you can connect custom domains to your deployments. We provide automatic HTTPS certificates via Let's Encrypt, and you can manage your domains directly from our dashboard.",
  },
  {
    question: "What technologies and frameworks do you support?",
    answer:
      "We support a wide range of technologies including React, Vue, Angular, Next.js, Nuxt, Gatsby, and many more. We also support backend technologies like Node.js, Python, Ruby, and Go.",
  },
  {
    question: "How does the global edge network work?",
    answer:
      "Our global edge network consists of servers located in strategic locations around the world. When a user visits your site, they are automatically routed to the nearest edge server, which significantly reduces latency and improves load times.",
  },
  {
    question: "Can I scale my application automatically?",
    answer:
      "Yes, our platform automatically scales your application based on traffic. You don't need to worry about provisioning additional servers or managing infrastructure as your traffic grows.",
  },
  {
    question: "How do preview deployments work?",
    answer:
      "When you open a pull request in your Git repository, we automatically create a preview deployment with a unique URL. This allows you to test and share your changes before merging them into your main branch.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="relative mx-auto max-w-7xl px-4 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="font-geist mb-4 text-3xl font-bold text-gray-200 md:text-4xl">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-gray-400">
            Find answers to common questions about our platform.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-gray-800"
              >
                <AccordionTrigger className="hover:text-gradient text-left text-white hover:cursor-pointer">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4 text-gray-400">
            Don&apos;t see your question here?
          </p>
          <Button
            variant="outline"
            className="font-geist bg-white font-medium text-black"
          >
            Contact Support
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
