import { component$ } from "@builder.io/qwik";
import Button, { ButtonVariant } from "~/components/button";
export default component$(() => {
  return (
    <header class="py-8 fixed top-0 left-0 w-full bg-white">
      <div class="max-w-[120rem] m-auto px-32 flex justify-between">
        <a href="#introduction" aria-label="Website logo, jumps to top of page">
          <svg
            class="w-11 h-11"
            width="124.65"
            height="111.2"
            viewBox="0 0 32.980334 29.421684"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <g
                style="font-size:42.1035px;line-height:1.25;font-family:Poppins;-inkscape-font-specification:Poppins;text-align:center;text-anchor:middle;stroke-width:2.10517"
                transform="translate(29.165848,-189.62234)"
              >
                <path
                  d="m -14.004416,219.03571 -6.483939,-11.45216 h -2.778831 v 11.45216 h -5.89449 v -29.38825 h 11.031117 q 3.410384,0 5.810283,1.221 2.3998998,1.1789 3.5787978,3.24197 1.2210015,2.02097 1.2210015,4.54718 0,2.90514 -1.68414,5.26294 -1.6841403,2.31569 -5.0103163,3.19986 l 7.0312843,11.9153 z m -9.26277,-15.87302 h 4.92611 q 2.399899,0 3.578797,-1.1368 1.178898,-1.1789 1.178898,-3.24197 0,-2.02097 -1.178898,-3.11566 -1.178898,-1.13679 -3.578797,-1.13679 h -4.92611 z"
                  style="font-style:normal;font-variant:normal;font-weight:600;font-stretch:normal;font-family:Poppins;-inkscape-font-specification:'Poppins Semi-Bold';stroke-width:2.10517"
                />
              </g>
              <path
                style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
                d="m 32.972278,29.413366 h -6.27342 l -7.03129,-11.915302 h 6.82077 z"
              />
              <path
                style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.216485px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
                d="m 27.593818,21.33254 -2.26848,4.573096 -11.47216,0.10627 2.82801,-4.768845 z"
              />
              <g
                style="font-size:42.1035px;line-height:1.25;font-family:Poppins;-inkscape-font-specification:Poppins;text-align:center;text-anchor:middle;stroke-width:2.10517"
                transform="translate(29.165848,-189.62234)"
              >
                <path
                  d="m -14.004416,219.03571 -6.483939,-11.45216 h -2.778831 v 11.45216 h -5.89449 v -29.38825 h 11.031117 q 3.410384,0 5.810283,1.221 2.3998998,1.1789 3.5787978,3.24197 1.2210015,2.02097 1.2210015,4.54718 0,2.90514 -1.68414,5.26294 -1.6841403,2.31569 -5.0103163,3.19986 l 7.0312843,11.9153 z m -9.26277,-15.87302 h 4.92611 q 2.399899,0 3.578797,-1.1368 1.178898,-1.1789 1.178898,-3.24197 0,-2.02097 -1.178898,-3.11566 -1.178898,-1.13679 -3.578797,-1.13679 h -4.92611 z"
                  style="font-style:normal;font-variant:normal;font-weight:600;font-stretch:normal;font-family:Poppins;-inkscape-font-specification:'Poppins Semi-Bold';stroke-width:2.10517"
                />
              </g>
            </g>
          </svg>
        </a>
        <nav class="flex items-center" aria-label="In-page jump links">
          <ul class="flex text-[1.25rem]">
            <li>
              <a class="font-medium" href="#projects">
                Projects
              </a>
            </li>
            <li class="ml-6">
              <a class="font-medium" href="#contact">
                Contact
              </a>
            </li>
            <li class="ml-6">
              <Button
                Icon={false}
                text="Resumé"
                href="/Rikard_Hallberg_CV.pdf"
                variant={ButtonVariant.Outlined}
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
});
