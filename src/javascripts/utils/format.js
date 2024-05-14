import Linkedin from "../../assets/images/icons8-linkedin-24.png";
import Llinkedin from "../../assets/images/icons8-Llinkedin-24.png";
import Github from "../../assets/images/icons8-github-24.png";
import Lgithub from "../../assets/images/icons8-Lgithub-24.png";
import { useTheme } from "../../context/thememode.jsx";

export default function themeIcons() {
  const { theme } = useTheme();
  const linkedinIcon = theme ? Llinkedin : Linkedin;
  const githubIcon = theme ? Lgithub : Github;
  return { linkedinIcon, githubIcon };
}
