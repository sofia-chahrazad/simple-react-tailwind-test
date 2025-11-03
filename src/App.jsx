import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar'
import './App.css'

// src/App.jsx
export default function App() {
  return (
    <div className="bg-white min-h-screen pt-24"> {/* pt-24 = navbar height */}
      <Navbar />
      <main>
        <h1 className="text-2xl text-gray-800">Hello World</h1>
      </main>
    </div>
  );
}