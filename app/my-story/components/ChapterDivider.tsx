import { motion } from "framer-motion";

const ChapterDivider = ({ text }: { text?: string }) => (
  <div className="py-16 flex items-center justify-center gap-6 px-6">
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent to-primary/30 origin-right"
    />
    {text ? (
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-xs uppercase tracking-[0.5em] text-muted-foreground"
      >
        {text}
      </motion.span>
    ) : (
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-primary text-lg"
      >
        ✦
      </motion.span>
    )}
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="h-px flex-1 max-w-[120px] bg-gradient-to-l from-transparent to-primary/30 origin-left"
    />
  </div>
);

export default ChapterDivider;
