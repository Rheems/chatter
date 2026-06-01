"use client";

import { useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Eye,
  Heart,
  MessageCircle,
  Bookmark,
  TrendingUp,
  TrendingDown,
  Users,
  PenLine,
  ArrowUp,
  ArrowDown,
} from "lucide-react";
import Link from "next/link";

const weeklyData = [
  { day: "Mon", views: 120, likes: 18, comments: 5 },
  { day: "Tue", views: 180, likes: 24, comments: 8 },
  { day: "Wed", views: 150, likes: 20, comments: 6 },
  { day: "Thu", views: 280, likes: 45, comments: 15 },
  { day: "Fri", views: 320, likes: 52, comments: 18 },
  { day: "Sat", views: 410, likes: 68, comments: 24 },
  { day: "Sun", views: 380, likes: 61, comments: 21 },
];

const previousWeekData = [
  { day: "Mon", views: 90, likes: 12, comments: 3 },
  { day: "Tue", views: 140, likes: 18, comments: 5 },
  { day: "Wed", views: 110, likes: 15, comments: 4 },
  { day: "Thu", views: 200, likes: 32, comments: 10 },
  { day: "Fri", views: 250, likes: 40, comments: 12 },
  { day: "Sat", views: 300, likes: 48, comments: 16 },
  { day: "Sun", views: 280, likes: 44, comments: 14 },
];

const topPosts = [
  {
    id: "1",
    title: "Time Changes Yesterday",
    views: 1240,
    likes: 124,
    comments: 18,
    bookmarks: 45,
    tag: "Writing",
  },
  {
    id: "3",
    title: "Nigeria's Tech Renaissance",
    views: 2030,
    likes: 203,
    comments: 31,
    bookmarks: 89,
    tag: "Technology",
  },
  {
    id: "5",
    title: "Refactoring UI — Design Lessons",
    views: 3120,
    likes: 312,
    comments: 44,
    bookmarks: 120,
    tag: "Design",
  },
  {
    id: "2",
    title: "Nearly Everybody in Lagos is Mad",
    views: 890,
    likes: 89,
    comments: 12,
    bookmarks: 34,
    tag: "Africa",
  },
];

function getPercentChange(current: number, previous: number) {
  if (previous === 0) return 0;
  return Math.round(((current - previous) / previous) * 100);
}

const currentTotal = weeklyData.reduce((sum, d) => sum + d.views, 0);
const previousTotal = previousWeekData.reduce((sum, d) => sum + d.views, 0);
const viewsChange = getPercentChange(currentTotal, previousTotal);

const currentLikes = weeklyData.reduce((sum, d) => sum + d.likes, 0);
const previousLikes = previousWeekData.reduce((sum, d) => sum + d.likes, 0);
const likesChange = getPercentChange(currentLikes, previousLikes);

const currentComments = weeklyData.reduce((sum, d) => sum + d.comments, 0);
const previousComments = previousWeekData.reduce(
  (sum, d) => sum + d.comments,
  0,
);
const commentsChange = getPercentChange(currentComments, previousComments);

export default function DashboardPage() {
  const [activeMetric, setActiveMetric] = useState<
    "views" | "likes" | "comments"
  >("views");
  const [period, setPeriod] = useState<"7days" | "30days">("7days");

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0A0F1E]">
      {/* Header */}
      <div className="bg-[#0F2B5B] border-b border-white/10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h1
                className="text-3xl font-bold text-white"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Analytics Dashboard
              </h1>
              <p className="text-white/50 text-sm">
                Track your content performance
              </p>
            </div>
            <Link
              href="/posts/new"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#F97316] text-white text-sm font-semibold hover:bg-[#EA6C0A] transition-all"
            >
              <PenLine className="h-4 w-4" />
              Write New Post
            </Link>
          </div>

          {/* Period Selector */}
          <div className="flex gap-2 mt-6">
            {(["7days", "30days"] as const).map((p) => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  period === p
                    ? "bg-white text-[#0F2B5B]"
                    : "bg-white/10 text-white/60 hover:bg-white/20"
                }`}
              >
                {p === "7days" ? "Last 7 days" : "Last 30 days"}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Views */}
          <div className="bg-white dark:bg-white/5 rounded-2xl p-5 border border-gray-100 dark:border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <div className="h-10 w-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <Eye className="h-5 w-5 text-blue-500" />
              </div>
              <span
                className={`flex items-center gap-1 text-xs font-semibold ${
                  viewsChange >= 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                {viewsChange >= 0 ? (
                  <ArrowUp className="h-3 w-3" />
                ) : (
                  <ArrowDown className="h-3 w-3" />
                )}
                {Math.abs(viewsChange)}%
              </span>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#0F2B5B] dark:text-white">
                {currentTotal.toLocaleString()}
              </p>
              <p className="text-xs text-gray-400 dark:text-white/30">
                Total Views
              </p>
            </div>
          </div>

          {/* Likes */}
          <div className="bg-white dark:bg-white/5 rounded-2xl p-5 border border-gray-100 dark:border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <div className="h-10 w-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                <Heart className="h-5 w-5 text-red-500" />
              </div>
              <span
                className={`flex items-center gap-1 text-xs font-semibold ${
                  likesChange >= 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                {likesChange >= 0 ? (
                  <ArrowUp className="h-3 w-3" />
                ) : (
                  <ArrowDown className="h-3 w-3" />
                )}
                {Math.abs(likesChange)}%
              </span>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#0F2B5B] dark:text-white">
                {currentLikes.toLocaleString()}
              </p>
              <p className="text-xs text-gray-400 dark:text-white/30">
                Total Likes
              </p>
            </div>
          </div>

          {/* Comments */}
          <div className="bg-white dark:bg-white/5 rounded-2xl p-5 border border-gray-100 dark:border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <div className="h-10 w-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-purple-500" />
              </div>
              <span
                className={`flex items-center gap-1 text-xs font-semibold ${
                  commentsChange >= 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                {commentsChange >= 0 ? (
                  <ArrowUp className="h-3 w-3" />
                ) : (
                  <ArrowDown className="h-3 w-3" />
                )}
                {Math.abs(commentsChange)}%
              </span>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#0F2B5B] dark:text-white">
                {currentComments.toLocaleString()}
              </p>
              <p className="text-xs text-gray-400 dark:text-white/30">
                Total Comments
              </p>
            </div>
          </div>

          {/* Followers */}
          <div className="bg-white dark:bg-white/5 rounded-2xl p-5 border border-gray-100 dark:border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <div className="h-10 w-10 rounded-xl bg-[#F97316]/10 flex items-center justify-center">
                <Users className="h-5 w-5 text-[#F97316]" />
              </div>
              <span className="flex items-center gap-1 text-xs font-semibold text-green-500">
                <ArrowUp className="h-3 w-3" />
                12%
              </span>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#0F2B5B] dark:text-white">
                248
              </p>
              <p className="text-xs text-gray-400 dark:text-white/30">
                Followers
              </p>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Line Chart */}
          <div className="lg:col-span-2 bg-white dark:bg-white/5 rounded-2xl p-6 border border-gray-100 dark:border-white/10">
            <div className="flex items-center justify-between mb-6">
              <h2
                className="text-lg font-bold text-[#0F2B5B] dark:text-white"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Performance Over Time
              </h2>
              <div className="flex gap-2">
                {(["views", "likes", "comments"] as const).map((metric) => (
                  <button
                    key={metric}
                    onClick={() => setActiveMetric(metric)}
                    className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all capitalize ${
                      activeMetric === metric
                        ? "bg-[#0F2B5B] text-white"
                        : "bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-white/50 hover:bg-gray-200 dark:hover:bg-white/20"
                    }`}
                  >
                    {metric}
                  </button>
                ))}
              </div>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis
                  dataKey="day"
                  tick={{ fontSize: 12, fill: "#9CA3AF" }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fontSize: 12, fill: "#9CA3AF" }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#0F2B5B",
                    border: "none",
                    borderRadius: "12px",
                    color: "white",
                    fontSize: "12px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey={activeMetric}
                  stroke="#F97316"
                  strokeWidth={3}
                  dot={{ fill: "#F97316", strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, fill: "#F97316" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Bar Chart */}
          <div className="bg-white dark:bg-white/5 rounded-2xl p-6 border border-gray-100 dark:border-white/10">
            <h2
              className="text-lg font-bold text-[#0F2B5B] dark:text-white mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              This vs Last Week
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart
                data={weeklyData.map((d, i) => ({
                  day: d.day,
                  "This Week": d.views,
                  "Last Week": previousWeekData[i].views,
                }))}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis
                  dataKey="day"
                  tick={{ fontSize: 11, fill: "#9CA3AF" }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fontSize: 11, fill: "#9CA3AF" }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#0F2B5B",
                    border: "none",
                    borderRadius: "12px",
                    color: "white",
                    fontSize: "12px",
                  }}
                />
                <Bar dataKey="This Week" fill="#F97316" radius={[4, 4, 0, 0]} />
                <Bar
                  dataKey="Last Week"
                  fill="#0F2B5B"
                  radius={[4, 4, 0, 0]}
                  opacity={0.4}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Posts Table */}
        <div className="bg-white dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/10 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 dark:border-white/10 flex items-center justify-between">
            <h2
              className="text-lg font-bold text-[#0F2B5B] dark:text-white"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Top Performing Posts
            </h2>
            <Link
              href="/feed"
              className="text-sm font-semibold text-[#F97316] hover:text-[#EA6C0A] transition-colors"
            >
              View all →
            </Link>
          </div>

          {/* Table Header */}
          <div className="hidden md:grid grid-cols-6 gap-4 px-6 py-3 bg-gray-50 dark:bg-white/5 text-xs font-bold text-gray-400 dark:text-white/30 uppercase tracking-wider">
            <div className="col-span-2">Post</div>
            <div className="text-center">Views</div>
            <div className="text-center">Likes</div>
            <div className="text-center">Comments</div>
            <div className="text-center">Bookmarks</div>
          </div>

          {/* Table Rows */}
          {topPosts.map((post, i) => (
            <div
              key={post.id}
              className="grid grid-cols-2 md:grid-cols-6 gap-4 px-6 py-4 border-t border-gray-100 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
            >
              {/* Post Info */}
              <div className="col-span-2 flex items-center gap-3">
                <span className="text-lg font-bold text-gray-200 dark:text-white/10">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <Link
                    href={`/posts/${post.id}`}
                    className="text-sm font-semibold text-[#0F2B5B] dark:text-white hover:text-[#F97316] transition-colors line-clamp-1"
                  >
                    {post.title}
                  </Link>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#0F2B5B]/10 dark:bg-white/10 text-[#0F2B5B] dark:text-white">
                    {post.tag}
                  </span>
                </div>
              </div>

              {/* Metrics */}
              <div className="text-center">
                <p className="text-sm font-bold text-[#0F2B5B] dark:text-white">
                  {post.views.toLocaleString()}
                </p>
                <p className="text-xs text-gray-400 md:hidden">views</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-bold text-[#0F2B5B] dark:text-white">
                  {post.likes}
                </p>
                <p className="text-xs text-gray-400 md:hidden">likes</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-bold text-[#0F2B5B] dark:text-white">
                  {post.comments}
                </p>
                <p className="text-xs text-gray-400 md:hidden">comments</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-bold text-[#0F2B5B] dark:text-white">
                  {post.bookmarks}
                </p>
                <p className="text-xs text-gray-400 md:hidden">bookmarks</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
