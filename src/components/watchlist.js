import React from 'react'
import { getWatchlist, editWatchlistToggle } from '../actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Watchlist extends React.Component {
  editWatchlistToggle () {
    this.props.editWatchlistToggle()
  }

  render () {
    const renderedWatchlist = (
      <div className='watchlist'>
        {this.props.formattedWatchlist}
      </div>
    )

    const clickEditWatchlistMessage = (
      <div className="portfolio">
        <div>
          Click the edit button above to add to your watchlist
          <span role='img' aria-label='pointing up emoji'>&#128070;</span>
        </div>
      </div>
    )

    let watchlistSection
    if (this.props.watchlistData)
      watchlistSection =
        this.props.watchlistData.length === 0
          ? clickEditWatchlistMessage
          : renderedWatchlist

    return (
      <div>
        <div className="title-and-button">
          <div className="portfolio-title">Watchlist</div>
          <button className="edit fade-in-out" onClick={() => this.editWatchlistToggle()}>Edit</button>
        </div>
        {watchlistSection}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    loading: state.index.loading,
    watchlistData: state.index.watchlistData,
    formattedWatchlist: state.index.formattedWatchlist
  }
}

const mapDispatchToProps = {
  getWatchlist,
  editWatchlistToggle
}

export const ConnectedWatchlist = withRouter(connect(mapStateToProps, mapDispatchToProps)(Watchlist))
