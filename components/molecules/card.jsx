const { default: styled } = require("styled-components");

const hoverCSS = `
    :hover {
        border-color: #888;
    }
`;

const Container = styled.div`
    // border-radius: .5rem;
    border: 2px solid transparent;
    ${props => props.hoverEffect ? hoverCSS : ''}
    ${props => props.background ? 'background: '+props.background+';' : ''}
    ${props => props.ratio ? 'padding-top: ' + 1 / props.ratio * 100 +'%;': 'padding: 2rem;'}
    position: relative;
    overflow: hidden;

    > * {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }
`;

export default function Card(props) {
    return <Container {...props} />;
}