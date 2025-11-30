'use client';

import Link from "next/link";
import Image from "next/image";
import HeaderLogo from "../components/HeaderLogo";
import ShareFooter from "../components/ShareFooter";
import ProtectedRoute from "../components/ProtectedRoute";
import { useAuth } from "../contexts/AuthContext";
import { useRouter } from "next/navigation";

const myListings = [
  {
    id: 1,
    title: "Tìm bạn ở ghép loft Quận 3",
    price: "11.5 triệu",
    location: "Quận 3, TP.HCM",
    moveInDate: "15/12/2024",
    description: "Không gian có phòng làm việc riêng, ưu tiên người đi làm văn phòng nhưng thoải mái remote 2 ngày/tuần.",
    phone: "0901 234 567",
    postedDate: "2 ngày trước",
    status: "Đang hiển thị",
  },
  {
    id: 2,
    title: "Cần người share căn studio Q.2",
    price: "9 triệu",
    location: "Quận 2, TP.HCM",
    moveInDate: "01/01/2025",
    description: "Studio rộng 45m2, view sông, có gym và hồ bơi. Tìm 1 bạn sạch sẽ, không hút thuốc.",
    phone: "0901 234 567",
    postedDate: "1 tuần trước",
    status: "Đang hiển thị",
  },
];

export default function ProfilePage() {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/auth");
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b-2 border-black bg-white backdrop-blur-md">
        <div className="wrapper py-4 md:py-5">
          <div className="flex items-center justify-between">
            <HeaderLogo className="h-28" />

            <div className="flex items-center gap-3 sm:gap-4">
              <Link
                href="/home"
                className="hidden text-sm font-medium text-zinc-600 hover:text-black sm:block sm:text-base"
              >
                Trang chủ
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

      <div className="wrapper py-12">

        {/* Profile Header */}
        <section className="section py-16 sm:py-20">
          <div className="card p-8 sm:p-12">
            <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-6">
                <div className="flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-full border-2 border-black bg-blue-300 text-4xl sm:text-5xl shadow-[var(--shadow-secondary)] transition-all hover:rotate-6 hover:scale-110">
                  👤
                </div>
                <div className="space-y-2">
                  <h1 className="text-3xl sm:text-4xl font-bold">
                    Nguyễn Văn A
                  </h1>
                  <p className="text-sm text-zinc-600">
                    @nguyenvana • Thành viên từ tháng 11/2024
                  </p>
                  <p className="text-sm font-medium">
                    📞 0901 234 567
                  </p>
                </div>
              </div>
              <Link
                href="/roommate"
                className="btn-primary text-base sm:text-lg px-8 py-4"
              >
                Đăng bài mới
              </Link>
            </div>
          </div>
        </section>

        {/* My Listings */}
        <main className="space-y-10 pb-16 sm:pb-20">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Bài đăng của tôi
              </h2>
            </div>
            <span className="rounded-lg border-2 border-black bg-blue-300 px-6 py-3 text-sm font-bold shadow-[var(--shadow-secondary)]">
              {myListings.length} bài đăng
            </span>
          </div>

          <div className="grid gap-8">
            {myListings.map((listing) => (
              <article key={listing.id} className="rounded-xl border-2 border-black bg-white p-8 shadow-[var(--shadow-secondary)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_-1px_var(--border-color)]">
                <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-bold">
                        {listing.title}
                      </h3>
                      <span className="rounded-md border-2 border-black bg-green-100 px-3 py-1 text-xs font-bold">
                        {listing.status}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-zinc-600">
                      <span>📍 {listing.location}</span>
                      <span>📅 Dọn vào: {listing.moveInDate}</span>
                      <span>⏰ {listing.postedDate}</span>
                    </div>
                  </div>
                  <div className="rounded-lg border-2 border-black bg-blue-300 px-5 py-2 font-bold shadow-[var(--shadow-secondary)]">
                    {listing.price}
                  </div>
                </div>

                <p className="mb-6 text-sm leading-relaxed text-zinc-700">
                  {listing.description}
                </p>

                <div className="flex flex-wrap gap-3 border-t-2 border-gray-100 pt-6">
                  <button className="btn-primary text-sm px-6 py-3">
                    Chỉnh sửa
                  </button>
                  <button className="btn-secondary text-sm px-6 py-3">
                    {listing.status === "Đang hiển thị" ? "Tạm ẩn" : "Hiển thị"}
                  </button>
                  <button className="rounded-lg border-2 border-black bg-red-50 px-6 py-3 text-sm font-bold text-red-600 shadow-[var(--shadow-secondary)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none hover:bg-red-100">
                    Xóa
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Empty State */}
          {myListings.length === 0 && (
            <div className="card p-12 sm:p-16 text-center">
              <div className="mb-6 text-6xl animate-bounce">📝</div>
              <h3 className="mb-4 text-2xl sm:text-3xl font-bold">
                Chưa có bài đăng nào
              </h3>
              <p className="mb-8 text-base sm:text-lg text-zinc-600">
                Bắt đầu đăng tin để tìm roommate phù hợp!
              </p>
              <Link href="/roommate" className="btn-primary text-base sm:text-lg px-8 py-4">
                Đăng bài đầu tiên
              </Link>
            </div>
          )}
        </main>
      </div>

      <ShareFooter />
    </div>
    </ProtectedRoute>
  );
}
