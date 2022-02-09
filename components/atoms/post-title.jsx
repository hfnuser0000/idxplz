const { default: styled } = require("styled-components");

const Container = styled.div`
    display: inline-block;
    margin-bottom: 2rem;

    > h1 {
        display: inline;
        white-space: pre-wrap;
        font-weight: bold;
        color: #000;
        text-transform: uppercase;
        letter-spacing: .05rem;
        background-image: linear-gradient(#a41fff,#a41fff);
        background-size: .0625rem .3125rem;
        background-repeat: repeat-x;
        background-position: 0 79%;
        text-align: center;
        font-kerning: normal;
    }
`;

export default function PostTitle(props) {
    return <Container>
        <h1 {...props} />
    </Container>
}


