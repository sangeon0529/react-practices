import React from 'react'

const App = () => {
  const h1style = {
        width: 280,
        height: 50,
        padding: 5,
        color: '#111',
        backgroundColor: "#eeff99"

  };

  return (
    <div id = "App">
        <h1 style={h1style}>Inline Styling</h1>
    </div>
  )
}

export default App