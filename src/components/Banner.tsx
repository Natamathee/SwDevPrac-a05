import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative w-full h-[480px] overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1600&q=80"
        alt="Elegant banquet venue hall"
        fill
        sizes="100vw"
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black/45 flex flex-col items-center justify-center gap-4 px-6 text-center text-white">
        <h1 className="text-4xl font-bold tracking-wide capitalize">
          where every event finds its venue
        </h1>
        <p className="text-lg max-w-xl leading-relaxed opacity-90">
          Discover premium banquet halls and event spaces for weddings,
          corporate gatherings, and every special occasion in between.
        </p>
      </div>
    </div>
  );
}
