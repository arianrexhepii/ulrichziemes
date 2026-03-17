import { motion } from "framer-motion";
import { ReactNode } from "react";
import PhotoGallery, { type GalleryPhoto } from "./PhotoGallery";

type ChapterLayout = "full-bleed" | "split-left" | "split-right" | "photo-book" | "centered";

export interface BookChapterProps {
  chapterNumber: number;
  year: string;
  title: string;
  description: string;
  highlight?: string;
  icon?: ReactNode;
  imageUrl: string;
  layout: ChapterLayout;
  photos?: GalleryPhoto[];
}

const BookChapter = ({
  chapterNumber,
  year,
  title,
  description,
  highlight,
  icon,
  imageUrl,
  layout,
  photos,
}: BookChapterProps) => {
  const hasGallery = photos && photos.length > 0;

  if (layout === "full-bleed") {
    return (
      <section className="relative overflow-hidden">
        <div className="relative min-h-screen flex items-end">
          <div className="absolute inset-0">
            <motion.img
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              src={imageUrl}
              alt={title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
          </div>
          <div className="relative z-10 px-6 md:px-16 pb-20 pt-40 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <ChapterLabel number={chapterNumber} year={year} />
              <h2 className="mt-4 text-4xl md:text-6xl font-black text-foreground leading-tight">
                {title}
              </h2>
              <p className="mt-6 text-lg md:text-xl text-secondary-foreground font-light leading-relaxed max-w-2xl">
                {description}
              </p>
              {highlight && <Highlight text={highlight} />}
            </motion.div>
          </div>
        </div>
        {hasGallery && (
          <div className="px-6 md:px-16 py-16">
            <PhotoGallery photos={photos} />
          </div>
        )}
      </section>
    );
  }

  if (layout === "split-left" || layout === "split-right") {
    const imgLeft = layout === "split-left";
    return (
      <section className="overflow-hidden">
        <div className="min-h-screen flex flex-col md:flex-row items-stretch">
          <motion.div
            initial={{ opacity: 0, x: imgLeft ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className={`md:w-1/2 min-h-[50vh] md:min-h-screen relative ${imgLeft ? "md:order-1" : "md:order-2"}`}
          >
            <img src={imageUrl} alt={title} className="absolute inset-0 h-full w-full object-cover" />
            <div className={`absolute inset-0 bg-gradient-to-${imgLeft ? "r" : "l"} from-transparent to-background/30`} />
          </motion.div>

          <div className={`md:w-1/2 flex items-center px-8 md:px-16 py-20 ${imgLeft ? "md:order-2" : "md:order-1"}`}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-lg"
            >
              <ChapterLabel number={chapterNumber} year={year} />
              <h2 className="mt-4 text-3xl md:text-5xl font-black text-foreground leading-tight">
                {title}
              </h2>
              <div className="mt-4 h-px w-16 bg-primary" />
              <p className="mt-6 text-lg text-secondary-foreground font-light leading-relaxed">
                {description}
              </p>
              {highlight && <Highlight text={highlight} />}
              {icon && (
                <div className="mt-8 flex h-14 w-14 items-center justify-center rounded-full border border-primary/30 text-primary">
                  {icon}
                </div>
              )}
            </motion.div>
          </div>
        </div>
        {hasGallery && (
          <div className="px-6 md:px-16 py-16">
            <PhotoGallery photos={photos} />
          </div>
        )}
      </section>
    );
  }

  if (layout === "photo-book") {
    return (
      <section className="py-24 px-6 md:px-16 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <ChapterLabel number={chapterNumber} year={year} centered />
            <h2 className="mt-4 text-3xl md:text-5xl font-black text-foreground leading-tight">
              {title}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-7 relative group"
            >
              <img
                src={imageUrl}
                alt={title}
                className="w-full rounded-lg shadow-2xl object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 rounded-lg ring-1 ring-primary/10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="md:col-span-5 md:pl-8"
            >
              <div className="border-l-2 border-primary/30 pl-6">
                <p className="text-lg text-secondary-foreground font-light leading-relaxed">
                  {description}
                </p>
                {highlight && <Highlight text={highlight} />}
              </div>
            </motion.div>
          </div>

          {hasGallery && (
            <div className="mt-16">
              <PhotoGallery photos={photos} />
            </div>
          )}
        </div>
      </section>
    );
  }

  // centered layout
  return (
    <section className="py-32 px-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
      >
        <ChapterLabel number={chapterNumber} year={year} centered />
        <h2 className="mt-4 text-3xl md:text-5xl font-black text-foreground leading-tight">
          {title}
        </h2>
        <p className="mt-6 text-lg text-secondary-foreground font-light leading-relaxed">
          {description}
        </p>
        {highlight && <Highlight text={highlight} />}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-12 max-w-5xl mx-auto"
      >
        <img
          src={imageUrl}
          alt={title}
          className="w-full rounded-xl shadow-2xl object-cover aspect-video"
        />
      </motion.div>
      {hasGallery && (
        <div className="mt-16 max-w-6xl mx-auto">
          <PhotoGallery photos={photos} />
        </div>
      )}
    </section>
  );
};

const ChapterLabel = ({ number, year, centered }: { number: number; year: string; centered?: boolean }) => (
  <div className={`flex items-center gap-4 ${centered ? "justify-center" : ""}`}>
    <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary">
      Chapter {String(number).padStart(2, "0")}
    </span>
    <span className="h-px w-8 bg-primary/40" />
    <span className="text-xs tracking-[0.2em] text-muted-foreground">{year}</span>
  </div>
);

const Highlight = ({ text }: { text: string }) => (
  <p className="mt-5 inline-block rounded-sm border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary italic">
    ✦ {text}
  </p>
);

export default BookChapter;
