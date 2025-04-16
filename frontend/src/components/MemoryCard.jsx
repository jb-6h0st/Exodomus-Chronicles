import React from 'react'

export default function MemoryCard({ memory }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '1rem',
      borderRadius: '8px',
      marginTop: '1rem',
      maxWidth: '400px'
    }}>
      <img src={memory.image} alt="memory" style={{ width: '100%', borderRadius: '6px' }} />
      <h3>{memory.title}</h3>
      <p>{memory.description}</p>
    </div>
  )
}
