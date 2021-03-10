import styled from 'styled-components';

const Wrapper = styled.div`
    background: #fff;
    border-radius: 5px;
`

const Tag = styled.div`
    background: green;
    border-radius: 25%;
    color: #fff;
    font-weight: bold;
`

const ImgWrapper = styled.div`
    width: 100%;
    height: 250px;
    overflow: hidden;
    position: relative;
    ${Tag} {
        position: absolute;
        right: 10px;
        bottom: 10px;
    } 
`

const CardName = styled.div`
    font-weight: bold;
    font-size: 1.2rem
`

const CardTitle = styled.div`
    color: gray;
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