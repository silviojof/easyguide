import React from 'react'

import Adapter from 'enzyme-adapter-react-16'
import Enzyme, {shallow} from 'enzyme'

import ThemeProvider from '../ThemeProvider'

Enzyme.configure({adapter: new Adapter()})

describe('<ThemeProvider />', () => {
  it('should be rendered', () => {
    const container = shallow(<ThemeProvider />)
    expect(container.props()).toHaveProperty('theme')
  })
  it('should render children', () => {
    const container = shallow(<ThemeProvider />)
    expect(container.props().children).toBeUndefined()

    const wrapper = shallow(
      <ThemeProvider>
        <p>Theme</p>
      </ThemeProvider>,
    )

    expect(wrapper.contains(<p>Theme</p>)).toBeTruthy()
  })
})
