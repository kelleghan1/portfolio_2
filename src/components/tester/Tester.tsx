import React, { useState, useEffect, FunctionComponent } from 'react' 

type TesterProps = {
  testerString1?: string
  testerString2?: string
}

export const Tester: FunctionComponent<TesterProps> = ({ testerString1, testerString2 }) => {
  const [number, setNumber] = useState(1)
  const [numberMult, setNumberMult] = useState(10)

  useEffect(
    () => {
      console.log('MOUNT', testerString1, testerString2)
    },
    [numberMult]
  )

  const handleInc = () => {
    setNumber(number + 1)
  }

  const handleMult= () => {
    setNumberMult(numberMult * 2)
  }

  return (
    <>
      <div>
        {number}
      </div>
      <div>
        {numberMult}
      </div>
      <button onClickCapture={handleInc}>INC</button>
      <button onClickCapture={handleMult}>INCMULT</button>
    </>
  )
}
