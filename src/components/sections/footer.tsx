import { component$ } from "@builder.io/qwik";
import Link from "~/components/link";
export default component$(() => {
  return (
    <footer
      class="py-[--section-y-spacing] bg-gradient-to-b from-secondary_350 to-secondary_400"
      aria-label="About the website"
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
