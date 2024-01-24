import { seniorityType } from "./enum";

const fakeUser = {
  level: "Desenvolvedor",
  name: "John Doe",
  email: "developer@example.com",
  seniority: seniorityType.jr,
  analist: true,
  nickname: "johndoe",
};

function fetchUserFromDatabase() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fakeUser);
    }, 1000);
  });
}

export async function getUserInfo() {
  try {
    const user = await fetchUserFromDatabase();
    return user;
  } catch (error) {
    console.error("Erro ao buscar informações do usuário:", error);
    return null;
  }
}

export function isAuthenticated() {
  const token = localStorage.getItem("user");
  return !!token;
}
