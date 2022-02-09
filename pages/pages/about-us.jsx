import styled               from "styled-components";

import Layout               from "@/components/templates/layout";

export async function getStaticProps(context) {
    return {
        props: {
            url: 'https://printinix.com/pages/about-us',
            title: 'About Us',
            description: '',
        }, // will be passed to the page component as props
        revalidate: 60, // In seconds
    }
}

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
`;

export default function ShopPage(props) {
    let {title, url, description} = props;

    return <Layout title={title} description={description} url={url}>
        <Container>
            <h1>About Us</h1>
            <p>{`Congrats! You found a place with the coolest items.`}</p>
            <p>{`We have spent years searching for creative, smart and useful products around the world and bring them to you with a belief that they may help you make your life easier. We are also helping a lot of people have great ideas to gift their friends. We are sure that in this online shopping house, there is stuff you may not know that it has even existed.`}</p>
            <p>{`We always try our best to provide customers great online shopping experience by ensuring not only the smooth buying process but also the good after-sales service. Please do not hesitate to contact us, give us comments, feedbacks, suggestions or even criticisms.`}</p>
            <p>{`Life is too short to live in chaos, take it easy and make it fun by using creative stuff.`}</p>
            <p>{`Thanks for stopping by! Feel free to contact us if you have any questions.`}</p>
            <p>{`Happy Shopping!`}</p>
            <h2>Contact Info</h2>
            <p>
                <strong>{`Address: `}</strong>
                <span>{`814 Mission Street, Suite 600, San Francisco, CA, 94103, United States`}</span>
            </p>
            <p>
                <strong>{`Email: `}</strong>
                <span>
                    <a href="mailto:support@printinix.com">{`support@printinix.com`}</a>
                </span>
            </p>
        </Container>
    </Layout>;
}
