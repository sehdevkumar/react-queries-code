import { useQuery } from "react-query";
import axios from "axios";

const retrievePosts = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts",
  );
  return response.data;
};

const DisplayPosts = () => {
  const {
    data: posts,
    error,
    isLoading,
  } = useQuery("postsData", retrievePosts);

  if (isLoading) return <div className="text-center mt-8">Fetching posts...</div>;
  if (error) return <div className="text-center mt-8 text-red-500">An error occurred: {error['message']}</div>;

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4">
      {posts.map((post) => (
        <li className="bg-white rounded-md shadow-md p-4" key={post.id}>
          <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
          <p className="text-gray-600">{post.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default DisplayPosts;
