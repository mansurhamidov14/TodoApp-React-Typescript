import React, {ChangeEvent} from 'react';
import './App.scss';
import {Alert, Block, Button, Col, Container, Row, Switcher, TextInput} from "./components";

import {colorVariants} from "./enums/colorVariants";
import {indentionSizes} from "./enums/indentionSizes";

const App: React.FC = () => {
    const [name, setName] = React.useState('');
    const [isActive, setSwitcherState] = React.useState(false);
    const [isAlertVisible, setAlertVisibility] = React.useState(false);

    const setter = (set: ((value: string) => void)) => (event: ChangeEvent<HTMLInputElement>) => {
        const {
            target: {
                value
            }
        } = event;

        set(value);
    };

    const toggleSwitcher = () => {
        setSwitcherState(!isActive)
    };

    const toggleAlertVisibility: (() => void) = () => {
        setAlertVisibility(!isAlertVisible)
    };

    return (
        <div className="App">
            <Container>
                <Alert
                    isVisible={isAlertVisible}
                    onClose={() => setAlertVisibility(false)}
                    variant={colorVariants.success}
                    title="This is success alert heading"
                    message="This is success alert description. Please be aware of it"
                />
                <Container>
                    <Row>
                        <Col xs={12}>
                            <Block bg={colorVariants.primary} paddingVertical={indentionSizes.X6}/>
                        </Col>
                        <Col xs={6}>
                            <Block bg={colorVariants.danger} paddingVertical={indentionSizes.X6}/>
                        </Col>
                        <Col xs={6}>
                            <Block bg={colorVariants.warning} paddingVertical={indentionSizes.X6}/>
                        </Col>
                        <Col xs={12}>
                            <Block bg={colorVariants.light} paddingVertical={indentionSizes.X6} textAlign="center">
                                <Button variant={colorVariants.info} title={"INFO BUTTON"}
                                        onClick={() => toggleAlertVisibility()}/>
                            </Block>
                        </Col>
                        <Col xs={4}>
                            <TextInput onChange={setter(setName)} value={name} type="text" id="name" label="Ad"/>
                            <Switcher isActive={isActive} onSwitch={() => toggleSwitcher()}/>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    );
};

export default App;
