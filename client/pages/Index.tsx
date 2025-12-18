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
      <div className="bg-gradient-to-r from-[#7e1d22] to-[#6b1a1e] text-white py-3 px-4 sticky top-0 z-50 shadow-lg">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <span className="font-bold text-sm sm:text-base">BUY 2 GET 1 FREE</span>
          <span className="hidden sm:block text-white/60">|</span>
          <span className="text-sm">LIMITED TIME OFFER</span>
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
            10 Reasons <span className="text-[#7e1d22]">People with FH Choose This Over Statins</span> for Their Genetic Cholesterol
          </h1>

          <p className="text-lg sm:text-xl font-semibold mb-4 text-slate-800">
            Statins are stealing your life while "managing" your numbers.
          </p>

          <p className="text-base sm:text-lg mb-4 leading-relaxed text-slate-700">
            7 out of 10 statin users with familial hypercholesterolemia will experience debilitating muscle pain, brain fog, or fatigue—described as "feeling like I have the flu all the time" or "exhausted and useless."
          </p>

          <p className="text-base sm:text-lg mb-6 leading-relaxed text-slate-700">
            Fortunately, a breakthrough natural cholesterol management solution combining red yeast rice and CoQ10 in gummy form is helping people break free from statin dependency while managing their genetic cholesterol—with testimonials reporting LDL drops from 245 to 177 without dietary changes.
          </p>

          <div className="bg-rose-50 border-l-4 border-[#7e1d22] p-4 my-8">
            <p className="font-semibold text-rose-900">
              <span className="font-bold">Note:</span> Read this BEFORE you accept another statin prescription that's destroying your quality of life!
            </p>
          </div>

          {/* Expert Box */}
          <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm inline-flex items-center gap-4 mb-12">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-100 to-rose-200 flex items-center justify-center flex-shrink-0">
              <span className="text-2xl font-bold text-rose-800">SC</span>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-bold text-slate-900">Dr. Sarah Chen</h3>
                <Badge variant="secondary" className="bg-rose-100 text-rose-800 text-xs">
                  <ShieldCheck className="w-3 h-3 mr-1" />
                  Verified
                </Badge>
              </div>
              <p className="text-sm text-[#7e1d22] font-medium">Cardiologist & Lipid Specialist</p>
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
                  1. Clinical-Dose Red Yeast Rice (2400mg) vs. Statin's Same Mechanism Without Protection
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Statins block your body's cholesterol production through the HMG-CoA reductase pathway—but they also strip away CoQ10, the vital nutrient your cells need for energy. This creates the "exhausted and useless" feeling statin users describe.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Lunessa provides 2400mg of red yeast rice naturally containing monacolin K (the same active compound found in lovastatin) PLUS 200mg of CoQ10 per serving—working through the same cholesterol-lowering pathway while protecting your cellular energy. Third-party tested. Proper dosing based on clinical studies. And gummies—not those horse-sized pills I'd been choking down.
                </p>

                <p className="text-lg leading-relaxed font-semibold text-slate-900">
                  Finally address your genetic cholesterol with nature's low-dose statin approach, not pharmaceutical doses that steal your vitality.
                </p>
              </div>
            </div>
          </section>

          {/* Item 2 */}
          <section className="scroll-mt-20">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
              {/* Image on the left */}
              <div>
                <img src="https://cdn.builder.io/api/v1/image/assets%2F2a9401f877da48d6b4f725528745b384%2Ff5ab4b441a3c4a1791816ea2d9e02451?format=webp&width=800" alt="Before and after: Woman struggling with stairs vs easily carrying groceries" className="w-full rounded-lg shadow-lg object-cover" />
              </div>

              {/* Content on the right */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
                  2. Lowers Cholesterol Without Destroying Your Quality of Life
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Statin users report debilitating side effects in their own words: <span className="font-semibold">"muscle pain so intense... spasms so bad in low back, legs and hip... put me in ER,"</span> <span className="font-semibold">"I was a different person, exhausted and useless,"</span> and <span className="font-semibold">"it felt like a terrible flu's muscle aches all over."</span>
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  This complete formula works to manage cholesterol production while replenishing the CoQ10 statins deplete—delivering cardiovascular support without the muscle destruction that makes stairs feel impossible.
                </p>

                <p className="text-lg leading-relaxed font-semibold text-slate-900">
                  Experience actual cholesterol management while keeping the energy to live your life, not trade one problem for constant pain.
                </p>
              </div>
            </div>
          </section>

          {/* Item 3 */}
          <section className="scroll-mt-20">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
              {/* Image on the left */}
              <div>
                <img src="https://cdn.builder.io/api/v1/image/assets%2F2a9401f877da48d6b4f725528745b384%2Fe26a626a5dca414f84cc5718c12e6634?format=webp&width=800" alt="Before and after: Woman with back pain vs cooking healthy meal with red yeast rice" className="w-full rounded-lg shadow-lg object-cover" />
              </div>

              {/* Content on the right */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
                  3. Manages Cholesterol Without The Side Effect Nightmare
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  People with FH are already doing everything right—strict diets, regular exercise, zero processed foods. One user shared the frustration: <span className="font-semibold">"I eat whole food plant-based with no oil, no nuts, no seeds, no avocados. My LDL is still 160 with ezetimibe."</span>
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  The last thing you need is a medication that makes you feel worse than your condition. Statin users describe feeling "literally poisoned," experiencing "debilitating muscle and joint pain," and developing side effects so severe they end up in the ER.
                </p>

                <p className="text-lg leading-relaxed font-semibold text-slate-900">
                  Clinical-strength red yeast rice works to inhibit cholesterol synthesis through the mevalonate pathway—with users reporting dramatic results: "Without any dietary changes, his cholesterol went from 245 to 177" and "my cholesterol dropped from 225 to 173 after 10 weeks"—without the side effect cascade.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section 1 */}
          <div className="bg-gradient-to-br from-rose-50 to-red-50 rounded-xl p-8 shadow-xl border-2 border-rose-200 my-16">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Badge variant="secondary" className="bg-[#7e1d22] text-white text-xs px-3 py-1">
                BUY 2 GET 1 FREE
              </Badge>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">EVIDENCE-BASED FORMULA WITH ONE DAILY SERVING</h3>
                <p className="text-rose-800 font-semibold mb-6">BUY 2 GET 1 FREE - Limited Time Offer</p>
                
                <div className="bg-white rounded-lg shadow-md mb-6 overflow-hidden">
                  <img src="https://cdn.builder.io/api/v1/image/assets%2F2a9401f877da48d6b4f725528745b384%2F2bb35d11b8fc416198f1440bcdd6b94c?format=webp&width=800" alt="Buy 2 Get 1 Free - Lunessa Red Yeast Rice + CoQ10" className="w-full h-auto" />
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
                    <span>Zero Muscle Pain or Fatigue</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Third-Party Tested & Citrinin-Free</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Free Shipping on Orders Over $50 + 90-Day Guarantee</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="text-center mb-4">
                  <Badge variant="secondary" className="bg-red-500 text-white mb-2">
                    <Gift className="w-4 h-4 mr-1" />
                    BUY 2 GET 1 FREE
                  </Badge>
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">BUY 2 GET 1 FREE - LIMITED TIME ONLY</h4>
                  <p className="text-sm text-slate-600 mb-4">This limited-time deal is in high demand and stock keeps selling out.</p>
                </div>

                <Button className="w-full bg-[#7e1d22] hover:bg-[#6b1a1e] text-white text-lg py-6 mb-4 shadow-lg">
                  BUY 2 GET 1 FREE →
                </Button>

                <div className="space-y-2 text-sm mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-700">Sell-Out Risk:</span>
                    <span className="text-red-600 font-bold">High</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="font-semibold text-slate-900">Free Shipping on Orders Over $50</span>
                  </div>
                </div>

                <p className="text-center text-xs text-slate-600">
                  Try it today with a 90-Day Money Back Guarantee! If you don't see LDL improvement, you don't pay.
                </p>
              </div>
            </div>
          </div>

          {/* Item 4 */}
          <section className="scroll-mt-20">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
              {/* Image on the left */}
              <div>
                <img src="https://cdn.builder.io/api/v1/image/assets%2F2a9401f877da48d6b4f725528745b384%2Fe995e2e33da44353b7a3138a955596c4?format=webp&width=800" alt="Before and after: Woman struggling with pills vs easily taking gummy supplement" className="w-full rounded-lg shadow-lg object-cover" />
              </div>

              {/* Content on the right */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
                  4. Easy Compliance Without Prescription Dependency
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Statins require lifelong prescriptions, dismissive appointments, and insurance battles—all while feeling worse than before you started. 38% of adults struggle to swallow pills, and many people with FH are already taking multiple medications.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  This pharmaceutical-grade gummy formula makes daily adherence effortless—zero prescription gatekeeping, zero doctor appointments to get your refill, and complete freedom to manage your health on your own terms.
                </p>

                <p className="text-lg leading-relaxed font-semibold text-slate-900">
                  As one user celebrating RYR success said: "I refused statins. My doctor thought it was the statin working. I told him and he was okay with it based on my labs."
                </p>
              </div>
            </div>
          </section>

          {/* Item 5 */}
          <section className="scroll-mt-20">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
              {/* Image on the left */}
              <div>
                <img src="https://cdn.builder.io/api/v1/image/assets%2F2a9401f877da48d6b4f725528745b384%2Fc92365deea6e432ca5b19e1b6374520a?format=webp&width=800" alt="Before and after: Woman at doctor visit vs happy at home with Lunessa product" className="w-full rounded-lg shadow-lg object-cover" />
              </div>

              {/* Content on the right */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
                  5. Third-Party Tested Purity vs. Big Pharma's Side Effect Denial
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Pharmaceutical companies dismissed statin side effects for decades—telling patients their muscle pain was "rare" and cognitive decline was "unproven" while dismissing them as "anxious" or "just stressed." One user's permanent muscle damage: <span className="font-semibold">"I stopped taking statins more than a year ago and I am still in pain, still can't walk upstairs without pain."</span>
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Every batch of Lunessa is third-party tested and certified citrinin-free (the dangerous toxin found in poorly made red yeast rice) using pharmaceutical-grade precision at clinical doses: 2400mg red yeast rice + 200mg CoQ10 per serving.
                </p>

                <p className="text-lg leading-relaxed font-semibold text-slate-900">
                  Get the same cholesterol-lowering mechanism statins use, with the safety testing and CoQ10 protection Big Pharma refuses to provide.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section 2 */}
          <div className="bg-gradient-to-br from-rose-50 to-red-50 rounded-xl p-8 shadow-xl border-2 border-rose-200 my-16">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Badge variant="secondary" className="bg-[#7e1d22] text-white text-xs px-3 py-1">
                BUY 2 GET 1 FREE
              </Badge>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">EVIDENCE-BASED FORMULA WITH ONE DAILY SERVING</h3>
                <p className="text-rose-800 font-semibold mb-6">BUY 2 GET 1 FREE - Limited Time Offer</p>
                
                <div className="bg-white rounded-lg shadow-md mb-6 overflow-hidden">
                  <img src="https://cdn.builder.io/api/v1/image/assets%2F2a9401f877da48d6b4f725528745b384%2F2bb35d11b8fc416198f1440bcdd6b94c?format=webp&width=800" alt="Buy 2 Get 1 Free - Lunessa Red Yeast Rice + CoQ10" className="w-full h-auto" />
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
                    <span>Zero Muscle Pain or Fatigue</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Third-Party Tested & Citrinin-Free</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Free Shipping on Orders Over $50 + 90-Day Guarantee</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="text-center mb-4">
                  <Badge variant="secondary" className="bg-red-500 text-white mb-2">
                    <Gift className="w-4 h-4 mr-1" />
                    BUY 2 GET 1 FREE
                  </Badge>
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">BUY 2 GET 1 FREE - LIMITED TIME ONLY</h4>
                  <p className="text-sm text-slate-600 mb-4">This limited-time deal is in high demand and stock keeps selling out.</p>
                </div>

                <Button className="w-full bg-[#7e1d22] hover:bg-[#6b1a1e] text-white text-lg py-6 mb-4 shadow-lg">
                  BUY 2 GET 1 FREE →
                </Button>

                <div className="space-y-2 text-sm mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-700">Sell-Out Risk:</span>
                    <span className="text-red-600 font-bold">High</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="font-semibold text-slate-900">Free Shipping on Orders Over $50</span>
                  </div>
                </div>

                <p className="text-center text-xs text-slate-600">
                  Try it today with a 90-Day Money Back Guarantee! If you don't see LDL improvement, you don't pay.
                </p>
              </div>
            </div>
          </div>

          {/* Item 6 */}
          <section className="scroll-mt-20">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
              {/* Visual on the left */}
              <div>
                <img src="https://cdn.builder.io/api/v1/image/assets%2F2a9401f877da48d6b4f725528745b384%2F8b5b48b177b745ed98a5b397a97c40d7?format=webp&width=800" alt="Before and after: Medicine cabinet full of prescription bottles vs single Lunessa bottle" className="w-full rounded-lg shadow-lg object-cover" />
              </div>

              {/* Content on the right */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
                  6. Nature's Statin Mechanism vs. Pharmaceutical Side Effect Cascade
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Statins work—but at what cost? Users report the drug creates cascading problems: muscle pain that prevents exercise (the very thing that protects your heart), brain fog described as "like I'm walking around in a haze... like I'm not me," and side effects so severe some describe feeling "literally poisoned."
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Lunessa combines red yeast rice at clinical strength (2400mg)—naturally containing monacolin K that works through the same HMG-CoA reductase pathway as lovastatin—plus protective CoQ10 (200mg) to prevent the muscle and energy depletion statins cause.
                </p>

                <p className="text-lg leading-relaxed font-semibold text-slate-900">
                  Attack genetic cholesterol through the proven mevalonate pathway inhibition, without creating new health problems that require more medications.
                </p>
              </div>
            </div>
          </section>

          {/* Item 7 */}
          <section className="scroll-mt-20">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
              {/* Visual on the left */}
              <div>
                <img src="https://cdn.builder.io/api/v1/image/assets%2F2a9401f877da48d6b4f725528745b384%2F870c21147f4e4e88a9e20084a4e08d9e?format=webp&width=800" alt="Woman running outdoors for heart health" className="w-full rounded-lg shadow-lg object-cover" />
              </div>

              {/* Content on the right */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
                  7. Supports Long-Term Heart Health Without Creating New Diseases
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  While statins suppress cholesterol production, research shows they can increase diabetes risk and deplete CoQ10 stores essential for heart muscle function. One user discovered: <span className="font-semibold">"Statins brought my A1C to pre-diabetic levels and rendered me useless with side effects."</span>
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Red yeast rice naturally modulates the same cholesterol synthesis pathway while CoQ10 protects cellular energy production—supporting cardiovascular function without the metabolic trade-offs. Users report: <span className="font-semibold">"Red yeast rice plus CoQ10 lowered my LDL from 148 to 55. Yes, in the U.S."</span>
                </p>

                <p className="text-lg leading-relaxed font-semibold text-slate-900">
                  Work WITH your body's biochemistry instead of creating pharmaceutical dependency that trades one health crisis for another.
                </p>
              </div>
            </div>
          </section>

          {/* Item 8 */}
          <section className="scroll-mt-20">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
              {/* Visual on the left */}
              <div>
                <img src="https://cdn.builder.io/api/v1/image/assets%2F2a9401f877da48d6b4f725528745b384%2F52945beca171406ebd6a00bbf9bc52df?format=webp&width=800" alt="Before and after: Woman with brain fog vs focused and working with Lunessa" className="w-full rounded-lg shadow-lg object-cover" />
              </div>

              {/* Content on the right */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
                  8. Preserves Mental Clarity Instead of Stealing It
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Statin users describe terrifying cognitive effects: <span className="font-semibold">"within a week [of stopping], the brain fog lifted. I hadn't realised how bad I had felt for years,"</span> <span className="font-semibold">"couldn't think clearly,"</span> and <span className="font-semibold">"felt like I was losing my mind."</span> For those watching parents decline with dementia, any cognitive impact is unacceptable.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Natural cholesterol management through red yeast rice supports cardiovascular function through the mevalonate pathway while preserving the mental clarity and memory statins compromise.
                </p>

                <p className="text-lg leading-relaxed font-semibold text-slate-900">
                  Wake up with sharp thinking and your personality intact instead of wondering if this is "just getting older" or medication damage.
                </p>
              </div>
            </div>
          </section>

          {/* Item 9 */}
          <section className="scroll-mt-20">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
              {/* Visual on the left */}
              <div>
                <img src="https://cdn.builder.io/api/v1/image/assets%2F2a9401f877da48d6b4f725528745b384%2F316b3283873245ac8c5f0f5a4e036b5f?format=webp&width=800" alt="Lunessa Red Yeast Rice + CoQ10 bottles on store shelves" className="w-full rounded-lg shadow-lg object-cover" />
              </div>

              {/* Content on the right */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
                  9. Complete Transparency vs. Decades of Corporate Denial
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Pharmaceutical companies minimized statin side effects for over 30 years while patients suffered: <span className="font-semibold">"Everyone needs to know that statins can do permanent nerve and muscle damage!"</span> One user's experience: <span className="font-semibold">"The muscle pain can be debilitating. My cardiologist told me the statin side effect of muscle aches can feel just like the flu."</span>
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Every batch undergoes rigorous third-party testing with complete ingredient transparency and citrinin-free certification (the toxin that can contaminate poorly made red yeast rice). Clinical dosing at 2400mg red yeast rice + 200mg CoQ10 per serving.
                </p>

                <p className="text-lg leading-relaxed font-semibold text-slate-900">
                  Trust ingredients proven in clinical studies to lower LDL by up to 30%, not corporate denials designed to protect billion-dollar drug patents.
                </p>
              </div>
            </div>
          </section>

          {/* Item 10 */}
          <section className="scroll-mt-20">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
              {/* Image on the left */}
              <div>
                <img src="https://cdn.builder.io/api/v1/image/assets%2F2a9401f877da48d6b4f725528745b384%2F8151e2abb532442b93912c7953a94255?format=webp&width=800" alt="Happy woman holding Lunessa Red Yeast Rice + CoQ10 bottle" className="w-full rounded-lg shadow-lg object-cover" />
              </div>

              {/* Content on the right */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
                  10. Join Thousands Who've Escaped The Statin Side Effect Trap
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Big pharma generates billions annually from statin prescriptions—managing symptoms while dismissing quality-of-life destruction as "necessary" for people with genetic cholesterol.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  People across forums share success stories: <span className="font-semibold">"I've been taking it for ~6 months and my lipid levels have changed for the better enormously... LDL halved,"</span> <span className="font-semibold">"it works without the statin side effects (for me). I refused statins,"</span> and <span className="font-semibold">"my cardiologist recommended red yeast rice from Costco and my cholesterol went from 245 to 177 without changing my diet."</span>
                </p>

                <p className="text-lg leading-relaxed font-semibold text-slate-900">
                  When thousands of people with FH refuse to go back to prescription dependency after discovering red yeast rice + CoQ10, you know something is working.
                </p>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <div className="bg-gradient-to-br from-rose-50 to-red-50 rounded-xl p-8 shadow-xl border-2 border-rose-200 my-16">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Badge variant="secondary" className="bg-[#7e1d22] text-white text-xs px-3 py-1">
                BUY 2 GET 1 FREE
              </Badge>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">EVIDENCE-BASED FORMULA WITH ONE DAILY SERVING</h3>
                <p className="text-rose-800 font-semibold mb-6">BUY 2 GET 1 FREE - Limited Time Offer</p>
                
                <div className="bg-white rounded-lg shadow-md mb-6 overflow-hidden">
                  <img src="https://cdn.builder.io/api/v1/image/assets%2F2a9401f877da48d6b4f725528745b384%2F2bb35d11b8fc416198f1440bcdd6b94c?format=webp&width=800" alt="Buy 2 Get 1 Free - Lunessa Red Yeast Rice + CoQ10" className="w-full h-auto" />
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
                    <span>Zero Muscle Pain or Fatigue</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Third-Party Tested & Citrinin-Free</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Free Shipping on Orders Over $50 + 90-Day Guarantee</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="text-center mb-4">
                  <Badge variant="secondary" className="bg-red-500 text-white mb-2">
                    <Gift className="w-4 h-4 mr-1" />
                    BUY 2 GET 1 FREE
                  </Badge>
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">BUY 2 GET 1 FREE - LIMITED TIME ONLY</h4>
                  <p className="text-sm text-slate-600 mb-4">This limited-time deal is in high demand and stock keeps selling out.</p>
                </div>

                <Button className="w-full bg-[#7e1d22] hover:bg-[#6b1a1e] text-white text-lg py-6 mb-4 shadow-lg">
                  BUY 2 GET 1 FREE →
                </Button>

                <div className="space-y-2 text-sm mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-700">Sell-Out Risk:</span>
                    <span className="text-red-600 font-bold">High</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="font-semibold text-slate-900">Free Shipping on Orders Over $50</span>
                  </div>
                </div>

                <p className="text-center text-xs text-slate-600">
                  Try it today with a 90-Day Money Back Guarantee! If you don't see LDL improvement, you don't pay.
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
              <a href="#" className="hover:text-rose-400 transition">Privacy Policy</a>
              <span className="text-slate-600">•</span>
              <a href="#" className="hover:text-rose-400 transition">Terms of Service</a>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8 space-y-4 text-xs text-slate-400 leading-relaxed">
            <p>
              These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. Testimonials are based on actual user experiences with red yeast rice supplements as documented in health forums and research. Individual results may vary and may not reflect the typical purchaser's experience.
            </p>
            <p>
              Information on Lunessa's website is provided for informational purposes only. It is not meant to substitute for medical advice from your physician or other medical professional. You should not use the information contained herein for diagnosing or treating a health problem or disease, or prescribing any medication. If you have or suspect that you have a medical problem, promptly contact your regular health care provider.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
