import SectionLabel from "../atoms/SectionLabel";
import Button from "../atoms/Button";

export default function HeroSection() {
  return (
    <section className="min-h-[819px] flex flex-col justify-center px-6 lg:px-24 max-w-7xl mx-auto">
      <div className="space-y-4">
        <SectionLabel>Digital Architect &amp; Developer</SectionLabel>
        <h1 className="text-[clamp(3.5rem,10vw,8rem)] font-bold tracking-[-0.04em] leading-[0.9] text-primary">
          Melkoh.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 items-end">
          <p className="text-xl text-on-surface-variant max-w-md font-light leading-relaxed">
            Designing software structures with the precision of a master
            watchmaker. Building digital experiences that stand the test of time.
          </p>
          <div className="flex flex-col gap-4 md:items-end">
            <Button>VIEW PROJECTS</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
