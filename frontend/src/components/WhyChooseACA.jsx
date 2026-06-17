function WhyChooseACA() {
  const features = [
    "Industry-Oriented Curriculum",
    "Expert Faculty",
    "Placement Assistance",
    "Hands-on Projects",
    "Cloud & AI Programs",
    "Modern Learning Platform",
  ];

  return (
    <section className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose ACA?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
  <div
    key={feature}
    className="
      group
      bg-white
      p-8
      rounded-xl
      shadow-md
      hover:shadow-2xl
      hover:-translate-y-3
      hover:scale-105
      hover:border-cyan-500
      border
      border-transparent
      transition-all
      duration-300
      cursor-pointer
    "
  >

    {/* Icon Circle */}
    <div
      className="
        w-14
        h-14
        rounded-full
        bg-cyan-100
        flex
        items-center
        justify-center
        mb-5
        group-hover:bg-cyan-500
        transition-all
        duration-300
      "
    >
      <span
        className="
          text-2xl
          group-hover:text-white
          transition-all
        "
      >
        ✓
      </span>
    </div>

    <h3
      className="
        text-xl
        font-semibold
        group-hover:text-cyan-600
        transition-all
      "
    >
      {feature}
    </h3>

  </div>
))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseACA;