import styled from 'styled-components';

export const Container = styled.div `
    position: absolute;
    left: 230px;
    width: calc(100% - 230px);

    @media (max-width: 1100px) {
        left: 0;
        top: 0;
        width: 100%;
    }
`