import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const UseGetApi = (url: string, queryName: string) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [queryName],
    queryFn: async () => {
      try {
        return await axios.get(url);
      } catch (error) {
        console.log(error);
      }
    },
  });
  return { data, isLoading, isError };
};

export default UseGetApi;
