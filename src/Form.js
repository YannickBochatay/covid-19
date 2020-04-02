import React from "react"
import BsForm from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Zones from "./Zones"
import Parameter from "./Parameter"
import DateRange from "./DateRange"
import Scale from "./Scale"

export default class Form extends React.Component {

    render() {

        return (
            <BsForm>
                <Row>
                    <Col lg={ 3 }><Zones/></Col>
                    <Col lg={ 3 }><Parameter/></Col>
                    <Col lg={ 3 }><DateRange/></Col>
                    <Col lg={ 3 }><Scale/></Col>
                </Row>
            </BsForm>
        )
    }
}