import React from 'react';
import { Download, Flame } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      <header className="p-4 border-b border-slate-800 bg-slate-900 flex justify-between items-center">
        <h1 className="text-2xl font-black text-amber-400">99GAME</h1>
        <button className="px-4 py-2 bg-rose-600 rounded-lg font-bold">Register</button>
      </header>
      <main className="text-center py-20 px-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-500/10 text-rose-400 text-sm mb-4">
          <Flame className="w-4 h-4" />
          <span>India's Most Popular Real Cash Gaming Platform</span>
        </div>
        <h2 className="text-5xl font-black text-white">Play & Win Real Cash on <span className="text-amber-400">99GAME</span></h2>
        <p className="text-slate-400 mt-4">Instant UPI Withdrawal | ₹999 Welcome Bonus</p>
        <button className="mt-8 px-8 py-4 bg-gradient-to-r from-amber-500 to-rose-600 font-black rounded-xl text-lg text-white flex items-center justify-center space-x-2 mx-auto">
          <Download className="w-5 h-5" />
          <span>DOWNLOAD APK</span>
        </button>
      </main>
    </div>
  );
}