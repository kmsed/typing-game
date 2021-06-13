import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*{
    padding: 0px;
    margin: 0px;
}
html{
    width: 100%;
    height: 100%;
    position: relative;
}
body {
    background: #e9ecef;
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
`;

export default GlobalStyle;