import Head from "next/head";
import { useEffect } from "react";
import { createState } from "@hookstate/core";

import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer";
import styled from "styled-components";
import globalState from "@/core/global-state";

const globalCSS = `
    main.main-content {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    }
`;

const ContentContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-item: stretch;
    padding: 2rem var(--screen-padding);

    > * {
        max-width: var(--screen-max-width);
        width: 100%;
    }
`;

export default function Layout(props) {
    useEffect(() => {
        window.globalState = globalState;
    }, []);
    const title = props.title ? props.title + ` — indexplz` : 'indexplz';
    return <>
        <style jsx global>{ globalCSS }</style>

        <Head>
            <title>{ title }</title>

            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0" />

            <meta name="robots" content="index,follow" />
            <meta name="googlebot" content="index,follow" />

            <meta name="title" content={title} />
            <meta
                name="description"
                content={props.description}
            />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={props.url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={props.description} />
            <meta property="og:image" content={props.thumbnail ?? "https://cms.printinix.com/uploads/t_shirt_mockup_50b0640f9c.jpg"} />
            <meta property="og:site_name" content={`indexplz`} />

            <meta name="twitter:url" content={props.url} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={props.description} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content={props.thumbnail ?? "https://cms.printinix.com/uploads/t_shirt_mockup_50b0640f9c.jpg"} />

            <link rel="manifest" href="/site.webmanifest" />
            <link rel="canonical" href={props.url} />
        </Head>

        <main className="main-content">
            <Navbar/>
            <Sidebar/>
            <ContentContainer>
                { props.children }
            </ContentContainer>
            <Footer/>
        </main>
    </>
}

