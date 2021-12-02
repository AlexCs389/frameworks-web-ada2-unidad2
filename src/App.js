import './App.css';
import DateTime from "./dateTime";
import {Component} from "react";
import {Form, Button, Container, Row, Col} from 'react-bootstrap';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            age: '',
            birthday: '',
            hobby: '',
            savedData: false
        }

        this.save = this.save.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    save(e) {
        e.preventDefault();
        this.setState({savedData: true});
    }

    render() {
        let html;
        if (this.state.savedData) {
            const birthDay = new Date(`${this.state.birthday} 00:00:00`);
            html = <Col xs="12" className="text-center">
                <DateTime name={this.state.name} hobby={this.state.hobby} birthday={birthDay}>
                </DateTime>
            </Col>;
        } else {
            html = <Col xs="12">
                <Form onSubmit={this.save}>
                    <Form.Group controlId="name">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="" name="name" onChange={this.onChange} />
                    </Form.Group>
                    <Form.Group className="mt-2" controlId="age">
                        <Form.Label>Edad</Form.Label>
                        <Form.Control type="number" placeholder="" name="age" onChange={this.onChange} />
                    </Form.Group>
                    <Form.Group className="mt-2" controlId="birthday">
                        <Form.Label>Fecha de cumpleaños</Form.Label>
                        <Form.Control type="date" placeholder="" name="birthday" onChange={this.onChange} />
                    </Form.Group>
                    <Form.Group className="mt-2" controlId="hobby">
                        <Form.Label>Pasatiempo</Form.Label>
                        <Form.Control type="text" placeholder="" name="hobby" onChange={this.onChange} />
                    </Form.Group>
                    <Form.Group className="text-center">
                        <Button className="mt-3"  variant="primary" type="submit">
                            Guardar
                        </Button>
                    </Form.Group>
                </Form>
            </Col>;
        }
        return (
            <Container className="w-100 h-100">
                <Row className="d-flex justify-content-center align-items-center h-100">
                    {html}
                </Row>
            </Container>
        )
    }
}

export default App;
