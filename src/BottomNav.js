import React from 'react';
import styled from 'styled-components';
import Button from './component/Button';

const BottomNavStyle = styled.div`
    display: flex;
    justify-content: space-between;
    text-align: center;
    background: white;
    padding: 1rem;

    box-shadow: 0px -6px 6px lightgrey;
`;

const BottomNav = () => {
    return (
        <BottomNavStyle>
            <Button content="이전 글" />
            <Button content="글 리스트" />
            <Button content="다음 글" />
        </BottomNavStyle>
    );
};

export default BottomNav;