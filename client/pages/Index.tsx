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
          <h1 className="text-xl sm:text-2xl font-bold tracking-wide text-center">NERVE-JOURNAL</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="h-1 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 mb-8"></div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            10 Reasons <span className="text-teal-600">Doctors Choose This Over Gabapentin</span> for Their Own Neuropathy
          </h1>

          <p className="text-lg sm:text-xl font-semibold mb-4 text-slate-800">
            <span className="font-bold">7 out of 10 gabapentin users</span> will experience severe side effects while getting ZERO meaningful pain relief.
          </p>

          <p className="text-base sm:text-lg mb-4 leading-relaxed text-slate-700">
            Fortunately, a breakthrough <span className="font-semibold">nerve regeneration supplement</span>, backed by <span className="font-semibold">30+ years of European clinical success</span>, is helping people transition off gabapentin dependency while actually healing their nerves — all with <span className="font-semibold">pharmaceutical-grade ingredients</span> at therapeutic doses.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 my-8">
            <p className="font-semibold text-blue-900">
              <span className="font-bold">Note:</span> Read this BEFORE you take another gabapentin that's destroying your life!
            </p>
          </div>

          {/* Expert Box */}
          <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm inline-flex items-center gap-4 mb-12">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center flex-shrink-0">
              <span className="text-2xl font-bold text-teal-700">SM</span>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-bold text-slate-900">Dr. Sarah Mitchell</h3>
                <Badge variant="secondary" className="bg-blue-100 text-blue-700 text-xs">
                  <ShieldCheck className="w-3 h-3 mr-1" />
                  Verified
                </Badge>
              </div>
              <p className="text-sm text-teal-600 font-medium">Neurologist & Neuropathy Specialist</p>
            </div>
          </div>
        </div>

        {/* Numbered List Items */}
        <article className="space-y-16">
          {/* Item 1 */}
          <section className="scroll-mt-20">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg p-8 text-white shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                  </svg>
                  <span className="text-xl font-bold">neurosmile</span>
                </div>
                <div className="bg-white/90 rounded-md p-4 mb-4">
                  <div className="text-teal-700 text-3xl font-bold mb-1">600mg ALA</div>
                  <div className="text-teal-600 text-sm flex items-center gap-1">
                    <Check className="w-4 h-4" />
                    Therapeutic Dose
                  </div>
                </div>
                <div className="bg-white/20 rounded-full px-4 py-2 text-center text-sm font-semibold">
                  European Formula
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg p-8 text-white shadow-lg flex items-center justify-center relative overflow-hidden">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-3">Gabapentin</div>
                  <div className="space-y-2">
                    {[1,2,3,4,5,6,7,8].map((i) => (
                      <div key={i} className="inline-block mx-1">
                        <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-sm font-bold animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>
                          ?
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
              1. Therapeutic-Dose Alpha Lipoic Acid (600mg) vs. Gabapentin's Complete Mystery
            </h2>

            <p className="text-lg leading-relaxed mb-4 text-slate-700">
              Gabapentin works by an "unknown mechanism" - even after 30 years, doctors admit they have NO IDEA how it works, and <span className="font-bold">it heals absolutely nothing</span>.
            </p>

            <p className="text-lg leading-relaxed mb-4 text-slate-700">
              Neurosmile Nerve Support provides the full 600mg therapeutic dose of Alpha Lipoic Acid with <span className="font-semibold">97% tolerance rate</span> - the same dose European doctors have prescribed for 30+ years with <span className="font-semibold">government healthcare approval</span>.
            </p>

            <p className="text-lg leading-relaxed font-semibold text-slate-900">
              Finally address the root cause with proven science instead of gambling with a mystery drug that traps 8 out of 10 users.
            </p>
          </section>

          {/* Item 2 */}
          <section className="scroll-mt-20">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-slate-900 rounded-lg overflow-hidden shadow-lg">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <svg className="w-6 h-6 text-teal-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                    </svg>
                    <span className="text-white font-bold">neurosmile</span>
                  </div>
                  <div className="relative h-48 bg-gradient-to-br from-slate-800 to-slate-700 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-32 h-32 text-teal-400/30" viewBox="0 0 100 100">
                      <path d="M50 10 C30 10 20 25 20 40 C20 50 25 60 35 65 L40 90 L50 95 L60 90 L65 65 C75 60 80 50 80 40 C80 25 70 10 50 10 Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-green-400 text-sm">
                      <Check className="w-4 h-4" />
                      <span>MORE ENERGY</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-400 text-sm">
                      <Check className="w-4 h-4" />
                      <span>MENTAL CLARITY</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-400 text-sm">
                      <Check className="w-4 h-4" />
                      <span>NO SIDE EFFECTS</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 rounded-lg overflow-hidden shadow-lg">
                <div className="p-6">
                  <div className="text-white font-bold mb-4">Gabapentin</div>
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
                      <span>DEMENTIA RISK</span>
                    </div>
                    <div className="flex items-center gap-2 text-red-400 text-sm">
                      <span className="text-lg">×</span>
                      <span>BRAIN FOG</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
              2. Penetrates Damaged Nerve Cells Without Cognitive Destruction
            </h2>

            <p className="text-lg leading-relaxed mb-4 text-slate-700">
              Gabapentin increases dementia risk by <span className="font-bold">85%</span> and causes severe cognitive impairment in <span className="font-bold">78% of long-term users</span> - "couldn't think clearly," "getting lost driving," "felt like I was losing my mind."
            </p>

            <p className="text-lg leading-relaxed mb-4 text-slate-700">
              This master antioxidant formula targets damaged nerve cells directly <span className="font-semibold">without crossing the blood-brain barrier</span>, delivering regenerative compounds where needed while preserving mental function.
            </p>

            <p className="text-lg leading-relaxed font-semibold text-slate-900">
              Experience actual cellular repair with razor-sharp thinking instead of gabapentin's cognitive destruction.
            </p>
          </section>

          {/* Item 3 */}
          <section className="scroll-mt-20">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src="/placeholder.svg" alt="Happy person outdoors" className="w-full h-64 object-cover bg-gradient-to-br from-amber-100 to-orange-200" />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src="/placeholder.svg" alt="Person enjoying life" className="w-full h-64 object-cover bg-gradient-to-br from-blue-100 to-teal-200" />
                <div className="bg-white p-4 text-center border-t-4 border-red-500">
                  <p className="text-red-600 font-bold text-sm">50lbs weight gain after using Gabapentin for only 6 months.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
              3. Reduces Pain Without Metabolic Catastrophe
            </h2>

            <p className="text-lg leading-relaxed mb-4 text-slate-700">
              Gabapentin patients report gaining <span className="font-bold">14-50 pounds within 6 months</span>, with <span className="font-bold">89% experiencing significant weight gain</span> despite no dietary changes - plus dangerous fluid retention doctors refuse to acknowledge.
            </p>

            <p className="text-lg leading-relaxed mb-4 text-slate-700">
              Clinical-strength ingredients work synergistically to calm overactive nerve signals and reduce inflammation - with <span className="font-semibold">ZERO weight gain</span> and potential metabolic benefits reported in studies.
            </p>

            <p className="text-lg leading-relaxed font-semibold text-slate-900">
              Users report 60-80% pain reduction within 2-4 weeks while maintaining healthy weight and energy.
            </p>
          </section>

          {/* Item 4 */}
          <section className="scroll-mt-20">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src="/placeholder.svg" alt="Healthy senior smiling" className="w-full h-64 object-cover bg-gradient-to-br from-green-100 to-emerald-200" />
                <div className="bg-teal-600 text-white p-3 text-center">
                  <span className="font-bold">neurosmile</span>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src="/placeholder.svg" alt="Person in distress" className="w-full h-64 object-cover bg-gradient-to-br from-red-200 to-orange-300" />
                <div className="bg-slate-700 text-white p-3 text-center">
                  <span className="font-bold">Gabapentin</span>
                </div>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
              4. Restores Sensation Without 18-Week Withdrawal Hell
            </h2>

            <p className="text-lg leading-relaxed mb-4 text-slate-700">
              Gabapentin withdrawal lasts <span className="font-bold">5-18 weeks</span> and is described as <span className="font-bold">"50 times worse than heroin withdrawal"</span> by patients - keeping you trapped even when it completely stops working.
            </p>

            <p className="text-lg leading-relaxed mb-4 text-slate-700">
              This nerve regeneration complex supports myelin sheath repair and promotes new nerve fiber growth with <span className="font-semibold">zero dependency, zero tolerance buildup, and zero withdrawal symptoms</span>.
            </p>

            <p className="text-lg leading-relaxed font-semibold text-slate-900">
              Rediscover sensation in as little as 14 days - and maintain freedom to stop anytime safely.
            </p>
          </section>

          {/* Item 5 */}
          <section className="scroll-mt-20">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-lg p-6 shadow-lg border border-slate-200">
                <div className="mb-4">
                  <svg className="w-12 h-12 text-teal-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <div className="text-teal-600 font-bold mb-1">neurosmile</div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Compound pharmacist formulated</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Maximum bioavailability</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Pharmaceutical-grade precision</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-100 rounded-lg p-6 shadow-lg border border-slate-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📋</div>
                  <div className="space-y-2">
                    <div className="bg-red-100 text-red-800 px-4 py-2 rounded text-sm font-semibold">TOP SECRET</div>
                    <div className="bg-red-100 text-red-800 px-4 py-2 rounded text-sm font-semibold">CLASSIFIED</div>
                    <p className="text-slate-600 font-bold mt-4">Gabapentin</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
              5. Compound Pharmacist Formulated vs. Big Pharma's Off-Label Scam
            </h2>

            <p className="text-lg leading-relaxed mb-4 text-slate-700">
              Gabapentin was <span className="font-bold">never designed for nerve pain</span> - it's an anti-seizure drug pushed off-label after patent expiration to create new revenue streams, not because it works.
            </p>

            <p className="text-lg leading-relaxed mb-4 text-slate-700">
              Every ingredient in Nerve Support is selected by compound pharmacists for <span className="font-semibold">maximum bioavailability</span> using <span className="font-semibold">pharmaceutical-grade precision</span> - not mass-market profit margins.
            </p>

            <p className="text-lg leading-relaxed font-semibold text-slate-900">
              Get professional-grade formulation designed specifically for nerve healing, not repurposed seizure medication.
            </p>
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
                <p className="text-teal-700 font-semibold mb-6">54% OFF + FREE Gifts Today's Black Friday Offer</p>
                
                <div className="bg-white rounded-lg p-6 shadow-md mb-6">
                  <img src="/placeholder.svg" alt="Product bottles" className="w-full h-48 object-contain mb-4 bg-gradient-to-br from-teal-100 to-cyan-100 rounded" />
                  <div className="text-sm text-center font-semibold bg-teal-700 text-white py-2 px-4 rounded-full">
                    FREE Magnesium Spray for Instant Pain Relief
                  </div>
                </div>

                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Restore Balance & Sensation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Eliminate Pain Symptoms</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Sleep Through The Night</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Rebuild Dying Nerves</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Prevent Further Damage</span>
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
                  Try it today with a 90-Day Money Back Guarantee!
                </p>
              </div>
            </div>
          </div>

          {/* Item 6 */}
          <section className="scroll-mt-20">
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg p-8 mb-6 shadow-md">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-3 shadow">
                    <span className="text-3xl font-bold text-teal-600">18+</span>
                  </div>
                  <p className="text-sm font-semibold">Ingredients</p>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-3 shadow">
                    <span className="text-3xl font-bold text-teal-600">94%</span>
                  </div>
                  <p className="text-sm font-semibold">Success Rate</p>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-3 shadow">
                    <Check className="w-10 h-10 text-green-600" />
                  </div>
                  <p className="text-sm font-semibold">Synergistic Formula</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
              6. 18 Science-Backed Ingredients vs. Single-Drug Catastrophic Failure
            </h2>

            <p className="text-lg leading-relaxed mb-4 text-slate-700">
              Gabapentin fails <span className="font-bold">60-70% of patients completely</span> while creating dependency in <span className="font-bold">85% of long-term users</span> and multiple dangerous side effects in nearly everyone.
            </p>

            <p className="text-lg leading-relaxed mb-4 text-slate-700">
              This comprehensive formula includes B-vitamin complexes, antioxidants, anti-inflammatories, and circulation enhancers proven to work <span className="font-semibold">synergistically for 94% of users</span>.
            </p>

            <p className="text-lg leading-relaxed font-semibold text-slate-900">
              Attack nerve damage from every proven angle instead of hoping one failing drug will magically start working.
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
              7. Prevents Further Damage While Gabapentin Accelerates Decline
            </h2>

            <p className="text-lg leading-relaxed mb-4 text-slate-700">
              While gabapentin masks symptoms, <span className="font-bold">nerve damage accelerates by 23% annually</span> underneath - patients get worse while feeling temporary relief, then need higher doses.
            </p>

            <p className="text-lg leading-relaxed mb-4 text-slate-700">
              Powerful antioxidants and neuroprotective compounds <span className="font-semibold">halt 91% of ongoing damage</span> while promoting healing, actually reversing progression instead of hiding it.
            </p>

            <p className="text-lg leading-relaxed font-semibold text-slate-900">
              Clinical studies show nerve function improvement in 87% of users instead of continued deterioration.
            </p>
          </section>

          {/* Item 8 */}
          <section className="scroll-mt-20">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gradient-to-br from-slate-800 to-blue-900 rounded-lg p-6 shadow-lg">
                <div className="bg-white rounded-lg p-4 mb-4">
                  <img src="/placeholder.svg" alt="Product bottle" className="w-full h-32 object-contain bg-gradient-to-br from-teal-50 to-cyan-50 rounded" />
                </div>
                <div className="text-white text-center">
                  <p className="font-bold">neurosmile</p>
                  <p className="text-sm text-teal-300">Nerve Support</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-900 to-orange-900 rounded-lg p-6 shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">💊</div>
                  <div className="space-y-2">
                    {[1,2,3,4,5].map((i) => (
                      <div key={i} className="bg-yellow-400 h-2 rounded animate-pulse" style={{ animationDelay: `${i * 0.2}s`, width: `${60 + i * 8}%` }}></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
              8. Restores Sleep Without Next-Day Cognitive Destruction
            </h2>

            <p className="text-lg leading-relaxed mb-4 text-slate-700">
              Gabapentin's sedating effects leave <span className="font-bold">73% of users groggy, confused, and functionally impaired</span> the next day - trading nighttime pain for complete daytime dysfunction.
            </p>

            <p className="text-lg leading-relaxed mb-4 text-slate-700">
              Natural nervous system calming ingredients reduce nighttime pain flare-ups by <span className="font-semibold">68% average</span> while supporting restorative REM sleep your body needs for nerve repair.
            </p>

            <p className="text-lg leading-relaxed font-semibold text-slate-900">
              Wake up refreshed with improved mental clarity instead of fighting gabapentin's 12-hour cognitive hangover.
            </p>
          </section>

          {/* Item 9 */}
          <section className="scroll-mt-20">
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg p-8 mb-6 shadow-md">
              <div className="text-center mb-6">
                <div className="inline-block bg-white rounded-full p-6 shadow-lg mb-4">
                  <ShieldCheck className="w-16 h-16 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Complete Transparency</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div className="bg-white rounded-lg p-4 shadow">
                  <h4 className="font-bold mb-2 text-teal-700">What You Get:</h4>
                  <ul className="space-y-1">
                    <li>✓ Third-party tested</li>
                    <li>✓ Complete ingredient transparency</li>
                    <li>✓ No hidden dependencies</li>
                    <li>✓ Scientific backing</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 shadow">
                  <h4 className="font-bold mb-2 text-slate-700">What You Avoid:</h4>
                  <ul className="space-y-1">
                    <li>✗ Cognitive destruction</li>
                    <li>✗ Metabolic sabotage</li>
                    <li>✗ Corporate cover-ups</li>
                    <li>✗ Lifetime dependency</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
              9. Complete Transparency vs. Big Pharma's Deadly Deception
            </h2>

            <p className="text-lg leading-relaxed mb-4 text-slate-700">
              Pharmaceutical companies <span className="font-bold">deliberately hid gabapentin's dependency potential</span> and cognitive risks for over 20 years while patients suffered unknown long-term brain damage.
            </p>

            <p className="text-lg leading-relaxed mb-4 text-slate-700">
              Every batch undergoes <span className="font-semibold">rigorous third-party testing</span> with complete ingredient transparency - no hidden dependencies, no cognitive destruction, no metabolic sabotage.
            </p>

            <p className="text-lg leading-relaxed font-semibold text-slate-900">
              Trust ingredients scientifically proven to heal you, not corporate cover-ups designed to trap you for life.
            </p>
          </section>

          {/* Item 10 */}
          <section className="scroll-mt-20">
            <div className="mb-6 rounded-lg overflow-hidden shadow-lg">
              <img src="/placeholder.svg" alt="Happy seniors outdoors" className="w-full h-64 object-cover bg-gradient-to-br from-amber-100 to-yellow-200" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
              10. Join 50,000+ Who've Escaped Gabapentin's Death Grip
            </h2>

            <p className="text-lg leading-relaxed mb-4 text-slate-700">
              Big pharma designed gabapentin dependency to generate <span className="font-bold">$3.7 billion annually</span> - masking symptoms while creating cascading health problems requiring more medications.
            </p>

            <p className="text-lg leading-relaxed mb-4 text-slate-700">
              From diabetics to seniors to chronic pain sufferers, <span className="font-semibold">over 50,000 people</span> have discovered they can heal their nerves naturally and permanently escape the gabapentin trap.
            </p>

            <p className="text-lg leading-relaxed font-semibold text-slate-900">
              When tens of thousands refuse to go back to prescription dependency after trying this, you know something revolutionary is happening.
            </p>
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
                <p className="text-teal-700 font-semibold mb-6">54% OFF + FREE Gifts Today's Black Friday Offer</p>
                
                <div className="bg-white rounded-lg p-6 shadow-md mb-6">
                  <img src="/placeholder.svg" alt="Product bottles" className="w-full h-48 object-contain mb-4 bg-gradient-to-br from-teal-100 to-cyan-100 rounded" />
                  <div className="text-sm text-center font-semibold bg-teal-700 text-white py-2 px-4 rounded-full">
                    FREE Magnesium Spray for Instant Pain Relief
                  </div>
                </div>

                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Restore Balance & Sensation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Eliminate Pain Symptoms</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Sleep Through The Night</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Rebuild Dying Nerves</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Prevent Further Damage</span>
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
                  Try it today with a 90-Day Money Back Guarantee!
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
            <p className="text-sm mb-4">© 2025 Neurosmile. All right reserved.</p>
            <div className="flex items-center justify-center gap-4 text-sm">
              <a href="#" className="hover:text-teal-400 transition">Privacy Policy</a>
              <span className="text-slate-600">•</span>
              <a href="#" className="hover:text-teal-400 transition">Terms of Service</a>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8 space-y-4 text-xs text-slate-400 leading-relaxed">
            <p>
              These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. Testimonials found at tryneurosmile.com are unverified results, and may not reflect the typical purchaser's experience, may not apply to the average person and are not intended to represent or guarantee that anyone will achieve the same or similar results.
            </p>
            <p>
              Information on the Neurosmile's website is provided for informational purposes only. It is not meant to substitute for medical advice from your physician or other medical professional. You should not use the information contained herein for diagnosing or treating a health problem or disease, or prescribing any medication. Carefully read all product documentation. If you have or suspect that you have a medical problem, promptly contact your regular health care provider.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
