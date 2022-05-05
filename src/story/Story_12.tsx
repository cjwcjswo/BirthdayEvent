import React from 'react';

import oe from '../image/52.jpg'

import {
    Container,
} from 'react-bootstrap'

const Story_12 = () => {
    return (
        <Container fluid>
            <h1>5. 우리는 방탈출 덕후</h1>
            <h1>(Code: 12)</h1>
            과연 방을 무사히 탈출했을까?? <br/>
            그래! 예전에 똥폴베와 했던<br/>
            대저택 레테의 잠겨버린 출구는 장치로만 이루어진 방!<br/>
            이번 오즈 익시드 드림은 재밌었나 모르겠네 😋<br/>
            어느새 하루의 반이 지나갔구나 <br/>
            언제나 그렇듯 시간이 참 빠르게 흘러갔겠지? <br/>
            정말 뜬금없지만 갑자기<br/>
            둘이 여행갔던 날들이 생각나는구나<br/>
            <br/>
            
            <div className="img-div">
                <img src={oe}/>
            </div>
            <br/>
            이 날 기억하니?? 같이 오이도를 갔던 날이야<br/>
            밤 바람도 제대로 쐬고, 폭죽도 보고, 점도 보고<br/>
            <span style={{color:'red'}}><b>이 날이 몇년 몇월 몇일이였더라...??</b></span><br/>
            <span style={{color:'red'}}>□□□□□□□□</span>
            <br/><br/><br/>
        </Container>
    );
}

export { Story_12 };