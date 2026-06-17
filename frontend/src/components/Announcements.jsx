function Announcements() {
  const announcements = [
    "Admissions Open for PG-DAC 2026 Batch",
    "Entrance Test Registration Started",
    "PG-AI Program Applications Invited",
    "Campus Placement Drive Scheduled",
    "Scholarship Applications Open",
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Latest Announcements
        </h2>

        <div className="space-y-4">
          {announcements.map((announcement, index) => (
            <div
              key={index}
              className="
                bg-white
                p-5
                rounded-xl
                shadow-md
                border-l-4
                border-cyan-500
                hover:shadow-xl
                hover:translate-x-2
                transition-all
                duration-300
              "
            >
              📢 {announcement}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Announcements;