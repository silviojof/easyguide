import React from 'react'
import {ThemeProvider as EmotionThemeProvider} from 'emotion-theming'
import PropTypes from 'prop-types'
import merge from 'lodash.merge'
import defaultTheme from './theme'

const ThemeProvider = ({theme, children}) => (
  <EmotionThemeProvider theme={merge(defaultTheme, theme)}>
    {children}
  </EmotionThemeProvider>
)

ThemeProvider.propTypes = {
  theme: PropTypes.object,
  children: PropTypes.node,
}

ThemeProvider.defaultProps = {
  theme: {},
}

export default ThemeProvider
