import api from "@/services/api.services"
import { ProjectType } from "@/types/projects";

const createProject = async (data: ProjectType | any) => {
  try {
    const response = await api.post('/project/', data, {
      params: {
        user_id: 1,
      }
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default createProject;
