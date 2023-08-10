import { component$ } from "@builder.io/qwik";
interface LinkProps {
  text: string;
  href: string;
  isNav?: boolean;
}
const commonStyles = [
  "inline-block relative",
  "after:content-[''] after:block after:w-0 after:h-[0.125rem] after:relative after:bottom-[-0.5rem] after:bg-primary after:opacity-50",
  "hover:after:w-full focus:after:w-full hover:text-primary",
].join("");
function getLinkStyles(isNav: boolean) {
  if (isNav) {
    return [
      "isNav text-white active:text-primary active:after:w-full",
      commonStyles,
    ].join(" ");
  }
  return ["text-primary", commonStyles].join(" ");
}

export default component$<LinkProps>(({ text, href, isNav = false }) => {
  let attrs = {};
  if (!isNav) {
    attrs = {
      ...attrs,
      rel: "noopener noreferrer",
      target: "_blank",
    };
  }
  return (
    <a class={getLinkStyles(isNav)} href={href} {...attrs}>
      {text}
    </a>
  );
});
