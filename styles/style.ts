import styled from 'styled-components';

export const Container = styled.div `
    width: calc(100% - 230px);
    
    position: absolute;
    left: 230px;
    top: 70px;
    padding: 0 25px;

    @media (max-width: 1100px) {
        left: 0;
        width: 100%;
    }
`