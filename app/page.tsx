"use client";

import Link from "next/link";
import Image from "next/image";
import { SparklesText } from "./components/sparkles-text";
import HeaderLogo from "./components/HeaderLogo";
import ShareFooter from "./components/ShareFooter";
import { useAuth } from "./contexts/AuthContext";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const { isAuthenticated, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/auth");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b-2 border-black bg-white backdrop-blur-md">
        <div className="wrapper py-4 md:py-5">
          <div className="flex items-center justify-between">
            <HeaderLogo className="h-28" />

            <div className="flex items-center gap-3 sm:gap-4">
              {isAuthenticated ? (
                <>
                  <Link
                    href="/home"
                    className="hidden text-sm font-medium text-zinc-600 hover:text-black sm:block sm:text-base"
                  >
                    Trang chủ
                  </Link>
                  <Link
                    href="/profile"
                    className="hidden text-sm font-medium text-zinc-600 hover:text-black sm:block sm:text-base"
                  >
                    Hồ sơ
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="btn-primary text-sm sm:text-base"
                  >
                    Đăng xuất
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/roommate"
                    className="btn-secondary hidden text-sm sm:block sm:text-base"
                  >
                    Tìm phòng
                  </Link>
                  <Link
                    href="/auth"
                    className="btn-primary text-sm sm:text-base"
                  >
                    Bắt đầu
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="section py-16 sm:py-24 md:py-32">
        <div className="wrapper text-center">
          <h1 className="mb-8 text-4xl font-bold leading-tight text-black sm:text-5xl md:text-6xl lg:text-7xl">
            Không chỉ là tìm phòng.
            <br />
            <SparklesText
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
              sparklesCount={15}
              colors={{ first: "#9E7AFF", second: "#FE8BBB" }}
            >
              Tìm người đồng hành.
            </SparklesText>
          </h1>

          <p className="mb-10 text-lg font-medium text-zinc-600 sm:text-xl md:text-2xl max-w-3xl mx-auto">
            Thuật toán thông minh. Cộng đồng chất lượng. Miễn phí mãi mãi.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/roommate" className="btn-primary text-base sm:text-lg px-8 py-4">
              Tìm phòng ngay
            </Link>
            <Link href="/auth" className="btn-secondary text-base sm:text-lg px-8 py-4">
              Đăng tin miễn phí
            </Link>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="section border-t-2 border-black bg-blue-50 py-16 md:py-20">
        <div className="wrapper">
          <h2 className="mb-4 text-center text-3xl font-bold uppercase sm:text-4xl md:text-5xl">
            Cách hoạt động
          </h2>
          <p className="mb-12 text-center text-lg text-zinc-600">
            Chỉ 3 bước đơn giản để tìm roommate!
          </p>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            <div className="card group bg-pink-200">
              <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-black bg-blue-300 text-2xl font-bold">
                01
              </span>
              <h3 className="mb-3 mt-4 text-xl font-bold sm:text-2xl">
                Đăng ký tài khoản
              </h3>
              <p className="mb-4 text-sm font-medium leading-relaxed text-zinc-700 sm:text-base">
                Tạo tài khoản miễn phí chỉ với email và số điện thoại.
              </p>
              <div className="inline-block rounded-lg border-2 border-black bg-white px-3 py-1.5 text-sm font-bold">
                ⏱ 1 phút
              </div>
            </div>

            <div className="card group bg-pink-200">
              <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-black bg-pink-400 text-2xl font-bold">
                02
              </span>
              <h3 className="mb-3 mt-4 text-xl font-bold sm:text-2xl">
                Đăng bài tìm roommate
              </h3>
              <p className="mb-4 text-sm font-medium leading-relaxed text-zinc-700 sm:text-base">
                Điền thông tin phòng, giá, khu vực và ngày dọn vào mong muốn.
              </p>
              <div className="inline-block rounded-lg border-2 border-black bg-white px-3 py-1.5 text-sm font-bold">
                ⏱ 5 phút
              </div>
            </div>

            <div className="card group bg-purple-200">
              <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-black bg-blue-300 text-2xl font-bold">
                03
              </span>
              <h3 className="mb-3 mt-4 text-xl font-bold sm:text-2xl">
                Nhận liên hệ từ người quan tâm
              </h3>
              <p className="mb-4 text-sm font-medium leading-relaxed text-zinc-700 sm:text-base">
                Người khác xem bài của bạn và gọi điện trực tiếp để trao đổi.
              </p>
              <div className="inline-block rounded-lg border-2 border-black bg-white px-3 py-1.5 text-sm font-bold">
                ⏱ Ngay lập tức
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section py-16 md:py-20">
        <div className="wrapper">
          <h2 className="mb-10 text-center text-3xl font-bold uppercase sm:mb-12 sm:text-4xl md:mb-16 md:text-5xl">
            Tại sao chọn chúng tôi?
          </h2>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            <div className="card group bg-white">
              <div className="mb-4 text-5xl transition-transform duration-300 group-hover:scale-110">
                🎯
              </div>
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
              <div className="mb-4 text-5xl transition-transform duration-300 group-hover:scale-110">
                💎
              </div>
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
              <div className="mb-4 text-5xl transition-transform duration-300 group-hover:scale-110">
                🚀
              </div>
              <h3 className="mb-3 text-xl font-bold sm:text-2xl">
                Đơn giản.
                <br />
                <span className="text-pink-500">Miễn phí.</span>
              </h3>
              <p className="text-sm font-medium leading-relaxed text-zinc-600 sm:text-base">
                Tạo hồ sơ trong 5 phút. Nhận gợi ý trong 24 giờ. Kết nối trong 48 giờ. Zero đồng.
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
              Bạn đang tìm gì?
            </h2>
            <p className="mb-8 text-base font-bold sm:mb-10 sm:text-lg md:text-xl">
              Chọn mục đích phù hợp với bạn
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/roommate"
                className="btn-primary text-base sm:text-lg px-8 py-4 min-w-[200px]"
              >
                Tìm roommate
              </Link>
              <Link
                href="/roomshare"
                className="btn-secondary text-base sm:text-lg px-8 py-4 min-w-[200px]"
              >
                Tìm phòng share
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ShareFooter />
    </div>
  );
}
