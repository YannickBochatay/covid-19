import React from 'react';
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Alert from "react-bootstrap/Alert"
import Spinner from 'reactjs-simple-spinner'
import DataContext from "./DataContext"
import Chart from "./Chart"
import Form from "./Form"
import Twitter from "./Twitter"
import moment from "moment"

class App extends React.Component {

  state = {
    data : [],
    zones : [{ value : "FRA", label : "France" }],
    dateRange : { startDate : moment("2020-03-01"), endDate : moment() },
    parameter : { value : "casConfirmes", label : "Nombre de cas confirmés" },
    scale : "linear",
    chartHeight : null,
    isFetching : false,
    fetchError : null
  }

  divChart = React.createRef()

  async fetchData() {
    const res = await fetch("https://raw.githubusercontent.com/opencovid19-fr/data/master/dist/chiffres-cles.json")
    return await res.json()
  }

  async componentDidMount() {
    const chartHeight = this.divChart?.current?.getBoundingClientRect().height
    this.setState({ chartHeight, isFetching : true })

    try {
      const data = await this.fetchData()
      this.setState({ data, isFetching : false })
    } catch (e) {
      this.setState({
        fetchError : "Problème de chargement des données",
        isFetching : false
      })
    }
  }

  setKeyValue = (key, value) => this.setState({ [key] : value })

  render() {

    const { isFetching, fetchError } = this.state

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
            </Col>
          </Row>
          <Row>
            <Col><Form/><br/></Col>
          </Row>
          <div className="chart" ref={ this.divChart }>
            { fetchError && <Alert variant="danger">{ fetchError }</Alert> }
            { isFetching ? <Spinner size="large"/> : null }
            { !fetchError && !isFetching ? <Chart/> : null }
          </div>
          <div className="footer">
            <Twitter/>
            <small className="source">
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
