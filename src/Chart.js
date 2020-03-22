import React from "react"
// import Highcharts from "react-highcharts"
import { withDataContext } from "./DataContext"

export default withDataContext(class Chart extends React.Component {

    render() {

        return (
            <>
                <pre>{ JSON.stringify(this.props.metadata, null, 4) }</pre>
                <pre>{ JSON.stringify(this.props.data, null, 4) }</pre>
            </>
        )
    }
})