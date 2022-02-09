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
            <span><small>&copy; 2021 IndexPlz. </small></span>
            <span><small>All rights reserved.</small></span>
        </div>
    </Container>
}
