import axios from "axios";

// const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
// import { getCookie } from "cookies-next";

const BACKEND_URL = "http://localhost:3002/";
let token = null;

export const API_URL = `${BACKEND_URL}api/account/`;

console.log(API_URL);

// Register Account
interface AccountData {
  first_name: string;
  last_name: string;
  username: string;
  password: string;
  confirm_password: string;
  email: string;
}

// this will send the AccountData to the backend as part of the req.body
const register = async (accountData: AccountData): Promise<any> => {
  const response = await axios.post(API_URL + "register", accountData, {
    withCredentials: false,
  });

  return response.data;
};

// login Account

const TestF = async (): Promise<any> => {
  const response = await axios.get(API_URL + "login/", {
    withCredentials: false,
  });

  return {
    responseData: response.data,
  };
};
const login = async (accountData: AccountData): Promise<any> => {
  const response = await axios.post(API_URL + "login/", accountData, {
    withCredentials: false,
  });

  return {
    accountData,
    responseData: response.data,
  };
};

// update Account
const updateAccount = async (
  id: number,
  accountData: AccountData
): Promise<any> => {
  try {
    // if (token == null) {
    //   token = getCookie("access_token");
    // }

    const response = await axios.put<AccountData>(
      API_URL + `update-account/${id}/`,
      accountData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return { id, data: response.data };
  } catch (error) {
    console.error("Error fetching data:", (error as any).response);
    throw error;
  }
};

const getAccount = async (id: number): Promise<any> => {
  try {
    // if (token == null) {
    //   token = getCookie("access_token");
    // }

    const response = await axios.get<AccountData>(
      API_URL + `accountbyId/${id}/`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return { responseData: response.data };
  } catch (error) {
    console.error("Error fetching data:", (error as any).response);
    throw error;
  }
};

const AccountAuthService = {
  register,
  login,
  updateAccount,
  getAccount,
  TestF,
};

export default AccountAuthService;
