import dynamic from "next/dynamic";

const DynamicNextImage = dynamic(() => import('next/image'));

export default function Image(props) {

    return <DynamicNextImage placeholder="blur" blurDataURL="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" layout="fill" objectFit="cover" {...props} />;
    // return <NextImage placeholder="blur" blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPc/QUAAnABsVpGlGwAAAAASUVORK5CYII=" layout="fill" objectFit="cover" {...props} />;
}
