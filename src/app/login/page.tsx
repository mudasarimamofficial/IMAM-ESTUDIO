"use client";

import React, { useState } from "react";
import TopNavBar from "@/components/TopNavBar";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [twoFactorCode, setTwoFactorCode] = useState("");
  const [show2FA, setShow2FA] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Credentials fields cannot be left empty.");
      return;
    }

    // Direct routing simulation based on role domain prefix
    if (email.includes("founder") || email.includes("admin")) {
      setShow2FA(true);
    } else if (email.includes("expert")) {
      router.push("/expert/dashboard");
    } else {
      router.push("/buyer/dashboard");
    }
  };

  const handleVerify2FA = (e: React.FormEvent) => {
    e.preventDefault();
    if (twoFactorCode.length === 6) {
      if (email.includes("founder")) {
        router.push("/admin/dashboard");
      } else {
        router.push("/admin/rbac");
      }
    } else {
      setError("Invalid 2FA Authenticator token. Must be 6 digits.");
    }
  };

  return (
    <div className="flex-1 bg-black text-[#e3e2e2] flex flex-col min-h-screen">
      <TopNavBar />

      <main className="flex-1 flex items-center justify-center pt-16 px-6">
        <div className="w-full max-w-sm glass-panel p-8 rounded-lg border border-border">
          <div className="text-center mb-6">
            <span className="font-mono text-[9px] text-[#8e9192] uppercase tracking-[0.2em]">IMAM SECURE SHIELD</span>
            <h2 className="font-sans text-xl font-bold text-white mt-2">Secure Portal Login</h2>
          </div>

          {error && (
            <div className="mb-4 text-[10px] font-mono text-rose-400 bg-rose-950/20 border border-rose-500/20 p-2.5 rounded">
              {error}
            </div>
          )}

          {!show2FA ? (
            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[10px] uppercase text-[#8e9192]">Console Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. founder@imam.estudio"
                  className="bg-black border border-border text-white text-xs rounded p-2.5 outline-none focus:border-white font-mono"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[10px] uppercase text-[#8e9192]">Secret Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="bg-black border border-border text-white text-xs rounded p-2.5 outline-none focus:border-white font-mono"
                />
              </div>

              <button
                type="submit"
                className="mt-2 py-3 bg-white text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-opacity-90 rounded-[2px]"
              >
                Authenticate session
              </button>
            </form>
          ) : (
            <form onSubmit={handleVerify2FA} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[10px] uppercase text-[#8e9192]">2FA Auth Code</label>
                <input
                  type="text"
                  maxLength={6}
                  value={twoFactorCode}
                  onChange={(e) => setTwoFactorCode(e.target.value)}
                  placeholder="Enter 6-digit code"
                  className="bg-black border border-border text-white text-center text-sm tracking-widest rounded p-2.5 outline-none focus:border-white font-mono"
                />
              </div>

              <button
                type="submit"
                className="mt-2 py-3 bg-white text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-opacity-90 rounded-[2px]"
              >
                Verify 2FA Shield
              </button>

              <button
                type="button"
                onClick={() => setShow2FA(false)}
                className="text-center font-mono text-[10px] text-[#8e9192] hover:text-white uppercase mt-2"
              >
                Back to credentials
              </button>
            </form>
          )}

          <div className="mt-8 border-t border-[#111] pt-4 text-center">
            <span className="font-mono text-[9px] text-[#8e9192]">
              Demo: use <b>founder@imam.estudio</b> with <b>any password</b> and <b>123456</b> for 2FA.
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}
