import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";

import Script from 'next/script';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <NextNProgress
                color="#ff4626"
                stopDelayMs={0}
                startPosition={0.1}
                options={{ speed: 200 }}
            />
            <Component {...pageProps} />

            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-YWCSERQ3VY"
                strategy="lazyOnload"
                onLoad={() => {
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){window.dataLayer.push(arguments);}
                    window.gtag = gtag;
                    gtag('js', new Date());
                    gtag('config', 'G-YWCSERQ3VY', { page_path: window.location.pathname });
                }}
            />
        </>
    );
}

export default MyApp;
