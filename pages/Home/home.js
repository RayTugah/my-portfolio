import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="home">
    <p>Bienvenido a</p>
    <h1>RayhDev</h1>
    <p>Mi nombre es Mario Hernández, soy desarrollador FullStack</p>
    <a href="mailto:mario.hm.laboral@gmail.com">Contacta conmigo →</a>
    </section>`;
};