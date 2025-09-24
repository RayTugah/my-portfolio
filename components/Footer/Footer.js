import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `

<h2>Contacto</h2>
<div>
${Button("/public/twitter.png", "Twitter")}
${Button("/public/github.jpeg", "GitHub")}
${Button("/public/linkedin.jpeg", "LinkedIn")}
${Button("/public/telegram.png", "Telegram")}
</div>
`;