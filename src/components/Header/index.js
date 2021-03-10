import styled from 'styled-components';
import logo from '../../logo.svg';

const Logo = styled.img`
    width: 50px
`

const Header = () => (
    <>
        <Logo src={logo} alt="" />
    </>
)

export default Header