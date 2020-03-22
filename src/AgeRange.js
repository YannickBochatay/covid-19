import React from "react"
import Form from "react-bootstrap/Form"
import { withDataContext } from "./DataContext"
import Select from "react-select"

export default withDataContext(class AgeRange extends React.Component {

    state = { ageRange : [] }

    handleChange = ageRange => this.setState({ ageRange })

    getOptions() {

        const { data } = this.props

        const arrayUnique = [...new Set(data.map(entry => entry.sursaud_cl_age_corona))]
        
        return arrayUnique.map(age => ({ label : age, value : age }))
    }

    render() {

        return (
            <Form.Group controlId="ageRange">
                <Form.Label>Tranche d'âge</Form.Label>
                <Select
                    options={ this.getOptions() }
                    value={ this.state.ageRange }
                    onChange={ this.handleChange }
                    isMulti
                />
            </Form.Group>
        )
    }
})