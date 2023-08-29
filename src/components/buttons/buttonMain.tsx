import { component$ } from "@builder.io/qwik";

interface ButtonProps {
  text: string;
  fill_container?: boolean;
}
export default component$<ButtonProps>(({ text, fill_container = false }) => {
  const fillBreakpoint = fill_container
    ? "w-full md:w-[11.25rem]"
    : "w-full sm:w-[15rem]";
  return (
    <a
      href="mailto:r15.hallberg@gmail.com"
      class={`
       ${fillBreakpoint}
       py-[0.5625rem] px-8
       rounded-lg
       overflow-hidden
       button
       backdrop-blur-md
       flex items-center justify-center gap-[0.5rem]
       shadow-button
       leading-normal text-[1.25rem] text-center whitespace-nowrap 
       font-bold
       ease-in-out

       before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-primary before:to-primaryDarker before:opacity-1
       before:transition-opacity
       before:z-[-1]
       hover:before:opacity-0 focus:before:opacity-0

       text-secondary_900 fill-secondary_900
       bg-white
       hover:text-white hover:bg-secondary_900 
       focus:text-white focus:bg-secondary_900 
       hover:border-primaryDarker hover:shadow-secondary_900 hover:gap-0
       focus:border-primaryDarker focus:shadow-secondary_900 focus:gap-0
      `}
      rel="noopener noreferrer"
    >
      <svg
        width="36"
        height="24"
        viewBox="0 0 36 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        q:slot="Icon"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3 0C1.34315 0 0 1.34315 0 3V6L18 9L36 6V3C36 1.34315 34.6569 0 33 0H3Z"
          fill="#090413"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M22.5 11.25L18 12L13.5 11.25L0 18V21C0 22.6569 1.34315 24 3 24H33C34.6569 24 36 22.6569 36 21V18L22.5 11.25ZM36 15V9L27 10.5L36 15ZM0 9L9 10.5L0 15V9Z"
          fill="#090413"
        />
      </svg>
      <span>{text}</span>
    </a>
  );
});
