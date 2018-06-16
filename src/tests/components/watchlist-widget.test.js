import React from 'react'
import { shallow } from 'enzyme'

import { WatchlistWidget } from '../../components/watchlist-widget'

describe('<WatchlistWidget />', () => {
  it('Renders without crashing', () => {
    shallow(<WatchlistWidget/>)
  })
})