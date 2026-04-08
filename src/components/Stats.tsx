import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

export default function Stats() {
  const { t } = useTranslation();

  const stats = [
    { label: t('stats.warehouse'), value: "9" },
    { label: t('stats.customers'), value: "1Lk+" },
    { label: t('stats.distributors'), value: "452" },
    { label: t('stats.profit'), value: "60%" },
  ];

  return (
    <section className="py-20 bg-primary text-primary-foreground overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full border-[40px] border-white" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full border-[40px] border-white" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-6xl font-black mb-2 tracking-tighter">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm font-bold tracking-[0.2em] opacity-80 uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center max-w-[900px] mx-auto"
        >
          <p className="text-xl md:text-3xl font-medium leading-relaxed">
            {t('stats.expansion')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
