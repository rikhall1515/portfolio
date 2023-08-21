import { component$ } from "@builder.io/qwik";
import Button, { ButtonVariant } from "~/components/button";
import ImgRikHallPhoto from "/public/rikardhallberg_photo.webp?jsx";
export default component$(() => {
  //grid
  return (
    <section
      class="pt-[--section-y-spacing] bg-gradient-to-b from-secondary_900 to-secondary_350"
      id="contact"
    >
      <div class="max-w-[120rem] m-auto page-outer-spacing">
        <section aria-label="About me">
          <h2 class="mb-[--subsection-y-spacing]">Who am I?</h2>
          <ImgRikHallPhoto
            class="w-full sm:h-64 md:h-auto md:max-w-full lg:max-w-[40rem] rounded-lg object-cover mb-6"
            alt="Rikard Hallberg in business casual attire, out in nature"
          />
          <p class="font-atkinson leading-normal max-w-[60ch]">
            Hi! My name is Rikard Hallberg. I love designing applications in
            Figma using UI/UX principles, and then implementing the designs with
            tested, blazingly fast code. I have a lot of ways I can improve, but
            my goal is to be the best.
          </p>
        </section>
        <section class="mt-[--section-y-spacing]" aria-label="Contact me">
          <h2 class="mb-[--subsection-y-spacing]">Let's connect</h2>
          <ul class="font-bold flex gap-6 flex-col md:flex-row">
            <li>
              <Button
                Icon={true}
                text="Email"
                variant={ButtonVariant.Fill}
                href="to:r15.hallberg@gmail.com"
                fill_container={true}
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
            </li>
            <li>
              <Button
                Icon={true}
                text="LinkedIn"
                variant={ButtonVariant.Outlined}
                href="https://linkedin.com/in/rikardhallberg"
                fill_container={true}
              >
                <svg
                  class="h-6 w-6 ml-[-0.125rem]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  q:slot="Icon"
                >
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
              </Button>
            </li>
            <li>
              <Button
                Icon={true}
                text="GitHub"
                variant={ButtonVariant.NoFill}
                href="https://github.com/rikhall1515"
                fill_container={true}
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
              </Button>
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
});
