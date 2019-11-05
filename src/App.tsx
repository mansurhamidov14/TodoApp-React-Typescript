import React, {ChangeEvent} from 'react';
import './App.scss';
import {Alert, Col, Container, Row, TextInput, Button, Block, Badge, Text} from "./components";
import {EViewTypes} from "./enums/EViewTypes";
import {EIndentionSizes} from "./enums/EIndentionSizes";
import { ETextSizes } from './enums';
import { Header } from './app/components/Header';

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
            <Header/>
            <Container>
                <Alert
                    isVisible={isAlertVisible}
                    onClose={() => setAlertVisibility(false)}
                    variant={EViewTypes.success}
                    title="This is success alert heading"
                    message="This is success alert description. Please be aware of it"
                />
                <Container>
                    <Row>
                        <Col xs={12}>
                            <Block bg={EViewTypes.primary} paddingVertical={EIndentionSizes.X6}/>
                        </Col>
                        <Col xs={6}>
                            <Block bg={EViewTypes.danger} paddingVertical={EIndentionSizes.X6}/>
                        </Col>
                        <Col xs={6}>
                            <Block bg={EViewTypes.warning} paddingVertical={EIndentionSizes.X6}/>
                        </Col>
                        <Col xs={12}>
                            <Block bg={EViewTypes.light} paddingVertical={EIndentionSizes.X6} textAlign="center">
                                <Button title="Show alert" onClick={() => toggleAlertVisibility()} variant={EViewTypes.success}/>
                            </Block>
                        </Col>
                        <Col xs={4}>
                            <TextInput onChange={setter(setName)} value={name} type="text" id="name" label="Ad"/>
                        </Col>
                        <Col xs={4}>
                            <Badge variant={EViewTypes.danger} text="5"/>
                            <Text 
                                size={ETextSizes.MD} 
                                variant={EViewTypes.danger}
                                >asdasdasd</Text>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    );
};

export default App;
