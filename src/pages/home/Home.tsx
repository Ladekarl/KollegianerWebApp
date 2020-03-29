import React, { ReactElement } from 'react';
import './Home.scss';
import { Jumbotron, Container } from 'reactstrap';
import { Translate } from 'react-redux-i18n'

export default function Home(): ReactElement {
    return (
        <section className="section section-shaped home">
            <Jumbotron className="frontpage-jumbo">
                <Container className="col-lg-8">
                    <div className="frontpage-title">
                        <Translate value="home.title" />
                    </div>
                    <div>
                        <Translate value="home.text" />
                    </div>
                </Container>
            </Jumbotron>
        </section>
    );
}
