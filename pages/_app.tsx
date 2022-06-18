import React, {useEffect, ReactElement} from "react";
import { AppContext, AppInitialProps, AppProps } from "next/app";
import Head from "next/head";
import {NextComponentType} from "next";

interface Props {
    Component: any;
    pageProps: any;
}
const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps> =({Component, pageProps}) => {
    return <>
        <Head>
            <meta charSet="utf-8"/>
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/apple-touch-icon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon-16x16.png"
            />
            <link rel="manifest" href="/site.webmanifest"/>
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5d52b1"/>
            <meta name="application-TileColor" content="#5d52b1"/>
            <meta name="theme-color" content="#ffffff"/>
            <title>Devendra Prasad</title>
        </Head>
        <Component {...pageProps} />
    </>
}

export default MyApp