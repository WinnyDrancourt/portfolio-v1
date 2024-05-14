import { useEffect, useState } from "react";
import { fetchStrapi } from "../../javascripts/utils/api";

export default function Desc() {
  const [desc, setDesc] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const descData = await fetchStrapi("/api/descriptions");
        setDesc(descData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="about-desc">
      {desc.map((descItem) => (
        <div key={descItem.id}>
          <div className="underline">
            <h3>{descItem.attributes.title}</h3>
          </div>
          <p>{descItem.attributes.content}</p>
        </div>
      ))}
    </div>
  );
}
