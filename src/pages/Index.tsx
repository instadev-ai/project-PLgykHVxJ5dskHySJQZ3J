
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useState } from "react";

const Index = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0118] text-white rtl overflow-hidden" dir="rtl">
      {/* Grid Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0b3b] via-[#0a0118] to-[#0a0118] opacity-90"></div>
        
        {/* Animated Shapes */}
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 opacity-20 blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-80 h-80 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 opacity-20 blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 opacity-20 blur-3xl animate-blob animation-delay-4000"></div>
        
        {/* Additional Decorative Elements */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-purple-500 opacity-10 rotate-45 animate-float"></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 rounded-lg bg-blue-500 opacity-10 rotate-12 animate-float animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-40 h-40 rounded-full border-2 border-purple-500 opacity-10 animate-spin-slow"></div>
        
        {/* Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: Math.random() * 0.5 + 0.2
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12 animate-fade-in-up">
            <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-3 py-1 text-sm border-0">
              ובינר בחינם
            </Badge>
            <h3 className="text-lg mb-6 text-purple-300">לאנשים שרוצים לחיות במסלול הנכון</h3>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white">
              איך לבנות אפליקציה רווחית שאפשר להתחיל
              <br />
              למכור תוך 6 חודשים
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-300">
              (גם אם אין לך רעיון! וגם אם אתה לא יודע לכתוב אפילו שורה אחת של קוד)
            </p>
            
            {/* Countdown Timer */}
            <div className="flex justify-center gap-8 mb-10">
              {[
                { value: "02", label: "ימים" },
                { value: "00", label: "שעות" },
                { value: "54", label: "דקות" },
                { value: "58", label: "שניות" }
              ].map((item, i) => (
                <div key={i} className="text-center relative">
                  <div className="w-20 h-24 bg-gradient-to-b from-[#1a0b3b] to-[#0a0118] rounded-lg border border-purple-900/50 flex items-center justify-center shadow-lg shadow-purple-900/20">
                    <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-purple-200">{item.value}</div>
                  </div>
                  <div className="text-sm mt-2 text-purple-300">{item.label}</div>
                </div>
              ))}
            </div>
            
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 w-full max-w-2xl mx-auto mb-4 rounded-lg shadow-lg shadow-purple-900/30 transition-all duration-300 hover:shadow-purple-700/40 hover:scale-[1.02] border-0">
              הרשמה לובינר הקרוב בחינם 👇
            </Button>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
          <Card className="bg-gradient-to-b from-[#1a0b3b]/80 to-[#0a0118]/80 backdrop-blur-sm border border-purple-900/50 shadow-xl shadow-purple-900/20">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <p className="text-lg text-purple-300">יום ראשון | 09/03/25 | בשעה 18:00</p>
              </div>
              
              <form className="space-y-4">
                <div className="relative group">
                  <Input 
                    placeholder="שם מלא" 
                    className="bg-white/10 backdrop-blur-sm text-white text-right py-6 border-purple-900/50 focus:border-purple-500 transition-all duration-300 group-hover:border-purple-500/70" 
                  />
                  <div className="absolute inset-0 rounded-md bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
                
                <div className="relative group">
                  <Input 
                    placeholder="פלאפון" 
                    className="bg-white/10 backdrop-blur-sm text-white text-right py-6 border-purple-900/50 focus:border-purple-500 transition-all duration-300 group-hover:border-purple-500/70" 
                  />
                  <div className="absolute inset-0 rounded-md bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
                
                <div className="relative group">
                  <Input 
                    placeholder="מייל" 
                    className="bg-white/10 backdrop-blur-sm text-white text-right py-6 border-purple-900/50 focus:border-purple-500 transition-all duration-300 group-hover:border-purple-500/70" 
                  />
                  <div className="absolute inset-0 rounded-md bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
                
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Checkbox id="terms" className="border-purple-500 data-[state=checked]:bg-purple-600 data-[state=checked]:text-white" />
                  <label htmlFor="terms" className="text-sm text-gray-300">
                    אני מאשר/ת לקבל תוכנות לגבי הובינר ותוכן שיווקי בוואטסאפ ובמייל
                  </label>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg py-6 rounded-lg shadow-lg shadow-purple-900/30 transition-all duration-300 hover:shadow-purple-700/40 hover:scale-[1.02] border-0">
                  שריין מקום בובינר בחינם
                </Button>
                
                <p className="text-xs text-center text-purple-300">
                  *מספר המקומות מוגבל ל-100 אנשים בלבד
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300">מה תלמד בובינר?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "בניית אפליקציה ללא קוד", desc: "איך לבנות אפליקציה מקצועית ללא ידע טכני או רקע בתכנות", icon: "✨" },
              { title: "מציאת רעיון רווחי", desc: "איך למצוא רעיון לאפליקציה שאנשים ישלמו עליה", icon: "💡" },
              { title: "תכנון נכון", desc: "איך לתכנן את האפליקציה כך שתוכל להשיק אותה מהר", icon: "📝" },
              { title: "שיווק אפקטיבי", desc: "איך לשווק את האפליקציה שלך ולהשיג את הלקוחות הראשונים", icon: "📣" },
              { title: "מודל עסקי", desc: "איך לבנות מודל עסקי שיאפשר לך להרוויח מהאפליקציה", icon: "💰" },
              { title: "סודות המקצוענים", desc: "טיפים וטריקים שלמדתי ב-10 שנות הניסיון שלי בתעשייה", icon: "🔑" }
            ].map((item, i) => (
              <div key={i} className={`animate-fade-in-up animation-delay-${i * 100}`}>
                <Card className="bg-gradient-to-b from-[#1a0b3b]/80 to-[#0a0118]/80 backdrop-blur-sm border border-purple-900/50 hover:border-purple-500/70 transition-all duration-300 hover:shadow-lg hover:shadow-purple-900/30 group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-300 transition-colors duration-300">{item.title}</h3>
                    <p className="text-gray-300">{item.desc}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0b3b]/50 to-[#0a0118]/50 backdrop-blur-sm"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3 animate-fade-in-right">
              <div className="w-64 h-64 mx-auto rounded-full bg-gradient-to-r from-purple-600 to-blue-600 p-1">
                <div className="w-full h-full rounded-full bg-[#0a0118] flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center transform hover:scale-110 transition-transform duration-500">
                    <span className="text-6xl">👨‍💻</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 animate-fade-in-left">
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300">מי אני?</h2>
              <p className="text-lg mb-4 text-gray-300">
                היי, אני איתי אלגזר, מתכנת עם 10 שנות ניסיון בפיתוח תוכנה. עבדתי עם עשרות חברות וסטארטאפים, ועכשיו אני רוצה לחלוק איתך את הידע שצברתי.
              </p>
              <p className="text-lg mb-4 text-gray-300">
                גיליתי את הדרך לבנות אפליקציות ללא קוד, וזה שינה לחלוטין את הדרך שבה אני מפתח מוצרים. עכשיו אני יכול לבנות במהירות מה שפעם לקח לי חודשים.
              </p>
              <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                בובינר הזה אני אלמד אותך את כל הטריקים והטכניקות שלמדתי בדרך הקשה, כדי שתוכל להתחיל לבנות אפליקציות מדהימות - גם אם אין לך רקע בתכנות.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300">שאלות נפוצות</h2>
          
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
              <AccordionItem key={i} value={`item-${i}`} className="border-purple-900/50 data-[state=open]:border-purple-500/70 transition-colors duration-300">
                <AccordionTrigger className="text-lg font-medium hover:text-purple-300 transition-colors duration-300">{item.q}</AccordionTrigger>
                <AccordionContent className="text-md text-gray-300">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0b3b]/50 to-[#0a0118]/50 backdrop-blur-sm"></div>
        <div className="max-w-7xl mx-auto text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300">
            הגיע הזמן להפסיק לחלום ולהתחיל לבנות
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-gray-300">
            אל תבזבז עוד זמן בניסיון ללמוד לבד. הצטרף לובינר בחינם עכשיו וגלה איך לבנות אפליקציה רווחית בזמן קצר.
          </p>
          <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-sm p-6 rounded-lg text-center mb-8 border border-purple-900/50">
            <p className="text-lg font-bold">⏰ נותרו רק <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">7 מקומות</span> בובינר הקרוב!</p>
          </div>
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-12 py-6 rounded-lg shadow-lg shadow-purple-900/30 transition-all duration-300 hover:shadow-purple-700/40 hover:scale-[1.02] animate-pulse border-0">
            הבטח את מקומך עכשיו! 👆
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-[#0a0118] border-t border-purple-900/30 relative z-10">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>© {new Date().getFullYear()} איתי אלגזר | כל הזכויות שמורות</p>
        </div>
      </footer>

      {/* CSS for animations */}
      {mounted && (
        <style jsx global>{`
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          
          .animate-blob {
            animation: blob 7s infinite;
          }
          
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          
          .animation-delay-4000 {
            animation-delay: 4s;
          }
          
          .animation-delay-100 {
            animation-delay: 0.1s;
          }
          
          .animation-delay-200 {
            animation-delay: 0.2s;
          }
          
          .animation-delay-300 {
            animation-delay: 0.3s;
          }
          
          .animation-delay-400 {
            animation-delay: 0.4s;
          }
          
          .animation-delay-500 {
            animation-delay: 0.5s;
          }
          
          .animation-delay-1000 {
            animation-delay: 1s;
          }
          
          @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          
          .animate-fade-in-up {
            animation: fade-in-up 0.6s ease-out forwards;
          }
          
          @keyframes fade-in-right {
            0% { opacity: 0; transform: translateX(-20px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          
          .animate-fade-in-right {
            animation: fade-in-right 0.6s ease-out forwards;
          }
          
          @keyframes fade-in-left {
            0% { opacity: 0; transform: translateX(20px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          
          .animate-fade-in-left {
            animation: fade-in-left 0.6s ease-out forwards;
          }
          
          @keyframes float {
            0% { transform: translateY(0) rotate(0); }
            50% { transform: translateY(-15px) rotate(5deg); }
            100% { transform: translateY(0) rotate(0); }
          }
          
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
          }
          
          @keyframes twinkle {
            0% { opacity: 0.2; }
            50% { opacity: 0.8; }
            100% { opacity: 0.2; }
          }
          
          .animate-twinkle {
            animation: twinkle 3s ease-in-out infinite;
          }
          
          .bg-grid-pattern {
            background-size: 50px 50px;
            background-image: 
              linear-gradient(to right, rgba(128, 90, 213, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(128, 90, 213, 0.1) 1px, transparent 1px);
          }
        `}</style>
      )}
    </div>
  );
};

export default Index;
