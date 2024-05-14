import { useEffect, useState } from "react";
import { fetchStrapi } from "../../javascripts/utils/api";

export default function Exp() {
  const [isLoading, setIsLoading] = useState(false);
  const [exp, setExp] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const expData = await fetchStrapi("/api/experiences?populate=tags");
        setExp(expData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const formatDate = (date) => {
    return date.split("-")[0];
  };

  const formatCity = (city) => {
    if (city === "Remote") {
      return "en";
    } else if (
      city.toLowerCase().startsWith("a") ||
      city.toLowerCase().startsWith("e") ||
      city.toLowerCase().startsWith("i") ||
      city.toLowerCase().startsWith("o") ||
      city.toLowerCase().startsWith("u")
    ) {
      return "d'";
    } else {
      return "de";
    }
  };

  const formatCityName = (city) => {
    const formattedCity = formatCity(city);
    if (formattedCity === "d'") {
      return `${formattedCity}${city}`;
    } else {
      return `${formattedCity} ${city}`;
    }
  };

  return (
    <>
      {exp.reverse().map((expItem) => (
        <div key={expItem.id} className="exp-card">
          <div className="front-card">
            <p>
              {formatDate(expItem.attributes.start)} -{" "}
              {formatDate(expItem.attributes.end)}
            </p>
            <h2>
              {expItem.attributes.name}{" "}
              {formatCityName(expItem.attributes.city)}
            </h2>
          </div>
          <div className="back-card-border">
            <div className="back-card">
              <div className="back-card-header">
                <p>
                  {formatDate(expItem.attributes.start)} -{" "}
                  {formatDate(expItem.attributes.end)}
                </p>
                <h3>
                  {expItem.attributes.name}{" "}
                  {formatCityName(expItem.attributes.city)}
                </h3>
              </div>
              <div className="back-card-content">
                <p>{expItem.attributes.description}</p>
              </div>
              <div className="back-card-footer">
                {expItem.attributes.tags.data.map((tag) => (
                  <p key={tag.id}>{tag.attributes.name}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
