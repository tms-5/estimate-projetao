import api from "@/services/api.services"

const getTasksProject = async (project_id: number) => {
  try {
      const response = await api.get(`/task/projectTask/${project_id}`);

      return response.data;
  } catch (error) {
      console.log(error);
  };
};

export default getTasksProject;
