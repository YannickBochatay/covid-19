import React from 'react';
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

class App extends React.Component {

  state = {
    data : null,
    metadata : null
  }

  async componentDidMount() {
    const res = await fetch("data.csv")
    const csv = await res.text()
    const rows = csv.split(/[\n\r]/)
    const keys = rows.shift().split(/,/)
    const data = rows.map(row => {
      const fields = row.split(/,/)
      return keys.reduce((acc, cur, i) => {
        acc[cur] = fields[i]
        return acc
      }, {})
    })

    this.setState({ data })
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col>Bienvenue</Col>
        </Row>
        <Row>
          <Col>
            <pre>{ JSON.stringify(this.state.data, null, 4) }</pre>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App;
