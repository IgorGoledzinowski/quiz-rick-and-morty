import styled from 'styled-components';

const Wrapper = styled.div`
    background: #fff;
    border-radius: 5px;
`

const Tag = styled.div`
    background: #05dbaa;
    border-radius: 50px;
    padding: 7px 10px;
    color: #fff;
    font-weight: bold;
`

const ImgWrapper = styled.div`
    width: 100%;
    height: 250px;
    background: grey;
    overflow: hidden;
    position: relative;
    ${Tag} {
        position: absolute;
        right: 10px;
        bottom: 10px;
        font-size:12px;
        text-transform: uppercase;
    } 
    img{
        min-width: 100%;
        height: 100%;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
`

const CardName = styled.div`
    font-weight: bold;
    font-size: 1.2rem;
    
`

const CardTitle = styled.div`
    color: gray;
    font-size: 14px;
    text-decoration: none;
`

const Card = ({tag, name, title, image}) => (
    <Wrapper>
        <ImgWrapper>
            {!!image && <img src={image} alt={name} />}
            <Tag>{tag}</Tag>
        </ImgWrapper>
        <CardName>{name}</CardName>
        <CardTitle>{title}</CardTitle>
    </Wrapper>
)

export default Card;