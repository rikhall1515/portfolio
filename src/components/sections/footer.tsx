import { component$, useContext } from "@builder.io/qwik";
import InpageLink from "../links/inpageLink";
import { MenuContext } from "~/root";
export default component$(() => {
  const sidebar = useContext(MenuContext);
  return (
    <footer
      class={
        sidebar.expanded
          ? "py-[--section-y-spacing] bg-gradient-to-b from-secondary_350 to-secondary_400 blur "
          : "py-[--section-y-spacing] bg-gradient-to-b from-secondary_350 to-secondary_400"
      }
      aria-label="About the website"
      onClick$={() => sidebar.toggleIfOpen()}
    >
      <div class="max-w-[120rem] m-auto page-outer-spacing">
        <p class="font-atkinson max-w-[60ch]">
          This portfolio was meticulously designed with Figma and built using
          Qwik, Typescript, and TailwindCSS. Tested with NVDA and Cypress.{" "}
          <InpageLink
            text="Look at the portfolio GitHub"
            href="https://github.com/rikhall1515/portfolio"
          />
        </p>
      </div>
    </footer>
  );
});
