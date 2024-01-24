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

export interface Task {}

export interface Component {}
