import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      title: t('services.manufacturer'),
      image: "/services/manufacturer.jfif",
      description: t('services.manufacturerDesc')
    },
    {
      title: t('services.warehouse'),
      image: "/services/warehouse.jpg",
      description: t('services.warehouseDesc')
    },
    {
      title: t('services.distributors'),
      image: "/services/Distributor.jfif",
      description: t('services.distributorsDesc')
    },
    {
      title: t('services.carrier'),
      image: "/services/carrier.jfif",
      description: t('services.carrierDesc')
    },
    {
      title: t('services.retailers'),
      image: "services/retailer.jpg",
      description: t('services.retailersDesc')
    }
  ];

  const categories = [
    t('services.categories.food'), 
    t('services.categories.beverages'), 
    t('services.categories.personal'), 
    t('services.categories.dry'), 
    t('services.categories.baby'), 
    t('services.categories.cosmetics'),
    t('services.categories.home'), 
    t('services.categories.health'), 
    t('services.categories.toiletries')
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4 uppercase">{t('services.title')}</h2>
          <div className="h-1.5 w-24 bg-primary rounded-full" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden group cursor-pointer border-none shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold tracking-tight mb-12 uppercase">{t('services.segmentation')}</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat, index) => (
              <motion.div
                key={cat}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Badge variant="secondary" className="px-6 py-3 text-sm font-bold bg-background shadow-sm hover:bg-primary hover:text-primary-foreground transition-all cursor-default">
                  {cat}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
