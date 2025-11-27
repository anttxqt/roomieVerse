import Link from "next/link";
import Image from "next/image";

const steps = [
  {
    title: "Đăng ký tài khoản",
    description: "Tạo tài khoản miễn phí chỉ với email và số điện thoại.",
    duration: "1 phút",
  },
  {
    title: "Đăng bài tìm roommate",
    description: "Điền thông tin phòng, giá, khu vực và ngày dọn vào mong muốn.",
    duration: "5 phút",
  },
  {
    title: "Nhận liên hệ từ người quan tâm",
    description: "Người khác xem bài của bạn và gọi điện trực tiếp để trao đổi.",
    duration: "Ngay lập tức",
  },
];

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="wrapper py-12">
        {/* Header */}
        <header className="card mb-16">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo/logo1.png"
                alt="roomieVerse"
                width={480}
                height={120}
                className="h-24 w-auto transition-transform duration-200 hover:scale-105"
                priority
              />
              <span className="text-sm font-medium text-blue-400">welcome</span>
            </Link>
            <nav className="flex flex-wrap gap-6 text-sm font-medium">
              <Link href="/" className="text-zinc-600 transition hover:text-black">
                Landing page
              </Link>
              <Link href="/home" className="text-zinc-600 transition hover:text-black">
                Trang chủ
              </Link>
              <Link href="/profile" className="text-zinc-600 transition hover:text-black">
                Hồ sơ
              </Link>
              <Link href="/auth" className="btn-primary">
                Đăng nhập / Đăng ký
              </Link>
            </nav>
          </div>
        </header>

        <main className="space-y-20">
          {/* Hero Section */}
          <section 
            className="card bg-gradient-to-br from-blue-100 to-blue-200"
          >
            <div className="inline-block rounded-lg border-2 border-black bg-white px-4 py-1.5 text-xs font-bold shadow-[var(--shadow-secondary)]">
              WELCOME TOUR
            </div>
            <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
              Chào mừng bạn đến với cộng đồng chia sẻ nhà được chọn lọc nhất.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-700">
              Đây là tour hướng dẫn nhanh giúp bạn biết chính xác các bước cần hoàn thành trước khi được hiển thị
              trên feed roomieVerse. Mọi dữ liệu đang được lưu tạm thời và sẽ chuyển sang backend riêng khi sản phẩm
              chính thức mở beta.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/auth" className="btn-primary">
                Lên lịch onboarding
              </Link>
              <Link 
                href="/home" 
                className="btn-secondary"
              >
                Xem thử trang chủ
              </Link>
            </div>
          </section>

          {/* Two Column Grid */}
          <section className="grid gap-8 lg:grid-cols-2">
            {/* How it works */}
            <div className="rounded-xl border-2 border-black bg-white p-8 shadow-[var(--shadow-secondary)]">
              <h2 className="text-2xl font-bold">
                Cách hoạt động
              </h2>
              <p className="mt-2 text-sm text-zinc-600">
                Chỉ 3 bước đơn giản để tìm roommate!
              </p>
              <div className="mt-8 space-y-6">
                {steps.map((step, index) => (
                  <div 
                    key={step.title} 
                    className="flex gap-5 rounded-lg border-2 border-black bg-blue-50 p-5 shadow-[var(--shadow-secondary)]"
                  >
                    <div 
                      className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg border-2 border-black bg-blue-300 text-lg font-bold"
                    >
                      0{index + 1}
                    </div>
                    <div className="space-y-1">
                      <p className="text-base font-bold">
                        {step.title}
                      </p>
                      <p className="text-sm text-zinc-700">
                        {step.description}
                      </p>
                      <p className="text-xs font-medium text-blue-600">
                        ⏱ {step.duration}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why roomieVerse */}
            <div className="rounded-xl border-2 border-black bg-white p-8 shadow-[var(--shadow-secondary)]">
              <h2 className="text-2xl font-bold">
                Tại sao chọn roomieVerse?
              </h2>
              <p className="mt-2 text-sm text-zinc-600">
                Nền tảng tìm roommate đơn giản và trực tiếp nhất.
              </p>
              <ul className="mt-8 space-y-5 text-sm">
                <li className="flex items-start gap-4">
                  <span 
                    className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border-2 border-black bg-blue-300 text-sm font-bold"
                  >
                    ✓
                  </span>
                  <span className="font-medium">100% MIỄN PHÍ - không mất phí môi giới</span>
                </li>
                <li className="flex items-start gap-4">
                  <span 
                    className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border-2 border-black bg-blue-300 text-sm font-bold"
                  >
                    ✓
                  </span>
                  <span className="font-semibold">Kết nối TRỰC TIẾP qua số điện thoại</span>
                </li>
                <li className="flex items-center gap-3">
                  <span 
                    className="inline-flex h-6 w-6 items-center justify-center rounded-full text-sm font-bold"
                    style={{ 
                      background: 'var(--accent-pink)', 
                      color: 'white',
                    }}
                  >
                    ✓
                  </span>
                  <span className="font-semibold">Đăng bài đơn giản, nhanh chóng</span>
                </li>
                <li className="flex items-center gap-3">
                  <span 
                    className="inline-flex h-6 w-6 items-center justify-center rounded-full text-sm font-bold"
                    style={{ 
                      background: 'var(--accent-pink)', 
                      color: 'white',
                    }}
                  >
                    ✓
                  </span>
                  <span className="font-semibold">Không cần tạo profile phức tạp</span>
                </li>
              </ul>
              <div 
                className="mt-6 rounded-xl p-5 text-white"
                style={{
                  background: 'linear-gradient(135deg, var(--primary-blue) 0%, var(--accent-purple) 100%)',
                  boxShadow: '4px 4px 0 rgba(0,0,0,0.13)',
                }}
              >
                <p className="text-sm" style={{ color: 'var(--accent-pink)' }}>Hỗ trợ 24/7</p>
                <p className="text-2xl font-bold" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  096.888.4477
                </p>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>
                  Liên hệ nếu cần hỗ trợ đăng bài hoặc tìm phòng.
                </p>
              </div>
            </div>
          </section>


          {/* Bottom CTA Section */}
          <section className="rounded-xl border-2 border-black bg-white p-10 shadow-[var(--shadow-secondary)]">
            <div className="flex flex-wrap items-center justify-between gap-8">
              <div>
                <div className="inline-block rounded-sm border-2 border-black bg-white px-3 py-1 text-[10px] font-medium shadow-[var(--shadow-secondary)]">
                  Bắt đầu ngay
                </div>
                <h2 className="mt-4 text-3xl font-bold">
                  Sẵn sàng tìm roommate?
                </h2>
                <p className="mt-3 text-sm text-zinc-600">
                  Đăng bài MIỄN PHÍ ngay hôm nay và kết nối với hàng nghìn người đang tìm phòng!
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/share" className="btn-primary">
                Đăng bài ngay
              </Link>
              <Link href="/home" className="btn-secondary">
                Xem bài đăng
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
