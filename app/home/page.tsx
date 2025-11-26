'use client';

import Link from "next/link";
import Image from "next/image";
import { SparklesText } from "../components/sparkles-text";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header - Logged In */}
      <header className="sticky top-0 z-50 border-b-2 border-black bg-white backdrop-blur-md">
        <div className="wrapper py-4 md:py-5">
          <div className="flex items-center justify-between">
            <Link href="/home" className="group flex items-center">
              <Image 
                src="/roomieverselogowpic.png" 
                alt="roomieVerse" 
                width={480} 
                height={120}
                className="h-28 w-auto transition-transform duration-200 group-hover:scale-105"
              />
            </Link>

            <div className="flex items-center gap-3 sm:gap-4">
              <Link
                href="/welcome"
                className="hidden text-sm font-medium text-zinc-600 hover:text-black sm:block sm:text-base"
              >
                Welcome tour
              </Link>
              <Link
                href="/profile"
                className="hidden text-sm font-medium text-zinc-600 hover:text-black sm:block sm:text-base"
              >
                Hồ sơ
              </Link>
              <Link
                href="/auth"
                className="btn-primary text-sm sm:text-base"
              >
                Đăng xuất
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Logged In */}
      <section className="section py-16 sm:py-24 md:py-32">
        <div className="wrapper text-center">
          <h1 className="mb-8 text-4xl font-bold leading-tight text-black sm:text-5xl md:text-6xl lg:text-7xl">
            Chào mừng trở lại!
            <br />
            <SparklesText 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold" 
              sparklesCount={15} 
              colors={{ first: "#9E7AFF", second: "#FE8BBB" }}
            >
              Tìm roommate ngay thôi.
            </SparklesText>
          </h1>

          <p className="mb-10 text-lg font-medium text-zinc-600 sm:text-xl md:text-2xl max-w-3xl mx-auto">
            Khám phá những tin đăng mới nhất phù hợp với bạn.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/share" className="btn-primary text-base sm:text-lg px-8 py-4">
              Xem tin đăng →
            </Link>
            <Link href="/profile" className="btn-secondary text-base sm:text-lg px-8 py-4">
              Cập nhật hồ sơ
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Combined Section */}
      <section className="section bg-blue-100 py-16 md:py-20">
        <div className="wrapper">
          <h2 className="mb-10 text-center text-3xl font-bold uppercase sm:mb-12 sm:text-4xl md:mb-16 md:text-5xl">
            Tại sao chọn chúng tôi?
          </h2>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            <div className="card group bg-white">
              <div className="mb-4 text-5xl transition-transform duration-300 group-hover:scale-110">🎯</div>
              <h3 className="mb-3 text-xl font-bold sm:text-2xl">
                Match chính xác.
                <br />
                <span className="text-blue-400">Nhanh chóng.</span>
              </h3>
              <p className="text-sm font-medium leading-relaxed text-zinc-600 sm:text-base">
                Thuật toán phân tích lối sống, sở thích, thói quen. Chỉ giới thiệu những người thực sự phù hợp với bạn.
              </p>
            </div>

            <div className="card group bg-white">
              <div className="mb-4 text-5xl transition-transform duration-300 group-hover:scale-110">💎</div>
              <h3 className="mb-3 text-xl font-bold sm:text-2xl">
                Cộng đồng
                <br />
                <span className="text-purple-500">được chọn lọc.</span>
              </h3>
              <p className="text-sm font-medium leading-relaxed text-zinc-600 sm:text-base">
                Mọi thành viên đều được xác minh. Không spam, không lừa đảo, không môi giới giả danh.
              </p>
            </div>

            <div className="card group bg-white">
              <div className="mb-4 text-5xl transition-transform duration-300 group-hover:scale-110">🚀</div>
              <h3 className="mb-3 text-xl font-bold sm:text-2xl">
                Đơn giản.
                <br />
                <span className="text-pink-500">Miễn phí.</span>
              </h3>
              <p className="text-sm font-medium leading-relaxed text-zinc-600 sm:text-base">
                Tạo hồ sơ trong 5 phút. Nhận gợi ý trong 24 giờ. Kết nối trong 48 giờ. Zero đồng.
              </p>
            </div>

            <div className="card group bg-white">
              <div className="mb-4 text-5xl transition-transform duration-300 group-hover:scale-110">🤝</div>
              <h3 className="mb-3 text-xl font-bold sm:text-2xl">Kết nối trực tiếp</h3>
              <p className="text-sm font-medium leading-relaxed text-zinc-600 sm:text-base">
                Gặp gỡ và chat trực tiếp với người tìm phòng. Không qua môi giới, không phí ẩn.
              </p>
            </div>

            <div className="card group bg-white">
              <div className="mb-4 text-5xl transition-transform duration-300 group-hover:scale-110">✅</div>
              <h3 className="mb-3 text-xl font-bold sm:text-2xl">Tin đăng thật</h3>
              <p className="text-sm font-medium leading-relaxed text-zinc-600 sm:text-base">
                Mọi tin đăng được kiểm duyệt. Chỉ có người thật đăng tin thật.
              </p>
            </div>

            <div className="card group bg-white">
              <div className="mb-4 text-5xl transition-transform duration-300 group-hover:scale-110">⚡</div>
              <h3 className="mb-3 text-xl font-bold sm:text-2xl">Nhanh chóng</h3>
              <p className="text-sm font-medium leading-relaxed text-zinc-600 sm:text-base">
                Tìm được phòng phù hợp chỉ trong vài ngày. Đơn giản và tiện lợi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section py-16 md:py-20">
        <div className="wrapper">
          <div className="card bg-gradient-to-br from-blue-300 to-blue-400 p-8 text-center sm:p-12 lg:p-16">
            <h2 className="mb-4 text-3xl font-black uppercase sm:mb-6 sm:text-4xl md:text-5xl">
              Sẵn sàng tìm roommate?
            </h2>
            <p className="mb-6 text-base font-bold sm:mb-8 sm:text-lg md:text-xl">
              Đăng tin hoàn toàn miễn phí. Kết nối ngay hôm nay!
            </p>
            <Link href="/share" className="btn-primary inline-flex items-center gap-2 text-base sm:text-lg px-8 py-4">
              Bắt đầu ngay
              <span className="transition-transform duration-300 group-hover:translate-x-1">🚀</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-black bg-gradient-to-br from-black to-gray-900 py-10 text-white md:py-12">
        <div className="wrapper">
          <div className="flex flex-col items-center justify-between gap-5 sm:flex-row sm:gap-6">
            <p className="text-sm font-bold sm:text-base">© 2024 roomieVerse</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-bold sm:gap-6">
              <Link
                href="/share"
                className="transition-all duration-200 hover:scale-110 hover:text-pink-400"
              >
                Tìm phòng
              </Link>
              <Link
                href="/auth"
                className="transition-all duration-200 hover:scale-110 hover:text-blue-300"
              >
                Đăng ký
              </Link>
              <Link
                href="/home"
                className="transition-all duration-200 hover:scale-110 hover:text-purple-400"
              >
                Trang chủ
              </Link>
              <Link
                href="/profile"
                className="transition-all duration-200 hover:scale-110 hover:text-yellow-300"
              >
                Hồ sơ
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
