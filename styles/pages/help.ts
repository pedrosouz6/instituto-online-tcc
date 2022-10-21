import styled from "styled-components";

export const ContainerButtonNewCalledHelp = styled.div `
    width: 100%;
    display: flex;
    justify-content: end;

    button {
        background-color: ${props => props.theme.colors.primary};
        color: white;
        border: none;
        border-radius: 3px;
        outline: none;
        padding: 5px 15px;
        text-transform: uppercase;
        cursor: pointer;

        transition: ${props => props.theme.animation.main};


        &:hover {
            opacity: .9;
        }
    }
`

export const ContainerTableHelp = styled.div `
    margin-top: 2rem;
`

export const ContainerHeaderTableHelp = styled.div `
    display: flex;
    justify-content: space-between;

    button {
        background: none;
        border: none;
        outline: none;
        cursor: pointer;
        
        i {
            display: block;
            padding-top: 3px;
            font-size: 18pt;
            color: ${props => props.theme.colors.primary};
        }
    }
`

export const TableHelp = styled.table `
    width: 100%;
    border-collapse: collapse;

    thead {
        background-color: ${props => props.theme.colors.backgroundTable};
        border: 1px solid ${props => props.theme.colors.border};
    }

    td {
        padding: 5px 15px;
    }

    tbody tr {
        border-bottom: 1px solid ${props => props.theme.colors.border};
    }
`

export const ToViewTableHelp = styled.td `
    width: 100px;
    
    p {
        background-color: ${props => props.theme.colors.primary};
        color: white;
        border-radius: 5px;
        padding: 3px;
        font-size: 9pt;
        text-transform: uppercase;
        text-align: center;
    }
`

export const StatusTableHelp = styled.td `
    width: 180px;
    margin: 0 auto;

    span {
        position: relative;

        &::before {
            content: '';
            position: absolute;
            top: 50%;
            left: -15px;
            transform: translateY(-50%);
            display: block;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: red;
        }
    }
`

export const DescriptionTableHelp = styled.td `
    span {
        display: block;
    }
`