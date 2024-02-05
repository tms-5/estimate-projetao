import { ApiService } from "./api.services";

class CustomApiService extends ApiService {

    public async getCustom(path: string) {
        return this.get(path);
    }

    public async postCustom(path: string, objectData: any) {
        return this.post(path, objectData);
    }

    public async putCustom(path: string, objectData: any) {
        return this.put(path, objectData);
    }

    public async deleteCustom(path: string, objectData: any) {
        return this.delete(path, objectData);
    }

}