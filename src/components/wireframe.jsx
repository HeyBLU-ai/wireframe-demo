import React, { useState } from 'react';
import { ChevronDown, Bluetooth, Eye, Play, Square, Save } from 'lucide-react';

const HeyBluWireframe = () => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [fieldSize, setFieldSize] = useState('');
  const [strikeZone, setStrikeZone] = useState('');
  const [sound, setSound] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [showSaveFields, setShowSaveFields] = useState(false);
  const [isLandscapeMode, setIsLandscapeMode] = useState(false);

  const screens = [
    // Screen 0: Welcome
    {
      title: "Hey Blu",
      content: (
        <div className="flex flex-col items-center justify-center h-full px-8">
          <div className="text-6xl mb-8">⚾</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to Hey Blu</h2>
          <p className="text-gray-600 text-center mb-8">
            Your digital umpire assistant for accurate ball and strike calls
          </p>
          <button 
            onClick={() => setCurrentScreen(1)}
            className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold mb-3 hover:bg-blue-700 transition"
          >
            Setup BLU
          </button>
          <button 
            onClick={() => setShowSaveFields(!showSaveFields)}
            className="w-full bg-white border-2 border-gray-300 text-gray-700 py-4 rounded-lg font-semibold hover:bg-gray-50 transition relative"
          >
            Reload a Field
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2" size={20} />
          </button>
          {showSaveFields && (
            <div className="w-full mt-2 bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
              <div className="p-3 hover:bg-gray-100 cursor-pointer" onClick={() => setCurrentScreen(5)}>Field Setup - 03/15/25</div>
              <div className="p-3 hover:bg-gray-100 cursor-pointer border-t" onClick={() => setCurrentScreen(5)}>Tournament Field - 03/10/25</div>
              <div className="p-3 hover:bg-gray-100 cursor-pointer border-t" onClick={() => setCurrentScreen(5)}>Practice Field - 03/01/25</div>
            </div>
          )}
        </div>
      )
    },
    // Screen 1: Field Size
    {
      title: "Field Size",
      content: (
        <div className="flex flex-col h-full px-8">
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">📏</div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">Select Field Size</h2>
            <p className="text-gray-600 text-sm">Choose the diamond dimensions</p>
          </div>
          <div className="space-y-3 flex-grow">
            <button 
              onClick={() => {setFieldSize('12U'); setCurrentScreen(2);}}
              className={`w-full py-6 rounded-lg font-semibold transition border-2 ${fieldSize === '12U' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'}`}
            >
              12U
              <div className="text-xs mt-1 opacity-80">60' bases, 46' mound</div>
            </button>
            <button 
              onClick={() => {setFieldSize('Pro'); setCurrentScreen(2);}}
              className={`w-full py-6 rounded-lg font-semibold transition border-2 ${fieldSize === 'Pro' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'}`}
            >
              Pro
              <div className="text-xs mt-1 opacity-80">90' bases, 60'6" mound</div>
            </button>
          </div>
          <button 
            onClick={() => setCurrentScreen(0)}
            className="w-full bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold mt-4"
          >
            Back
          </button>
        </div>
      )
    },
    // Screen 2: Strike Zone
    {
      title: "Strike Zone",
      content: (
        <div className="flex flex-col h-full px-8">
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">🎯</div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">Choose Strike Zone</h2>
            <p className="text-gray-600 text-sm">Select zone height and width</p>
          </div>
          <div className="space-y-3 flex-grow">
            <button 
              onClick={() => {setStrikeZone('Rookie'); setCurrentScreen(3);}}
              className={`w-full py-5 rounded-lg font-semibold transition border-2 ${strikeZone === 'Rookie' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'}`}
            >
              Rookie
            </button>
            <button 
              onClick={() => {setStrikeZone('Minors'); setCurrentScreen(3);}}
              className={`w-full py-5 rounded-lg font-semibold transition border-2 ${strikeZone === 'Minors' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'}`}
            >
              Minors
            </button>
            <button 
              onClick={() => {setStrikeZone('Pro'); setCurrentScreen(3);}}
              className={`w-full py-5 rounded-lg font-semibold transition border-2 ${strikeZone === 'Pro' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'}`}
            >
              Pro
            </button>
          </div>
          <button 
            onClick={() => setCurrentScreen(1)}
            className="w-full bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold mt-4"
          >
            Back
          </button>
        </div>
      )
    },
    // Screen 3: Connect Audio
    {
      title: "Connect Audio",
      content: (
        <div className="flex flex-col h-full px-8">
          <div className="text-center mb-8">
            <Bluetooth className="mx-auto mb-4 text-blue-600" size={48} />
            <h2 className="text-xl font-bold text-gray-800 mb-2">Connect Audio</h2>
            <p className="text-gray-600 text-sm">Choose your audio output</p>
          </div>
          <div className="space-y-3 flex-grow">
            <button 
              onClick={() => {setSound('Umpire Earbuds'); setCurrentScreen(4);}}
              className={`w-full py-5 rounded-lg font-semibold transition border-2 ${sound === 'Umpire Earbuds' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'}`}
            >
              Umpire Earbuds
            </button>
            <button 
              onClick={() => {setSound('Speaker'); setCurrentScreen(4);}}
              className={`w-full py-5 rounded-lg font-semibold transition border-2 ${sound === 'Speaker' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'}`}
            >
              Speaker
            </button>
            <button 
              onClick={() => {setSound('Phone Only'); setCurrentScreen(4);}}
              className={`w-full py-5 rounded-lg font-semibold transition border-2 ${sound === 'Phone Only' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'}`}
            >
              Phone Only
            </button>
            <button 
              onClick={() => {setSound('Sound Off'); setCurrentScreen(4);}}
              className={`w-full py-5 rounded-lg font-semibold transition border-2 ${sound === 'Sound Off' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'}`}
            >
              Sound Off
            </button>
          </div>
          <button 
            onClick={() => setCurrentScreen(2)}
            className="w-full bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold mt-4"
          >
            Back
          </button>
        </div>
      )
    },
    // Screen 4: Setup Instructions
    {
      title: "Setup Instructions",
      content: (
        <div className="flex flex-col h-full px-8">
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">📱</div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Before Scanning</h2>
          </div>
          <div className="flex-grow bg-blue-50 rounded-lg p-6 border-2 border-blue-200">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Setup Tripod</p>
                  <p className="text-sm text-gray-600">Ensure tripod is stable and secure</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Position Yourself</p>
                  <p className="text-sm text-gray-600">Stand 10 feet behind home plate</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Face the Mound</p>
                  <p className="text-sm text-gray-600">Point phone toward pitcher's mound</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Rotate Phone</p>
                  <p className="text-sm text-gray-600">Turn your phone sideways for better scanning</p>
                </div>
              </div>
            </div>
          </div>
          <button 
            onClick={() => {setCurrentScreen(5); setIsLandscapeMode(true);}}
            className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold mt-6 hover:bg-blue-700 transition"
          >
            Next
          </button>
          <button 
            onClick={() => setCurrentScreen(3)}
            className="w-full bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold mt-3"
          >
            Back
          </button>
        </div>
      )
    },
    // Screen 5: Scan Field
    {
      title: "Scan Field",
      content: (
        <div className="flex flex-col h-full px-8">
          <div className="text-center mb-6">
            <Eye className="mx-auto mb-4 text-blue-600" size={48} />
            <h2 className="text-xl font-bold text-gray-800 mb-2">Scan Field</h2>
            <p className="text-gray-600 text-sm">ARKit Scanning Active</p>
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-3 mt-3">
              <p className="text-blue-800 font-semibold text-sm">📱 Rotate to Landscape</p>
              <p className="text-blue-700 text-xs mt-1">Hold your phone sideways for better scanning</p>
            </div>
          </div>
          <div className="flex-grow bg-gray-900 rounded-lg relative overflow-hidden border-4 border-gray-700">
            {/* Simulated AR View */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-center p-6">
                <div className="mb-6 text-6xl">📹</div>
                <div className="bg-black bg-opacity-70 rounded-lg p-4 mb-4">
                  <p className="font-semibold mb-2">Step 1 of 2</p>
                  <p className="text-sm">Move your phone slowly to scan the field</p>
                  <p className="text-sm mt-2 text-yellow-300">Tap to place the mound</p>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '45%'}}></div>
                </div>
              </div>
            </div>
          </div>
          <button 
            onClick={() => setCurrentScreen(6)}
            className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold mt-6 hover:bg-blue-700 transition"
          >
            Continue to Strike Zone Placement
          </button>
          <button 
            onClick={() => {setCurrentScreen(4); setIsLandscapeMode(false);}}
            className="w-full bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold mt-3"
          >
            Back
          </button>
        </div>
      )
    },
    // Screen 6: Place in Tripod
    {
      title: "Ready to Play",
      content: (
        <div className="flex flex-col h-full px-8">
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">✅</div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">Setup Complete!</h2>
            <p className="text-gray-600 text-sm">Place phone in tripod and press Play</p>
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-3 mt-3">
              <p className="text-blue-800 font-semibold text-sm">📱 Keep in Landscape Mode</p>
              <p className="text-blue-700 text-xs mt-1">Phone must stay sideways during gameplay for AR tracking</p>
            </div>
          </div>
          <div className="flex-grow bg-green-50 rounded-lg p-6 border-2 border-green-200 mb-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-green-200">
                <span className="text-gray-700 font-medium">Field Size:</span>
                <span className="text-gray-900 font-semibold">{fieldSize || '12U'}</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-green-200">
                <span className="text-gray-700 font-medium">Strike Zone:</span>
                <span className="text-gray-900 font-semibold">{strikeZone || 'Pro'}</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-gray-700 font-medium">Audio Output:</span>
                <span className="text-gray-900 font-semibold">{sound || 'Speaker'}</span>
              </div>
            </div>
          </div>
          <button 
            onClick={() => {setIsPlaying(true); setCurrentScreen(7);}}
            className="w-full bg-blue-600 text-white py-5 rounded-lg font-bold text-lg hover:bg-blue-700 transition flex items-center justify-center"
          >
            <Play className="mr-2" size={24} fill="white" />
            Play Ball!
          </button>
          <button 
            onClick={() => setCurrentScreen(5)}
            className="w-full bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold mt-3"
          >
            Re-scan Field
          </button>
        </div>
      )
    },
    // Screen 7: Active Game
    {
      title: "Game Active",
      content: (
        <div className="flex flex-col h-full px-8">
          <div className="text-center mb-6">
            <div className="text-5xl mb-4 animate-pulse">⚾</div>
            <h2 className="text-2xl font-bold text-blue-600 mb-2">GAME ACTIVE</h2>
            <p className="text-gray-600 text-sm">Tracking pitches in real-time</p>
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-2 mt-3">
              <p className="text-blue-800 font-semibold text-xs">📱 Landscape Mode Required</p>
            </div>
          </div>
          <div className="flex-grow bg-gray-100 rounded-lg p-6 mb-6">
            <div className="bg-white rounded-lg p-4 mb-4 shadow">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600 text-sm">Balls</span>
                <span className="text-2xl font-bold text-gray-900">2</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-sm">Strikes</span>
                <span className="text-2xl font-bold text-gray-900">1</span>
              </div>
            </div>
            <div className="bg-green-100 border-2 border-green-400 rounded-lg p-4 text-center">
              <p className="text-green-800 font-bold text-lg">Last Call: BALL</p>
              <p className="text-green-700 text-sm mt-1">Outside - 2 inches</p>
            </div>
          </div>
          <button 
            onClick={() => {setIsPlaying(false); setCurrentScreen(8); setIsLandscapeMode(false);}}
            className="w-full bg-red-600 text-white py-5 rounded-lg font-bold text-lg hover:bg-red-700 transition flex items-center justify-center"
          >
            <Square className="mr-2" size={24} fill="white" />
            Stop Game
          </button>
        </div>
      )
    },
    // Screen 8: Save Session
    {
      title: "Save Session",
      content: (
        <div className="flex flex-col h-full px-8">
          <div className="text-center mb-8">
            <Save className="mx-auto mb-4 text-blue-600" size={48} />
            <h2 className="text-xl font-bold text-gray-800 mb-2">Save This Session?</h2>
            <p className="text-gray-600 text-sm">Save field setup for quick reload</p>
          </div>
          <div className="flex-grow">
            <input 
              type="text"
              placeholder="Field Name (optional)"
              className="w-full px-4 py-4 border-2 border-gray-300 rounded-lg mb-4 text-gray-900"
            />
            <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200 mb-6">
              <p className="text-sm text-gray-700 mb-2"><strong>Session Summary:</strong></p>
              <p className="text-sm text-gray-600">Duration: 1h 23m</p>
              <p className="text-sm text-gray-600">Total Pitches: 147</p>
              <p className="text-sm text-gray-600">Strikes: 89 (60.5%)</p>
              <p className="text-sm text-gray-600">Balls: 58 (39.5%)</p>
            </div>
          </div>
          <button 
            onClick={() => setCurrentScreen(0)}
            className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold mb-3 hover:bg-blue-700 transition"
          >
            Save Session
          </button>
          <button 
            onClick={() => setCurrentScreen(0)}
            className="w-full bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold"
          >
            Don't Save
          </button>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-8 flex items-center justify-center">
      <div className={`w-full transition-all duration-500 ${isLandscapeMode ? 'max-w-4xl' : 'max-w-md'}`}>
        {/* iPhone Frame */}
        <div className={`bg-black shadow-2xl transition-all duration-500 ${isLandscapeMode ? 'rounded-[2rem] p-2' : 'rounded-[3rem] p-3'}`} style={{aspectRatio: isLandscapeMode ? '19.5/9' : '9/19.5'}}>
          <div className={`bg-white overflow-hidden transition-all duration-500 ${isLandscapeMode ? 'rounded-[1.5rem]' : 'rounded-[2.5rem]'}`} style={{aspectRatio: isLandscapeMode ? '19.5/9' : '9/19.5'}}>
            {/* Status Bar */}
            <div className="bg-gradient-to-r from-blue-700 to-blue-500 px-6 py-3 flex justify-between items-center text-white text-xs">
              <span>9:41</span>
              <div className="flex items-center gap-1">
                <div className="w-4 h-3 border border-white rounded-sm"></div>
                <div className="w-4 h-3 border border-white rounded-sm bg-white"></div>
                <div className="w-4 h-3 border border-white rounded-sm bg-white"></div>
              </div>
            </div>
            
            {/* App Header */}
            <div className="bg-gradient-to-r from-blue-700 to-blue-500 px-6 py-4 text-center">
              <h1 className="text-3xl font-bold text-white" style={{fontFamily: 'cursive'}}>
                Hey Blu
              </h1>
              <p className="text-white text-xs opacity-90">Digital Umpire Assistant</p>
            </div>

            {/* Screen Content */}
            <div className="bg-white" style={{height: 'calc(100% - 116px)'}}>
              {screens[currentScreen].content}
            </div>
          </div>
        </div>

        {/* Navigation Helper */}
        <div className="text-center mt-6 text-gray-600 text-sm">
          Screen {currentScreen + 1} of {screens.length}: {screens[currentScreen].title}
        </div>
      </div>
    </div>
  );
};

export default HeyBluWireframe;