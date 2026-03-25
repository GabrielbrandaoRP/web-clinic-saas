import Link from "next/link";

interface ButtonProps {
  label: string;
  size?: string;
  link?: string;
}

export default function ButtonGradient({ label, size, link }: ButtonProps) {
  return (
    <>
      <Link href={`/${link}`} className="w-full">
        <button className="bg-linear-to-br from-slate-300 to-slate-500 min-w-40 px-4 py-3 rounded-lg w-full">
          {label}
        </button>
      </Link>
    </>
  );
}
