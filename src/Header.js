import styled from 'styled-components';
import React from 'react';

const HeaderStyle = styled.div`
    padding: 1rem;
`;

const Header = (props) => {
    const {title} = props;
    return (
        <HeaderStyle>
            <h1>
                {title}
            </h1>
        </HeaderStyle>
    );
};

export default Header;