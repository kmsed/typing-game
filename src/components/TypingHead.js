import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useTypingState } from '../Context';

const HeadBlock = styled.div`
    width: 500px;
    height: 150px;
    background-color: oldlace;
`;

const Timer = () => {
    const [minutes, setMinutes] = useState(parseInt(1));
    const [seconds, setSeconds] = useState(parseInt(0));

    useEffect(() => {
        const countdown = setInterval(() => {
            if(parseInt(seconds) > 0) {
                setSeconds(parseInt(seconds) -1);
            }
            if(parseInt(seconds) === 0) {
                if (parseInt(minutes) === 0) {
                    clearInterval(countdown);
                } else {
                    setMinutes(parseInt(minutes) - 1);
                    setSeconds(59);
                }
            }
        }, 1000);
        return () => clearInterval(countdown);
    }, [minutes, seconds]);
//[]가 변경될때 마다 실행

    // useEffect(() => {
    //     console.log("a")
    // }, []);
//useEffect은 []안에가 비어있다면 처음 한번만 실행

    return (
        <p> 남은 시간 : {`${minutes}:${seconds}`}</p>
    )
}

//setInterval -> 주기적으로 실행 하고 싶을때
//clearInterval -> 위에꺼를 끄고 싶을때 진행을 멈추는데 쓰인다.

//useTypingState은 함수이므로 실행시킨 리턴값이 리스트
const TypingHead = (props) => {
    const count = useTypingState()
    //획득 점수 부분
    return (
        <HeadBlock >
            <h2>타이핑 게임</h2>
            <p>남은 단어 개수 : {count.length}개</p>
            <Timer />
            <p>획득 점수 : {props.score}점</p>
        </HeadBlock>
    );
}

export default TypingHead;

