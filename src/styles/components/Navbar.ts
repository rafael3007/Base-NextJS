import styled from "styled-components";


export const NavBar = styled.div`
    position: fixed;
    nav{
        background: ${props => props.theme.colors.background};
        height: 80px;
        width: 100%;
        display: flex;
        flex: flex-end;


    }
    div {
        flex: 7;
    }

    img.logo {
        width: 100px;
        height: 80px;
        border-radius: 15px;
        margin-left: 10px;

    }

    nav ul {
        margin-right: 10px;
        display: flex;
        margin-top: 20px;

    }

    nav ul li {
        margin: 0 5px;
        list-style: none;
    }

    nav ul li div {
        color: ${props => props.theme.colors.text};
        font-size: 17px;
        padding: 7px 13px;
        border-radius: 3px;
        text-transform: uppercase;
    }

    .menu.active, .menu:hover {
        background: #FFF;
        transition: 0.5s;
        color: ${props => props.theme.colors.background};
    }

    .checkbtn {
        font-size: 30px
        color: ${props => props.theme.colors.text};
        flaot: right;
        margin-right: 40px;
        cursor: pointer;
        display: none;

    }

    .checkbtn img {
        heigth:50px;
        width:50px;
    }

    #check {
        display: none;
    }

    @media(max-width: 952px) {
        nav {
            margin-top: 20px;
        }
        img.logo {

            width: 80px;
            height: 60px;
        }

        nav ul li {
            font-size: 16px;
        }

        .checkbtn img {
            margin
        }

    }

    @media(max-width: 858px){
        .checkbtn {
            display: block;
        }

        ul {
            position: fixed;
            width: 100%;
            height: 100vh;
            background: #e1e1e6;
            top: 80px;
            text-align: center;
            justify-content: space-around;
            transition: all 0.5s;

        }
        nav ul li {
            display: block;
            margin: 50px 0;
            line-height: 30px;
        }

        ul li div span {
            color: #121214;
            font-size: 18px;
            border-radius: 3px;
            text-transform: uppercase;
            font-family: bold;

        }

        .menu.active, .menu:hover {

            color: #FFF ;
            background: ${props => props.theme.colors.background};
            transition: 0.5s;
            span {
                color: white;
            }
            border-radius: 20px
        }







    }


`
