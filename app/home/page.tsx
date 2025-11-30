'use client';

import Link from "next/link";
import Image from "next/image";
import { SparklesText } from "../components/sparkles-text";
import HeaderLogo from "../components/HeaderLogo";
import ShareFooter from "../components/ShareFooter";
import ProtectedRoute from "../components/ProtectedRoute";
import { useAuth } from "../contexts/AuthContext";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/auth");
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-white">
      {/* Header - Logged In */}
      <header className="sticky top-0 z-50 border-b-2 border-black bg-white backdrop-blur-md">
        <div className="wrapper py-4 md:py-5">
          <div className="flex items-center justify-between">
            <HeaderLogo className="h-28" />

            <div className="flex items-center gap-3 sm:gap-4">
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
            <Link href="/roommate" className="btn-primary text-base sm:text-lg px-8 py-4">
              Xem tin đăng
            </Link>
            <Link href="/profile" className="btn-secondary text-base sm:text-lg px-8 py-4">
              Cập nhật hồ sơ
            </Link>
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
            <Link href="/roommate" className="btn-primary text-base sm:text-lg px-8 py-4">
              Bắt đầu ngay
            </Link>
          </div>
        </div>
      </section>

      <ShareFooter />
    </div>
    </ProtectedRoute>
  );
}
