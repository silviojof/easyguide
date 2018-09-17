import React from 'react'
import 'react-testing-library/cleanup-after-each'
import {render} from 'react-testing-library'
import TableSortLabel from '../TableSortLabel'

describe('<Table />', () => {
  it('should be rendered', () => {
    const {debug} = render(
      <TableSortLabel
        active={true}
        direction="desc"
      />
    )
    debug()

    expect(true).toBeTruthy()
  })
})
