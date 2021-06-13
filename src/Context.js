import React, { useReducer, createContext, useContext, useRef } from 'react'

const initialTypings = [
    {
        id: 1,
        text: '라이언',
    },
    {
        id: 2,
        text: '무지',
    },
    {
        id: 3,
        text: '콘',
    },
    {
        id: 4,
        text: '어피치',
    },
]

//state.push({id : 5, text : '상어'}); //값이 5가된다.

// 1. 랜덤하게 단어가 나오도록 , 이 단어 함수 만들기
// 2. id값을 nextId로 바꾸기 -> nextId.current , 1씩 증가 하도록 -> nextId.current += 1 이런식
const random = () => {
    const push = ['미키', '미니', '장미']
    const pushRandom = Math.floor(Math.random() * push.length)
    return push[pushRandom]
}

const typingReducer = (state, action) => {
    switch (action.type) {
        case 'REMOVE':
            return state.filter((a) => a.text !== action.text);
        case 'INSERT': //추가
            const put = [
                {
                    id : action.id,
                    text: random(),
                },
            ]
            return state.concat(put)
        default:
            throw new Error(`Unhandled action type: ${action.type}`)
    }
}
//action 객체
//action.nextId = 5 이렇게 아이디값 받악오기

const TypingStateContext = createContext()
const TypingDispatchContext = createContext()
const TypingNextIdContext = createContext()

//provider : 전달을 위한 셋팅 -> 가장 크게 감싸줘야해 (app.js)
export const TypingProvider = ({ children }) => {
    const [state, dispatch] = useReducer(typingReducer, initialTypings)
    const nextId = useRef(5)
    return (
        <TypingStateContext.Provider value={state}>
            <TypingDispatchContext.Provider value={dispatch}>
                <TypingNextIdContext.Provider value={nextId}>
                    {children}
                </TypingNextIdContext.Provider>
            </TypingDispatchContext.Provider>
        </TypingStateContext.Provider>
    )
}

export const useTypingState = () => {
    const context = useContext(TypingStateContext)
    if (!context) {
        throw new Error('Cannot find TypingProvider')
    }
    return context
}
//수정, 삭제
export const useTypingDispatch = () => {
    const context = useContext(TypingDispatchContext)
    if (!context) {
        throw new Error('Cannot find TypingProvider')
    }
    return context
}
//추가
export const useTypingNextId = () => {
    const context = useContext(TypingNextIdContext)
    if (!context) {
        throw new Error('Cannot find TypingProvider')
    }
    return context
}
//위에 세개는 데이터를 불러와서 읽고 수정하는 용도 -> 컴포넌트에서 부른다.
// => 면 함수임
