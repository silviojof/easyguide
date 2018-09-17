import React from 'react'
import 'jest-dom/extend-expect'
import {render} from 'react-testing-library'
import Icon from '../Icon'
import StarWithMedal from '../StarWithMedal'

describe('<Icon />', () => {
  it('should render correctly with an icon name', () => {
    const rtl = render(<Icon name="star-with-medal" />)

    expect(rtl.container.querySelector('svg')).toBeInTheDocument()
  })

  it('should render correctly with a specific component icon', () => {
    const rtl = render(<StarWithMedal />)

    expect(rtl.container.querySelector('svg')).toBeInTheDocument()
  })

  it('should not render correctly with an invalid icon name', () => {
    const rtl = render(<Icon name="" />)

    expect(rtl.container.children).toHaveLength(0)
  })
})
