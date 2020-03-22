import React from 'react';
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

class App extends React.Component {

  state = {
    data : null,
    metadata : null
  }

  async fetchData() {
    const res = await fetch("data.csv")
    const csv = await res.text()
    const rows = csv.split(/[\n\r]+/)
    const keys = rows.shift().split(/,/)

    return rows.map(row => {
      const fields = row.split(/,/)
      return keys.reduce((acc, cur, i) => {
        acc[cur] = fields[i]
        return acc
      }, {})
    })
  }

  async fetchMetaData() {
    const res = await fetch("metadata.csv")
    const csv = await res.text()
    const rows = csv.split(/[\n\r]+/)
    rows.shift()
    const keys = rows.shift().split(/;/)

    return rows.map(row => {
      const fields = row.split(/;/)
      return keys.reduce((acc, cur, i) => {
        acc[cur] = fields[i]
        return acc
      }, {})
    })
  }

  async componentDidMount() {
    const data = await this.fetchData()
    const metadata = await this.fetchMetaData()
    this.setState({ data, metadata })
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col>Bienvenue</Col>
        </Row>
        <Row>
          <Col>
            <pre>{ JSON.stringify(this.state.metadata, null, 4) }</pre>
            <pre>{ JSON.stringify(this.state.data, null, 4) }</pre>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App;
