import styled from 'styled-components'
import Header from '../Header'

const Footer = styled.div`
    background: #3b3259;
    text-align: center;
    padding: 20px 0;
`

const Layout = ({children}) => (
    <div>
        <Header />
        {children}
        <Footer>
            Footer 
        </Footer>
    </div>
)

export default Layout

