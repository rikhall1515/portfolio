import { component$ } from "@builder.io/qwik";
import ImgThumbnail from "/public/Thumbnail-1280w.webp?jsx";
import ButtonOutlined from "~/components/buttons/buttonOutlined";
export default component$(() => {
  return (
    <section
      class="py-[--section-y-spacing] bg-secondary_900 relative"
      id="projects"
      aria-label="Projects"
    >
      <div class="absolute top-[-1.5rem] right-0 left-0 m-auto w-fit h-fit">
        <div class="w-1 py-2 px-4 h-8 border-2 border-solid border-white rounded-3xl opacity-75 box-content">
          <div class="w-1 h-2 rounded-[25%] bg-white scroller"></div>
        </div>
      </div>
      <div class="max-w-[120rem] m-auto page-outer-spacing">
        <h2 class="mb-[--subsection-y-spacing]" id="projects_title">
          My best work
        </h2>
        <article
          class="flex flex-col lg:flex-row-reverse rounded-lg w-full lg:min-w-[32rem] gap-16"
          aria-label="Portfolio website"
        >
          <a
            class="relative overflow-hidden 
                   before:content-[''] before:absolute before:inset-0 before:opacity-0 before:z-[1] before:bg-secondary_900
                   hover:before:opacity-90
                   [&:hover>span]:opacity-100 [&:hover>span]:p-4
                   [&:focus>span]:opacity-100 [&:focus>span]:p-4"
            href="https://github.com/rikhall1515/portfolio"
            rel="noopener noreferrer"
            aria-labelledby="portfolioProject"
          >
            <ImgThumbnail
              class="max-w-full min-w-0"
              alt="How the end-result of the project looks."
            />
            <span
              class="absolute translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2
                         rounded-lg p-2 opacity-0 z-[2]
                         text-white text-center font-bold text-[1.25rem]
                         bg-secondary_900
                         whitespace-nowrap"
              id="portfolioProject"
            >
              View Project
            </span>
          </a>
          <div class="flex flex-col gap-8 lg:min-w-[20rem] lg:place-self-end">
            <h3>Portfolio website</h3>
            <ul
              class="font-bold flex gap-1 flex-wrap"
              aria-label="Technologies used"
            >
              <li class="bg-secondary_200 px-4 py-2 rounded-full">
                <p>TypeScript</p>
              </li>
              <li class="bg-secondary_200 px-4 py-2 rounded-full">
                <p>TailwindCSS</p>
              </li>
              <li class="bg-secondary_200 px-4 py-2 rounded-full">
                <p>Qwik</p>
              </li>
              <li class="bg-secondary_200 px-4 py-2 rounded-full">
                <p>Cypress</p>
              </li>
            </ul>

            <ButtonOutlined
              text="GitHub"
              href="https://github.com/rikhall1515/portfolio"
            >
              <svg
                class="w-6 h-6"
                viewBox="0 0 98 96"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                q:slot="Icon"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                />
              </svg>
            </ButtonOutlined>
          </div>
        </article>
      </div>
    </section>
  );
});
