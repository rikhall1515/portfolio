import { component$ } from "@builder.io/qwik";
import Button, { ButtonVariant } from "~/components/button";
import Link from "~/components/link";
import ImgMainLogo from "/public/mainLogo.svg?jsx";
export default component$(() => {
  return (
    <header class="py-8 fixed top-0 left-0 z-10 bg-secondary_400 w-full">
      <div
        class="max-w-[120rem] 
                  mx-auto page-outer-spacing py-8 mt-4
                  flex justify-between items-center"
      >
        <a
          class="z-30"
          href="#introduction"
          aria-label="Website logo, jumps to top of page"
        >
          <ImgMainLogo alt="Website logo" />
        </a>
        <nav
          class="hidden lg:block items-center z-20"
          aria-label="In-page jump links"
        >
          <ul class="text-[1.25rem] flex items-center font-medium">
            <li>
              <Link text="Projects" href="#projects" isNav={true} />
            </li>
            <li class="ml-6 font-medium">
              <Link text="Contact" href="#contact" isNav={true} />
            </li>
            <li class="ml-6">
              <Button
                Icon={false}
                text="Resumé"
                href="/Rikard_Hallberg_CV.pdf"
                variant={ButtonVariant.Outlined}
              />
            </li>
          </ul>
        </nav>
        <div class="block lg:hidden">
          <button
            aria-expanded={false}
            aria-label="Open menu"
            class="z-30 relative"
          >
            <svg
              class="w-12 h-12"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect width="24" height="6" rx="1.5" fill="#EEEAF9" />
              <rect y="9" width="24" height="6" rx="1.5" fill="#EEEAF9" />
              <rect y="18" width="24" height="6" rx="1.5" fill="#EEEAF9" />
            </svg>
          </button>
          <aside
            class={[
              "fixed top-0 bottom-0 right-0 z-[20] ",
              "p-32 ",
              "w-[100vw] m:w-[70vw] h-[100vh] ",
              "flex justify-center items-center ",
              "outline-none ",
              "bg-secondary_900 ",
              "translate-x-[100vw] visible-[hidden]",
            ].join(" ")}
            aria-label="In-page jump links"
            aria-hidden={true}
            tabIndex={-1}
          >
            <nav aria-label="In-page jump links" id="sidebarNav">
              <ul class="text-[1.25rem] font-medium flex flex-col justify-center items-center gap-6">
                <li class="w-fit" id="projectsLink">
                  <Link text="Projects" href="#projects" isNav={false} />
                </li>
                <li class="w-fit" id="contactLink">
                  <Link text="Contact" href="#contact" isNav={false} />
                </li>
                <li class="w-fit">
                  <Button
                    Icon={false}
                    text="Resume"
                    variant={ButtonVariant.Outlined}
                    href="/Rikard_Hallberg_CV.pdf"
                  />
                </li>
              </ul>
            </nav>
          </aside>
        </div>
      </div>
    </header>
  );
});
