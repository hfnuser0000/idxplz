const { default: styled } = require("styled-components");

const Container = styled.button`
    // border-radius: .5rem;
    border: none;
    outline: none;
    padding: .5rem 1rem;
    user-select: none;
    cursor: pointer;
    ${props => props.background ? 'background: '+props.background+';' : ''}
    :hover {
        color: #ff5a2d;
        --color: #ff5a2d;
    }
`;

export default function Button(props) {
    return <Container {...props} />;
}