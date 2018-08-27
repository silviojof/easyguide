import React from 'react'

import {storiesOf} from '@storybook/react'
import {linkTo} from '@storybook/addon-links'

import {Welcome} from '@storybook/react/demo'

storiesOf('Easyguide UI', module).add('GET STARTED', () => (
  <Welcome showApp={linkTo('Button')} />
))
