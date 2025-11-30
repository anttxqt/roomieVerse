import Link from "next/link";
import Image from "next/image";
import ShareFooter from "./components/ShareFooter";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="border-b-2 border-black bg-blue-300">
        <div className="wrapper py-6">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo/logo1.png"
              alt="roomieVerse"
              width={480}
              height={120}
              className="h-24 w-auto transition-transform duration-200 hover:scale-105"
              priority
            />
          </Link>
        </div>
      </header>

      {/* 404 Content */}
      <main className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="max-w-2xl text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-black text-black mb-4">404</h1>
            <div className="inline-block rounded-xl border-2 border-black bg-yellow-300 px-6 py-3 text-2xl font-bold shadow-[var(--shadow-primary)]">
              Trang không tồn tại
            </div>
          </div>

          <p className="mb-8 text-lg text-zinc-700 font-medium">
            Trang bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.
            <br />
            Hãy thử quay lại trang chủ hoặc tìm roommate của bạn!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/" className="btn-primary text-base sm:text-lg px-8 py-4">
              Về trang chủ
            </Link>
            <Link
              href="/roommate"
              className="btn-secondary text-base sm:text-lg px-8 py-4"
            >
              Tìm roommate
            </Link>
          </div>

          {/* Fun illustration */}
          <div className="mt-12 text-6xl opacity-50">
            🏠❓
          </div>
        </div>
      </main>

      <ShareFooter />
    </div>
  );
}
