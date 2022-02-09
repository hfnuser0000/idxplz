import dynamic from "next/dynamic";
import styled from "styled-components";

const Container = styled.img`
    object-fit: contain;
    width: 100%;
`;

const DynamicNextImage = dynamic(() => import('next/image'));


export default function Image(props) {

    // return <DynamicNextImage placeholder="blur" blurDataURL="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" layout="fill" objectFit="cover" {...props} />;
    // return <NextImage placeholder="blur" blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPc/QUAAnABsVpGlGwAAAAASUVORK5CYII=" layout="fill" objectFit="cover" {...props} />;
    return <Container {...props}/>
}
