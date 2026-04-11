import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

const productCategories = [
  {
    name: "FMCG Products",
    description: "Fast-moving consumer goods including snacks, beverages, and daily essentials.",
    items: ["Biscuits", "Chips", "Soft Drinks", "Tea & Coffee", "Spices"],
    image: "/products/fmcg.jpg"
  },
  {
    name: "Personal Care",
    description: "Hygiene and beauty products for all age groups.",
    items: ["Soaps", "Shampoos", "Toothpaste", "Lotions", "Sanitizers"],
    image: "/products/personal_care.jpeg"
  },
  {
    name: "Home Essentials",
    description: "Products for household maintenance and cleaning.",
    items: ["Detergents", "Floor Cleaners", "Dishwashers", "Air Fresheners"],
    image: "/products/2.jpeg"
  }
];

export default function Products() {
  const { t } = useTranslation();

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 uppercase">Products We Serve</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We bridge the gap between top manufacturers and local retailers, ensuring a wide range of quality products reach every corner.
          </p>
        </motion.div>

        <div className="grid gap-12">
          {productCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
            >
              <div className="flex-1 w-full">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="rounded-3xl shadow-2xl w-full h-[400px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl font-bold text-primary">{category.name}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {category.items.map(item => (
                    <Badge key={item} variant="outline" className="px-4 py-2 text-sm font-medium">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
