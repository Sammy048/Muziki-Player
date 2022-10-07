import React from 'react'
import './queue.css'

const Queue = ({tracks, setCurrentIndex}) => {
    console.log(tracks)
    return (
        <div className="queue-container flex">
          <div className="queue flex">
            <p className="upNext">Up Next</p>
            <div className="queue-list">
              {Array.isArray(tracks) ? tracks?.map((track, index) => (
                <div
                  key={index + "key"}
                  className="queue-item flex"
                  onClick={() => setCurrentIndex(index)}
                >
                  <p className="track-name">{track?.track?.name}</p>
                  <p>0:30</p>
                </div>
              )) : null}
            </div>
          </div>
        </div>
      );
}

export default Queue