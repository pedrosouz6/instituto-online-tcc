import styled from "styled-components";

export const GreetingMessageHeader = styled.p `
    font-size: 18pt;
    margin: 1rem 0 2rem 0;

    span {
        font-weight: 600;
    }
`

export const ContainerCards = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
`

export const Card = styled.div `
    flex: 1 1 280px;
    max-width: 300px;
    height: 120px;
    background: linear-gradient(45deg, rgb(42, 171, 175), teal);

    padding: 10px;
    border-radius: 5px;
    border-left:teal 3px solid;
`

export const CardHeader = styled.div `
    span {
        color: white;
        font-weight: 600;
    }
`

export const CardBody = styled.div `
    span, p {
        color: white;
    }

    span {
        font-size: 10pt;
    }

    p {
        font-size: 22pt;
        line-height: 70px;

        span {
            font-size: 12pt;
        }
    }
`