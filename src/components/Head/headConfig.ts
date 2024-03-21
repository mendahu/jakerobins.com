export type HeadConfig = {
  title: string;
  description: string;
  meta: {
    charset: string;
    viewport: string;
  };
  favicon: {
    manifest: string;
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
      article?: { type: string; value: string }[];
      image: {
        url: string;
        type: string;
        alt: string;
        width?: number;
        height?: number;
      };
    };
  };
};

export const defaultHeadConfig: HeadConfig = {
  title: "jakerobins.com",
  description: "Personal website for Jake Robins",
  meta: {
    charset: "utf-8",
    viewport: "width=device-width, initial-scale=1",
  },
  favicon: {
    manifest: "/site.webmanifest",
    appleTouch: {
      sizes: "120x120",
      href: "/apple-touch-icon.png",
    },
    defaults: [
      {
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
      {
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
    ],
    safari: {
      href: "/safari-pinned-tab.svg",
      color: "#2b5797",
    },
    msTileColor: "#2b5797",
    themeColor: "#ffffff",
  },
  social: {
    title: "jakerobins.com",
    description: "Personal website for Jake Robins",
    url: "https://jakerobins.com",
    twitter: {
      card: "summary",
      site: "@jakerobins",
      creator: "@jakerobins",
      image: "https://jakerobins.com/twitter-summary.jpg",
      alt: "A picture of Jake's Head floating in a space nebula.",
    },
    openGraph: {
      url: "https://jakerobins.com",
      type: "website",
      image: {
        url: "https://jakerobins.com/opengraph-banner.png",
        type: "image/jpeg",
        alt: "A picture of Jake's head floating in space, bursting from a nova",
        width: 600,
        height: 300,
      },
    },
  },
};

export const mergeHeadConfig = (config: Partial<HeadConfig>): HeadConfig => ({
  ...defaultHeadConfig,
  ...config,
});
