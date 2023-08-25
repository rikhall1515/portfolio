import { component$ } from "@builder.io/qwik";
interface LinkProps {
  text: string;
  href: string;
}

export default component$<LinkProps>(({ text, href }) => {
  return (
    <a
      class={`
        inline-block relative
        after:content-[''] after:block after:w-0 after:h-[0.25rem] after:relative after:bottom-[-0.25rem] after:bg-primary after:opacity-50
        hover:after:w-full focus:after:w-full hover:text-primary
        text-primary
      `}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {text}
    </a>
  );
});
