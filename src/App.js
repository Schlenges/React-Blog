import React, {useState} from 'react';
import Navbar from './Navbar'
import Posts from './Posts';

const postsFile = require("./posts/posts.json");

function App() {
  const [tag, setTag] = useState("home")
  // const [posts, setPosts] = useState(postsFile.posts)

  const posts = tag !== "home" ? postsFile.posts.filter(post => post.tag === tag) : postsFile.posts

  return (
    <div className="App">
      <Navbar setTag={setTag} />
      <Posts posts={posts} />
    </div>
  );
}

export default App;
