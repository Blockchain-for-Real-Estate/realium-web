import { useMutation } from "react-query";

const UpdateUser = async (user) => {
  // await axios.put("/api/user", user);
};

const useUpdateUserMutation = () => {
  return useMutation(UpdateUser, {
    onSuccess: () => {
      alert("Account Updated");
    },
    onError: (error) => {
      alert(error);
    },
  });
};

export default useUpdateUserMutation;
