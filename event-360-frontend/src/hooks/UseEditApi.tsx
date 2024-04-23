import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const UseEditApi = (url: string, mutationName: string) => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: async (data:any) => {
      const response = await axios.put(url, data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [mutationName] });
    },
  });

  return mutateAsync;
};

export default UseEditApi;
