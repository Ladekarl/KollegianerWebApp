import React, { ReactElement } from 'react';
import './ComingSoon.scss';
import { Container, Row, Col } from 'reactstrap';
import Background from '../../components/Background';
import { Translate } from 'react-redux-i18n';

export default function Home(): ReactElement {
    const background = require("../../assets/images/backgrounds/adventure-dawn.jpg");

    return (
        <section className="section section-shaped coming-soon-page">
            <Background background={background} height="100%" />
            <Container>
                <Row>
                    <Col className="lg-12 justify-content-center text-center">
                        <h1 className="heading"><Translate value="comingSoon"/></h1>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}