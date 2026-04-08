import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

const clients = [
  { name: "Dabur", logo: "/logos/dabur.png" },
  { name: "Perfetti Van Melle", logo: "/logos/perfetti.png" },
  { name: "Reckitt Benckiser", logo: "/logos/reckitt.png" },
  { name: "Cadbury", logo: "/logos/cadburry.png" },
  { name: "Hindustan Unilever", logo: "/logos/hul.png" },
  { name: "Marico", logo: "/logos/marico.png" },
  { name: "Britannia", logo: "/logos/birtannia.png" },
  { name: "parle", logo: "/logos/parle.png" },
];

export default function Clients() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold tracking-tight uppercase mb-4">{t('clients.title')}</h2>
          <div className="h-1 w-12 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-12 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex justify-center p-4"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-114 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-24 p-12 rounded-3xl bg-muted/50 border border-border flex flex-col md:flex-row items-center justify-between gap-8">
          <h3 className="text-3xl font-bold tracking-tight text-center md:text-left">
            {t('clients.cta')} <br />
            <span className="text-primary">{t('clients.ctaAccent')}</span>
          </h3>
          <button className="h-14 px-10 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:shadow-lg hover:shadow-primary/20 transition-all uppercase">
            {t('clients.contactUs')}
          </button>
        </div>
      </div>
    </section>
  );
}
