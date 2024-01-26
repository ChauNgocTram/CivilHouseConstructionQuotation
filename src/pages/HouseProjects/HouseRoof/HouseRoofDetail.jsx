import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getProjectDetail } from "../../../constants/apiHouseProject";

export default function HouseRoofDetail() {
  const [houseRoofData, setHouseRoofData] = useState([]);
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  useEffect(() => {
    const fetchHouseRoof = async () => {
      try {
        const data = await getProjectDetail();
        if (data && data.result) {
          setHouseRoofData(data.result.data);
        }
      } catch (error) {
        console.error("Error fetching house roof data:", error);
      }
    };

    fetchHouseRoof();
  }, []);

  const filteredProjects = houseRoofData.filter(
    (project) => project.sampleProject.projectType === 1
  );

  const handleNext = () => {
    setPositionIndexes((prevIndexes) =>
      prevIndexes.map((prevIndex) => (prevIndex + 1) % 5)
    );
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) =>
      prevIndexes.map((prevIndex) => (prevIndex + 4) % 5)
    );
  };

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 4 }, // Adjust zIndex
    left: { x: "-90%", scale: 0.5, zIndex: 1 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 4 }, // Adjust zIndex
  };

  return (
    <>
      <div>HouseRoofDetail</div>
      <div className="flex items-center flex-col justify-center bg-black h-screen relative">
        {filteredProjects.map((image, index) => (
          <motion.img
           key={image.sampleProject.id}
            src={image.staticFiles[0]?.url || ""}
            alt={image.sampleProject.id}
            className="rounded-[12px]"
            initial="center"
            animate={positions[positionIndexes[index]]}
            variants={imageVariants}
            transition={{ duration: 0.5 }}
            style={{ width: "40%", position: "absolute" }}
          />
        ))}
        <div className="flex flex-row gap-3 mt-24">
          <button
            className="text-black mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
            onClick={handleBack}
          >
            Back
          </button>
          <button
            className="text-black mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
