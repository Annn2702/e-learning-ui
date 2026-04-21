export default function LecturerExamReportPage() {
    return (
      <div className="mx-auto max-w-7xl space-y-10">
        {/* Page Header */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-[0.2em] mb-2">
            <span className="material-symbols-outlined text-sm">analytics</span>
            Chi tiết báo cáo
          </div>
  
          <h1 className="text-[2.5rem] font-bold text-on-surface leading-tight tracking-tight">
            Báo cáo Kết quả Kỳ thi
          </h1>
  
          <p className="text-lg text-on-surface-variant font-medium">
            Cơ sở dữ liệu - Giữa kỳ <span className="mx-2 text-slate-300">•</span> Mã HP: IT3011
          </p>
        </div>
  
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-surface-container-lowest p-6 rounded-xl transition-all hover:bg-surface-bright group">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">group_add</span>
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Hoàn thành
              </span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold text-on-surface">124</span>
              <span className="text-slate-400 font-medium">/ 130</span>
            </div>
            <div className="mt-2 w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
              <div className="bg-indigo-600 h-full rounded-full" style={{ width: "95.3%" }} />
            </div>
          </div>
  
          <div className="bg-surface-container-lowest p-6 rounded-xl transition-all hover:bg-surface-bright group">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-amber-50 text-amber-600 rounded-lg group-hover:bg-amber-500 group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">star</span>
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Điểm TB
              </span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold text-on-surface">7.8</span>
              <span className="text-slate-400 font-medium">/ 10</span>
            </div>
            <p className="mt-2 text-xs font-semibold text-secondary flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">trending_up</span>
              +0.4 so với kỳ trước
            </p>
          </div>
  
          <div className="bg-surface-container-lowest p-6 rounded-xl transition-all hover:bg-surface-bright group">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">military_tech</span>
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Cao nhất/Thấp nhất
              </span>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-on-surface">10.0</span>
              <span className="text-slate-300 text-xl font-light">/</span>
              <span className="text-2xl font-bold text-error">3.5</span>
            </div>
            <p className="mt-2 text-xs font-semibold text-slate-500 italic">
              Dải điểm phổ biến: 6.5 - 8.5
            </p>
          </div>
  
          <div className="bg-surface-container-lowest p-6 rounded-xl transition-all hover:bg-surface-bright group border-2 border-transparent hover:border-secondary/20">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-secondary/10 text-secondary rounded-lg group-hover:bg-secondary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">check_circle</span>
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Tỷ lệ Đạt
              </span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold text-on-surface">92</span>
              <span className="text-on-surface text-xl font-semibold">%</span>
            </div>
            <p className="mt-2 text-xs font-semibold text-slate-500 uppercase tracking-tighter">
              Tiêu chuẩn: Điểm ≥ 5.0
            </p>
          </div>
        </div>
  
        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Score Distribution */}
          <div className="lg:col-span-3 bg-surface-container-lowest p-8 rounded-xl">
            <div className="flex justify-between items-center mb-10">
              <div>
                <h3 className="text-lg font-bold text-on-surface tracking-tight">
                  Phân phối điểm số
                </h3>
                <p className="text-sm text-slate-400 font-medium">
                  Thống kê số lượng sinh viên theo từng khung điểm
                </p>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-xs font-bold rounded-full bg-indigo-50 text-indigo-600">
                  Theo Số lượng
                </button>
                <button className="px-3 py-1 text-xs font-bold rounded-full text-slate-400 hover:bg-slate-100">
                  Theo %
                </button>
              </div>
            </div>
  
            <div className="flex items-end justify-between h-48 gap-4 px-4">
              {[
                { label: "0 - 2", h: "15%", v: "4 SV", tone: "bg-indigo-100 group-hover:bg-indigo-300" },
                { label: "2 - 4", h: "25%", v: "8 SV", tone: "bg-indigo-200 group-hover:bg-indigo-400" },
                { label: "4 - 6", h: "45%", v: "22 SV", tone: "bg-indigo-300 group-hover:bg-indigo-500" },
                { label: "6 - 8", h: "95%", v: "58 SV", tone: "bg-primary" },
                { label: "8 - 10", h: "70%", v: "32 SV", tone: "bg-indigo-400 group-hover:bg-indigo-600" },
              ].map((b) => (
                <div key={b.label} className="flex-1 flex flex-col items-center gap-4 group">
                  <div className={`w-full rounded-t-lg relative transition-all ${b.tone}`} style={{ height: b.h }}>
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                      {b.v}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400">{b.label}</span>
                </div>
              ))}
            </div>
          </div>
  
          {/* Timeline */}
          <div className="lg:col-span-2 bg-surface-container-lowest p-8 rounded-xl relative overflow-hidden">
            <h3 className="text-lg font-bold text-on-surface tracking-tight mb-1">Tiến độ nộp bài</h3>
            <p className="text-sm text-slate-400 font-medium mb-8">Số lượt nộp theo thời gian (giờ)</p>
  
            <div className="relative h-40 mt-10">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 40">
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#4f46e5", stopOpacity: 0.2 }} />
                    <stop offset="100%" style={{ stopColor: "#4f46e5", stopOpacity: 0 }} />
                  </linearGradient>
                </defs>
  
                <path d="M0,40 L0,35 Q10,32 20,25 T40,15 T60,20 T80,5 T100,2 L100,40 Z" fill="url(#grad1)" />
                <path d="M0,35 Q10,32 20,25 T40,15 T60,20 T80,5 T100,2" fill="none" stroke="#3525cd" strokeWidth="0.5" />
              </svg>
  
              <div className="absolute inset-0 flex justify-between items-end text-[8px] font-bold text-slate-400 px-1">
                <span>07:00</span>
                <span>08:00</span>
                <span>09:00</span>
                <span>10:00</span>
                <span>11:00</span>
              </div>
            </div>
  
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-xs font-bold text-on-surface">Cao điểm: 08:30 - 09:15</span>
              </div>
              <span className="text-xs font-medium text-slate-500">Peak: 42 bài/giờ</span>
            </div>
          </div>
        </div>
  
        {/* Table */}
        <div className="space-y-6">
          <div className="flex justify-between items-end">
            <div>
              <h3 className="text-xl font-bold text-on-surface tracking-tight">Danh sách chi tiết</h3>
              <p className="text-sm text-slate-500 font-medium">Tổng số 124 bản ghi đã được xử lý</p>
            </div>
  
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors">
                <span className="material-symbols-outlined text-sm">filter_list</span>
                Bộ lọc
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-full text-xs font-bold hover:shadow-lg hover:shadow-indigo-500/20 transition-all">
                <span className="material-symbols-outlined text-sm">download</span>
                Xuất Excel
              </button>
            </div>
          </div>
  
          <div className="bg-surface-container-lowest rounded-2xl overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low border-none">
                  <th className="px-8 py-4 text-[10px] font-extrabold text-slate-500 uppercase tracking-widest">
                    Họ tên sinh viên
                  </th>
                  <th className="px-6 py-4 text-[10px] font-extrabold text-slate-500 uppercase tracking-widest text-center">
                    MSSV
                  </th>
                  <th className="px-6 py-4 text-[10px] font-extrabold text-slate-500 uppercase tracking-widest text-center">
                    Thời gian nộp
                  </th>
                  <th className="px-6 py-4 text-[10px] font-extrabold text-slate-500 uppercase tracking-widest text-center">
                    Số điểm
                  </th>
                  <th className="px-8 py-4 text-[10px] font-extrabold text-slate-500 uppercase tracking-widest text-right">
                    Trạng thái
                  </th>
                </tr>
              </thead>
  
              <tbody className="divide-y divide-slate-50">
                {[
                  { initials: "LA", name: "Lê Anh Tuấn", email: "anhtuan.le@student.edu.vn", id: "20216042", time: "08:42:15", score: "9.5", pass: true },
                  { initials: "PT", name: "Phạm Thị Lan", email: "lan.pt@student.edu.vn", id: "20217890", time: "09:15:30", score: "8.2", pass: true },
                  { initials: "NH", name: "Nguyễn Huy Hoàng", email: "hoang.nh@student.edu.vn", id: "20214561", time: "08:12:04", score: "3.5", pass: false },
                  { initials: "TM", name: "Trần Minh Quân", email: "quan.tm@student.edu.vn", id: "20213012", time: "09:45:00", score: "7.0", pass: true },
                ].map((r) => (
                  <tr key={r.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-3">
                        <div
                          className={[
                            "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold",
                            r.pass ? "bg-indigo-100 text-indigo-700" : "bg-red-50 text-red-700",
                          ].join(" ")}
                        >
                          {r.initials}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-on-surface">{r.name}</p>
                          <p className="text-[10px] text-slate-400 font-medium">{r.email}</p>
                        </div>
                      </div>
                    </td>
  
                    <td className="px-6 py-5 text-center text-sm font-medium text-slate-600">{r.id}</td>
                    <td className="px-6 py-5 text-center text-sm font-medium text-slate-500">{r.time}</td>
  
                    <td className="px-6 py-5 text-center">
                      <span className={r.pass ? "text-sm font-black text-on-surface" : "text-sm font-black text-error"}>
                        {r.score}
                      </span>
                    </td>
  
                    <td className="px-8 py-5 text-right">
                      {r.pass ? (
                        <span className="inline-flex items-center px-3 py-1 bg-secondary/10 text-secondary text-[10px] font-bold rounded-full">
                          ĐẠT
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-3 py-1 bg-error/10 text-error text-[10px] font-bold rounded-full">
                          KHÔNG ĐẠT
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
  
            <div className="p-6 bg-slate-50/30 flex justify-between items-center">
              <span className="text-xs font-medium text-slate-500">
                Hiển thị 1-4 trên tổng số 124 sinh viên
              </span>
              <div className="flex gap-1">
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:bg-white transition-all">
                  <span className="material-symbols-outlined text-sm">chevron_left</span>
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-indigo-600 text-white text-xs font-bold">
                  1
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 text-xs font-bold hover:bg-white transition-all">
                  2
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 text-xs font-bold hover:bg-white transition-all">
                  3
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:bg-white transition-all">
                  <span className="material-symbols-outlined text-sm">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }