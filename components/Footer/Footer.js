import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `

<h2>Contacto</h2>
<div>
${Button("twitter.png", "Twitter")}
${Button("github.jpeg", "GitHub")}
${Button("linkedin.jpeg", "LinkedIn")}
${Button("telegram.png", "Telegram")}
</div>
`;