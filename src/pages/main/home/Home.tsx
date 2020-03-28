import React, { ReactElement } from 'react';
import './Home.scss';
import { Jumbotron, Container } from 'reactstrap';

export default function Home(): ReactElement {
    return (
        <div className="home">
            <Jumbotron className="frontpage-jumbo">
                <Container className="col-lg-8">
                    <div className="frontpage-title">
                        Sejl med erfarne skippere på even'tur mod nære og fjerne kyster!
                    </div>
                    <div>
                        SailMore gør det nemt og sikkert at komme afsted på langturs-sejlads. Herhjemme og ude i verden.
                        Og du behøver ikke selv at kunne sejle!
                    </div>
                </Container>
            </Jumbotron>
        </div>
    );
}
