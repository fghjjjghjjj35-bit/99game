import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import GameLobby from './components/GameLobby';
import Promotions from './components/Promotions';
import VIP from './components/VIP';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  const [currentTab, setCurrentTab] = useState('lobby');

  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      {/* 顶部导航 */}
      <Header currentTab={currentTab} setCurrentTab={setCurrentTab} />

      {/* 主体视图切换 */}
      <main className="flex-1">
        {currentTab === 'lobby' && (
          <>
            <Hero />
            <GameLobby />
            <FAQ />
          </>
        )}
        {currentTab === 'promotions' && <Promotions />}
        {currentTab === 'vip' && <VIP />}
        {currentTab === 'faq' && <FAQ />}
      </main>

      {/* 页脚 */}
      <Footer />
    </div>
  );
}
