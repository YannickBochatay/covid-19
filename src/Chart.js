import React from "react"
import Highcharts from "react-highcharts"
import { withDataContext } from "./DataContext"
import { options } from "./Parameter"
import moment from "moment"

export default withDataContext(class Chart extends React.Component {

    setSeries = () => {
        const { data, zones, dateRange, parameter } = this.props
        
        return zones.map(zone => ({
            name :  zone?.label,
            data : data
                    .filter(item => item.code === zone?.value)
                    .filter(item => moment(item.date) >= dateRange?.startDate)
                    .filter(item => moment(item.date) <= dateRange?.endDate)
                    .sort((a, b) => new Date(a.date) > new Date(b.date))
                    .map(item => [
                        Number(new Date(item.date)),
                        Number(item[parameter?.value])
                    ])
        }))
    }

    setConfig() {

        const param = options.find(({ value }) => value === this.props.parameter?.value)?.label

        return {
            title: { text: "COVID19 - " + param },
            subtitle: { text: 'Source : www.data.gouv.fr/fr/datasets/chiffres-cles-concernant-lepidemie-de-covid19-en-france' },
            yAxis: {
                title: { text: 'Nombre de cas' }
            },
            xAxis: {
                type: 'datetime'
            },
            plotOptions: {
                series: {
                    marker: {
                        enabled: true
                    }
                }
            },
            credits: {
                enabled: false
            },
            series: this.setSeries(),
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