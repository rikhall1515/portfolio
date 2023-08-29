import { Slot, component$ } from "@builder.io/qwik";

interface ButtonProps {
  text: string;
  href: string;
  fill_container?: boolean;
}

export default component$<ButtonProps>(
  ({ text, href, fill_container = false }) => {
    const fillBreakpoint = fill_container
      ? "w-full md:w-[11.25rem]"
      : "w-full sm:w-[15rem]";
    return (
      <a
        href={href}
        class={`
        ${fillBreakpoint}
        py-[0.3125rem] px-7
        border-[0.25rem] border-solid border-primary
        rounded-lg
        shadow-button
        flex items-center justify-center gap-[0.5rem]
        leading-normal text-[1.25rem] text-center whitespace-nowrap ease-in-out
        font-bold
        
        text-primary fill-primary
        hover:bg-primaryDarker hover:text-secondary_900
        focus:bg-primaryDarker focus:text-secondary_900
        hover:border-primaryDarker hover:shadow-secondary_900 hover:gap-0
        focus:border-primaryDarker focus:shadow-secondary_900 focus:gap-0
        button
      `}
        rel="noopener noreferrer"
      >
        <Slot name="Icon" />
        <span>{text}</span>
      </a>
    );
  }
);
