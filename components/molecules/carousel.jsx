import styled from "styled-components";

const Container = styled.div`
    // border-radius: .5rem;
    overflow: hidden;
    position: relative;
`;

export default function Carousel(props) {
    return <Container {...props} />
}
