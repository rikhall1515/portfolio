import {
  Slot,
  component$,
  useContext,
  type QwikKeyboardEvent,
  $,
} from "@builder.io/qwik";
import { MenuContext } from "~/root";
import { mainMenuBtnContext } from "~/routes/layout";

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
  isNavSidebar?: boolean;
}

const commonStyles = [
  "flex items-center justify-center gap-[0.5rem]",
  "rounded-lg",
  "overflow-hidden",
  "leading-normal text-[1.25rem] text-center whitespace-nowrap ease-in-out",
  "hover:border-primaryDarker hover:shadow-secondary_900 hover:gap-0",
  "focus:border-primaryDarker focus:shadow-secondary_900 focus:gap-0",
].join(" ");

const filledBeforeElm = [
  "before:content-[''] before:absolute before:inset-0",
  "before:bg-gradient-to-b before:from-primary before:to-primaryDarker before:opacity-1",
  "before:transition-opacity",
  "before:z-[-1]",
].join(" ");

function getVariantStyle(variant: ButtonVariant) {
  switch (variant) {
    case ButtonVariant.Fill:
      return [
        "py-[0.5625rem] px-8",
        "text-secondary_900 fill-secondary_900",
        "backdrop-blur-md",
        filledBeforeElm,
        "hover:text-white hover:bg-secondary_900 hover:before:opacity-0",
        "focus:text-white focus:bg-secondary_900 focus:before:opacity-0",
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
    isNavSidebar = false,
  }) => {
    const sidebarMenuExpanded = useContext(MenuContext);
    const mainMenuRef = useContext(mainMenuBtnContext);
    //The buttons in the contact section should fill the container after the md breakpoint
    const ContactSectionFlag = fill_container
      ? "w-full md:w-[11.25rem] "
      : "w-full sm:w-[15rem]";
    const hasIcon = Icon ? "button" : ""; //Check global.css
    let attrs = {};
    if (isNavSidebar) {
      attrs = {
        ...attrs,
        rel: "noopener noreferrer",
        target: "_blank",
        tabIndex: sidebarMenuExpanded.value ? 0 : -1,
        "preventdefault:keydown": true,
        onKeyDown$: $(
          (e: QwikKeyboardEvent<HTMLAnchorElement>) =>
            e.which == 9 && mainMenuRef.value.focus()
        ),
      };
    } else {
      attrs = {
        ...attrs,
        rel: "noopener noreferrer",
        target: "_blank",
      };
    }

    return (
      <a
        href={href}
        class={[
          getVariantStyle(variant).trim(), // get style based on variant
          font_style,
          ContactSectionFlag,
          hasIcon,
        ].join(" ")}
        {...attrs}
      >
        <Slot name="Icon" />
        <span>{text}</span>
      </a>
    );
  }
);
