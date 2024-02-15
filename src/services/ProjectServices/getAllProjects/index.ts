import api from "@/services/api.services"

const getAllProjects = async () => {
  try {
    const response = await api.get('/project/');

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default getAllProjects;
