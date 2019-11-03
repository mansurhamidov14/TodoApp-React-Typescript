import React, {ChangeEvent} from 'react';
import './App.scss';
import {Alert, Container, Row, TextInput} from "./components";
import {alertTypes} from "./components/Alert/models";

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
                <Row>
                    <button onClick={() => setAlertVisibility(true)}>
                        show alert
                    </button>
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
                        type={alertTypes.danger}
                        onClose={() => toggleAlertVisibility()}
                    />
                    <h1>Hello, {name}</h1>
                </Row>

            </Container>
        </div>
    );
};

export default App;
