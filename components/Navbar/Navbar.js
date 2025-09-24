import "./Navbar.css";

export const changeTheme = () => {
  const themeBtn = document.querySelector("#themeBtn");
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    changeText();
  });
};

export const changeText = () => {
  const themeBtn = document.querySelector("#themeBtn");
  if (themeBtn.innerText === "☀") {
    themeBtn.innerText = "☾";
  } else {
    themeBtn.innerText = "☀";
  }
};

export const Navbar = () => `
<nav>
<img src="./public/fondo.png" alt="fondo" class="fondo"/>
<h2>RayhDev</h2>
<ul>
    <li>
        <a href="#" id="homelink">Inicio</a>
    </li>
    <li>
        <a href="#" id="aboutlink">Sobre mí</a>
    </li>
    <li>
        <a href="#" id="projectslink">Proyectos</a>
    </li>
</ul>
</nav>
`;