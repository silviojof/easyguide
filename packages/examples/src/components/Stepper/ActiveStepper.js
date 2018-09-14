import React from 'react'
import Stepper from '@easyguide/stepper'
import Step from '@easyguide/stepper/dist/Step'

const ActiveStepper = () => (
  <Stepper activeStep="STEP_TWO">
    <Step>
      {({ previous, next }) => (
        <section>
          <h1>Step 1</h1>
          <p>description</p>
          <button onClick={previous}>previous</button>
          <button onClick={next}>next</button>
        </section>
      )}
    </Step>
    <Step stepName="STEP_TWO">
      {({ previous, next }) => (
        <section>
          <h1>Step 2</h1>
          <p>description</p>
          <button onClick={previous}>previous</button>
          <button onClick={next}>next</button>
        </section>
      )}
    </Step>
  </Stepper>
)

export default ActiveStepper
