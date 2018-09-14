import React from 'react'
import {storiesOf} from '@storybook/react'
import SimpleStepper from './components/Stepper/SimpleStepper'
import ActiveStepper from './components/Stepper/ActiveStepper'
import NestedStepper from './components/Stepper/NestedStepper'

storiesOf('Stepper', module)
  .add('default', () => <SimpleStepper />)
  .add('active step', () => <ActiveStepper />)
  .add('nested steps', () => <NestedStepper />)
