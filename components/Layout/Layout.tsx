import { FC } from 'react';
import Head from 'next/head';
import { Navbar } from '../ui';

interface Props {
  title: string;
  description: string;
  imageFullUrl?: string;
  children?: React.ReactNode;
}

export const Layout: FC<Props> = ({
  title,
  description,
  imageFullUrl,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        {imageFullUrl && <meta name="og:image" content={imageFullUrl} />}

        <link rel="canonical" href="https://example.com/example" />
        <meta property="og:url" content="https://example.com/example" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Unchained Devs_" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar />
      <main>{children}</main>
    </>
  );
};
