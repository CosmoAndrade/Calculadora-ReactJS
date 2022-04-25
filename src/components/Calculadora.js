import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import './Calculadora.css'
import React, { useState} from 'react';


const Calculadora = () => {

const [txtNumeros,setTxtNumeros] = useState('0');

const addNumero = (numero) => {
    setTxtNumeros(txtNumeros + numero)
}

const definirOperacao = (op) => {
    setTxtNumeros(op)
}


    return (
        <Card style={{

            background: 'transparent !important',
            backgroundColor: '#007bff',
            padding: '5px',
            margin: '5px',
            width: '400px',

        }} >

            <Container>

                <Row>

                    <Col xs='3'>

                        <Button variant='danger'>C</Button>

                    </Col>

                    <Col xs='9'>

                        <Form.Control type="text"
                            name='txtNumeros'
                            className="text-end"
                            readOnly='readonly'
                            value={txtNumeros}
                            onChange={(e) => setTxtNumeros(e.target.value)}

                            style={{
                                width:'96%',
                                marginTop: '3px',
                                marginLeft: '6px'

                            }}
                         />

                    </Col>

                </Row>
                <Row>
                    <Col>
                        <Button variant='light'
                        onClick={() => addNumero('7')}
                        >7</Button>
                    </Col>
                    <Col>
                        <Button variant='light'
                          onClick={() => addNumero('8')}
                        
                        >8</Button>
                    </Col>
                    <Col>
                        <Button variant='light'
                          onClick={() => addNumero('9')}
                        
                        >9</Button>
                    </Col>

                    <Col>
                        <Button variant='warning'
                        onClick={() => definirOperacao('/')}
                        >/</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button variant='light'
                          onClick={() => addNumero('4')}
                        >4</Button>
                    </Col>
                    <Col>
                        <Button variant='light'
                          onClick={() => addNumero('5')}
                        >5</Button>
                    </Col>
                    <Col>
                        <Button variant='light'
                          onClick={() => addNumero('6')}
                        >6</Button>
                    </Col>

                    <Col>
                        <Button variant='warning'
                        onClick={() => definirOperacao('*')}
                        >*</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button variant='light'
                          onClick={() => addNumero('1')}
                        >1</Button>
                    </Col>
                    <Col>
                        <Button variant='light'
                          onClick={() => addNumero('2')}
                        >2</Button>
                    </Col>
                    <Col>
                        <Button variant='light'
                          onClick={() => addNumero('3')}
                        >3</Button>
                    </Col>

                    <Col>
                        <Button variant='warning'
                         onClick={() => definirOperacao('-')}
                        >-</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button variant='light'
                          onClick={() => addNumero('0')}
                        >0</Button>
                    </Col>
                    <Col>
                        <Button variant='light'
                        
                        >.</Button>
                    </Col>
                    <Col>
                        <Button variant='success'
                        
                        >=</Button>
                    </Col>

                    <Col>
                        <Button variant='warning'
                        onClick={() => definirOperacao('+')}
                        >+</Button>
                    </Col>
                </Row>


            </Container>



        </Card>
    );
}

export default Calculadora;