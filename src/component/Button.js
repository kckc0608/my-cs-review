import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.div`
    text-align: center;
    font-weight: bold;
    font-size: 18px;

    &:hover {
        cursor: pointer;
    }
`;

const Button = (props) => {
    const {content} = props;
    return (
        <ButtonStyle>
            <div onClick={() => {console.log(content + " is clicked");}}>
                {content}
            </div>
        </ButtonStyle>
    );
};

export default Button;