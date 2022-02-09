const { default: styled } = require("styled-components");

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    text-align: center;

    > h1 {
        margin-bottom: .5rem;
        display: flex;
        flex-wrap: wrap;
        white-space: pre-wrap;
        justify-content: center;
    }

    > div {
        width: 5rem;
        height: 5px;
        // border-radius: 999px;
        background: #ff7837;
    }
`;

export default function CollectionHeading(props) {
    return <Container>
        <h1 {...props}/>
        <div></div>
    </Container>
}