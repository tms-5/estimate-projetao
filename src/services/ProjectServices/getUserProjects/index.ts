import api from "@/services/api.services"

const getUsersProjects = async (user_id: number) => {
  try {
    const response = await api.get(`/project/userProject/${user_id}`);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default getUsersProjects;
