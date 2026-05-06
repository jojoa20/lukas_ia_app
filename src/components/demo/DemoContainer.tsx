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

export default function DemoContainer() {
  const [activeTab, setActiveTab] = useState("home"); // home, chat, analytics
  const [viewVersion, setViewVersion] = useState(0);
  const [analyticsTarget, setAnalyticsTarget] = useState<{ viewMode?: "groups" | "compare"; month?: string }>({});
  const [showAlert, setShowAlert] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  const changeTab = (tab: string, options?: { viewMode?: "groups" | "compare"; month?: string }) => {
    if (tab === "analytics") {
      setAnalyticsTarget(options || {});
    }
    setActiveTab(tab);
    setViewVersion((version) => version + 1);
  };

  return (
    <div className="flex flex-col h-full w-full relative">
      {showSplash && <SplashScreen onFinishLoading={() => setShowSplash(false)} />}

      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto no-scrollbar pb-24 relative z-10">
        <AnimatePresence mode="wait">
          {activeTab === "home" && <HomeView key={`home-${viewVersion}`} onOpenAlert={() => setShowAlert(true)} />}
          {activeTab === "chat" && <ChatView key={`chat-${viewVersion}`} onNavigate={changeTab} />}
          {activeTab === "analytics" && <AnalyticsView key={`analytics-${viewVersion}`} initialViewMode={analyticsTarget.viewMode} initialMonth={analyticsTarget.month} />}
          {activeTab === "metas" && <MetasView key={`metas-${viewVersion}`} />}
          {activeTab === "historial" && <HistorialView key={`historial-${viewVersion}`} />}
        </AnimatePresence>
      </div>

      {/* Bottom Navigation */}
      <BottomNav activeTab={activeTab} onChangeTab={changeTab} />
    </div>
  );
}
