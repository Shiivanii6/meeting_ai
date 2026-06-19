"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignup() {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Signup Successful!");
    router.push("/login");
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="bg-slate-900 p-10 rounded-2xl w-full max-w-md">
        <h1 className="text-4xl font-bold text-white mb-8">
          Create Account
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-lg bg-slate-800 text-white mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-lg bg-slate-800 text-white mb-6"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSignup}
          className="w-full bg-indigo-600 hover:bg-indigo-500 text-white p-3 rounded-lg"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}