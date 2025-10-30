import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// src/App.jsx
export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md text-center">
        <h1 className="text-2xl font-semibold mb-4 bg-black" >Hello — React + Tailwind</h1>
        <p className="text-slate-600">This is a minimal starter. Edit <code>src/App.jsx</code> to start.</p>
        <button className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
          Click me v2
        </button>
      </div>
    </div>
  );
}