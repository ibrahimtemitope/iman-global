import React, { useState } from 'react';
import { SovereignHeader } from './components/SovereignHeader';
import { HeroSection } from './components/HeroSection';
import { InfrastructureMandateSection } from './components/InfrastructureMandateSection';
import { DigitalPlatformsSection } from './components/DigitalPlatformsSection';
import { GovernanceCharterSection } from './components/GovernanceCharterSection';
import { GeographicFootprintSection } from './components/GeographicFootprintSection';
import { CorporateDeskFooter } from './components/CorporateDeskFooter';

export function App() {
  const [deskOpen, setDeskOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-700">
      <SovereignHeader onOpenDesk={() => setDeskOpen(true)} />

      <main>
        <HeroSection onOpenDesk={() => setDeskOpen(true)} />
        <InfrastructureMandateSection />
        <DigitalPlatformsSection />
        <GovernanceCharterSection />
        <GeographicFootprintSection />
      </main>

      <CorporateDeskFooter
        deskOpen={deskOpen}
        onCloseDesk={() => setDeskOpen(false)}
        onOpenDesk={() => setDeskOpen(true)}
      />
    </div>
  );
}

export default App;
