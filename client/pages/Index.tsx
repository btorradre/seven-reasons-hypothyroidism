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
              Your Thyroid Medication Isn't Fixing Your Cholesterol
            </span>{" "}
            (And What Your Doctor Isn't Telling You)
          </h1>

          <p className="text-lg sm:text-xl font-semibold mb-4 text-slate-800">
            Your TSH is "normal." Your cholesterol is 240.
          </p>

          <p className="text-base sm:text-lg mb-4 leading-relaxed text-slate-700">
            You've been taking Synthroid for years. You eat 1,200 calories a day. You walk when your energy allows it. Yet your doctor just handed you a prescription for a statin and said, "Your cholesterol is too high."
          </p>

          <p className="text-base sm:text-lg mb-4 leading-relaxed text-slate-700">
            Something doesn't add up.
          </p>

          <p className="text-base sm:text-lg mb-4 leading-relaxed text-slate-700">
            Before the 1970s, doctors diagnosed hypothyroidism by checking cholesterol levels. High cholesterol was considered a thyroid symptom. Modern medicine fractured that knowledge into separate specialties.
          </p>

          <p className="text-base sm:text-lg mb-6 leading-relaxed text-slate-700">
            Now you get two diagnoses and two pills instead of one root cause addressed.
          </p>

          <div className="bg-rose-50 border-l-4 border-[#7e1d22] p-4 my-8">
            <p className="font-semibold text-rose-900">
              Read this before you accept that your high cholesterol has nothing to do with your thyroid.
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
                  1. Your Liver Can't Clear Cholesterol When Thyroid Hormone Is Low—Even If Your TSH Looks "Perfect"
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  You've been eating like a bird. Cut out red meat. No butter. No eggs. Your LDL hit 226 anyway.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Your doctor looks at you skeptically. "Are you sure you're not sneaking snacks?"
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Here's what's actually happening: Thyroid hormone (T3) tells your liver to build LDL receptors. These receptors pull cholesterol out of your blood and process it. When thyroid hormone is low, your liver stops building enough receptors.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Result: Cholesterol piles up no matter how clean you eat.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Before 1971, high cholesterol was how doctors diagnosed hypothyroidism. A 1952 textbook states: "A cholesterol level above 250 mg/dL in a patient presenting with cold intolerance, hair loss, and fatigue is diagnostic of hypothyroidism."
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Modern medicine fractured that knowledge. Your endocrinologist looks at TSH. Your cardiologist looks at LDL. Nobody connects the dots.
                </p>

                <p className="text-lg leading-relaxed font-semibold text-slate-900">
                  The problem isn't the cargo (your food). It's the dockworkers (your LDL receptors). Your liver port manager is asleep.
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
                  2. Statins Will Steal What Little Energy You Have Left
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  You already know thyroid fatigue. Sleeping 10 hours and waking up exhausted. Brain fog so thick you forget familiar names.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Now imagine making that worse.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Statins block cholesterol production. But they also block CoQ10 production—the fuel your mitochondria use to create cellular energy.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Hypothyroidism already slows your mitochondria. Adding a statin creates a compound energy crisis.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  This isn't a "rare side effect." It's a mechanical certainty:
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  <span className="font-semibold">Hypothyroidism:</span> Slows mitochondria, reduces ATP production.<br />
                  <span className="font-semibold">Statins:</span> Depletes CoQ10, cripples struggling mitochondria.<br />
                  <span className="font-semibold">Result:</span> Stacking two mitochondrial toxins.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  One patient: <span className="font-semibold">"I was 46 and got real old very quick. The fatigue, muscle cramps, shooting pains... my doctor just blew me off."</span>
                </p>

                <p className="text-lg leading-relaxed font-semibold text-slate-900">
                  Your brain can't form memories without energy. Your muscles can't recover without fuel.
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
                  3. The Muscle Pain Will Be Worse Because You Already Have Thyroid-Related Weakness
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  You already deal with joint pain. Legs ache climbing stairs. Shoulders hurt lifting groceries.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Now add statin-induced muscle breakdown:
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  <span className="font-semibold">
                    "Muscle pain so intense... spasms so bad... put me in ER."
                  </span>
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  <span className="font-semibold">
                    "It felt like a terrible flu's muscle aches all over."
                  </span>
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Hypothyroidism independently causes muscle weakness. Statins independently cause muscle breakdown. Research confirms hypothyroidism is a known risk factor for statin-induced myopathy.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  When you combine them, you're stacking two mitochondrial toxins. The risk multiplies.
                </p>

                <p className="text-lg leading-relaxed font-semibold text-slate-900">
                  Some patients develop rhabdomyolysis—severe muscle breakdown causing kidney failure—simply because their thyroid wasn't optimized before starting a statin.
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
                  alt="Woman experiencing severe brain fog and cognitive decline from statins"
                  className="w-full aspect-square object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Content on the right */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
                  4. Your Brain Fog Is About to Get Much, Much Worse
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  You already lose words mid-sentence. You wonder if this is early dementia or just your thyroid.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Statins can make you wonder if you're losing your mind.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  <span className="font-semibold">"Within a week of stopping, the brain fog lifted. I hadn't realized how bad I had felt for years."</span>
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  <span className="font-semibold">"I forgot my daughter's phone number. I forgot how to get to the grocery store I'd been going to for fifteen years."</span>
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Your brain uses 20% of your body's energy despite being 2% of your body weight. When statins deplete CoQ10, your brain cells can't generate the power they need.
                </p>

                <p className="text-lg leading-relaxed font-semibold text-slate-900">
                  For someone already battling thyroid-related cognitive symptoms, this isn't rare—it's predictable.
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
                  src="https://cdn.builder.io/api/v1/image/assets%2F2a9401f877da48d6b4f725528745b384%2F711db063061b4738971764ed6f36835a?format=webp&width=800"
                  alt="Woman exhausted in bed experiencing fatigue from hypothyroidism and statin side effects"
                  className="w-full aspect-square object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Content on the right */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
                  5. You're Already Choking Down Synthroid Every Morning—Now You Need Another Horse-Sized Pill?
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Wake up. Take levothyroxine on an empty stomach. Wait 30 minutes. No coffee. No food.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Now your doctor wants to add a statin.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Another horse-sized pill. Another medication to track. Another reason to dread mornings.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  38% of adults struggle to swallow pills. If you're already managing thyroid medication, adding another pill makes adherence nearly impossible.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  You skip doses. Not because you forgot. Because you couldn't face choking it down again.
                </p>

                <p className="text-lg leading-relaxed font-semibold text-slate-900">
                  Every new prescription makes you feel older. Every new pill makes you feel more like a patient and less like a person.
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
                  src="https://cdn.builder.io/api/v1/image/assets%2F2a9401f877da48d6b4f725528745b384%2F1c96be8b93924f4d854da6483524fa7f?format=webp&width=800"
                  alt="Warning symbol showing citrinin contamination risk in cheap red yeast rice"
                  className="w-full aspect-square object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Content on the right */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
                  6. Your Doctor Probably Doesn't Know That Your Thyroid and Cholesterol Were Always Connected
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Your endocrinologist looks at TSH. If it's 3.8, you're fine. Your cardiologist looks at LDL. If it's 240, you need a statin.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Nobody connects the dots.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Before 1971—before TSH testing became the gold standard—doctors understood this connection. High cholesterol was how they diagnosed hypothyroidism. If your cholesterol was elevated, they gave you thyroid hormone and watched it drop.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Then we invented the TSH test. We fell in love with the number. We forgot that symptoms matter.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  The historical connection wasn't disproven. It was just forgotten.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  The result: You get a statin that lowers cholesterol by forcing your liver to stop production. But it doesn't fix the real problem—your liver can't clear cholesterol because thyroid signaling is impaired.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  You're managing a number while the root dysfunction continues unchecked.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Worse: The statin depletes the CoQ10 your thyroid-compromised mitochondria desperately need.
                </p>

                <p className="text-lg leading-relaxed font-semibold text-slate-900">
                  You're being treated by specialists who each see one piece of the puzzle. Nobody sees you.
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
                  alt="Happy thyroid patient holding natural cholesterol management solution"
                  className="w-full aspect-square object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Content on the right */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
                  7. Join Thousands of Thyroid Patients Who've Stopped Accepting Statin Side Effects As "Normal"
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Big pharma generates billions annually from statin prescriptions. They manage your numbers while dismissing quality-of-life destruction as "necessary" for people with thyroid conditions and high cholesterol.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  But when thousands of people with hypothyroidism refuse to go back to prescription dependency after discovering the 2400mg red yeast rice plus 200mg CoQ10 protocol, that tells you something.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Real results from real people with thyroid conditions:
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  <span className="font-semibold">"My cholesterol went from 245 to 177 without changing my diet."</span>
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  <span className="font-semibold">"My Free T3 went from 2.8 to 3.5. Same Synthroid dose. LDL dropped 54 points. I can think again."</span>
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  <span className="font-semibold">"I'm regular for the first time in five years. LDL dropped 58 points."</span>
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  <span className="font-semibold">"LDL dropped 119 points from my peak. Turned out I didn't have genetic FH—just untreated hypothyroidism."</span>
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  <span className="font-semibold">"I've been taking it for ~6 months and my lipid levels have changed for the better enormously... LDL halved."</span>
                </p>

                <p className="text-lg leading-relaxed mb-4 text-slate-700">
                  Lunessa gives you the freedom to manage your cholesterol on your own terms. Zero prescription gatekeeping. Zero doctor appointments to get your refill. Zero insurance battles while feeling worse than before you started.
                </p>

                <p className="text-lg leading-relaxed font-semibold text-slate-900">
                  Your body. Your choice. Your results.
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
