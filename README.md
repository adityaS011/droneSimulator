# Drone Motion Simulator

![Drone Motion Simulator Logo]([./deploy_sample.png](https://github.com/adityaS011/droneSimulator/blob/main/public/deploy_sample.png))

## Overview

The **Drone Motion Simulator** is an interactive web application designed to visualize and simulate the motion of drones based on user-defined paths. Users can upload path data consisting of latitude, longitude, and duration, enabling a realistic simulation experience.

## Features

- **Real-Time Visualization**: Watch drones navigate through paths in real-time.
- **User-Friendly Interface**: Intuitive controls for uploading paths, starting, pausing, and resetting simulations.
- **Validation**: Robust input validation to ensure accurate path data.

## Technologies Used

- **Frontend**: React.js, Next.js, TypeScript, Tailwind CSS
- **Dynamic Imports**: Optimized loading with Next.js dynamic imports.
- **Maps**: Leaflet.
- **Custom Components**: Modular components for better maintainability.

## Folder Structure

```plaintext
drone-motion-simulator/
├── components/
│   ├── Loaders/
│   ├── MapComponents/
│   ├── PathUploader.tsx
│   └── SimulationControls.tsx
├── pages/
│   ├── api/
│   ├── _app.tsx
│   └── index.tsx
├── public/
│   └── drone_logo.png
├── styles/
│   └── globals.css
├── types/
│   └── types.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Getting Started

### Prerequisites

Make sure you have Node.js installed.

### Installation

Clone the repository:

```bash
git clone https://github.com/your-username/drone-motion-simulator.git
cd drone-motion-simulator

npm install

npm run dev
```

## How to Use

- **Enter drone path data in the provided format:**
  - Format: `latitude,longitude,time (seconds)`
  - Example (no spaces):
    26.8467,80.9462,2000
    26.8505,80.9215,2500
    26.8485,80.935,3000
    26.862,80.9447,1500
    26.8516,80.9428,2200
    26.8478,80.9433,2800
    26.858,80.9402,1800
    26.8527,80.9311,2000
    26.853,80.9487,2600
    26.8509,80.9343,2300
    26.849,80.929,2700
    26.8457,80.9388,2100
    26.8612,80.9475,2400
    26.8539,80.9505,1700
    26.8577,80.9307,2500
    26.8513,80.9285,2900
    26.8501,80.9376,1600
    26.8542,80.9439,2000
    26.8591,80.9367,2200
    26.8475,80.946,1900

## Thank you
