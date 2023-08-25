import {
  component$,
  useStyles$,
  useTask$,
  useContextProvider,
  createContextId,
  useServerData,
  useStore,
  $,
  type QRL,
} from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import styles from "./global.css?inline";

export interface SidebarStore {
  expanded: boolean;
  toggle: QRL<(this: SidebarStore) => void>;
  toggleIfOpen: QRL<(this: SidebarStore) => void>;
}

export const MenuContext = createContextId<SidebarStore>("menuState");

export default component$(() => {
  const nonce = useServerData<string | undefined>("nonce");

  const sidebar = useStore<SidebarStore>({
    expanded: false,
    toggle: $(function (this: SidebarStore) {
      this.expanded = !this.expanded;
    }),
    toggleIfOpen: $(function (this: SidebarStore) {
      if (this.expanded) {
        this.expanded = !this.expanded;
      }
    }),
  });
  useContextProvider(MenuContext, sidebar);
  useStyles$(styles);
  useTask$(({ track }) => {
    track(() => sidebar.expanded);
  });
  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <RouterHead />
      </head>
      <body
        lang="en"
        class={
          sidebar.expanded
            ? "customBlur overflow-hidden relative bg-secondary_400"
            : "relative bg-secondary_400"
        }
      >
        <RouterOutlet />
        <ServiceWorkerRegister nonce={nonce} />
      </body>
    </QwikCityProvider>
  );
});
