import Link from "next/link";

interface ListingCardProps {
  listing: {
    id: number;
    title: string;
    author: string;
    price: string;
    location: string;
    moveInDate: string;
    description: string;
    phone: string;
    postedDate: string;
  };
  variant?: "blue" | "pink";
}

export default function ListingCard({ listing, variant = "blue" }: ListingCardProps) {
  const imageBg = variant === "pink" ? "bg-pink-50" : "bg-blue-50";
  const priceBadgeBg = variant === "pink" ? "bg-pink-300" : "bg-blue-300";

  return (
    <Link
      href={`/listing/${listing.id}`}
      className="group block rounded-xl border-2 border-black bg-white p-6 shadow-[var(--shadow-secondary)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
    >
      {/* Image Section */}
      <div className={`mb-6 h-48 w-full overflow-hidden rounded-lg border-2 border-black ${imageBg}`}>
        <div className="flex h-full w-full items-center justify-center text-6xl">
          🏡
        </div>
      </div>

      <div className="mb-4 flex items-start justify-between gap-3">
        <span className={`rounded-lg border-2 border-black ${priceBadgeBg} px-4 py-2 text-sm font-bold shadow-[var(--shadow-secondary)]`}>
          {listing.price}
        </span>
        <span className="text-xs text-zinc-500">{listing.postedDate}</span>
      </div>

      <h3 className="mb-3 text-lg font-bold leading-tight">{listing.title}</h3>

      <div className="mb-4 space-y-1 text-sm text-zinc-600">
        <p>📍 {listing.location}</p>
        <p>📅 Dọn vào: {listing.moveInDate}</p>
      </div>

      <p className="mb-5 line-clamp-2 text-sm leading-relaxed text-zinc-700">
        {listing.description}
      </p>

      <div className="flex items-center justify-between border-t-2 border-gray-100 pt-4">
        <span className="text-sm font-medium text-zinc-700">
          ✍️ {listing.author}
        </span>
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            window.location.href = `tel:${listing.phone.replace(/\s/g, "")}`;
          }}
          className="btn-secondary text-xs"
        >
          Gọi
        </button>
      </div>
    </Link>
  );
}
