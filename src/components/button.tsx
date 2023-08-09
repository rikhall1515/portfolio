import { Slot, component$ } from "@builder.io/qwik";

export enum ButtonVariant {
  Fill,
  Outlined,
  NoFill,
}

interface ButtonProps {
  Icon: boolean;
  text: string;
  variant: ButtonVariant;
  href: string;
  font_style?: string;
  fill_container?: boolean;
}

const commonStyles = [
  "flex items-center justify-center gap-[0.5rem]",
  "min-w-[11.25rem]",
  "rounded-lg",
  "leading-normal text-[1.25rem] text-center whitespace-nowrap ease-in-out",
  "transition-all",
  "hover:border-primaryDarker hover:shadow-secondary_900 hover:scale-105 hover:gap-0",
  "focus:border-primaryDarker focus:shadow-secondary_900 focus:scale-105 focus:gap-0",
].join(" ");

function getVariantStyle(variant: ButtonVariant) {
  switch (variant) {
    case ButtonVariant.Fill:
      return [
        "py-[0.5625rem] px-8",
        "bg-gradient-to-b from-primary to-primaryDarker",
        "text-secondary_900 fill-secondary_900",
        "backdrop-blur-md",
        "hover:text-white hover:bg-secondary_900 hover:bg-none",
        "focus:text-white focus:bg-secondary_900 focus:bg-none",
        "shadow-button",
        commonStyles,
      ].join(" ");
    case ButtonVariant.Outlined:
      return [
        "py-[0.3125rem] px-7",
        "text-primary fill-primary",
        "border-[0.25rem] border-solid border-primary",
        "hover:bg-primaryDarker hover:text-secondary_900",
        "focus:bg-primaryDarker focus:text-secondary_900",
        "shadow-button",
        commonStyles,
      ].join(" ");
    case ButtonVariant.NoFill:
    default:
      return [
        "py-[0.5625rem] px-8",
        "text-primary fill-primary",
        "hover:bg-primaryDarker hover:text-secondary_900",
        "focus:bg-primaryDarker focus:text-secondary_900",
        commonStyles,
      ].join(" ");
  }
}

export default component$<ButtonProps>(
  ({
    Icon,
    text,
    variant,
    href,
    font_style = "font-bold",
    fill_container = false,
  }) => {
    //The buttons in the contact section should fill the container after the md breakpoint
    const ContactSectionFlag = fill_container
      ? "w-full md:w-fit "
      : "w-full sm:w-fit ";
    const hasIcon = Icon ? "button" : ""; //Check global.css
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
        <Slot name="Icon" />
        <span>{text}</span>
      </a>
    );
  }
);
