import { component$ } from "@builder.io/qwik";
import Link from "~/components/link";
export default component$(() => {
  return (
    <footer class="py-32" aria-label="About the website">
      <div class="max-w-[120rem] m-auto px-32">
        <p class="font-atkinson w-[60ch]">
          This portfolio was meticulously designed with Figma and built using
          Next.js, and TailwindCSS.{" "}
          <Link
            text="Look at the portfolio GitHub"
            href="https://github.com/rikhall1515"
          />
        </p>
      </div>
    </footer>
  );
});
