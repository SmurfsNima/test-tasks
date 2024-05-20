import axios, { AxiosResponse } from "axios";

interface ProfileData {
  name: string;
  email: string;
  password : string;
}

class ApiService {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  public async login(email: string, password: string): Promise<string> {
    const response = await axios.post(`${this.baseURL}/login`, {
      email,
      password,
    });

    return response.data;
  }

  public async getProfile(): Promise<ProfileData> {
    const response = await axios.get(`${this.baseURL}/profile`);
    return response.data;
  }

  public async updateProfile(profileData: ProfileData): Promise<ProfileData> {
    const response: AxiosResponse<ProfileData> = await axios.put(
      `${this.baseURL}/profile`,
      profileData
    );
    return response.data;
  }
  public async deleteAccount(): Promise<void> {
    await axios.delete(`${this.baseURL}/profile`);
  }
}

export default ApiService;
