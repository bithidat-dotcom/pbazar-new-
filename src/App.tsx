/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    // Custom console information for inspect section
    console.clear();
    console.log(
      '%c🛡️ P-BAZAR SECURE PLATFORM',
      'color: #059669; font-size: 20px; font-weight: bold;'
    );
    console.log(
      '%cUnauthorized inspection, copying, or scraping is strictly prohibited.',
      'font-size: 12px; color: #dc2626; font-weight: bold;'
    );

    // Disable Right Click & DevTools shortcuts
    const handleContext = (e: MouseEvent) => e.preventDefault();
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.keyCode === 123) return false; // F12
      if (e.ctrlKey && e.shiftKey && e.keyCode === 73) return false; // Ctrl+Shift+I
      if (e.ctrlKey && e.shiftKey && e.keyCode === 67) return false; // Ctrl+Shift+C
      if (e.ctrlKey && e.shiftKey && e.keyCode === 74) return false; // Ctrl+Shift+J
      if (e.ctrlKey && e.keyCode === 85) return false; // Ctrl+U
    };

    const handleSelectStart = (e: Event) => e.preventDefault();
    const handleDragStart = (e: DragEvent) => e.preventDefault();

    document.addEventListener('contextmenu', handleContext);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('selectstart', handleSelectStart);
    document.addEventListener('dragstart', handleDragStart);

    return () => {
      document.removeEventListener('contextmenu', handleContext);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('selectstart', handleSelectStart);
      document.removeEventListener('dragstart', handleDragStart);
    };
  }, []);

  return (
    <div 
      id="wrapper" 
      className="w-screen h-screen overflow-hidden bg-white m-0 p-0 select-none relative"
      style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
      onContextMenu={(e) => e.preventDefault()}
    >
      <iframe
        src="https://pbazar.vercel.app"
        className="w-full h-full border-none block select-none"
        title="P-Bazar"
        allow="fullscreen; payment; geolocation"
      />
    </div>
  );
}
