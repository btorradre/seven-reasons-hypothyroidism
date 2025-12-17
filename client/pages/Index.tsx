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
            10 Reasons <span className="text-teal-600">Women with FH Choose This Over Statins</span> for Their Genetic Cholesterol
          </h1>

          <p className="text-lg sm:text-xl font-semibold mb-4 text-slate-800">
            <span className="font-bold">7 out of 10 statin users with familial hypercholesterolemia</span> will experience debilitating side effects while their LDL stays dangerously high.
          </p>

          <p className="text-base sm:text-lg mb-4 leading-relaxed text-slate-700">
            Fortunately, a breakthrough <span className="font-semibold">natural cholesterol management solution</span> combining red yeast rice and CoQ10 in gummy form is helping women break free from statin dependency while actually addressing their genetic cholesterol — all with <span className="font-semibold">clinical-strength dosing and zero muscle pain</span>.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 my-8">
            <p className="font-semibold text-blue-900">
              <span className="font-bold">Note:</span> Read this BEFORE you accept another statin prescription that's destroying your quality of life!
            </p>
          </div>

          {/* Expert Box */}
          <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm inline-flex items-center gap-4 mb-12">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center flex-shrink-0">
              <span className="text-2xl font-bold text-teal-700">SC</span>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-bold text-slate-900">Dr. Sarah Chen</h3>
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
                  1. Clinical-Dose Red Yeast Rice (2400mg) vs. Statin's Identical Mechanism Without the Protection
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Statins block your body's cholesterol production but strip away CoQ10 — the vital nutrient your cells need for energy production. This creates the "zombie effect" statin users describe.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Lunessa provides the full 2400mg therapeutic dose of red yeast rice naturally containing monacolin K (the same active compound in lovastatin) PLUS 200mg of CoQ10 per serving — protecting your cellular energy while managing cholesterol.
                </p>

                <p className="text-lg leading-relaxed font-semibold text-slate-900">
                  Finally address your genetic cholesterol with the nutrient pair your body actually needs, not just cholesterol suppression that steals your energy.
                </p>
              </div>
            </div>
          </section>

          {/* Item 2 */}
          <section className="scroll-mt-20">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
              {/* Visuals on the left */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900 rounded-lg overflow-hidden shadow-lg">
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <svg className="w-6 h-6 text-teal-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                      </svg>
                      <span className="text-white font-bold">Lunessa</span>
                    </div>
                    <div className="relative h-48 bg-gradient-to-br from-slate-800 to-slate-700 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-32 h-32 text-teal-400/30" viewBox="0 0 100 100">
                        <path d="M50 10 C30 10 20 25 20 40 C20 50 25 60 35 65 L40 90 L50 95 L60 90 L65 65 C75 60 80 50 80 40 C80 25 70 10 50 10 Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-green-400 text-sm">
                        <Check className="w-4 h-4" />
                        <span>SUSTAINED ENERGY</span>
                      </div>
                      <div className="flex items-center gap-2 text-green-400 text-sm">
                        <Check className="w-4 h-4" />
                        <span>CELLULAR PROTECTION</span>
                      </div>
                      <div className="flex items-center gap-2 text-green-400 text-sm">
                        <Check className="w-4 h-4" />
                        <span>NO FATIGUE</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900 rounded-lg overflow-hidden shadow-lg">
                  <div className="p-6">
                    <div className="text-white font-bold mb-4">Statins</div>
                    <div className="relative h-48 bg-gradient-to-br from-red-900/50 to-slate-800 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-32 h-32 text-red-500/30" viewBox="0 0 100 100">
                        <path d="M50 10 C30 10 20 25 20 40 C20 50 25 60 35 65 L40 90 L50 95 L60 90 L65 65 C75 60 80 50 80 40 C80 25 70 10 50 10 Z" fill="currentColor"/>
                        <circle cx="50" cy="40" r="25" fill="rgba(239, 68, 68, 0.3)"/>
                      </svg>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-red-400 text-sm">
                        <span className="text-lg">×</span>
                        <span>CHRONIC FATIGUE</span>
                      </div>
                      <div className="flex items-center gap-2 text-red-400 text-sm">
                        <span className="text-lg">×</span>
                        <span>MUSCLE PAIN</span>
                      </div>
                      <div className="flex items-center gap-2 text-red-400 text-sm">
                        <span className="text-lg">×</span>
                        <span>BRAIN FOG</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content on the right */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
                  2. Blocks Cholesterol Production Without Destroying Your Mitochondria
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Statins deplete your body's CoQ10 by up to <span className="font-bold">40% within weeks</span> — the same nutrient your heart, brain, and muscles need to function. This is why <span className="font-bold">78% of long-term statin users</span> report debilitating fatigue described as "can barely get out of bed" or "feel like I'm 90 years old."
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  This complete formula works synergistically to manage cholesterol production while replenishing the CoQ10 statins destroy — delivering cardiovascular support where needed while preserving cellular energy.
                </p>

                <p className="text-lg leading-relaxed font-semibold text-slate-900">
                  Experience actual cholesterol management with sustained energy instead of trading one problem for another.
                </p>
              </div>
            </div>
          </section>

          {/* Item 3 */}
          <section className="scroll-mt-20">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
              {/* Images on the left */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img src="/placeholder.svg" alt="Woman outdoors healthy" className="w-full h-64 object-cover bg-gradient-to-br from-amber-100 to-orange-200" />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img src="/placeholder.svg" alt="Weight gain comparison" className="w-full h-64 object-cover bg-gradient-to-br from-blue-100 to-teal-200" />
                  <div className="bg-white p-4 text-center border-t-4 border-red-500">
                    <p className="text-red-600 font-bold text-sm">42lbs weight gain after Lipitor for only 8 months...</p>
                  </div>
                </div>
              </div>

              {/* Content on the right */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
                  3. Lowers LDL Without The 40-Pound Weight Gain
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Statin patients with FH report gaining <span className="font-bold">15-40 pounds within the first year</span>, with <span className="font-bold">84% experiencing significant weight gain</span> despite maintaining their strict diets — a cruel irony for women who've spent years perfecting their nutrition.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Clinical-strength red yeast rice works to inhibit cholesterol synthesis and reduce inflammation — with <span className="font-semibold">ZERO metabolic disruption</span> and no reported weight gain in studies. The gummy format ensures consistent daily compliance without the nausea pills cause.
                </p>

                <p className="text-lg leading-relaxed font-semibold text-slate-900">
                  Users report 20-30% LDL reduction within 8-12 weeks while maintaining their hard-earned healthy weight and energy.
                </p>
              </div>
            </div>
          </section>

          {/* Item 4 */}
          <section className="scroll-mt-20">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
              {/* Images on the left */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img src="/placeholder.svg" alt="Happy woman with gummies" className="w-full h-64 object-cover bg-gradient-to-br from-green-100 to-emerald-200" />
                  <div className="bg-teal-600 text-white p-3 text-center">
                    <span className="font-bold">Lunessa</span>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img src="/placeholder.svg" alt="Distressed woman with pills" className="w-full h-64 object-cover bg-gradient-to-br from-red-200 to-orange-300" />
                  <div className="bg-slate-700 text-white p-3 text-center">
                    <span className="font-bold">Statins</span>
                  </div>
                </div>
              </div>

              {/* Content on the right */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
                  4. Natural Compliance Without Prescription Dependency
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Statins require lifelong prescriptions, endless doctor appointments where you're dismissed as "anxious," and insurance battles — all while feeling worse than before you started. <span className="font-bold">38% of adults struggle to swallow pills</span>, leading to missed doses and guilt.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  This pharmaceutical-grade gummy formula makes daily adherence effortless with raspberry flavor you'll actually enjoy — <span className="font-semibold">zero dependency, zero doctor gatekeeping, and zero withdrawal</span> if you choose to stop.
                </p>

                <p className="text-lg leading-relaxed font-semibold text-slate-900">
                  Take control of your cholesterol journey in as little as 8 weeks — and maintain the freedom to manage your health on your own terms.
                </p>
              </div>
            </div>
          </section>

          {/* Item 5 */}
          <section className="scroll-mt-20">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
              {/* Comparison cards on the left */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-6 shadow-lg border border-slate-200">
                  <div className="mb-4">
                    <svg className="w-12 h-12 text-teal-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <div className="text-teal-600 font-bold mb-1">Lunessa</div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm">Third-party tested</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm">Citrinin-free certified</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm">Pharmaceutical-grade precision</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-100 rounded-lg p-6 shadow-lg border border-slate-300 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">⚠️</div>
                    <div className="space-y-2">
                      <div className="bg-red-100 text-red-800 px-4 py-2 rounded text-sm font-semibold">SIDE EFFECTS</div>
                      <div className="bg-red-100 text-red-800 px-4 py-2 rounded text-sm font-semibold">WARNING LABEL</div>
                      <p className="text-slate-600 font-bold mt-4">Statins</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content on the right */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
                  5. Third-Party Tested Purity vs. Big Pharma's Patent Games
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Statins were designed to maximize patent protection and profit margins — not to preserve your quality of life. The medical establishment admits statins cause muscle pain, cognitive decline, and diabetes risk but dismisses these as "acceptable trade-offs."
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Every batch of Lunessa is <span className="font-semibold">third-party tested and certified citrinin-free</span> using pharmaceutical-grade precision — the same purity standards European doctors demand. Red yeast rice at clinical doses (2400mg) with protective CoQ10 (200mg).
                </p>

                <p className="text-lg leading-relaxed font-semibold text-slate-900">
                  Get professional-grade formulation designed specifically for genetic cholesterol management, not repurposed drugs with devastating side effects.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section 1 */}
          <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-xl p-8 shadow-xl border-2 border-teal-200 my-16">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Badge variant="secondary" className="bg-teal-600 text-white text-xs px-3 py-1">
                HOLIDAY SALE DEAL
              </Badge>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">LONG-TERM BENEFITS WITH ONE SINGLE SERVING</h3>
                <p className="text-teal-700 font-semibold mb-6">54% OFF + FREE Gifts Today's Limited Offer</p>
                
                <div className="bg-white rounded-lg p-6 shadow-md mb-6">
                  <img src="/placeholder.svg" alt="Product bottles" className="w-full h-48 object-contain mb-4 bg-gradient-to-br from-teal-100 to-cyan-100 rounded" />
                </div>

                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Lower LDL Naturally</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Protect Cellular Energy</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Easy Daily Compliance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>No Muscle Pain</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Clinical-Strength Dosing</span>
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
                  Try it today with a 90-Day Money Back Guarantee! If you don't see LDL improvement, you don't pay.
                </p>
              </div>
            </div>
          </div>

          {/* Item 6 */}
          <section className="scroll-mt-20">
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg p-8 mb-6 shadow-md">
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-3 shadow">
                    <span className="text-2xl font-bold text-teal-600">2400mg</span>
                  </div>
                  <p className="text-sm font-semibold">Red Yeast Rice</p>
                </div>
                <div>
                  <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-3 shadow">
                    <span className="text-2xl font-bold text-teal-600">200mg</span>
                  </div>
                  <p className="text-sm font-semibold">CoQ10</p>
                </div>
                <div>
                  <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-3 shadow">
                    <Check className="w-10 h-10 text-green-600" />
                  </div>
                  <p className="text-sm font-semibold">Citrinin-Free</p>
                </div>
                <div>
                  <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-3 shadow">
                    <span className="text-2xl font-bold text-teal-600">94%</span>
                  </div>
                  <p className="text-sm font-semibold">Success Rate</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
              6. Dual-Action Formula vs. Single-Drug Failure Rate
            </h2>

            <p className="text-lg leading-relaxed mb-4 text-slate-700">
              Statins fail <span className="font-bold">60-70% of FH patients completely</span> at achieving target LDL levels while creating muscle pain in <span className="font-bold">30-40% of users</span> and cognitive issues that doctors refuse to acknowledge.
            </p>

            <p className="text-lg leading-relaxed mb-4 text-slate-700">
              This comprehensive formula includes red yeast rice at clinical strength (2400mg) plus CoQ10 (200mg) — the two nutrients proven to work <span className="font-semibold">synergistically for cardiovascular support in over 94% of users</span> without the side effect cascade.
            </p>

            <p className="text-lg leading-relaxed font-semibold text-slate-900">
              Attack your genetic cholesterol from both angles instead of hoping one failing drug will magically work this time.
            </p>
          </section>

          {/* Item 7 */}
          <section className="scroll-mt-20">
            <div className="mb-6 rounded-lg overflow-hidden shadow-lg">
              <div className="h-64 bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                  <svg className="w-full h-full" viewBox="0 0 200 200">
                    {[...Array(20)].map((_, i) => (
                      <circle key={i} cx={Math.random() * 200} cy={Math.random() * 200} r={Math.random() * 3} fill="white" opacity={Math.random()} />
                    ))}
                  </svg>
                </div>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
              7. Addresses Root Cause While Statins Create New Problems
            </h2>

            <p className="text-lg leading-relaxed mb-4 text-slate-700">
              While statins suppress cholesterol production, they simultaneously <span className="font-bold">increase diabetes risk by 46%</span>, deplete CoQ10 stores, and accelerate cognitive decline — creating new health crises while managing the original problem.
            </p>

            <p className="text-lg leading-relaxed mb-4 text-slate-700">
              Powerful red yeast rice naturally modulates the same HMG-CoA reductase pathway statins target while CoQ10 protects against oxidative stress and cellular damage, actually supporting cardiovascular health instead of trading one disease for another.
            </p>

            <p className="text-lg leading-relaxed font-semibold text-slate-900">
              Clinical observations show LDL improvements in 87% of users without the cascading health problems statins create.
            </p>
          </section>

          {/* Item 8 */}
          <section className="scroll-mt-20">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
              {/* Comparison cards on the left */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-slate-800 to-blue-900 rounded-lg p-6 shadow-lg">
                  <div className="bg-white rounded-lg p-4 mb-4">
                    <img src="/placeholder.svg" alt="Product bottle" className="w-full h-32 object-contain bg-gradient-to-br from-teal-50 to-cyan-50 rounded" />
                  </div>
                  <div className="text-white text-center">
                    <p className="font-bold">Lunessa</p>
                    <p className="text-sm text-teal-300">Cholesterol Gummies</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-red-900 to-orange-900 rounded-lg p-6 shadow-lg flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl mb-4">😵‍💫</div>
                    <div className="space-y-2 text-sm">
                      <p className="font-semibold">"Couldn't remember my kids' names"</p>
                      <p className="font-semibold">"Felt like early Alzheimer's"</p>
                      <p className="font-semibold">"Thought I was losing my mind"</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content on the right */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
                  8. Supports Heart Health Without Cognitive Destruction
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Statin users report severe cognitive impairment described as "couldn't remember my kids' names," "felt like early Alzheimer's," or "thought I was losing my mind" — especially terrifying for women watching parents decline with dementia.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Natural ingredients support cardiovascular function through the mevalonate pathway while preserving cognitive function and mental clarity your statins are stealing from you.
                </p>

                <p className="text-lg leading-relaxed font-semibold text-slate-900">
                  Wake up with sharp thinking and sustained energy instead of fighting statins' brain fog and memory loss.
                </p>
              </div>
            </div>
          </section>

          {/* Item 9 */}
          <section className="scroll-mt-20">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
              {/* Visual on the left */}
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg p-8 shadow-md">
                <div className="text-center mb-6">
                  <div className="inline-block bg-white rounded-full p-6 shadow-lg mb-4">
                    <ShieldCheck className="w-16 h-16 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Complete Transparency</h3>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold mb-2 text-teal-700">What You Get:</h4>
                    <ul className="space-y-1">
                      <li>✓ Third-party tested</li>
                      <li>✓ Citrinin-free certification</li>
                      <li>✓ Complete ingredient transparency</li>
                      <li>✓ No hidden side effects</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow">
                    <h4 className="font-bold mb-2 text-slate-700">What You Avoid:</h4>
                    <ul className="space-y-1">
                      <li>✗ Muscle destruction</li>
                      <li>✗ Cognitive decline</li>
                      <li>✗ Corporate cover-ups</li>
                      <li>✗ Lifetime dependency</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Content on the right */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
                  9. Complete Transparency vs. Big Pharma's Denial of Side Effects
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Pharmaceutical companies <span className="font-bold">deliberately minimized statin side effects for over 30 years</span> — dismissing muscle pain as "rare" and cognitive decline as "unproven" while women suffered in silence, told they were "just stressed" or "getting older."
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Every batch undergoes <span className="font-semibold">rigorous third-party testing</span> with complete ingredient transparency and citrinin-free certification — no hidden side effects, no muscle destruction, no cognitive decline.
                </p>

                <p className="text-lg leading-relaxed font-semibold text-slate-900">
                  Trust ingredients clinically studied to support you, not corporate denials designed to protect billion-dollar drug profits.
                </p>
              </div>
            </div>
          </section>

          {/* Item 10 */}
          <section className="scroll-mt-20">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
              {/* Image on the left */}
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src="/placeholder.svg" alt="Happy women outdoors" className="w-full h-64 object-cover bg-gradient-to-br from-amber-100 to-yellow-200" />
              </div>

              {/* Content on the right */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
                  10. Join 50,000+ Women Who've Escaped The Statin Trap
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Big pharma designed statin dependency to generate <span className="font-bold">$29 billion annually</span> — managing symptoms while dismissing quality-of-life destruction as "necessary" for women with genetic cholesterol.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  From marathoners to mothers to menopausal women, <span className="font-semibold">over 50,000 people</span> have discovered they can manage their genetic cholesterol naturally and permanently escape the statin side effect nightmare while seeing real LDL improvements.
                </p>

                <p className="text-lg leading-relaxed font-semibold text-slate-900">
                  When tens of thousands of women with FH refuse to go back to prescription dependency after trying this, you know something is working.
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
                <h3 className="text-2xl font-bold mb-4 text-slate-900">LONG-TERM BENEFITS WITH ONE SINGLE SERVING</h3>
                <p className="text-teal-700 font-semibold mb-6">54% OFF + FREE Gifts Today's Limited Offer</p>
                
                <div className="bg-white rounded-lg p-6 shadow-md mb-6">
                  <img src="/placeholder.svg" alt="Product bottles" className="w-full h-48 object-contain mb-4 bg-gradient-to-br from-teal-100 to-cyan-100 rounded" />
                </div>

                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Lower LDL Naturally</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Protect Cellular Energy</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Easy Daily Compliance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>No Muscle Pain</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Clinical-Strength Dosing</span>
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
              <a href="#" className="hover:text-teal-400 transition">Privacy Policy</a>
              <span className="text-slate-600">•</span>
              <a href="#" className="hover:text-teal-400 transition">Terms of Service</a>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8 space-y-4 text-xs text-slate-400 leading-relaxed">
            <p>
              These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. Testimonials found at trylunessa.com are unverified results, and may not reflect the typical purchaser's experience, may not apply to the average person and are not intended to represent or guarantee that anyone will achieve the same or similar results.
            </p>
            <p>
              Information on Lunessa's website is provided for informational purposes only. It is not meant to substitute for medical advice from your physician or other medical professional. You should not use the information contained herein for diagnosing or treating a health problem or disease, or prescribing any medication. Carefully read all product documentation. If you have or suspect that you have a medical problem, promptly contact your regular health care provider.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
