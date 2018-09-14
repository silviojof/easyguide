/* eslint-disable max-lines-per-function */
import 'react-testing-library/cleanup-after-each'
import 'jest-dom/extend-expect'
import React from 'react'
import {render, fireEvent} from 'react-testing-library'
import Stepper from '../Stepper'
import Step from '../Step'

describe('<Stepper />', () => {
  const eventClick = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
  })

  it('should render the first step as current', () => {
    const rtl = render(
      <Stepper>
        <Step>{() => <div data-testid="step">step 1</div>}</Step>
        <Step>{() => <div data-testid="step">step 2</div>}</Step>
      </Stepper>,
    )

    expect(rtl.container.children).toHaveLength(1)
    expect(rtl.getByTestId('step')).toHaveTextContent('step 1')
  })

  it('should render the active step by props', () => {
    const rtl = render(
      <Stepper activeStep="STEP_TWO">
        <Step stepName="STEP_ONE">
          {() => <div data-testid="step">step 1</div>}
        </Step>
        <Step stepName="STEP_TWO">
          {() => <div data-testid="step">step 2</div>}
        </Step>
      </Stepper>,
    )

    expect(rtl.container.children).toHaveLength(1)
    expect(rtl.getByTestId('step')).toHaveTextContent('step 2')
  })

  it('should go to the next step', () => {
    const rtl = render(
      <Stepper>
        <Step>
          {({next}) => (
            <div data-testid="step">
              step 1
              <button onClick={next} data-testid="step-next-button">
                next
              </button>
            </div>
          )}
        </Step>
        <Step>{() => <div data-testid="step">step 2</div>}</Step>
      </Stepper>,
    )

    fireEvent(rtl.getByTestId('step-next-button'), eventClick)

    expect(rtl.container.children).toHaveLength(1)
    expect(rtl.getByTestId('step')).toHaveTextContent('step 2')
  })

  it('should go to the previous step', () => {
    const rtl = render(
      <Stepper activeStep="STEP_2">
        <Step>{() => <div data-testid="step">step 1</div>}</Step>
        <Step stepName="STEP_2">
          {({previous}) => (
            <div data-testid="step">
              step 2
              <button onClick={previous} data-testid="step-previous-button">
                previous
              </button>
            </div>
          )}
        </Step>
      </Stepper>,
    )

    fireEvent(rtl.getByTestId('step-previous-button'), eventClick)

    expect(rtl.container.children).toHaveLength(1)
    expect(rtl.getByTestId('step')).toHaveTextContent('step 1')
  })

  it('should go to the specific step', () => {
    const rtl = render(
      <Stepper>
        <Step>
          {({goTo}) => (
            <div data-testid="step">
              step 1
              <button
                onClick={() => goTo('STEP_THREE')}
                data-testid="step-goto-button"
              >
                go to step 3
              </button>
            </div>
          )}
        </Step>
        <Step>{() => <div data-testid="step">step 2</div>}</Step>
        <Step stepName="STEP_THREE">
          {() => <div data-testid="step">step 3</div>}
        </Step>
      </Stepper>,
    )

    fireEvent(rtl.getByTestId('step-goto-button'), eventClick)

    expect(rtl.container.children).toHaveLength(1)
    expect(rtl.getByTestId('step')).toHaveTextContent('step 3')
  })

  it('should call finishCallback() on final step', () => {
    const finishCallback = jest.fn()
    const rtl = render(
      <Stepper finishCallback={finishCallback}>
        <Step>
          {({next}) => (
            <div data-testid="step">
              step 1
              <button onClick={next} data-testid="step-next-button">
                next
              </button>
            </div>
          )}
        </Step>
        <Step>
          {({next}) => (
            <div data-testid="step">
              step 2
              <button onClick={next} data-testid="step-next-button">
                next
              </button>
            </div>
          )}
        </Step>
      </Stepper>,
    )

    fireEvent(rtl.getByTestId('step-next-button'), eventClick)
    fireEvent(rtl.getByTestId('step-next-button'), eventClick)

    expect(rtl.container.children).toHaveLength(1)
    expect(rtl.getByTestId('step')).toHaveTextContent('step 2')
    expect(finishCallback).toHaveBeenCalled()
  })

  it('should render inner steppers', () => {
    const rtl = render(
      <Stepper>
        <Step>
          {() => (
            <div data-testid="step">
              step 1
              <Stepper>
                <Step>
                  {({next}) => (
                    <div data-testid="inner-step">
                      inner step 1
                      <button
                        onClick={next}
                        data-testid="inner-step-next-button"
                      >
                        next
                      </button>
                    </div>
                  )}
                </Step>
                <Step>
                  {({next}) => (
                    <div data-testid="inner-step">
                      inner step 2
                      <button
                        onClick={next}
                        data-testid="inner-step-next-button"
                      >
                        next
                      </button>
                    </div>
                  )}
                </Step>
              </Stepper>
            </div>
          )}
        </Step>
      </Stepper>,
    )

    expect(rtl.getByTestId('step')).toHaveTextContent('step 1')
    expect(rtl.getByTestId('inner-step')).toHaveTextContent('inner step 1')

    fireEvent(rtl.getByTestId('inner-step-next-button'), eventClick)

    expect(rtl.getByTestId('inner-step')).toHaveTextContent('inner step 2')
  })
})
