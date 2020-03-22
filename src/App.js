import React from 'react';
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import DataContext from "./DataContext"
import Chart from "./Chart"
import Form from "./Form"

const defaultSerie = {
  deps : [],
  dateRange : { startDate : null, endDate : null },
  parameter : ""
}

class App extends React.Component {

  state = {
    data : [],
    metadata : [],
    series : [defaultSerie],
    editingSerie : 0
  }

  getSerie = () => {
    const { series, editingSerie } = this.state
    
    return series[editingSerie] || defaultSerie    
  }

  updateSerie = serie => {
    const series = [...this.state.series]

    serie = { ...series[this.state.editingSerie], ...serie }

    series.splice(this.state.editingSerie, 1, serie)

    this.setState({ series })
  }

  async fetchData() {
    const res = await fetch("data.csv")
    const csv = await res.text()
    const rows = csv.split(/[\n\r]+/).filter(row => row)
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
    const rows = csv.split(/[\n\r]+/).filter(row => row)
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
      <DataContext.Provider
        value={ {
          ...this.state,
          getSerie : this.getSerie,
          updateSerie : this.updateSerie
        } }>
        <Container fluid>
          <Row>
            <Col>
              <Form/>
            </Col>
            <Col xs={ 9 }>
              <Chart/>
            </Col>
          </Row>
        </Container>
      </DataContext.Provider>
    )
  }
}

export default App;
