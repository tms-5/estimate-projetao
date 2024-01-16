import { seniorityType } from "./enum";

export interface Login {
  email: string;
  password: string;
}

export interface User {
  name: string;
  nickname: string;
  email: string;
  password: string;
  seniority: seniorityType;
  ocupation: string;
  analist: boolean;
}

export interface Company {
  name: string;
  email: string;
  password: string;
}

export interface Task {}

export interface Component {}
