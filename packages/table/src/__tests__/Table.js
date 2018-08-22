import React from 'react'
import 'react-testing-library/cleanup-after-each'
import {render} from 'react-testing-library'
import Table from '../Table'

test('basic test', () => {
  const {container} = render(<Table />)

  expect(container.firstChild.nodeName).toBe('TABLE')
})
