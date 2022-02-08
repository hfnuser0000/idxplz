import styled               from "styled-components";

import Layout               from "@/components/layout";
import CollectionHeading    from "@/components/collection-heading";
import PostTitle            from "@/components/post-title";
import Grid                 from "@/components/grid";

import Image                from "@/components/image";
import DemoImage            from '@/public/demo.png';

export async function getStaticProps(context) {
    const MarkdownIt = require('markdown-it');
    const md = new MarkdownIt();
    const demoPageContent = {
        title: '60+ Best Cyber Monday Deals Happening Right Now',
        body: md.render(`
Every year it seems like Black Friday and Cyber Monday deals start earlier and earlier, but this year might just break the record, with so many retailers having launched special savings events for the whole month of November. Get gifts for the [whole family](https://www.bestproducts.com/parenting/kids/g24440535/top-family-gift-ideas/) without worrying about potential shipping delays — and maybe even pick up a few things for the house in time for holiday hosting.
        
Whether you're searching for some new kitchen gadgets for the baker in your life, new tech for the music lovers, or just want to treat yourself to some updated wardrobe staples, we've got you covered this Cyber Monday.
        `)
    };
    return {
        props: {
            pageContent: demoPageContent
        },
        revalidate: 300, // In seconds
    }
}

const Container = styled.div`
`;

export default function HomePage(props) {
    const { pageContent } = props;
    return <Layout title="Home">
        <Container>
            <Grid templateColumns="1fr 1fr 1fr 1fr" gap="1rem" css={`
                grid-template-areas: "main main main content-table";

                @media screen and (max-width: 1200px) {
                    grid-template-areas: "content-table content-table content-table content-table"
                                         "main main main main";
                }
                `}>
                <p style={{gridArea: 'content-table',background: '#ffd43b',minHeight:'10rem'}}></p>
                <p style={{gridArea: 'main', justifySelf: 'left'}}>
                    <PostTitle>
                        {pageContent.title}
                    </PostTitle>
                    <Image src='/demo.png'/>
                    <div dangerouslySetInnerHTML={{__html: pageContent.body}}></div>
                </p>
            </Grid>
        </Container>
    </Layout>;
}


