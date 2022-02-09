import styled               from 'styled-components';

import Link                 from 'next/link';

import Grid                 from "@/components/atoms/grid";

const Container = styled.footer`
    display: flex;
    justify-content: center;
    align-items: stretch;
    padding: 2rem var(--screen-padding);
    background: #333;

    * {
        color: #eee;
        font-size: .8rem;
    }

    a {
        font-weight: bold;
    }

    .absolute-footer {
        max-width: var(--screen-max-width);
        width: 100%;
        padding: 1rem 0;
    }

    .contact-wrapper {
        grid-column: span 2;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;

        a {
            font-weight: unset;
        }
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
            {/* <Grid className="grid" templateColumns="1fr 1fr 1fr 1fr" gap="1rem" style={{margin: '1rem 0'}}>
                <div style={{display:'flex',flexDirection:'column'}}>
                    <Link href="/">
                        <a>About us</a>
                    </Link>
                    <Link href="/">
                        <a>Contact us</a>
                    </Link>
                    <Link href="/">
                        <a>FAQs</a>
                    </Link>
                    <Link href="/">
                        <a>Tracking Order</a>
                    </Link>
                </div>
                <div style={{display:'flex',flexDirection:'column'}}>
                    <Link href="/">
                        <a>Shipping</a>
                    </Link>
                    <Link href="/">
                        <a>Return and refund policy</a>
                    </Link>
                    <Link href="/">
                        <a>Privacy policy</a>
                    </Link>
                    <Link href="/">
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
            </Grid> */}
            <span><small>&copy; 2021 Indexplz. </small></span>
            <span><small>All rights reserved.</small></span>
        </div>
    </Container>
}
