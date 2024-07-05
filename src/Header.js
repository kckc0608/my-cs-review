import styled from 'styled-components';
import React from 'react';

const HeaderStyle = styled.div`
    @media (max-width: 1024px) {
        padding: 0.5rem 1.0rem;

        h1 {
            font-size: 28px;
        }
    }
    
    box-shadow: 0px 6px 6px lightgrey;
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