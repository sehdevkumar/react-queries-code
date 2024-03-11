import { useMutation } from "react-query";
import axios from "axios";

const DeletePost = () => {
  const mutation = useMutation(() =>
    axios.delete("https://jsonplaceholder.typicode.com/posts/1")
  );

  const deleteData = () => {
    mutation.mutate();
  };

  return (
    <div className="max-w-md mx-auto p-4 w-full bg-white rounded-md shadow-md">
      <button
        className="w-full bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition duration-300"
        onClick={deleteData}
      >
        Delete Post
      </button>

      {mutation.isLoading && (
        <div className="mt-4 text-blue-500">Deleting...</div>
      )}

      {mutation.isError && (
        <div className="mt-4 text-red-500">Error: {mutation.error?.['message']}</div>
      )}

      {mutation.isSuccess && (
        <div className="mt-4 text-green-500">Post deleted!</div>
      )}
    </div>
  );
};

export default DeletePost;
