import Desc from "./desc";
import Exp from "./exp";

export default function About() {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-left-inner">
          <div className="underline">
            <h2>Winny DRANCOURT</h2>
            <p>
              <strong>Fullstack Developer</strong>
            </p>
          </div>
          <p>
            Je crée pour vous, des experiences digital engageantes et
            accessible.
          </p>
        </div>
      </div>
      <div className="about-right">
        <Desc />
        <Exp />
      </div>
    </div>
  );
}
