export default function AboutSection() {
  return (
    <section id="about" className="px-6 lg:px-24 py-40 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div className="sticky top-40 h-fit">
          <h2 className="text-4xl font-bold tracking-tighter">
            The Philosophy of Precise Restraint.
          </h2>
        </div>

        <div className="space-y-12">
          <p className="text-2xl leading-relaxed text-on-surface font-light">
            I believe that every pixel should serve a purpose. In an era of
            digital noise, luxury is defined by what we choose to leave out.
          </p>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            As a software developer, I treat code like structural engineering.
            It isn't just about functionality; it's about the elegance of the
            logic and the longevity of the architecture. My work bridges the gap
            between high-level design thinking and low-level technical execution.
          </p>

          <div className="grid grid-cols-2 gap-12 pt-12 border-t border-surface-variant">
            <div>
              <h4 className="font-label text-[0.65rem] uppercase tracking-widest text-on-surface-variant mb-4">
                Focus
              </h4>
              <ul className="space-y-2 text-sm">
                <li>UI/UX Engineering</li>
                <li>System Architecture</li>
                <li>Product Strategy</li>
              </ul>
            </div>
            <div>
              <h4 className="font-label text-[0.65rem] uppercase tracking-widest text-on-surface-variant mb-4">
                Values
              </h4>
              <ul className="space-y-2 text-sm">
                <li>Structural Integrity</li>
                <li>Visual Silence</li>
                <li>Performance as UX</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
