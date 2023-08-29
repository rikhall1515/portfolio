import { component$, useContext } from "@builder.io/qwik";
import { MenuContext } from "~/root";
interface LinkProps {
  text: string;
  href: string;
}

export default component$<LinkProps>(({ text, href }) => {
  const sidebar = useContext(MenuContext);
  return (
    <a
      class={`
        inline-block relative
        after:content-[''] after:block after:w-0 after:h-[0.25rem] after:relative after:bottom-[-0.25rem] after:bg-primary after:opacity-50
        hover:after:w-full focus:after:w-full hover:text-primary
        isNav text-white active:text-primary active:after:w-full
      `}
      href={href}
      onClick$={() => sidebar.toggle()}
      tabIndex={sidebar.expanded ? 0 : -1}
    >
      {text}
    </a>
  );
});
