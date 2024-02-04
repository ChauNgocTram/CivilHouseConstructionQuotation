import axios from "axios";
const baseURL = "https://hcqs-backend.azurewebsites.net";

export const quoteRequest = async (userData, accountId) => {
  try {
    const formData = new FormData();

   
    formData.append("NumOfFloor", userData.numOfFloor);
    formData.append("Area", userData.area);
    formData.append("LandDrawingFile", userData.landDrawingFileUrl); 
    formData.append("Type", userData.constructionType);
    formData.append("AccountId", accountId);
 

 
    const res = await axios.post(`${baseURL}/project/create-project-by-user`, formData, {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("accessToken")}`, 
         "Content-Type": "multipart/form-data",
      },
    });

    return res.data;
  } catch (err) {
    return null;
  }
};
