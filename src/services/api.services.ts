import axios, { AxiosInstance, AxiosResponse } from 'axios';

export class ApiService {
    private axiosInstance: AxiosInstance;

    constructor() {
        this.axiosInstance = axios.create({
            // baseURL: 'https://estimate-back-paula.koyeb.app',
            baseURL: 'http://localhost:8000',
        });
    }

    protected async get<T>(url: string, params = {}): Promise<AxiosResponse<T>> {
        return this.axiosInstance.get<T>(url, { params });
    }

    protected async post<T>(url: string, data: any): Promise<AxiosResponse<T>> {
        return this.axiosInstance.post<T>(url, data);
    }

    protected async put<T>(url: string, data: any): Promise<AxiosResponse<T>> {
        return this.axiosInstance.put<T>(url, data);
    }

    protected async delete<T>(url: string, data: any): Promise<AxiosResponse<T>> {
        return this.axiosInstance.delete<T>(url, data);
    }
}

const api = axios.create({
    // baseURL: 'https://estimate-back-paula.koyeb.app',
    baseURL: 'http://localhost:8000',
});

export default api;
