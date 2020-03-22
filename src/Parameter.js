import React from "react"
import Form from "react-bootstrap/Form"
import { withDataContext } from "./DataContext"
import Select from "react-select"

export default withDataContext(class Parameter extends React.Component {

    state = { parameter : "" }

    handleChange = parameter => this.setState({ parameter })

    getOptions() {
        return this.props.metadata
            .filter(meta => meta.Colonne !== "dep" && meta.Colonne !== "date_de_passage")
            .map(meta => ({ label : meta.Description, value : meta.Colonne }))
    }

    render() {
        console.log(this.getOptions())

        return (
            <Form.Group controlId="parameter">
                <Form.Label>Paramètre</Form.Label>
                <Select
                    options={ this.getOptions() }
                    value={ this.state.parameter }
                    onChange={ this.handleChange }
                />
            </Form.Group>
        )
    }
})