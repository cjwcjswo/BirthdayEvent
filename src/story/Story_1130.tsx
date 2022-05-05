import React from 'react';

import oz from '../image/oz.jpg'

import {
    Container,
} from 'react-bootstrap'

const CONDITION_TIME = new Date(2022, 4, 5, 14, 0);
const Story_1130 = () => {
    const isConditionTime = () => {
        return new Date().getTime() > CONDITION_TIME.getTime();
    }

    const content = () => {
        if (isConditionTime()) {
            return (
                    <Container fluid>
                        <h1>4. 중식 코스요리집 난향</h1>
                        <h1>(Code: 1130)</h1>
                        점심은 맛있게 먹었니 김펭긴❤? <br />
                        제대로된 중식 코스요리라고 하기도 뭐하지만<br />
                        똥폴베는 중식 코스요리가 처음이였다고 해 🐣<br />
                        우리의 다음 일정은 너도 예상하다 싶이<br />
                        <span style={{ color: 'skyblue' }}><b>방탈출</b></span>이야! <br />
                        어린이날이라 인기있는 방탈출은 예상대로 꽉 차 있었지만...<br />
                        신촌에서 1위 테마인<br />
                        <span style={{ color: 'skyblue' }}><b>오즈 익시드 드림</b></span>이란 테마를 하러 간단다 😛<br />
                        <br />
                        <div className="img-div">
                            <img src={oz} />
                        </div>
                        <br />
                        자 여기서 문제! 룸이스케이프 올리브점에서<br />
                        똥폴베랑 예전에 방탈출을 한적이 있는데<br />
                        그 테마의 이름은 무엇일까???<br />
                        <span style={{ color: 'red' }}><b>테마 이름의 글자 갯수</b></span>가 정답이야!<br />
                    </Container>
            );
        } else {
            return (
                <Container fluid>
                    <h1>해당 문제는</h1>
                    <h1>{CONDITION_TIME.toLocaleString()}</h1>
                    <h1>에 열립니다.</h1>
                </Container>
            );
        }

    }

    return (
        <>{content()}</>
    );
}

export { Story_1130 };