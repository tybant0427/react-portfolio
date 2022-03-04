import styled from 'styled-components'; 

export const Button = styled.div` 
    border-radius: 50px;
    background: #0d0d0d;
};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    color: #fff;
    font-size: px;
    
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center; 
    transition: all 0.2s ease-in-out;
   

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #0687a1;
    }
    `;