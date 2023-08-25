import {
  component$,
  useContext,
  type QwikKeyboardEvent,
  $,
} from "@builder.io/qwik";
import { MenuContext } from "~/root";
import { mainMenuBtnContext } from "~/routes/layout";

interface ButtonProps {
  isNavSidebar?: boolean;
}

export default component$<ButtonProps>(({ isNavSidebar = false }) => {
  const sidebar = useContext(MenuContext);
  const mainMenuRef = useContext(mainMenuBtnContext);
  let attrs = {};
  attrs = {
    rel: "noopener noreferrer",
    target: "_blank",
  };
  if (isNavSidebar) {
    attrs = {
      ...attrs,
      tabIndex: sidebar.expanded ? 0 : -1,
      "preventdefault:keydown": true,
      onKeyDown$: $(
        (e: QwikKeyboardEvent<HTMLAnchorElement>) =>
          e.which == 9 && mainMenuRef.value.focus()
      ),
    };
  }

  return (
    <a
      href="/Rikard_Hallberg_CV.pdf"
      class={`
          w-full sm:w-[15rem]
          py-[0.3125rem] px-7
          border-[0.25rem] border-solid border-primary
          rounded-lg
          flex items-center justify-center gap-[0.5rem]
          overflow-hidden
          shadow-button
          leading-normal text-[1.25rem] text-center whitespace-nowrap ease-in-out

          text-primary fill-primary
          hover:bg-primaryDarker hover:text-secondary_900
          focus:bg-primaryDarker focus:text-secondary_900
          hover:border-primaryDarker hover:shadow-secondary_900 hover:gap-0
          focus:border-primaryDarker focus:shadow-secondary_900 focus:gap-0
        `}
      {...attrs}
    >
      <span>Resumé</span>
    </a>
  );
});
