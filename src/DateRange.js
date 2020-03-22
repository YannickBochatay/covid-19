import React from "react"
import Form from "react-bootstrap/Form"
import { withDataContext } from "./DataContext"
import { DateRangePicker } from "react-dates"
import moment from "moment"

export default withDataContext(class DateRange extends React.Component {

    state = {
        startDate : null,
        endDate : null,
        focusedInput : null
    }

    handleChange = ({ startDate, endDate }) => this.setState({ startDate, endDate })

    handleFocus = focusedInput => this.setState({ focusedInput })

    getMaxRange() {

        const { data } = this.props

        const dates = new Set(data
            .map(entry => Number(new Date(entry.date_de_passage)))
            .filter(date => !isNaN(date))
        )
        
        return {
            minDate : dates.length ? moment(Math.min(...dates)) : moment(),
            maxDate : dates.length ? moment(Math.max(...dates)) : moment()
        }
    }

    render() {

        return (
            <Form.Group controlId="dateRange">
                <Form.Label>Période</Form.Label>
                <br/>
                <DateRangePicker
                    startDate={ this.state.startDate }
                    startDateId="start_date"
                    endDate={ this.state.endDate }
                    endDateId="end_date"
                    onDatesChange={ this.handleChange }
                    focusedInput={ this.state.focusedInput }
                    onFocusChange={ this.handleFocus }
                    { ...this.getMaxRange() }
                />
            </Form.Group>
        )
    }
})