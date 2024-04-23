import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const useDeleteApi = (mutationName: string) => {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: async (url: string) => {
      return await axios.delete(url);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [mutationName] });
    },
  });

  const deletePost = (url: string) => deleteMutation.mutateAsync(url);

  return deletePost;
};

export default useDeleteApi;
