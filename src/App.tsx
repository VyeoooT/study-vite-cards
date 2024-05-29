// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import CardContainer from './components/CardContainer.tsx'

import Card1 from './components/cards/card_1/index.tsx'
import Card2 from './components/cards/card_2/index.tsx'
import Card3 from './components/cards/card_3/index.tsx'
import Card4 from './components/cards/card_4/index.tsx'
import Card5 from './components/cards/card_5/index.tsx'
import Card6 from './components/cards/card_6/index.tsx'
import Card7 from './components/cards/card_7/index.tsx'
import Card8 from './components/cards/card_8/index.tsx'
import Card9 from './components/cards/card_9/index.tsx'
import Card10 from './components/cards/card_10/index.tsx'
import Card11 from './components/cards/card_11/index.tsx'
import Card12 from './components/cards/card_12/index.tsx'
import Card13 from './components/cards/card_13/index.tsx'
import Card14 from './components/cards/card_14/index.tsx'
import Card15 from './components/cards/card_15/index.tsx'
import Card16 from './components/cards/card_16/index.tsx'
import Card17 from './components/cards/card_17/index.tsx'
import Card18 from './components/cards/card_18/index.tsx'
import Card19 from './components/cards/card_19/index.tsx'
import Card20 from './components/cards/card_20/index.tsx'
import Card21 from './components/cards/card_21/index.tsx'
import Card22 from './components/cards/card_22/index.tsx'
import Card23 from './components/cards/card_23/index.tsx'
import Card24 from './components/cards/card_24/index.tsx'
import Card25 from './components/cards/card_25/index.tsx'
import Card26 from './components/cards/card_26/index.tsx'
import Card27 from './components/cards/card_27/index.tsx'
import Card28 from './components/cards/card_28/index.tsx'
import Card29 from './components/cards/card_29/index.tsx'
import Card30 from './components/cards/card_30/index.tsx'
import Card31 from './components/cards/card_31/index.tsx'
import Card32 from './components/cards/card_32/index.tsx'
import Card33 from './components/cards/card_33/index.tsx'
import Card34 from './components/cards/card_34/index.tsx'
import Card35 from './components/cards/card_35/index.tsx'
import Card36 from './components/cards/card_36/index.tsx'
import Card37 from './components/cards/card_37/index.tsx'
import Card38 from './components/cards/card_38/index.tsx'
import Card39 from './components/cards/card_39/index.tsx'
import Card40 from './components/cards/card_40/index.tsx'

function App() {
  return (
    <>
      {/* container */}
      <div className="mt-5 space-y-10">
        <h1 className="text-blue-600 text-center text-4xl font-medium underline underline-offset-2">
          Showcase layout Grid for card
        </h1>

        {/* layout grid */}
        <div className="flex flex-wrap justify-center gap-20">
        {/* <div className="grid justify-items-center items-start gap-x-3 gap-y-7 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 max-md:gap-y-20"> */}
        {/* <div className="grid auto-rows-max hover:auto-rows-min"> */}
          <CardContainer label="Card 1">
            <Card1 />
          </CardContainer>

          <CardContainer label="Card 2">
            <Card2 />
          </CardContainer>
          
          <CardContainer label="Card 3">
            <Card3 />
          </CardContainer>
          
          <CardContainer label="Card 4">
            <Card4 />
          </CardContainer>
          
          <CardContainer label="Card 5">
            <Card5 />
          </CardContainer>
          
          <CardContainer label="Card 6">
            <Card6 />
          </CardContainer>
          
          <CardContainer label="Card 7">
            <Card7 />
          </CardContainer>
          
          <CardContainer label="Card 8">
            <Card8 />
          </CardContainer>
          
          <CardContainer label="Card 9">
            <Card9 />
          </CardContainer>
          
          <CardContainer label="Card 10">
            <Card10 />
          </CardContainer>
          
          <CardContainer label="Card 11">
            <Card11 />
          </CardContainer>
          
          <CardContainer label="Card 12">
            <Card12 />
          </CardContainer>
          
          <CardContainer label="Card 13">
            <Card13 />
          </CardContainer>
          
          <CardContainer label="Card 14">
            <Card14 />
          </CardContainer>
          
          <CardContainer label="Card 15">
            <Card15 />
          </CardContainer>
          
          <CardContainer label="Card 16">
            <Card16 />
          </CardContainer>
          
          <CardContainer label="Card 17">
            <Card17 />
          </CardContainer>
          
          <CardContainer label="Card 18">
            <Card18 />
          </CardContainer>
          
          <CardContainer label="Card 19">
            <Card19 />
          </CardContainer>
          
          <CardContainer label="Card 20">
            <Card20 />
          </CardContainer>
          
          <CardContainer label="Card 21">
            <Card21 />
          </CardContainer>
          
          <CardContainer label="Card 22">
            <Card22 />
          </CardContainer>
          
          <CardContainer label="Card 23">
            <Card23 />
          </CardContainer>
          
          <CardContainer label="Card 24">
            <Card24 />
          </CardContainer>
          
          <CardContainer label="Card 25">
            <Card25 />
          </CardContainer>
          
          <CardContainer label="Card 26">
            <Card26 />
          </CardContainer>
          
          <CardContainer label="Card 27">
            <Card27 />
          </CardContainer>
          
          <CardContainer label="Card 28">
            <Card28 />
          </CardContainer>
          
          <CardContainer label="Card 29">
            <Card29 />
          </CardContainer>
          
          <CardContainer label="Card 30">
            <Card30 />
          </CardContainer>

          <CardContainer label="Card 31">
            <Card31 />
          </CardContainer>

          <CardContainer label="Card 32">
            <Card32 />
          </CardContainer>

          <CardContainer label="Card 33">
            <Card33 />
          </CardContainer>

          <CardContainer label="Card 34">
            <Card34 />
          </CardContainer>

          <CardContainer label="Card 35">
            <Card35 />
          </CardContainer>

          <CardContainer label="Card 36">
            <Card36 />
          </CardContainer>

          <CardContainer label="Card 37">
            <Card37 />
          </CardContainer>

          <CardContainer label="Card 38">
            <Card38 />
          </CardContainer>

          <CardContainer label="Card 39">
            <Card39 />
          </CardContainer>

          <CardContainer label="Card 40">
            <Card40 />
          </CardContainer>
        </div>
      </div>
    </>
  )
}

export default App
