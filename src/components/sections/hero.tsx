import { component$ } from "@builder.io/qwik";

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
        <a class="font-bold" href="mailto:r15.hallberg@gmail.com">
          Hire Me
        </a>
      </div>
    </section>
  );
});
