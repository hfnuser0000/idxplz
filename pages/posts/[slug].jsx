import styled from "styled-components";

import Link                 from "next/link";

import Layout               from "@/components/templates/layout";
import CollectionHeading    from "@/components/atoms/collection-heading";
import Card                 from "@/components/molecules/card";
import ProductCard          from '@/components/molecules/product-card';
import CardCollection       from '@/components/molecules/card-collection';
import PostTitle            from "@/components/atoms/post-title";

import ImageVersion         from 'core/image-version';

// export async function getStaticProps(context) {
export async function getServerSideProps(context) {
    const cmsApi = require('@/core/api/cms');
    const MarkdownIt = require('markdown-it');
    const md = new MarkdownIt();
    const { slug }          = context.params;
    const posts = (await cmsApi.posts.get({page: 1, populate: '*', filters: {
        Slug: slug
    }})).data;

    return {
        props: {
            post: posts.data.map(post => ({
                title: post.attributes.Title,
                slug: post.attributes.Slug,
                content: md.render(post.attributes.Content.replaceAll('(/uploads/', '(https://cms.indexplz.com/uploads/'))
            }))[0] ?? null
        }, // will be passed to the page component as props
        // revalidate: 60, // In seconds
    }
}

// export async function getStaticPaths() {
//     return {
//         // paths: names,
//         paths: [],
//         fallback: 'blocking'
//     }
// }

const Container = styled.div`
    img {
        object-fit: contain;
        max-width: 100%;
    }
    blockquote {
        background: #eee;
        margin: 0;
        padding: 2rem;
    }
`;

export default function ShopPage(props) {
    const { post } = props;
    let postEl = <>
        <h2>Uh oh...</h2>
        <p>{`Looks like the page has been removed.`}</p>
    </>
    let title = 'Not found';
    if(post) {
        title = post.title;
        postEl = <>
            <Link href={'/posts/'+post.slug}>
                <a>
                    <PostTitle>
                        {post.title}
                    </PostTitle>
                </a>
            </Link>
            <div dangerouslySetInnerHTML={{__html: post.content}}></div>
        </>
    }
    return <Layout title={title}>
        <Container>
            {postEl}
        </Container>
    </Layout>;
}


