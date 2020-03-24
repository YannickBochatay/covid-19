import React from "react"
import Form from "react-bootstrap/Form"
import { withDataContext } from "./DataContext"
import Select from "react-select"

export default withDataContext(class Zone extends React.Component {

    handleChange = zones => this.props.setKeyValue("zones", zones)

    getOptions() {
        const { data } = this.props
        const sep = " - "
        const arrayUnique = [...new Set(data.map(entry => entry.code + sep + entry.nom))]
        
        return arrayUnique.sort().map(zone => {
            const [value, label] = zone.split(sep)
            return { label, value }
        })
    }

    render() {

        return (
            <Form.Group controlId="zone">
                <Form.Label>Zone</Form.Label>
                <Select
                    options={ this.getOptions() }
                    value={ this.props.zones }
                    onChange={ this.handleChange }
                    isMulti
                />
            </Form.Group>
        )
    }
})