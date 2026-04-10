import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="bg-surface text-on-surface min-h-screen">

{/*  SideNavBar Shell  */}
<aside className="fixed left-0 h-screen w-64 z-50 bg-slate-50 flex flex-col py-8 px-4 space-y-6">
<div className="px-2 flex items-center gap-3">
<div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center text-white">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>precision_manufacturing</span>
</div>
<div>
<h2 className="text-xl font-black tracking-tighter text-slate-900">GitMax</h2>
<p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Risk Intelligence</p>
</div>
</div>
<nav className="flex-1 mt-8">
<ul className="space-y-1">
<li>
<Link className="flex items-center gap-3 px-3 py-2 text-sm font-bold text-blue-700 bg-white/50 border-r-2 border-blue-600 transition-all duration-300" to="/"><span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>Dashboard</Link>
</li>
<li>
<Link className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-200/50 transition-all duration-300" to="/repositories"><span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>Repositories</Link>
</li>
<li>
<Link className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-200/50 transition-all duration-300" to="/pull-requests"><span className="material-symbols-outlined" data-icon="merge_type">merge_type</span>Pull Requests</Link>
</li>
<li>
<Link className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-200/50 transition-all duration-300" to="/insights"><span className="material-symbols-outlined" data-icon="insights">insights</span>Insights</Link>
</li>
<li>
<Link className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-200/50 transition-all duration-300" to="/reports"><span className="material-symbols-outlined" data-icon="description">description</span>Reports</Link>
</li>
</ul>
</nav>
<div className="pt-6 mt-6 border-t border-slate-200">
<button className="w-full py-2.5 px-4 gradient-primary text-white text-sm font-bold rounded-lg ambient-glow-primary active:scale-95 transition-all">
                Run Risk Audit
            </button>
</div>
<div className="mt-auto space-y-1">
<div className="flex items-center gap-3 px-3 py-2 text-xs font-semibold text-slate-500 hover:bg-slate-200/50 rounded-lg cursor-pointer transition-all">
<span className="material-symbols-outlined text-sm" data-icon="smart_toy">smart_toy</span>
                Repo Agent
            </div>
<div className="flex items-center gap-3 px-3 py-2 text-xs font-semibold text-slate-500 hover:bg-slate-200/50 rounded-lg cursor-pointer transition-all">
<span className="material-symbols-outlined text-sm" data-icon="security">security</span>
                Risk Agent
            </div>
<div className="flex items-center gap-3 px-3 py-2 text-xs font-semibold text-slate-500 hover:bg-slate-200/50 rounded-lg cursor-pointer transition-all">
<span className="material-symbols-outlined text-sm" data-icon="analytics">analytics</span>
                Report Agent
            </div>
</div>
</aside>
{/*  Main Content Canvas  */}
<main className="ml-64 min-h-screen">
{/*  TopNavBar Shell  */}
<header className="fixed top-0 right-0 left-64 h-16 glass-header z-40 flex items-center justify-between px-8">
<div className="flex items-center flex-1 max-w-xl">
<div className="relative w-full">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-surface-container-low border-none rounded-xl text-sm focus:ring-2 focus:ring-primary-container transition-all" placeholder="Search risk incidents, repos, or agents..." type="text"/>
</div>
</div>
<div className="flex items-center gap-4">
<button className="p-2 text-slate-500 hover:bg-slate-100/50 rounded-full transition-colors active:scale-95">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="p-2 text-slate-500 hover:bg-slate-100/50 rounded-full transition-colors active:scale-95">
<span className="material-symbols-outlined">settings</span>
</button>
<div className="h-8 w-8 rounded-full bg-slate-200 overflow-hidden ml-2">
<img className="w-full h-full object-cover" data-alt="professional portrait of a senior software architect in a clean studio setting with soft lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOPvPYgaVI3zzM_IiekrX0XXdO-lrFfnAePFYkrUwcAgn3a1D9bDV38VquDpoRncm_y71O2Xr--_5mGloOHBfkYbvtqAVzlZQQYJyXAuwka1REx9RSq45OOHnGWnAzi7saiy1DJpzYuR_v_I9g49VwEvDXIsk9W9RWNC4fjiXdZBE8TVOdpuBgtUZjDy1SNj6bZut7uhZPttruvirT1qF6B3IC4VZ1bFPDdGwisOMiokue1s1RQhVpXfXxRr4DFw9sHOXss5gokfM"/>
</div>
</div>
</header>
<div className="pt-24 px-8 pb-12">
{/*  Header Section  */}
<div className="mb-10">
<h1 className="text-4xl font-extrabold tracking-tight text-on-surface mb-2">Platform Overview</h1>
<p className="text-on-surface-variant font-medium">Real-time risk assessment and AI activity monitoring.</p>
</div>
{/*  Bento Metrics Grid  */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
<div className="bg-surface-container-lowest p-6 rounded-xl ghost-border flex flex-col justify-between">
<div>
<span className="text-[10px] font-bold uppercase tracking-widest text-secondary">Total Repositories</span>
<div className="text-3xl font-black mt-2">142</div>
</div>
<div className="mt-4 flex items-center text-xs text-tertiary font-bold">
<span className="material-symbols-outlined text-sm mr-1">trending_up</span>
                        +12% this month
                    </div>
</div>
<div className="bg-surface-container-lowest p-6 rounded-xl ghost-border flex flex-col justify-between">
<div>
<span className="text-[10px] font-bold uppercase tracking-widest text-secondary">Health Score</span>
<div className="text-3xl font-black mt-2 text-primary">84%</div>
</div>
<div className="mt-4 w-full bg-surface-container-low h-1.5 rounded-full overflow-hidden">
<div className="bg-primary h-full w-[84%]"></div>
</div>
</div>
<div className="bg-surface-container-lowest p-6 rounded-xl ghost-border flex flex-col justify-between">
<div>
<span className="text-[10px] font-bold uppercase tracking-widest text-secondary">High-Risk Modules</span>
<div className="text-3xl font-black mt-2 text-error">12</div>
</div>
<div className="mt-4 flex items-center text-xs text-error font-bold">
<span className="material-symbols-outlined text-sm mr-1">warning</span>
                        Requires Attention
                    </div>
</div>
<div className="bg-surface-container-lowest p-6 rounded-xl ghost-border flex flex-col justify-between">
<div>
<span className="text-[10px] font-bold uppercase tracking-widest text-secondary">Recent Alerts</span>
<div className="text-3xl font-black mt-2">5</div>
</div>
<div className="mt-4 flex items-center text-xs text-on-surface-variant font-medium">
                        Last alert 14m ago
                    </div>
</div>
</div>
{/*  Layout: Analytics & Agent Activity  */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
{/*  Risk Trends Chart Canvas  */}
<div className="lg:col-span-2 space-y-8">
<section className="bg-surface-container-lowest p-8 rounded-xl ghost-border">
<div className="flex items-center justify-between mb-8">
<h3 className="text-lg font-bold tracking-tight">Risk Trend Evolution</h3>
<div className="flex gap-2">
<button className="px-3 py-1 text-xs font-bold bg-surface-container-high rounded-lg">7D</button>
<button className="px-3 py-1 text-xs font-bold text-on-surface-variant">30D</button>
<button className="px-3 py-1 text-xs font-bold text-on-surface-variant">90D</button>
</div>
</div>
<div className="h-64 flex items-end justify-between gap-2 px-2">
{/*  Visualizing a bar/area chart with divs  */}
<div className="flex-1 bg-surface-container-low rounded-t-lg h-[40%] transition-all hover:bg-primary-fixed-dim"></div>
<div className="flex-1 bg-surface-container-low rounded-t-lg h-[60%] transition-all hover:bg-primary-fixed-dim"></div>
<div className="flex-1 bg-surface-container-low rounded-t-lg h-[55%] transition-all hover:bg-primary-fixed-dim"></div>
<div className="flex-1 bg-surface-container-low rounded-t-lg h-[80%] transition-all hover:bg-primary-fixed-dim"></div>
<div className="flex-1 bg-surface-container-low rounded-t-lg h-[45%] transition-all hover:bg-primary-fixed-dim"></div>
<div className="flex-1 bg-primary-container rounded-t-lg h-[90%] shadow-lg shadow-primary/20"></div>
<div className="flex-1 bg-surface-container-low rounded-t-lg h-[65%] transition-all hover:bg-primary-fixed-dim"></div>
<div className="flex-1 bg-surface-container-low rounded-t-lg h-[50%] transition-all hover:bg-primary-fixed-dim"></div>
<div className="flex-1 bg-surface-container-low rounded-t-lg h-[75%] transition-all hover:bg-primary-fixed-dim"></div>
<div className="flex-1 bg-surface-container-low rounded-t-lg h-[35%] transition-all hover:bg-primary-fixed-dim"></div>
</div>
<div className="mt-6 flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">
<span>01 Oct</span>
<span>05 Oct</span>
<span>10 Oct</span>
<span>15 Oct</span>
<span>20 Oct</span>
<span>Current</span>
</div>
</section>
{/*  Top Risky Repositories  */}
<section className="bg-surface-container-lowest rounded-xl ghost-border overflow-hidden">
<div className="p-8 border-b border-surface-container-low">
<h3 className="text-lg font-bold tracking-tight">Top Risky Repositories</h3>
</div>
<div className="divide-y divide-surface-container-low">
{/*  Repo Item 1  */}
<div className="px-8 py-4 flex items-center justify-between hover:bg-surface-container-low/30 transition-colors">
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-slate-500">folder_open</span>
</div>
<div>
<div className="text-sm font-bold">core-payment-gateway</div>
<div className="text-[11px] text-on-surface-variant">Last commit 2h ago by @jdrake</div>
</div>
</div>
<div className="flex items-center gap-8">
<div className="text-right">
<div className="text-xs font-bold text-on-surface-variant">Health Score</div>
<div className="text-sm font-black text-error">34%</div>
</div>
<span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-error-container text-on-error-container ghost-border">High Risk</span>
</div>
</div>
{/*  Repo Item 2  */}
<div className="px-8 py-4 flex items-center justify-between hover:bg-surface-container-low/30 transition-colors">
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-slate-500">folder_open</span>
</div>
<div>
<div className="text-sm font-bold">user-auth-service</div>
<div className="text-[11px] text-on-surface-variant">Last commit 1d ago by @mlake</div>
</div>
</div>
<div className="flex items-center gap-8">
<div className="text-right">
<div className="text-xs font-bold text-on-surface-variant">Health Score</div>
<div className="text-sm font-black text-amber-500">52%</div>
</div>
<span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-500/15 text-amber-500 ghost-border" style={{"outlineColor":"rgba(245, 158, 11, 0.2)"}}>Medium Risk</span>
</div>
</div>
{/*  Repo Item 3  */}
<div className="px-8 py-4 flex items-center justify-between hover:bg-surface-container-low/30 transition-colors">
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-slate-500">folder_open</span>
</div>
<div>
<div className="text-sm font-bold">data-lake-connector</div>
<div className="text-[11px] text-on-surface-variant">Last commit 4d ago by @sarahk</div>
</div>
</div>
<div className="flex items-center gap-8">
<div className="text-right">
<div className="text-xs font-bold text-on-surface-variant">Health Score</div>
<div className="text-sm font-black text-amber-500">61%</div>
</div>
<span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-500/15 text-amber-500 ghost-border" style={{"outlineColor":"rgba(245, 158, 11, 0.2)"}}>Medium Risk</span>
</div>
</div>
</div>
</section>
</div>
{/*  AI Agent Activity Panel  */}
<div className="space-y-6">
<section className="bg-surface-container-low p-6 rounded-xl">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-black uppercase tracking-widest text-slate-500">AI Agent Activity</h3>
<span className="flex h-2 w-2 rounded-full bg-tertiary animate-pulse"></span>
</div>
<div className="space-y-4">
{/*  Repo Agent  */}
<div className="bg-surface-container-lowest p-4 rounded-lg ghost-border">
<div className="flex items-start justify-between mb-3">
<div className="flex items-center gap-3">
<div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
<span className="material-symbols-outlined" data-icon="smart_toy">smart_toy</span>
</div>
<div>
<div className="text-sm font-bold">Repo Agent</div>
<div className="text-[10px] font-bold text-tertiary flex items-center uppercase">
<span className="w-1.5 h-1.5 bg-tertiary rounded-full mr-1.5"></span>
                                                Active
                                            </div>
</div>
</div>
<span className="text-[10px] font-bold text-slate-400">0.4s ago</span>
</div>
<p className="text-xs text-on-surface-variant leading-relaxed">Scanning `api-v3-internal` for structural drift and deprecated dependencies.</p>
</div>
{/*  Risk Agent  */}
<div className="bg-surface-container-lowest p-4 rounded-lg ghost-border">
<div className="flex items-start justify-between mb-3">
<div className="flex items-center gap-3">
<div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
<span className="material-symbols-outlined" data-icon="security">security</span>
</div>
<div>
<div className="text-sm font-bold">Risk Agent</div>
<div className="text-[10px] font-bold text-tertiary flex items-center uppercase">
<span className="w-1.5 h-1.5 bg-tertiary rounded-full mr-1.5"></span>
                                                Active
                                            </div>
</div>
</div>
<span className="text-[10px] font-bold text-slate-400">Now</span>
</div>
<p className="text-xs text-on-surface-variant leading-relaxed">Correlating 5 new alerts with historical failure patterns in CI/CD pipeline.</p>
</div>
{/*  Report Agent  */}
<div className="bg-surface-container-lowest p-4 rounded-lg ghost-border opacity-70">
<div className="flex items-start justify-between mb-3">
<div className="flex items-center gap-3">
<div className="p-2 bg-slate-100 text-slate-400 rounded-lg">
<span className="material-symbols-outlined" data-icon="analytics">analytics</span>
</div>
<div>
<div className="text-sm font-bold">Report Agent</div>
<div className="text-[10px] font-bold text-slate-400 flex items-center uppercase">
<span className="w-1.5 h-1.5 bg-slate-400 rounded-full mr-1.5"></span>
                                                Standby
                                            </div>
</div>
</div>
</div>
<p className="text-xs text-on-surface-variant leading-relaxed">Next automated executive summary scheduled for Monday, 09:00 AM.</p>
</div>
</div>
</section>
{/*  Quick Insight Card  */}
<section className="relative h-64 rounded-xl overflow-hidden group">
<img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="close-up of advanced computer circuit board with glowing blue neon data pathways in a dark futuristic environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBb7q48RpRRyBUDJ5OuDjU0A4w4GyN1QhDCovgQxbgAT0kq0fTgI9AfOdjEQBQuAqq6bUY5Pw3MMCPcBGCOomGuX6V442jeNNR95Bxfr6SnviU90QPIdZjFeP5Di60ym9P0uv3pfaHGFp6XGQJCwWRcozjEo4nt2uGjYr-PsRR1tTBKPWQVg0-o4q9t_kAUP1bArnSJzf7LRbwbVsA8_cPtKK5DDla-gcUHMTQydaXezuGKrntZTHrlJ9rstIkqF6YMRb-Sa6nEedM"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-end">
<span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 mb-2">Insight of the Day</span>
<h4 className="text-white font-bold leading-tight mb-3">Architecture drift in `payment-svc` has increased risk probability by 22%.</h4>
<button className="text-xs font-bold text-white flex items-center gap-1 hover:gap-2 transition-all">
                                View Full Analysis
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
</section>
</div>
</div>
</div>
</main>

    </div>
  );
}
