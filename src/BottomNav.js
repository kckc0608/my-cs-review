import React from 'react';
import styled from 'styled-components';

const BottomNavStyle = styled.div`
    text-align: center;
    background: lightgrey;
    padding: 1rem;
`;

const BottomNav = () => {
    return (
        <BottomNavStyle>
            이전 글 / 글 리스트 / 다음 글
        </BottomNavStyle>
    );
};

export default BottomNav;