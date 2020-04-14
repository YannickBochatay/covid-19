import React from "react"
import BsForm from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Zones from "./Zones"
import Parameters from "./Parameters"
// import DateRange from "./DateRange"
import Scale from "./Scale"

export default class Form extends React.Component {

    render() {

        return (
            <BsForm>
                <Row>
                    <Col md={ 4 }><Zones/></Col>
                    <Col md={ 5 }><Parameters/></Col>
                    <Col md={ 3 }><Scale/></Col>
                </Row>
            </BsForm>
        )
    }
}