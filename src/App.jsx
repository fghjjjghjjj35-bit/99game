import React, { useState } from 'react';
import { 
  Download, ShieldCheck, Zap, Headphones, Sparkles, Trophy, 
  ChevronDown, ChevronUp, Flame, Gift, Star, Gamepad2, Users, CreditCard
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('hot');
  const [openFaq, setOpenFaq] = useState(null);

  // 1. 热门游戏列表 (参照 AAGAME 主流玩法)
  const games = [
    { id: 1, name: '99 Color Prediction', category: 'hot', tag: 'HOT', color: 'from-purple-600 to-indigo-800', winRate: '98.5%' },
    { id: 2, name: 'Aviator Crash', category: 'hot', tag: 'TRENDING', color: 'from-red-600 to-rose-900', winRate: '97.8%' },
    { id: 3, name: 'Teen Patti Master', category: 'cards', tag: 'CLASSIC', color: 'from-amber-600 to-yellow-800', winRate: '96.2%' },
    { id: 4, name: 'Rummy 777', category: 'cards', tag: 'POPULAR', color: 'from-emerald-600 to-teal-900', winRate: '95.9%' },
    { id: 5, name: 'Wingo 1 Min', category: 'color', tag: 'FAST', color: 'from-blue-600 to-cyan-800', winRate: '99.1%' },
    { id: 6, name: 'Dragon vs Tiger', category: 'hot', tag: 'HIGH PAY', color: 'from-orange-600 to-red-800', winRate: '96.8%' },
    { id: 7, name: '7 Up 7 Down', category: 'slots', tag: 'EASY WIN', color: 'from-pink-600 to-rose-800', winRate: '97.3%' },
    { id: 8, name: 'Car Roulette', category: 'slots', tag: '100X', color: 'from-indigo-600 to-purple-900', winRate: '94.5%' },
  ];

  // 2. 提现风云榜数据
  const withdrawLogs = [
    { phone: '98***210', amount: '₹12,500', method: 'UPI/Paytm', time: '1 min ago' },
    { phone: '87***983', amount: '₹45,000', method: 'PhonePe', time: '3 mins ago' },
    { phone: '70***441', amount: '₹8,200', method: 'GPay', time: '5 mins ago' },
    { phone: '91***012', amount: '₹100,000', method: 'Bank Transfer', time: '7 mins ago' },
  ];

  // 3. FAQ 折叠数据
  const faqs = [
    { q: 'How to register an account on 99GAME?', a: 'Click the "Register" button, enter your 10-digit mobile number, create a password, and verify via SMS OTP to claim your ₹999 welcome bonus instantly.' },
    { q: 'Is 99GAME safe and legal in India?', a: 'Yes! 99GAME operates under certified RNG gaming regulations with 256-bit SSL encryption, ensuring 100% fair play and data security.' },
    { q: 'How fast is the withdrawal process?', a: 'Withdrawals via UPI, Paytm, PhonePe, or Bank Transfer are automated and processed within 1 to 5 minutes 24/7.' },
    { q: 'What is the minimum deposit and withdrawal limit?', a: 'The minimum deposit is ₹100, and the minimum withdrawal limit is ₹110.' }
  ];

  const filteredGames = activeTab === 'all' 
    ? games 
    : games.filter(g => activeTab === 'hot' ? (g.category === 'hot' || g.tag === 'HOT') : g.category === activeTab);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-20 md:pb-0">
      
      {/* 跑马灯顶部通知 */}
      <div className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 text-slate-950 text-xs font-bold py-1.5 px-4 flex items-center justify-between overflow-hidden">
        <div className="flex items-center space-x-2 animate-pulse whitespace-nowrap">
          <Sparkles className="w-4 h-4" />
          <span>Notice: ₹999 Welcome Bonus for all new registered users today! Instant UPI Withdrawals 24/7.</span>
        </div>
      </div>

      {/* 导航栏 Header */}
      <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-4 py-3 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="bg-gradient-to-tr from-amber-500 to-yellow-300 p-2 rounded-xl text-slate-950 font-black text-xl tracking-wider shadow-lg shadow-amber-500/20">
            99GAME
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-amber-400 font-bold text-sm rounded-lg border border-amber-500/30 transition">
            Login
          </button>
          <button className="px-5 py-2 bg-gradient-to-r from-amber-500 to-rose-600 text-white font-bold text-sm rounded-lg shadow-md hover:brightness-110 transition">
            Register
          </button>
        </div>
      </header>

      {/* Hero 核心视觉区 */}
      <section className="relative overflow-hidden py-12 px-4 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs md:text-sm font-semibold mb-6">
            <Flame className="w-4 h-4 text-rose-500 fill-rose-500" />
            <span>Official India #1 Gaming Platform</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">
            Play & Win Real Cash on <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
              99GAME ONLINE
            </span>
          </h1>

          <p className="text-slate-400 mt-4 text-sm md:text-lg max-w-2xl mx-auto">
            Enjoy Color Prediction, Aviator, Teen Patti & Slots. 60-second instant UPI withdrawals with 100% payout guarantee.
          </p>

          {/* 转化大按钮与活动卡 */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 via-rose-600 to-amber-500 bg-size-200 hover:bg-right font-black rounded-xl text-lg text-white shadow-xl shadow-rose-600/20 flex items-center justify-center space-x-3 transition-all transform hover:-translate-y-0.5">
              <Download className="w-6 h-6 animate-bounce" />
              <span>DOWNLOAD OFFICIAL APK (v4.2)</span>
            </button>
          </div>

          {/* 数据展示 */}
          <div className="grid grid-cols-3 gap-2 md:gap-4 mt-12 bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
            <div>
              <div className="text-amber-400 text-lg md:text-2xl font-black">₹9,850,000+</div>
              <div className="text-slate-500 text-xs md:text-sm">Daily Payouts</div>
            </div>
            <div className="border-x border-slate-800">
              <div className="text-emerald-400 text-lg md:text-2xl font-black">100% Instant</div>
              <div className="text-slate-500 text-xs md:text-sm">UPI Withdrawal</div>
            </div>
            <div>
              <div className="text-rose-400 text-lg md:text-2xl font-black">2.5M+</div>
              <div className="text-slate-500 text-xs md:text-sm">Active Players</div>
            </div>
          </div>

        </div>
      </section>

      {/* 游戏大厅 Tabs & Grid */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
            <Gamepad2 className="text-amber-400" />
            <span>Popular Games</span>
          </h2>
        </div>

        {/* 分类 Tabs */}
        <div className="flex space-x-2 overflow-x-auto pb-4 scrollbar-none mb-6">
          {[
            { id: 'hot', label: '🔥 Hot Games' },
            { id: 'color', label: '🎨 Color Prediction' },
            { id: 'cards', label: '🃏 Cards & Rummy' },
            { id: 'slots', label: '🎰 Slots & Casino' },
            { id: 'all', label: '⚡ All Games' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-amber-500 to-rose-600 text-white shadow-lg'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 游戏网格 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filteredGames.map(game => (
            <div 
              key={game.id} 
              className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-500/50 transition duration-300 hover:shadow-xl hover:shadow-amber-500/10 cursor-pointer"
            >
              <div className={`h-32 md:h-40 bg-gradient-to-br ${game.color} p-4 flex flex-col justify-between relative`}>
                <span className="self-start bg-slate-950/80 text-amber-400 text-[10px] font-black px-2 py-0.5 rounded-full border border-amber-500/30">
                  {game.tag}
                </span>
                <div className="text-white font-black text-lg md:text-xl drop-shadow-md">
                  {game.name}
                </div>
              </div>
              <div className="p-3 bg-slate-900 flex justify-between items-center text-xs">
                <span className="text-slate-400">Win Rate: <strong className="text-emerald-400">{game.winRate}</strong></span>
                <span className="px-2 py-1 bg-amber-500/10 text-amber-400 font-bold rounded">PLAY</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 实时提现风云榜 */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
            <Trophy className="text-yellow-400" />
            <span>Real-time Withdrawal Records</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {withdrawLogs.map((log, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-slate-950 rounded-xl border border-slate-800/60">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <div className="text-xs text-slate-300 font-semibold">{log.phone}</div>
                    <div className="text-[10px] text-slate-500">{log.method} • {log.time}</div>
                  </div>
                </div>
                <div className="text-amber-400 font-black text-sm">{log.amount}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 平台优势说明 */}
      <section className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800 text-center">
          <Zap className="w-10 h-10 text-amber-400 mx-auto mb-3" />
          <h4 className="font-bold text-white mb-1">Instant UPI Cashout</h4>
          <p className="text-xs text-slate-400">Support Paytm, PhonePe, GPay & Indian Banks with 60-second processing.</p>
        </div>
        <div className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800 text-center">
          <ShieldCheck className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
          <h4 className="font-bold text-white mb-1">100% Encrypted & Legal</h4>
          <p className="text-xs text-slate-400">SSL certified RNG system guaranteed fair gaming and funds protection.</p>
        </div>
        <div className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800 text-center">
          <Headphones className="w-10 h-10 text-rose-400 mx-auto mb-3" />
          <h4 className="font-bold text-white mb-1">24/7 Live Support</h4>
          <p className="text-xs text-slate-400">Hindi & English dedicated customer service available round the clock.</p>
        </div>
      </section>

      {/* FAQ 常见问题 */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-center text-white mb-6">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full p-4 text-left font-bold text-sm text-slate-200 flex justify-between items-center hover:bg-slate-800/50 transition"
              >
                <span>{faq.q}</span>
                {openFaq === index ? <ChevronUp className="w-4 h-4 text-amber-400" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
              </button>
              {openFaq === index && (
                <div className="p-4 pt-0 text-xs text-slate-400 leading-relaxed border-t border-slate-800/40">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 页脚 */}
      <footer className="border-t border-slate-800 bg-slate-900/80 py-8 px-4 text-center text-xs text-slate-500 space-y-3">
        <div className="text-amber-500 font-bold text-sm">99GAME.CLUB - Official Partner</div>
        <p>18+ Play Responsibly. Gambling can be addictive. Please play with financial discipline.</p>
        <p>© 2026 99GAME Inc. All Rights Reserved.</p>
      </footer>

      {/* 移动端底部悬浮导航栏 */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 px-4 py-2 flex justify-around items-center z-50">
        <button className="flex flex-col items-center text-amber-400">
          <Flame className="w-5 h-5" />
          <span className="text-[10px] font-bold mt-1">Home</span>
        </button>
        <button className="flex flex-col items-center text-slate-400">
          <Gamepad2 className="w-5 h-5" />
          <span className="text-[10px] font-bold mt-1">Games</span>
        </button>
        <button className="flex flex-col items-center text-rose-500">
          <Gift className="w-5 h-5" />
          <span className="text-[10px] font-bold mt-1">Bonus</span>
        </button>
        <button className="flex flex-col items-center text-slate-400">
          <CreditCard className="w-5 h-5" />
          <span className="text-[10px] font-bold mt-1">Withdraw</span>
        </button>
      </div>

    </div>
  );
}
