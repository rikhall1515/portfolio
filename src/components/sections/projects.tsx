import { component$ } from "@builder.io/qwik";

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
                      <a href="https://github.com">Github</a>
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
