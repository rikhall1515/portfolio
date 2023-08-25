import {
  component$,
  useContext,
  useContextProvider,
  useSignal,
} from "@builder.io/qwik";
import ImgMainLogo from "~/components/icons/mainLogo.svg?jsx";
import { mainMenuBtnContext } from "~/routes/layout";
import { MenuContext } from "~/root";
import ButtonResume from "~/components/buttons/buttonResume";
import NavLink from "~/components/links/navLink";
import NavLinkSidebar from "~/components/links/navLinkSidebar";

export default component$(() => {
  const headerRef = useSignal<Element>();
  const spaceOffsetRef = useSignal<Element>();
  const navWrapperRef = useSignal<Element>();
  const mainMenuBtnRef = useSignal<HTMLElement>();
  const mainLogoRef = useSignal<Element>();
  const sidebarNavRef = useSignal<Element>();
  useContextProvider(mainMenuBtnContext, mainMenuBtnRef);

  const sidebar = useContext(MenuContext);
  const initialNavMenuCoords = useSignal(0);
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
            { rootMargin: "-168px 0px 0px 0px" }
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
            onClick$={() => sidebar.toggleIfOpen()}
          >
            <ImgMainLogo alt="Website logo" id="websiteLogo" />
          </a>
          <nav
            class="hidden lg:block items-center z-20"
            aria-label="In-page jump links"
          >
            <ul class="text-[1.25rem] flex items-center font-medium">
              <li>
                <NavLink text="Projects" href="#projects" />
              </li>
              <li class="ml-6">
                <NavLink text="Contact" href="#contact" />
              </li>
              <li class="ml-6">
                <ButtonResume />
              </li>
            </ul>
          </nav>
          <div class="block lg:hidden">
            <button
              aria-expanded={sidebar.expanded}
              aria-label={sidebar.expanded ? "Close menu" : "Open menu"}
              onClick$={() => sidebar.toggle()}
              class={
                sidebar.expanded
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
                (sidebar.expanded
                  ? "translate-x-[0vw] visible"
                  : "translate-x-[100vw] visible-[hidden]")
              }
              aria-label="In-page jump links"
              aria-hidden={!sidebar.expanded}
            >
              <nav aria-label="In-page jump links" ref={sidebarNavRef}>
                <ul class="text-[1.25rem] font-medium flex flex-col justify-center items-center gap-6">
                  <li class="w-fit" id="projectsLink">
                    <NavLinkSidebar text="Projects" href="#projects" />
                  </li>
                  <li class="w-fit" id="contactLink">
                    <NavLinkSidebar text="Contact" href="#contact" />
                  </li>
                  <li class="w-fit">
                    <ButtonResume isNavSidebar={true} />
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
