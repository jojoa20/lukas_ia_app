"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SplashScreen from "./SplashScreen";
import HomeView from "./HomeView";
import ChatView from "./ChatView";
import AnalyticsView from "./AnalyticsView";
import MetasView from "./MetasView";
import HistorialView from "./HistorialView";
import BottomNav from "./BottomNav";

export default function DemoContainer() {
  const [activeTab, setActiveTab] = useState("home");
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="flex flex-col h-full w-full relative overflow-hidden bg-[#0a0a0c]">
      {/* Background Orbs for Premium Look */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[40%] bg-[#1a2a5e]/20 blur-[100px] rounded-full z-0" />
      <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[30%] bg-[#D8A93F]/5 blur-[80px] rounded-full z-0" />

      {showSplash && <SplashScreen onFinishLoading={() => setShowSplash(false)} />}
      
      <main className="flex-1 overflow-y-auto no-scrollbar relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10, filter: "blur(10px)" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="h-full"
          >
            {activeTab === "home" && <HomeView key="home" />}
            {activeTab === "chat" && <ChatView key="chat" />}
            {activeTab === "analytics" && <AnalyticsView key="analytics" />}
            {activeTab === "metas" && <MetasView key="metas" />}
            {activeTab === "historial" && <HistorialView key="historial" />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Redesigned Floating Bottom Nav */}
      <BottomNav activeTab={activeTab} onChangeTab={setActiveTab} />
      
      {/* Safe Area Spacer for iOS-style nav */}
      <div className="h-6 w-full shrink-0" />
    </div>
  );
}
