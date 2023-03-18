import React from 'react';
import styled from 'styled-components';

const ErrorDialog = styled.h1`
    font-weight: bold;
    text-align: center;
`

const Error = () => {
    return (<ErrorDialog>컴포넌트가 렌더링 되지 않습니다!</ErrorDialog>)
}

export default Error