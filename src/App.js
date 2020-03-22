import React from 'react';
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import DataContext from "./DataContext"
import Chart from "./Chart"
import Form from "./Form"

class App extends React.Component {

  state = {
    data : [],
    metadata : []
  }

  async fetchData() {
    const res = await fetch("data.csv")
    const csv = await res.text()
    const rows = csv.split(/[\n\r]+/)
    const keys = rows.shift().split(/\s*,/)

    return rows.map(row => {
      const fields = row.split(/\s*,/)
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
    const keys = rows.shift().split(/\s*;/)

    return rows.map(row => {
      const fields = row.split(/\s*;/)
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
      <DataContext.Provider value={ this.state }>
        <Container fluid>
          <h1>Graphique interactif des données relatives à l'épidémie du covid-19 </h1>
          <Row>
            <Col>
              <Form/>
            </Col>
            <Col>
              <Chart/>
            </Col>
          </Row>
          <h6>
            Source&nbsp;:&nbsp;
            <a href="https://www.data.gouv.fr/fr/datasets/donnees-relatives-a-lepidemie-du-covid-19/">
              https://www.data.gouv.fr/fr/datasets/donnees-relatives-a-lepidemie-du-covid-19/
            </a>
          </h6>
        </Container>
      </DataContext.Provider>
    )
  }
}

export default App;
