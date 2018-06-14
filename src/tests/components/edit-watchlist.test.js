import React from 'react'
import { shallow } from 'enzyme'
import store from '../../store'

import EditWatchlist from '../../components/edit-watchlist'

describe('<EditWatchlist />', () => {
  it('Renders without crashing', () => {
    shallow(<EditWatchlist store={store} />)
  })
})