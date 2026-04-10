import React from 'react';
import { Link } from 'react-router-dom';

export default function Repositories() {
  return (
    <div className="bg-surface text-on-surface min-h-screen">

{/*  SideNavBar Shell  */}
<aside className="fixed left-0 h-screen w-64 z-50 bg-slate-50 flex flex-col py-8 px-4 space-y-6">
<div className="px-2 mb-4">
<h1 className="text-xl font-black tracking-tighter text-slate-900">GitMax</h1>
<p className="font-sans text-sm font-medium tracking-wide text-slate-600">Risk Intelligence</p>
</div>
<nav className="flex-1 space-y-1">
<Link className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-200/50 transition-all duration-300 ease-in-out font-sans text-sm font-medium tracking-wide rounded-lg" to="/">
<span className="material-symbols-outlined">dashboard</span>
<span>Dashboard</span>
</Link>
<Link className="flex items-center gap-3 px-3 py-2 text-blue-700 font-bold border-r-2 border-blue-600 transition-all duration-300 ease-in-out font-sans text-sm font-medium tracking-wide bg-slate-200/30" to="/repositories">
<span className="material-symbols-outlined">inventory_2</span>
<span>Repositories</span>
</Link>
<Link className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-200/50 transition-all duration-300 ease-in-out font-sans text-sm font-medium tracking-wide rounded-lg" to="/pull-requests">
<span className="material-symbols-outlined">merge_type</span>
<span>Pull Requests</span>
</Link>
<Link className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-200/50 transition-all duration-300 ease-in-out font-sans text-sm font-medium tracking-wide rounded-lg" to="/insights">
<span className="material-symbols-outlined">insights</span>
<span>Insights</span>
</Link>
<Link className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-200/50 transition-all duration-300 ease-in-out font-sans text-sm font-medium tracking-wide rounded-lg" to="/reports">
<span className="material-symbols-outlined">description</span>
<span>Reports</span>
</Link>
</nav>
<div className="pt-6 border-t border-slate-200/50">
<button className="w-full bg-gradient-to-br from-primary to-primary-container text-white py-2.5 rounded-xl font-semibold text-sm shadow-sm active:scale-95 transition-all">
                Run Risk Audit
            </button>
</div>
<div className="mt-auto space-y-1">
<Link className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-200/50 transition-all font-sans text-sm font-medium tracking-wide rounded-lg" to="#">
<span className="material-symbols-outlined">smart_toy</span>
<span>Repo Agent</span>
</Link>
<Link className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-200/50 transition-all font-sans text-sm font-medium tracking-wide rounded-lg" to="#">
<span className="material-symbols-outlined">security</span>
<span>Risk Agent</span>
</Link>
<Link className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-200/50 transition-all font-sans text-sm font-medium tracking-wide rounded-lg" to="#">
<span className="material-symbols-outlined">analytics</span>
<span>Report Agent</span>
</Link>
</div>
</aside>
{/*  Main Content Canvas  */}
<main className="ml-64 min-h-screen bg-surface">
{/*  TopAppBar  */}
<header className="fixed top-0 right-0 left-64 z-40 bg-white/80 backdrop-blur-xl h-16 flex justify-between items-center px-8 shadow-sm">
<div className="flex items-center gap-4">
<span className="text-lg font-bold tracking-tighter text-slate-900">The Precision Editorial</span>
<div className="h-4 w-px bg-slate-200 mx-2"></div>
<h2 className="text-on-surface font-semibold tracking-tight">Repositories</h2>
</div>
<div className="flex items-center gap-4">
<div className="relative group">
<span className="material-symbols-outlined text-slate-500 hover:bg-slate-100/50 p-2 rounded-full transition-colors cursor-pointer">notifications</span>
<span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border-2 border-white"></span>
</div>
<span className="material-symbols-outlined text-slate-500 hover:bg-slate-100/50 p-2 rounded-full transition-colors cursor-pointer">settings</span>
<div className="ml-2 w-8 h-8 rounded-full bg-surface-container-high overflow-hidden border border-outline-variant/20">
<img alt="User profile" data-alt="Close up portrait of a professional male software engineer with short dark hair and a confident expression in a bright modern office" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0vl_3xPwHdM2qm29JinSh0kxSm1LhNBocQpGmqSHEapWKMBY1S15GD1r31PvKNOxey-ciZK-8FfvwPQMNAhKtJUEmSxa8RIBkqEqGm7XKwMLvyh-6mtdhJFp1c3VzD7fR2q0SGPaHZf6tAGEYCObXeYFzW5uJRYM2bYbxK6oyqCpRdQUypMKBuUqhI5tqtw2uSyH2nwnV7wbUIf0mvecB4KOEG3FZTU-RWW2PyjexG8qFvWmuzZGNOTYZrV6NsADuCIbVbvAo4jM"/>
</div>
</div>
</header>
{/*  Content Area  */}
<div className="pt-24 px-8 pb-12 max-w-7xl mx-auto space-y-8">
{/*  Hero / Connect Section  */}
<section className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="md:col-span-2 p-8 bg-surface-container-lowest rounded-xl shadow-[0px_4px_20px_rgba(22,28,34,0.04)] flex flex-col justify-between">
<div>
<h3 className="text-2xl font-bold tracking-tight text-on-surface mb-2">Connect New Repository</h3>
<p className="text-on-surface-variant max-w-lg mb-8">Extend your risk intelligence by connecting production repositories. We support deep analysis for distributed microservices and monolithic architectures.</p>
</div>
<div className="flex gap-4">
<button className="flex items-center gap-3 px-6 py-3 bg-on-surface text-surface rounded-lg font-medium hover:opacity-90 transition-all active:scale-95">
<svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                            Connect GitHub
                        </button>
<button className="flex items-center gap-3 px-6 py-3 bg-surface-container-high text-on-surface rounded-lg font-medium hover:bg-surface-container-highest transition-all active:scale-95">
<svg className="w-5 h-5 fill-[#E24329]" viewBox="0 0 24 24"><path d="M23.955 13.587l-1.342-4.135-2.664-8.189c-.135-.417-.724-.417-.859 0l-2.664 8.189H7.574L4.91 1.263c-.135-.417-.724-.417-.859 0L1.387 9.452.044 13.587c-.145.448.016.937.399 1.213l11.556 8.392 11.556-8.392c.383-.276.544-.765.399-1.213z"></path></svg>
                            Connect GitLab
                        </button>
</div>
</div>
<div className="relative overflow-hidden rounded-xl bg-primary-container p-8 text-white flex flex-col justify-end">
<div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
<div className="relative z-10">
<span className="text-[4rem] font-black tracking-tighter leading-none block mb-2">92%</span>
<p className="text-sm font-bold uppercase tracking-widest opacity-80">Global Fleet Health</p>
<p className="text-sm mt-4 leading-relaxed font-medium">Your overall infrastructure risk remains stable. 4 critical vulnerabilities patched this week.</p>
</div>
</div>
</section>
{/*  Repositories Grid Section  */}
<section className="space-y-6">
<div className="flex justify-between items-end">
<div>
<h4 className="text-xl font-bold tracking-tight">Active Repositories</h4>
<p className="text-on-surface-variant text-sm">Managing 12 connected software entities</p>
</div>
<div className="flex gap-2">
<button className="p-2 bg-surface-container-lowest rounded-md shadow-sm text-slate-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined">grid_view</span>
</button>
<button className="p-2 bg-surface-container-lowest rounded-md shadow-sm text-primary transition-colors">
<span className="material-symbols-outlined">list</span>
</button>
</div>
</div>
{/*  Repo List (Using Editorial List Style)  */}
<div className="bg-surface-container-low/50 rounded-2xl p-1 overflow-hidden">
<div className="bg-surface-container-lowest rounded-[0.9rem] shadow-sm overflow-hidden">
{/*  Header Row  */}
<div className="grid grid-cols-12 px-8 py-4 bg-surface-container-low/30 text-xs font-bold uppercase tracking-widest text-slate-500 border-b border-outline-variant/10">
<div className="col-span-5">Repository Name</div>
<div className="col-span-2 text-center">Health Score</div>
<div className="col-span-3">Last Analyzed</div>
<div className="col-span-2 text-right">Actions</div>
</div>
{/*  Repo Items  */}
<div className="divide-y divide-outline-variant/10">
{/*  Item 1  */}
<div className="grid grid-cols-12 px-8 py-5 items-center hover:bg-surface-container-low transition-colors group">
<div className="col-span-5 flex items-center gap-4">
<div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
<span className="material-symbols-outlined">folder</span>
</div>
<div>
<p className="font-bold text-on-surface tracking-tight">precision-core-engine</p>
<p className="text-xs text-on-surface-variant">github.com/precision-ai/core</p>
</div>
</div>
<div className="col-span-2 flex justify-center">
<span className="px-3 py-1 bg-tertiary-container/10 text-tertiary text-xs font-bold rounded-full border border-tertiary/20 flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                                        98%
                                    </span>
</div>
<div className="col-span-3">
<p className="text-sm text-on-surface-variant font-medium">14 minutes ago</p>
<p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">Version 4.2.0-stable</p>
</div>
<div className="col-span-2 text-right">
<button className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg shadow-[0_4px_12px_rgba(0,88,190,0.15)] hover:shadow-[0_4px_20px_rgba(0,88,190,0.25)] active:scale-95 transition-all">
                                        Analyze
                                    </button>
</div>
</div>
{/*  Item 2  */}
<div className="grid grid-cols-12 px-8 py-5 items-center hover:bg-surface-container-low transition-colors group">
<div className="col-span-5 flex items-center gap-4">
<div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
<span className="material-symbols-outlined">terminal</span>
</div>
<div>
<p className="font-bold text-on-surface tracking-tight">legacy-auth-service</p>
<p className="text-xs text-on-surface-variant">gitlab.com/precision/auth</p>
</div>
</div>
<div className="col-span-2 flex justify-center">
<span className="px-3 py-1 bg-error-container/40 text-on-error-container text-xs font-bold rounded-full border border-error/20 flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-error"></span>
                                        42%
                                    </span>
</div>
<div className="col-span-3">
<p className="text-sm text-on-surface-variant font-medium">2 hours ago</p>
<p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">Critical patches pending</p>
</div>
<div className="col-span-2 text-right">
<button className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg shadow-sm hover:opacity-90 transition-all">
                                        Analyze
                                    </button>
</div>
</div>
{/*  Item 3  */}
<div className="grid grid-cols-12 px-8 py-5 items-center hover:bg-surface-container-low transition-colors group">
<div className="col-span-5 flex items-center gap-4">
<div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
<span className="material-symbols-outlined">dataset</span>
</div>
<div>
<p className="font-bold text-on-surface tracking-tight">reporting-analytics-v2</p>
<p className="text-xs text-on-surface-variant">github.com/precision-ai/reports</p>
</div>
</div>
<div className="col-span-2 flex justify-center">
<span className="px-3 py-1 bg-amber-500/10 text-amber-600 text-xs font-bold rounded-full border border-amber-500/20 flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                                        76%
                                    </span>
</div>
<div className="col-span-3">
<p className="text-sm text-on-surface-variant font-medium">Yesterday at 4:12 PM</p>
<p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">Version 1.0.8-alpha</p>
</div>
<div className="col-span-2 text-right">
<button className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg shadow-sm hover:opacity-90 transition-all">
                                        Analyze
                                    </button>
</div>
</div>
{/*  Item 4  */}
<div className="grid grid-cols-12 px-8 py-5 items-center hover:bg-surface-container-low transition-colors group">
<div className="col-span-5 flex items-center gap-4">
<div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
<span className="material-symbols-outlined">layers</span>
</div>
<div>
<p className="font-bold text-on-surface tracking-tight">frontend-dashboard-next</p>
<p className="text-xs text-on-surface-variant">github.com/precision-ai/ui</p>
</div>
</div>
<div className="col-span-2 flex justify-center">
<span className="px-3 py-1 bg-tertiary-container/10 text-tertiary text-xs font-bold rounded-full border border-tertiary/20 flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                                        94%
                                    </span>
</div>
<div className="col-span-3">
<p className="text-sm text-on-surface-variant font-medium">3 days ago</p>
<p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">Clean deployment</p>
</div>
<div className="col-span-2 text-right">
<button className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg shadow-sm hover:opacity-90 transition-all">
                                        Analyze
                                    </button>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Bottom Insight Bento  */}
<section className="grid grid-cols-1 md:grid-cols-4 gap-6">
<div className="p-6 bg-surface-container-low rounded-xl border border-outline-variant/10">
<p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Total Vulnerabilities</p>
<p className="text-3xl font-black text-on-surface tracking-tight">1,248</p>
<div className="mt-4 flex items-center gap-2 text-xs font-bold text-tertiary">
<span className="material-symbols-outlined text-sm">trending_down</span>
                        12% decrease this month
                    </div>
</div>
<div className="p-6 bg-surface-container-low rounded-xl border border-outline-variant/10">
<p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Avg Code Health</p>
<p className="text-3xl font-black text-on-surface tracking-tight">B+</p>
<div className="mt-4 flex items-center gap-2 text-xs font-bold text-primary">
<span className="material-symbols-outlined text-sm">bolt</span>
                        Optimized architecture
                    </div>
</div>
<div className="p-6 bg-surface-container-low rounded-xl border border-outline-variant/10">
<p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Critical Alerts</p>
<p className="text-3xl font-black text-error tracking-tight">04</p>
<div className="mt-4 flex items-center gap-2 text-xs font-bold text-error">
<span className="material-symbols-outlined text-sm">error</span>
                        Immediate action required
                    </div>
</div>
<div className="p-6 bg-surface-container-low rounded-xl border border-outline-variant/10">
<p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">AI Suggestions</p>
<p className="text-3xl font-black text-secondary tracking-tight">28</p>
<div className="mt-4 flex items-center gap-2 text-xs font-bold text-secondary">
<span className="material-symbols-outlined text-sm">auto_awesome</span>
                        Ready to automate
                    </div>
</div>
</section>
</div>
{/*  Pagination / Footer  */}
<footer className="px-8 py-6 border-t border-outline-variant/10 flex justify-between items-center bg-white/50">
<p className="text-sm text-on-surface-variant font-medium">Showing 1 to 4 of 12 repositories</p>
<div className="flex gap-1">
<button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors"><span className="material-symbols-outlined text-sm">chevron_left</span></button>
<button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-white font-bold text-xs">1</button>
<button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-container-high text-on-surface font-medium text-xs transition-colors">2</button>
<button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-container-high text-on-surface font-medium text-xs transition-colors">3</button>
<button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors"><span className="material-symbols-outlined text-sm">chevron_right</span></button>
</div>
</footer>
</main>

    </div>
  );
}
