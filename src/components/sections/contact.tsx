import { component$ } from "@builder.io/qwik";

export default component$(() => {
  //grid
  return (
    <section class="pt-32" id="contact">
      <div class="max-w-[120rem] m-auto px-32">
        <section class="w-[60ch]" aria-label="About me">
          <h2>About</h2>
          <img
            width="500"
            height="500"
            class="mb-6"
            alt="A picture of me in business casual attire, out in nature."
          />
          <ul class="font-bold text-[1.25rem] leading-[1.25rem] flex flex-wrap gap-6 mb-6">
            <li class="inline">Fullstack Developer</li>
            <li class="inline">Sweden, Västmanland</li>
            <li class="inline">Desktop, web, and mobile</li>
          </ul>
          <p class="font-atkinson leading-normal w-[60ch]">
            Hi! My name is Rikard Hallberg. I love designing applications in
            Figma using UI/UX principles, and then implementing the designs with
            tested, blazingly fast code. I have a lot of ways I can improve, but
            my goal is to be the best.
          </p>
        </section>
        <section class="mt-32" aria-label="Contact me">
          <h2>Contact</h2>
          <ul class="font-bold flex gap-6">
            <li>
              <a href="to:r15.hallberg@gmail.com">Email</a>
            </li>
            <li>
              <a href="https://linkedin.com/in/rikardhallberg">LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com/rikhall1515">GitHub</a>
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
});
