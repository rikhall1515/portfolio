import { component$ } from "@builder.io/qwik";
import Button, { ButtonVariant } from "~/components/button";
export default component$(() => {
  return (
    <section
      class="pt-[16rem] pb-32"
      id="introduction"
      aria-label="Introducing me"
    >
      <div class=" max-w-[120rem] m-auto px-32">
        <div class="flex flex-col gap-8 mb-16">
          <h1
            class="flex flex-col gap-4"
            aria-label="I'm Rikard Hallberg, Fullstack Developer, Obsessed with performance and accessibility."
          >
            <span class="font-bold text-[1.5rem]">I'm Rikard Hallberg</span>
            <span>
              Fullstack Developer. Obsessed with performance and UI/UX.
            </span>
          </h1>
          <p class="font-regular text-[2rem]">
            Computer science graduate from <a href="https://mdu.se">MDU</a>
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
