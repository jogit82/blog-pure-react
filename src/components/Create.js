import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
  };

  return (
    <div className="create">
      <h2>Add a blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          required
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Body:</label>
        <textarea
          required
          rows="10"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default Create;
