import { component$ } from "@builder.io/qwik";
import ButtonGitHub from "../buttons/buttonGitHub";
import ImgRikHallPhoto from "/public/rikardhallberg_photo.webp?jsx";
import ButtonMain from "~/components/buttons/buttonMain";
import ButtonOutlined from "~/components/buttons/buttonOutlined";
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
              <ButtonMain text="Email" fill_container={true} />
            </li>
            <li>
              <ButtonOutlined
                text="LinkedIn"
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
              </ButtonOutlined>
            </li>
            <li>
              <ButtonGitHub />
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
});
