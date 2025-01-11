# KoinX Frontend Assignment

A cryptocurrency dashboard built with React that displays real-time crypto prices, charts, and market trends using the CoinGecko API.

## Demo

[Live Demo]()

## Features

- Real-time cryptocurrency price tracking
- Interactive TradingView charts
- Trending coins display
- Detailed coin information and metrics
- Responsive design
- Performance optimized
- Real-time data updates

## Tech Stack

- React 18
- Vite
- TailwindCSS
- React Router v6
- Axios
- TradingView Widgets
- Lucide React Icons

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

## Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/koinx-assignment.git
cd koinx-assignment
```

2. Install dependencies
```bash
npm install
```

3. Create a .env file in the root directory and add your CoinGecko API key (optional)
```bash
VITE_COINGECKO_API_KEY=your_api_key_here
```

4. Start the development server
```bash
npm run dev
```

The application will start running at `http://localhost:5173`

## Project Structure

```
src/
├── components/         # Reusable components
├── pages/             # Page components
├── services/          # API services
├── assets/           # Static assets
│   ├── images/
│   └── styles/
└── utils/            # Utility functions
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Required Assets

Place these assets in your public folder:

```
public/
├── coins/           # Cryptocurrency icons
├── images/         # General images
└── graphs/         # Graph images
```

## Environment Variables

```env
VITE_COINGECKO_API_KEY=your_api_key_here  # Optional
```

## API Reference

The project uses the CoinGecko API v3. Documentation can be found [here](https://www.coingecko.com/api/documentation).

## Deployment

1. Build the project
```bash
npm run build
```

2. The build files will be in the `dist` folder, ready to be deployed to your hosting service of choice.

