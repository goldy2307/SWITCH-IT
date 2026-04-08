import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          nav: {
            home: "Home",
            about: "About Us",
            services: "Services",
            contact: "Contact Us",
            brochure: "Brochure"
          },
          hero: {
            badge: "Logistics Power",
            title: "MAKE DELIVERY MEMORABLE WITH CUSTOMER EXPERIENCE SOLUTION",
            titleAccent: "MEMORABLE",
            description: "Deliver a seamless customer experience—from order to doorstep—with transparency, speed, and satisfaction at every step.",
            getStarted: "Get Started",
            ourServices: "Our Services",
            partnered: "Partnered with 24+ global brands",
            managing: "Managing 4500+ products",
            satisfied: "Satisfied Customers"
          },
          workflow: {
            title: "Switch it workflow our logistics process",
            description: "SwitchIt optimizes your logistics workflow — from manufacturers to retailers. We manage purchasing, warehousing, and timely carrier handoffs. Ensuring smooth distribution and punctual parcel delivery every step of the way.",
            manufacturer: "MANUFACTURER",
            manufacturerDesc: "We purchase products from the manufacturer.",
            warehouse: "WAREHOUSE",
            warehouseDesc: "Inventory is stored before orders are received.",
            distributors: "DISTRIBUTORS",
            distributorsDesc: "Goods are moved to distributors for delivery.",
            carrier: "CARRIER",
            carrierDesc: "Parcels are given to a carrier to be delivered to retailers.",
            retailers: "RETAILERS",
            retailersDesc: "Punctual delivery of parcels."
          },
          about: {
            title: "ABOUT US",
            p1: "Established In 2025 In Indore. Switch IT Has Elevated Itself As The Market Leader In Logistic Management Systems And Integrated Supply Chain Solution. We Have Adopted A Single Point Of Solution' Strategy, Where We Seamlessly Deliver Cost Effective Logistical Solutions To Our Clients In Fast Turnaround Times & Aware The B2B supply.",
            p2: "Our Customer - Centric Approach Combined With State-Of-The-Art Technologies Enables Us To Better Understand Our Client's Needs And Deliver Transformative Solutions That Add Value To Their Business. At Switch IT, We Believe In Continuous Improvement And Constant Innovation To Provide World Class Services To Our Clients.",
            point1: "A collaborative approach",
            point2: "Continuous improvement",
            point3: "We want to grow old with you",
            learnMore: "Learn More",
            whyTitle: "WHY CHOOSE US?",
            fmcgTitle: "FMCG-Focused Solutions",
            fmcgDesc: "Specialized logistics tailored for the fast-moving consumer goods sector, ensuring freshness and speed.",
            intelTitle: "Intelligent Operations",
            intelDesc: "Using advanced analytics and integrated technology, we optimize every link in the logistics chain. Real-time data helps us forecast demand, reduce waste, and boost performance. This results in smarter decisions and faster, more reliable service.",
            streamTitle: "Streamlined Management",
            streamDesc: "End-to-end management that simplifies complex supply chains, allowing you to focus on your core business.",
            testimonial: "Behind every seamless shipment is a team that ensures the process runs smoothly — and that's where our back office shines. Yuvrajsinh leads the charge with diligence and dedication, making sure every support task is handled promptly and precisely."
          },
          services: {
            title: "OUR SERVICES",
            manufacturer: "MANUFACTURER",
            manufacturerDesc: "Direct sourcing and procurement from global manufacturers.",
            warehouse: "WAREHOUSE",
            warehouseDesc: "State-of-the-art storage facilities with real-time tracking.",
            distributors: "DISTRIBUTORS",
            distributorsDesc: "Efficient distribution network reaching remote rural areas.",
            carrier: "CARRIER",
            carrierDesc: "Reliable carrier handoffs for punctual parcel delivery.",
            retailers: "RETAILERS",
            retailersDesc: "Connecting brands to retailers with transparency and speed.",
            segmentation: "Product Segmentation - FMCG Categories",
            categories: {
              food: "PROCESSED FOOD",
              beverages: "BEVERAGES",
              personal: "PERSONAL CARE",
              dry: "DRY GOODS",
              baby: "BABY CARE",
              cosmetics: "COSMETICS",
              home: "HOME & KITCHEN",
              health: "HEALTH & HYGIENE",
              toiletries: "TOILETRIES"
            }
          },
          stats: {
            warehouse: "WAREHOUSE",
            customers: "SATISFIED CUSTOMERS",
            distributors: "DISTRIBUTORS",
            profit: "PROFIT INCREASED",
            expansion: "Switch It expands brand distribution into remote rural areas, unlocking new stores and customers that traditional networks couldn't reach."
          },
          clients: {
            title: "OUR CLIENTS",
            cta: "Looking to Reach New Markets?",
            ctaAccent: "Contact Switch it Today.",
            contactUs: "CONTACT US"
          },
          footer: {
            desc: "Switch it offers reliable, affordable logistics solutions backed by 24/7 support and expert service. We're committed to connecting Gujarat with fast, transparent, and efficient delivery.",
            services: "Our Services",
            links: "Quick Links",
            getInTouch: "Get In Touch",
            rights: "All rights reserved. Designed by Curly Brackets."
          }
        }
      },
      hi: {
        translation: {
          nav: {
            home: "होम",
            about: "हमारे बारे में",
            services: "सेवाएं",
            contact: "संपर्क करें",
            brochure: "विवरणिका"
          },
          hero: {
            badge: "लॉजिस्टिक्स पावर",
            title: "ग्राहक अनुभव समाधान के साथ वितरण को यादगार बनाएं",
            titleAccent: "यादगार",
            description: "ऑर्डर से लेकर दरवाजे तक एक सहज ग्राहक अनुभव प्रदान करें—हर कदम पर पारदर्शिता, गति और संतुष्टि के साथ।",
            getStarted: "शुरू करें",
            ourServices: "हमारी सेवाएं",
            partnered: "24+ वैश्विक ब्रांडों के साथ भागीदारी",
            managing: "4500+ उत्पादों का प्रबंधन",
            satisfied: "संतुष्ट ग्राहक"
          },
          workflow: {
            title: "स्विच इट वर्कफ़्लो हमारी लॉजिस्टिक्स प्रक्रिया",
            description: "स्विचइट आपके लॉजिस्टिक्स वर्कफ़्लो को अनुकूलित करता है — निर्माताओं से लेकर खुदरा विक्रेताओं तक। हम खरीद, भंडारण और समय पर वाहक हैंडऑफ़ का प्रबंधन करते हैं। हर कदम पर सुचारू वितरण और समय पर पार्सल वितरण सुनिश्चित करना।",
            manufacturer: "निर्माता",
            manufacturerDesc: "हम निर्माता से उत्पाद खरीदते हैं।",
            warehouse: "गोदाम",
            warehouseDesc: "ऑर्डर प्राप्त होने से पहले इन्वेंट्री संग्रहीत की जाती है।",
            distributors: "वितरक",
            distributorsDesc: "माल वितरण के लिए वितरकों के पास ले जाया जाता है।",
            carrier: "वाहक",
            carrierDesc: "पार्सल खुदरा विक्रेताओं को वितरित करने के लिए वाहक को दिए जाते हैं।",
            retailers: "खुदरा विक्रेता",
            retailersDesc: "पार्सल की समय पर डिलीवरी।"
          },
          about: {
            title: "हमारे बारे में",
            p1: "2025 में इंदौर में स्थापित। स्विच आईटी ने खुद को लॉजिस्टिक प्रबंधन प्रणालियों और एकीकृत आपूर्ति श्रृंखला समाधान में बाजार नेता के रूप में उन्नत किया है। हमने एक 'सिंगल पॉइंट ऑफ़ सॉल्यूशन' रणनीति अपनाई है, जहाँ हम अपने ग्राहकों को तेज़ टर्नअराउंड समय में लागत प्रभावी लॉजिस्टिक समाधान प्रदान करते हैं और B2B आपूर्ति के बारे में जागरूक करते हैं।",
            p2: "अत्याधुनिक तकनीकों के साथ संयुक्त हमारा ग्राहक-केंद्रित दृष्टिकोण हमें अपने ग्राहक की जरूरतों को बेहतर ढंग से समझने और उनके व्यवसाय में मूल्य जोड़ने वाले परिवर्तनकारी समाधान देने में सक्षम बनाता है। स्विच आईटी में, हम अपने ग्राहकों को विश्व स्तरीय सेवाएं प्रदान करने के लिए निरंतर सुधार और निरंतर नवाचार में विश्वास करते हैं।",
            point1: "एक सहयोगात्मक दृष्टिकोण",
            point2: "निरंतर सुधार",
            point3: "हम आपके साथ बूढ़े होना चाहते हैं",
            learnMore: "और जानें",
            whyTitle: "हमें क्यों चुनें?",
            fmcgTitle: "FMCG-केंद्रित समाधान",
            fmcgDesc: "तेजी से चलने वाले उपभोक्ता सामान क्षेत्र के लिए तैयार विशेष लॉजिस्टिक्स, ताजगी और गति सुनिश्चित करना।",
            intelTitle: "इंटेलिजेंट ऑपरेशंस",
            intelDesc: "उन्नत विश्लेषण और एकीकृत तकनीक का उपयोग करते हुए, हम लॉजिस्टिक्स श्रृंखला के हर लिंक को अनुकूलित करते हैं। रीयल-टाइम डेटा हमें मांग का पूर्वानुमान लगाने, कचरे को कम करने और प्रदर्शन को बढ़ावा देने में मदद करता है। इसके परिणामस्वरूप स्मार्ट निर्णय और तेज़, अधिक विश्वसनीय सेवा मिलती है।",
            streamTitle: "सुव्यवस्थित प्रबंधन",
            streamDesc: "एंड-टू-एंड प्रबंधन जो जटिल आपूर्ति श्रृंखलाओं को सरल बनाता है, जिससे आप अपने मुख्य व्यवसाय पर ध्यान केंद्रित कर सकते हैं।",
            testimonial: "हर सहज शिपमेंट के पीछे एक टीम होती है जो यह सुनिश्चित करती है कि प्रक्रिया सुचारू रूप से चले — और यहीं हमारा बैक ऑफिस चमकता है। युवराजसिंह परिश्रम और समर्पण के साथ नेतृत्व करते हैं, यह सुनिश्चित करते हुए कि हर समर्थन कार्य तुरंत और सटीक रूप से संभाला जाता है।"
          },
          services: {
            title: "हमारी सेवाएं",
            manufacturer: "निर्माता",
            manufacturerDesc: "वैश्विक निर्माताओं से प्रत्यक्ष सोर्सिंग और खरीद।",
            warehouse: "गोदाम",
            warehouseDesc: "रीयल-टाइम ट्रैकिंग के साथ अत्याधुनिक भंडारण सुविधाएं।",
            distributors: "वितरक",
            distributorsDesc: "ग्रामीण क्षेत्रों तक पहुँचने वाला कुशल वितरण नेटवर्क।",
            carrier: "वाहक",
            carrierDesc: "समय पर पार्सल वितरण के लिए विश्वसनीय वाहक हैंडऑफ़।",
            retailers: "खुदरा विक्रेता",
            retailersDesc: "पारदर्शिता और गति के साथ ब्रांडों को खुदरा विक्रेताओं से जोड़ना।",
            segmentation: "उत्पाद विभाजन - FMCG श्रेणियां",
            categories: {
              food: "प्रसंस्कृत भोजन",
              beverages: "पेय पदार्थ",
              personal: "व्यक्तिगत देखभाल",
              dry: "सूखा माल",
              baby: "बेबी केयर",
              cosmetics: "कॉस्मेटिक्स",
              home: "घर और रसोई",
              health: "स्वास्थ्य और स्वच्छता",
              toiletries: "प्रसाधन सामग्री"
            }
          },
          stats: {
            warehouse: "गोदाम",
            customers: "संतुष्ट ग्राहक",
            distributors: "वितरक",
            profit: "लाभ में वृद्धि",
            expansion: "स्विच इट दूरदराज के ग्रामीण क्षेत्रों में ब्रांड वितरण का विस्तार करता है, नए स्टोर और ग्राहकों को अनलॉक करता है जहाँ पारंपरिक नेटवर्क नहीं पहुँच सकते थे।"
          },
          clients: {
            title: "हमारे ग्राहक",
            cta: "नए बाजारों तक पहुँचना चाहते हैं?",
            ctaAccent: "आज ही स्विच इट से संपर्क करें।",
            contactUs: "संपर्क करें"
          },
          footer: {
            desc: "स्विच इट 24/7 समर्थन और विशेषज्ञ सेवा द्वारा समर्थित विश्वसनीय, किफायती लॉजिस्टिक्स समाधान प्रदान करता है। हम गुजरात को तेज़, पारदर्शी और कुशल वितरण के साथ जोड़ने के लिए प्रतिबद्ध हैं।",
            services: "हमारी सेवाएं",
            links: "त्वरित लिंक",
            getInTouch: "संपर्क में रहें",
            rights: "सर्वाधिकार सुरक्षित। कर्ली ब्रैकेट्स द्वारा डिज़ाइन किया गया।"
          }
        }
      }
    }
  });

export default i18n;
