import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Hero from "~/components/hero";
import Projects from "~/components/projects";
import About from "~/components/skills";
import Skills from "~/components/skills";

export default component$(() => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
