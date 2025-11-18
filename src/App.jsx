import React, { useMemo, useState } from 'react';
import { panelOrder, panels } from './components/Panels';

const ANIMATION_DURATION_MS = 280;

function App() {
  const [activePanel, setActivePanel] = useState('home');
  const [displayPanel, setDisplayPanel] = useState('home');
  const [animationClass, setAnimationClass] = useState('fade-in');

  const currentPanelContent = useMemo(() => panels[displayPanel]?.Component, [displayPanel]);

  const handlePanelChange = (panel) => {
    if (!panels[panel] || panel === displayPanel) return;

    setActivePanel(panel);
    setAnimationClass('fade-out');

    setTimeout(() => {
      setDisplayPanel(panel);
      setAnimationClass('fade-in');
    }, ANIMATION_DURATION_MS);
  };

  const PanelComponent = currentPanelContent || (() => null);

  return (
    <>
      <div id="small-screen-warning" role="dialog" aria-live="polite" aria-modal="true">
        <div>
          <h2>Please use a larger screen</h2>
          <p>Open this site on a laptop/desktop (or rotate to landscape on a tablet).</p>
        </div>
      </div>

      <div id="app">
        <video autoPlay loop muted playsInline>
          <source src="/photo_video/city_landscape.mp4" type="video/mp4" />
        </video>

        <div className="button-container">
          {panelOrder.map((panelKey) => (
            <button
              key={panelKey}
              data-panel={panelKey}
              type="button"
              className={activePanel === panelKey ? 'active' : ''}
              onClick={() => handlePanelChange(panelKey)}
            >
              {panels[panelKey].label}
            </button>
          ))}
        </div>

        <main className="main-content">
          <div id="content" className={animationClass}>
            <PanelComponent />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
