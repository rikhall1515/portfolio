import { component$ } from "@builder.io/qwik";
import Button, { ButtonVariant } from "~/components/button";
export default component$(() => {
  return (
    <section class="py-32" id="projects" aria-label="Projects">
      <div class="max-w-[120rem] m-auto px-32">
        <h2 id="projects_title">My best projects</h2>
        <ul aria-label="List of projects">
          <li class="min-w-[32rem]">
            <article class="rounded-lg" aria-label="Project name, App type">
              <figure>
                <img
                  width="500"
                  height="500"
                  class="rounded-t-lg rounded-r-lg"
                  alt="How the end-result of the project looks."
                />
              </figure>
              <div
                class="p-8"
                aria-label="Contains a header with info and footer with links"
              >
                <header
                  class="flex flex-col gap-6 mb-10"
                  aria-label="Project information"
                >
                  <h3 id="project1_title">Project name</h3>
                  <div>
                    <p class="font-medium w-full mb-2" id="project1_appType">
                      App type
                    </p>
                    <ul
                      class="font-bold flex gap-1 flex-wrap"
                      aria-label="Technologies used"
                    >
                      <li>
                        <p>Skill</p>
                      </li>
                      <li>
                        <p>Skill</p>
                      </li>
                      <li>
                        <p>Skill</p>
                      </li>
                    </ul>
                  </div>
                  <p class="font-atkinson" id="project1_desc">
                    Description of the project...
                  </p>
                </header>
                <footer aria-label="Project links">
                  <ul
                    class="font-bold flex gap-6"
                    aria-label="Links to preview website or study code"
                  >
                    <li>
                      <a href="">Preview</a>
                    </li>
                    <li>
                      <Button
                        Icon={true}
                        text="GitHub"
                        variant={ButtonVariant.Outlined}
                        href="https://github.com"
                      >
                        <svg
                          class="w-6 h-6 fill-[inherit] overflow-visible transition-all relative"
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
                      </Button>
                    </li>
                  </ul>
                </footer>
              </div>
            </article>
          </li>
        </ul>
      </div>
    </section>
  );
});
