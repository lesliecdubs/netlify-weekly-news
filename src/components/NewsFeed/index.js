//  ==========================================================================
//
//  News Feed
//
//  ==========================================================================
import React from 'react'
import PropTypes from 'prop-types'
import {startCase} from 'lodash'

import './styles.scss'

const NewsFeed = ({ data }) => {
  return (
    <div>
      {data.map((dateGroup, i) =>
        <div className="news-group" key={dateGroup.date}>
          <h3 className="news__date">{dateGroup.date}</h3>
          <div>
            {dateGroup.data.map((datum, i) =>
              datum.events.length > 0 &&
                <div className="news__date__site-group" key={i}>
                  <h4 className="news__date__site">
                    {startCase(datum.siteName)}:
                  </h4>
                  {datum.events.map((event, i) =>
                    <p className="news__date__site__event" key={i}>
                      {event}
                    </p>
                  )}
                </div>
              )
            }
          </div>
        </div>
      )}
    </div>
  )
}

NewsFeed.propTypes = {
  data: PropTypes.array.isRequired
}

export default NewsFeed
