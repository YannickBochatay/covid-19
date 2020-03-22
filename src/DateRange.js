import React from "react"
import Form from "react-bootstrap/Form"
import { withDataContext } from "./DataContext"
import { DateRangePicker } from "react-dates"
import moment from "moment"

export default withDataContext(class DateRange extends React.Component {

    state = { focusedInput : null }

    handleChange = dateRange => this.props.updateSerie({ dateRange })

    handleFocus = focusedInput => this.setState({ focusedInput })

    getMaxRange() {

        const { data } = this.props

        const dates = new Set(data
            .map(entry => Number(new Date(entry.date_de_passage)))
            .filter(date => !isNaN(date))
        )
        
        return {
            minDate : dates.size ? moment(Math.min(...dates)) : moment(),
            maxDate : dates.size ? moment(Math.max(...dates)) : moment()
        }
    }

    render() {

        const { dateRange } = this.props.getSerie()
        const maxRange = this.getMaxRange()

        return (
            <Form.Group controlId="dateRange">
                <Form.Label>Période</Form.Label>
                <br/>
                <DateRangePicker
                    startDate={ dateRange.startDate }
                    startDateId="start_date"
                    endDate={ dateRange.endDate }
                    endDateId="end_date"
                    onDatesChange={ this.handleChange }
                    focusedInput={ this.state.focusedInput }
                    onFocusChange={ this.handleFocus }
                    isOutsideRange={ date => date < maxRange.minDate || date > maxRange.maxDate }
                    { ...maxRange }
                />
            </Form.Group>
        )
    }
})