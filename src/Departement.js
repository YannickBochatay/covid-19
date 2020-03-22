import React from "react"
import Form from "react-bootstrap/Form"
import { withDataContext } from "./DataContext"
import Select from "react-select"

export default withDataContext(class Departement extends React.Component {

    handleChange = deps => this.props.updateSerie({ deps })

    getOptions() {
        const { data } = this.props
        const arrayUnique = [...new Set(data.map(entry => entry.dep))]      
        return arrayUnique.map(dep => ({ label : dep, value : dep }))
    }

    render() {
        return (
            <Form.Group controlId="departement">
                <Form.Label>Departement</Form.Label>
                <Select
                    options={ this.getOptions() }
                    value={ this.props.getSerie().deps }
                    onChange={ this.handleChange }
                    isMulti={ false }
                />
            </Form.Group>
        )
    }
})