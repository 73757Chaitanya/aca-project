function PageBadge({ text }) {
  return (
    <div
      className="
        inline-block
        mt-4
        bg-cyan-100
        text-cyan-700
        px-4
        py-1
        rounded-full
        text-sm
        font-medium
      "
    >
      {text}
    </div>
  );
}

export default PageBadge;