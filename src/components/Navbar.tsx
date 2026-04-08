import { motion } from "motion/react";
import { Button } from "./ui/button";
import { 
  NavigationMenu, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "./ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu, Download, Sun, Moon, Languages } from "lucide-react";
import { cn } from "../lib/utils";
import { useTheme } from "./ThemeProvider";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const navItems = [
    { name: t('nav.home'), href: "#home" },
    { name: t('nav.about'), href: "#about" },
    { name: t('nav.services'), href: "#services" },
    { name: t('nav.contact'), href: "#contact" },
  ];

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'hi' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <motion.div>
          <img src="logos/logo-main.png" alt="Logo" className="h-15 w-15 object-contain" />
          </motion.div>
          <div className="flex flex-col">
              
            <span className="text-xl font-bold tracking-tight text-primary">SWITCH IT</span>
            <span className="text-[10px] font-medium tracking-[0.2em] text-muted-foreground uppercase">Change with Consistency</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuLink 
                    href={item.href} 
                    className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-primary/5")}
                  >
                    {item.name}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-2 border-l pl-4 ml-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="rounded-full gap-1 px-2 w-auto"
            >
              <Languages className="h-5 w-5" />
              <span className="text-xs font-bold uppercase">{i18n.language.split('-')[0]}</span>
            </Button>

            <Button variant="outline" className="gap-2 border-primary/20 hover:bg-primary/5 ml-2">
              <Download className="h-4 w-4" />
              {t('nav.brochure')}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          <Sheet>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              }
            />
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
                
                <div className="flex flex-col gap-4 pt-4 border-t">
                  <Button
                    variant="outline"
                    onClick={toggleLanguage}
                    className="justify-start gap-2"
                  >
                    <Languages className="h-5 w-5" />
                    Switch to {i18n.language === 'en' ? 'Hindi' : 'English'}
                  </Button>

                  <Button className="gap-2">
                    <Download className="h-4 w-4" />
                    {t('nav.brochure')}
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
