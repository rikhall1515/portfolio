import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section id="home">
      <header>
        <h1>Hi, I'm Rikard</h1>
        <p>
          Computer science graduate from <a href="https://mdu.se">MDU</a>
        </p>
        <div></div>
        <img></img>
        <a role="button" href="mailto:r15.hallberg@gmail.com">
          Hire Me
        </a>
      </header>
      <footer>
        <ul>
          <li>
            <a href="https://linkedin.com/in/rikardhallberg">in</a>
          </li>
          <li>
            <a href="https://github.com/rikhall1515">GitHub</a>
          </li>
        </ul>
      </footer>
      <img></img>
    </section>
  );
});
