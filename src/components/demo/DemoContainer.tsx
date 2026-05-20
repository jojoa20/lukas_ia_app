"use client";
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import SplashScreen from "./SplashScreen";
import HomeView from "./HomeView";
import ChatView from "./ChatView";
import AnalyticsView from "./AnalyticsView";
import MetasView from "./MetasView";
import HistorialView from "./HistorialView";
import BottomNav from "./BottomNav";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
}

export default function DemoContainer() {
  const [activeTab, setActiveTab] = useState("home");
  const [showSplash, setShowSplash] = useState(true);
  const [refreshKey, setRefreshKey] = useState(0);

  // Chat history lives HERE so it persists when switching tabs
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);

  const handleNavigate = (page: string, _opts?: any) => {
    const pageMap: Record<string, string> = {
      home: "home",
      chat: "chat",
      metas: "metas",
      historial: "historial",
      analytics: "analytics",
    };
    setActiveTab(pageMap[page] || page);
  };

  const handleRefreshData = () => {
    setRefreshKey((k) => k + 1);
  };

  return (
    <div className="flex flex-col h-full w-full relative">
      {showSplash && <SplashScreen onFinishLoading={() => setShowSplash(false)} />}

      {/* Scrollable Content Area — chat manages its own scroll internally */}
      <div className={`flex-1 relative z-10 ${activeTab === 'chat' ? 'overflow-hidden' : 'overflow-y-auto no-scrollbar pb-24'}`}>
        <AnimatePresence mode="wait">
          {activeTab === "home" && (
            <HomeView key={`home-${refreshKey}`} onOpenAlert={() => {}} />
          )}
          {activeTab === "chat" && (
            <ChatView
              key="chat"
              messages={chatMessages}
              onMessagesChange={setChatMessages}
              onNavigate={handleNavigate}
              onRefreshData={handleRefreshData}
            />
          )}
          {activeTab === "analytics" && <AnalyticsView key={`analytics-${refreshKey}`} />}
          {activeTab === "metas" && <MetasView key={`metas-${refreshKey}`} />}
          {activeTab === "historial" && <HistorialView key={`historial-${refreshKey}`} />}
        </AnimatePresence>
      </div>

      {/* Bottom Navigation */}
      <BottomNav activeTab={activeTab} onChangeTab={setActiveTab} />
    </div>
  );
}
