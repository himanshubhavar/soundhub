import React from 'react';
import { Link } from 'react-router-dom';

export default function ExecutiveReport() {
  return (
    <div className="bg-surface text-on-surface min-h-screen">

{/*  Top Navigation Shell  */}
<header className="fixed top-0 w-full z-50 bg-[#f7f9ff]/80 dark:bg-slate-950/80 backdrop-blur-xl flex items-center justify-between px-6 py-3 h-14 w-full">
<div className="flex items-center gap-8">
<div className="text-lg font-bold tracking-tighter text-[#141c25] dark:text-slate-50">Git Max</div>
<nav className="hidden md:flex gap-6">
<Link className="text-[#141c25]/60 dark:text-slate-400 font-sans text-sm font-medium tracking-tight hover:bg-[#e0e9f5] transition-all duration-200 px-3 py-1 rounded-lg" to="/">Dashboard</Link>
<Link className="text-[#141c25]/60 dark:text-slate-400 font-sans text-sm font-medium tracking-tight hover:bg-[#e0e9f5] transition-all duration-200 px-3 py-1 rounded-lg" to="/repositories">Repositories</Link>
<Link className="text-[#0051ae] dark:text-[#0969da] font-semibold font-sans text-sm tracking-tight px-3 py-1 rounded-lg" to="/reports">Reports</Link>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden sm:block">
<input className="bg-surface-container-lowest border-none ring-1 ring-outline-variant/20 focus:ring-primary text-xs rounded-full px-4 py-1.5 w-64 transition-all" placeholder="Search insights..." type="text"/>
</div>
<button className="text-[#141c25]/60 p-2 hover:bg-[#e0e9f5] rounded-full transition-all">
<span className="material-symbols-outlined text-[20px]" data-icon="notifications">notifications</span>
</button>
<button className="text-[#141c25]/60 p-2 hover:bg-[#e0e9f5] rounded-full transition-all">
<span className="material-symbols-outlined text-[20px]" data-icon="settings">settings</span>
</button>
<img alt="User Profile" className="w-8 h-8 rounded-full object-cover ring-2 ring-surface-container-highest" data-alt="professional headshot of a corporate executive in a modern office setting with soft natural lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIc9Li-0rnAvaCgXK6r3os_PtVQo5hqleIQvjBZg3-Udaub0EtXPS9jZuTkuzTtMtEJk3tXysbLKLZqKDAVpilDbu2WAFLCQEdMVwsE-SrGa99an7qlBVCXhxlD2RGcDO7NxfJVNPLfsHTpCpfmVDMcSOADyhdise-TDGwT-3MrwWnEaW2sy6Sp3mPzH-MFeRlSv7QbFohi7w7y0eFrR-CN11rfS0GW29FqYvxxKOKTAT5enkJdp1yOmpG8SUluol8uUQAIDrmPuU"/>
</div>
</header>
{/*  Sidebar Shell  */}
<aside className="fixed left-0 top-0 h-full w-64 z-40 bg-[#f7f9ff] dark:bg-slate-950 flex flex-col p-4 space-y-2 border-none pt-20 hidden lg:flex">
<div className="px-4 mb-6">
<h2 className="text-xl font-black text-[#141c25] dark:text-white">Git Max AI</h2>
<p className="text-[11px] uppercase tracking-widest text-on-surface-variant/60 font-bold">Risk Intelligence</p>
</div>
<div className="space-y-1">
<Link className="flex items-center gap-3 px-4 py-2.5 text-[#141c25]/70 font-sans text-[13px] font-medium hover:bg-[#e0e9f5] transition-colors rounded-lg group" to="/">
<span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 duration-150" data-icon="dashboard">dashboard</span>
                Dashboard
            </Link>
<Link className="flex items-center gap-3 px-4 py-2.5 text-[#141c25]/70 font-sans text-[13px] font-medium hover:bg-[#e0e9f5] transition-colors rounded-lg group" to="/repositories">
<span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 duration-150" data-icon="inventory_2">inventory_2</span>
                Repositories
            </Link>
<Link className="flex items-center gap-3 px-4 py-2.5 text-[#141c25]/70 font-sans text-[13px] font-medium hover:bg-[#e0e9f5] transition-colors rounded-lg group" to="/pull-requests">
<span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 duration-150" data-icon="merge_type">merge_type</span>
                Pull Requests
            </Link>
<Link className="flex items-center gap-3 px-4 py-2.5 text-[#141c25]/70 font-sans text-[13px] font-medium hover:bg-[#e0e9f5] transition-colors rounded-lg group" to="/insights">
<span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 duration-150" data-icon="insights">insights</span>
                Insights
            </Link>
<Link className="flex items-center gap-3 px-4 py-2.5 bg-[#ffffff] dark:bg-slate-800 text-[#0051ae] dark:text-white rounded-lg shadow-sm font-semibold font-sans text-[13px] group" to="/reports">
<span className="material-symbols-outlined text-[20px]" data-icon="analytics">analytics</span>
                Reports
            </Link>
</div>
<div className="mt-auto pt-4 space-y-1">
<Link className="flex items-center gap-3 px-4 py-2 text-[#141c25]/70 font-sans text-[13px] font-medium hover:bg-[#e0e9f5] transition-colors rounded-lg" to="#">
<span className="material-symbols-outlined text-[20px]" data-icon="settings">settings</span>
                Settings
            </Link>
<Link className="flex items-center gap-3 px-4 py-2 text-[#141c25]/70 font-sans text-[13px] font-medium hover:bg-[#e0e9f5] transition-colors rounded-lg" to="#">
<span className="material-symbols-outlined text-[20px]" data-icon="help_outline">help_outline</span>
                Support
            </Link>
</div>
</aside>
{/*  Main Content Area  */}
<main className="lg:ml-64 pt-20 pb-12 px-6 md:px-10 max-w-7xl mx-auto">
{/*  Report Header  */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
<div>
<nav className="flex items-center gap-2 text-[11px] font-bold tracking-widest text-primary mb-2 uppercase">
<span>Intelligence</span>
<span className="material-symbols-outlined text-[12px]" data-icon="chevron_right">chevron_right</span>
<span>Executive Summaries</span>
</nav>
<h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface mb-2">Executive Risk Report</h1>
<p className="text-on-surface-variant font-medium">Q3 Engineering Performance &amp; Security Posture — Oct 2023</p>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-5 py-2.5 bg-surface-container-highest text-on-surface rounded-lg font-semibold text-sm transition-all hover:scale-95 active:scale-90">
<span className="material-symbols-outlined text-[20px]" data-icon="share">share</span>
                    Share Report
                </button>
<button className="flex items-center gap-2 px-6 py-2.5 premium-gradient text-white rounded-lg font-semibold text-sm shadow-lg shadow-primary/20 transition-all hover:scale-95 active:scale-90">
<span className="material-symbols-outlined text-[20px]" data-icon="download">download</span>
                    Download PDF
                </button>
</div>
</div>
{/*  Key Metrics Bento Grid  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
{/*  Health Score  */}
<div className="bg-surface-container-lowest p-8 rounded-xl ring-1 ring-outline-variant/10 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-[120px]" data-icon="health_and_safety">health_and_safety</span>
</div>
<p className="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant/70 mb-8">System Health Score</p>
<div className="flex items-baseline gap-2">
<span className="text-7xl font-black text-primary tracking-tighter">84</span>
<span className="text-xl font-bold text-tertiary">/100</span>
</div>
<div className="mt-6 flex items-center gap-2">
<div className="flex-1 h-2 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-primary w-[84%]"></div>
</div>
<span className="text-xs font-bold text-on-surface-variant">Optimal</span>
</div>
</div>
{/*  Downtime Risk  */}
<div className="bg-surface-container-lowest p-8 rounded-xl ring-1 ring-outline-variant/10 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-[120px]" data-icon="timer_off">timer_off</span>
</div>
<p className="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant/70 mb-8">Risk of Downtime</p>
<div className="flex items-baseline gap-2">
<span className="text-7xl font-black text-secondary tracking-tighter">1.2</span>
<span className="text-xl font-bold text-on-surface-variant">%</span>
</div>
<p className="mt-6 text-sm text-on-surface-variant font-medium leading-relaxed">
<span className="text-tertiary font-bold">↓ 0.4%</span> from previous quarter. System stability remains within Tier 1 SLA thresholds.
                </p>
</div>
{/*  Bug Probability  */}
<div className="bg-surface-container-lowest p-8 rounded-xl ring-1 ring-outline-variant/10 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-[120px]" data-icon="bug_report">bug_report</span>
</div>
<p className="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant/70 mb-8">Critical Bug Probability</p>
<div className="flex items-baseline gap-2">
<span className="text-7xl font-black text-error tracking-tighter">24</span>
<span className="text-xl font-bold text-on-surface-variant">%</span>
</div>
<p className="mt-6 text-sm text-on-surface-variant font-medium leading-relaxed">
<span className="text-error font-bold">↑ 8%</span> increase due to legacy module refactoring in the Core API.
                </p>
</div>
</div>
{/*  Asymmetric Analysis Section  */}
<div className="grid grid-cols-1 lg:grid-cols-[1fr,400px] gap-8">
{/*  Strategic Risks  */}
<section className="space-y-6">
<div className="flex items-center justify-between">
<h3 className="text-2xl font-bold tracking-tight text-on-surface">Top Strategic Risks</h3>
<span className="text-xs font-bold text-on-surface-variant/60 uppercase tracking-widest">Live Analysis</span>
</div>
<div className="space-y-4">
{/*  Risk Item 1  */}
<div className="bg-surface-container-lowest p-6 rounded-xl flex gap-6 items-start hover:bg-surface transition-colors cursor-default">
<div className="w-12 h-12 rounded-lg bg-error-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-on-error-container" data-icon="security">security</span>
</div>
<div>
<div className="flex items-center gap-3 mb-1">
<h4 className="font-bold text-on-surface">Authentication Bypass Vulnerability</h4>
<span className="px-2 py-0.5 bg-error text-[10px] font-bold text-white rounded-full uppercase">Critical</span>
</div>
<p className="text-sm text-on-surface-variant leading-relaxed mb-4">A logical flaw in the OAuth2 implementation could allow unauthorized access to administrative endpoints under specific conditions.</p>
<div className="bg-surface-container-low p-4 rounded-lg">
<p className="text-[11px] font-bold uppercase text-on-surface-variant/60 mb-1">Business Impact</p>
<p className="text-xs font-medium text-on-surface">Potential exposure of PII for 4.2M users; estimated regulatory penalty risk of $12.4M.</p>
</div>
</div>
</div>
{/*  Risk Item 2  */}
<div className="bg-surface-container-lowest p-6 rounded-xl flex gap-6 items-start hover:bg-surface transition-colors cursor-default">
<div className="w-12 h-12 rounded-lg bg-secondary-container/20 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-secondary" data-icon="speed">speed</span>
</div>
<div>
<div className="flex items-center gap-3 mb-1">
<h4 className="font-bold text-on-surface">Technical Debt in Payment Gateway</h4>
<span className="px-2 py-0.5 bg-secondary-container text-[10px] font-bold text-on-secondary-container rounded-full uppercase">High</span>
</div>
<p className="text-sm text-on-surface-variant leading-relaxed mb-4">Aging infrastructure in the legacy payment processing module is causing intermittent timeout issues for APAC regions.</p>
<div className="bg-surface-container-low p-4 rounded-lg">
<p className="text-[11px] font-bold uppercase text-on-surface-variant/60 mb-1">Business Impact</p>
<p className="text-xs font-medium text-on-surface">Abandonment rate at checkout increased by 3.2% month-over-month; projected $450k monthly revenue loss.</p>
</div>
</div>
</div>
{/*  Risk Item 3  */}
<div className="bg-surface-container-lowest p-6 rounded-xl flex gap-6 items-start hover:bg-surface transition-colors cursor-default">
<div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-on-surface-variant" data-icon="groups">groups</span>
</div>
<div>
<div className="flex items-center gap-3 mb-1">
<h4 className="font-bold text-on-surface">Developer Burnout Index</h4>
<span className="px-2 py-0.5 bg-surface-container-highest text-[10px] font-bold text-on-surface-variant rounded-full uppercase">Moderate</span>
</div>
<p className="text-sm text-on-surface-variant leading-relaxed mb-4">Workload intensity in the Infrastructure team has exceeded sustainable levels for 3 consecutive sprints.</p>
<div className="bg-surface-container-low p-4 rounded-lg">
<p className="text-[11px] font-bold uppercase text-on-surface-variant/60 mb-1">Business Impact</p>
<p className="text-xs font-medium text-on-surface">Increased risk of knowledge loss through attrition; estimated 14% delay in Q4 cloud migration roadmap.</p>
</div>
</div>
</div>
</div>
</section>
{/*  Recommended Actions  */}
<section className="space-y-6">
<h3 className="text-2xl font-bold tracking-tight text-on-surface">Recommended Actions</h3>
<div className="bg-surface-container p-6 rounded-2xl space-y-6">
{/*  Action Card 1  */}
<div className="bg-surface-container-lowest p-5 rounded-xl border-l-4 border-primary shadow-sm">
<div className="flex justify-between items-start mb-3">
<span className="text-[10px] font-black uppercase text-primary tracking-widest">Priority 01</span>
<span className="text-[10px] font-bold text-tertiary">98% Impact</span>
</div>
<h5 className="font-bold text-on-surface mb-2">Patch Auth Service v2.4</h5>
<p className="text-xs text-on-surface-variant mb-4 leading-relaxed">Immediately deploy the security patch to the gateway service to eliminate the PII exposure risk.</p>
<div className="flex items-center justify-between border-t border-outline-variant/10 pt-3">
<span className="text-[11px] font-bold text-on-surface">Revenue Protected:</span>
<span className="text-sm font-black text-on-surface">$12.4M</span>
</div>
</div>
{/*  Action Card 2  */}
<div className="bg-surface-container-lowest p-5 rounded-xl border-l-4 border-secondary shadow-sm">
<div className="flex justify-between items-start mb-3">
<span className="text-[10px] font-black uppercase text-secondary tracking-widest">Priority 02</span>
<span className="text-[10px] font-bold text-tertiary">64% Impact</span>
</div>
<h5 className="font-bold text-on-surface mb-2">Scale Checkout Microservices</h5>
<p className="text-xs text-on-surface-variant mb-4 leading-relaxed">Allocate 2 senior engineers to the APAC payment gateway refactor to reduce timeout errors.</p>
<div className="flex items-center justify-between border-t border-outline-variant/10 pt-3">
<span className="text-[11px] font-bold text-on-surface">Revenue Protected:</span>
<span className="text-sm font-black text-on-surface">$5.4M/yr</span>
</div>
</div>
{/*  Action Card 3  */}
<div className="bg-surface-container-lowest p-5 rounded-xl border-l-4 border-outline shadow-sm">
<div className="flex justify-between items-start mb-3">
<span className="text-[10px] font-black uppercase text-on-surface-variant/60 tracking-widest">Priority 03</span>
<span className="text-[10px] font-bold text-on-surface-variant/60">32% Impact</span>
</div>
<h5 className="font-bold text-on-surface mb-2">Review Infrastructure Load</h5>
<p className="text-xs text-on-surface-variant mb-4 leading-relaxed">Onboard 2 additional SRE contractors to alleviate current workload and prevent burnout attrition.</p>
<div className="flex items-center justify-between border-t border-outline-variant/10 pt-3">
<span className="text-[11px] font-bold text-on-surface">Revenue Protected:</span>
<span className="text-sm font-black text-on-surface">$1.2M</span>
</div>
</div>
<button className="w-full py-3 bg-surface-container-highest text-on-surface font-bold text-sm rounded-lg hover:bg-surface-container-high transition-colors">
                        View Full Implementation Roadmap
                    </button>
</div>
{/*  Decorative Insight Card  */}
<div className="relative h-48 rounded-2xl overflow-hidden group">
<img alt="Data Visualization" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="abstract architectural rendering of complex data structures with glowing blue lines and soft bokeh lighting on a dark background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCccfsm1T6gX0GORUR2QFPwIf4eCGO6xbqxBygHsY5pcq6sPzRp4z-Qalc-5nZvtYy7_z3I3juh4-qc9zLkm2CGq9Zi3z1-yPQ5gyY8XXqtpc89KzScIi8jFNkjaRkdYPna0GWQyvwKhuQZ26LLvmKVYD139mJdeaAQ9elbMb_P6bbbTvVXcsKzL0sPzZfXevsnduWZhz2w_pSoG7gxQ_VJbZuaUbhhFKWJjG1I8DD2JcW3g34PcnyQ3d9mRmedmVx3F37TaN2Ww_I"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent p-6 flex flex-col justify-end">
<p className="text-white text-xs font-bold uppercase tracking-widest mb-1">AI Forecaster</p>
<p className="text-white text-sm font-medium">Predicting 15% system reliability increase if all P0 actions are completed by end of month.</p>
</div>
</div>
</section>
</div>
</main>
{/*  Navigation for Mobile  */}
<nav className="md:hidden fixed bottom-0 left-0 w-full bg-surface-container-lowest border-t border-outline-variant/10 flex justify-around py-3 z-50">
<button className="flex flex-col items-center gap-1 text-[#141c25]/60">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="text-[10px] font-medium">Home</span>
</button>
<button className="flex flex-col items-center gap-1 text-[#141c25]/60">
<span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
<span className="text-[10px] font-medium">Repos</span>
</button>
<button className="flex flex-col items-center gap-1 text-[#0051ae]">
<span className="material-symbols-outlined" data-icon="analytics" style={{"fontVariationSettings":"'FILL' 1"}}>analytics</span>
<span className="text-[10px] font-bold">Reports</span>
</button>
<button className="flex flex-col items-center gap-1 text-[#141c25]/60">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span className="text-[10px] font-medium">Settings</span>
</button>
</nav>

    </div>
  );
}
