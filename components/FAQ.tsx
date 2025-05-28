import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function FAQ() {
  return (
    <section id="faq" className="py-32 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-secondary/10 blur-2xl animate-float-delay" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-3xl mx-auto relative z-10"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent"
        >
          Frequently Asked Questions
        </motion.h2>

        <Accordion type="single" collapsible className="w-full space-y-2">
          {faqItems.map((item, index) => (
            <motion.div key={item.value} variants={itemVariants}>
              <AccordionItem
                value={item.value}
                className="border border-border/50 rounded-xl overflow-hidden bg-background/50 backdrop-blur-sm hover:bg-background/70 transition-colors"
              >
                <AccordionTrigger className="text-xl px-6 py-5 hover:no-underline group">
                  <div className="flex items-center space-x-4">
                    <span className="text-primary font-medium">{index + 1}.</span>
                    <span className="text-left font-medium group-hover:text-primary transition-colors">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground group-hover:text-primary transition-all duration-300 group-data-[state=open]:rotate-180" />
                </AccordionTrigger>
                <AccordionContent className="text-lg text-muted-foreground px-6 pb-6 pt-0">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.answer}
                  </motion.div>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
}

// FAQ data
const faqItems = [
  {
    value: "item-1",
    question: "How does Docket work?",
    answer:
      "Docket uses advanced AI to understand your application visually, just like a human would. It interprets natural language test descriptions and converts them into reliable, maintainable automated tests.",
  },
  {
    value: "item-2",
    question: "Do I need to write any code?",
    answer:
      "No! Docket is designed to be completely code-free. You describe your tests in plain English, and our AI handles the rest.",
  },
  {
    value: "item-3",
    question: "How reliable are the tests?",
    answer:
      "Docket's tests are highly reliable because they interact with your application the same way users do. Our AI continuously adapts to UI changes, maintaining test stability.",
  },
  {
    value: "item-4",
    question: "Can I integrate with my CI/CD pipeline?",
    answer:
      "Yes! Docket provides easy integration with popular CI/CD platforms. You can run tests automatically with each deployment.",
  },
];

// Add this to your global CSS
// @keyframes float {
//   0%, 100% { transform: translateY(0); }
//   50% { transform: translateY(-20px); }
// }
// .animate-float { animation: float 8s ease-in-out infinite; }
// .animate-float-delay { animation: float 8s ease-in-out 2s infinite; }