import { motion } from "motion/react";
import React, { useState } from "react";
import { Star, Quote } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

const initialReviews = [
  {
    name: "Rajesh Kumar",
    role: "Retailer, Indore",
    content: "Switch It has completely transformed my supply chain. I never have to worry about stockouts anymore.",
    rating: 5
  },
  {
    name: "Sneha Patel",
    role: "Distributor, Gujarat",
    content: "The transparency and speed of delivery are unmatched. Highly recommended for any B2B business.",
    rating: 5
  },
  {
    name: "Amit Sharma",
    role: "Manufacturer",
    content: "Their warehouse management is top-notch. It's a pleasure partnering with such a professional team.",
    rating: 4
  }
];

export default function Reviews() {
  const [reviews, setReviews] = useState(initialReviews);
  const [formData, setFormData] = useState({ name: "", role: "", content: "", rating: 5 });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setReviews([formData, ...reviews]);
        setSubmitted(true);
        setFormData({ name: "", role: "", content: "", rating: 5 });
        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 uppercase">
            Customer Reviews
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See what our partners and clients have to say about their experience with Switch It.
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-24">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full relative overflow-hidden border-primary/10 bg-card/50 backdrop-blur">
                <CardContent className="p-8">
                  <Quote className="absolute -top-2 -right-2 h-24 w-24 text-primary/5 -z-10" />

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < review.rating
                            ? "fill-primary text-primary"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  <p className="text-lg mb-6 italic text-muted-foreground">
                    "{review.content}"
                  </p>

                  <div>
                    <div className="font-bold text-lg">{review.name}</div>
                    <div className="text-sm text-primary">{review.role}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Review Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto p-8 rounded-3xl border bg-card/30 backdrop-blur shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            Share Your Experience
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider">
                  Name
                </label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full h-12 px-4 rounded-xl border bg-background/50 focus:ring-2 focus:ring-primary outline-none transition-all"
                  placeholder="Your Name"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider">
                  Role/Company
                </label>
                <input
                  required
                  type="text"
                  value={formData.role}
                  onChange={(e) =>
                    setFormData({ ...formData, role: e.target.value })
                  }
                  className="w-full h-12 px-4 rounded-xl border bg-background/50 focus:ring-2 focus:ring-primary outline-none transition-all"
                  placeholder="e.g. Retailer"
                />
              </div>
            </div>

            {/* Rating */}
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider">
                Rating
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() =>
                      setFormData({ ...formData, rating: num })
                    }
                    className="focus:outline-none"
                  >
                    <Star
                      className={`h-8 w-8 transition ${
                        num <= formData.rating
                          ? "fill-primary text-primary"
                          : "text-gray-300 hover:text-yellow-400"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Review */}
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider">
                Your Review
              </label>
              <textarea
                required
                value={formData.content}
                onChange={(e) =>
                  setFormData({ ...formData, content: e.target.value })
                }
                className="w-full h-32 p-4 rounded-xl border bg-background/50 focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                placeholder="How was your experience with us?"
              />
            </div>

            <Button
              type="submit"
              className="w-full h-14 text-lg font-bold uppercase tracking-widest"
            >
              {submitted ? "Thank You!" : "Submit Review"}
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}