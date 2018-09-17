import React from 'react'
import enhancer from './Icon.hoc'
import icons from './icons'

const Icon = ({name, ...props}) => {
  const IconComponent = icons[name]
  return IconComponent ? <IconComponent {...props} /> : null
}

export default enhancer(Icon)
