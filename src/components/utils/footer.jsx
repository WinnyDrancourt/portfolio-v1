import { useTheme } from "../../context/thememode.jsx";
import Linkedin from "../../assets/images/icons8-linkedin-24.png";
import Llinkedin from "../../assets/images/icons8-Llinkedin-24.png";
import Github from "../../assets/images/icons8-github-24.png";
import Lgithub from "../../assets/images/icons8-Lgithub-24.png";

export default function Footer() {
  const { theme } = useTheme();

  const linkedin = theme ? Llinkedin : Linkedin;
  const github = theme ? Lgithub : Github;

  return (
    <footer>
      <div className="footer-social">
        <a
          href="https://linkedin.com/in/winny-drancourt-99b7932a8"
          target="_blank"
        >
          <img src={linkedin} alt="linkedin" />
        </a>
        <a href="https://github.com/WinnyDrancourt" target="_blank">
          <img src={github} alt="github" />
        </a>
      </div>
      <p>Winny Drancourt © 2024</p>
      <div className="footer-mail">
        <a href="mailto:phoxile@gmail.com">phoxile@gmail.com</a>
      </div>
    </footer>
  );
}
