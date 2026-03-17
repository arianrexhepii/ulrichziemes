import { motion } from "framer-motion";

const QuoteSection = () => {
  return (
    <section className="py-32 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-4xl text-center"
      >
        <div className="text-5xl text-primary mb-6">"</div>
        <blockquote className="text-2xl md:text-4xl font-light italic text-foreground leading-relaxed">
          My role is simple: to build the stage, create the space, 
          and give people the opportunity to shine in their own unique way.
        </blockquote>
        <div className="mt-8 h-px w-16 bg-primary mx-auto" />
      </motion.div>
    </section>
  );
};

export default QuoteSection;
