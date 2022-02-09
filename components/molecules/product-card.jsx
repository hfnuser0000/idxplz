import styled               from "styled-components";

import Link                 from 'next/link';

import Image                from "../atoms/image";
import Card                 from "./card";

const Container = styled.div`
    position: relative;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        transition: .2s;
    }
    :hover {
        img {
            transform: scale(1.1);
        }
    }

    .card {
        width: 100%;
        background: #7771;
    }

    .product {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        background: transparent;
        font-weight: bold;
        font-size: 2rem;
        color: transparent;
        transition: .2s;

        :hover {
            background: #262d24bf;
            color: white;
        }
    }

    .product-title {
        color: #555;
        font-weight: 400;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-top: 1rem;
    }

    .price {
        display: block;
        text-align: center;
    }
`;

export default function ProductCard(props) {
    const { title="", hoverTitle, href="#", imageURL, ratio=1, price } = props;
    return <Container>
        <Card className="card" ratio={ratio}>
            <Link href={imageURL}>
                <a>
                    {/* <Image src={imageURL} alt={title}/> */}
                    <img src={imageURL} alt={title} />
                </a>
            </Link>
            <Link href={href}>
                <a className='product'>{hoverTitle}</a>
            </Link>
        </Card>
        <a className="product-title" href="#">{title}</a>
        {
            price &&
            <span className="price" href="#">only ${price}</span>
        }
    </Container>
}

