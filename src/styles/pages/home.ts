import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 50vw;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
        width: 250px;
        height: 150px;
        border-radius: 15px
    }


    h1{
        font-size: 54px;
        color: ${props => props.theme.colors.primary};
        margin-top: 40px;
    }

    p {
        margin-top: 24px;
        font-size: 24px;
        line-height: 32px;
    }
`
