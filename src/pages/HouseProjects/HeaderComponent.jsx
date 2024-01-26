import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProjectDetail } from "../../constants/apiHouseProject";

export default function HeaderComponent() {
  const { id } = useParams();
  const [houseProjectDetail, setHouseProjectDetail] = useState({});

  useEffect(() => {
    const fetchHouseProjectDetail = async () => {
      try {
        const data = await getProjectDetail(id);
        if (data && data.result) {
          setHouseProjectDetail(data.result.data);
        } else {
          console.error("Invalid data format:", data);
        }
      } catch (error) {
        console.error("Error fetching house roof data:", error);
      }
    };

    fetchHouseProjectDetail();
  }, [id]);

  if (!houseProjectDetail || !houseProjectDetail.staticFiles) {
    return null;
  }
  return (
    <div className="text-3xl leading-11 uppercase font-bold text-center my-5 ">
      <h1>{houseProjectDetail.sampleProject.header}</h1>
    </div>
  );
}
