import { useState, useEffect } from "react";
import axios, { AxiosResponse, Method } from "axios";


interface UseAxiosOutput<T = any> {
  data: any;
  error: string | null;
  loading: boolean;
  mutate: (url: string, params?: object) => Promise<void>;
}

const useAxios = (): UseAxiosOutput => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const instance = axios.create({
    baseURL: "https://staging.mazaady.com/api/v1/",
    headers: {
      "private-key": "3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16",
    },
  });


  const mutate = async (url: string) => {
    setLoading(true);
    try {
      const res: AxiosResponse = await instance.get(url);
      setData(res.data.data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };


  return { data, error, loading, mutate };
};

export default useAxios;
