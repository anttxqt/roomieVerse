"use client";

type RoommateType = "have-room" | "need-partner" | "need-host";

interface FilterButtonsProps {
  activeType: RoommateType;
  onTypeChange: (type: RoommateType) => void;
}

export default function FilterButtons({
  activeType,
  onTypeChange,
}: FilterButtonsProps) {
  return (
    <div className="mb-8 flex flex-col sm:flex-row gap-3 max-w-3xl">
      <button
        onClick={() => onTypeChange("have-room")}
        className={`flex-1 rounded-xl border-2 border-black px-4 py-3 text-sm font-bold transition-all duration-200 ${
          activeType === "have-room"
            ? "bg-blue-300 text-black shadow-[4px_4px_0_#000]"
            : "bg-white text-black hover:shadow-[2px_2px_0_#000]"
        }`}
      >
        Có phòng
      </button>
      <button
        onClick={() => onTypeChange("need-partner")}
        className={`flex-1 rounded-xl border-2 border-black px-4 py-3 text-sm font-bold transition-all duration-200 ${
          activeType === "need-partner"
            ? "bg-blue-300 text-black shadow-[4px_4px_0_#000]"
            : "bg-white text-black hover:shadow-[2px_2px_0_#000]"
        }`}
      >
        Tìm bạn thuê
      </button>
      <button
        onClick={() => onTypeChange("need-host")}
        className={`flex-1 rounded-xl border-2 border-black px-4 py-3 text-sm font-bold transition-all duration-200 ${
          activeType === "need-host"
            ? "bg-blue-300 text-black shadow-[4px_4px_0_#000]"
            : "bg-white text-black hover:shadow-[2px_2px_0_#000]"
        }`}
      >
        Tìm người có phòng
      </button>
    </div>
  );
}
