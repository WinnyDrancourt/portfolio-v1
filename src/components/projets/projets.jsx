import { useEffect, useState } from "react";
import { BASE_URL, fetchStrapi } from "../../javascripts/utils/api";
import themeIcons from "../../javascripts/utils/format.js";

const Projets = () => {
  const [projets, setProjets] = useState([]);
  const { githubIcon } = themeIcons();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projetData = await fetchStrapi("/api/projects?populate=*");
        setProjets(projetData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="projets">
      {projets.map((projet) => (
        <div key={projet.id} className="projet-card">
          <div className="underline">
            <h3>{projet.attributes.name}</h3>
          </div>
          {projet.attributes.image.data ? (
            <a href={projet.attributes.url}>
              <img
                src={`${BASE_URL}${projet.attributes.image.data.attributes.url}`}
                className="projet-image"
              />
            </a>
          ) : (
            <p>No image</p>
          )}
          <div className="projet-tech">
            <div>
              <p>{projet.attributes.description}</p>
            </div>
            <div>
              <a href={projet.attributes.github} target="_blank">
                <img src={githubIcon} alt="github" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projets;
