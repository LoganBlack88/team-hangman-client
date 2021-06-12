import * as React from 'react';
import './Tile.scss';

export default class Tile extends React.Component {

  render() {
    return (
      <div className={`tile ${this.props.tile.type}`}>
        <h2>{this.props.tile.value}</h2>
      </div>
    )
  }
}