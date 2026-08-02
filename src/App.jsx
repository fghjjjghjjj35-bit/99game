import React, { useState } from 'react';
import { 
  Download, ShieldCheck, Zap, Headphones, Sparkles, Trophy, 
  ChevronDown, ChevronUp, Flame, Gift, Gamepad2, Volume2, Smartphone, CheckCircle
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('hot');
  const [openFaq, setOpenFaq] = useState(null);

  // AAGAME 同款游戏列表与封面图
  const games = [
    { id: 1, name: 'Color Prediction (Win Go)', category: 'color', tag: 'HOT', winRate: '98.5%', img: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=500&auto=format&fit=crop&q=80' },
    { id: 2, name: 'Aviator Crash Game', category: 'hot', tag: 'TRENDING', winRate: '97.8%', img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=500&auto=format&fit=crop&q=80' },
    { id: 3, name: 'Teen Patti Real Cash', category: 'cards', tag: 'CLASSIC', winRate: '96.2%', img: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=500&auto=format&fit=crop&q=80' },
    { id: 4, name: 'Indian Rummy 777', category: 'cards', tag: 'POPULAR', winRate: '95.9%', img: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=500&auto=format&fit=crop&q=80' },
    { id: 5, name: 'Dragon vs Tiger', category: 'hot', tag: 'HIGH PAY', winRate: '96.8%', img: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&auto=format&fit=crop&q=80' },
    { id: 6, name: '7 Up 7 Down', category: 'slots', tag: 'EASY WIN', winRate: '97.3%', img: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=500&auto=format&fit=crop&q=80' },
    { id: 7, name: 'Car Roulette 100X', category: 'slots', tag: 'BIG BONUS', winRate: '94.5%', img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&auto=format&fit=crop&q=80' },
    { id: 8, name: 'JDB Casino Slots', category: 'slots', tag: 'JACKPOT', winRate: '99.1%', img: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=500&auto=format&fit=crop&q=80' },
  ];

  // 实时提现假数据
  const withdrawLogs = [
    { phone: '98***210', amount: '₹12,500', method: 'UPI/Paytm', time: 'Just now' },
    { phone: '87***983', amount: '₹45,000', method: 'PhonePe', time: '2 mins ago' },
    { phone: '70***441', amount: '₹8,200', method: 'GPay', time: '5 mins ago' },
    { phone: '91***012', amount: '₹100,000', method: 'Bank Transfer', time: '8 mins ago' },
  ];

  const faqs = [
    { q: 'How to download and install 99GAME APK?', a: 'Click the "DOWNLOAD OFFICIAL APK" button on top. Once downloaded, enable "Install from Unknown Sources" in your Android settings and open the .apk file to complete installation.' },
    { q: 'What is the Welcome Bonus for new users?', a: 'All newly registered players instantly receive up to ₹999 Welcome Bonus upon their first successful recharge.' },
    { q: 'Is 99GAME secure and legal in India?', a: 'Yes! 99GAME uses 256-bit SSL encryption and certified Random Number Generators (RNG) to ensure 100% fair gameplay and secure transactions.' },
    { q: 'How long does UPI withdrawal take?', a: 'Withdrawals are 100% automated and processed via UPI, PhonePe, Paytm, or direct bank transfer within 1 to 5 minutes.' }
  ];

  const filteredGames = activeTab === 'all' 
    ? games 
    : games.filter(g => activeTab === 'hot' ? (g.category === 'hot' || g.tag === 'HOT') : g.category === activeTab);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-20 md:pb-0">
      
      {/* 跑马灯 */}
      <div className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 text-slate-950 text-xs font-bold py-2 px-4 flex items-center justify-between overflow-hidden shadow-md">
        <div className="flex items-center space-x-2 whitespace-nowrap mx-auto">
          <Volume2 className="w-4 h-4 animate-bounce" />
          <span>Notice: ₹999 Welcome Bonus for all new registered users today! Instant UPI Withdrawals 24/7.</span>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-amber-500/20 px-4 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-tr from-amber-500 via-yellow-400 to-amber-600 p-2 rounded-xl text-slate-950 font-black text-2xl tracking-wider shadow-lg shadow-amber-500/20">
              99GAME
            </div>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4">
            <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-amber-400 font-bold text-xs md:text-sm rounded-lg border border-amber-500/30 transition">
              Login
            </button>
            <button className="px-5 py-2 bg-gradient-to-r from-amber-500 to-rose-600 text-white font-bold text-xs md:text-sm rounded-lg shadow-lg hover:brightness-110 transition">
              Register
            </button>
          </div>
        </div>
      </header>

      {/* Hero 模块 */}
      <section className="relative overflow-hidden py-10 md:py-16 px-4 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs md:text-sm font-semibold mb-6">
            <Flame className="w-4 h-4 text-rose-500 fill-rose-500" />
            <span>India's Most Popular Real Cash Gaming App</span>
          </div>

          <h1 className="text-3xl md:text-6xl font-black text-white tracking-tight leading-tight">
            Play & Win Real Cash on <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
              99GAME ONLINE
            </span>
          </h1>

          <p className="text-slate-400 mt-4 text-sm md:text-lg max-w-2xl mx-auto">
            Enjoy Color Prediction, Aviator, Teen Patti & Rummy. 60-second instant UPI withdrawals with 100% payout guarantee.
          </p>

          {/* APP 下载主按钮 */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 via-rose-600 to-amber-500 bg-size-200 hover:bg-right font-black rounded-2xl text-lg text-white shadow-2xl shadow-rose-600/30 flex items-center justify-center space-x-3 transition-all transform hover:scale-105">
              <Download className="w-6 h-6 animate-bounce" />
              <span>DOWNLOAD OFFICIAL APK (v4.2)</span>
            </button>
          </div>

          {/* 实时统计框 */}
          <div className="grid grid-cols-3 gap-2 md:gap-4 mt-10 bg-slate-900/80 p-4 rounded-2xl border border-amber-500/20 backdrop-blur">
            <div>
              <div className="text-amber-400 text-base md:text-2xl font-black">₹9,850,000+</div>
              <div className="text-slate-400 text-[10px] md:text-xs">Daily Total Payouts</div>
            </div>
            <div className="border-x border-slate-800">
              <div className="text-emerald-400 text-base md:text-2xl font-black">100% Instant</div>
              <div className="text-slate-400 text-[10px] md:text-xs">UPI/Paytm Cashout</div>
            </div>
            <div>
              <div className="text-rose-400 text-base md:text-2xl font-black">2.5M+</div>
              <div className="text-slate-400 text-[10px] md:text-xs">Verified Players</div>
            </div>
          </div>

        </div>
      </section>

      {/* 游戏分类大厅 */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center space-x-2">
            <Gamepad2 className="text-amber-400" />
            <span>Popular Games Lobby</span>
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
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-amber-500 to-rose-600 text-white shadow-lg'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 游戏卡片网格 (带真实背景图) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filteredGames.map(game => (
            <div 
              key={game.id} 
              className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-500/50 transition duration-300 hover:shadow-2xl hover:shadow-amber-500/10 cursor-pointer flex flex-col justify-between"
            >
              <div className="h-36 md:h-44 relative overflow-hidden">
                <img 
                  src={game.img} 
                  alt={game.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500 brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                <span className="absolute top-2 left-2 bg-rose-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow">
                  {game.tag}
                </span>
                <div className="absolute bottom-2 left-2 right-2 text-white font-black text-sm md:text-base drop-shadow-md">
                  {game.name}
                </div>
              </div>
              <div className="p-3 bg-slate-900 flex justify-between items-center text-xs border-t border-slate-800">
                <span className="text-slate-400 text-[10px]">Win Rate: <strong className="text-emerald-400">{game.winRate}</strong></span>
                <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-black rounded-lg text-[10px] shadow">
                  PLAY NOW
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 实时提现排行榜 */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-slate-900/90 border border-amber-500/20 rounded-2xl p-5 md:p-6 shadow-xl">
          <h3 className="text-base md:text-lg font-bold text-white mb-4 flex items-center space-x-2">
            <Trophy className="text-yellow-400" />
            <span>Live Withdrawal Logs</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {withdrawLogs.map((log, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-slate-950/80 rounded-xl border border-slate-800">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <div className="text-xs text-slate-200 font-bold">{log.phone}</div>
                    <div className="text-[10px] text-slate-500">{log.method} • {log.time}</div>
                  </div>
                </div>
                <div className="text-amber-400 font-black text-sm">{log.amount}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 核心保障区 */}
      <section className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 bg-slate-900/60 rounded-2xl border border-slate-800 flex items-start space-x-4">
          <Zap className="w-8 h-8 text-amber-400 shrink-0" />
          <div>
            <h4 className="font-bold text-white text-sm">Instant UPI Payout</h4>
            <p className="text-xs text-slate-400 mt-1">Directly withdraw winnings to Paytm, PhonePe, GPay, or Indian Bank accounts within 60s.</p>
          </div>
        </div>
        <div className="p-5 bg-slate-900/60 rounded-2xl border border-slate-800 flex items-start space-x-4">
          <ShieldCheck className="w-8 h-8 text-emerald-400 shrink-0" />
          <div>
            <h4 className="font-bold text-white text-sm">RNG Fair Play Certified</h4>
            <p className="text-xs text-slate-400 mt-1">100% fair and random algorithms protected with 256-bit bank-grade SSL security.</p>
          </div>
        </div>
        <div className="p-5 bg-slate-900/60 rounded-2xl border border-slate-800 flex items-start space-x-4">
          <Headphones className="w-8 h-8 text-rose-400 shrink-0" />
          <div>
            <h4 className="font-bold text-white text-sm">24/7 Dedicated Customer Care</h4>
            <p className="text-xs text-slate-400 mt-1">Multi-lingual support available via Telegram & Live Chat around the clock.</p>
          </div>
        </div>
      </section>

      {/* FAQ 模块 */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-xl md:text-2xl font-bold text-center text-white mb-6">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full p-4 text-left font-bold text-xs md:text-sm text-slate-200 flex justify-between items-center hover:bg-slate-800/50 transition"
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
      <footer className="border-t border-slate-800 bg-slate-900/90 py-8 px-4 text-center text-xs text-slate-500 space-y-2">
        <div className="text-amber-400 font-black text-sm">99GAME.CLUB - Official Partner</div>
        <p>18+ Responsible Gaming. Please play with financial discipline.</p>
        <p>© 2026 99GAME. All Rights Reserved.</p>
      </footer>

      {/* 手机端底栏 */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 px-4 py-2.5 flex justify-around items-center z-50">
        <button className="flex flex-col items-center text-amber-400">
          <Flame className="w-5 h-5" />
          <span className="text-[10px] font-bold mt-0.5">Home</span>
        </button>
        <button className="flex flex-col items-center text-slate-400">
          <Gamepad2 className="w-5 h-5" />
          <span className="text-[10px] font-bold mt-0.5">Lobby</span>
        </button>
        <button className="flex flex-col items-center text-rose-500">
          <Gift className="w-5 h-5" />
          <span className="text-[10px] font-bold mt-0.5">Bonus</span>
        </button>
        <button className="flex flex-col items-center text-slate-400">
          <Smartphone className="w-5 h-5" />
          <span className="text-[10px] font-bold mt-0.5">Download</span>
        </button>
      </div>

    </div>
  );
}
