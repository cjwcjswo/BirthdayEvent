import React from 'react';

import luv from '../image/luv.jpg'

import {
    Container,
} from 'react-bootstrap'

const Story_1712763 = () => {
    return (
        <Container fluid>
            <h1>생일 축하해 ❤🎉</h1>
            <h1>❤❤ 사랑해 ❤❤</h1>
            <div className="img-div">
                <img src={luv}/>
            </div>
            <br/><br/><br/>
        </Container>
    );
}

export { Story_1712763 };