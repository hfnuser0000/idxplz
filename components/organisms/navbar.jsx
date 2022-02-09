import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

import Button from '@/components/atoms/button';
import Icon from '@/components/atoms/icon';

import Logo from '@/public/logo.svg';
import globalState from '@/core/global-state';

const Container = styled.div`
    height: 5rem;
    background: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    width: 100%;
    box-shadow: 0 2px 5px #2222;
    user-select: none;
    padding: 0rem var(--screen-padding);
    z-index: 999;

    :before {
        content: '';
        position: absolute;
        display: block;
        width: 100%;
        height: 15rem;
        top: -15rem;
        left: 0;
        background: #fff;
    }

    > .wrapper {
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        max-width: var(--screen-max-width);

        .logo {
            font-size: 2rem;
            position: relative;
            height: 3.5rem;
            width: 3.5rem;
        }

        .nav-links {
            flex: 1;
            display: flex;
            justify-content: flex-end;

            @media screen and (max-width: 1200px) {
                display: none;
            }

            a {
                margin-right: 2rem;
            }
        }
    }

    a {
        transition: .2s;
        :hover {
            color: #ff5a2d;
        }
    }
`;

export default function Navbar(props) {
    return <Container>
        <div className='wrapper'>
            <Link href="/">
                <a className="logo" onDragStart={e => e.preventDefault()}>
                    <Image src={Logo} alt='logo' layout="fill" objectFit="contain" priority={true} />
                </a>
            </Link>
            <Button onClick={e => globalState.showSidebar.set(p => !p)} background="transparent">
                <Icon name="fasBars" style={{ width: '1.5rem', transform: 'translateY(3px)', fill: '#ffd43b' }}></Icon>
            </Button>
        </div>
    </Container>;
}



