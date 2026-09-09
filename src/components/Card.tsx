import Image from "next/image";
import InteractiveCard from "@/components/InteractiveCard";

interface CardProps {
  venueName: string;
  imgSrc: string;
}

export default function Card({ venueName, imgSrc }: CardProps) {
  return (
    <InteractiveCard>
      <div className="w-72 overflow-hidden rounded-lg">
        <div className="relative w-full h-48">
          <Image
            src={imgSrc}
            alt={venueName}
            fill
            sizes="(max-width: 768px) 100vw, 288px"
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800">{venueName}</h2>
        </div>
      </div>
    </InteractiveCard>
  );
}
