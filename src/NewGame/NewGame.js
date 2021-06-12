import { Button, Form } from "react-bootstrap"

export default function NewGame() {
  return (
    <Form>
      <Form.Group controlId="newGameQuote">
        <Form.Label>Quote</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Group controlId="newGameAuthor">
        <Form.Label>Author</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Button variant="primary" type="submit">Play!</Button>
    </Form>
  )
}