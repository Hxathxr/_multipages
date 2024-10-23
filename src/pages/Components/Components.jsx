import Counter from './counter/counter.jsx'
import Variable from './variable/variable.jsx'
import { useState } from 'react'

import './Components.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Timer from './timer/timer.jsx'
import AddVariable from './variable/add-variable.jsx'
import Temperatures from './temperatures/temperatures.jsx'

function Components() {
  return (
    
    <div className="Components-container">
      <div className="Header">
        <h1>React Components</h1>
      </div>
      <div className="top-container">
        <div className="left-container">
          <Counter count={""} name="counter" />
          <Timer time={0} />
        </div>
        <div className="right-container">
          <AddVariable />
        </div>
      </div>
      <div className="bottom-container">
        <Temperatures />
      </div>
      
    </div>
  )
}

export default Components