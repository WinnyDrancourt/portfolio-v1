import { useEffect, useState } from "react";
import { BASE_URL, fetchStrapi } from "../../javascripts/utils/api";

const Projets = () => {
  const [projets, setProjets] = useState([]);

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
        <div key={projet.id}>
          <h3>{projet.attributes.name}</h3>
          {projet.attributes.image.data ? (
            <img
              src={`${BASE_URL}${projet.attributes.image.data.attributes.url}`}
            />
          ) : (
            <p>No image</p>
          )}
          <p>{projet.attributes.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Projets;
