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
import ReflectionView from "./ReflectionView";

export default function DemoContainer() {
  const [activeTab, setActiveTab] = useState("home");
  const [showReflection, setShowReflection] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="flex flex-col h-full w-full relative overflow-hidden bg-[#050507]">
      {/* Elite Noise Overlay */}
      <div className="noise-overlay" />

      {/* Atmospheric Background Orbs */}
      <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[60%] bg-[#1a2a5e]/20 blur-[120px] rounded-full z-0" />
      <div className="absolute bottom-[-10%] right-[-20%] w-[70%] h-[50%] bg-[#D8A93F]/5 blur-[100px] rounded-full z-0" />
      <div className="absolute top-[40%] right-[-10%] w-[30%] h-[30%] bg-[#8b5cf6]/10 blur-[80px] rounded-full z-0" />

      {showSplash && <SplashScreen onFinishLoading={() => setShowSplash(false)} />}
      
      <main className="flex-1 overflow-y-auto no-scrollbar relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.02, filter: "blur(10px)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="h-full"
          >
            {activeTab === "home" && <HomeView onOpenReflection={() => setShowReflection(true)} />}
            {activeTab === "chat" && <ChatView key="chat" />}
            {activeTab === "analytics" && <AnalyticsView key="analytics" />}
            {activeTab === "metas" && <MetasView key="metas" />}
            {activeTab === "historial" && <HistorialView key="historial" />}
          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          {showReflection && (
            <ReflectionView onBack={() => setShowReflection(false)} />
          )}
        </AnimatePresence>
      </main>

      <BottomNav activeTab={activeTab} onChangeTab={setActiveTab} />
      
      {/* Safe Area Spacer */}
      <div className="h-10 w-full shrink-0" />
    </div>
  );
}
