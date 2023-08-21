import {
  component$,
  $,
  useContext,
  useContextProvider,
  useSignal,
  type QwikMouseEvent,
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
  const toggle = $((e: QwikMouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.stopPropagation();
    sidebarMenuExpanded.value = !sidebarMenuExpanded.value;
  });
  const toggleIfOpen = $(() => {
    if (sidebarMenuExpanded.value) {
      sidebarMenuExpanded.value = !sidebarMenuExpanded.value;
    }
  });
  const initialNavMenuCoords = useSignal(0);
  return (
    <>
      <div aria-hidden="true" ref={spaceOffsetRef}></div>
      <header
        ref={headerRef}
        class="w-full z-10 transition-[background-color,box-shadow] !pointer-events-auto !select-auto !filter-none"
        onClick$={toggleIfOpen}
        document:onLoad$={() => {
          initialNavMenuCoords.value =
            1 * parseFloat(getComputedStyle(document.documentElement).fontSize);
          if (
            window!.scrollY > navWrapperRef.value!.getBoundingClientRect().top!
          ) {
            headerRef.value!.classList.add("stickyNav");
            spaceOffsetRef.value!.classList.add("takeSpace");
          }
          const introductionSection = document.getElementById("introduction");
          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((e) => {
                if (!e.isIntersecting) {
                  headerRef.value!.classList.add("atProjects");
                } else {
                  headerRef.value!.classList.remove("atProjects");
                }
              });
            },
            { rootMargin: "-128px 0px 0px 0px" }
          );
          observer.observe(introductionSection!);
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
            class="z-30"
            ref={mainLogoRef}
            onClick$={toggleIfOpen}
          >
            <ImgMainLogo alt="Website logo" id="websiteLogo" />
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
