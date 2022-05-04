import React from 'react';
import sleep from '../image/sleep.png';
import manual_1 from '../image/manual_1.png';
import manual_2 from '../image/manual_2.png';

import {
  Container,
} from 'react-bootstrap'

const Story_1 = () => {
    return (
      <div>
        <h1> 1. 생일 축하해 김펭긴😊<span style={{color:'red'}}>❤</span></h1>
        <Container fluid style={{marginTop: '15px'}}>
          🕙!! 일어나 김펭긴!! 시간을 확인해보렴!! <br/>
          10:00 남짓 시간이 흐르고 있단다... <br/>
          내가 누구냐고?? 이제 곧 알게 될거야! <br/>
          <br/><br/><br/>...<br/><br/><br/>
          으 춥다 추워~ 🔊 띵동 띵동!!! <br/>
          어서 현관 문 앞을 열어 나를 맞이해주지 않겠니? <br/>
          밖에서 기다리려고했는데 추워서 못참겠구나 <br/>
          네가 올 때 까지 <span style={{color:'red'}}><b>현관 앞 계단</b></span>에 앉아있을게! <br/>
          <div className="img-div" style={{marginTop:'15px', marginBottom:'15px'}}>
            <img src={sleep}/>
          </div>
          아 그리고 널 위해 <b>🎁🎀선물</b>을 준비했어! <br/>
          내 이름과 다음 이야기를 이어나가려면 <br/>
          <span style={{color:'red'}}>선물</span>을 들어올려 받침대를 보면 <br/>
          <span style={{color:'red'}}><b>숫자가 적혀있는 종이</b></span>가 있단다. 그 <b>숫자</b>를 입력하렴! <br/>
          숫자를 어디에다 입력하는지는 아래 메뉴얼을 보렴! <br/>
          그래도 이해가 안된다면!!!?<br/>
          내 친구 똥폴베🐻‍❄ 에게 카톡을 보내보려무나!<br/>
          <span style={{color:'skyblue'}}><b>※ 다음 일정은 13:00 전까지 서울 어딘가로 이동해야 합니다.</b></span>
        </Container>
        <Container fluid style={{marginTop:'30px'}}>
          <h3>코드 입력 방법</h3>
          <div className="img-div" style={{marginTop:'30px', marginBottom:'30px'}}>
            <img src={manual_1}/>
          </div>
          <div className="img-div" style={{marginTop:'30px', marginBottom:'30px'}}>
            <img src={manual_2}/>
          </div>
        </Container>
      </div>
    );
  }

export { Story_1 };