import React from "react"
import BsForm from "react-bootstrap/Form"
import Zone from "./Zone"
import Parameter from "./Parameter"
import DateRange from "./DateRange"

export default class Form extends React.Component {

    render() {

        return (
            <BsForm>
                <Zone/>
                <Parameter/>
                <DateRange/>
            </BsForm>
        )
    }
}