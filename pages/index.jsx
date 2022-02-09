import styled               from "styled-components";

import Layout               from "@/components/templates/layout";
import CollectionHeading    from "@/components/atoms/collection-heading";
import PostTitle            from "@/components/atoms/post-title";
import PostCard             from "@/components/molecules/post-card";
import Grid                 from "@/components/atoms/grid";
import Link                 from "next/link";

export async function getServerSideProps(context) {
    const cmsApi = require('@/core/api/cms');
    const posts = (await cmsApi.posts.get({page: 1, populate: ['Thumbnail'], fields: ['Title', 'Slug']})).data;
    return {
        props: {
            posts: posts.data.map(post => ({
                title: post.attributes.Title,
                slug: post.attributes.Slug,
                thumbnail: post.attributes.Thumbnail.data
                    ? "https://cms.indexplz.com"+post.attributes.Thumbnail.data.attributes.formats.thumbnail.url
                    : null
            }))
        },
        // revalidate: 300, // In seconds
    }
}

const Container = styled.div`
    img {
        object-fit: contain;
        max-width: 100%;
    }
    h1 {
        font-weight: bold;
    }
`;

export default function HomePage(props) {
    const { pageContent, posts } = props;
    return <Layout title="Home">
        <Container>
            <Grid templateColumns="1fr 1fr 1fr 1fr" gap="1rem" css={`
                grid-template-areas: "main main main content-table";

                @media screen and (max-width: 1200px) {
                    grid-template-areas: "content-table content-table content-table content-table"
                                         "main main main main";
                }
                `}>
                {/* <div style={{gridArea: 'content-table',background: '#ffd43b',minHeight:'10rem'}}></div> */}
                <div style={{gridArea: 'main', justifySelf: 'left'}}>
                    <h1>Recent posts</h1>
                    <Grid gap="1rem" css={`
                        grid-template-columns: 1fr 1fr 1fr;

                        @media screen and (max-width: 800px) {
                            grid-template-columns: 1fr 1fr;
                        }
                        `}>
                            { posts.map((post, idx) =>
                                <PostCard
                                    key={idx}
                                    title={post.title}
                                    thumbnail={post.thumbnail}
                                    href={'/posts/'+post.slug}
                                    style={{gridArea: 'card', justifySelf: 'left'}}
                                />
                            ) }
                    </Grid>
                </div>
            </Grid>
        </Container>
    </Layout>;
}


