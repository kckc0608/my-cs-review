import React from 'react';
import styled from 'styled-components';

const ContentStyle = styled.div`
    padding-left: 1rem;
    margin: auto auto;
    font-size: 18px;
    text-align: start;
`;

const Content = () => {
    return (
        <ContentStyle>
            컴퓨터구조와 DB, 캐시 히트, TLB, 가상 메모리
        </ContentStyle>
    );
};

export default Content;