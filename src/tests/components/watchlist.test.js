import React from 'react'
import { shallow } from 'enzyme'

import { ConnectedWatchlist as Watchlist } from '../../components/watchlist'

describe('<Watchlist />', () => {
  it('Renders without crashing', () => {
    shallow(<Watchlist/>)
  })
})