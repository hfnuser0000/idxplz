import styled               from "styled-components";

import Layout               from "@/components/layout";
import Button               from "@/components/button";

export async function getStaticProps(context) {
    return {
        props: {
            url: 'https://printinix.com/pages/contact-us',
            title: 'Contact Us',
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
            <h1>Contact Us</h1>
            <p>
                <span>{`You can email us at: `}</span>
                <span>
                    <a href="mailto:support@printinix.com">support@printinix.com</a>
                </span>
            </p>
            <h2>Or leave us a message</h2>
            <input placeholder="Your email to receive our response" style={{width:'100%',padding:'1rem'}}/>
            <textarea placeholder="Your message" rows="10" style={{width:'100%',resize:'vertical',padding:'1rem',marginTop:'1rem'}}></textarea>
            <Button style={{width:'100%'}}>
                <strong>Send</strong>
            </Button>
        </Container>
    </Layout>;
}


