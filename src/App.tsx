// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Card1 from './components/card_1/index.tsx'
import Card2 from './components/card_2/index.tsx'
import Card3 from './components/card_3/index.tsx'
import Card4 from './components/card_4/index.tsx'

function App() {
  return (
    <>
      {/* container */}
      <div className="mt-5 space-y-10">
        <h1 className="text-blue-600 text-center text-4xl font-medium underline underline-offset-2">
          Showcase layout Grid for card
        </h1>

        {/* layout grid */}
        <div className="grid grid-cols-4 justify-items-center items-start gap-x-3">
          {/* <div className="grid grid-flow-col auto-cols-max gap-x-10 place-content-center"> */}
          <Card1 />
          <Card2 />
          <Card3 />
          <Card4 />
        </div>
      </div>
    </>
  )
}

export default App
