import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ShieldCheck, Clock, Gift, TrendingDown } from "lucide-react";

export default function Index() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 4,
    minutes: 19,
    seconds: 14,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
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
          <span className="font-bold text-sm sm:text-base">
            BUY 2 GET 1 FREE
          </span>
          <span className="hidden sm:block text-white/60">|</span>
          <span className="text-sm">LIMITED TIME OFFER</span>
          <div className="flex gap-2 text-xs sm:text-sm font-mono">
            <div className="flex flex-col items-center">
              <span className="font-bold text-lg">
                {String(timeLeft.days).padStart(2, "0")}
              </span>
              <span className="text-xs opacity-80">DAYS</span>
            </div>
            <span className="self-center text-lg">:</span>
            <div className="flex flex-col items-center">
              <span className="font-bold text-lg">
                {String(timeLeft.hours).padStart(2, "0")}
              </span>
              <span className="text-xs opacity-80">HRS</span>
            </div>
            <span className="self-center text-lg">:</span>
            <div className="flex flex-col items-center">
              <span className="font-bold text-lg">
                {String(timeLeft.minutes).padStart(2, "0")}
              </span>
              <span className="text-xs opacity-80">MIN</span>
            </div>
            <span className="self-center text-lg">:</span>
            <div className="flex flex-col items-center">
              <span className="font-bold text-lg">
                {String(timeLeft.seconds).padStart(2, "0")}
              </span>
              <span className="text-xs opacity-80">SEC</span>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-slate-800 text-white py-4 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-xl sm:text-2xl font-bold tracking-wide text-center">
            HEART HEALTH JOURNAL
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="h-1 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 mb-8"></div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            7 Reasons{" "}
            <span className="text-[#7e1d22]">
              People with FH Choose This Over Statins
            </span>{" "}
            for Their Genetic Cholesterol
          </h1>

          <p className="text-lg sm:text-xl font-semibold mb-4 text-slate-800">
            Statins are stealing your life while "managing" your numbers.
          </p>

          <p className="text-base sm:text-lg mb-4 leading-relaxed text-slate-700">
            7 out of 10 statin users with familial hypercholesterolemia will
            experience debilitating muscle pain, brain fog, or fatigue—described
            as "feeling like I have the flu all the time" or "exhausted and
            useless."
          </p>

          <p className="text-base sm:text-lg mb-6 leading-relaxed text-slate-700">
            Fortunately, a breakthrough natural cholesterol management approach
            combining clinical-dose red yeast rice with protective CoQ10 is
            helping people break free from statin dependency while managing
            their genetic cholesterol—with testimonials reporting LDL drops from
            245 to 177 without dietary changes.
          </p>

          <div className="bg-rose-50 border-l-4 border-[#7e1d22] p-4 my-8">
            <p className="font-semibold text-rose-900">
              <span className="font-bold">Note:</span> Read this BEFORE you
              accept another statin prescription that's destroying your quality
              of life!
            </p>
          </div>

          {/* Expert Box */}
          <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm inline-flex items-center gap-4 mb-12">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F2a9401f877da48d6b4f725528745b384%2Fd9c7a9d989434d4ab671270455079a00?format=webp&width=800"
              alt="Dr. Sarah Chen"
              className="w-16 h-16 rounded-full object-cover flex-shrink-0"
            />
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-bold text-slate-900">Dr. Sarah Chen</h3>
                <Badge
                  variant="secondary"
                  className="bg-rose-100 text-rose-800 text-xs"
                >
                  <ShieldCheck className="w-3 h-3 mr-1" />
                  Verified
                </Badge>
              </div>
              <p className="text-sm text-[#7e1d22] font-medium">
                Cardiologist & Lipid Specialist
              </p>
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
                  src="https://cdn.builder.io/api/v1/image/assets%2F2a9401f877da48d6b4f725528745b384%2F845fa50bcaa94915a664c3013b864c70?format=webp&width=800"
                  alt="Mitochondrial cell showing cellular energy production and CoQ10 function"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>

              {/* Content on the right */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
                  1. The "Binary Shield" Protocol: Blocking Cholesterol Without
                  Depleting Your Cellular Battery
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Statins block cholesterol through the HMG-CoA reductase
                  pathway—but they also strip away CoQ10, the vital nutrient
                  your cells need for energy. This creates the "exhausted and
                  useless" feeling statin users describe.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  The natural alternative works differently: Red yeast rice
                  naturally contains monacolin K, which modulates the same
                  HMG-CoA pathway—but at lower, gentler doses. The critical
                  difference? When paired with 200mg of CoQ10, you're replacing
                  what the cholesterol-blocking mechanism depletes.
                </p>

                <p className="text-lg leading-relaxed font-semibold text-slate-900">
                  Clinical studies show this "Binary Shield" approach—2400mg red
                  yeast rice PLUS protective CoQ10—delivers cardiovascular
                  support without stripping your mitochondria of their energy
                  source.
                </p>
              </div>
            </div>
          </section>

          {/* Item 2 */}
          <section className="scroll-mt-20">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
              {/* Image on the left */}
              <div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F2a9401f877da48d6b4f725528745b384%2F94077c13f4014f35a4f09d56f9d2c0c8?format=webp&width=800"
                  alt="Woman experiencing brain fog and exhaustion while working at desk"
                  className="w-full rounded-lg shadow-lg object-cover"
                />
              </div>

              {/* Content on the right */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
                  2. Why Your Brain Fog Isn't "Just Getting Older"—It's CoQ10
                  Depletion
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Statin users describe terrifying cognitive effects:{" "}
                  <span className="font-semibold">
                    "within a week of stopping, the brain fog lifted. I hadn't
                    realised how bad I had felt for years,"
                  </span>{" "}
                  <span className="font-semibold">
                    "couldn't think clearly,"
                  </span>{" "}
                  and{" "}
                  <span className="font-semibold">
                    "felt like I was losing my mind."
                  </span>
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Your brain is the most energy-demanding organ in your body.
                  When statins deplete CoQ10 stores, your brain cells literally
                  cannot generate the power they need to function.
                </p>

                <p className="text-lg leading-relaxed font-semibold text-slate-900">
                  The natural cholesterol management protocol must include CoQ10
                  protection. Red yeast rice modulates cholesterol synthesis
                  while 200mg of CoQ10 per serving preserves the mitochondrial
                  energy production your brain depends on—protecting mental
                  clarity and memory that statins compromise.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section 1 */}
          <div className="bg-gradient-to-br from-rose-50 to-red-50 rounded-xl p-8 shadow-xl border-2 border-rose-200 my-16">
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-white rounded-lg shadow-md mb-6 overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F2a9401f877da48d6b4f725528745b384%2F2bb35d11b8fc416198f1440bcdd6b94c?format=webp&width=800"
                  alt="Buy 2 Get 1 Free - Lunessa Red Yeast Rice + CoQ10"
                  className="w-full h-auto"
                />
              </div>

              <p className="text-sm text-slate-600 mb-6">
                This limited-time deal is in high demand and stock keeps selling
                out.
              </p>

              <a
                href="https://shoplunessa.store/products/lunessa"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full bg-[#7e1d22] hover:bg-[#6b1a1e] text-white text-lg py-6 mb-6 shadow-lg">
                  BUY 2 GET 1 FREE →
                </Button>
              </a>

              <ul className="space-y-3 text-left max-w-md mx-auto">
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
                  <span>
                    Free Shipping on Orders Over $50 + 90-Day Guarantee
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Item 3 */}
          <section className="scroll-mt-20">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
              {/* Visual on the left */}
              <div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F2a9401f877da48d6b4f725528745b384%2F81b591b35bbf4482bfe286af1f1b3018?format=webp&width=800"
                  alt="Before and after: Woman struggling with stairs vs easily carrying groceries"
                  className="w-full rounded-lg shadow-lg object-cover"
                />
              </div>

              {/* Content on the right */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
                  3. The Muscle Pain Isn't "Rare"—It's Predictable
                  Mitochondrial Damage
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Pharmaceutical companies dismissed statin side effects for
                  decades. The reality? Statin users report:{" "}
                  <span className="font-semibold">
                    "muscle pain so intense... spasms so bad in low back, legs
                    and hip... put me in ER,"
                  </span>{" "}
                  <span className="font-semibold">
                    "I was a different person, exhausted and useless,"
                  </span>{" "}
                  and{" "}
                  <span className="font-semibold">
                    "it felt like a terrible flu's muscle aches all over."
                  </span>
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  This isn't a mysterious side effect. It's basic biochemistry.
                  Your muscle cells—especially your heart muscle—are packed with
                  mitochondria that burn CoQ10 to generate movement. Statins
                  create a predictable energy crisis at the cellular level.
                </p>

                <p className="text-lg leading-relaxed font-semibold text-slate-900">
                  The 2400mg red yeast rice protocol works to manage cholesterol
                  production while the CoQ10 component replenishes what gets
                  depleted—delivering cardiovascular support without the muscle
                  destruction that makes stairs feel impossible.
                </p>
              </div>
            </div>
          </section>

          {/* Item 4 */}
          <section className="scroll-mt-20">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
              {/* Visual on the left */}
              <div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F2a9401f877da48d6b4f725528745b384%2F52945beca171406ebd6a00bbf9bc52df?format=webp&width=800"
                  alt="Before and after: Woman with brain fog vs focused and working with Lunessa"
                  className="w-full rounded-lg shadow-lg object-cover"
                />
              </div>

              {/* Content on the right */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
                  4. The Compliance Revolution: Why Pills Are Sabotaging Your
                  Success
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  38% of adults struggle to swallow pills. For people with FH
                  already taking multiple medications, adding another
                  horse-sized statin pill creates a psychological barrier that
                  destroys adherence. You miss doses. You dread mornings. You
                  eventually stop.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  The gummy delivery format solves what the medical system won't
                  acknowledge: compliance technology matters as much as
                  biochemistry. When taking your cholesterol support is as easy
                  as chewing a raspberry-flavored gummy instead of gagging down
                  a chalky pill, daily adherence becomes effortless.
                </p>

                <p className="text-lg leading-relaxed font-semibold text-slate-900">
                  Users celebrate this shift:{" "}
                  <span className="font-semibold">
                    "I refused statins. My doctor thought it was the statin
                    working. I told him and he was okay with it based on my
                    labs."
                  </span>
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section 2 */}
          <div className="bg-gradient-to-br from-rose-50 to-red-50 rounded-xl p-8 shadow-xl border-2 border-rose-200 my-16">
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-white rounded-lg shadow-md mb-6 overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F2a9401f877da48d6b4f725528745b384%2F2bb35d11b8fc416198f1440bcdd6b94c?format=webp&width=800"
                  alt="Buy 2 Get 1 Free - Lunessa Red Yeast Rice + CoQ10"
                  className="w-full h-auto"
                />
              </div>

              <p className="text-sm text-slate-600 mb-6">
                This limited-time deal is in high demand and stock keeps selling
                out.
              </p>

              <a
                href="https://shoplunessa.store/products/lunessa"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full bg-[#7e1d22] hover:bg-[#6b1a1e] text-white text-lg py-6 mb-6 shadow-lg">
                  BUY 2 GET 1 FREE →
                </Button>
              </a>

              <ul className="space-y-3 text-left max-w-md mx-auto">
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
                  <span>
                    Free Shipping on Orders Over $50 + 90-Day Guarantee
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Item 5 */}
          <section className="scroll-mt-20">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
              {/* Image on the left */}
              <div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F2a9401f877da48d6b4f725528745b384%2Fe995e2e33da44353b7a3138a955596c4?format=webp&width=800"
                  alt="Before and after: Woman struggling with pills vs easily taking gummy supplement"
                  className="w-full rounded-lg shadow-lg object-cover"
                />
              </div>

              {/* Content on the right */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
                  5. The Citrinin Crisis: Why "Cheap" Red Yeast Rice Could
                  Destroy Your Kidneys
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Poorly fermented red yeast rice contains citrinin, a
                  nephrotoxic (kidney-damaging) mycotoxin that accumulates with
                  chronic exposure. Generic "bargain bin" red yeast rice
                  supplements often fail third-party testing for this dangerous
                  contaminant.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  The safety gap between pharmaceutical-grade and generic red
                  yeast rice is massive. Clinical-dose protocols (2400mg)
                  require rigorous fermentation control, batch testing, and
                  citrinin-free certification—not the unregulated production
                  methods used for $9.99 bottles.
                </p>

                <p className="text-lg leading-relaxed font-semibold text-slate-900">
                  You need confirmation that every serving delivers 2400mg of
                  red yeast rice and 200mg of CoQ10 without the toxic
                  contaminants that make headlines when the FDA issues warnings.
                </p>
              </div>
            </div>
          </section>

          {/* Item 6 */}
          <section className="scroll-mt-20">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
              {/* Image on the left */}
              <div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F2a9401f877da48d6b4f725528745b384%2F57378778fb794049b5a25a52d442a056?format=webp&width=800"
                  alt="Before and after: Woman at doctor visit vs happy at home with Lunessa product"
                  className="w-full rounded-lg shadow-lg object-cover"
                />
              </div>

              {/* Content on the right */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
                  6. Lunessa: The Only Gummy That Meets Every Clinical Criteria
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  After establishing what a safe, effective natural cholesterol
                  protocol requires—clinical dosing (2400mg RYR), protective
                  CoQ10 (200mg), citrinin-free purity, and compliance-friendly
                  format—the question becomes: which product actually delivers
                  all of this?
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Lunessa is the only red yeast rice + CoQ10 formula in gummy
                  form that meets pharmaceutical-grade standards: 2400mg red
                  yeast rice per serving (the clinical dose studied for
                  cholesterol management), 200mg CoQ10 per serving (protective
                  dosing for mitochondrial energy), third-party tested &
                  certified citrinin-free (pharmaceutical-grade fermentation,
                  zero kidney toxins), and gummy format (no horse-sized pills to
                  choke down).
                </p>

                <p className="text-lg leading-relaxed font-semibold text-slate-900">
                  People across forums share success stories:{" "}
                  <span className="font-semibold">
                    "I've been taking it for ~6 months and my lipid levels have
                    changed for the better enormously... LDL halved,"
                  </span>{" "}
                  <span className="font-semibold">
                    "it works without the statin side effects (for me),"
                  </span>{" "}
                  and{" "}
                  <span className="font-semibold">
                    "my cardiologist recommended red yeast rice and my
                    cholesterol went from 245 to 177 without changing my diet."
                  </span>
                </p>
              </div>
            </div>
          </section>

          {/* Item 7 */}
          <section className="scroll-mt-20">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
              {/* Image on the left */}
              <div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F2a9401f877da48d6b4f725528745b384%2F8151e2abb532442b93912c7953a94255?format=webp&width=800"
                  alt="Happy woman holding Lunessa Red Yeast Rice + CoQ10 bottle"
                  className="w-full rounded-lg shadow-lg object-cover"
                />
              </div>

              {/* Content on the right */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
                  7. Join Thousands Who've Escaped The Statin Side Effect Trap
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Big pharma generates billions annually from statin
                  prescriptions—managing symptoms while dismissing
                  quality-of-life destruction as "necessary" for people with
                  genetic cholesterol.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  When thousands of people with FH refuse to go back to
                  prescription dependency after discovering the 2400mg red yeast
                  rice + 200mg CoQ10 protocol, you know something is working.
                  Users report:{" "}
                  <span className="font-semibold">
                    "Red yeast rice plus CoQ10 lowered my LDL from 148 to 55.
                    Yes, in the U.S."
                  </span>
                </p>

                <p className="text-lg leading-relaxed font-semibold text-slate-900">
                  Lunessa gives you complete freedom to manage your genetic
                  cholesterol on your own terms—zero prescription gatekeeping,
                  zero doctor appointments to get your refill, zero insurance
                  battles while feeling worse than before you started.
                </p>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <div className="bg-gradient-to-br from-rose-50 to-red-50 rounded-xl p-8 shadow-xl border-2 border-rose-200 my-16">
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-white rounded-lg shadow-md mb-6 overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F2a9401f877da48d6b4f725528745b384%2F2bb35d11b8fc416198f1440bcdd6b94c?format=webp&width=800"
                  alt="Buy 2 Get 1 Free - Lunessa Red Yeast Rice + CoQ10"
                  className="w-full h-auto"
                />
              </div>

              <p className="text-sm text-slate-600 mb-6">
                This limited-time deal is in high demand and stock keeps selling
                out.
              </p>

              <a
                href="https://shoplunessa.store/products/lunessa"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full bg-[#7e1d22] hover:bg-[#6b1a1e] text-white text-lg py-6 mb-6 shadow-lg">
                  BUY 2 GET 1 FREE →
                </Button>
              </a>

              <ul className="space-y-3 text-left max-w-md mx-auto">
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
                  <span>
                    Free Shipping on Orders Over $50 + 90-Day Guarantee
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-sm mb-4">
              © 2025 Lunessa. All rights reserved.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm">
              <a href="#" className="hover:text-rose-400 transition">
                Privacy Policy
              </a>
              <span className="text-slate-600">•</span>
              <a href="#" className="hover:text-rose-400 transition">
                Terms of Service
              </a>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8 space-y-4 text-xs text-slate-400 leading-relaxed">
            <p>
              These statements have not been evaluated by the Food and Drug
              Administration. This product is not intended to diagnose, treat,
              cure, or prevent any disease. Testimonials are based on actual
              user experiences with red yeast rice supplements as documented in
              health forums and research. Individual results may vary and may
              not reflect the typical purchaser's experience.
            </p>
            <p>
              Information on Lunessa's website is provided for informational
              purposes only. It is not meant to substitute for medical advice
              from your physician or other medical professional. You should not
              use the information contained herein for diagnosing or treating a
              health problem or disease, or prescribing any medication. If you
              have or suspect that you have a medical problem, promptly contact
              your regular health care provider.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
