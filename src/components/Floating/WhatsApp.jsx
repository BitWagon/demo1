"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const whatsappUrl = "https://wa.me/923336516071";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Enova Solution on WhatsApp"
      className="fixed bottom-6 right-6 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-green-600 md:bottom-8 md:right-8"
    >
      <MessageCircle size={30} strokeWidth={2.5} />
    </a>
  );
}