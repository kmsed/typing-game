import styled from 'styled-components';
import { useTypingDispatch, useTypingState } from '../Context';
import { useState } from 'react';

const InputBlock = styled.form`
    position: absolute;
    bottom: 10px;
    width: 500px;
    height: 80px;
    background-color: oldlace;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    input{
        width: 450px;
        height: 40px;
        background-color: oldlace;
    }
`;

//const onRemove = () => deleteDispatch({type: 'REMOVE', text});
const TypingInput = (props) => {
    const dispatch = useTypingDispatch()
    const state = useTypingState()

    const [answer, setAnswer] = useState('');

    const send = (e) => {
        e.preventDefault(); //기본기능 차단하기
        dispatch({
            type: 'REMOVE',
            text: answer //context에서 action부분
        })
        //props.setscore(props.score + 10)
        console.log(state)
        console.log(e.target.enter.value)

        const result = state.find((data) => {
            console.log(data)
            return data.text === e.target.enter.value
        })
        if (result) {
            props.setscore(props.score + 10) //setscore는 함수니까 ()안에 적는다
        }
        console.log(result)
    }

    return (
        <InputBlock onSubmit={send}>
            <input
                autoFocus placeholder="단어를 입력한 후, Eneter를 누르세요"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                type='text'
                name='enter'
            />
            <input type='submit' value='버튼' />
        </InputBlock>
    );
}
//onSubmit = 제출을 인식,
// react onclick 함수 2개 검색
//useTypingDispatch 이용해서 맞으면 삭제하기

export default TypingInput;