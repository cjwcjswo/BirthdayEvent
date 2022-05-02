import React, { useState, useEffect } from 'react';

import './App.css';
import penguin from './image/penguin.png';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import { Story_1 } from './story/Story_1';

import {
  Button,
  Form,
  Container,
  Row, Col,
  ListGroup,
} from 'react-bootstrap'

import Axios from 'axios'

const SERVER_DOMAIN = 'http://140.238.9.170:8080/'

interface BoardITF {
  onChangeItem : (item : BoardItem) => void
}

const BoardInputForm = (props : BoardITF) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const onChangeName = (e: any) => {
    setName(e.target.value);
  }

  const onChangeMessage = (e: any) => {
    setMessage(e.target.value);
  }

  const onClick = () => {
    if (name === '') {
      alert("이름을 입력하세요");
      return;
    }
    if (message === '') {
      alert("메세지를 입력하세요");
      return;
    }
    if (name.length > 8) {
      alert("이름이 너무 길어요");
      return;
    }
    if (message.length > 24) {
      alert("메세지를 짧게 부탁드려요^^");
      return;
    }

    const query = [];
    query.push(name);
    query.push(message);

    Axios.post(SERVER_DOMAIN + 'insert', JSON.stringify(query)).then(function (response) {
      console.log(response.data);
      onInsertFinish({row_num: response.data, writer: name, comment: message, write_date: new Date().getTime()});
    }).catch(function (err) {
      console.log(err);
    });

  }

  const onInsertFinish = (item : any) => {
    props.onChangeItem(item);
    setName('');
    setMessage('');
  }

  return (
    <Form>
      <Container fluid>
        <Row>
          <Col>
            <Form.Control placeholder="이름" value={name} onChange={onChangeName} />
          </Col>
          <Col xs={6}>
            <Form.Control placeholder="축하 메세지" value={message} onChange={onChangeMessage} />
          </Col>
          <Col>
            <Button onClick={onClick}>작성</Button>
          </Col>
        </Row>
      </Container>
    </Form>
  );
}

interface BoardItem {
  row_num: string,
  writer: string,
  comment: string,
  write_date: string,
}

const Board = () => {
  const [boardList, setBoardList] = useState<BoardItem[]>([]);

  useEffect(() => {
    Axios.post(SERVER_DOMAIN + 'select').then(function (response) {
      console.log(response.data);
      setBoardList(response.data);
    }).catch(function (err) {
      console.log(err);
    });

  }, []);


  const formattedDate = (date: Date): string => {
    return date.getFullYear() + '년 ' + (date.getMonth() + 1) + '월 ' + date.getDate() + '일 ' +
      date.getHours() + "시 " + date.getMinutes() + '분 ' + date.getSeconds() + '초';
  }

  const formattedBoardItem = (item: BoardItem) => {
    return (
      <>
        <span>[{formattedDate(new Date(item.write_date))}]</span>
        <span style={{ fontWeight: 'bold' }}> {item.writer}: </span>
        <span>{item.comment}</span>
      </>
    );
  }

  const boardItemList = boardList.map((item: BoardItem) => <ListGroup.Item key={item.row_num}>{formattedBoardItem(item)}</ListGroup.Item>);

  const onChangeItem = (item : BoardItem) => {
    const newBoardItemList : Array<BoardItem> = [];
    for (const boardItem of boardList) {
      newBoardItemList.push(boardItem); 
    }
    newBoardItemList.push(item); 
    setBoardList(newBoardItemList);
  }

  return (
    <div className="board">
      <Container fluid>
        <div className="board-back">
          <ListGroup>
            {boardList.length > 0 ? boardItemList : null}
          </ListGroup>
        </div>
      </Container>
      <BoardInputForm onChangeItem={onChangeItem}/>
    </div>
  );
}

const openDate = new Date(2022, 4, 5, 10, 0);

const Title = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    }
  });

  const remainFormattedTime = (date: Date): string => {
    // let remainHour = String((openDate.getDate() - date.getDate()) * 24 + (openDate.getHours() - date.getHours()));
    // let remainMinute = 
    let remainTime = Math.floor(openDate.getTime() / 1000) - Math.ceil(date.getTime() / 1000);
    if (remainTime < 0) {
      return "생일 축하해 펭긴아😊";
    }

    const remainDay = Math.floor(remainTime / (60 * 60 * 24));
    remainTime -= remainDay * 60 * 60 * 24;

    const remainHour = Math.floor(remainTime / (60 * 60));
    remainTime -= remainHour * 60 * 60;

    const remainMinute = Math.floor(remainTime / 60);
    remainTime -= remainMinute * 60;

    return getFormattedTime(String(remainHour + (remainDay * 24)), String(remainMinute), String(remainTime));
  }

  const getFormattedTime = (hour: string, min: string, second: string): string => {
    return hour.padStart(2, '0') + ":"
      + min.padStart(2, '0') + ":"
      + second.padStart(2, '0');
  }

  const onClickOpen = () => {
    if (openDate.getTime() - date.getTime() > 0) {
      alert('아닛! 펭기니 시간이 안됐으니 좀 더 잤다가 열어보라구~');
      return;
    }

    window.location.href = './1';
  }

  return (
    <>
      <h1 style={{ fontSize: 'large', marginTop: '10px' }}>🐧김펭긴🐧의 생일에 김펭긴을 초대합니다</h1>
      <div style={{ marginTop: '10px' }} className="img-div"><img src={penguin} /></div>
      <h2 style={{ marginTop: '10px' }}>개봉 시간</h2>
      <div id="timer"><span style={{ color: 'red' }}>❤</span> {remainFormattedTime(date)} <span style={{ color: 'red' }}>❤</span></div>
      <Board/>
      <Button variant="danger" style={{ marginTop: '10px', marginBottom: '20px' }} onClick={onClickOpen}>💌 열어보기</Button>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Title />}></Route>
          <Route path="/1" element={<Story_1 />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
