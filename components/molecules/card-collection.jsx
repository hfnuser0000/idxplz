import Grid from "../atoms/grid";

const gridCSS = `
    grid-template-columns: 1fr 1fr 1fr 1fr;
    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 500px) {
        grid-template-columns: 1fr;
    }
`;

export default function CardCollection(props) {
    return <Grid {...props} css={gridCSS} />;
}

