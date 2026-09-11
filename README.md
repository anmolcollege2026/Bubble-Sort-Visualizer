# Monochrome Algorithm Visualizer

A sleek, modern, web-based visualizer designed to bring sorting algorithms to life. Built using pure **HTML5**, **CSS3**, and **JavaScript (ES6+)**, this application presents step-by-step sorting mechanics within a high-contrast, dark-mode glassmorphism UI featuring smooth looping background animations.

---

## 🌟 Key Features

- **Interactive Control Panel:**
  - **Generate New Array:** Instantly produces a new set of random data points.
  - **Start Sorting:** Triggers the asynchronous visual execution of the sorting algorithm.
  - **Speed Slider:** Dynamically adjusts animation delay in real-time (from fast to slow-motion).
  - **Array Size Slider:** Scalable dataset size from 5 to 30 elements.
- **Monochrome Glassmorphism UI:**
  - High-contrast black and dark charcoal palette optimized for late-night viewing.
  - Frosted glass backdrop effects (`backdrop-filter: blur`) on control elements and visual panels.
- **Seamless Looping Background:**
  - Dual-layer infinite CSS keyframe animations (gradient sweep + rotating ambient mesh orbs).
- **Clear State Indicators:**
  - **Default:** Translucent mid-gray bars.
  - **Comparing:** Dark charcoal highlight (`#3c3c3c`) with subtle drop shadow.
  - **Swapping:** High-contrast pure white (`#ffffff`) with black text indicator.
  - **Sorted:** Metallic light gray (`#b4b4b4`) glow marking finalized elements.
- **Zero External Dependencies:** Native Web API implementation with no frameworks or third-party libraries required.

---

## 📁 Project Structure

```text
algorithm-visualizer/
│
├── index.html     # HTML5 structural layout and control controls
├── styles.css     # Dark monochrome styling, glass effects, & looping animations
└── script.js      # Core visualization engine, array generation, and async logic