import React from 'react';

import tezos from '../image/tezos.png'

import {
    Container,
} from 'react-bootstrap'

const Story_921103 = () => {

    return (
        <Container fluid>
            <h1>2. 나의 이름은.. (Code: 921103)</h1>
            <div className="img-div">
                <img src={tezos}/>
            </div>
            안녕? 김펭긴! 😁🐧 <br/>
            내 이름은 <span style={{color:'skyblue'}}><b>테조스</b></span>라고 해!<br/>
            왜 테조스냐고? 그거슨 너의 탄생일에 나도 탄생했기 때문!<br/>
            어찌 됐든 다음 일정에 대해 설명해야겠지!? <br/>
            똥폴베는 <span style={{color:'pink'}}>서울 xx에서 13:00에 점심을 예약했어</span><br/>
            거리는 그리 멀지 않으니 <span style={{color:'red'}}>12:00까지</span> 준비 완료하면 될거야! <br/>
            그리고 선물은 이게 끝이 아니란 사실!!<br/>
            <span style={{color:'pink'}}>총 3문제</span>가 더 준비되어 있고<br/>
            특정 지점에 도달할 때 마다 선물을 줄게😎<br/>
            자 다음 문제!! 우리가 갈 곳은 <br/>
            <span style={{color:'skyblue'}}><b>똥폴베한테 물어보렴!!</b></span><br/>
            <span style={{color:'skyblue'}}>이 곳의 <b>유실물센터 전화번호</b>가 다음 코드야!</span><br/>
            <br/><br/>
            <span style={{color:'skyblue'}}>※0을 포함하여 총 10자리입니다</span><br/>
            <span style={{color:'skyblue'}}>□□□□□□□□□□</span><br/>
            
        </Container>
    );
}

export { Story_921103 };