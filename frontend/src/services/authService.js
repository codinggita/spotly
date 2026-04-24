const API_URL = 'http://localhost:5001/api/auth';

export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    
    // Check if the response is actually JSON
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      const text = await response.text();
      console.error('Backend returned non-JSON response:', text);
      throw new Error(`Server Error: Received HTML instead of JSON. Please check if the backend URL is correct.`);
    }

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || 'Registration failed');
    }
    
    return data;
  } catch (error) {
    console.error('Registration Error:', error);
    throw error;
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      const text = await response.text();
      console.error('Backend returned non-JSON response:', text);
      throw new Error(`Server Error: Received HTML instead of JSON. Please check if the backend URL is correct.`);
    }

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || 'Login failed');
    }
    
    if (data.token) {
      localStorage.setItem('spotly_token', data.token);
      localStorage.setItem('spotly_user', JSON.stringify(data.user));
    }
    
    return data;
  } catch (error) {
    console.error('Login Error:', error);
    throw error;
  }
};

export const logoutUser = () => {
  localStorage.removeItem('spotly_token');
  localStorage.removeItem('spotly_user');
};

export const getCurrentUser = () => {
  const user = localStorage.getItem('spotly_user');
  return user ? JSON.parse(user) : null;
};

export const isAuthenticated = () => {
  return !!localStorage.getItem('spotly_token');
};
