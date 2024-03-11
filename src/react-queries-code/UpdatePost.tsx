import { useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";

const UpdatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const mutation = useMutation((newPost) =>
    axios.put("https://jsonplaceholder.typicode.com/posts/1", newPost),
  );

  const submitData = () => {
    mutation.mutate({ title, body } as unknown as void);
  };

  return (
    <div className="h-max max-w-md mx-auto p-4 bg-white rounded-md shadow-md">
      <input
        className="w-full mb-2 p-2 border border-gray-300 rounded-md"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        className="w-full mb-2 p-2 border border-gray-300 rounded-md"
        type="text"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Body"
      />
      <button
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
        onClick={submitData}
      >
        Update
      </button>

      {mutation.isLoading && (
        <span className="text-blue-500">Updating...</span>
      )}

      {mutation.isError && (
        <span className="text-red-500">Error: {mutation.error?.['message']}</span>
      )}

      {mutation.isSuccess && (
        <span className="text-green-500">Post Updated!</span>
      )}
    </div>
  );
};

export default UpdatePost;
