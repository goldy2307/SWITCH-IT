import { motion } from "motion/react";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "./ui/accordion";
import { Button } from "./ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left: About Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div>
              <h2 className="text-4xl font-bold tracking-tight mb-6 uppercase">{t('about.title')}</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>{t('about.p1')}</p>
                <p>{t('about.p2')}</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                t('about.point1'),
                t('about.point2'),
                t('about.point3'),
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm font-semibold">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  {item}
                </div>
              ))}
            </div>

            <Button className="w-fit h-12 px-8 gap-2">
              {t('about.learnMore')} <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>

          {/* Right: Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold tracking-tight mb-8 uppercase">{t('about.whyTitle')}</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b-0 mb-4 rounded-xl border px-4">
                <AccordionTrigger className="hover:no-underline py-6">
                  <span className="text-xl font-bold">{t('about.fmcgTitle')}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-lg pb-6">
                  {t('about.fmcgDesc')}
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border-b-0 mb-4 rounded-xl border px-4 bg-primary/5 border-primary/20">
                <AccordionTrigger className="hover:no-underline py-6">
                  <span className="text-xl font-bold">{t('about.intelTitle')}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-lg pb-6">
                  {t('about.intelDesc')}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-b-0 mb-4 rounded-xl border px-4">
                <AccordionTrigger className="hover:no-underline py-6">
                  <span className="text-xl font-bold">{t('about.streamTitle')}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-lg pb-6">
                  {t('about.streamDesc')}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>

        {/* Team/Testimonial Section from PDF */}
        <div className="mt-24 grid gap-12 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="/services/team.jfif" 
              alt="Our Team" 
              className="rounded-3xl shadow-xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 h-32 w-32 bg-primary/10 rounded-full -z-10" />
          </motion.div>
          <div className="relative">
            <span className="absolute -top-12 -left-8 text-[120px] font-serif text-primary/10 leading-none">"</span>
            <p className="text-2xl font-medium leading-relaxed text-muted-foreground italic relative z-10">
              {t('about.testimonial')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
