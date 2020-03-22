import React from "react"
import BsForm from "react-bootstrap/Form"
import Departement from "./Departement"
import Parameter from "./Parameter"
import DateRange from "./DateRange"

export default class Form extends React.Component {

    render() {

        return (
            <BsForm>
                <Departement/>
                <Parameter/>
                <DateRange/>
            </BsForm>
        )
    }
}