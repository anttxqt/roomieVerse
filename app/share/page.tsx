"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface RoomListing {
  id: number;
  title: string;
  author: string;
  price: string;
  location: string;
  moveInDate: string;
  description: string;
  phone: string;
  postedDate: string;
  image?: string;
}

const mockListings: RoomListing[] = [
  {
    id: 1,
    title: "Tìm bạn nữ share căn 2PN ở Bình Thạnh",
    author: "Minh Anh",
    price: "4.5 triệu",
    location: "Bình Thạnh, gần Điện Biên Phủ",
    moveInDate: "01/12/2024",
    description: "Phòng mới sạch sẽ, có máy lạnh, tủ lạnh chung. Mình làm remote nên thường ở nhà, thích người sạch sẽ, không ồn.",
    phone: "0901 234 567",
    postedDate: "2 ngày trước",
  },
  {
    id: 2,
    title: "Share studio Thảo Điền - cần 1 bạn nam",
    author: "Đức Anh",
    price: "6 triệu",
    location: "Thảo Điền, Q.2",
    moveInDate: "15/12/2024",
    description: "Studio 40m2, view đẹp. Mình designer làm việc tại nhà. Tìm bạn ngăn nắp, có thu nhập ổn định.",
    phone: "0912 345 678",
    postedDate: "5 ngày trước",
  },
  {
    id: 3,
    title: "Ghép căn 3PN ở Q1 - còn 1 slot",
    author: "Thu & Hằng",
    price: "5.5 triệu",
    location: "Q1, gần Lê Lợi",
    moveInDate: "20/12/2024",
    description: "Hiện tại có 2 bạn nữ đang ở, tìm thêm 1 người. Ai cũng đi làm văn phòng, cuối tuần về quê nên rất thoải mái.",
    phone: "0909 876 543",
    postedDate: "1 tuần trước",
  },
];

export default function SharePage() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    location: "",
    moveInDate: "",
    description: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setShowForm(false);
    // Reset form
    setFormData({
      title: "",
      price: "",
      location: "",
      moveInDate: "",
      description: "",
      phone: "",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b-2 border-black bg-blue-300">
        <div className="wrapper py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/roomieverselogowpic.png"
                alt="roomieVerse"
                width={480}
                height={120}
                className="h-24 w-auto transition-transform duration-200 hover:scale-105"
                priority
              />
            </Link>

            <nav className="flex items-center gap-4">
              <Link
                href="/"
                className="rounded-lg border-2 border-black bg-white px-6 py-2.5 font-medium transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
              >
                Trang chủ
              </Link>
              <Link
                href="/home"
                className="btn-primary"
              >
                Khám phá
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="border-b-2 border-black bg-gradient-to-br from-blue-100 to-blue-200 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="mb-6 text-5xl font-extrabold leading-tight sm:text-6xl">
            Tìm bạn
            <br />
            Share phòng 🏠
          </h1>
          <p className="mb-10 max-w-2xl text-lg text-zinc-700">
            Đăng tin MIỄN PHÍ - Kết nối TRỰC TIẾP - Không môi giới!
          </p>
          <button
            onClick={() => setShowForm(!showForm)}
            className="btn-primary text-base"
          >
            {showForm ? "✕ Đóng form" : "+ Đăng tin ngay"}
          </button>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Form đăng tin */}
        {showForm && (
          <div className="mb-16 rounded-xl border-2 border-black bg-white p-10 shadow-[var(--shadow-primary)]">
            <h2 className="mb-8 text-3xl font-bold">
              Đăng tin mới
            </h2>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="mb-3 block text-sm font-bold">
                  Tiêu đề *
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="VD: Tìm bạn nữ share căn 2PN ở Q1"
                  className="w-full rounded-lg border-2 border-black p-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <label className="mb-3 block text-sm font-bold">
                    Giá thuê/tháng *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    placeholder="VD: 4.5tr"
                    className="w-full rounded-lg border-2 border-black p-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-sm font-bold">
                    Khu vực *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="VD: Q1, gần Lê Lợi"
                    className="w-full rounded-lg border-2 border-black p-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <label className="mb-3 block text-sm font-bold">
                    Ngày dọn vào *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.moveInDate}
                    onChange={(e) => setFormData({ ...formData, moveInDate: e.target.value })}
                    placeholder="VD: 01/12/2024"
                    className="w-full rounded-lg border-2 border-black p-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-sm font-bold">
                    Số điện thoại *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="VD: 0901 234 567"
                    className="w-full rounded-lg border-2 border-black p-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
              </div>

              <div>
                <label className="mb-3 block text-sm font-bold">
                  Mô tả *
                </label>
                <textarea
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Mô tả chi tiết về phòng, yêu cầu với người ở cùng..."
                  rows={6}
                  className="w-full rounded-lg border-2 border-black p-4 text-sm font-medium leading-relaxed focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="btn-primary flex-1"
                >
                  🚀 Đăng tin
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="btn-secondary"
                >
                  Hủy
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Danh sách tin đăng */}
        <div>
          <div className="mb-10 space-y-3">
            <div className="inline-block rounded-sm border-2 border-black bg-white px-3 py-1 text-[10px] font-medium shadow-[var(--shadow-secondary)]">
              Cộng đồng
            </div>
            <h2 className="text-3xl font-bold">
              Tin mới nhất
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {mockListings.map((listing) => (
              <Link
                key={listing.id}
                href={`/listing/${listing.id}`}
                className="group block rounded-xl border-2 border-black bg-white p-6 shadow-[var(--shadow-secondary)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
              >
                {/* Image Section */}
                <div 
                  className="mb-6 h-48 w-full overflow-hidden rounded-lg border-2 border-black bg-blue-50"
                >
                  <div className="flex h-full w-full items-center justify-center text-6xl">
                    🏡
                  </div>
                </div>

                <div className="mb-4 flex items-start justify-between gap-3">
                  <span className="rounded-lg border-2 border-black bg-blue-300 px-4 py-2 text-sm font-bold shadow-[var(--shadow-secondary)]">
                    {listing.price}
                  </span>
                  <span className="text-xs text-zinc-500">
                    {listing.postedDate}
                  </span>
                </div>

                <h3 className="mb-3 text-lg font-bold leading-tight">
                  {listing.title}
                </h3>

                <div className="mb-4 space-y-1 text-sm text-zinc-600">
                  <p>📍 {listing.location}</p>
                  <p>📅 Dọn vào: {listing.moveInDate}</p>
                </div>

                <p className="mb-5 line-clamp-2 text-sm leading-relaxed text-zinc-700">
                  {listing.description}
                </p>

                <div className="flex items-center justify-between border-t-2 border-gray-100 pt-4">
                  <span className="text-sm font-medium text-zinc-700">
                    ✍️ {listing.author}
                  </span>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      window.location.href = `tel:${listing.phone.replace(/\s/g, '')}`;
                    }}
                    className="btn-secondary text-xs"
                  >
                    📞 Gọi
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-20 rounded-xl border-2 border-black bg-gradient-to-br from-blue-100 to-blue-200 p-16 text-center shadow-[var(--shadow-primary)]">
          <h2 className="mb-4 text-3xl font-bold">
            Chưa tìm được phòng phù hợp?
          </h2>
          <p className="mb-8 text-lg text-zinc-700">
            Đăng tin của bạn ngay - MIỄN PHÍ mãi mãi!
          </p>
          <button
            onClick={() => {
              setShowForm(true);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="btn-primary text-base"
          >
            🎯 Đăng tin ngay
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 border-t-2 border-black bg-zinc-900 py-12 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="font-medium">© 2024 roomieVerse - Nền tảng tìm bạn share phòng #1 Việt Nam</p>
          <div className="mt-6 flex justify-center gap-8 text-sm font-medium">
            <Link href="/" className="text-blue-300 transition hover:text-blue-200">
              Về chúng tôi
            </Link>
            <Link href="/" className="text-blue-300 transition hover:text-blue-200">
              Điều khoản
            </Link>
            <Link href="/" className="text-blue-300 transition hover:text-blue-200">
              Liên hệ
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
