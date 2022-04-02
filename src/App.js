import { PostForm } from "./PostsForm";
import { Posts } from "./Posts";
import "./styles.scss";

export default function App() {
  return (
    <div className="App">
      <PostForm />
      <Posts />
    </div>
  );
}
