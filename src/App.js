import React from 'react';
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import DataContext from "./DataContext"
import Chart from "./Chart"
import Form from "./Form"
import moment from "moment"

class App extends React.Component {

  state = {
    data : [],
    zones : [{ value : "FRA", label : "France" }],
    dateRange : { startDate : moment("2020-02-01"), endDate : moment() },
    parameter : { value : "casConfirmes", label : "Nombre de cas confirmés" }
  }

  async fetchData() {
    const res = await fetch("https://raw.githubusercontent.com/opencovid19-fr/data/master/dist/chiffres-cles.json")
    return await res.json()
  }

  async componentDidMount() {
    const data = await this.fetchData()
    this.setState({ data })
  }

  setKeyValue = (key, value) => this.setState({ [key] : value })

  render() {

    return (
      <DataContext.Provider
        value={ { ...this.state, setKeyValue : this.setKeyValue } }
      >
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

export default App
