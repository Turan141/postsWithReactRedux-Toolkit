import "./styles.scss";

export default function App() {
  return (
    <div className="App">
      <form>
        <label>
          Author:
          <input id="author" />
        </label>
        <label>
          Post Content:
          <input id="post" />
        </label>
      </form>
    </div>
  );
}
