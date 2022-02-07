import styled               from "styled-components";

import Layout               from "@/components/layout";
import CollectionHeading    from "@/components/collection-heading";
import Card                 from "@/components/card";
import ProductCard          from '@/components/product-card';
import CardCollection       from '@/components/card-collection';
import Image                from '@/components/image';

import ImageVersion         from 'core/image-version';

import Banner               from '@/public/banner.jpg';

export async function getStaticProps(context) {
    const knexClient        = require('core/api/knex');
    const nameDB            = knexClient.connect('../name-db/names.db');
    let randomNames = [];
    // const nameCount = await nameDB('name').count();
    const nameCount = 27306287;

    while(randomNames.length < 12) {
        const randomID = 1 + Math.floor(Math.random() * nameCount);
        const randomName = (await nameDB('name').select().where({id: randomID}))[0].name;
        if(randomName.match(/^[A-Za-z]+$/g) && !randomNames.includes(randomName)) {
            randomNames.push(randomName);
        }
    }

    const description = `Are you looking for name shirt? We have various designs of name printed on T shirt, Hoodie, Sweatshirt, Mug... Check it now and pick your favorites!`;
    return {
        props: {
            description,
            randomNames
        },
        revalidate: 300, // In seconds
    }
}

const Container = styled.div`
    .card {
    }

    .product {
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        font-size: 2rem;
        color: transparent;
        transition: .2s;
    }

    .mobile-banner {
        display: none;
    }

    @media screen and (max-width: 800px) {
        .desktop-banner {
            display: none;
        }

        .mobile-banner {
            display: block;
        }
    }
`;

export default function HomePage(props) {
    const {description, randomNames} = props;
    const names = randomNames.map(name => {
        return name.trim().replaceAll(' ', '-')
    }).filter(name => !!name);

    return <Layout title="Home" description={description}>
        <Container>
            <h1>{`Sorry, the shop service is down for a bit of maintenance right now :(.`}</h1>
            <h1>{`We'll be back soon.`}</h1>
        </Container>
    </Layout>;
}
