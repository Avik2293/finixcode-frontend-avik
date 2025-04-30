
import React, { useState } from 'react';
import Header from './components/Header';
import PlayerTab from './components/PlayerTab';
import InfoTab from './components/InfoTab';
import CommentsTab from './components/CommentsTab';
import JoinEventPopup from './components/JoinEventPopup';

type TabType = 'info' | 'player' | 'comments';

const App: React.FC = () => {
  // const [activeTab, setActiveTab] = useState<'info' | 'player' | 'comments'>('info');
  const [activeTab, setActiveTab] = useState<TabType>('info');
  const [showJoinPopup, setShowJoinPopup] = useState(false);

  return (
    <div className="font-sans">
      <Header />
      {activeTab === 'info' && <InfoTab onTabChange={setActiveTab} onJoinClick={() => setShowJoinPopup(true)} />}
      {activeTab === 'player' && <PlayerTab onTabChange={setActiveTab} onJoinClick={() => setShowJoinPopup(true)} />}
      {activeTab === 'comments' && <CommentsTab onTabChange={setActiveTab} onJoinClick={() => setShowJoinPopup(true)} />}

      {showJoinPopup && <JoinEventPopup onClose={() => setShowJoinPopup(false)} />}
    </div>
  );
};

export default App;