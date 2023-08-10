import { component$ } from "@builder.io/qwik";
import Button, { ButtonVariant } from "~/components/button";
import Link from "~/components/link";
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
            <span>Fullstack developer dedicated to performance and UI/UX.</span>
          </h1>
          <p class="font-regular text-[1.25rem] lg:text-[2rem]">
            Computer science graduate from{" "}
            <Link text="MDU" href="https://mdu.se" />
          </p>
        </div>
        <Button
          Icon={true}
          text="Get in touch"
          variant={ButtonVariant.Fill}
          href="mailto:r15.hallberg@gmail.com"
        >
          <svg
            width="36"
            height="24"
            viewBox="0 0 36 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            q:slot="Icon"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3 0C1.34315 0 0 1.34315 0 3V6L18 9L36 6V3C36 1.34315 34.6569 0 33 0H3Z"
              fill="#090413"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22.5 11.25L18 12L13.5 11.25L0 18V21C0 22.6569 1.34315 24 3 24H33C34.6569 24 36 22.6569 36 21V18L22.5 11.25ZM36 15V9L27 10.5L36 15ZM0 9L9 10.5L0 15V9Z"
              fill="#090413"
            />
          </svg>
        </Button>
      </div>
    </section>
  );
});
