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

            const dataZone = data
                .filter(item => item.code === zone?.value)
                .filter(item => moment(item.date) >= dateRange?.startDate)
                .filter(item => moment(item.date) <= dateRange?.endDate)
                .filter(item => Number(item[parameter?.value]))

            const dataSources = dataZone.reduce((map, item) => {
                if (!(item.sourceType in map)) map[item.sourceType] = []
                map[item.sourceType].push(item)
                return map
            }, {})

            const sourceTypes = Object.keys(dataSources)
            const maxLength = Math.max(...sourceTypes.map(sourceType => dataSources[sourceType].length))
            const bestSource = sourceTypes.find(sourceType => dataSources[sourceType].length === maxLength)
            const bestData = dataSources[bestSource] || []

            return {
                name :  zone?.label + " (données " + bestSource + ")",
                data : bestData.map(item => [Number(new Date(item.date)), Number(item[parameter?.value])] )
            }
        }) || []
    }

    setNewCasesSeries() {

        return this.setSeries().map(({ name, data}) => {
            let lastValue = 0
            let lastDate = null
            return {
                name,
                data : data.map(([date, value]) => {
                    const nbDays = (date - lastDate) / (1000 * 3600 * 24)
                    const item = [date, (value - lastValue) / nbDays]
                    lastValue = value
                    lastDate = date
                    return item
                })
            }
        })
    }

    setConfig() {

        const { scale } = this.props
        const param = options.find(({ value }) => value === this.props.parameter?.value)?.label

        return {
            title: { text: "" },
            chart: { width : null, height : this.props.chartHeight },
            yAxis: {
                title: { text: param + (scale === "newcases" ? " (nouveaux cas quotidiens)" : "") },
                type: scale === "newcases" ? "linear" : scale
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
            legend: {
                itemStyle: {
                    color: '#bbb'
                },
                itemHoverStyle:{
                    color: '#fff'
                }
            },
            series: scale === "newcases" ? this.setNewCasesSeries() : this.setSeries()
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