import styled from 'styled-components';

const ListBlock = styled.div`
    width: 500px;
    height: 100px;
    background-color: oldlace;
    margin-top: 10px;
`;

const TypingList = (props) => {
    //console.log(this)
    return (
        <ListBlock>
            <p>{props.text}</p>

        </ListBlock>
    );
}
//리턴 위에서 콘솔로그 해야돼
export default TypingList;
