import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

import Button from '@/components/atoms/button';
import Icon from '@/components/atoms/icon';
import Grid from '@/components/atoms/grid';

import Logo from '@/public/logo.svg';

import { useState } from '@hookstate/core';
import globalState from '@/core/global-state';
import { useEffect } from 'react';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 5px #2222;

    position: fixed;
    left: 0;
    top: 0;
    width: 25rem;
    max-width: 100vw;
    height: 100vh;
    background: #ffd43b;
    transform: translateX(${props => props.show ? '0' : '-100%'});

    z-index: 999;
    padding: 0rem var(--screen-padding);
    user-select: none;
    transition: .25s;
    
    @media screen and (max-width: 1200px) {
        width: 100%;
    }

    > .sidebar-head {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        height: 5rem;
        padding: 0;
    }

    * {
        font-weight: bold;
        color: #000;
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

export default function Sidebar(props) {
    let state = useState(globalState);
    return <Container show={state.showSidebar.get()}>
        <div className='sidebar-head'>
            <Button onClick={e => globalState.showSidebar.set(false)} background="transparent">
                <Icon name="fa6solidXMark" style={{ width: '1.5rem', transform: 'translateY(3px)', fill: '#000' }}></Icon>
            </Button>
        </div>
        <div className='wrapper'>
            {/* <p>{'sidebar'}</p> */}
        </div>
    </Container>;
}



