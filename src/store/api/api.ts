import axios from 'axios';

//Use it to work with API
export async function fetchDataFromAPI(endpoint: string): Promise<any> {
  try {
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}