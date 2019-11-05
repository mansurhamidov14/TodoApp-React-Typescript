import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBars } from "@fortawesome/free-solid-svg-icons";
import { Container, Block, Row, Col } from '../../../components';
import { EViewTypes, EIndentionSizes } from '../../../enums';



export const Header = ({}) => {
    return (
        <Block bg={EViewTypes.primary} paddingVertical={EIndentionSizes.X3}>
            <Container fluid>
                <Row>
                    <Col xs={12}>
                        <FontAwesomeIcon icon={faBars} size="lg"/>
                    </Col>
                </Row>
            </Container>
        </Block>
    )
    
}