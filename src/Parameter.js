import React from "react"
import Form from "react-bootstrap/Form"
import { withDataContext } from "./DataContext"
import Select from "react-select"

export const options = [{
    label : "Nombre de cas confirmés",
    value : "casConfirmes"
}, {
    label : "Nombre d'hospitalisations'",
    value : "hospitalises"
}, {
    label : "Nombre de décès",
    value : "deces"
}]

export default withDataContext(class Parameter extends React.Component {

    handleChange = parameter => this.props.setKeyValue("parameter", parameter)

    render() {
        return (
            <Form.Group controlId="parameter">
                <Form.Label>Paramètre</Form.Label>
                <Select
                    value={ this.props.parameter }
                    options={ options }
                    onChange={ this.handleChange }
                />
            </Form.Group>
        )
    }
})