import fetchClient  from "../../utils/fetchClient";

const signupApi = async (
  email: string,
  password: string,
  token_expires_in: string,
) => {
  try {
    const response = await fetchClient.post('/signup', {
      email,
      password,
      token_expires_in
    });

    if (response.status === 400) {
      throw new Error('Bad request or User already exists');
    } else if (response.status === 500) {
      throw new Error('Internal server error');
    }

    return response.data;
  } catch (err: any) { console.log('====================================');
  console.log(err);
  console.log('====================================');
    throw new Error(err.message);
  }
};
  const loginApi = async (
    email: string,
    password: string,
    token_expires_in: string,
  ) => {
    try{
    const response = await fetchClient.post('/login', {
      email,
      password,
      token_expires_in
  })

      if (response.status === 400) {
        throw new Error('User Not found! Please go to the SignUp ');
      }else if(response.status === 401){
        throw new Error("Invalid Email or Passwird!");
      } else if(response.status === 500) {
        throw new Error('Internal server error');
      }
    
    return response.data;
    } catch (err: any) {   console.log('====================================');
    console.log(err);
    console.log('====================================');
      throw new Error(err.message);
   
    }
  };
  const refreshTokenApi = async (token: string, token_expires_in: string) => {
    try {
      const response = await fetchClient.post('/refresh-token', {
        refreshToken: token,
        token_expires_in
      });
  
      if (response.status === 400) {
        throw new Error('User not found!');
      } else if (response.status === 401) {
        throw new Error('Invalid Email or Password');
      } else if (response.status === 500) {
        throw new Error('Internal server error');
      }
  
      return response.data;
    } catch (err: any) { console.log('====================================');
    console.log(err);
    console.log('====================================');
      throw new Error(err.message);
    }
  }
  

  export {signupApi, loginApi, refreshTokenApi}