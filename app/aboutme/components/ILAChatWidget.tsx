'use client';

import { useEffect } from 'react';

// Extend the Window interface locally
declare global {
  interface Window {
    isIlaChatAdded?: boolean;
  }
}

export default function ILAChatWidget() {
  useEffect(() => {
    // تابعی که قرار است اجرا شود
    const handleUserInteraction = () => {
      // بررسی می‌کنیم که قبلاً اسکریپت اضافه نشده باشد
      if (!window.isIlaChatAdded) {
        window.isIlaChatAdded = true;

        const script = document.createElement('script');
        script.src = 'https://widget.ila.chat/chat-widget.umd.js.gz';
        script.async = true;
        script.setAttribute('data-bot-widget-token', '6J1x9ZUMeSC4SNvPw9FfXTOm5mSd5hIn');
        document.body.appendChild(script);
      }
    };

    // لیست رویدادها دقیقاً مشابه کد خودتان
    const events = ['keydown', 'touchmove', 'touchstart', 'mouseover'];

    // افزودن شنونده به همه رویدادها
    events.forEach((event) => {
      window.addEventListener(event, handleUserInteraction);
    });

    // پاک‌سازی (Cleanup) برای جلوگیری از نشت حافظه هنگام Unmount شدن کامپوننت
    return () => {
      events.forEach((event) => {
        window.removeEventListener(event, handleUserInteraction);
      });
    };
  }, []); // آرایه خالی یعنی فقط یکبار در سمت کلاینت اجرا شود

  // این کامپوننت هیچ المان بصری رندر نمی‌کند
  return null;
}