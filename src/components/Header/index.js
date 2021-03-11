import styled from 'styled-components';
import logo from '../../logo.svg';
import Navbar from './Navbar/index';

const Logo = styled.img`
    height: 50px;
    width: 50px;
    display: inline-block;
    border:1px solid black;
`

const List = styled.div`
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    display: inline-block;
    margin: 0px 15px;
    border: 1px solid black;
`

const Header = () => (
    <>
        <Navbar>
        <Logo src={logo} alt="" />
        <List>EPISODES</List>
        <List>CHARACTERS</List>
        <List>LOCATIONS</List>
        <List>QUIZ</List>
        </Navbar>
    </>
)

export default Header