import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative overflow-hidden bg-background py-24 lg:py-32">
      {/* Background patterns */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,var(--color-primary)_0%,transparent_100%)] opacity-[0.03]" />
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
              {t('hero.badge')}
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl uppercase">
              {t('hero.title').split(t('hero.titleAccent'))[0]}
              <span className="text-primary">{t('hero.titleAccent')}</span>
              {t('hero.title').split(t('hero.titleAccent'))[1]}
            </h1>
            <p className="max-w-[600px] text-lg text-muted-foreground sm:text-xl">
              {t('hero.description')}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="h-12 px-8 text-lg gap-2">
                {t('hero.getStarted')} <ArrowRight className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-lg">
                {t('hero.ourServices')}
              </Button>
            </div>
            <div className="flex items-center gap-4 text-sm font-medium text-muted-foreground">
              <span>{t('hero.partnered')}</span>
              <span className="h-1 w-1 rounded-full bg-muted-foreground" />
              <span>{t('hero.managing')}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-square lg:aspect-auto lg:h-[600px]"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary/20 to-transparent" />
            <img
              src="services/main.jfif"
              alt="Logistics Hero"
              className="h-full w-full rounded-3xl object-cover shadow-2xl"
              referrerPolicy="no-referrer"
            />
            {/* Floating stats card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 rounded-2xl bg-background p-6 shadow-xl border border-border"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <div className="h-6 w-6 rounded-full bg-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold">1Lk+</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{t('hero.satisfied')}</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
