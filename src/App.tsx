import React, {ChangeEvent} from 'react';
import './App.scss';
import {Alert, Col, Container, Row, TextInput, Button} from "./components";
import {colorVariants} from "./enums/colorVariants";

const App: React.FC = () => {
    const [name, setName] = React.useState('');
    const [isAlertVisible, setAlertVisibility] = React.useState(false);

    const setter = (set: ((value: string) => void)) => (event: ChangeEvent<HTMLInputElement>) => {
        const {
            target: {
                value
            }
        } = event;

        set(value);
    };

    const toggleAlertVisibility: (() => void) = () => {
        setAlertVisibility(!isAlertVisible)
    };

    return (
        <div className="App">
            <Container>
                <button onClick={() => setAlertVisibility(true)}>
                    show alert
                </button>
                <Row>
                    
                    <h1>Hello world</h1>
                    <TextInput
                        type={'text'}
                        onChange={setter(setName)}
                        value={name}
                    />
                    <Alert
                        isVisible={isAlertVisible}
                        title="This is primary alert title"
                        message="This is primary alert message"
                        variant={colorVariants.warning}
                        onClose={() => toggleAlertVisibility()}
                    />
                    <h1>Hello, {name}</h1>
                    <Col size={9} sm={8} md={5} lg={3} xl={12}>
                        <Button variant={colorVariants.warning} title={"button"}/>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default App;
