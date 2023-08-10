import { component$, useContext, $ } from "@builder.io/qwik";
import Link from "~/components/link";
import { MenuContext } from "~/root";
export default component$(() => {
  const sidebarMenuExpanded = useContext(MenuContext);
  const toggleIfBlurred = $(() => {
    sidebarMenuExpanded.value = !sidebarMenuExpanded.value;
  });
  return (
    <footer
      class={
        sidebarMenuExpanded.value
          ? "py-[--section-y-spacing] bg-gradient-to-b from-secondary_350 to-secondary_400 blur "
          : "py-[--section-y-spacing] bg-gradient-to-b from-secondary_350 to-secondary_400"
      }
      aria-label="About the website"
      onClick$={toggleIfBlurred}
    >
      <div class="max-w-[120rem] m-auto page-outer-spacing">
        <p class="font-atkinson max-w-[60ch]">
          This portfolio was meticulously designed with Figma and built using
          Qwik, Typescript, and TailwindCSS.{" "}
          <Link
            text="Look at the portfolio GitHub"
            href="https://github.com/rikhall1515"
          />
        </p>
      </div>
    </footer>
  );
});
