import {
  component$,
  useVisibleTask$,
  $,
  useContext,
  useContextProvider,
  useSignal,
} from "@builder.io/qwik";
import Button, { ButtonVariant } from "~/components/button";
import Link from "~/components/link";
import ImgMainLogo from "~/components/icons/mainLogo.svg?jsx";
import { mainMenuBtnContext } from "~/routes/layout";
import { MenuContext } from "~/root";

export default component$(() => {
  const headerRef = useSignal<Element>();
  const spaceOffsetRef = useSignal<Element>();
  const navWrapperRef = useSignal<Element>();
  const mainMenuBtnRef = useSignal<HTMLElement>();
  const mainLogoRef = useSignal<Element>();
  const sidebarNavRef = useSignal<Element>();
  useContextProvider(mainMenuBtnContext, mainMenuBtnRef);

  const sidebarMenuExpanded = useContext(MenuContext);
  const toggle = $(
    () => (sidebarMenuExpanded.value = !sidebarMenuExpanded.value)
  );
  const initialNavMenuCoords = useSignal(0);
  //This code could probably be optimized, need to read up on qwik docs
  useVisibleTask$(() => {
    const introductionSection = document.getElementById("introduction");
    const header = document.querySelector("header");

    //Changing color of header when intersecting
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) {
            header?.classList.add("atProjects");
          } else {
            header?.classList.remove("atProjects");
          }
        });
      },
      { rootMargin: "0px 0px 0px 0px", threshold: 0.4 }
    );
    observer.observe(introductionSection!);
  });
  return (
    <>
      <div aria-hidden="true" ref={spaceOffsetRef}></div>
      <header
        ref={headerRef}
        class="w-full z-10 transition-[background-color,box-shadow] !pointer-events-auto !select-auto !filter-none"
        document:onLoad$={() => {
          initialNavMenuCoords.value =
            1 * parseFloat(getComputedStyle(document.documentElement).fontSize);
          if (
            window!.scrollY > navWrapperRef.value!.getBoundingClientRect().top!
          ) {
            headerRef.value!.classList.add("stickyNav");
            spaceOffsetRef.value!.classList.add("takeSpace");
          }
        }}
        document:onScroll$={() => {
          if (window.scrollY > initialNavMenuCoords.value) {
            headerRef.value!.classList.add("stickyNav");
            spaceOffsetRef.value!.classList.add("takeSpace");
          } else {
            headerRef.value!.classList.remove("stickyNav");
            spaceOffsetRef.value!.classList.remove("takeSpace");
          }
        }}
      >
        <div
          class="max-w-[120rem] 
                   mx-auto page-outer-spacing py-8 mt-4
                   flex justify-between items-center"
          ref={navWrapperRef}
        >
          <a
            href="#introduction"
            aria-label="Website logo, jumps to top of page"
            class={sidebarMenuExpanded.value ? "z-30 hidden" : "z-30"}
            id="mainLogo"
            ref={mainLogoRef}
          >
            <ImgMainLogo alt="Website" />
          </a>
          <a
            href="#introduction"
            aria-label="Website logo, jumps to top of page"
            class={sidebarMenuExpanded.value ? "z-30" : "z-30 hidden"}
            id="mainLogo"
            ref={mainLogoRef}
            onClick$={toggle}
          >
            <ImgMainLogo alt="Website" />
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
              aria-expanded={sidebarMenuExpanded.value}
              aria-label={
                sidebarMenuExpanded.value ? "Close menu" : "Open menu"
              }
              onClick$={toggle}
              class={
                sidebarMenuExpanded.value
                  ? "z-30 relative menuBtn opened"
                  : "z-30 relative menuBtn"
              }
              ref={mainMenuBtnRef}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <aside
              class={
                "fixed top-0 bottom-0 right-0 z-[20] " +
                "p-32 " +
                "w-[100vw] m:w-[70vw] h-[100vh] " +
                "flex justify-center items-center " +
                "outline-none " +
                "bg-secondary_900 " +
                (sidebarMenuExpanded.value
                  ? "translate-x-[0vw] visible"
                  : "translate-x-[100vw] visible-[hidden]")
              }
              aria-label="In-page jump links"
              aria-hidden={sidebarMenuExpanded.value}
              tabIndex={sidebarMenuExpanded.value ? 1 : -1}
            >
              <nav aria-label="In-page jump links" ref={sidebarNavRef}>
                <ul class="text-[1.25rem] font-medium flex flex-col justify-center items-center gap-6">
                  <li class="w-fit" id="projectsLink">
                    <Link
                      text="Projects"
                      href="#projects"
                      isNav={false}
                      isNavSidebar={true}
                    />
                  </li>
                  <li class="w-fit" id="contactLink">
                    <Link
                      text="Contact"
                      href="#contact"
                      isNav={false}
                      isNavSidebar={true}
                    />
                  </li>
                  <li class="w-fit">
                    <Button
                      Icon={false}
                      text="Resumé"
                      variant={ButtonVariant.Outlined}
                      href="/Rikard_Hallberg_CV.pdf"
                      isNavSidebar={true}
                    />
                  </li>
                </ul>
              </nav>
            </aside>
          </div>
        </div>
      </header>
    </>
  );
});
