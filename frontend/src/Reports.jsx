import React from 'react';
import { Link } from 'react-router-dom';

export default function Reports() {
  return (
    <div className="bg-surface text-on-surface min-h-screen">

{/*  SideNavBar (Authority: JSON)  */}
<aside className="fixed left-0 h-screen w-64 z-50 bg-slate-50 dark:bg-slate-950 flex flex-col py-8 px-4 space-y-6">
<div className="flex items-center space-x-3 px-2">
<div className="w-10 h-10 primary-gradient rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
<span className="material-symbols-outlined">analytics</span>
</div>
<div>
<h1 className="text-xl font-black tracking-tighter text-slate-900 dark:text-white">GitMax</h1>
<p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold opacity-60">Risk Intelligence</p>
</div>
</div>
<nav className="flex-1 space-y-1">
<Link className="flex items-center space-x-3 p-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 transition-all duration-300" to="/">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-medium text-sm tracking-wide">Dashboard</span>
</Link>
<Link className="flex items-center space-x-3 p-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 transition-all duration-300" to="/repositories">
<span className="material-symbols-outlined">inventory_2</span>
<span className="font-medium text-sm tracking-wide">Repositories</span>
</Link>
<Link className="flex items-center space-x-3 p-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 transition-all duration-300" to="/pull-requests">
<span className="material-symbols-outlined">merge_type</span>
<span className="font-medium text-sm tracking-wide">Pull Requests</span>
</Link>
<Link className="flex items-center space-x-3 p-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 transition-all duration-300" to="/insights">
<span className="material-symbols-outlined">insights</span>
<span className="font-medium text-sm tracking-wide">Insights</span>
</Link>
<Link className="flex items-center space-x-3 p-3 rounded-xl text-blue-700 dark:text-blue-300 font-bold border-r-2 border-blue-600 bg-blue-50/50" to="/reports">
<span className="material-symbols-outlined">description</span>
<span className="font-medium text-sm tracking-wide">Reports</span>
</Link>
</nav>
<div className="pt-6 border-t border-slate-200/50">
<p className="px-3 mb-2 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/50">Intelligence Agents</p>
<div className="space-y-1">
<div className="flex items-center space-x-3 p-3 rounded-xl text-slate-600 hover:bg-slate-200/50 cursor-pointer transition-all">
<span className="material-symbols-outlined">smart_toy</span>
<span className="text-xs font-semibold">Repo Agent</span>
</div>
<div className="flex items-center space-x-3 p-3 rounded-xl text-slate-600 hover:bg-slate-200/50 cursor-pointer transition-all">
<span className="material-symbols-outlined">security</span>
<span className="text-xs font-semibold">Risk Agent</span>
</div>
<div className="flex items-center space-x-3 p-3 rounded-xl text-slate-600 hover:bg-slate-200/50 cursor-pointer transition-all">
<span className="material-symbols-outlined">analytics</span>
<span className="text-xs font-semibold">Report Agent</span>
</div>
</div>
</div>
<button className="w-full primary-gradient text-white py-3 px-4 rounded-xl font-bold text-sm shadow-xl shadow-blue-600/20 active:scale-95 transition-all">
            Run Risk Audit
        </button>
</aside>
{/*  Main Content Canvas  */}
<main className="ml-64 min-h-screen bg-surface">
{/*  TopNavBar (Authority: JSON)  */}
<header className="fixed top-0 right-0 left-64 h-16 glass-header bg-white/80 z-40 px-8 flex justify-between items-center shadow-sm">
<div className="flex items-center space-x-4">
<h2 className="text-lg font-bold tracking-tighter text-slate-900">The Precision Editorial</h2>
</div>
<div className="flex items-center space-x-6">
<div className="flex space-x-4 text-slate-500">
<button className="hover:bg-slate-100/50 p-2 rounded-full transition-colors active:scale-95">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="hover:bg-slate-100/50 p-2 rounded-full transition-colors active:scale-95">
<span className="material-symbols-outlined">settings</span>
</button>
</div>
<div className="h-8 w-8 rounded-full overflow-hidden border-2 border-primary-fixed">
<img alt="User profile" className="w-full h-full object-cover" data-alt="professional corporate headshot of a middle-aged male executive in a neutral grey suit with soft studio lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDju6WBSHRqWozBm1sS4KcvbDiZkEcReRERE2XBpkiay7Zw-xzhy_MbhYwiKbmDSAenIzjlhY37cYoUsttZg9YBQOAscCSGrnWv8WClj6XgIvwPSAI-7-Rk1i_oE54cbVde3Az4pExlv_lHe_3zva3ylix_Z9Uux169XYXxURcWmu70xv55k44Ccn5IzbiRt0RDltkYYzTuyS1lu8YHyvDJJzmwmwkFo3RDgUN0hXyBBEkBcOsZ_O8A_DCixAUN-0nbHeo5rZqa--I"/>
</div>
</div>
</header>
<div className="pt-24 px-12 pb-16 max-w-7xl mx-auto">
{/*  Header Section  */}
<div className="flex justify-between items-end mb-12">
<div>
<span className="text-secondary font-bold text-xs tracking-[0.2em] uppercase mb-2 block">Monthly Intelligence Overview</span>
<h1 className="text-4xl font-extrabold tracking-tight text-on-surface mb-2">Executive Risk Report</h1>
<p className="text-on-surface-variant text-lg max-w-2xl">A curated analysis of structural risk, business impact projections, and prioritized mitigation strategies for the Q3 development cycle.</p>
</div>
<div className="flex space-x-3 mb-1">
<button className="flex items-center space-x-2 px-5 py-2.5 rounded-xl border border-outline-variant/30 bg-surface-container-lowest text-on-surface font-semibold text-sm hover:bg-surface-container-low transition-all">
<span className="material-symbols-outlined text-[20px]">ios_share</span>
<span>Share Report</span>
</button>
<button className="flex items-center space-x-2 px-5 py-2.5 rounded-xl primary-gradient text-white font-bold text-sm shadow-lg shadow-blue-500/20 active:scale-95 transition-all">
<span className="material-symbols-outlined text-[20px]">download</span>
<span>Download PDF</span>
</button>
</div>
</div>
{/*  Summary Bento Grid  */}
<section className="grid grid-cols-12 gap-6 mb-12">
{/*  Main Health Score  */}
<div className="col-span-12 lg:col-span-5 bg-surface-container-lowest p-8 rounded-xl flex flex-col justify-between relative overflow-hidden shadow-sm">
<div className="relative z-10">
<h3 className="text-on-surface-variant font-bold text-xs tracking-widest uppercase mb-6">System Health Score</h3>
<div className="flex items-baseline space-x-4">
<span className="text-7xl font-black tracking-tighter text-on-surface">84</span>
<div className="flex flex-col">
<span className="text-tertiary font-bold text-sm flex items-center">
<span className="material-symbols-outlined text-[16px] mr-1">trending_up</span>
                                    +4.2%
                                </span>
<span className="text-on-surface-variant text-xs font-medium">vs last month</span>
</div>
</div>
</div>
<div className="mt-8 relative z-10">
<div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden">
<div className="h-full primary-gradient w-[84%]"></div>
</div>
<p className="mt-4 text-sm text-on-surface-variant leading-relaxed">System reliability is currently <strong className="text-on-surface">Stable</strong>. Predicted risk vectors are trending downward following the recent refactor of the payment gateway.</p>
</div>
{/*  Decorative Background Graphic  */}
<div className="absolute -right-4 -bottom-4 w-48 h-48 opacity-[0.03]">
<span className="material-symbols-outlined text-[192px]">verified_user</span>
</div>
</div>
{/*  Business Impact Cards  */}
<div className="col-span-12 md:col-span-6 lg:col-span-3 bg-tertiary-container/10 p-8 rounded-xl border border-tertiary-container/5 shadow-sm">
<div className="flex flex-col h-full justify-between">
<div>
<span className="text-tertiary font-bold text-[10px] tracking-widest uppercase mb-4 block">Risk of Downtime</span>
<h4 className="text-3xl font-bold text-on-tertiary-container tracking-tight">1.2% <span className="text-sm font-medium opacity-60">Prob.</span></h4>
</div>
<div className="mt-6">
<p className="text-xs text-on-tertiary-container font-medium leading-relaxed">Estimated business loss in event of failure: <strong>$14,200/hr</strong></p>
</div>
</div>
</div>
<div className="col-span-12 md:col-span-6 lg:col-span-4 bg-error-container/20 p-8 rounded-xl border border-error-container/10 shadow-sm">
<div className="flex flex-col h-full justify-between">
<div>
<span className="text-error font-bold text-[10px] tracking-widest uppercase mb-4 block">Critical Bug Probability</span>
<h4 className="text-3xl font-bold text-on-error-container tracking-tight">24% <span className="text-sm font-medium opacity-60">Prob.</span></h4>
</div>
<div className="mt-6 flex items-center space-x-3">
<div className="flex-1 h-1.5 bg-error-container/30 rounded-full overflow-hidden">
<div className="h-full bg-error w-[24%]"></div>
</div>
<span className="text-xs font-bold text-on-error-container">Elevated</span>
</div>
</div>
</div>
</section>
{/*  Top Risks Section  */}
<section className="mb-12">
<div className="flex items-center space-x-3 mb-6">
<span className="material-symbols-outlined text-secondary">warning</span>
<h3 className="text-xl font-bold tracking-tight">Top Strategic Risks</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{/*  Risk Item 1  */}
<div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border-l-4 border-error">
<div className="flex justify-between items-start mb-4">
<span className="bg-error-container text-on-error-container px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider border border-error/10">High Risk</span>
<span className="text-on-surface-variant font-medium text-xs">Auth Engine</span>
</div>
<h4 className="font-bold text-on-surface mb-2">Legacy Authentication Fragility</h4>
<p className="text-sm text-on-surface-variant leading-relaxed">The v2.1 auth module exhibits high complexity and tight coupling, increasing the chance of service denial during high-load periods.</p>
</div>
{/*  Risk Item 2  */}
<div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border-l-4 border-[#F59E0B]">
<div className="flex justify-between items-start mb-4">
<span className="bg-[#F59E0B]/15 text-[#F59E0B] px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider border border-[#F59E0B]/20">Medium Risk</span>
<span className="text-on-surface-variant font-medium text-xs">Checkout Flow</span>
</div>
<h4 className="font-bold text-on-surface mb-2">Stripe API Dependency Lag</h4>
<p className="text-sm text-on-surface-variant leading-relaxed">Inconsistent handling of asynchronous webhook responses may lead to 0.5% transaction drop-offs under peak traffic.</p>
</div>
{/*  Risk Item 3  */}
<div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border-l-4 border-tertiary">
<div className="flex justify-between items-start mb-4">
<span className="bg-tertiary-container text-on-tertiary-container px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider border border-tertiary/10">Low Risk</span>
<span className="text-on-surface-variant font-medium text-xs">Reporting UI</span>
</div>
<h4 className="font-bold text-on-surface mb-2">PDF Generation Latency</h4>
<p className="text-sm text-on-surface-variant leading-relaxed">Server-side rendering for large reports is approaching the 3s timeout limit. User experience impact is minimal but growing.</p>
</div>
</div>
</section>
{/*  Impact & Actions Asymmetric Layout  */}
<div className="grid grid-cols-12 gap-8">
{/*  Recommended Actions  */}
<div className="col-span-12 lg:col-span-7">
<div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm">
<div className="p-8 border-b border-surface-container-low flex justify-between items-center">
<h3 className="text-xl font-bold tracking-tight">Recommended Actions</h3>
<span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">Priority Sequence</span>
</div>
<div className="p-8 space-y-6">
<div className="flex items-start space-x-4">
<div className="w-8 h-8 rounded-full bg-slate-100 flex-shrink-0 flex items-center justify-center font-bold text-slate-500">1</div>
<div>
<h5 className="font-bold text-on-surface">Initiate Auth Refactor Sprint</h5>
<p className="text-sm text-on-surface-variant mt-1">Allocate 40% of the engineering capacity in next sprint to decouple the auth module. Focus on implementing circuit breakers.</p>
</div>
</div>
<div className="flex items-start space-x-4">
<div className="w-8 h-8 rounded-full bg-slate-100 flex-shrink-0 flex items-center justify-center font-bold text-slate-500">2</div>
<div>
<h5 className="font-bold text-on-surface">Standardize Webhook Handling</h5>
<p className="text-sm text-on-surface-variant mt-1">Upgrade to idempotent request handling for all third-party payment integrations to prevent transaction slippage.</p>
</div>
</div>
<div className="flex items-start space-x-4">
<div className="w-8 h-8 rounded-full bg-slate-100 flex-shrink-0 flex items-center justify-center font-bold text-slate-500">3</div>
<div>
<h5 className="font-bold text-on-surface">Infrastructure Scaling Audit</h5>
<p className="text-sm text-on-surface-variant mt-1">Conduct a load test for the reporting engine to determine if horizontal scaling or a transition to async worker queues is required.</p>
</div>
</div>
</div>
</div>
</div>
{/*  Business Impact Detail  */}
<div className="col-span-12 lg:col-span-5 flex flex-col space-y-6">
<div className="bg-primary text-white p-8 rounded-xl shadow-xl shadow-blue-900/10 primary-gradient relative overflow-hidden">
<h3 className="text-sm font-bold tracking-widest uppercase mb-6 opacity-80">Economic Projection</h3>
<p className="text-2xl font-medium leading-tight mb-8">Implementing these actions is projected to reduce potential revenue loss by <span className="font-black">$240,000</span> annually.</p>
<div className="flex items-center space-x-2">
<span className="material-symbols-outlined">trending_down</span>
<span className="text-sm font-bold">62% Reduction in Structural Risk</span>
</div>
<div className="absolute right-0 bottom-0 opacity-10 translate-x-1/4 translate-y-1/4">
<span className="material-symbols-outlined text-[200px]">monetization_on</span>
</div>
</div>
<div className="bg-surface-container-high/50 p-8 rounded-xl border border-outline-variant/10">
<h4 className="font-bold text-on-surface mb-4">Risk Distribution</h4>
<div className="space-y-4">
<div className="flex justify-between items-center text-xs">
<span className="text-on-surface-variant font-medium">Security</span>
<span className="font-bold text-on-surface">12%</span>
</div>
<div className="w-full h-1.5 bg-surface-container-highest rounded-full">
<div className="h-full bg-secondary w-[12%]"></div>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-on-surface-variant font-medium">Stability</span>
<span className="font-bold text-on-surface">64%</span>
</div>
<div className="w-full h-1.5 bg-surface-container-highest rounded-full">
<div className="h-full bg-primary w-[64%]"></div>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-on-surface-variant font-medium">Compliance</span>
<span className="font-bold text-on-surface">24%</span>
</div>
<div className="w-full h-1.5 bg-surface-container-highest rounded-full">
<div className="h-full bg-tertiary w-[24%]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

    </div>
  );
}
