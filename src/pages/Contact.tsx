import { motion } from "motion/react";
import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "../components/ui/button";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6 uppercase">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions or want to partner with us? Reach out and our team will get back to you shortly.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="p-8 rounded-3xl border bg-card/30 backdrop-blur">
              <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">Address</div>
                    <p className="text-muted-foreground">615, Shekhar Central Plot. 4 and 5 manoram Ganj, Madhya Pradesh - 452001</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">Phone</div>
                    <p className="text-muted-foreground">+91 9039063554</p>
                    <p className="text-muted-foreground">+91 9039066954</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">Email</div>
                    <p className="text-muted-foreground">switchitpvtltd@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
             <h2 className="text-3xl font-bold text-center mb-8">
    Our Location
  </h2>

  <div className="w-full h-[400px] rounded-3xl overflow-hidden border shadow-xl">
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1840.0753891687013!2d75.885382!3d22.7226365!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd3fa269fff5%3A0xa487f89b1ccde21c!2sSwitchit%20Private%20Limited!5e0!3m2!1sen!2sin!4v1775878186731!5m2!1sen!2sin" className="w-full h-full" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
  </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl border bg-card/30 backdrop-blur shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider">Full Name</label>
                <input 
                  required
                  type="text" 
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full h-12 px-4 rounded-xl border bg-background/50 focus:ring-2 focus:ring-primary outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider">Email Address</label>
                <input 
                  required
                  type="email" 
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full h-12 px-4 rounded-xl border bg-background/50 focus:ring-2 focus:ring-primary outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider">Subject</label>
                <input 
                  required
                  type="text" 
                  value={formData.subject}
                  onChange={e => setFormData({...formData, subject: e.target.value})}
                  className="w-full h-12 px-4 rounded-xl border bg-background/50 focus:ring-2 focus:ring-primary outline-none transition-all"
                  placeholder="Partnership Inquiry"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider">Message</label>
                <textarea 
                  required
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  className="w-full h-32 p-4 rounded-xl border bg-background/50 focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              <Button 
                type="submit" 
                disabled={status === "loading"}
                className="w-full h-14 text-lg font-bold uppercase tracking-widest gap-2"
              >
                {status === "loading" ? "Sending..." : status === "success" ? "Sent Successfully!" : "Send Message"}
                <Send className="h-5 w-5" />
              </Button>
              {status === "error" && (
                <p className="text-destructive text-center font-medium">Something went wrong. Please try again.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
