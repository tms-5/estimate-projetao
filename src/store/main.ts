import { seniorityType, userType } from "./enum";

const fakeDev = {
  level: userType.developer,
  name: "John Doe",
  email: "developer@example.com",
  seniority: seniorityType.jr,
  analist: true,
  nickname: "johndoe",
};

const fakeCompany = {
  level: userType.company,
  name: "Innova Tech",
  email: "company@example.com",
};

function fetchUserFromDatabase(email: string) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(email.includes("developer") ? fakeDev : fakeCompany);
    }, 1000);
  });
}

export async function getUserInfo(email: string) {
  try {
    const user = await fetchUserFromDatabase(email);
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
