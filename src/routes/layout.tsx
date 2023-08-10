import {
  component$,
  Slot,
  useContext,
  $,
  createContextId,
  type Signal,
  useContextProvider,
  useSignal,
} from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { RequestHandler } from "@builder.io/qwik-city";
import Footer from "~/components/sections/footer";

import Header from "~/components/sections/header";
import { MenuContext } from "~/root";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export const mainMenuBtnContext =
  createContextId<Signal<HTMLElement>>("mainBtn");
export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  const emptyElm = useSignal<HTMLElement>();
  const sidebarMenuExpanded = useContext(MenuContext);
  const toggleIfBlurred = $(() => {
    if (sidebarMenuExpanded.value) {
      sidebarMenuExpanded.value = !sidebarMenuExpanded.value;
    }
  });
  useContextProvider(mainMenuBtnContext, emptyElm);
  return (
    <>
      <a
        href="#content"
        class="absolute left-0 top-0 block -translate-y-[200%] 
               rounded bg-gradient-to-b from-primary to-primaryDarker 
               px-4 py-3 
               text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-y-0"
      >
        Skip to Content
      </a>
      <Header />
      <main id="content" class="transition-all" onClick$={toggleIfBlurred}>
        <Slot />
      </main>
      <Footer />
    </>
  );
});
