import React from "react"
import BsForm from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Zones from "./Zones"
import Parameter from "./Parameter"
import DateRange from "./DateRange"

export default class Form extends React.Component {

    render() {

        return (
            <BsForm>
                <Row>
                    <Col md={ 4 }><Zones/></Col>
                    <Col md={ 4 }><Parameter/></Col>
                    <Col md={ 4 }><DateRange/></Col>
                </Row>
            </BsForm>
        )
    }
}