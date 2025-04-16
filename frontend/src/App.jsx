import React from 'react'
import MemoryCard from './components/MemoryCard'

const sampleMemory = {
  title: "Memory Fragment #1",
  description: "A faded whisper of joy from the glowing markets of Lumina Perdida.",
  image: "https://placekitten.com/400/300",
}

export default function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>🧠 Exodomus Chronicles</h1>
      <p>Connect your wallet to explore forgotten memories.</p>

      <MemoryCard memory={sampleMemory} />

      <button
        style={{
          marginTop: '1rem',
          padding: '0.5rem 1rem',
          background: '#222',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Mint New Memory
      </button>
    </div>
  )
}
