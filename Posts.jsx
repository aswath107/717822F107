import { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState("");


  const fetchToken = async () => {
    try {
      const response = await fetch("http://20.244.56.144/test/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          companyName: "goMart",
          clientID: "d63edf64-e1c6-48ad-9d26-c9cf116623c3",
          clientSecret: "oXEaGUjBearwwgTe",
          ownerName: "aswath",
          ownerEmail: "717822f107@kce.ac.in",
          rollNo: "717822f107",
        }),
      });

      if (!response.ok) {
        throw new Error(`Token request failed! Status: ${response.status}`);
      }

      const data = await response.json();
      setToken(data.access_token);
      return data.access_token;
    } catch (err) {
      setError("Failed to fetch token.");
      console.error("Error fetching token:", err);
      return null;
    }
  };


  const fetchPosts = async (accessToken) => {
    try {
      const response = await fetch("http://20.244.56.144/test/users/4/posts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.status === 401) {
        
        console.warn("Token expired, fetching a new one...");
        const newToken = await fetchToken();
        if (newToken) {
          fetchPosts(newToken);
        }
        return;
      }

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setPosts(data.posts || []);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch posts.");
      console.error("Error fetching posts:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      const newToken = await fetchToken();
      if (newToken) {
        fetchPosts(newToken);
      }
    })();
  }, []);

  return (
    <div>
      <h2>User 4's Posts</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {loading ? <p>Loading posts...</p> : null}
      <ul>
        {posts.length > 0 ? (
          posts.map((post) => <li key={post.id}>{post.content}</li>)
        ) : (
          !loading && <p>No posts available.</p>
        )}
      </ul>
    </div>
  );
};

export default Posts;
