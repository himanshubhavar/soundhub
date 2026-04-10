import React from 'react';
import { Link } from 'react-router-dom';

export default function Insights() {
  return (
    <div className="bg-surface text-on-surface min-h-screen">



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
<main className="ml-64 min-h-screen">
{/*  Navigation (Shared Component Style - Adapted for Full Width & Design System)  */}
<header className="fixed top-0 right-0 left-64 z-40 bg-white/80 backdrop-blur-xl h-16 flex justify-between items-center px-8 shadow-sm">
            <div className="flex items-center gap-4">
                <span className="text-lg font-bold tracking-tighter text-slate-900">GitMax</span>
                <div className="h-4 w-px bg-slate-200 mx-2"></div>
                <h2 className="text-on-surface font-semibold tracking-tight">AI Insights</h2>
            </div>
            <div className="flex items-center gap-4">
                <div className="relative group">
                    <span className="material-symbols-outlined text-slate-500 hover:bg-slate-100/50 p-2 rounded-full transition-colors cursor-pointer">notifications</span>
                    <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border-2 border-white"></span>
                </div>
                <span className="material-symbols-outlined text-slate-500 hover:bg-slate-100/50 p-2 rounded-full transition-colors cursor-pointer">settings</span>
                <div className="ml-2 w-8 h-8 rounded-full bg-surface-container-high overflow-hidden border border-outline-variant/20">
                    <img alt="User profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0vl_3xPwHdM2qm29JinSh0kxSm1LhNBocQpGmqSHEapWKMBY1S15GD1r31PvKNOxey-ciZK-8FfvwPQMNAhKtJUEmSxa8RIBkqEqGm7XKwMLvyh-6mtdhJFp1c3VzD7fR2q0SGPaHZf6tAGEYCObXeYFzW5uJRYM2bYbxK6oyqCpRdQUypMKBuUqhI5tqtw2uSyH2nwnV7wbUIf0mvecB4KOEG3FZTU-RWW2PyjexG8qFvWmuzZGNOTYZrV6NsADuCIbVbvAo4jM" />
                </div>
            </div>
        </header>
{/*  Main Content Area  */}
<div className="w-full pt-28 px-8 pb-12 max-w-7xl mx-auto space-y-8">
{/*  Page Header & Tabs  */}
<div className="flex flex-col gap-8">
<div className="flex justify-between items-end pl-2">
<div>
<h1 className="text-on-surface text-4xl font-bold display-lg mb-2">Insights</h1>
<p className="text-on-surface-variant text-lg">Platform health and risk analysis for 'core-api'</p>
</div>
<button className="primary-btn px-6 py-2.5 rounded-md font-semibold text-sm flex items-center gap-2">
<span className="material-symbols-outlined text-[20px]" data-icon="download">download</span>
        Export Report
      </button>
</div>
{/*  Custom Tabs (No Lines)  */}
<div className="flex gap-2 p-1 bg-surface-container-low rounded-xl w-fit">
<Link className="px-5 py-2.5 rounded-lg text-on-surface-variant text-sm font-semibold hover:bg-surface-container-high transition-colors" to="#">Health Overview</Link>
<Link className="px-5 py-2.5 rounded-lg text-on-surface-variant text-sm font-semibold hover:bg-surface-container-high transition-colors" to="#">Risk Signals</Link>
<Link className="px-5 py-2.5 rounded-lg text-on-surface-variant text-sm font-semibold hover:bg-surface-container-high transition-colors" to="/insights">Bug Insights</Link>
<Link className="px-5 py-2.5 rounded-lg bg-surface-container-lowest text-primary shadow-sm text-sm font-semibold" to="#">Test Coverage</Link>
<Link className="px-5 py-2.5 rounded-lg text-on-surface-variant text-sm font-semibold hover:bg-surface-container-high transition-colors" to="#">Deployment Metrics</Link>
</div>
</div>
{/*  Active Tab Content: Test Coverage  */}
<div className="flex flex-col gap-8">
{/*  Key Metrics Row  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-surface-container-lowest rounded-xl p-6 shadow-[0_4px_20px_rgba(22,28,34,0.02)] flex flex-col gap-2">
<div className="flex justify-between items-start">
<p className="text-on-surface-variant text-sm font-medium tracking-wide uppercase">Overall Coverage</p>
<span className="material-symbols-outlined text-primary" data-icon="data_usage">data_usage</span>
</div>
<p className="text-on-surface text-4xl font-bold display-lg mt-2">92.4%</p>
<div className="flex items-center gap-2 mt-1">
<span className="material-symbols-outlined text-tertiary-container text-[16px]" data-icon="trending_up">trending_up</span>
<p className="text-tertiary-container text-sm font-semibold">+2.4% vs last week</p>
</div>
</div>
<div className="bg-surface-container-lowest rounded-xl p-6 shadow-[0_4px_20px_rgba(22,28,34,0.02)] flex flex-col gap-2">
<div className="flex justify-between items-start">
<p className="text-on-surface-variant text-sm font-medium tracking-wide uppercase">Files Covered</p>
<span className="material-symbols-outlined text-on-surface-variant" data-icon="description">description</span>
</div>
<p className="text-on-surface text-4xl font-bold display-lg mt-2">1,204</p>
<div className="flex items-center gap-2 mt-1">
<span className="material-symbols-outlined text-tertiary-container text-[16px]" data-icon="trending_up">trending_up</span>
<p className="text-tertiary-container text-sm font-semibold">+15 new files tested</p>
</div>
</div>
<div className="bg-surface-container-lowest rounded-xl p-6 shadow-[0_4px_20px_rgba(22,28,34,0.02)] flex flex-col gap-2">
<div className="flex justify-between items-start">
<p className="text-on-surface-variant text-sm font-medium tracking-wide uppercase">Critical Paths</p>
<span className="material-symbols-outlined text-error" data-icon="route">route</span>
</div>
<p className="text-on-surface text-4xl font-bold display-lg mt-2">88.0%</p>
<div className="flex items-center gap-2 mt-1">
<span className="material-symbols-outlined text-error text-[16px]" data-icon="trending_down">trending_down</span>
<p className="text-error text-sm font-semibold">-1.2% regression detected</p>
</div>
</div>
</div>
{/*  Main Chart Section  */}
<div className="bg-surface-container-lowest rounded-xl p-8 shadow-[0_4px_20px_rgba(22,28,34,0.02)] flex flex-col gap-6">
<div className="flex justify-between items-center">
<div>
<h3 className="text-on-surface text-xl font-bold">Coverage Trend Over Time</h3>
<p className="text-on-surface-variant text-sm mt-1">30-day historical analysis of branch and statement coverage.</p>
</div>
<div className="flex gap-2">
<button className="px-4 py-2 bg-surface-container-low text-on-surface-variant rounded-md text-sm font-medium hover:bg-surface-variant transition-colors">7D</button>
<button className="px-4 py-2 bg-primary text-on-primary rounded-md text-sm font-medium">30D</button>
<button className="px-4 py-2 bg-surface-container-low text-on-surface-variant rounded-md text-sm font-medium hover:bg-surface-variant transition-colors">90D</button>
</div>
</div>
{/*  Chart Visualization Area (Simplified SVG representation)  */}
<div className="w-full h-[300px] mt-4 relative bg-surface-container-low/30 rounded-lg p-4 flex flex-col justify-end">
{/*  Y-axis labels  */}
<div className="absolute left-4 top-4 bottom-8 flex flex-col justify-between text-xs text-on-surface-variant font-medium">
<span>100%</span>
<span>90%</span>
<span>80%</span>
<span>70%</span>
</div>
{/*  Grid lines  */}
<div className="absolute inset-0 top-4 bottom-8 left-12 right-4 flex flex-col justify-between z-0">
<div className="border-b border-surface-dim/30 w-full"></div>
<div className="border-b border-surface-dim/30 w-full"></div>
<div className="border-b border-surface-dim/30 w-full"></div>
<div className="border-b border-surface-dim/30 w-full"></div>
</div>
{/*  The Area Chart  */}
<div className="absolute inset-0 top-4 bottom-8 left-12 right-4 z-10 overflow-hidden">
<svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 250">
<defs>
<linearGradient id="coverageGradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stopColor="theme('colors.primary')" stopOpacity="0.2"></stop>
<stop offset="100%" stopColor="theme('colors.primary')" stopOpacity="0"></stop>
</linearGradient>
</defs>
<path d="M0,200 L100,180 L200,190 L300,150 L400,160 L500,120 L600,110 L700,90 L800,95 L900,50 L1000,40 V250 H0 Z" fill="url(#coverageGradient)"></path>
<path d="M0,200 L100,180 L200,190 L300,150 L400,160 L500,120 L600,110 L700,90 L800,95 L900,50 L1000,40" fill="none" stroke="theme('colors.primary')" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
</svg>
</div>
{/*  X-axis labels  */}
<div className="w-full flex justify-between pl-8 pr-2 mt-4 text-xs text-on-surface-variant font-medium z-20">
<span>Oct 1</span>
<span>Oct 8</span>
<span>Oct 15</span>
<span>Oct 22</span>
<span>Oct 29</span>
</div>
</div>
</div>
{/*  Highlighted Problem Areas  */}
<div className="flex flex-col gap-6">
<h2 className="text-on-surface text-2xl font-bold display-sm pl-2">Highlighted Problem Areas</h2>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
{/*  Card 1  */}
<div className="bg-surface-container-lowest rounded-xl p-6 shadow-[0_4px_20px_rgba(22,28,34,0.02)] flex gap-4 items-start hover:bg-surface-container-low transition-colors duration-300">
<div className="p-3 bg-error-container/30 rounded-lg text-error">
<span className="material-symbols-outlined" data-icon="warning">warning</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-start mb-2">
<h4 className="text-on-surface font-semibold text-lg">Authentication Module</h4>
<span className="risk-badge-high px-2 py-1 rounded-md text-xs font-bold uppercase tracking-wider">High Risk</span>
</div>
<p className="text-on-surface-variant text-sm mb-4 leading-relaxed">The <code className="bg-surface-container px-1 py-0.5 rounded text-secondary font-mono text-xs">auth.service.ts</code> module lacks sufficient unit tests, particularly around the OAuth callback handlers. Coverage dropped below 60%.</p>
<div className="flex justify-between items-center">
<span className="text-xs text-on-surface-variant font-medium">Assignee: Unassigned</span>
<button className="text-primary text-sm font-semibold hover:underline">View File Detail →</button>
</div>
</div>
</div>
{/*  Card 2  */}
<div className="bg-surface-container-lowest rounded-xl p-6 shadow-[0_4px_20px_rgba(22,28,34,0.02)] flex gap-4 items-start hover:bg-surface-container-low transition-colors duration-300">
<div className="p-3 bg-[rgba(245,158,11,0.1)] rounded-lg text-[#F59E0B]">
<span className="material-symbols-outlined" data-icon="bug_report">bug_report</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-start mb-2">
<h4 className="text-on-surface font-semibold text-lg">Payment Gateway</h4>
<span className="risk-badge-medium px-2 py-1 rounded-md text-xs font-bold uppercase tracking-wider">Medium Risk</span>
</div>
<p className="text-on-surface-variant text-sm mb-4 leading-relaxed">Integration tests are failing intermittently for Stripe webhook processing. This path is marked as critical but lacks reliable test assertions.</p>
<div className="flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="size-5 rounded-full bg-surface-dim" data-alt="Small circular avatar of a man with short hair smiling" style={{"backgroundImage":"url('https://lh3.googleusercontent.com/aida-public/AB6AXuC14Yz-liMqCQLnXmfghvY2WDUMIpP8DU4scQs7qHGsKNDvEDvZJPZqt-Y2u44sCBXiqn9r9u8YKkQy4kOmsipMLycFSbqaIiNpk_pTFDeS1ayRvz28cEMcgrriJXuvho8MLb-q98lPcDrfhNTE1DnuFyBs8UjjVR-zMMHbzb9x7fnlwKteD2yzUqVpyt36Nt5UPXtHB6BxzK0tLl0zF574j5_I_MoXaVZuagdFlsiXoTm1XOLJqMmdjuHyLgJkQtHp5ANixNASpfs')","backgroundSize":"cover"}}></div>
<span className="text-xs text-on-surface-variant font-medium">J. Smith</span>
</div>
<button className="text-primary text-sm font-semibold hover:underline">View Pipeline →</button>
</div>
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
