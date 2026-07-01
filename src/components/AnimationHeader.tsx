function AnimationHeader() {
  const text =
    "RESIDENTIAL • COMMERCIAL • HOSPITALITY • VASTU-COMPLIANT DESIGN • ";

  return (
    <div className="overflow-hidden bg-black text-white py-2 sm:py-3" aria-hidden="true">
      <div className="flex whitespace-nowrap marquee">
        <span className="px-4 text-xl sm:text-xl md:text-xl lg:text-xl font-semibold tracking-tight opacity-90">
          {text.repeat(6)}
        </span>
        {/* <span className="px-4 text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tight opacity-90">
          {text.repeat(6)}
        </span> */}
      </div>
    </div>
  );
}

export default AnimationHeader;
