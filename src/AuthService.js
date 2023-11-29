import axios from 'axios';
import jwt_decode from 'jwt-decode';



const TOKEN_KEY = 'token';

export const getToken = () => {
    return localStorage.getItem(TOKEN_KEY);
};

export const setToken = (token) => {
    localStorage.setItem(TOKEN_KEY, token);
};

export const removeToken = () => {
    localStorage.removeItem(TOKEN_KEY);
};

export const isTokenExpired = () => {
    const token = getToken();
    if (!token) {
        return true; // Se não houver token, considere como expirado ou inválido
    }

    const decodedToken = jwt_decode(token); // Decodifica o token aqui
    return Date.now() >= decodedToken.exp * 1000;
};


export const setAuthHeaders = () => {
    const token = getToken();
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

export const logout = () => {
    removeToken();
    setAuthHeaders();
};

export const login = async (usuario) => {
    try {
        const response = await axios.post("https://petfeliz.azurewebsites.net/api/Auth/Login", usuario);

        if (response.status === 200) {
            const token = response.data.token;
            setToken(token);
            setAuthHeaders();
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error('Erro no login:', error);
        return false;
    }
};






const getUserInfo = () => {
    const token = getToken();

    if (token) {
        const decodedToken = jwt_decode(token);
        return decodedToken;
    }

    return null;
};


const LogoutButton  = () => {
    localStorage.removeItem('@jwt');
  AuthContextFunctions.SaveJWT('');
  window.location.href = '/home'; 
  };




export { getUserInfo }; 
