import { motion } from "motion/react";
import { Factory, Warehouse, Truck, UserCheck, Store } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Workflow() {
  const { t } = useTranslation();

  const steps = [
    {
      id: "01",
      title: t('workflow.manufacturer'),
      description: t('workflow.manufacturerDesc'),
      icon: Factory,
      color: "bg-blue-500/10 text-blue-600",
    },
    {
      id: "02",
      title: t('workflow.warehouse'),
      description: t('workflow.warehouseDesc'),
      icon: Warehouse,
      color: "bg-orange-500/10 text-orange-600",
    },
    {
      id: "03",
      title: t('workflow.distributors'),
      description: t('workflow.distributorsDesc'),
      icon: Truck,
      color: "bg-green-500/10 text-green-600",
    },
    {
      id: "04",
      title: t('workflow.carrier'),
      description: t('workflow.carrierDesc'),
      icon: UserCheck,
      color: "bg-purple-500/10 text-purple-600",
    },
    {
      id: "05",
      title: t('workflow.retailers'),
      description: t('workflow.retailersDesc'),
      icon: Store,
      color: "bg-red-500/10 text-red-600",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 uppercase">{t('workflow.title')}</h2>
          <p className="max-w-[800px] mx-auto text-muted-foreground">
            {t('workflow.description')}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-5 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 -z-10" />
          
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative mb-6">
                <div className="absolute -top-4 -left-4 text-4xl font-black text-muted/20 select-none group-hover:text-primary/10 transition-colors">
                  {step.id}
                </div>
                <div className={`h-20 w-20 rounded-2xl flex items-center justify-center shadow-sm border border-border group-hover:border-primary/50 transition-all duration-300 ${step.color} group-hover:scale-110`}>
                  <step.icon className="h-10 w-10" />
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2 tracking-tight">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
