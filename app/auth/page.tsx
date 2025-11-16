"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

type AuthMode = "login" | "signup";

const perks = [
  "Được curator kiểm hồ sơ trong 12h",
  "Được ghép nhóm chat riêng trước khi thăm nhà",
  "Tài liệu hướng dẫn chia chi phí minh bạch",
];

export default function AuthPage() {
  const [mode, setMode] = useState<AuthMode>("login");

  const heading = mode === "login" ? "Chào mừng trở lại" : "Tạo tài khoản roomieVerse";
  const subHeading =
    mode === "login"
      ? "Đăng nhập để tiếp tục trò chuyện với các roommate tiềm năng."
      : "Peel off mọi tin rác và chỉ kết nối với người thật muốn share nhà.";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-8 px-6 py-12 lg:flex-row lg:px-12">
        <section className="flex flex-1 flex-col justify-between rounded-[32px] border border-white/15 bg-white/5 p-8">
          <div>
            <Link href="/" className="text-lg font-semibold text-white">
              roomie<span className="text-emerald-300">Verse</span>
            </Link>
            <p className="mt-4 text-sm text-slate-200">
              {"\"Roommate only\""} không phải slogan. Chúng tôi loại bỏ toàn bộ tin môi giới để giữ cộng đồng trong sạch.
            </p>
            <div className="mt-10 space-y-5">
              {perks.map((perk) => (
                <div key={perk} className="flex items-start gap-3 text-sm text-slate-100">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-300/20 text-sm font-semibold text-emerald-200">
                    +
                  </span>
                  {perk}
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-2 text-sm text-slate-300">
            <p>Chưa sẵn sàng? Khám phá trước:</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/welcome" className="rounded-full border border-white/20 px-4 py-2 text-white">
                Welcome tour
              </Link>
              <Link href="/home" className="rounded-full border border-white/20 px-4 py-2 text-white">
                Trang chủ prototype
              </Link>
            </div>
          </div>
        </section>

        <section className="flex flex-1 flex-col justify-center rounded-[32px] border border-white/15 bg-white/10 p-8">
          <div className="flex gap-2 rounded-full border border-white/10 bg-white/5 p-1 text-xs font-semibold uppercase tracking-[0.4em] text-slate-200">
            <button
              type="button"
              onClick={() => setMode("login")}
              className={`flex-1 rounded-full px-4 py-2 ${mode === "login" ? "bg-white text-slate-900" : "text-slate-200"}`}
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => setMode("signup")}
              className={`flex-1 rounded-full px-4 py-2 ${mode === "signup" ? "bg-white text-slate-900" : "text-slate-200"}`}
            >
              Signup
            </button>
          </div>

          <div className="mt-8 space-y-3">
            <h1 className="text-3xl font-semibold text-white">{heading}</h1>
            <p className="text-sm text-slate-300">{subHeading}</p>
          </div>

          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            {mode === "signup" && (
              <label className="block text-sm">
                <span className="text-slate-300">Tên hiển thị</span>
                <input
                  type="text"
                  name="fullName"
                  className="mt-2 w-full rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-emerald-300 focus:outline-none"
                  placeholder="Ví dụ: Linh Nguyen"
                  required
                />
              </label>
            )}

            <label className="block text-sm">
              <span className="text-slate-300">Email</span>
              <input
                type="email"
                name="email"
                className="mt-2 w-full rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-emerald-300 focus:outline-none"
                placeholder="you@roomieverse.com"
                required
              />
            </label>

            <label className="block text-sm">
              <span className="text-slate-300">Mật khẩu</span>
              <input
                type="password"
                name="password"
                className="mt-2 w-full rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-emerald-300 focus:outline-none"
                placeholder="********"
                minLength={8}
                required
              />
            </label>

            {mode === "signup" && (
              <label className="block text-sm">
                <span className="text-slate-300">Style sống</span>
                <select
                  name="vibe"
                  className="mt-2 w-full rounded-2xl border border-white/20 bg-slate-900/40 px-4 py-3 text-sm text-white focus:border-emerald-300 focus:outline-none"
                >
                  <option value="early" className="text-slate-900">
                    Ngủ sớm - thích yên tĩnh
                  </option>
                  <option value="creative" className="text-slate-900">
                    Sống về đêm - creative
                  </option>
                  <option value="flex" className="text-slate-900">
                    Linh hoạt - hay đi công tác
                  </option>
                </select>
              </label>
            )}

            <button
              type="submit"
              className="w-full rounded-2xl bg-emerald-400 px-6 py-3 text-base font-semibold text-slate-900 transition hover:bg-emerald-300"
            >
              {mode === "login" ? "Đăng nhập" : "Tạo tài khoản"}
            </button>
          </form>

          <p className="mt-6 text-xs text-slate-400">
            Bằng việc tiếp tục, bạn đồng ý với <span className="text-white">Terms</span> và <span className="text-white">Privacy</span> của roomieVerse.
          </p>
        </section>
      </div>
    </div>
  );
}
