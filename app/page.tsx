import Link from "next/link";

const features = [
  {
    title: "Lifestyle-first profiles",
    description:
      "Roommates share morning routines, work hours, cleaning habits, and guest policies so matches feel natural from day one.",
    icon: "🌿",
  },
  {
    title: "Broker-free matching",
    description:
      "Every listing is verified and posted directly by real people - no middlemen, no hidden fees, just honest co-living.",
    icon: "🤝",
  },
  {
    title: "Community filters",
    description:
      "Search by vibe: creative loft, quiet grad house, digital nomad lab... the feed stays focused on shared homes only.",
    icon: "🎯",
  },
];

const steps = [
  {
    label: "1",
    title: "Tạo profile chân thực",
    body: "Nói rõ ngân sách, khu vực ưu tiên và nhịp sống hằng ngày.",
  },
  {
    label: "2",
    title: "Kết nối có kiểm duyệt",
    body: "roomieVerse xác thực hồ sơ và đề xuất ghép đôi phù hợp.",
  },
  {
    label: "3",
    title: "Chốt nhà trong 24h",
    body: "Chat trực tiếp, xem lịch trống và đặt lịch thăm phòng." ,
  },
];

const matchPreviews = [
  {
    name: "Chi & Linh",
    vibe: "Minimalist, early sleepers",
    budget: "11.5m / người",
    heading: "Cần thêm 1 bạn cho căn 3PN tại Q.3",
    habits: ["Remote work", "Vegetarian", "No pets"],
  },
  {
    name: "Hoàng",
    vibe: "Product designer, runner",
    budget: "9m / người",
    heading: "Tìm nam roommate ở Thảo Điền",
    habits: ["Morning gym", "Clean freak", "Introvert-friendly"],
  },
  {
    name: "Thảo & Phúc",
    vibe: "Live music lovers",
    budget: "8m / người",
    heading: "Studio rộng rãi, ưu tiên người cưng thú",
    habits: ["Cat owners", "Weekend gigs", "Late sleepers"],
  },
];

const testimonials = [
  {
    quote:
      "roomieVerse giúp tụi mình tìm được bạn cùng phòng siêu hợp chỉ sau 48 tiếng. Bộ câu hỏi lifestyle chi tiết đến mức không còn sự khó xử khi dọn vào ở chung.",
    author: "Trang, Marketing Manager",
    location: "Quận 1",
  },
  {
    quote:
      "Không còn cảnh lướt hàng trăm tin spam. Ứng dụng này giống như một cộng đồng kín, mọi người đều nghiêm túc và thân thiện.",
    author: "Khoa, UX Researcher",
    location: "Thảo Điền",
  },
];

export default function LandingPage() {
  return (
    <div className="relative isolate overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60" aria-hidden>
        <div className="absolute -top-32 left-10 h-80 w-80 rounded-full bg-emerald-500 blur-[140px]" />
        <div className="absolute top-40 right-0 h-96 w-96 rounded-full bg-fuchsia-500 blur-[200px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-24 pt-8 lg:px-12 lg:pt-12">
        <header className="flex flex-wrap items-center justify-between gap-6 rounded-3xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
            <span className="rounded-full bg-white/10 px-3 py-1 text-sm uppercase tracking-[0.2em] text-emerald-200">
              roomie
            </span>
            <span className="text-white">Verse</span>
          </Link>

          <nav className="flex flex-wrap items-center gap-5 text-sm text-slate-200">
            <Link href="/home" className="transition hover:text-white">
              Trang chủ
            </Link>
            <Link href="/welcome" className="transition hover:text-white">
              Welcome tour
            </Link>
            <Link href="#features" className="transition hover:text-white">
              Tính năng
            </Link>
            <Link href="#stories" className="transition hover:text-white">
              Stories
            </Link>
          </nav>

          <div className="flex items-center gap-3 text-sm font-medium">
            <Link
              href="/auth"
              className="rounded-full border border-white/40 px-4 py-2 text-slate-100 transition hover:border-white hover:text-white"
            >
              Đăng nhập
            </Link>
            <Link
              href="/auth"
              className="rounded-full bg-emerald-400 px-4 py-2 text-slate-900 transition hover:bg-emerald-300"
            >
              Bắt đầu
            </Link>
          </div>
        </header>

        <section className="mt-16 grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-emerald-200">
              <span>Broker-free</span>
              <span className="h-1 w-1 rounded-full bg-emerald-200" />
              <span>Roommate only</span>
            </div>
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.4em] text-emerald-200">roomieVerse</p>
              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Nền tảng duy nhất dành riêng cho cộng đồng tìm bạn ở ghép.
              </h1>
              <p className="text-lg text-slate-300">
                roomieVerse dọn sạch rác tin {"\"thuê cả căn\""} khỏi feed để bạn chỉ thấy những người thật sự muốn
                chia sẻ không gian sống. Chúng tôi match dựa trên lifestyle, thói quen và kỳ vọng - để bạn tìm được
                không chỉ phòng, mà cả cộng đồng.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 text-sm font-medium">
              <Link
                href="/auth"
                className="flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-slate-900 transition hover:bg-slate-100"
              >
                Tạo hồ sơ ngay
              </Link>
              <Link
                href="/home"
                className="flex items-center justify-center rounded-2xl border border-white/30 px-6 py-3 text-white transition hover:border-white"
              >
                Xem cộng đồng
              </Link>
            </div>
            <dl className="grid gap-6 text-sm text-slate-200 sm:grid-cols-3">
              <div>
                <dt className="text-xs uppercase tracking-[0.3em] text-slate-400">Matches thành công</dt>
                <dd className="text-3xl font-semibold text-white">2.4K+</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.3em] text-slate-400">Thời gian chốt</dt>
                <dd className="text-3xl font-semibold text-white"><span>48h</span></dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.3em] text-slate-400">Tỷ lệ hài lòng</dt>
                <dd className="text-3xl font-semibold text-white">97%</dd>
              </div>
            </dl>
          </div>

          <div className="space-y-4">
            {matchPreviews.map((match) => (
              <article
                key={match.name}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.35)]"
              >
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span>{match.vibe}</span>
                  <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-emerald-200">{match.budget}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{match.heading}</h3>
                <p className="text-sm text-slate-300">{match.name}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-200">
                  {match.habits.map((habit) => (
                    <span key={habit} className="rounded-full bg-white/10 px-3 py-1">
                      {habit}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      <section id="features" className="border-t border-white/10 bg-slate-900/40">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-3 lg:px-12">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <span className="text-3xl">{feature.icon}</span>
              <h3 className="mt-4 text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white text-slate-900" id="stories">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-emerald-500">Welcome tour</p>
              <h2 className="mt-4 text-3xl font-semibold">Từng bước ghép đôi rõ ràng và minh bạch.</h2>
              <p className="mt-3 text-base text-slate-600">
                Không cần backend riêng ngay lúc này - roomieVerse landing ghi nhận nhu cầu, giải thích hành trình và
                dẫn người dùng qua trang welcome để hoàn tất bước onboarding sớm.
              </p>
              <div className="mt-8 grid gap-4">
                {steps.map((step) => (
                  <div key={step.title} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-sm font-semibold text-white">
                      {step.label}
                    </div>
                    <div>
                      <p className="text-base font-semibold">{step.title}</p>
                      <p className="text-sm text-slate-600">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium">
                <Link
                  href="/welcome"
                  className="rounded-full bg-slate-900 px-5 py-2.5 text-white transition hover:bg-slate-800"
                >
                  Xem trang welcome
                </Link>
                <Link
                  href="/home"
                  className="rounded-full border border-slate-300 px-5 py-2.5 text-slate-700 transition hover:border-slate-400"
                >
                  Vào trang chủ prototype
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              {testimonials.map((testimonial) => (
                <blockquote
                  key={testimonial.author}
                  className="rounded-3xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white p-6 shadow-lg"
                >
                  <p className="text-lg font-medium text-slate-900">{`"${testimonial.quote}"`}</p>
                  <footer className="mt-4 text-sm text-slate-600">
                    {testimonial.author} - {testimonial.location}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-950 text-sm text-slate-300">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 lg:px-12">
          <p>© {new Date().getFullYear()} roomieVerse. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/welcome" className="transition hover:text-white">
              Onboarding
            </Link>
            <Link href="/auth" className="transition hover:text-white">
              Đăng ký
            </Link>
            <Link href="/home" className="transition hover:text-white">
              Trang chủ
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
