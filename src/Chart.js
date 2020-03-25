import React from "react"
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { withDataContext } from "./DataContext"
import { options } from "./Parameter"
import moment from "moment"

export default withDataContext(class Chart extends React.Component {

    setSeries = () => {
        const { data, zones, dateRange, parameter } = this.props
        
        return zones?.map(zone => {            
            return {
                name :  zone?.label,
                data : data
                        .filter(item => item.code === zone?.value)
                        .filter(item => moment(item.date) >= dateRange?.startDate)
                        .filter(item => moment(item.date) <= dateRange?.endDate)
                        .filter(item => Number(item[parameter?.value]))
                        .filter((item, i, arr) => arr.findIndex(el => el.date === item.date) === i)
                        .map(item => [
                            Number(new Date(item.date)),
                            Number(item[parameter?.value])
                        ])
            }
        })
    }

    setConfig() {

        const param = options.find(({ value }) => value === this.props.parameter?.value)?.label

        return {
            title: { text: "" },
            chart: { width : null, height : this.props.chartHeight },
            yAxis: {
                title: { text: param }
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
            tooltip: {
                backgroundColor: '#2a2a2b',
                color:"#bbb"
            },
            legend: {
                itemStyle: {
                    color: '#bbb'
                },
                itemHoverStyle:{
                    color: '#fff'
                }
            },
            series: this.setSeries()
        }
    }

    render() {
        return (
            <HighchartsReact
                highcharts={ Highcharts }
                options={ this.setConfig() }
                { ...this.props }
            />
        )
    }
})