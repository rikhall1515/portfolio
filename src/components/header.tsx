import { component$ } from "@builder.io/qwik";
export default component$(() => {
  return (
    <header>
      <nav>
        <a href="#home">R Hallberg</a>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </nav>
    </header>
  );
});
