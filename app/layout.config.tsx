import { type HomeLayoutProps } from "fumadocs-ui/home-layout";

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: HomeLayoutProps = {
  nav: {
    title: "Build an AI App",
  },
  links: [
    // {
    //   text: "This Session",
    //   url: "/docs",
    //   active: "nested-url",
    // },
    {
      text: "AI SDK Docs",
      url: "https://sdk.vercel.ai",
      active: "nested-url",
    },
    {
      text: "Next.js Docs",
      url: "https://nextjs.org/docs",
      active: "nested-url",
    }
  ],
};
