"use client";
// "use client" => ha component browser madhe chalto (animation sathi garjeche)

import { useEffect, useRef } from "react";
import gsap from "gsap";                              // animation library
import { ScrollTrigger } from "gsap/ScrollTrigger";   // scroll var animation chalvnyasathi
import CarSvg from "./CarSvg";                        // car chi drawing

// ScrollTrigger plugin GSAP la sangto ki to vapraycha ahe
gsap.registerPlugin(ScrollTrigger);

// headline che 3 shabd
const words = ["WELCOME", "ITZ", "FIZZ"];

// khali dakhavayche 4 aakde (number + tyacha arth)
const stats = [
  { value: "58%", text: "Increase in pick up point use" },
  { value: "23%", text: "Decrease in customer phone calls" },
  { value: "27%", text: "Increase in pick up point use" },
  { value: "40%", text: "Decrease in customer phone calls" },
];

// page load zalyavar car dava kinara pasun itke px var thambte
const CAR_START = 24;

export default function Hero() {
  // useRef => HTML element la direct pakadnyasathi
  const section = useRef(null); // purna hero section
  const car = useRef(null);     // car cha box

  // useEffect => page screen var aalyavar ek vela chalto, animation ithe suru hote
  useEffect(() => {
    // sagle akshar ani sagle points shodhun ghetle
    const letters = section.current.querySelectorAll(".letter");
    const statBoxes = section.current.querySelectorAll(".stat");
    const carEl = car.current;
    let timeline = null;    // scroll animation yat sathvli jate
    let resizeTimer = null;

    // 1) suruvatila akshar ani points lapvle (opacity 0 = disat nahi)
    //    car jashi pudhe jail, tashi te disnar
    gsap.set(letters, { opacity: 0 });
    gsap.set(statBoxes, { opacity: 0, y: 30 });

    // 2) jar user ne phone/computer madhe animation band kele asel, tar sagla sarkha dakhav
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(letters, { opacity: 1 });
      gsap.set(statBoxes, { opacity: 1, y: 0 });
      carEl.style.display = "none";
      return;
    }

    // 3) getTime => car ya element var kevha pohchte (0 te 1 madhe) te sangto
    //    0 = scroll chi suruvat, 1 = scroll cha shevt
    function getTime(el) {
      const box = el.getBoundingClientRect();
      const elCenter = box.left + box.width / 2;               // element cha madhya
      const carCenter = CAR_START + carEl.offsetWidth / 2;     // car cha madhya (suruvatila)
      const distance = window.innerWidth - CAR_START;          // car kiti antar jate
      const time = (elCenter - carCenter) / distance;
      // 0.02 te 0.97 chya madhe thev, mhanje kahi baher jat nahi
      return Math.min(0.97, Math.max(0.02, time));
    }

    // 4) scroll animation banvne (mukhya bhag)
    function makeScrollAnimation() {
      // junia animation asel tar aadhi kadhun taka (window resize zalyavar garjeche)
      if (timeline) {
        timeline.scrollTrigger.kill();
        timeline.kill();
      }
      gsap.set(letters, { opacity: 0 });
      gsap.set(statBoxes, { opacity: 0, y: 30 });

      // timeline = animations chi ek rangaalee, scroll sobat chalte
      timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section.current,
          start: "top top",  // hero screen chya var pasun suru
          end: "+=2400",     // 2400px scroll paryant chalte
          pin: true,         // scroll karta hero screen var chikatun rahto
          scrub: 1,          // animation scroll sobat chalte (1 second smooth)
        },
      });

      // car dava kadun ujvikade jate
      timeline.fromTo(
        carEl,
        { x: CAR_START },
        { x: window.innerWidth, ease: "none", duration: 1 },
        0 // 0 => suruvatich
      );

      // pratyek akshar tevha disto jevha car tyachya var pohchte
      letters.forEach((letter) => {
        timeline.to(letter, { opacity: 1, duration: 0.01 }, getTime(letter));
      });

      // points pan tasech, fakta te thode varun yetat (y: 0)
      statBoxes.forEach((box) => {
        timeline.to(box, { opacity: 1, y: 0, duration: 0.08 }, getTime(box));
      });
    }

    // 5) page load animation: car dava baherun aat yete
    gsap.set(carEl, { x: -carEl.offsetWidth }); // aadhi car screen chya baher
    const intro = gsap.to(carEl, {
      x: CAR_START,
      duration: 1.2,
      delay: 0.2,
      ease: "power3.out",             // suruvatila vegat, shevti halu halu thambte
      onComplete: makeScrollAnimation // car aat aali ki scroll animation suru
    });

    // 6) window cha size badalla tar animation parat banva
    function onResize() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (timeline) makeScrollAnimation();
      }, 250);
    }
    window.addEventListener("resize", onResize);

    // 7) cleanup: component kadhla ki sagla swachh kar
    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(resizeTimer);
      intro.kill();
      if (timeline) {
        timeline.scrollTrigger.kill();
        timeline.kill();
      }
    };
  }, []);

  return (
    // purna screen chi section (h-[100svh] = screen chi purna unchi)
    <section
      ref={section}
      className="relative flex h-[100svh] flex-col justify-center gap-[clamp(24px,6vh,60px)] overflow-hidden px-[5vw]"
    >
      {/* gadad nila rasta, tyavar headline ani car */}
      <div className="relative -mx-[5vw] flex h-[clamp(110px,20vw,190px)] items-center justify-center border-y-[3px] border-[#262864] bg-road max-sm:h-[34vw]">
        {/* rasta chya madhli tutlelya pattya (lane) */}
        <div className="lane absolute inset-x-0 top-1/2 h-[3px]" />

        {/* headline: pratyek akshar vegla span madhe, mhanje ek-ek karun dakhavta yet */}
        <h1
          aria-label="Welcome ItZ Fizz"
          className="relative z-10 flex flex-wrap justify-center gap-x-[1.1em] font-display text-[clamp(1.2rem,4.4vw,3.8rem)] font-bold leading-tight"
        >
          {words.map((word) => (
            <span key={word} className="flex">
              {/* "WELCOME".split("") => W E L C O M E */}
              {word.split("").map((char, i) => (
                <span key={i} className="letter mx-[0.15em] inline-block text-ink">
                  {char}
                </span>
              ))}
            </span>
          ))}
        </h1>

        {/* car (rasta chya var disavi mhanun z-20) */}
        <div ref={car} className="car absolute left-0 top-1/2 z-20 will-change-transform">
          <CarSvg />
        </div>
      </div>

      {/* khali che 4 aakde */}
      <div className="mx-auto mt-[clamp(20px,9vh,90px)] grid w-full max-w-[1000px] grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4 sm:gap-[clamp(16px,3vw,48px)]">
        {stats.map((item, i) => (
          <div key={i} className="stat border-l-2 border-accent pl-3.5">
            <b className="block font-display text-[clamp(1.6rem,4vw,3rem)] font-medium text-accent">
              {item.value}
            </b>
            <span className="mt-1.5 block max-w-[22ch] text-[clamp(.8rem,1.4vw,1rem)] leading-snug text-muted">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
