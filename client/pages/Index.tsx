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
              People with Hypothyroidism Choose This Over Statins
            </span>{" "}
            for Their Cholesterol
          </h1>

          <p className="text-lg sm:text-xl font-semibold mb-4 text-slate-800">
            Your thyroid medication fixed your TSH. Your cholesterol is still 240.
          </p>

          <p className="text-base sm:text-lg mb-4 leading-relaxed text-slate-700">
            Your doctor says your numbers look "normal" but wants to add a statin. You're already exhausted from hypothyroidism. Now you're reading about muscle pain and brain fog from statins.
          </p>

          <p className="text-base sm:text-lg mb-6 leading-relaxed text-slate-700">
            A natural approach combining red yeast rice with CoQ10 is helping people with thyroid conditions manage cholesterol without stacking another mitochondrial toxin on top of existing fatigue.
          </p>

          <div className="bg-rose-50 border-l-4 border-[#7e1d22] p-4 my-8">
            <p className="font-semibold text-rose-900">
              Read this before you accept a statin prescription that could make your hypothyroid symptoms worse.
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
                  src="https://cdn.builder.io/api/v1/image/assets%2F2a9401f877da48d6b4f725528745b384%2F1bdf192b9fbb4154b6f6e6f139c51d29?format=webp&width=800"
                  alt="Cholesterol management pathways comparison for hypothyroid patients: statins single pathway vs Lunessa three-pathway approach"
                  className="w-full aspect-auto object-contain rounded-lg shadow-lg"
                />
              </div>

              {/* Content on the right */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
                  1. Your High Cholesterol Might Be Your Thyroid, Not Your Diet
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Before TSH testing existed in the 1970s, doctors diagnosed hypothyroidism by checking cholesterol levels. High cholesterol was considered a thyroid symptom.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Here's what happens: Thyroid hormone (T3) tells your liver to build LDL receptors. These receptors pull cholesterol out of your blood and process it. When thyroid hormone is low, your liver stops building these receptors.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Result: Cholesterol piles up in your bloodstream no matter how clean you eat.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  This explains why you can restrict calories to 1,200 a day, cut out red meat, follow a Mediterranean diet, and still watch your LDL climb to 226. The problem isn't the cargo (your food). It's the dockworkers (your LDL receptors). Your liver port manager is asleep.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Red yeast rice works differently than synthetic statins. It contains monacolin K, which supports cholesterol management through the same pathway as statins but in a whole-food matrix with additional compounds that may buffer the impact.
                </p>

                <p className="text-lg leading-relaxed font-semibold text-slate-900">
                  Studies show 2400mg of red yeast rice can lower LDL by approximately 27% without isolating a single chemical compound and forcing it into your system at pharmaceutical doses.
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
                  alt="Woman exhausted from hypothyroidism and statin-depleted CoQ10 levels"
                  className="w-full aspect-square object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Content on the right */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
                  2. Statins Deplete CoQ10—Which You Already Don't Have Enough Of
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Hypothyroidism slows your mitochondria. Your cells already struggle to generate energy. That's why you feel exhausted even after sleeping 10 hours.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Statins block an enzyme called HMG-CoA reductase. This stops your liver from making cholesterol. But it also stops your liver from making CoQ10.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  CoQ10 is what your mitochondria use to create cellular energy. Every contraction of your heart muscle, every step you take, every thought you think requires CoQ10.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  When you combine hypothyroidism (which already weakens mitochondria) with statins (which deplete CoQ10 further), you create a compound energy crisis.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  One patient described it: <span className="font-semibold">"I was 46 and got real old very quick. The fatigue, muscle cramps, shooting pains... my doctor just blew me off."</span>
                </p>

                <p className="text-lg leading-relaxed font-semibold text-slate-900">
                  Red yeast rice at 2400mg combined with 200mg of CoQ10 supports cholesterol management while replacing what gets depleted. You're not sacrificing energy to lower a number.
                </p>
              </div>
            </div>
          </section>

          {/* Item 3 */}
          <section className="scroll-mt-20">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
              {/* Visual on the left */}
              <div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F2a9401f877da48d6b4f725528745b384%2F81b591b35bbf4482bfe286af1f1b3018?format=webp&width=800"
                  alt="Thyroid patient struggling with severe muscle pain from statins"
                  className="w-full aspect-square object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Content on the right */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
                  3. The Muscle Pain Isn't Rare—And It Hits Thyroid Patients Harder
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Pharmaceutical companies say statin side effects are uncommon. But listen to what people actually report:
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  <span className="font-semibold">
                    "Muscle pain so intense... spasms so bad in low back, legs and hip... put me in ER."
                  </span>
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  <span className="font-semibold">
                    "Exhausted and useless."
                  </span>
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  <span className="font-semibold">
                    "It felt like a terrible flu's muscle aches all over."
                  </span>
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Here's why this matters for thyroid patients: Hypothyroidism independently causes muscle weakness and myopathy. Statins independently cause muscle breakdown and pain.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Research confirms that hypothyroidism is a known risk factor for statin-induced myopathy. When you prescribe a statin to someone with thyroid dysfunction, you're stacking two mitochondrial toxins. The risk multiplies.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Some patients develop rhabdomyolysis—severe muscle breakdown—simply because their thyroid wasn't optimized before starting a statin.
                </p>

                <p className="text-lg leading-relaxed font-semibold text-slate-900">
                  The 2400mg red yeast rice protocol manages cholesterol production more gently. When combined with 200mg of CoQ10, you're protecting the muscle cells you need for basic mobility.
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
                  src="https://cdn.builder.io/api/v1/image/assets%2F2a9401f877da48d6b4f725528745b384%2F4b9e986873394d659b280ed8cbebfe03?format=webp&width=800"
                  alt="Thyroid patient comparing difficult pill swallowing to easy gummy format"
                  className="w-full aspect-square object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Content on the right */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
                  4. You're Already Taking Synthroid Every Morning—Gummies Are Easier Than More Pills
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  If you have hypothyroidism, you already know the morning routine. Wake up. Take levothyroxine on an empty stomach. Wait 30 minutes. No coffee. No food.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Now your doctor wants to add a statin. Another horse-sized pill to swallow. Another medication to track. Another reason to dread mornings.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  38% of adults struggle to swallow pills. When your cholesterol support comes in a raspberry-flavored gummy instead of a chalky tablet, daily adherence becomes effortless.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  No water bottle required. No gagging. No skipped doses because you "forgot" but really you just couldn't face choking down another pill.
                </p>

                <p className="text-lg leading-relaxed font-semibold text-slate-900">
                  One user put it simply: <span className="font-semibold">"I refused statins. My doctor thought it was the statin working. I told him and he was okay with it based on my labs."</span>
                </p>
              </div>
            </div>
          </section>

          {/* Item 5 */}
          <section className="scroll-mt-20">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
              {/* Image on the left */}
              <div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F2a9401f877da48d6b4f725528745b384%2F73b1fc3548b24ff299e758169930c05b?format=webp&width=800"
                  alt="Woman experiencing brain fog from thyroid condition and statins"
                  className="w-full aspect-square object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Content on the right */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
                  5. Your Thyroid Already Makes You Tired—Don't Add "Zombie Mode"
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  People with hypothyroidism describe brain fog as "walking through wet cement." You forget phone numbers. You lose words mid-sentence. You wonder if this is early dementia or just your thyroid.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Now add statin side effects to that equation.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Patients report "Total Global Amnesia" episodes lasting hours. Others describe becoming "non-functional zombies" who couldn't feed themselves until they stopped the drug.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  For someone already battling thyroid-related cognitive symptoms, this risk is unacceptable. You need mental clarity to work, to drive, to care for your family.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Your brain uses more energy than any other organ. When statins deplete CoQ10, your brain cells can't generate the power they need to function properly.
                </p>

                <p className="text-lg leading-relaxed font-semibold text-slate-900">
                  The 2400mg red yeast rice plus 200mg CoQ10 protocol supports cholesterol management while protecting the mitochondrial energy production your brain depends on.
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
                  src="https://cdn.builder.io/api/v1/image/assets%2F2a9401f877da48d6b4f725528745b384%2F6d1dd042de974beb94205f451a6b0524?format=webp&width=800"
                  alt="Warning symbol showing citrinin contamination risk in cheap red yeast rice"
                  className="w-full aspect-square object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Content on the right */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
                  6. Cheap Red Yeast Rice Could Contain Kidney Toxins
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Not all red yeast rice supplements are the same. Poorly fermented products contain citrinin, a kidney toxin that accumulates over time.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Generic "bargain bin" supplements often fail third-party testing. The FDA has issued warnings about contamination.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Clinical doses require rigorous fermentation control, batch testing, and citrinin-free certification. That's the difference between pharmaceutical-grade red yeast rice and unregulated $9.99 bottles.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Lunessa delivers:
                </p>

                <ul className="list-disc pl-6 mb-4 space-y-2 text-lg leading-relaxed text-slate-700">
                  <li>
                    2400mg red yeast rice per serving (the clinical dose studied for cholesterol management)
                  </li>
                  <li>
                    200mg CoQ10 per serving (protective dosing for mitochondrial energy)
                  </li>
                  <li>
                    Third-party tested and certified citrinin-free (zero kidney toxins)
                  </li>
                  <li>Gummy format (no horse-sized pills)</li>
                </ul>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  People with hypothyroidism share success stories:
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  <span className="font-semibold">
                    "I've been taking it for ~6 months and my lipid levels have changed for the better enormously... LDL halved."
                  </span>
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  <span className="font-semibold">
                    "It works without the statin side effects (for me)."
                  </span>
                </p>

                <p className="text-lg leading-relaxed font-semibold text-slate-900">
                  <span className="font-semibold">
                    "My cardiologist recommended red yeast rice and my cholesterol went from 245 to 177 without changing my diet."
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
                  src="https://cdn.builder.io/api/v1/image/assets%2F2a9401f877da48d6b4f725528745b384%2F89362d31c45c4db0a0fac901defcd80b?format=webp&width=800"
                  alt="Doctor explaining thyroid-cholesterol connection to patient"
                  className="w-full aspect-square object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Content on the right */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
                  7. Your Doctor Might Not Know About The Thyroid-Cholesterol Connection
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Modern medicine has fractured your body into disconnected systems. Your endocrinologist looks at TSH. If it's 3.8, they say you're fine. Your cardiologist looks at LDL. If it's 240, they prescribe a statin.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Nobody connects the dots.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Nobody tells you: "Your cholesterol is high because your thyroid is low."
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Before the 1970s, doctors understood this connection. High cholesterol was how they diagnosed hypothyroidism. Modern specialization broke that knowledge.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  The result: You get treated for a number instead of a mechanism. Your statin lowers cholesterol by forcing your liver to stop production. But it doesn't fix the real problem—your liver can't clear cholesterol because thyroid hormone isn't signaling it to build LDL receptors.
                </p>

                <p className="text-lg leading-relaxed font-semibold text-slate-900">
                  Lunessa addresses what levothyroxine alone cannot fix. It supports the liver's cholesterol clearance while protecting your energy reserves.
                </p>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <div className="bg-gradient-to-br from-rose-50 to-red-50 rounded-xl p-8 shadow-xl border-2 border-rose-200 my-16">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
                Limited-Time Offer: Buy 2 Get 1 Free
              </h2>

              <p className="text-lg leading-relaxed mb-6 text-slate-700">
                Clinical-dose red yeast rice (2400mg) + protective CoQ10 (200mg) in gummy form. Third-party tested. Citrinin-free. Designed for people managing both thyroid conditions and cholesterol.
              </p>

              <div className="bg-white rounded-lg shadow-md mb-6 overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F2a9401f877da48d6b4f725528745b384%2Fe07f1bc2ad0d452988c5400fc86d1365?format=webp&width=800"
                  alt="Buy 2 Get 1 Free - Lunessa Red Yeast Rice + CoQ10"
                  className="w-full aspect-square object-cover rounded-lg"
                />
              </div>

              <p className="text-sm text-slate-600 mb-6">
                Free shipping on orders over $50. 90-day guarantee.
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
      <footer className="bg-slate-900 text-white py-12 px-4 mt-20 mb-16 sm:mb-14">
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

      {/* Sticky CTA Button */}
      <a
        href="https://shoplunessa.store/products/lunessa"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-0 left-0 right-0 z-50 bg-[#22C55E] hover:bg-[#16A34A] text-white py-4 px-4 text-center font-bold text-sm sm:text-base uppercase tracking-wide transition-colors shadow-lg"
      >
        APPLY DISCOUNT AND CHECK AVAILABILITY
      </a>
    </div>
  );
}
