import styled from 'styled-components';
import TypingHead from './TypingHead';
import TypingList from './TypingList';
import TypingInput from './TypingInput';
import { useTypingState } from '../Context';
import { useTypingDispatch } from '../Context';
import { useTypingNextId} from '../Context'
import React, { useState, useEffect, useRef } from 'react';

const TemplateBlock = styled.div`
    position: relative;
    width: 500px;
    height: 800px;
    background-color: mistyrose;
    padding: 10px;
    overflow: hidden; //넘치는걸 안보이게
`;


function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
        savedCallback.current();
        }
        if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
        }
    }, [delay]);
}

const TypingTemplate = () => {
    const state = useTypingState()
    const dispatch = useTypingDispatch()
    const nextId = useTypingNextId()

    const push = () => {
        console.log(state)
        dispatch({
            type : 'INSERT',
            id : nextId.current
        })
        nextId.current += 1
    }
    useInterval(push,5000)

    const [score, setScore] = useState(0)

    return (
        <TemplateBlock >
            <TypingHead score={score}/>
            {state.map(typing => (
                <TypingList key={typing.id} id={typing.id} text={typing.text}/>
            ))}
            <TypingInput score={score} setscore={setScore}/>
        </TemplateBlock>
    );
}

//score변수(현재상태 값 변수) setScore함수(상태값 갱신해주는 함수)
// 아무이름={}

export default TypingTemplate;
