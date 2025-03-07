
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-10 bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-red-600 hover:bg-red-700 text-white px-3 py-1 text-sm">מקומות אחרונים!</Badge>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
              קורס סופרדב מאסטרי
            </h1>
            <p className="text-2xl md:text-3xl font-bold mb-8 max-w-3xl mx-auto">
              למד לבנות אפליקציות מתקדמות ללא קוד - בדיוק כמו מתכנת עם 10 שנות ניסיון
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-xl px-8 py-6">
                הבטח את מקומך עכשיו! 🔥
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-xl px-8 py-6">
                למד עוד
              </Button>
            </div>
          </div>
          
          <div className="bg-black/50 p-6 rounded-lg text-center mt-8 animate-pulse">
            <p className="text-xl font-bold">⏰ ההרשמה נסגרת בעוד: <span className="text-red-500">2 ימים, 7 שעות ו-23 דקות</span></p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            נמאס לך <span className="text-red-500">לבזבז זמן</span> על למידת קוד?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">בלי הקורס שלי</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✘</span>
                    <span>מבזבז שנים על למידת שפות תכנות מיותרות</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✘</span>
                    <span>נתקע בבאגים ובעיות טכניות שלא מצליח לפתור</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✘</span>
                    <span>מרגיש מתוסכל כשהפרויקטים שלך לא מתקדמים</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✘</span>
                    <span>לא מצליח להשיג לקוחות כי אין לך תיק עבודות מרשים</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">עם הקורס שלי</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>בונה אפליקציות מתקדמות תוך ימים, לא חודשים</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>משתמש בכלים מתקדמים שמתכנתים מקצועיים משתמשים בהם</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>מקבל גישה לקהילה תומכת שעוזרת לך להתקדם</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>מתחיל להרוויח כסף מהכישורים החדשים שלך</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <div className="w-64 h-64 mx-auto rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                <span className="text-6xl">👨‍💻</span>
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-4xl font-bold mb-6">מי אני?</h2>
              <p className="text-xl mb-4">
                היי, אני איתי אלגזר, מתכנת עם 10 שנות ניסיון בפיתוח תוכנה. עבדתי עם עשרות חברות וסטארטאפים, ועכשיו אני רוצה לחלוק איתך את הידע שצברתי.
              </p>
              <p className="text-xl mb-4">
                גיליתי את סופרדב לפני שנה, וזה שינה לחלוטין את הדרך שבה אני מפתח אפליקציות. עכשיו אני יכול לבנות במהירות מה שפעם לקח לי חודשים.
              </p>
              <p className="text-xl font-bold">
                בקורס הזה אני אלמד אותך את כל הטריקים והטכניקות שלמדתי בדרך הקשה, כדי שתוכל להתחיל לבנות אפליקציות מדהימות - גם אם אין לך רקע בתכנות.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">מה תלמד בקורס?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "יסודות סופרדב", desc: "הכרות עם הפלטפורמה והכלים המתקדמים שהיא מציעה" },
              { title: "בניית ממשקים", desc: "עיצוב ממשקי משתמש מרהיבים ללא ידע בקוד" },
              { title: "אינטגרציות API", desc: "חיבור האפליקציה שלך למקורות מידע חיצוניים" },
              { title: "בסיסי נתונים", desc: "ניהול מידע באפליקציה בצורה יעילה ומאובטחת" },
              { title: "אוטומציות", desc: "יצירת תהליכים אוטומטיים שחוסכים לך זמן" },
              { title: "פרויקט מעשי", desc: "בניית אפליקציה שלמה מאפס עד לפרסום" }
            ].map((item, i) => (
              <Card key={i} className="bg-slate-800 border-slate-700 hover:border-red-500 transition-all">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-300">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">השקעה שתחזיר את עצמה</h2>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            חשוב על זה: כמה שווה לך לחסוך שנים של למידה ותסכול? כמה שווה היכולת לבנות אפליקציות שאנשים ישלמו עליהן?
          </p>
          
          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-xl p-1">
            <Card className="bg-slate-900 border-0">
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className="text-3xl font-bold mb-2">קורס סופרדב מאסטרי</h3>
                  <div className="flex justify-center items-center gap-4 mb-6">
                    <span className="text-2xl line-through text-slate-400">₪3,997</span>
                    <span className="text-5xl font-bold">₪1,997</span>
                  </div>
                  <p className="text-lg mb-8">מחיר השקה מיוחד - לזמן מוגבל בלבד!</p>
                  
                  <ul className="space-y-4 text-left mb-8">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 text-xl">✓</span>
                      <span>גישה לכל 6 מודולי הקורס</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 text-xl">✓</span>
                      <span>קהילת תמיכה בטלגרם</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 text-xl">✓</span>
                      <span>מפגש שבועי לייב לשאלות ותשובות</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 text-xl">✓</span>
                      <span>תבניות מוכנות לפרויקטים</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 text-xl">✓</span>
                      <span>עדכונים לכל החיים</span>
                    </li>
                  </ul>
                  
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-xl px-8 py-6 w-full">
                    הבטח את מקומך עכשיו! 🔥
                  </Button>
                  
                  <p className="mt-4 text-sm text-slate-400">
                    אחריות מלאה ל-14 יום - אם לא תהיה מרוצה, תקבל את כספך בחזרה
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">שאלות נפוצות</h2>
          
          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            {[
              {
                q: "האם אני צריך ידע קודם בתכנות?",
                a: "לא! הקורס מיועד גם למתחילים לגמרי. אני מלמד את כל מה שצריך לדעת מהיסודות."
              },
              {
                q: "כמה זמן לוקח לסיים את הקורס?",
                a: "הקורס בנוי מ-6 מודולים שאפשר לסיים תוך 6 שבועות. אבל יש לך גישה לכל החיים, אז אתה יכול ללמוד בקצב שלך."
              },
              {
                q: "האם אוכל לבנות אפליקציות אמיתיות אחרי הקורס?",
                a: "בהחלט! בסוף הקורס תבנה פרויקט שלם מאפס עד לפרסום, ותהיה לך היכולת לבנות כל אפליקציה שתרצה."
              },
              {
                q: "האם יש תמיכה במהלך הקורס?",
                a: "כן! תקבל גישה לקהילת תמיכה בטלגרם ולמפגשי שאלות ותשובות שבועיים איתי."
              },
              {
                q: "מה אם הקורס לא מתאים לי?",
                a: "יש לך אחריות מלאה ל-14 יום. אם לא תהיה מרוצה מכל סיבה שהיא, תקבל את כספך בחזרה - ללא שאלות."
              }
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-slate-700">
                <AccordionTrigger className="text-xl font-medium">{item.q}</AccordionTrigger>
                <AccordionContent className="text-lg">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-900 to-orange-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            הגיע הזמן להפסיק לחלום ולהתחיל לבנות
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            אל תבזבז עוד שנים בניסיון ללמוד לבד. הצטרף לקורס סופרדב מאסטרי עכשיו והתחל לבנות את האפליקציות שתמיד רצית.
          </p>
          <div className="bg-black/50 p-6 rounded-lg text-center mb-8 animate-pulse">
            <p className="text-xl font-bold">⏰ נותרו רק <span className="text-red-500">7 מקומות</span> במחיר ההשקה!</p>
          </div>
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-xl px-12 py-8">
            הבטח את מקומך עכשיו! 🔥
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center text-slate-400">
          <p>© {new Date().getFullYear()} איתי אלגזר | כל הזכויות שמורות</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
