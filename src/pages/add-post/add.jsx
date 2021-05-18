import "../../styles/add-post.css";
export default function AddPost() {
  return (
    <div
      className="form"
      style={{
        margin: "auto",
        width: "60%",
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: "2px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Add Post</h1>
      <input
        style={{
          margin: "10px auto",
          display: "block",
          padding: "10px",
        }}
        placeholder="add title"
      />
      <input
        style={{
          margin: "10px auto",
          display: "block",
          padding: "10px",
        }}
        placeholder="tags"
      />
      <input
        style={{
          margin: "10px auto",
          display: "block",
          padding: "10px",
        }}
        type="date"
        placeholder="add date"
      />
      <textarea
        style={{
          margin: "10px auto",
          display: "block",
          padding: "10px",
        }}
      />
      <input
        style={{ margin: "20px auto", display: "block", width: "200px" }}
        type="file"
      />
      <button>add post</button>
    </div>
  );
}
