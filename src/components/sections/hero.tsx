import { component$ } from "@builder.io/qwik";
import ButtonMain from "~/components/buttons/buttonMain";
import InpageLink from "~/components/links/inpageLink";
export default component$(() => {
  return (
    <section
      class="py-[--section-y-spacing] relative overflow-x-hidden overflow-y-visible"
      id="introduction"
      aria-label="Introducing me"
    >
      <div
        class="block w-[110%] h-[calc(100% + 10rem)]
               bg-gradient-to-b from-secondary_400 to-secondary_900
               absolute top-0 translate-x-[-50%] left-[50%] bottom-0 z-[-4]"
      ></div>
      <div class="max-w-[120rem] m-auto page-outer-spacing">
        <div class="flex flex-col gap-2 mb-[--subsection-y-spacing]">
          <h1
            class="flex flex-col gap-[0.625rem]"
            aria-label="I'm Rikard Hallberg, Fullstack Developer, dedicated to performance and accessibility."
          >
            <span class="font-bold text-[1.125rem] lg:text-[1.5rem]">
              I'm Rikard Hallberg
            </span>
            <span>
              Fullstack developer dedicated to performance and design.
            </span>
          </h1>
          <p class="font-regular text-[1.25rem] lg:text-[2rem]">
            Computer science graduate from{" "}
            <InpageLink
              text="MDU"
              href="https://www.mdu.se/utbildning/program/datavetenskapliga-programmet"
            />
          </p>
        </div>
        <ButtonMain text="Get in touch" />
      </div>
    </section>
  );
});
