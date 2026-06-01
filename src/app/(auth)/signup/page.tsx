"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Check, X, Loader2 } from "lucide-react";
import { signUp, signInWithGitHub } from "@/lib/auth/actions";

interface PasswordRequirement {
  label: string;
  met: boolean;
}

function getRequirements(password: string): PasswordRequirement[] {
  return [
    { label: "At least 8 characters", met: password.length >= 8 },
    { label: "At least one uppercase letter", met: /[A-Z]/.test(password) },
    { label: "At least one number", met: /[0-9]/.test(password) },
    {
      label: "At least one special character",
      met: /[^A-Za-z0-9]/.test(password),
    },
  ];
}

function getStrength(requirements: PasswordRequirement[]): number {
  return requirements.filter((r) => r.met).length;
}

function getStrengthLabel(strength: number): string {
  if (strength === 0) return "";
  if (strength === 1) return "Weak";
  if (strength === 2) return "Fair";
  if (strength === 3) return "Good";
  return "Strong";
}

function getStrengthColor(strength: number): string {
  if (strength === 1) return "bg-red-500";
  if (strength === 2) return "bg-orange-500";
  if (strength === 3) return "bg-yellow-500";
  if (strength === 4) return "bg-green-500";
  return "bg-gray-200";
}

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const requirements = getRequirements(password);
  const strength = getStrength(requirements);
  const allMet = strength === 4;

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    setError("");

    if (!allMet) {
      setError("Please meet all password requirements");
      setLoading(false);
      return;
    }

    const result = await signUp(formData);
    if (result?.error) {
      setError(result.error);
      setLoading(false);
    }
  }

  async function handleGitHub() {
    setLoading(true);
    await signInWithGitHub();
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gray-50 dark:bg-[#0A0F1E]">
      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-2xl font-bold text-[#0F2B5B] dark:text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            <span className="text-[#F97316]">●</span>
            Chatter
          </Link>
          <h1
            className="text-3xl font-bold text-[#0F2B5B] dark:text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Create your account
          </h1>
          <p className="text-gray-500 dark:text-white/50">
            Join thousands of writers on Chatter
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="p-3 rounded-lg bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-600 dark:text-red-400 text-sm">
            {error}
          </div>
        )}

        {/* Form */}
        <form action={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div className="space-y-2">
            <label
              htmlFor="fullName"
              className="text-sm font-semibold text-[#0F2B5B] dark:text-white"
            >
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Kareemah Ahmad"
              required
              className="w-full h-11 px-4 rounded-xl border-2 border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-sm outline-none focus:border-[#0F2B5B] dark:focus:border-[#F97316] transition-all"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-[#0F2B5B] dark:text-white"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              className="w-full h-11 px-4 rounded-xl border-2 border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-sm outline-none focus:border-[#0F2B5B] dark:focus:border-[#F97316] transition-all"
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="text-sm font-semibold text-[#0F2B5B] dark:text-white"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full h-11 px-4 pr-12 rounded-xl border-2 border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-sm outline-none focus:border-[#0F2B5B] dark:focus:border-[#F97316] transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#0F2B5B] dark:hover:text-white transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>

            {/* Strength Indicator */}
            {password.length > 0 && (
              <div className="space-y-2 pt-1">
                <div className="flex gap-1">
                  {[1, 2, 3, 4].map((level) => (
                    <div
                      key={level}
                      className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                        strength >= level
                          ? getStrengthColor(strength)
                          : "bg-gray-200 dark:bg-white/10"
                      }`}
                    />
                  ))}
                </div>
                {getStrengthLabel(strength) && (
                  <p
                    className={`text-xs font-semibold ${
                      strength === 1
                        ? "text-red-500"
                        : strength === 2
                          ? "text-orange-500"
                          : strength === 3
                            ? "text-yellow-500"
                            : "text-green-500"
                    }`}
                  >
                    {getStrengthLabel(strength)}
                  </p>
                )}
                <ul className="space-y-1">
                  {requirements.map((req) => (
                    <li
                      key={req.label}
                      className={`flex items-center gap-2 text-xs transition-colors ${
                        req.met
                          ? "text-green-500"
                          : "text-gray-400 dark:text-white/30"
                      }`}
                    >
                      {req.met ? (
                        <Check className="h-3 w-3" />
                      ) : (
                        <X className="h-3 w-3" />
                      )}
                      {req.label}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full h-11 rounded-xl bg-[#0F2B5B] text-white text-sm font-semibold hover:bg-[#0F2B5B]/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Creating account...
              </>
            ) : (
              "Create Account"
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200 dark:border-white/10" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-gray-50 dark:bg-[#0A0F1E] px-3 text-gray-400">
              Or continue with
            </span>
          </div>
        </div>

        {/* GitHub OAuth */}
        <button
          onClick={handleGitHub}
          disabled={loading}
          className="w-full h-11 rounded-xl border-2 border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-sm font-semibold hover:bg-gray-50 dark:hover:bg-white/10 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          Continue with GitHub
        </button>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-500 dark:text-white/50">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-[#F97316] hover:text-[#EA6C0A] transition-colors"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
