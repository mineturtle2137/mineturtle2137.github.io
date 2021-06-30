import axios from 'axios';
import { ApiItem, ApiResponseType } from 'utils/types';

class ApiService {
    private apiConnector = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        params: {
            api_token: process.env.REACT_APP_API_KEY,
            limit: 20,
        },
    });

    public getProducts = async (): Promise<ApiItem[]> => {
        const response: ApiResponseType = await this.apiConnector.get('products');
        const responseData: ApiItem = response.data;
        console.log(responseData);

        return responseData.data;
    };
}

export const Api = new ApiService();
