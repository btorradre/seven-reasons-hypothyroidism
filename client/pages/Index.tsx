import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, ShieldCheck, Clock, Gift, TrendingDown } from 'lucide-react';

export default function Index() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 4,
    minutes: 19,
    seconds: 14
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-3 px-4 sticky top-0 z-50 shadow-lg">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <span className="font-bold text-sm sm:text-base">HOLIDAY SALE DEAL</span>
          <span className="hidden sm:block text-white/60">|</span>
          <span className="text-sm">SAVINGS + FREE GIFT</span>
          <div className="flex gap-2 text-xs sm:text-sm font-mono">
            <div className="flex flex-col items-center">
              <span className="font-bold text-lg">{String(timeLeft.days).padStart(2, '0')}</span>
              <span className="text-xs opacity-80">DAYS</span>
            </div>
            <span className="self-center text-lg">:</span>
            <div className="flex flex-col items-center">
              <span className="font-bold text-lg">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="text-xs opacity-80">HRS</span>
            </div>
            <span className="self-center text-lg">:</span>
            <div className="flex flex-col items-center">
              <span className="font-bold text-lg">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="text-xs opacity-80">MIN</span>
            </div>
            <span className="self-center text-lg">:</span>
            <div className="flex flex-col items-center">
              <span className="font-bold text-lg">{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="text-xs opacity-80">SEC</span>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-slate-800 text-white py-4 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-xl sm:text-2xl font-bold tracking-wide text-center">HEART HEALTH JOURNAL</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="h-1 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 mb-8"></div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            10 Reasons <span className="text-teal-600">People with FH Choose This Over Statins</span> for Their Genetic Cholesterol
          </h1>

          <p className="text-lg sm:text-xl font-semibold mb-4 text-slate-800">
            Statins are stealing your life while "managing" your numbers.
          </p>

          <p className="text-base sm:text-lg mb-4 leading-relaxed text-slate-700">
            Most people with familial hypercholesterolemia get handed a statin prescription at diagnosis.
          </p>

          <p className="text-base sm:text-lg mb-4 leading-relaxed text-slate-700">
            Then the nightmare begins.
          </p>

          <p className="text-base sm:text-lg mb-4 leading-relaxed text-slate-700">
            Muscle pain so bad you can't climb stairs. Brain fog so thick you forget your own thoughts. Fatigue that makes you feel 20 years older.
          </p>

          <p className="text-base sm:text-lg mb-4 leading-relaxed text-slate-700">
            One woman described it perfectly: <span className="font-semibold">"I was a different person, exhausted and useless."</span>
          </p>

          <p className="text-base sm:text-lg mb-4 leading-relaxed text-slate-700">
            If your doctor dismissed your side effects as "rare" or told you to "just push through it," you're not alone.
          </p>

          <p className="text-base sm:text-lg mb-4 leading-relaxed text-slate-700">
            But what if there was another way?
          </p>

          <p className="text-base sm:text-lg mb-4 leading-relaxed text-slate-700">
            A natural solution that works through the same pathway as statins—but without destroying your quality of life?
          </p>

          <p className="text-base sm:text-lg mb-4 leading-relaxed text-slate-700">
            That's exactly what thousands of people with FH are discovering. They're managing their genetic cholesterol without prescription dependency. Without the side effect nightmare.
          </p>

          <p className="text-base sm:text-lg mb-4 leading-relaxed text-slate-700">
            And their doctors are shocked by their lab results.
          </p>

          <p className="text-base sm:text-lg mb-4 leading-relaxed text-slate-700">
            One user shared: <span className="font-semibold">"My cholesterol dropped from 245 to 177 without any dietary changes. My cardiologist thought it was the statin working. I told him it wasn't—and he was okay with it based on my labs."</span>
          </p>

          <p className="text-base sm:text-lg mb-6 leading-relaxed text-slate-700">
            Here's the truth Big Pharma doesn't want you to know...
          </p>

          {/* Expert Box */}
          <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm inline-flex items-center gap-4 mb-12">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center flex-shrink-0">
              <span className="text-2xl font-bold text-teal-700">SC</span>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-bold text-slate-900">By Dr. Sarah Chen</h3>
                <Badge variant="secondary" className="bg-blue-100 text-blue-700 text-xs">
                  <ShieldCheck className="w-3 h-3 mr-1" />
                  Verified
                </Badge>
              </div>
              <p className="text-sm text-teal-600 font-medium">Cardiologist & Lipid Specialist</p>
            </div>
          </div>
        </div>

        {/* Numbered List Items */}
        <article className="space-y-16">
          {/* Item 1 */}
          <section className="scroll-mt-20">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
              {/* Image on the left */}
              <div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F2a9401f877da48d6b4f725528745b384%2F2477cc88aa41412ab116ccfc8555619a?format=webp&width=800"
                  alt="Lunessa vs Statins comparison showing raspberry gummies with clinical dose and prescription bottle"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>

              {/* Content on the right */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
                  1. You Get The Same Cholesterol-Lowering Pathway—With Protection Statins Don't Provide
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Statins block the HMG-CoA reductase pathway to stop cholesterol production. That part works.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  But that same pathway also makes CoQ10—the nutrient your cells need for energy.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Statins block cholesterol AND steal your CoQ10 at the same time. This is why you feel exhausted. Why your muscles hurt. Why you can barely function.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  I found Lunessa—a red yeast rice and CoQ10 supplement in gummy form. 2400mg of red yeast rice and 200mg of CoQ10 per serving. Third-party tested. Clinical dosing. And gummies—not horse-sized pills.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Red yeast rice naturally contains monacolin K, the same compound in lovastatin. Same pathway. Same mechanism.
                </p>

                <p className="text-lg leading-relaxed font-semibold text-slate-900">
                  But with 200mg of CoQ10 to protect your cellular energy.
                </p>
              </div>
            </div>
          </section>

          {/* Item 2 */}
          <section className="scroll-mt-20">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
              {/* Image on the left */}
              <div>
                <img src="/placeholder.svg" alt="Statin side effects" className="w-full rounded-lg shadow-lg h-64 object-cover bg-gradient-to-br from-orange-100 to-red-200" />
              </div>

              {/* Content on the right */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
                  2. Lower Your Cholesterol Without Losing Your Life
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Real statin users describe their nightmare:
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  <span className="font-semibold">"Muscle pain so intense it put me in the ER."</span>
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  <span className="font-semibold">"I was exhausted and useless. I wasn't myself anymore."</span>
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  <span className="font-semibold">"It felt like terrible flu aches all over my body."</span>
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  This is what happens when you strip CoQ10 from every cell. Your muscles can't work. Your heart struggles. Your brain can't think.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Lunessa provides the same cholesterol mechanism while giving back what statins steal. Users report managing their numbers without muscle destruction.
                </p>

                <p className="text-lg leading-relaxed font-semibold text-slate-900">
                  "Red yeast rice works without the statin side effects. I refused statins and my doctor was fine with it after seeing my labs."
                </p>
              </div>
            </div>
          </section>

          {/* Item 3 */}
          <section className="scroll-mt-20">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
              {/* Image on the left */}
              <div>
                <img src="/placeholder.svg" alt="Healthy lifestyle with FH" className="w-full rounded-lg shadow-lg h-64 object-cover bg-gradient-to-br from-green-100 to-emerald-200" />
              </div>

              {/* Content on the right */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
                  3. You're Already Doing Everything Right—Your Medication Shouldn't Make You Feel Worse
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  You have FH. You follow a strict diet. You exercise. You do everything right.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  The last thing you need is medication that makes you feel like you're dying.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  One user: <span className="font-semibold">"I eat whole food plant-based. No oil. No nuts. My LDL is still 160 with ezetimibe."</span>
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Statin users describe feeling "literally poisoned" with "debilitating muscle and joint pain."
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Lunessa users report different results:
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  <span className="font-semibold">"His cholesterol went from 245 to 177 without any dietary changes."</span>
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  <span className="font-semibold">"My cholesterol dropped from 225 to 173 after 10 weeks."</span>
                </p>

                <p className="text-lg leading-relaxed font-semibold text-slate-900">
                  Zero ER visits. Zero muscle destruction. Just results.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section 1 */}
          <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-xl p-8 shadow-xl border-2 border-teal-200 my-16">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Badge variant="secondary" className="bg-teal-600 text-white text-xs px-3 py-1">
                HOLIDAY SALE DEAL - SAVINGS + FREE GIFT
              </Badge>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">EVIDENCE-BASED FORMULA WITH ONE DAILY SERVING</h3>
                <p className="text-teal-700 font-semibold mb-6">54% OFF + FREE Gifts Today's Limited Offer</p>
                
                <div className="bg-white rounded-lg p-6 shadow-md mb-6">
                  <img src="/placeholder.svg" alt="Product bottles" className="w-full h-48 object-contain mb-4 bg-gradient-to-br from-teal-100 to-cyan-100 rounded" />
                </div>

                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Clinical-Dose Red Yeast Rice (2400mg)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Protective CoQ10 (200mg)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>No Horse-Sized Pills to Swallow</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Third-Party Tested & Citrinin-Free</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>FREE Shipping + 90-Day Guarantee</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="text-center mb-4">
                  <Badge variant="secondary" className="bg-red-500 text-white mb-2">
                    <Gift className="w-4 h-4 mr-1" />
                    FREE GIFTS WITH ORDER
                  </Badge>
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">UP TO 54% OFF + FREE GIFTS FOR A LIMITED TIME ONLY</h4>
                  <p className="text-sm text-slate-600 mb-4">This limited-time deal is in high demand and stock keeps selling out.</p>
                </div>

                <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white text-lg py-6 mb-4 shadow-lg">
                  54% OFF + FREE GIFTS →
                </Button>

                <div className="flex items-center justify-between text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <span>Sell-Out Risk:</span>
                    <span className="text-red-600 font-bold">High</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="font-semibold">FREE Shipping</span>
                  </div>
                </div>

                <p className="text-center text-xs text-slate-600">
                  90-Day Money Back Guarantee! If you don't see LDL improvement, you don't pay.
                </p>
              </div>
            </div>
          </div>

          {/* Item 4 */}
          <section className="scroll-mt-20">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
              {/* Image on the left */}
              <div>
                <img src="/placeholder.svg" alt="Gummy supplements" className="w-full rounded-lg shadow-lg h-64 object-cover bg-gradient-to-br from-amber-100 to-yellow-200" />
              </div>

              {/* Content on the right */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
                  4. Manage Your Health On Your Terms—Not Big Pharma's Schedule
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Statins mean lifelong prescriptions. Dismissive appointments. Insurance battles. Pharmacy trips.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  And 38% of adults struggle to swallow pills.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  If you have FH, you're already taking multiple medications. More giant pills to choke down every day.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Lunessa comes in gummy form—pharmaceutical-grade but easy to take. No prescription gatekeeping. No doctor appointments for refills.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Complete freedom to manage your health.
                </p>

                <p className="text-lg leading-relaxed font-semibold text-slate-900">
                  One user: "I refused statins. My doctor thought it was the statin working. I told him it wasn't and he was okay with it based on my labs."
                </p>
              </div>
            </div>
          </section>

          {/* Item 5 */}
          <section className="scroll-mt-20">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
              {/* Image on the left */}
              <div>
                <img src="/placeholder.svg" alt="Third-party testing" className="w-full rounded-lg shadow-lg h-64 object-cover bg-gradient-to-br from-cyan-100 to-blue-200" />
              </div>

              {/* Content on the right */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
                  5. Third-Party Tested Purity vs. Big Pharma's Decades of Denial
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  For 30+ years, pharmaceutical companies dismissed statin side effects as "rare."
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Meanwhile, people got permanently damaged.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  One user: <span className="font-semibold">"I stopped statins over a year ago and I'm still in pain. I still can't walk upstairs."</span>
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Every batch of Lunessa is third-party tested and certified citrinin-free. Pharmaceutical-grade precision. 2400mg red yeast rice + 200mg CoQ10 per serving.
                </p>

                <p className="text-lg leading-relaxed font-semibold text-slate-900">
                  Same cholesterol mechanism. With the safety testing and CoQ10 protection Big Pharma won't provide.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section 2 */}
          <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-xl p-8 shadow-xl border-2 border-teal-200 my-16">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Badge variant="secondary" className="bg-teal-600 text-white text-xs px-3 py-1">
                HOLIDAY SALE DEAL
              </Badge>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">EVIDENCE-BASED FORMULA WITH ONE DAILY SERVING</h3>
                <p className="text-teal-700 font-semibold mb-6">54% OFF + FREE Gifts Today's Limited Offer</p>
                
                <div className="bg-white rounded-lg p-6 shadow-md mb-6">
                  <img src="/placeholder.svg" alt="Product bottles" className="w-full h-48 object-contain mb-4 bg-gradient-to-br from-teal-100 to-cyan-100 rounded" />
                </div>

                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Clinical-Dose Red Yeast Rice (2400mg)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Protective CoQ10 (200mg)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>No Horse-Sized Pills to Swallow</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Third-Party Tested & Citrinin-Free</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>FREE Shipping + 90-Day Guarantee</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="text-center mb-4">
                  <Badge variant="secondary" className="bg-red-500 text-white mb-2">
                    <Gift className="w-4 h-4 mr-1" />
                    FREE GIFTS WITH ORDER
                  </Badge>
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">UP TO 54% OFF + FREE GIFTS FOR A LIMITED TIME ONLY</h4>
                  <p className="text-sm text-slate-600 mb-4">This limited-time deal is in high demand and stock keeps selling out.</p>
                </div>

                <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white text-lg py-6 mb-4 shadow-lg">
                  54% OFF + FREE GIFTS →
                </Button>

                <div className="flex items-center justify-between text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <span>Sell-Out Risk:</span>
                    <span className="text-red-600 font-bold">High</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="font-semibold">FREE Shipping</span>
                  </div>
                </div>

                <p className="text-center text-xs text-slate-600">
                  90-Day Money Back Guarantee! If you don't see LDL improvement, you don't pay.
                </p>
              </div>
            </div>
          </div>

          {/* Item 6 - Horizontal layout */}
          <section className="scroll-mt-20">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
              {/* Visual on the left */}
              <div>
                <img src="/placeholder.svg" alt="Red yeast rice and CoQ10 supplement" className="w-full rounded-lg shadow-lg h-64 object-cover bg-gradient-to-br from-red-100 to-pink-200" />
              </div>

              {/* Content on the right */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
                  6. Nature's Statin Without The Side Effect Nightmare
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Statins work. But at what cost?
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Muscle pain so bad you can't exercise. Brain fog described as "like I'm walking around in a haze." Side effects so severe people feel "literally poisoned."
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Lunessa combines clinical-strength red yeast rice (2400mg) with protective CoQ10 (200mg). Red yeast rice works through the same HMG-CoA reductase pathway as lovastatin.
                </p>

                <p className="text-lg leading-relaxed font-semibold text-slate-900">
                  Same mechanism. Zero side effect cascade.
                </p>
              </div>
            </div>
          </section>

          {/* Item 7 - Horizontal layout */}
          <section className="scroll-mt-20">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
              {/* Visual on the left */}
              <div>
                <img src="/placeholder.svg" alt="Heart health and cellular protection" className="w-full rounded-lg shadow-lg h-64 object-cover bg-gradient-to-br from-blue-100 to-indigo-200" />
              </div>

              {/* Content on the right */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
                  7. Support Your Heart Without Trading It For Diabetes
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Statins can increase diabetes risk. They deplete CoQ10 your heart needs to function.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  You're protecting your heart while damaging your heart.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  One user: <span className="font-semibold">"Statins brought my A1C to pre-diabetic levels and rendered me useless with side effects."</span>
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Red yeast rice works through the same pathway while CoQ10 protects cellular energy.
                </p>

                <p className="text-lg leading-relaxed font-semibold text-slate-900">
                  "Red yeast rice plus CoQ10 lowered my LDL from 148 to 55."
                </p>
              </div>
            </div>
          </section>

          {/* Item 8 - Horizontal layout */}
          <section className="scroll-mt-20">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
              {/* Visual on the left */}
              <div>
                <img src="/placeholder.svg" alt="Brain health and mental clarity" className="w-full rounded-lg shadow-lg h-64 object-cover bg-gradient-to-br from-purple-100 to-pink-200" />
              </div>

              {/* Content on the right */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
                  8. Keep Your Mind Sharp Instead of Losing Yourself
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Statin users describe terrifying cognitive effects:
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  <span className="font-semibold">"Within a week of stopping, the brain fog lifted. I hadn't realized how bad I had felt for years."</span>
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  <span className="font-semibold">"I felt like I was losing my mind."</span>
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  For those watching parents decline with dementia, any cognitive impact is unacceptable.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Natural cholesterol management through red yeast rice preserves the mental clarity statins compromise.
                </p>

                <p className="text-lg leading-relaxed font-semibold text-slate-900">
                  Wake up sharp. Not wondering if it's medication damage.
                </p>
              </div>
            </div>
          </section>

          {/* Item 9 - Horizontal layout */}
          <section className="scroll-mt-20">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
              {/* Visual on the left */}
              <div>
                <img src="/placeholder.svg" alt="Third-party testing certification" className="w-full rounded-lg shadow-lg h-64 object-cover bg-gradient-to-br from-green-100 to-teal-200" />
              </div>

              {/* Content on the right */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
                  9. Complete Transparency vs. Corporate Lies
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Big Pharma minimized statin side effects for 30+ years while patients suffered.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  <span className="font-semibold">"Everyone needs to know that statins can do permanent nerve and muscle damage!"</span>
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  One cardiologist told a patient: <span className="font-semibold">"The muscle aches can feel just like the flu."</span>
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Every single day. For years.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Every batch of Lunessa undergoes rigorous third-party testing. Citrinin-free certification. Clinical dosing at 2400mg red yeast rice + 200mg CoQ10 per serving.
                </p>

                <p className="text-lg leading-relaxed font-semibold text-slate-900">
                  Trust ingredients proven to lower LDL by up to 30%. Not corporate denials protecting billion-dollar patents.
                </p>
              </div>
            </div>
          </section>

          {/* Item 10 */}
          <section className="scroll-mt-20">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
              {/* Image on the left */}
              <div>
                <img src="/placeholder.svg" alt="Success stories" className="w-full rounded-lg shadow-lg h-64 object-cover bg-gradient-to-br from-violet-100 to-purple-200" />
              </div>

              {/* Content on the right */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
                  10. Join Thousands Who've Escaped The Statin Trap
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Big Pharma generates billions from statin prescriptions while dismissing quality-of-life destruction as "necessary."
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  People with FH are waking up.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  <span className="font-semibold">"I've been taking it for 6 months... LDL halved."</span>
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  <span className="font-semibold">"It works without the statin side effects. I refused statins."</span>
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  <span className="font-semibold">"My cholesterol went from 245 to 177 without changing my diet."</span>
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  When thousands refuse to go back to prescription dependency after discovering red yeast rice + CoQ10, something real is happening.
                </p>

                <p className="text-lg leading-relaxed font-semibold text-slate-900">
                  You don't have to accept the side effect nightmare.
                </p>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-xl p-8 shadow-xl border-2 border-teal-200 my-16">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Badge variant="secondary" className="bg-teal-600 text-white text-xs px-3 py-1">
                HOLIDAY SALE DEAL
              </Badge>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">EVIDENCE-BASED FORMULA WITH ONE DAILY SERVING</h3>
                <p className="text-teal-700 font-semibold mb-6">54% OFF + FREE Gifts Today's Limited Offer</p>
                
                <div className="bg-white rounded-lg p-6 shadow-md mb-6">
                  <img src="/placeholder.svg" alt="Product bottles" className="w-full h-48 object-contain mb-4 bg-gradient-to-br from-teal-100 to-cyan-100 rounded" />
                </div>

                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Clinical-Dose Red Yeast Rice (2400mg)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Protective CoQ10 (200mg)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>No Horse-Sized Pills to Swallow</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Third-Party Tested & Citrinin-Free</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>FREE Shipping + 90-Day Guarantee</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="text-center mb-4">
                  <Badge variant="secondary" className="bg-red-500 text-white mb-2">
                    <Gift className="w-4 h-4 mr-1" />
                    FREE GIFTS WITH ORDER
                  </Badge>
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">UP TO 54% OFF + FREE GIFTS FOR A LIMITED TIME ONLY</h4>
                  <p className="text-sm text-slate-600 mb-4">This limited-time deal is in high demand and stock keeps selling out.</p>
                </div>

                <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white text-lg py-6 mb-4 shadow-lg">
                  54% OFF + FREE GIFTS →
                </Button>

                <div className="flex items-center justify-between text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <span>Sell-Out Risk:</span>
                    <span className="text-red-600 font-bold">High</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="font-semibold">FREE Shipping</span>
                  </div>
                </div>

                <p className="text-center text-xs text-slate-600">
                  90-Day Money Back Guarantee! If you don't see LDL improvement, you don't pay.
                </p>
              </div>
            </div>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-sm mb-4">© 2025 Lunessa. All rights reserved.</p>
            <div className="flex items-center justify-center gap-4 text-sm">
              <a href="#" className="hover:text-teal-400 transition">Privacy Policy</a>
              <span className="text-slate-600">•</span>
              <a href="#" className="hover:text-teal-400 transition">Terms of Service</a>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8 space-y-4 text-xs text-slate-400 leading-relaxed">
            <p>
              These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. Individual results may vary.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
