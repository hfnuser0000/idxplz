import styled               from "styled-components";

import Link                 from 'next/link';

import Image                from "../atoms/image";
import Card                 from "./card";

import Config               from '@/core/config';


const Container = styled.div`
    a {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 2rem;
    }

    .thumbnail {
        display: flex;
        min-height: 10rem;

        img {
            object-fit: contain;
            width: 100%;
            height: 100%;
        }
    }

    h2 {
        display: inline;
        white-space: pre-wrap;
        font-weight: bold;
        font-size: .8rem;
        text-transform: uppercase;
        letter-spacing: .05rem;
        text-align: center;
        font-kerning: normal;
        color: #000;
    }
`;

export default function PostCard(props) {
    let { title, href, thumbnail } = props;
    return <Container>
        <Link href={href}>
            <a>
                <div className="thumbnail">
                    { thumbnail && <img src={thumbnail}/> }
                </div>
                <h2>
                    {title}
                </h2>
            </a>
        </Link>
    </Container>
}

