import styled from 'styled-components';
import logo from '../../logo.svg';
import Navbar from './Navbar/index';
import { Link } from '@reach/router';

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
        <Link to="/">EPISODES</Link>
        <Link to="/characters">CHARACTERS</Link>
        <Link to="/locations">LOCATIONS</Link>
        <Link to="/quiz">QUIZ</Link>
        </Navbar>
    </>
)

export default Header