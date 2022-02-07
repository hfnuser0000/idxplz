import styled               from 'styled-components';

import Link                 from 'next/link';

import Grid                 from "@/components/grid";

const Container = styled.footer`
    display: flex;
    justify-content: center;
    align-items: stretch;
    padding: 0rem var(--screen-padding);

    .absolute-footer {
        border-top: 1px solid #ff5a2d;
        max-width: var(--screen-max-width);
        width: 100%;
        padding: 1rem 0;
    }

    .contact-wrapper {
        grid-column: span 2;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }

    .contact-line {
        display: inline-flex;
    }

    .grid {
        @media screen and (max-width: 1200px) {
            > .contact-wrapper {
                grid-column: span 1 !important;
            }
            grid-template-columns: 1fr 1fr 1fr;
        }
        @media screen and (max-width: 800px) {
            grid-template-columns: 1fr 1fr;

            > .contact-wrapper {
                grid-column: span 2 !important;
            }
        }
        @media screen and (max-width: 500px) {
            grid-template-columns: 1fr;

            > .contact-wrapper {
                grid-column: span 1 !important;
            }

            .contact-line {
                flex-wrap: wrap;
            }

            .contact-title {
                width: 100% !important;
            }
        }
    }
`;

export default function Footer(props) {
    return <Container>
        <div className='absolute-footer'>
            <Grid className="grid" templateColumns="1fr 1fr 1fr 1fr" gap="1rem" style={{margin: '1rem 0'}}>
                <div style={{display:'flex',flexDirection:'column'}}>
                    <Link href="https://shop.printinix.com/about-us/">
                        <a>About us</a>
                    </Link>
                    <Link href="https://shop.printinix.com/contact-us/">
                        <a>Contact us</a>
                    </Link>
                    <Link href="https://shop.printinix.com/faqs/">
                        <a>FAQs</a>
                    </Link>
                    <Link href="https://shop.printinix.com/tracking-order/">
                        <a>Tracking Order</a>
                    </Link>
                </div>
                <div style={{display:'flex',flexDirection:'column'}}>
                    <Link href="https://shop.printinix.com/shipping/">
                        <a>Shipping</a>
                    </Link>
                    <Link href="https://shop.printinix.com/refunds-returns-exchanges-policy/">
                        <a>Return and refund policy</a>
                    </Link>
                    <Link href="https://shop.printinix.com/privacy-policy-2/">
                        <a>Privacy policy</a>
                    </Link>
                    <Link href="https://shop.printinix.com/terms-of-service/">
                        <a>Terms of service</a>
                    </Link>
                </div>
                <div  className='contact-wrapper'>
                    <span className='contact-line'>
                        <span className='contact-title' style={{width:'5rem',minWidth:'5rem',fontWeight:'400',marginRight:'1rem'}}>Address: </span>
                        211 East 43rd Street, New York, NY 10017, United States
                    </span>
                    <span className='contact-line'>
                        <span className='contact-title' style={{width:'5rem',minWidth:'5rem',fontWeight:'400',marginRight:'1rem'}}>Email: </span>
                        <Link href="mailto:support@printinix.com"><a>support@printinix.com</a></Link>
                    </span>
                </div>
            </Grid>
            <span><small>&copy; 2021 Printinix. </small></span>
            <span><small>All rights reserved.</small></span>
        </div>
    </Container>
}
