import React from 'react';
import { Link } from 'react-router-dom';

export default function PullRequests() {
  return (
    <div className="bg-surface text-on-surface min-h-screen">

{/*  SideNavBar Component  */}
<aside className="fixed left-0 h-screen w-64 z-50 bg-slate-50 dark:bg-slate-950 flex flex-col py-8 px-4 space-y-6">
<div className="flex items-center px-2 space-x-3">
<div className="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center text-on-primary-container">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>security</span>
</div>
<div>
<h2 className="text-xl font-black tracking-tighter text-slate-900 dark:text-white">GitMax</h2>
<p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">Risk Intelligence</p>
</div>
</div>
<nav className="flex-1 space-y-1">
<Link className="flex items-center px-3 py-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-all duration-300 ease-in-out font-sans text-sm font-medium tracking-wide group" to="/">
<span className="material-symbols-outlined mr-3 group-hover:text-primary">dashboard</span>
                Dashboard
            </Link>
<Link className="flex items-center px-3 py-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-all duration-300 ease-in-out font-sans text-sm font-medium tracking-wide group" to="/repositories">
<span className="material-symbols-outlined mr-3 group-hover:text-primary">inventory_2</span>
                Repositories
            </Link>
{/*  Active Tab: Pull Requests  */}
<Link className="flex items-center px-3 py-2.5 rounded-xl text-blue-700 dark:text-blue-300 font-bold border-r-2 border-blue-600 dark:border-blue-400 bg-white/60 shadow-sm font-sans text-sm tracking-wide" to="/pull-requests">
<span className="material-symbols-outlined mr-3" style={{"fontVariationSettings":"'FILL' 1"}}>merge_type</span>
                Pull Requests
            </Link>
<Link className="flex items-center px-3 py-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-all duration-300 ease-in-out font-sans text-sm font-medium tracking-wide group" to="/insights">
<span className="material-symbols-outlined mr-3 group-hover:text-primary">insights</span>
                Insights
            </Link>
<Link className="flex items-center px-3 py-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-all duration-300 ease-in-out font-sans text-sm font-medium tracking-wide group" to="/reports">
<span className="material-symbols-outlined mr-3 group-hover:text-primary">description</span>
                Reports
            </Link>
</nav>
<div className="pt-6 border-t border-slate-200/50">
<div className="px-3 mb-4">
<p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">AI Agents</p>
</div>
<div className="space-y-1">
<Link className="flex items-center px-3 py-2 text-slate-600 font-sans text-sm font-medium hover:bg-slate-200/50 rounded-lg transition-colors" to="#">
<span className="material-symbols-outlined mr-3 text-xs">smart_toy</span>
                    Repo Agent
                </Link>
<Link className="flex items-center px-3 py-2 text-slate-600 font-sans text-sm font-medium hover:bg-slate-200/50 rounded-lg transition-colors" to="#">
<span className="material-symbols-outlined mr-3 text-xs">security</span>
                    Risk Agent
                </Link>
<Link className="flex items-center px-3 py-2 text-slate-600 font-sans text-sm font-medium hover:bg-slate-200/50 rounded-lg transition-colors" to="#">
<span className="material-symbols-outlined mr-3 text-xs">analytics</span>
                    Report Agent
                </Link>
</div>
</div>
<button className="w-full mt-auto bg-gradient-to-br from-primary to-primary-container text-white py-3 px-4 rounded-xl font-bold text-sm shadow-lg shadow-blue-500/20 active:scale-95 transition-all">
            Run Risk Audit
        </button>
</aside>
{/*  Main Content Canvas  */}
<main className="ml-64 min-h-screen bg-surface">
{/*  TopAppBar Component  */}
<header className="fixed top-0 right-0 left-64 h-16 z-40 glass-header shadow-sm flex justify-between items-center px-8">
<div className="flex items-center">
<h1 className="text-lg font-bold tracking-tighter text-slate-900">Pull Requests</h1>
<div className="ml-4 h-5 w-[1px] bg-outline-variant/30"></div>
<p className="ml-4 text-xs font-medium text-on-surface-variant tracking-wide uppercase">precision-ai / core-engine</p>
</div>
<div className="flex items-center space-y-0 space-x-4">
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
<input className="pl-10 pr-4 py-2 bg-surface-container-low border-none rounded-full text-sm focus:ring-2 focus:ring-primary/20 w-64 transition-all" placeholder="Search PRs..." type="text"/>
</div>
<button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
<span className="material-symbols-outlined">notifications</span>
</button>
<div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-sm">
<img className="w-full h-full object-cover" data-alt="professional portrait of a senior software engineer with short hair and modern glasses in a bright studio" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4e0kh4iqkjyazuwHGwMOkpXH7ZsblIEPmCC-cWvDS2FFcImG1YDGq8BborowimNIbJAZzIUcdwhrKb7fDi47raW0zre5spZyiumq98NGA6m7-_ns0Dog6n5oOU01JJCDNtVpwZ4eczh2y48GifhYwrBhc4GoZZ987WJE8wdKeyI9bMOPtSKlFOyPP0tK7KrDROJ95LPUBzXtr5s4uWZTRWYanAjJ8wjosj9CvTy-dG6kmP08d-RKRJRwCXyGyzwPxUu1otYRXR60"/>
</div>
</div>
</header>
<div className="pt-24 px-8 pb-12 max-w-7xl mx-auto">
{/*  Header Section  */}
<div className="flex justify-between items-end mb-10">
<div className="space-y-1">
<p className="text-sm font-bold text-secondary tracking-widest uppercase">Intelligence Layer</p>
<h2 className="text-4xl font-extrabold tracking-tight text-on-surface leading-tight">Active Pull Requests</h2>
</div>
<button className="group flex items-center gap-2 bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-3 rounded-xl font-bold shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 active:scale-95 transition-all">
<span className="material-symbols-outlined text-xl" style={{"fontVariationSettings":"'FILL' 1"}}>bolt</span>
                    Analyze PR before merge
                </button>
</div>
{/*  Dashboard Grid Layout  */}
<div className="grid grid-cols-12 gap-6">
{/*  Metric Overview (Bento Style)  */}
<div className="col-span-12 lg:col-span-3 space-y-6">
<div className="bg-surface-container-lowest p-6 rounded-xl border-none shadow-sm space-y-4">
<div className="w-10 h-10 bg-error-container/30 rounded-lg flex items-center justify-center text-error">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>warning</span>
</div>
<div>
<p className="text-display-sm font-black text-on-surface tracking-tight">04</p>
<p className="text-sm font-medium text-on-surface-variant">High Risk Blocks</p>
</div>
</div>
<div className="bg-surface-container-lowest p-6 rounded-xl border-none shadow-sm space-y-4">
<div className="w-10 h-10 bg-tertiary-container/30 rounded-lg flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>check_circle</span>
</div>
<div>
<p className="text-display-sm font-black text-on-surface tracking-tight">12</p>
<p className="text-sm font-medium text-on-surface-variant">Safe to Merge</p>
</div>
</div>
<div className="bg-surface-container-low p-6 rounded-xl space-y-4 relative overflow-hidden">
<div className="relative z-10">
<p className="text-xs font-black uppercase tracking-widest text-secondary mb-2">Platform Pulse</p>
<p className="text-sm text-on-surface-variant leading-relaxed">System performance is optimal. AI risk prediction models updated 2m ago.</p>
</div>
<div className="absolute -right-4 -bottom-4 opacity-10">
<span className="material-symbols-outlined text-8xl">psychology</span>
</div>
</div>
</div>
{/*  PR List Section  */}
<div className="col-span-12 lg:col-span-9 space-y-4">
{/*  HIGH RISK PR  */}
<div className="group relative bg-error-container/10 rounded-xl p-1 transition-all duration-300">
{/*  Red border substitute using background shift and thin inner container  */}
<div className="bg-white rounded-[10px] p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
<div className="flex-1 space-y-3">
<div className="flex items-center gap-3">
<span className="px-2 py-0.5 rounded bg-error-container text-[10px] font-bold text-on-error-container border border-error/10 uppercase tracking-tighter">High Risk</span>
<h3 className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors">feat: Implement dynamic route optimization</h3>
</div>
<div className="flex items-center gap-4 text-sm text-on-surface-variant">
<div className="flex items-center gap-2">
<img className="w-5 h-5 rounded-full" data-alt="close up headshot of a developer with a beard and friendly expression in a modern office" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqYaJFR7KIkOuraIKYlBzHKBU66L557aiwc4SB3sCv8-LTAYSoycQjd9syCshL_ra7e6WQO9CA5t1lH97ioaOdCKwxOlewGWSkDEWLc19DIBMuRvLNS-WhQV6APvBSXygeE1JtVVBlopR5m4obtQklal7BNnPC4loOyuNAYcAbMxVtD04xI1idaXJwOvEdiSjnS4qcB_VrHn5GT79v2Unc5vs4qcmNdge8kO70QGEcAFLFXzb3x7iod8QvvVjrAsx63YucG0I5_4U"/>
<span className="font-medium">Marcus Chen</span>
</div>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-sm">description</span>
<span>42 files</span>
</div>
<div className="flex items-center gap-1 text-error font-bold">
<span className="material-symbols-outlined text-sm">report_problem</span>
<span>Complex logic added in Core/Engine</span>
</div>
</div>
</div>
<div className="flex items-center gap-8">
<div className="text-center">
<p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">Score</p>
<p className="text-2xl font-black text-error">92</p>
</div>
<button className="p-3 bg-surface-container-low rounded-lg hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
</div>
{/*  MEDIUM RISK PR  */}
<div className="group bg-surface-container-lowest rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm hover:shadow-md transition-all">
<div className="flex-1 space-y-3">
<div className="flex items-center gap-3">
<span className="px-2 py-0.5 rounded bg-[#F59E0B15] text-[10px] font-bold text-[#F59E0B] border border-[#F59E0B]/20 uppercase tracking-tighter">Medium Risk</span>
<h3 className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors">refactor: Database migration utility</h3>
</div>
<div className="flex items-center gap-4 text-sm text-on-surface-variant">
<div className="flex items-center gap-2">
<img className="w-5 h-5 rounded-full" data-alt="professional portrait of a young woman with a warm smile and dark hair in an urban setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjJcI6_hKfM2wtz1zZLyb_FR3iAbPyHI-b4DFrkmBg2_ktxaRzD_wfLdHwq3lQMZdqvR4bEBmA_PeKGr8D6DJt2xmX25DbP9P8jmgtgtvrKWTA1_Ggl42wV9tqVFvfYeLcmcvGDKf75E-zDBioHgSioMvD0d-AU8_fxLxqcXZW_tRccEuMWQ9qX_LCVJGaKCLQPKNJaIZpqtbiM5qGB2W2AlcZny6SaFOYnL_VWhD6jNJoj3TnPqVGS4v8l3O7MAhJWhxRfASFACk"/>
<span className="font-medium">Sarah Jenkins</span>
</div>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-sm">description</span>
<span>12 files</span>
</div>
<div className="flex items-center gap-1 text-slate-500">
<span className="material-symbols-outlined text-sm">info</span>
<span>Deprecated API usage detected</span>
</div>
</div>
</div>
<div className="flex items-center gap-8">
<div className="text-center">
<p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">Score</p>
<p className="text-2xl font-black text-[#F59E0B]">48</p>
</div>
<button className="p-3 bg-surface-container-low rounded-lg hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
{/*  LOW RISK PR  */}
<div className="group bg-surface-container-lowest rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm hover:shadow-md transition-all">
<div className="flex-1 space-y-3">
<div className="flex items-center gap-3">
<span className="px-2 py-0.5 rounded bg-tertiary-container text-[10px] font-bold text-on-tertiary-container border border-tertiary/10 uppercase tracking-tighter">Low Risk</span>
<h3 className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors">fix: CSS alignment on dashboard tiles</h3>
</div>
<div className="flex items-center gap-4 text-sm text-on-surface-variant">
<div className="flex items-center gap-2">
<img className="w-5 h-5 rounded-full" data-alt="portrait of a young man with a creative look in a bright minimal studio" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKnkDhgopoY8WUxEQi3W39u7673U_Oup3kdlvE4XrxCuUg9nhmvWhFvlMGD-TsYNZOJwTA_o-f0kzt54deAu2G8GfUJtelMJQm-RCARBudd6_PFKHFQX19uTzsAmlQMzco-dYw4ltAAroayqfKZstXLHYJZhSBWxTE1kAkvPmky_0onEZnUpduDSOpTyPz-8nOLAYi5pbtFsRSF9b2obbIBJezNQ5bFXlHnje6cHBqdw1fae0Aoj__K5zqO5GLAPcvR8q_NtQY8cg"/>
<span className="font-medium">Alex Rivera</span>
</div>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-sm">description</span>
<span>2 files</span>
</div>
<div className="flex items-center gap-1 text-tertiary font-medium">
<span className="material-symbols-outlined text-sm" style={{"fontVariationSettings":"'FILL' 1"}}>verified</span>
<span>No security concerns found</span>
</div>
</div>
</div>
<div className="flex items-center gap-8">
<div className="text-center">
<p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">Score</p>
<p className="text-2xl font-black text-tertiary">05</p>
</div>
<button className="p-3 bg-surface-container-low rounded-lg hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
{/*  ANOTHER HIGH RISK PR  */}
<div className="group relative bg-error-container/10 rounded-xl p-1 transition-all duration-300">
<div className="bg-white rounded-[10px] p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
<div className="flex-1 space-y-3">
<div className="flex items-center gap-3">
<span className="px-2 py-0.5 rounded bg-error-container text-[10px] font-bold text-on-error-container border border-error/10 uppercase tracking-tighter">High Risk</span>
<h3 className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors">feat: Third-party auth provider integration</h3>
</div>
<div className="flex items-center gap-4 text-sm text-on-surface-variant">
<div className="flex items-center gap-2">
<img className="w-5 h-5 rounded-full" data-alt="professional portrait of a man in a white shirt with a clean minimalist background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7p9OUo4_hzyqZ3JZh0HpAY4nH2PSrINdwIEvOcRzajAnhduu1jefoqcM-i35GgzIBohACFWKVSpYsVVUGP7D-dnebB7FqCyuHicFGYFAXQsZLMUiY8atlo7I3VVnhHtzfhwkgCYXQznQpLQvoZovpYi6aAzI7DVBt_J91U0QwzpTWw_sLRPw4hU7ttPECy6g9RVCX9Z1Mcc8sZDy0Dc-WumJrSweP8k4WNULnajDQ36IsTahvEyF2Dj6xKxYwT6e4PjxZ2Myfu10"/>
<span className="font-medium">David Miller</span>
</div>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-sm">description</span>
<span>28 files</span>
</div>
<div className="flex items-center gap-1 text-error font-bold">
<span className="material-symbols-outlined text-sm">report_problem</span>
<span>Insecure data handling in AuthController</span>
</div>
</div>
</div>
<div className="flex items-center gap-8">
<div className="text-center">
<p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">Score</p>
<p className="text-2xl font-black text-error">85</p>
</div>
<button className="p-3 bg-surface-container-low rounded-lg hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
{/*  Contextual FAB - Restricted to Dashboard/Home only per shell rules, but including here for page focus if required. Given shell suppression rule, we omit global shells for task focus, but PR page is a top-level destination.  */}
<button className="md:hidden fixed bottom-6 right-6 w-14 h-14 bg-primary rounded-full shadow-2xl flex items-center justify-center text-white z-50">
<span className="material-symbols-outlined">add</span>
</button>

    </div>
  );
}
