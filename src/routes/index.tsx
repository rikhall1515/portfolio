import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Hero from "~/components/sections/hero";
import Projects from "~/components/sections/projects";
import Contact from "~/components/sections/contact";

export default component$(() => {
  return (
    <>
      <Hero />
      <Projects />
      <Contact />
    </>
  );
});

//Easier to edit
const title = "Rikard Hallberg - Fullstack Developer portfolio";
const desc =
  "Rikard Hallberg is a fullstack developer who builds applications with a focus on good UI/UX design, and performance.";
const url = "https://rikardhallberg.com";
//The reason I am not including this directly in router-head is because I may add more pages in the future
//For that reason, this feels more maintainable
export const head: DocumentHead = {
  title: title,
  meta: [
    {
      name: "description",
      content: desc,
    },
    {
      name: "image",
      content: "/og.png",
    },
    {
      property: "og:locale",
      content: "en_US",
    },
    {
      property: "og:site_name",
      content: title,
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:title",
      content: title,
    },
    {
      property: "og:description",
      content: desc,
    },
    {
      property: "og:url",
      content: url,
    },
    {
      property: "og:image",
      content: "/og.png",
    },
    {
      property: "twitter:card",
      content: "summary_large_image",
    },
    {
      property: "twitter:creator",
      content: "@rikhall1515",
    },
    {
      property: "twitter:site",
      content: "@rikhall1515",
    },
    {
      property: "twitter:title",
      content: title,
    },
    {
      property: "twitter:description",
      content: desc,
    },
    {
      property: "twitter:url",
      content: url,
    },
    {
      property: "twitter:image",
      content: "/og.png",
    },
  ],
};
