# Hey Blu - Digital Umpire Assistant Wireframe

A React-based wireframe prototype for the Hey Blu digital umpire assistant app. This interactive prototype demonstrates the complete user flow from setup to game tracking.

## 🎯 Overview

Hey Blu is a digital umpire assistant that uses AR technology to help umpires make accurate ball and strike calls. This wireframe showcases the mobile app interface and user experience.

## 🚀 Features

- **Interactive Mobile UI**: iPhone-style interface with realistic proportions
- **Complete User Flow**: 8 screens covering setup, scanning, and gameplay
- **Field Configuration**: Support for different field sizes (12U, Pro)
- **Strike Zone Options**: Rookie, Minors, and Pro strike zones
- **Audio Setup**: Multiple audio output options
- **AR Scanning Simulation**: Visual representation of field scanning process
- **Game Tracking**: Real-time ball/strike tracking interface
- **Session Management**: Save and reload field configurations

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## 📱 Screens

1. **Welcome** - App introduction and field reload options
2. **Field Size** - Select 12U or Pro field dimensions
3. **Strike Zone** - Choose Rookie, Minors, or Pro strike zone
4. **Connect Audio** - Audio output configuration
5. **Setup Instructions** - Pre-scanning preparation steps
6. **Scan Field** - AR field scanning simulation (landscape mode required)
7. **Ready to Play** - Setup confirmation and play button (landscape mode required)
8. **Game Active** - Live game tracking interface (landscape mode required)
9. **Save Session** - Session summary and save options

## 🚀 Quick Start

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/hey-blu-wireframe.git
   cd hey-blu-wireframe
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5173`
   - The wireframe will load in your browser

### Building for Production

```bash
npm run build
```

## 📁 Project Structure

```
hey-blu-wireframe/
├── src/
│   ├── components/
│   │   └── wireframe.jsx    # Main wireframe component
│   ├── App.jsx              # App wrapper
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind configuration
└── README.md               # This file
```

## 🎨 Design Notes

- **Mobile-First**: Designed for iPhone with 9:19.5 aspect ratio
- **Color Scheme**: Blue-dominant theme (matching "BLU" brand)
- **Orientation**: Portrait for setup UI, landscape required for AR scanning and gameplay
- **Typography**: Clean, readable fonts with proper hierarchy
- **Interactions**: Smooth transitions and hover effects
- **Accessibility**: High contrast and clear button states

## 🤝 Contributing

This is a wireframe/prototype for brainstorming and design review. For production development, consider:

- Converting to TypeScript for better type safety
- Adding proper error handling
- Implementing actual AR functionality
- Adding data persistence
- Creating proper component architecture

## 📄 License

MIT License - see LICENSE file for details

## 👥 Team

- **Product**: Hey BLU Team
- **Design**: Interactive wireframe prototype

---

*This wireframe is designed for brainstorming sessions and stakeholder review. It demonstrates the user experience and interface design for the Hey Blu digital umpire assistant.*
