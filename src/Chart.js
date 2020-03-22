import React from "react"
import Highcharts from "react-highcharts"
import { withDataContext } from "./DataContext"
import moment from "moment"

export default withDataContext(class Chart extends React.Component {

    setSerie = serie => {
        const { data, metadata } = this.props

        return {
            name : metadata.find(({ Colonne }) => Colonne === serie.parameter?.value)?.Description,
            data : data
                    .filter(item => item.dep === serie.deps?.value)
                    .filter(item => moment(item.date_de_passage) >= serie.dateRange?.startDate)
                    .filter(item => moment(item.date_de_passage) <= serie.dateRange?.endDate)
                    .map(item => [
                        new Date(item.date_de_passage),
                        Number(item[serie.parameter?.value])
                    ])
        }
    }

    setConfig() {

        return {
            title: { text: 'Données relatives à l\'épidémie du covid-19' },
            subtitle: { text: 'Source : www.data.gouv.fr/fr/datasets/donnees-relatives-a-lepidemie-du-covid-19' },
            yAxis: {
                title: { text: 'Nombre de cas' }
            },
            xAxis: {
                type: 'datetime',
                dateTimeLabelFormats: {
                    month: '%e. %b',
                    year: '%b'
                }
            },
            plotOptions: {
                series: {
                    marker: {
                        enabled: true
                    }
                }
            },
            series: this.props.series.map(this.setSerie),
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center'
                        }
                    }
                }]
            }
        }
    }

    render() {
        return <Highcharts config={ this.setConfig() }/>
    }
})