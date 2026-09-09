import Image from "next/image";
import TopMenuItem from "./TopMenuItem";

export default function TopMenu() {
  return (
    <nav className="w-full bg-gray-900 flex items-center justify-between px-6 py-3">
      <div className="flex items-center gap-2">
        <img
          src="/img/logo.png"
          alt="Venue Explorer Logo"
          width={40}
          height={40}
          className="object-contain"
        />
        <span className="text-white font-bold text-lg">Venue Explorer</span>
      </div>
      <div className="flex items-center">
        <TopMenuItem title="Booking" pageRef="/booking" />
      </div>
    </nav>
  );
}
