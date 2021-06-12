import * as React from 'react';

import './TileBox.scss'
import Tile from './Tile';


export default class TileBox extends React.Component {

  render() {
    return (
      <div className="tile-box">
        {this.props.quote.map((word, wIdx) => {
          return (
            <div key={wIdx} className="word">
              {word.map((letter, lIdx) => {
                return <Tile key={lIdx} tile={letter} />
              })}
            </div>
          )
        })}
      </div>
    )
  }
}