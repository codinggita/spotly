const API_URL = import.meta.env.VITE_API_BASE_URL ? `${import.meta.env.VITE_API_BASE_URL}/parking` : 'http://localhost:5001/api/parking';

export const getParkingSpots = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || 'Failed to fetch parking spots');
    }
    
    return data.data; // Return the array of spots
  } catch (error) {
    console.error('Error fetching parking:', error);
    throw error;
  }
};
