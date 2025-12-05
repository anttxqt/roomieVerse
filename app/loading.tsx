export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        {/* Animated Logo/Spinner */}
        <div className="mb-8">
          <div className="inline-block rounded-xl border-4 border-black bg-blue-300 p-8 shadow-[var(--shadow-primary)] animate-pulse">
            <div className="text-6xl">🏠</div>
          </div>
        </div>

        {/* Loading Text */}
        <h2 className="text-2xl font-bold text-black mb-4">
          Đang tải...
        </h2>

        {/* Loading Dots Animation */}
        <div className="flex justify-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-300 border-2 border-black animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-3 h-3 rounded-full bg-pink-300 border-2 border-black animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-3 h-3 rounded-full bg-purple-300 border-2 border-black animate-bounce"></div>
        </div>
      </div>
    </div>
  );
}
