import { seniorityType, userType } from "./enum";

export interface Login {
  email: string;
  password: string;
}

export interface User {
  level: userType;
  name: string;
  nickname: string;
  email: string;
  password?: string;
  seniority: seniorityType;
  analist: boolean;
}

export interface Company {
  level: userType;
  name: string;
  email: string;
  password?: string;
}

export interface Task {
  id: string,
  task_action: string,
  component_action: string,
  user_can_view: boolean,
  created_by: string,
}

export interface TaskInformations {
  data: TaskData,
  comments: TaskComments[]
}

export interface TaskData {
  frameworks: string[],
  libs: string[],
  requirements: string[],
  histogram_junior: number[],
  histogram_avg_junior: number,
  estimated_avg_junior: number,
  histogram_pleno: number[],
  histogram_avg_pleno: number,
  estimated_avg_pleno: number,
  histogram_senior: number[],
  histogram_avg_senior: number,
  estimated_avg_senior: number,
  comments: TaskComments[]
}

export interface TaskComments {
  id: string,
  user_name: string,
  created_at: Date,
  level: seniorityType,
  framework: string[],
  libs: string[],
  problems: string,
  sugestions: string,
  estimated_time: number,
  real_time: number
}

export interface Component { }
export interface TaskCard {
  id: string;
  nome: string;
  descricao: string;
  projeto_id: string;
  avaliacoes: number;
  routerTo: string
}