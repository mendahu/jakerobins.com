import { siteConfig } from "../../config";

export type HeadConfig = {
  title: string;
  description: string;
  canonical: string;
  meta: {
    charset: string;
    viewport: string;
  };
  favicon: {
    manifest: string;
    svg?: string;
    ico?: string;
    defaults: {
      sizes: string;
      href: string;
    }[];
    appleTouch: {
      sizes: string;
      href: string;
    };
    safari: {
      href: string;
      color: string;
    };
    msTileColor: string;
    themeColor: string;
  };
  social: {
    title: string;
    description: string;
    url: string;
    twitter: {
      card: string;
      site: string;
      creator: string;
      image: string;
      alt: string;
    };
    openGraph: {
      url: string;
      type: string;
      siteName: string;
      article?: { type: string; value: string }[];
      image: {
        url: string;
        secure_url: string;
        type: string;
        alt: string;
        width?: number;
        height?: number;
      };
    };
  };
};

const pageUrl = `${siteConfig.host}/`;

export const defaultHeadConfig: HeadConfig = {
  title: siteConfig.title,
  description: siteConfig.description,
  canonical: pageUrl,
  meta: {
    charset: "utf-8",
    viewport: "width=device-width, initial-scale=1",
  },
  favicon: {
    manifest: "/portfolio/icons/site.webmanifest",
    svg: "/portfolio/icons/favicon.svg",
    ico: "/portfolio/icons/favicon.ico",
    appleTouch: {
      sizes: "180x180",
      href: "/portfolio/icons/apple-touch-icon.png",
    },
    defaults: [
      {
        sizes: "16x16",
        href: "/portfolio/icons/favicon-16x16.png",
      },
      {
        sizes: "32x32",
        href: "/portfolio/icons/favicon-32x32.png",
      },
    ],
    safari: {
      href: "/portfolio/icons/safari-pinned-tab.svg",
      color: "#0e3a42",
    },
    msTileColor: "#0e3a42",
    themeColor: "#0e3a42",
  },
  social: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: pageUrl,
    twitter: {
      card: "summary_large_image",
      site: "@jakerobins",
      creator: "@jakerobins",
      image: siteConfig.host + "/portfolio/opengraph_banner.jpg",
      alt: "Jake Robins, freelance developer and product partner",
    },
    openGraph: {
      url: pageUrl,
      type: "website",
      siteName: "Jake Robins",
      image: {
        url: "http" + siteConfig.host.slice(5) + "/portfolio/opengraph_banner.jpg",
        secure_url: siteConfig.host + "/portfolio/opengraph_banner.jpg",
        type: "image/jpeg",
        alt: "Jake Robins, freelance developer and product partner",
        width: 1200,
        height: 630,
      },
    },
  },
};

export const mergeHeadConfig = (config: Partial<HeadConfig>): HeadConfig => ({
  ...defaultHeadConfig,
  ...config,
});
