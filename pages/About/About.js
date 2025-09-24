import "./About.css";
import { cleanPage } from "../../utils/cleanPage";
import { Divider } from "../../components/Divider/Divider";

export const About = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="about">
      <div class="about-content">
        <div class="about-text">
          <h2>Sobre mí</h2>
          ${Divider()}
          <p>¡Hola! Soy Mario Hernández, un desarrollador FullStack apasionado por crear soluciones digitales innovadoras. Me especializo en tecnologías modernas y disfruto enfrentando nuevos desafíos técnicos.</p>
          
          <h3>Mi experiencia</h3>
          <p>Trabajo con una amplia gama de tecnologías, desde desarrollo frontend con React, Vue y JavaScript vanilla, hasta backend con Node.js, Python y bases de datos. Me gusta mantenerme actualizado con las últimas tendencias y mejores prácticas del desarrollo web.</p>
          
          <h3>Filosofía de trabajo</h3>
          <p>Creo en el código limpio, las buenas prácticas y la importancia de la experiencia del usuario. Cada proyecto es una oportunidad para aprender algo nuevo y crear algo significativo.</p>
          
          <div class="skills">
            <h3>Tecnologías principales</h3>
            <div class="skills-grid">
              <span class="skill">JavaScript</span>
              <span class="skill">React</span>
              <span class="skill">Vue.js</span>
              <span class="skill">Node.js</span>
              <span class="skill">Python</span>
              <span class="skill">CSS3</span>
              <span class="skill">HTML5</span>
              <span class="skill">Git</span>
            </div>
          </div>
        </div>
        
        <div class="about-image">
          <div class="image-placeholder">
            <span>👨‍💻</span>
          </div>
        </div>
      </div>
    </section>`;
};
