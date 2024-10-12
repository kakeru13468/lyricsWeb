import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white/80 border-t border-gray-100 py-6 shadow-lg backdrop-blur-lg mt-12">
      <div className="max-w-screen-md mx-auto px-4 lg:max-w-screen-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-gray-900 text-lg font-semibold mb-2">聯絡我們</h3>
            <p className="text-sm text-gray-700 mb-3">有任何問題嗎？請發送電子郵件至：</p>
            <a href="mailto:support@example.com" className="text-blue-600 hover:underline">auchergod@gmail.com</a>
          </div>

          <div>
            <h3 className="text-gray-900 text-lg font-semibold mb-2">支持我們</h3>
            <p className="text-sm text-gray-700 mb-3">您的捐款將幫助我們繼續提供優質的內容。</p>
            <a 
              href="/donate" 
              className="inline-block rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Donate
            </a>
          </div>

          <div>
            <h3 className="text-gray-900 text-lg font-semibold mb-2">追蹤我們</h3>
            <p className="text-sm text-gray-700 mb-3">關注我們的社群平台，獲取最新資訊：</p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-600 hover:underline">Facebook</a>
              <a href="#" className="text-blue-600 hover:underline">Twitter</a>
              <a href="#" className="text-blue-600 hover:underline">Instagram</a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          &copy; 2024  Website. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
