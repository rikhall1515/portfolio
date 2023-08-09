import { Slot, component$ } from "@builder.io/qwik";

export enum ButtonVariant {
  Fill,
  Outlined,
  NoFill,
}

interface ButtonProps {
  LIcon: boolean;
  text: string;
  variant: ButtonVariant;
  href: string;
  font_style?: string;
  fill_container?: boolean;
}

//hover and focus states are matching
const prefixed = (prefix: string) =>
  ["border-primaryDarker", "shadow-secondary_900", "scale-105", "gap-0"]
    .map((s) => `${prefix}:${s}`)
    .join(" ");

const commonStyles = `
  flex items-center justify-center gap-[0.5rem]
  min-w-[11.25rem] 
  rounded-lg 
  leading-normal text-[1.25rem] text-center whitespace-nowrap ease-in-out
  ${prefixed("hover")}
  ${prefixed("focus")}
`.trim();

function getVariantStyle(variant: ButtonVariant) {
  switch (variant) {
    case ButtonVariant.Fill:
      return `
            ${commonStyles} 
            py-[0.5625rem] px-8
            bg-gradient-to-b from-primary to-primaryDarker 
            text-secondary_900 fill-secondary_900 
            backdrop-blur-md hover:bg-secondary_900
            shadow-button
        `;
    case ButtonVariant.Outlined:
      return `
            ${commonStyles}
            py-[0.3125rem] px-7
            text-primary fill-primary
            border-[0.25rem] border-solid border-primary 
            shadow-button
        `;
    case ButtonVariant.NoFill:
    default:
      return `
            ${commonStyles} 
            py-[0.5625rem] px-8
            text-primary fill-primary
        `;
  }
}

export default component$<ButtonProps>(
  ({
    LIcon,
    text,
    variant,
    href,
    font_style = "font-bold ",
    fill_container = false,
  }) => {
    //The buttons in the contact section should fill the container after the md breakpoint
    const ContactSectionFlag = fill_container
      ? "w-full md:w-fit "
      : "w-full sm:w-fit ";
    const hasIcon = LIcon ? "button" : ""; //Check global.css
    return (
      <a
        href={href}
        class={[
          getVariantStyle(variant).trim(), // get style based on variant
          font_style,
          ContactSectionFlag,
          hasIcon,
        ].join(" ")}
        rel="noopener noreferrer"
        target="_blank"
      >
        <Slot name="LIcon" />
        <span class="hover:after:content-['']">{text}</span>
      </a>
    );
  }
);
