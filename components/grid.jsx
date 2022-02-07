const { default: styled } = require("styled-components");


const Container = styled.div`
    display: grid;
    ${props => props.gap ? 'grid-gap: '+props.gap+';' : ''}
    ${props => props.columnGap ? 'grid-column-gap: '+props.columnGap+';' : ''}
    ${props => props.rowGap ? 'grid-row-gap: '+props.rowGap+';' : ''}
    ${props => props.templateColumns ? 'grid-template-columns: '+props.templateColumns+';' : ''}
    ${props => props.templateRows ? 'grid-template-rows: '+props.templateRows+';' : ''}
    ${props => props.css ? props.css : ''}

`;

export default function Grid(props) {
    return <Container {...props} />;
}

