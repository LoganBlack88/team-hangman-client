import * as React from 'react';
import { Col, Container, Row } from "react-bootstrap";

import TileBox from './TileBox';
import './Game.scss';


const GAME = {
  id: "1",
  quote: "It's alive!",
  author: "Dr. Frank",
  // TODO: Server should set value to empty string before returning
  quoteArray: [
    [
      { type: 'letter', value: 'I' },
      { type: 'letter', value: 'T' },
      { type: 'static', value: '\'' },
      { type: 'letter', value: '' /*'S'*/ },
    ], [
      { type: 'letter', value: 'A' },
      { type: 'letter', value: '' /*'L'*/ },
      { type: 'letter', value: 'I' },
      { type: 'letter', value: '' /*'V'*/ },
      { type: 'letter', value: 'E' },
      { type: 'static', value: '!' },
    ], [
      { type: 'letter', value: 'I' },
      { type: 'letter', value: 'T' },
      { type: 'static', value: '\'' },
      { type: 'letter', value: '' /*'S'*/ },
    ], [
      { type: 'letter', value: 'A' },
      { type: 'letter', value: '' /*'L'*/ },
      { type: 'letter', value: 'I' },
      { type: 'letter', value: '' /*'V'*/ },
      { type: 'letter', value: 'E' },
      { type: 'static', value: '!' },
    ], [
      { type: 'letter', value: 'I' },
      { type: 'letter', value: 'T' },
      { type: 'static', value: '\'' },
      { type: 'letter', value: '' /*'S'*/ },
    ], [
      { type: 'letter', value: 'A' },
      { type: 'letter', value: '' /*'L'*/ },
      { type: 'letter', value: 'I' },
      { type: 'letter', value: '' /*'V'*/ },
      { type: 'letter', value: 'E' },
      { type: 'static', value: '!' },
    ], [
      { type: 'letter', value: 'I' },
      { type: 'letter', value: 'T' },
      { type: 'static', value: '\'' },
      { type: 'letter', value: '' /*'S'*/ },
    ], [
      { type: 'letter', value: 'A' },
      { type: 'letter', value: '' /*'L'*/ },
      { type: 'letter', value: 'I' },
      { type: 'letter', value: '' /*'V'*/ },
      { type: 'letter', value: 'E' },
      { type: 'static', value: '!' }
    ]
  ],
  authorArray: [
    [
      { type: 'static', value: '~'}
    ], [
      { type: 'letter', value: '' /*'D'*/ },
      { type: 'letter', value: 'R' },
      { type: 'static', value: '.' }
    ], [
      { type: 'letter', value: '' /*'F'*/ },
      { type: 'letter', value: '' /*'R'*/ },
      { type: 'letter', value: 'A' },
      { type: 'letter', value: 'N' },
      { type: 'letter', value: '' /*'K'*/ }
    ]
  ]
};

export default class Game extends React.Component {

  game;

  constructor(props) {
    super(props);
    this.game = GAME;
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>Game Board</h1>
          </Col>
        </Row>
        <Row className="quote-box">
          <Col>
            <TileBox quote={this.game.quoteArray} />
          </Col>
        </Row>
        <Row className="author-box">
          <Col>
            <TileBox quote={this.game.authorArray} />
          </Col>
        </Row>
      </Container>
    );
  };
}