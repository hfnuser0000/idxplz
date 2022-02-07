import styled from "styled-components";

import Link                 from "next/link";

import Layout               from "@/components/layout";
import CollectionHeading    from "@/components/collection-heading";
import Card                 from "@/components/card";
import ProductCard          from '@/components/product-card';
import CardCollection       from '@/components/card-collection';

import ImageVersion         from 'core/image-version';

// export async function getStaticProps(context) {
export async function getServerSideProps(context) {
    const knexClient        = require('core/api/knex');
    const nameDB            = knexClient.connect('../name-db/names.db');
    const nameDataGenerator = require('core/name-data-generator');
    const { RNG, shuffle }  = require('core/rng');
    const { slug }          = context.params;
    if(slug == undefined) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }
    const name              = slug.replaceAll('_', ' ').replaceAll('-', ' ');
    const nameData          = nameDataGenerator.generateData(name);
    const url               = `https://printinix.com/${slug}`;
    const description       = nameData.description;
    const getProductHref    = sku => {
        return `https://shop.printinix.com/product/${sku}?customname=${encodeURIComponent(name)}`
        // return '/maintenance';
    };
    const getProductImageURL = sku => {
        return `https://cdn.printinix.com/mockup-image/${sku}---${encodeURIComponent(name)}.jpg?v=${ImageVersion()}&scale=0.4`
    };
    let products            = [
        {
            title: 'In Case Of Emergency My Blood Type Is Custom Name T-shirt',
            href: getProductHref('my-blood-type-is-custom-name-t-shirt'),
            imageURL: getProductImageURL('my-blood-type-is-custom-name-t-shirt'),
            price: 15.95
        },
        {
            title: "It's A Custom Name Thing You Wouldn't Understand T-shirt",
            href: getProductHref('you-wouldnt-understand-custom-name-t-shirt'),
            imageURL: getProductImageURL('you-wouldnt-understand-custom-name-t-shirt'),
            price: 15.95
        },
        {
            title: "Genuine & Trusted Custom Name 100% Original High Quality T-shirt",
            href: getProductHref('genuine-and-trusted-custom-name-t-shirt'),
            imageURL: getProductImageURL('genuine-and-trusted-custom-name-t-shirt'),
            price: 15.95
        },
        {
            title: "If Custom Name Can't Fix It We're All Screwed T-shirt",
            href: getProductHref('if-custom-name-cant-fix-it-we-re-all-screwed-t-shirt'),
            imageURL: getProductImageURL('if-custom-name-cant-fix-it-we-re-all-screwed-t-shirt'),
            price: 15.95
        },
        {
            title: "The Legend Is Alive Custom Name An Endless Legend T-shirt",
            href: getProductHref('the-legend-is-alive-custom-name-an-endless-legend-t-shirt'),
            imageURL: getProductImageURL('the-legend-is-alive-custom-name-an-endless-legend-t-shirt'),
            price: 15.95
        },
        {
            title: "Team Custom Name Life Time Member Legend T-shirt",
            href: getProductHref('team-custom-name-life-time-member-legend-t-shirt'),
            imageURL: getProductImageURL('team-custom-name-life-time-member-legend-t-shirt'),
            price: 15.95
        },
        {
            title: "Custom Name Cool Awesome Man Nutrition Facts T-shirt",
            href: getProductHref('custom-name-cool-awesome-man-nutrition-facts-t-shirt'),
            imageURL: getProductImageURL('custom-name-cool-awesome-man-nutrition-facts-t-shirt'),
            price: 15.95
        },
        {
            title: "Custom Name Retro T-shirt",
            href: getProductHref('custom-name-retro-t-shirt'),
            imageURL: getProductImageURL('custom-name-retro-t-shirt'),
            price: 15.95
        },
        {
            title: "Never Underestimate The Power Of A Custom Name T-shirt",
            href: getProductHref('never-underestimate-the-power-of-a-custom-name-t-shirt'),
            imageURL: getProductImageURL('never-underestimate-the-power-of-a-custom-name-t-shirt'),
            price: 15.95
        },
        {
            title: "Don't Mess With Custom Name You Get Jurasskicked T-shirt",
            href: getProductHref('dont-mess-with-custom-name-you-get-jurasskicked-t-shirt'),
            imageURL: getProductImageURL('dont-mess-with-custom-name-you-get-jurasskicked-t-shirt'),
            price: 15.95
        },
        {
            title: "I Am A Dirty Mind Caring Friend Funny Custom Name T-shirt",
            href: getProductHref('i-am-a-dirty-mind-caring-friend-funny-custom-name-t-shirt'),
            imageURL: getProductImageURL('i-am-a-dirty-mind-caring-friend-funny-custom-name-t-shirt'),
            price: 15.95
        },
        {
            title: "I Am A Brave Heart Filthy Mouth Funny Custom Name T-shirt",
            href: getProductHref('i-am-a-brave-heart-filthy-mouth-funny-custom-name-t-shirt'),
            imageURL: getProductImageURL('i-am-a-brave-heart-filthy-mouth-funny-custom-name-t-shirt'),
            price: 15.95
        },
        {
            title: "Dad The Man The Myth The Legend Custom Name T-shirt",
            href: getProductHref('dad-the-man-the-myth-the-legend-custom-name-t-shirt'),
            imageURL: getProductImageURL('dad-the-man-the-myth-the-legend-custom-name-t-shirt'),
            price: 15.95
        },
    ];
    let randomNames = [];
    shuffle(name, products);
    products.forEach(product => {
        product.title = product.title.replace('Custom Name', name);
    });

    // const nameCount = await nameDB('name').count();
    const nameCount = 27306287;

    while(randomNames.length < 60) {
        const randomID = 1 + Math.floor(Math.random() * nameCount);
        const randomName = (await nameDB('name').select().where({id: randomID}))[0].name;
        if(randomName.match(/^[A-Za-z]+$/g) && !randomNames.includes(randomName)) {
            randomNames.push(randomName);
        }
    }

    return {
        props: {
            slug,
            name,
            url,
            description,
            products: products.slice(0, 12),
            randomNames
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
    .card {
        position: relative;
    }

    .description-card {
        background: #7771;
        margin: 2rem 0;

        > div {
            position: relative;
        }
    }

    .random-names {
        // background: #7771;
        margin: 2rem 0;

        display: flex;
        flex-wrap: wrap;

        > div {
            position: relative;
        }

        p {
            width: 100%;
        }

        a {
            display: inline-block;
            background: #7771;
            padding: .5rem 1rem;
            margin: .5rem;
        }
    }
`;

export default function ShopPage(props) {
    let {slug, name, url, description, products, randomNames} = props;

    const thumbnailURL = products[0].imageURL;

    const title = `${name} name T-shirts, Sweatshirts, Sweaters, Tank Tops, Hoodies`;

    return <Layout title={title} description={description} url={url} thumbnail={thumbnailURL}>
        <Container>
            <CollectionHeading>
                <span>Custom name t-shirts for </span><span>{name}</span>
            </CollectionHeading>
            <Card className="description-card">
                <div>
                    <p>{description}</p>
                </div>
            </Card>
            <CardCollection gap="1rem">
                { products.map((product, idx) => 
                    <ProductCard
                        key         = {idx}
                        title       = {product.title}
                        hoverTitle  = "View product"
                        href        = {product.href}
                        price       = {product.price}
                        imageURL    = {product.imageURL}
                    />
                ) }
            </CardCollection>
            <div className="random-names">
                <p style={{fontWeight:'400'}}>Random names: </p>
                { randomNames.map((randomName, idx) => 
                    <Link key={`${name}#${idx}`} href={'/'+encodeURIComponent(randomName)} prefetch={false}>
                        <a>{randomName}</a>
                    </Link>
                )}
            </div>
        </Container>
    </Layout>;
}
