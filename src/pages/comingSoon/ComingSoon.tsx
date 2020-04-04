import React, { ReactElement } from 'react';
import './ComingSoon.scss';
import { Container, Row, Col } from 'reactstrap';
import { Translate } from 'react-redux-i18n';

export default function Home(): ReactElement {
    return (
        <section className="section section-shaped coming-soon-page">
            <div className="shape shape-style-1 bg-gradient-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
            </div>
            <Container>
                <Row>
                    <Col className="lg-12 justify-content-center text-center">
                        <h1 className="heading">
                            <Translate value="comingSoon" />
                        </h1>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
