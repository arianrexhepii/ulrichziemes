import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export interface GalleryPhoto {
  src: string;
  caption?: string;
  size?: "small" | "medium" | "large";
}

interface PhotoGalleryProps {
  photos: GalleryPhoto[];
}

const sizeClasses = {
  small: "col-span-1 row-span-1",
  medium: "col-span-1 md:col-span-1 row-span-1",
  large: "col-span-1 md:col-span-2 row-span-1 md:row-span-2",
};

const PhotoGallery = ({ photos }: PhotoGalleryProps) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const goNext = () =>
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % photos.length : null));
  const goPrev = () =>
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + photos.length) % photos.length : null));

  return (
    <>
      {/* Magazine-style masonry grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[260px]">
        {photos.map((photo, index) => {
          const size = photo.size || (index === 0 ? "large" : "medium");
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${sizeClasses[size]} relative group cursor-pointer overflow-hidden rounded-lg`}
              onClick={() => openLightbox(index)}
            >
              <img
                src={photo.src}
                alt={photo.caption || `Photo ${index + 1}`}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Hover overlay with caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                {photo.caption && (
                  <p className="text-sm text-foreground font-light leading-snug">
                    {photo.caption}
                  </p>
                )}
              </div>
              {/* Subtle border */}
              <div className="absolute inset-0 rounded-lg ring-1 ring-primary/5 group-hover:ring-primary/20 transition-all" />
            </motion.div>
          );
        })}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-50 h-10 w-10 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Nav buttons */}
            {photos.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); goPrev(); }}
                  className="absolute left-4 md:left-8 z-50 h-12 w-12 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); goNext(); }}
                  className="absolute right-4 md:right-8 z-50 h-12 w-12 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl max-h-[80vh] px-16 flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={photos[lightboxIndex].src}
                alt={photos[lightboxIndex].caption || ""}
                className="max-h-[70vh] w-auto rounded-lg shadow-2xl object-contain"
              />
              {photos[lightboxIndex].caption && (
                <p className="mt-4 text-center text-secondary-foreground font-light text-lg max-w-xl">
                  {photos[lightboxIndex].caption}
                </p>
              )}
              <p className="mt-2 text-xs text-muted-foreground">
                {lightboxIndex + 1} / {photos.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PhotoGallery;
