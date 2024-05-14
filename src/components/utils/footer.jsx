import themeIcons from "../../javascripts/utils/format.js";

export default function Footer() {
  const { linkedinIcon, githubIcon } = themeIcons();
  return (
    <footer>
      <div className="footer-social">
        <a
          href="https://linkedin.com/in/winny-drancourt-99b7932a8"
          target="_blank"
        >
          <img src={linkedinIcon} alt="linkedin" />
        </a>
        <a href="https://github.com/WinnyDrancourt" target="_blank">
          <img src={githubIcon} alt="github" />
        </a>
      </div>
      <p>Winny Drancourt © 2024</p>
      <div className="footer-mail">
        <a href="mailto:phoxile@gmail.com">phoxile@gmail.com</a>
      </div>
    </footer>
  );
}
