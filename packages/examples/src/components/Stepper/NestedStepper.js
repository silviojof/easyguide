import React from 'react'
import Stepper from '@easyguide/stepper'
import Step from '@easyguide/stepper/dist/Step'

const ActiveStepper = () => (
  <Stepper>
    <Step>
      {({ next }) => (
        <section>
          <Stepper finishCallback={next}>
            <Step>
              {nestedStep => (
                <section>
                  <h1>Inner step 1</h1>
                  <p>description</p>
                  <button onClick={nestedStep.previous}>previous</button>
                  <button onClick={nestedStep.next}>next</button>
                </section>
              )}
            </Step>
            <Step>
              {nestedStep => (
                <section>
                  <h1>Inner step 2</h1>
                  <p>description</p>
                  <button onClick={nestedStep.previous}>previous</button>
                  <button onClick={nestedStep.next}>next</button>
                </section>
              )}
            </Step>
          </Stepper>
        </section>
      )}
    </Step>
    <Step>
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
