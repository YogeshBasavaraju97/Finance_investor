import axios from 'axios';
import { CompanyProfile, CompanySearch } from './company';

interface searchResponse {
  data: CompanySearch[];
}
export const searchCompanies = async (query: string) => {
  try {
    const data = await axios.get<searchResponse>(
      `https://financialmodelingprep.com/api/v3/search-ticker?query=${query}&limit=10&exchange=NASDAQ&apikey=FHIWgwbenlC5w5YGDajTQdqkhAlPnW9s`
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message:', error.message);
      return error.message;
    } else {
      console.log('unexpected error:', error);
      return 'An expected error has occurred';
    }
  }
};

export const getCompanyProfile = async (query: string) => {
  try {
    const data = await axios.get<CompanyProfile[]>(
      `https://financialmodelingprep.com/api/v3/profile/${query}?&apikey=FHIWgwbenlC5w5YGDajTQdqkhAlPnW9s`
    );
    return data;
  } catch (error: any) {
    console.log('error message from api:', error.message);
  }
};

export const getKeyMatrics = async (query: string) => {
  try {
    const data = await axios.get<CompanyKeyMetrics[]>(
      `https://financialmodelingprep.com/api/v3/profile/${query}?&apikey=FHIWgwbenlC5w5YGDajTQdqkhAlPnW9s`
    );
    return data;
  } catch (error: any) {
    console.log('error message from api:', error.message);
  }
};
