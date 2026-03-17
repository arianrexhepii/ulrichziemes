import { Baby, GraduationCap, Briefcase, Crown, Globe, Star, Award, Gem, BookOpen, Clock } from "lucide-react";
import ChapterDivider from "./ChapterDivider";

import BookChapter from "./BookChapter";
import { motion } from "framer-motion";

// const chapters = [
//   {
//     year: "1975",
//     title: "Where It All Began",
//     description:
//       "Born in a small town in southern Germany. Surrounded by wheat fields and church bells, the seeds of curiosity and ambition were planted early. A childhood filled with wonder, exploration, and the first sparks of a dream far bigger than the village boundaries.",
//     icon: <Baby className="h-6 w-6" />,
//     imageUrl: childhoodImg,
//     layout: "split-right" as const,
//     highlight: "The beginning of an extraordinary journey",
//     photos: [
//       { src: childhoodBg, caption: "The golden wheat fields of my hometown", size: "large" as const },
//       { src: childhoodImg, caption: "Long evenings lost in books and dreams" },
//       { src: educationImg, caption: "The curiosity that started it all" },
//     ],
//   },
//   {
//     year: "1990",
//     title: "A Hunger for Knowledge",
//     description:
//       "Excelled in school and discovered a passion for business and international relations. Won regional academic competitions and earned a scholarship to study at one of Germany's most prestigious universities. The lecture halls of history became a second home.",
//     icon: <GraduationCap className="h-6 w-6" />,
//     imageUrl: educationImg,
//     layout: "full-bleed" as const,
//   },
//   {
//     year: "1997",
//     title: "First Steps in the Business World",
//     description:
//       "Joined a leading German corporation and quickly rose through the ranks. The combination of sharp intellect and tireless work ethic caught the attention of senior executives and industry leaders alike. Three promotions in just two years set the stage for what was to come.",
//     icon: <Briefcase className="h-6 w-6" />,
//     imageUrl: careerImg,
//     layout: "split-left" as const,
//     highlight: "Promoted three times in just two years",
//   },
//   {
//     year: "2003",
//     title: "Meeting the Chancellors",
//     description:
//       "Invited to exclusive policy roundtables in Berlin. Had the honor of meeting Chancellor Gerhard Schröder and later Angela Merkel, discussing economic reform and Germany's role in the global economy. These conversations shaped not just policy, but a personal vision for the future.",
//     icon: <Crown className="h-6 w-6" />,
//     imageUrl: careerImg,
//     layout: "photo-book" as const,
//     highlight: "Private dinner with Angela Merkel at the Chancellery",
//     photos: [
//       { src: conferenceImg, caption: "At the podium — addressing leaders from 40 nations", size: "large" as const },
//       { src: careerImg, caption: "The Chancellery dinner, Berlin 2003" },
//       { src: careerImg, caption: "Behind the scenes at the policy roundtable" },
//       { src: empireImg, caption: "The Berlin office where it all happened" },
//     ],
//   },
//   {
//     year: "2008",
//     title: "Building an Empire",
//     description:
//       "Founded a multinational consulting firm with offices in Munich, Berlin, and Frankfurt. The firm quickly became a go-to advisor for Fortune 500 companies entering the European market. From a single desk to a hundred employees — built on vision and relentless execution.",
//     icon: <Globe className="h-6 w-6" />,
//     imageUrl: empireImg,
//     layout: "split-right" as const,
//   },
//   {
//     year: "2012",
//     title: "The VIP Circle",
//     description:
//       "Became a regular at the Munich Security Conference and Davos World Economic Forum. Built deep relationships with captains of industry, diplomats, and cultural icons across Germany and Europe. Every handshake opened a new door; every conversation planted a new seed.",
//     icon: <Star className="h-6 w-6" />,
//     imageUrl: conferenceImg,
//     layout: "full-bleed" as const,
//     highlight: "Keynote speaker at the Munich Security Conference",
//     photos: [
//       { src: careerImg, caption: "Gala dinner with European heads of state", size: "large" as const },
//       { src: conferenceImg, caption: "Munich Security Conference keynote" },
//       { src: futureImg, caption: "Roundtable with industry leaders" },
//     ],
//   },
//   {
//     year: "2018",
//     title: "Recognition & Legacy",
//     description:
//       "Received the Federal Cross of Merit for outstanding contributions to Germany's economic development. Published a bestselling autobiography that inspired a new generation of entrepreneurs. The accolade was not just personal — it was a tribute to everyone who believed along the way.",
//     icon: <Award className="h-6 w-6" />,
//     imageUrl: awardImg,
//     layout: "photo-book" as const,
//   },
//   {
//     year: "2024",
//     title: "A New Chapter",
//     description:
//       "Today, the journey continues. Mentoring young leaders, advising governments, and building bridges between cultures. Every chapter of this story was written with passion, and the best pages are yet to come. The pen is still in hand.",
//     icon: <Gem className="h-6 w-6" />,
//     imageUrl: futureImg,
//     layout: "centered" as const,
//     highlight: "The story is far from over...",
//   },
// ];

const Timeline = () => {
  return (
    <section>
      <div className="py-32 px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.5em] text-primary mb-6">
          The Story
        </p>
        <h2 className="text-4xl md:text-6xl font-black text-foreground leading-tight">
          From Childhood Dreams<br />
          <span className="text-gold-gradient">to the World Stage</span>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground font-light max-w-xl mx-auto">
          Many chapters. One life. Scroll through the pages of an extraordinary journey.
        </p>
      </div>

      {/* {chapters.map((chapter, index) => (
        <div key={chapter.year}>
          <ChapterDivider /> 
          <BookChapter chapterNumber={index + 1} {...chapter} /> 
        </div>
      ))} */}

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-16 text-center"
      >
        <div className="inline-flex flex-col items-center bg-card/80 backdrop-blur-md border border-primary/20 rounded-2xl px-12 py-10 glow-gold">
          <Clock className="w-10 h-10 text-primary animate-pulse-gold mb-4" />
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-2">
            Coming Soon
          </h3>
          <p className="font-body text-muted-foreground max-w-md leading-relaxed">
            The full story is being written. Each chapter will be revealed with photos, memories, and the moments that shaped a life.
          </p>
          <div className="mt-6 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-primary/60" />
            <span className="font-body text-sm text-primary/60 uppercase tracking-widest">
              Stay Tuned
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Timeline;
