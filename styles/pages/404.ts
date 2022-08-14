import styled from 'styled-components';

export const Container404 = styled.main `
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 20px;
`

export const Section404 = styled.section `
    flex: 1;
    max-width: 450px;
    padding: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    p {
        font-size: 32pt;
    }

    h1 {
        margin-bottom: 1rem;
        text-align: center;

        span {
            color: ${props => props.theme.colors.primary};
        }
    }

    a {
        display: block;
        width: 180px;
        height: 40px;
        line-height: 40px;
        
        background-color: ${props => props.theme.colors.primary};
        color: white;
        
        border-radius: 25px;
        font-size: 10pt;
        text-align: center;
        text-transform: uppercase;
        text-decoration: none;
        
        transition: .3s ease-in-out;

        &:hover {
            opacity: .9;
        }
    }
`