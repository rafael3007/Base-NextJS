import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 80px;


    section {
        display: flex;
        flex-direction: column;

        align-items: center;
        justify-content: center;
        width: 30%;
    }

    section img {
        height: 300px;
        width: 300px;
        border-radius: 150px;

    }

    section h1 {
        font-size: 34px;
        color: ${props => props.theme.colors.primary};
        margin-top: 20px;

    }

    section div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    section p {
        font-size:18px;
        text-align: justify;
        padding: 10px;
    }

    section ul {
        padding: 10px;
        list-style: none;

    }

    section ul li {
        padding: 2px;
        text-align: center;
        align-items: center;
        justift-content: center;
    }



    .description {
        align-self: flex-start;

    }
    .experience {
        margin-bottom: 25px;
        width: 400px;

        background: #FFF;
        border-radius: 15px;

    }

    .experience .header {
        display: flex;
        flex-direction: row;
        align-items: baseline;
    }

    .experience .header span {
        font-size: 18px;
        color: #666696;

    }

    .experience .time {
        margin-top: -10px;
        color: #666666;
    }

    .experience .description {
        text-align: justify;
        padding: 15px 50px;
        color: #404040;
        font-weight: bold;

    }

    .experience:hover {
        -moz-transform: scale(1.2);
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
        transition: transform 0.6s;
    }





`
