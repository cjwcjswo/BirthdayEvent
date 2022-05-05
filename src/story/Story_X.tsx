import React from 'react';

import x from '../image/x.jpg'

import {
    Container,
} from 'react-bootstrap'

const Story_X = () => {
    return (
        <Container fluid>
            <h1>읭..?</h1>
            <h1>그 답이 아닌 것 같은데..?</h1>
            <div className="img-div">
                <img src={x}/>
            </div>
            <br/><br/><br/>
        </Container>
    );
}

export { Story_X };