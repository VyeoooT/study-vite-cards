// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Card1 from './components/card_1/index.tsx'
import Card2 from './components/card_2/index.tsx'
import Card3 from './components/card_3/index.tsx'
import Card4 from './components/card_4/index.tsx'
import Card5 from './components/card_5/index.tsx'
import Card6 from './components/card_6/index.tsx'
import Card7 from './components/card_7/index.tsx'
import Card8 from './components/card_8/index.tsx'
import Card9 from './components/card_9/index.tsx'
import Card10 from './components/card_10/index.tsx'
import Card11 from './components/card_11/index.tsx'
import Card12 from './components/card_12/index.tsx'
import Card13 from './components/card_13/index.tsx'

function App() {
  return (
    <>
      {/* container */}
      <div className="mt-5 space-y-10">
        <h1 className="text-blue-600 text-center text-4xl font-medium underline underline-offset-2">
          Showcase layout Grid for card
        </h1>

        {/* layout grid */}
        <div className="grid justify-items-center items-start gap-x-3 gap-y-7 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 max-md:gap-y-20">
        {/* <div className="grid auto-rows-max hover:auto-rows-min"> */}
          <div><Card1 /></div>
          <div><Card2 /></div>
          <div><Card3 /></div>
          <div><Card4 /></div>
          <div className="justify-self-center 2xl:col-span-2 md:col-span-2"><Card5 /></div>
          <div><Card6 /></div>
          <div><Card7 /></div>
          <div><Card8 /></div>
          <div><Card9 /></div>
          <div><Card10 /></div>
          <div><Card11 /></div>
          <div><Card12 /></div>
          <div><Card13 /></div>
        </div>
      </div>
    </>
  )
}

export default App
