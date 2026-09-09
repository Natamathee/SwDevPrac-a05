import Link from "next/link";

interface TopMenuItemProps {
  title: string;
  pageRef: string;
}

export default function TopMenuItem({ title, pageRef }: TopMenuItemProps) {
  return (
    <Link
      href={pageRef}
      className="px-4 py-2 text-white! font-medium hover:bg-white/20 rounded-md transition-colors duration-200"
    >
      {title}
    </Link>
  );
}
