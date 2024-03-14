import api from "@/services/api.services";

const relateUserProject = async (userId: number, projectId: number) => {
    try {
        const response = await api.post(`/project/userProject/${userId}/${projectId}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export default relateUserProject;
