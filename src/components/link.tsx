import { component$, useContext, $ } from "@builder.io/qwik";
import { MenuContext } from "~/root";
interface LinkProps {
  text: string;
  href: string;
  isNav?: boolean;
  isNavSidebar?: boolean;
}
const commonStyles = [
  "inline-block relative",
  "after:content-[''] after:block after:w-0 after:h-[0.25rem] after:relative after:bottom-[-0.25rem] after:bg-primary after:opacity-50",
  "hover:after:w-full focus:after:w-full hover:text-primary",
].join(" ");
function getLinkStyles(isNav: boolean) {
  if (isNav) {
    return [
      "isNav text-white active:text-primary active:after:w-full",
      commonStyles,
    ].join(" ");
  }
  return ["text-primary", commonStyles].join(" ");
}

export default component$<LinkProps>(
  ({ text, href, isNav = false, isNavSidebar = false }) => {
    const sidebarMenuExpanded = useContext(MenuContext);
    const toggle = $(
      () => (sidebarMenuExpanded.value = !sidebarMenuExpanded.value)
    );
    let attrs = {};
    if (!isNav && !isNavSidebar) {
      attrs = {
        ...attrs,
        rel: "noopener noreferrer",
        target: "_blank",
      };
    }
    if (isNavSidebar) {
      attrs = {
        ...attrs,
        onClick$: toggle,
        tabIndex: sidebarMenuExpanded.value ? 0 : -1,
      };
    }
    return (
      <a class={getLinkStyles(isNav)} href={href} {...attrs}>
        {text}
      </a>
    );
  }
);
