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
    dateRange : { startDate : moment("2020-02-15"), endDate : moment() },
    parameter : { value : "casConfirmes", label : "Nombre de cas confirmés" },
    chartHeight : null
  }

  divChart = React.createRef()

  async fetchData() {
    const res = await fetch("https://raw.githubusercontent.com/opencovid19-fr/data/master/dist/chiffres-cles.json")
    return await res.json()
  }

  async componentDidMount() {
    const chartHeight = this.divChart?.current?.getBoundingClientRect().height
    this.setState({ chartHeight })

    const data = await this.fetchData()
    this.setState({ data })
  }

  setKeyValue = (key, value) => this.setState({ [key] : value })

  render() {

    return (
      <DataContext.Provider
        value={ { ...this.state, setKeyValue : this.setKeyValue } }
      >
        <Container
          fluid
          className="main-container"
        >
          <Row>
            <Col>
              <h3>
                Chiffres-clés concernant l'épidémie de COVID19 en France
              </h3>
              <br/>
            </Col>
          </Row>
          <Row>
            <Col><Form/><br/></Col>
          </Row>
          <div className="chart" ref={ this.divChart }>
            <Chart/>
          </div>
          <div className="source">
            <small>
              Source&nbsp;:&nbsp;
                <a href="https://www.data.gouv.fr/fr/datasets/chiffres-cles-concernant-lepidemie-de-covid19-en-france">
                https://www.data.gouv.fr/fr/datasets/chiffres-cles-concernant-lepidemie-de-covid19-en-france
                </a>              
            </small>
          </div>
        </Container>
      </DataContext.Provider>
    )
  }
}

export default App
