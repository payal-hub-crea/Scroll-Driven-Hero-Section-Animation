// Ha mukhya page ahe (website cha pahila page)
import Hero from "../components/Hero";

export default function Page() {
  return (
    <main>
      {/* pahili screen: hero section (car animation) */}
      <Hero />

      {/* hero nantarchi dusri section, fakta scroll sampalyacha dakhvnyasathi */}
      <section className="grid min-h-screen place-items-center bg-navy px-[6vw] py-[10vh] text-ink">
        <p className="max-w-[46ch] text-xl leading-relaxed">
          Scroll back up and the car reverses. The motion is tied to your scroll position, not to a timer.
        </p>
      </section>
    </main>
  );
}
