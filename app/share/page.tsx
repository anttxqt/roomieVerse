"use client";

import { useState } from "react";
import Link from "next/link";

interface RoomListing {
  id: number;
  title: string;
  author: string;
  price: string;
  location: string;
  roomType: string;
  lookingFor: string;
  tags: string[];
  description: string;
  postedDate: string;
}

const mockListings: RoomListing[] = [
  {
    id: 1,
    title: "Tìm bạn nữ share căn 2PN ở Bình Thạnh",
    author: "Minh Anh",
    price: "4.5tr/tháng",
    location: "Bình Thạnh, gần Điện Biên Phủ",
    roomType: "Phòng riêng",
    lookingFor: "Nữ, 22-28 tuổi",
    tags: ["Yên tĩnh", "Gần chợ", "Có ban công"],
    description: "Phòng mới sạch sẽ, có máy lạnh, tủ lạnh chung. Mình làm remote nên thường ở nhà, thích người sạch sẽ, không ồn.",
    postedDate: "2 ngày trước",
  },
  {
    id: 2,
    title: "Share studio Thảo Điền - cần 1 bạn nam",
    author: "Đức Anh",
    price: "6tr/tháng",
    location: "Thảo Điền, Q.2",
    roomType: "Studio shared",
    lookingFor: "Nam, có việc ổn định",
    tags: ["Gần gym", "An ninh tốt", "Full nội thất"],
    description: "Studio 40m2, view đẹp. Mình designer làm việc tại nhà. Tìm bạn ngăn nắp, có thu nhập ổn định.",
    postedDate: "5 ngày trước",
  },
  {
    id: 3,
    title: "Ghép căn 3PN ở Q1 - còn 1 slot",
    author: "Thu & Hằng",
    price: "5.5tr/tháng",
    location: "Q1, gần Lê Lợi",
    roomType: "Phòng riêng trong căn 3PN",
    lookingFor: "Nam/Nữ đều được",
    tags: ["Trung tâm", "Gần tàu điện", "Siêu thị"],
    description: "Hiện tại có 2 bạn nữ đang ở, tìm thêm 1 người. Ai cũng đi làm văn phòng, cuối tuần về quê nên rất thoải mái.",
    postedDate: "1 tuần trước",
  },
];

export default function SharePage() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    location: "",
    roomType: "",
    lookingFor: "",
    description: "",
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
      roomType: "",
      lookingFor: "",
      description: "",
    });
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Header */}
      <header className="border-b-4 border-black bg-[#FFE951]">
        <div className="mx-auto max-w-6xl px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="border-4 border-black bg-black px-4 py-2 text-xl font-black text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                ROOMIE
              </div>
              <div className="border-4 border-black bg-white px-4 py-2 text-xl font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                VERSE
              </div>
            </Link>

            <nav className="flex items-center gap-4">
              <Link
                href="/"
                className="border-3 border-black px-4 py-2 font-bold transition hover:bg-black hover:text-white"
              >
                Trang chủ
              </Link>
              <Link
                href="/home"
                className="border-3 border-black px-4 py-2 font-bold transition hover:bg-black hover:text-white"
              >
                Khám phá
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="border-b-4 border-black bg-[#87CEEB] py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="mb-6 text-6xl font-black uppercase leading-tight">
            Tìm bạn
            <br />
            Share phòng 🏠
          </h1>
          <p className="mb-8 max-w-2xl text-xl font-bold">
            Đăng tin MIỄN PHÍ - Kết nối TRỰC TIẾP - Không môi giới!
          </p>
          <button
            onClick={() => setShowForm(!showForm)}
            className="border-4 border-black bg-[#FF6B6B] px-8 py-4 text-xl font-black uppercase text-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            {showForm ? "✕ Đóng form" : "+ Đăng tin ngay"}
          </button>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Form đăng tin */}
        {showForm && (
          <div className="mb-12 border-4 border-black bg-white p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="mb-6 text-3xl font-black uppercase">Đăng tin mới</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-bold uppercase">Tiêu đề *</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="VD: Tìm bạn nữ share căn 2PN ở Q1"
                  className="w-full border-4 border-black p-4 text-lg font-bold focus:outline-none focus:ring-4 focus:ring-[#FFE951]"
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-bold uppercase">Giá thuê/tháng *</label>
                  <input
                    type="text"
                    required
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    placeholder="VD: 4.5tr"
                    className="w-full border-4 border-black p-4 text-lg font-bold focus:outline-none focus:ring-4 focus:ring-[#FFE951]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold uppercase">Khu vực *</label>
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="VD: Q1, gần Lê Lợi"
                    className="w-full border-4 border-black p-4 text-lg font-bold focus:outline-none focus:ring-4 focus:ring-[#FFE951]"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-bold uppercase">Loại phòng *</label>
                  <select
                    required
                    value={formData.roomType}
                    onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                    className="w-full border-4 border-black p-4 text-lg font-bold focus:outline-none focus:ring-4 focus:ring-[#FFE951]"
                  >
                    <option value="">Chọn loại phòng</option>
                    <option value="Phòng riêng">Phòng riêng</option>
                    <option value="Studio shared">Studio shared</option>
                    <option value="Giường trong phòng chung">Giường trong phòng chung</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold uppercase">Tìm người *</label>
                  <input
                    type="text"
                    required
                    value={formData.lookingFor}
                    onChange={(e) => setFormData({ ...formData, lookingFor: e.target.value })}
                    placeholder="VD: Nữ, 22-28 tuổi"
                    className="w-full border-4 border-black p-4 text-lg font-bold focus:outline-none focus:ring-4 focus:ring-[#FFE951]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold uppercase">Mô tả *</label>
                <textarea
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Mô tả chi tiết về phòng, yêu cầu với người ở cùng..."
                  rows={5}
                  className="w-full border-4 border-black p-4 text-lg font-bold focus:outline-none focus:ring-4 focus:ring-[#FFE951]"
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="border-4 border-black bg-[#4ECDC4] px-8 py-4 text-lg font-black uppercase shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                >
                  🚀 Đăng tin
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="border-4 border-black bg-white px-8 py-4 text-lg font-black uppercase shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                >
                  Hủy
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Danh sách tin đăng */}
        <div>
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-4xl font-black uppercase">Tin mới nhất</h2>
            <div className="flex gap-3">
              <button className="border-4 border-black bg-white px-4 py-2 font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition hover:bg-[#FFE951]">
                Tất cả
              </button>
              <button className="border-4 border-black bg-white px-4 py-2 font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition hover:bg-[#FFE951]">
                Q1
              </button>
              <button className="border-4 border-black bg-white px-4 py-2 font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition hover:bg-[#FFE951]">
                Q2
              </button>
              <button className="border-4 border-black bg-white px-4 py-2 font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition hover:bg-[#FFE951]">
                Bình Thạnh
              </button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mockListings.map((listing) => (
              <div
                key={listing.id}
                className="group border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <div className="mb-3 flex items-start justify-between">
                  <span className="border-2 border-black bg-[#FF6B6B] px-3 py-1 text-sm font-black text-white">
                    {listing.price}
                  </span>
                  <span className="text-xs font-bold">{listing.postedDate}</span>
                </div>

                <h3 className="mb-2 text-xl font-black leading-tight">{listing.title}</h3>

                <div className="mb-3 space-y-1 text-sm font-bold">
                  <p>📍 {listing.location}</p>
                  <p>🏠 {listing.roomType}</p>
                  <p>👤 Tìm: {listing.lookingFor}</p>
                </div>

                <p className="mb-4 text-sm font-medium leading-relaxed text-gray-700">
                  {listing.description}
                </p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {listing.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border-2 border-black bg-[#FFE951] px-2 py-1 text-xs font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t-2 border-black pt-4">
                  <span className="font-bold">✍️ {listing.author}</span>
                  <button className="border-3 border-black bg-[#4ECDC4] px-4 py-2 font-black transition hover:bg-[#3DBDB4]">
                    Nhắn tin
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-16 border-4 border-black bg-[#FF6B6B] p-12 text-center shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="mb-4 text-4xl font-black uppercase text-white">
            Chưa tìm được phòng phù hợp?
          </h2>
          <p className="mb-6 text-xl font-bold text-white">
            Đăng tin của bạn ngay - MIỄN PHÍ mãi mãi!
          </p>
          <button
            onClick={() => {
              setShowForm(true);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="border-4 border-black bg-[#FFE951] px-8 py-4 text-xl font-black uppercase shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            🎯 Đăng tin ngay
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 border-t-4 border-black bg-black py-8 text-white">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <p className="font-bold">© 2024 roomieVerse - Nền tảng tìm bạn share phòng #1 Việt Nam</p>
          <div className="mt-4 flex justify-center gap-6 text-sm font-bold">
            <Link href="/" className="hover:text-[#FFE951]">
              Về chúng tôi
            </Link>
            <Link href="/" className="hover:text-[#FFE951]">
              Điều khoản
            </Link>
            <Link href="/" className="hover:text-[#FFE951]">
              Liên hệ
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
