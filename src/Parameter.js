import React from "react"
import Form from "react-bootstrap/Form"
import { withDataContext } from "./DataContext"
import Select from "react-select"

const exclude = ["sursaud_cl_age_corona", "dep", "date_de_passage"]

export default withDataContext(class Parameter extends React.Component {

    handleChange = parameter => this.props.updateSerie({ parameter })

    getOptions() {
        return this.props.metadata
            .filter(meta => !exclude.includes(meta.Colonne))
            .map(meta => ({ label : meta.Description, value : meta.Colonne }))
    }

    render() {
        return (
            <Form.Group controlId="parameter">
                <Form.Label>Paramètre</Form.Label>
                <Select
                    options={ this.getOptions() }
                    value={ this.props.getSerie().parameter }
                    onChange={ this.handleChange }
                />
            </Form.Group>
        )
    }
})