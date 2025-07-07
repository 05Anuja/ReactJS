import React, { createContext } from "react";

export const CreatePosts = createContext();

const CreatePost = ({children}) => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const api = `https://jsonplaceholder.typicode.com/posts/${id}`;
    fetch(api)
      .then((res) => res.json())
      .then((resData) => setPost(resData));
  }, [id]);

  return (
    <>
        <CreatePosts.Provider value={{post}}>
            {children}
        </CreatePosts.Provider>
    </>
  );
};

export default CreatePost;
