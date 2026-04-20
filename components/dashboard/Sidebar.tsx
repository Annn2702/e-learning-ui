"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Users,
  ClipboardList,
  BookOpen,
  FileText,
  Settings,
  LogOut,
  GraduationCap,
} from "lucide-react"

type Props = {
  role: "admin" | "lecturer" | "student"
}

const LECTURER_NAV = [
  { name: "CLASS", Icon: Users, path: "/lecturer/dashboard" },
  { name: "TASK", Icon: ClipboardList, path: "/lecturer/tasks" },
  { name: "COURSE", Icon: BookOpen, path: "/lecturer/courses" },
  { name: "EXAM", Icon: FileText, path: "/lecturer/exams" },
]

export default function Sidebar({ role }: Props) {
  const pathname = usePathname()

  if (role === "lecturer") {
    return (
      <aside className="hidden md:flex h-screen w-64 fixed left-0 top-0 bg-white flex-col py-8 border-r border-slate-100">

        {/* Logo */}
        <div className="px-6 mb-10 flex items-center gap-3">
          <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-base font-black text-gray-900 leading-tight">
              Academic Curator
            </h1>
            <p className="text-[9px] uppercase tracking-widest text-gray-400 font-bold">
              Enterprise Learning
            </p>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-4 space-y-1">
          {LECTURER_NAV.map((item) => {
            const active =
              item.path === "/lecturer/dashboard"
                ? pathname === "/lecturer/dashboard"
                : pathname.startsWith(item.path)
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-full text-xs font-bold transition-colors
                  ${
                    active
                      ? "bg-indigo-100 text-indigo-600"
                      : "text-slate-500 hover:bg-slate-100 hover:text-slate-700"
                  }`}
              >
                <item.Icon className="w-4 h-4 shrink-0" />
                <span className="uppercase tracking-widest">{item.name}</span>
              </Link>
            )
          })}
        </nav>

        {/* Bottom */}
        <div className="px-4 border-t border-slate-100 pt-4 space-y-1">
          <Link
            href="/settings"
            className="flex items-center gap-3 px-4 py-3 rounded-full text-xs font-bold text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors"
          >
            <Settings className="w-4 h-4 shrink-0" />
            <span className="uppercase tracking-widest">Settings</span>
          </Link>
          <button type="button" className="flex items-center gap-3 px-4 py-3 rounded-full text-xs font-bold text-red-500 hover:bg-red-50 w-full transition-colors">
            <LogOut className="w-4 h-4 shrink-0" />
            <span className="uppercase tracking-widest">Logout</span>
          </button>
        </div>

      </aside>
    )
  }

  const menu = {
    admin: [
      { name: "Dashboard", icon: "dashboard", path: "/admin/dashboard" },
      { name: "Users", icon: "group", path: "/admin/users" },
      { name: "Courses", icon: "menu_book", path: "/admin/courses" },
      { name: "Analytics", icon: "insights", path: "/admin/analytics" },
    ],

    student: [
      { name: "Dashboard", icon: "dashboard", path: "/student/dashboard" },
      { name: "My Learning", icon: "school", path: "/student/courses" },
      { name: "Assignments", icon: "assignment", path: "/student/assignments" },
      { name: "AI Insights", icon: "auto_awesome", path: "/student/analytics" },
      { name: "Messages", icon: "chat", path: "/student/messages" },
    ],
  } as const

  const items = menu[role as "admin" | "student"]

  return (
    <aside className="hidden md:flex h-screen w-64 fixed left-0 top-0 bg-slate-50 flex-col py-6">

      {/* Logo */}
      <div className="px-6 mb-8 flex items-center gap-3">

        <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
          <span className="material-symbols-outlined">school</span>
        </div>

        <div>
          <h1 className="text-lg font-black text-gray-900">
            Academic Curator
          </h1>

          <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
            Enterprise Learning
          </p>
        </div>

      </div>

      {/* Menu */}
      <nav className="flex-1 px-2 space-y-1">

        {items.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`mx-2 px-4 py-3 flex items-center gap-3 rounded-full text-sm transition
            ${
              pathname === item.path
                ? "bg-indigo-100 text-indigo-700 font-semibold"
                : "text-gray-700 hover:bg-slate-200"
            }`}
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            {item.name}
          </Link>
        ))}

      </nav>

      {/* Bottom */}
      <div className="px-2 border-t pt-4 space-y-1">

        <Link
          href="/settings"
          className="mx-2 px-4 py-3 flex items-center gap-3 rounded-full text-sm text-gray-700 hover:bg-slate-200"
        >
          <span className="material-symbols-outlined">settings</span>
          Settings
        </Link>

        <button className="mx-2 px-4 py-3 flex items-center gap-3 rounded-full text-sm text-red-600 hover:bg-red-50 w-full">
          <span className="material-symbols-outlined">logout</span>
          Logout
        </button>

      </div>

    </aside>
  )
}
