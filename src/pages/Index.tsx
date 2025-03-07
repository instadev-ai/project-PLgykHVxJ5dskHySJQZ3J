
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0a1017] text-white rtl" dir="rtl">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5 bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-xl text-blue-400 mb-2">ובינר בחינם</h2>
            <h3 className="text-lg mb-6">לאנשים שרוצים לחיות במסלול הנכון</h3>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              איך לבנות אפליקציה רווחית שאפשר להתחיל
              <br />
              למכור תוך 6 חודשים
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-300">
              (גם אם אין לך רעיון! וגם אם אתה לא יודע לכתוב אפילו שורה אחת של קוד)
            </p>
            
            {/* Countdown Timer */}
            <div className="flex justify-center gap-8 mb-10">
              <div className="text-center">
                <div className="text-5xl font-bold">58</div>
                <div className="text-sm">שניות</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold">54</div>
                <div className="text-sm">דקות</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold">00</div>
                <div className="text-sm">שעות</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold">02</div>
                <div className="text-sm">ימים</div>
              </div>
            </div>
            
            <Button size="lg" className="bg-[#2d6a91] hover:bg-[#1d5a81] text-white text-lg px-8 py-6 w-full max-w-2xl mx-auto mb-4">
              הרשמה לובינר הקרוב בחינם 👇
            </Button>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-[#0e1621] border border-[#1e2a38]">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <p className="text-lg">יום ראשון | 09/03/25 | בשעה 18:00</p>
              </div>
              
              <form className="space-y-4">
                <Input 
                  placeholder="שם מלא" 
                  className="bg-white text-black text-right py-6" 
                />
                <Input 
                  placeholder="פלאפון" 
                  className="bg-white text-black text-right py-6" 
                />
                <Input 
                  placeholder="מייל" 
                  className="bg-white text-black text-right py-6" 
                />
                
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Checkbox id="terms" />
                  <label htmlFor="terms" className="text-sm text-gray-300">
                    אני מאשר/ת לקבל תוכנות לגבי הובינר ותוכן שיווקי בוואטסאפ ובמייל
                  </label>
                </div>
                
                <Button className="w-full bg-[#2d6a91] hover:bg-[#1d5a81] text-white text-lg py-6">
                  שריין מקום בובינר בחינם
                </Button>
                
                <p className="text-xs text-center text-gray-400">
                  *מספר המקומות מוגבל ל-100 אנשים בלבד
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">מה תלמד בובינר?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "בניית אפליקציה ללא קוד", desc: "איך לבנות אפליקציה מקצועית ללא ידע טכני או רקע בתכנות" },
              { title: "מציאת רעיון רווחי", desc: "איך למצוא רעיון לאפליקציה שאנשים ישלמו עליה" },
              { title: "תכנון נכון", desc: "איך לתכנן את האפליקציה כך שתוכל להשיק אותה מהר" },
              { title: "שיווק אפקטיבי", desc: "איך לשווק את האפליקציה שלך ולהשיג את הלקוחות הראשונים" },
              { title: "מודל עסקי", desc: "איך לבנות מודל עסקי שיאפשר לך להרוויח מהאפליקציה" },
              { title: "סודות המקצוענים", desc: "טיפים וטריקים שלמדתי ב-10 שנות הניסיון שלי בתעשייה" }
            ].map((item, i) => (
              <Card key={i} className="bg-[#0e1621] border border-[#1e2a38] hover:border-[#2d6a91] transition-all">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0e1621]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <div className="w-64 h-64 mx-auto rounded-full bg-gradient-to-r from-[#2d6a91] to-[#1d5a81] flex items-center justify-center">
                <span className="text-6xl">👨‍💻</span>
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-6">מי אני?</h2>
              <p className="text-lg mb-4">
                היי, אני איתי אלגזר, מתכנת עם 10 שנות ניסיון בפיתוח תוכנה. עבדתי עם עשרות חברות וסטארטאפים, ועכשיו אני רוצה לחלוק איתך את הידע שצברתי.
              </p>
              <p className="text-lg mb-4">
                גיליתי את הדרך לבנות אפליקציות ללא קוד, וזה שינה לחלוטין את הדרך שבה אני מפתח מוצרים. עכשיו אני יכול לבנות במהירות מה שפעם לקח לי חודשים.
              </p>
              <p className="text-lg font-bold text-blue-400">
                בובינר הזה אני אלמד אותך את כל הטריקים והטכניקות שלמדתי בדרך הקשה, כדי שתוכל להתחיל לבנות אפליקציות מדהימות - גם אם אין לך רקע בתכנות.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">שאלות נפוצות</h2>
          
          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            {[
              {
                q: "האם הובינר באמת בחינם?",
                a: "כן, הובינר הוא לגמרי בחינם. אני מאמין בלתת ערך לפני שאני מבקש תמורה."
              },
              {
                q: "האם אני צריך ידע קודם בתכנות?",
                a: "לא! הובינר מיועד גם למתחילים לגמרי. אני אלמד אותך איך לבנות אפליקציה ללא שורת קוד אחת."
              },
              {
                q: "מה אם אין לי רעיון לאפליקציה?",
                a: "בובינר אני אשתף איתך שיטה למציאת רעיונות לאפליקציות שאנשים ישלמו עליהן."
              },
              {
                q: "האם יהיה הקלטה של הובינר?",
                a: "כן, אבל ההקלטה תהיה זמינה לזמן מוגבל בלבד. מומלץ להשתתף בשידור החי."
              },
              {
                q: "האם תהיה אפשרות לשאול שאלות?",
                a: "בהחלט! יהיה זמן מוקדש לשאלות ותשובות בסוף הובינר."
              }
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-[#1e2a38]">
                <AccordionTrigger className="text-lg font-medium">{item.q}</AccordionTrigger>
                <AccordionContent className="text-md text-gray-300">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0e1621]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            הגיע הזמן להפסיק לחלום ולהתחיל לבנות
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            אל תבזבז עוד זמן בניסיון ללמוד לבד. הצטרף לובינר בחינם עכשיו וגלה איך לבנות אפליקציה רווחית בזמן קצר.
          </p>
          <div className="bg-[#0a1017] p-6 rounded-lg text-center mb-8">
            <p className="text-lg font-bold">⏰ נותרו רק <span className="text-blue-400">7 מקומות</span> בובינר הקרוב!</p>
          </div>
          <Button size="lg" className="bg-[#2d6a91] hover:bg-[#1d5a81] text-white text-lg px-12 py-6">
            הבטח את מקומך עכשיו! 👆
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-[#0a1017] border-t border-[#1e2a38]">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>© {new Date().getFullYear()} איתי אלגזר | כל הזכויות שמורות</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
