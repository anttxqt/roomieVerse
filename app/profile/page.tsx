import Link from "next/link";
import Image from "next/image";

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
  return (
    <div className="min-h-screen bg-white">
      <div className="wrapper py-12">
        {/* Header */}
        <header className="card mb-16">
          <div className="flex flex-wrap items-center justify-between gap-6">
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
            <nav className="flex flex-wrap items-center gap-6 text-sm font-medium">
              <Link href="/home" className="text-zinc-600 transition hover:text-black">
                Trang chủ
              </Link>
              <Link href="/welcome" className="text-zinc-600 transition hover:text-black">
                Welcome tour
              </Link>
              <Link href="/auth" className="btn-primary">
                Đăng xuất
              </Link>
            </nav>
          </div>
        </header>

        {/* Profile Header */}
        <section className="card mb-12">
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-6">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-black bg-blue-300 text-4xl shadow-[var(--shadow-secondary)]">
                👤
              </div>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold">
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
              href="/share"
              className="btn-primary"
            >
              + Đăng bài mới
            </Link>
          </div>
        </section>

        {/* My Listings */}
        <main className="space-y-10">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <div className="inline-block rounded-sm border-2 border-black bg-white px-3 py-1 text-[10px] font-medium shadow-[var(--shadow-secondary)]">
                Quản lý
              </div>
              <h2 className="text-3xl font-bold">
                Bài đăng của tôi
              </h2>
            </div>
            <span className="rounded-lg border-2 border-black bg-blue-300 px-5 py-2 text-sm font-bold shadow-[var(--shadow-secondary)]">
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
                  <button className="btn-secondary text-sm">
                    ✏️ Chỉnh sửa
                  </button>
                  <button className="rounded-lg border-2 border-black bg-white px-6 py-2 text-sm font-medium transition-all hover:bg-zinc-50">
                    {listing.status === "Đang hiển thị" ? "⏸ Tạm ẩn" : "▶️ Hiển thị"}
                  </button>
                  <button className="rounded-lg border-2 border-black bg-red-50 px-6 py-2 text-sm font-medium text-red-600 transition-all hover:bg-red-100">
                    🗑️ Xóa
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Empty State */}
          {myListings.length === 0 && (
            <div className="rounded-xl border-2 border-black bg-white p-16 text-center shadow-[var(--shadow-secondary)]">
              <div className="mb-6 text-6xl">📝</div>
              <h3 className="mb-4 text-2xl font-bold">
                Chưa có bài đăng nào
              </h3>
              <p className="mb-8 text-sm text-zinc-600">
                Bắt đầu đăng tin để tìm roommate phù hợp!
              </p>
              <Link href="/share" className="btn-primary">
                + Đăng bài đầu tiên
              </Link>
            </div>
          )}

          {/* CTA Section */}
          <section className="mt-16 rounded-xl border-2 border-black bg-gradient-to-br from-blue-100 to-blue-200 p-12 shadow-[var(--shadow-primary)]">
            <h2 className="mb-4 text-3xl font-bold">
              Tìm được roommate chưa?
            </h2>
            <p className="mb-8 text-lg text-zinc-700">
              Xem tất cả bài đăng từ cộng đồng roomieVerse
            </p>
            <Link href="/home" className="btn-primary">
              Khám phá ngay →
            </Link>
          </section>
        </main>
      </div>
    </div>
  );
}
