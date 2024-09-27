# Drone Motion Simulator

![Drone Motion Simulator Logo](https://github.com/adityaS011/droneSimulator/blob/main/public/deploy_sample.png)

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
├── (home)/
│   ├── pages.tsx
├── components/
│   ├── Loaders/
│   │   └── BouncingLoader.tsx
│   ├── MapComponents/
│   │   └── MapControllers.tsx
│   │   └── MapMarkers.tsx
│   │   └── MapWithDrone.tsx
│   ├── FileUpload.tsx
│   ├── InputForm.tsx
│   ├── PathUploader.tsx
│   └── SimulationControls.tsx
├── public/
│   └── drone_logo.png
│   └── drone_icon.png
│   └── favicon.png
│   └── past_locationIcon.png
│   └── deploy_sample.png
├── styles/
│   └── globals.css
├── types/
│   └── types.ts
├── package.json
├── layout.tsx
├── icons.tsx
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
```bash
26.8467,80.9462,2000
26.8472,80.9457,2100
26.8465,80.9468,2200
26.8470,80.9465,2300
26.8463,80.9460,2400
26.8461,80.9455,2500
26.8475,80.9458,2600
26.8468,80.9467,2700
26.8474,80.9463,2800
26.8475,80.9456,2900
26.8473,80.9461,3000
26.8476,80.9455,3100
26.8458,80.9468,3200
26.8460,80.9468,3300
26.8473,80.9470,3400
26.8474,80.9462,3500
26.8461,80.9466,3600
26.8458,80.9453,3700
```

## Thank you
