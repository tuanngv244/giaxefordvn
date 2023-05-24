import { NextSeo } from "next-seo";
import Head from "next/head";
import React, { FC } from "react";
import { siteMetadata } from "./siteMetadata";

type CommonSEOProps = {
  title: string;
  description?: string;
  openGraph?: {
    title?: string;
    description?: string;
    images?: any[];
    siteName?: string;
    type?: string;
    locale?: string;
  };
};

const CommonSEO: FC<CommonSEOProps> = ({ title, description, openGraph }) => {
  return (
    <React.Fragment>
      <NextSeo
        title={title}
        description={description}
        canonical={`${siteMetadata.siteUrl}`}
        // canonical={`${siteMetadata .siteUrl}${router.asPath}`}
        openGraph={openGraph}
        facebook={{
          appId: "",
        }}
        // twitter={{
        //   handle: siteMetadata.twitter,
        //   site: siteMetadata.twitter,
        //   cardType: "summary_large_image",
        // }}
        robotsProps={{
          maxSnippet: -1,
          maxImagePreview: "none",
          maxVideoPreview: -1,
        }}
      />
      <Head>
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//stats.g.doubleclick.net" />
        <link rel="dns-prefetch" href="//pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="//www.googletagservices.com" />
        <link rel="dns-prefetch" href="//adservice.google.com" />
        <link rel="shortcut icon" href={siteMetadata.siteLogo} />
        <link rel="manifest" href="/static/manifest.json" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/static/apple-touch-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/static/apple-touch-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/static/apple-touch-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/static/apple-touch-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/static/apple-touch-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/static/apple-touch-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/static/apple-touch-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/static/apple-touch-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/apple-touch-icon-180x180.png"
        />
        <meta name="application-name" content={siteMetadata.title} />
        <meta name="apple-mobile-web-app-title" content={siteMetadata.title} />
        <meta name="fb:admins" content="100005485267478" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {/* <meta name="twitter:image" content={twImage} /> */}
      </Head>
    </React.Fragment>
  );
};

const PageSEO: FC<CommonSEOProps> = ({ title, description }) => {
  return (
    <React.Fragment>
      <CommonSEO
        title={title}
        description={description}
        openGraph={{
          title: title,
          description: description,
          // url: `${siteMetadata.siteUrl}${router.asPath}`,
          images: [
            {
              // url: ogImageUrl,
              alt: title,
              width: 1200,
              height: 630,
            },
          ],
          siteName: siteMetadata.title,
          type: "website",
          locale: "vi_VN",
        }}
        // twImage={twImageUrl}
      />
      <Head>
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </Head>
    </React.Fragment>
  );
};

export default PageSEO;
