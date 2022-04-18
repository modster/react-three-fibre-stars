import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'
import App from './App'

function Overlay() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
      <div style={{ position: 'absolute', top: '0', left: '0' }}>
        <h1 style={{ margin: 20, padding: 0, fontSize: '2em', fontWeight: 500, letterSpacing: '-0.05em' }}>Greeffer.com</h1>

        <div>
          <ul>
            <li>Github</li>




          </ul>
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(
  <>
    <App />
    <Overlay />
  </>,
  document.getElementById('root')

)
