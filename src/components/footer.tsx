import { component$ } from "@builder.io/qwik";
import { useServerTimeLoader } from "~/routes/layout";

export default component$(() => {
  const serverTime = useServerTimeLoader();

  return (
    <footer>
      <ul>
        <li>
          <a href="https://linkedin.com/in/rikardhallberg">in</a>
        </li>
        <li>
          <a href="mailto:r15.hallberg@gmail.com">Mail</a>
        </li>
        <li>
          <a href="https://github.com/rikhall1515">GitHub</a>
        </li>
      </ul>
      <a>R Hallberg</a>
      <small>© 2023 copyright all rights reserved</small>
    </footer>
  );
});
