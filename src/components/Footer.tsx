import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer id="contact" className="bg-muted/50 pt-24 pb-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {/* Company Info */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
             <img src="logos/logo-main.png" alt="Logo" className="h-15 w-15 object-contain" />
              <span className="text-xl font-bold tracking-tight">SWITCH IT</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {t('footer.desc')}
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="h-10 w-10 rounded-full border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">{t('footer.services')}</h4>
            <ul className="space-y-4 text-muted-foreground">
              {[
                t('workflow.manufacturer'), 
                t('workflow.warehouse'), 
                t('workflow.distributors'), 
                t('workflow.carrier'), 
                t('workflow.retailers')
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-primary transition-colors flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-primary" /> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">{t('footer.links')}</h4>
            <ul className="space-y-4 text-muted-foreground">
              {[t('nav.home'), t('nav.about'), t('nav.services'), t('nav.contact')].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-primary transition-colors flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-primary" /> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">{t('footer.getInTouch')}</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="h-6 w-6 text-primary shrink-0" />
                <span className="text-muted-foreground">
                  615, Shekhar Central Plot. 4 and 5 manoram Ganj, Madhya Pradesh - 452001
                </span>
              </li>
              <li className="flex gap-4">
                <Phone className="h-6 w-6 text-primary shrink-0" />
                <div className="flex flex-col text-muted-foreground">
                  <a href="tel:+919039063554" className="hover:text-primary">+91 9039063554</a>
                  <a href="tel:+919039066954" className="hover:text-primary">+91 9039066954</a>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail className="h-6 w-6 text-primary shrink-0" />
                <a href="mailto:switchitpvtltd@gmail.com" className="text-muted-foreground hover:text-primary break-all">
                  switchitpvtltd@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Switch It Private Limited. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}
