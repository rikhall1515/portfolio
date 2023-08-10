import {
  component$,
  useStyles$,
  useTask$,
  type Signal,
  useContextProvider,
  useSignal,
  createContextId,
} from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import styles from "./global.css?inline";

export const MenuContext = createContextId<Signal<boolean>>("menuState");

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */
  const sidebarMenuExpanded = useSignal(false);
  useContextProvider(MenuContext, sidebarMenuExpanded);
  useStyles$(styles);
  useTask$(({ track }) => {
    track(() => sidebarMenuExpanded.value);
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
          sidebarMenuExpanded.value
            ? "customBlur overflow-hidden relative bg-secondary_400"
            : "relative bg-secondary_400"
        }
      >
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
