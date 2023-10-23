import Post from "./components/Post";
import Header from "./components/Header";
import styles from "./App.module.css";
import "./global.css";
import Sidebar from "./components/Sidebar";

//author: { avatar_url: "", name: "", role: ""}
//publishedAt: Date
//content: String
const posts = [
  {
    id: 1,
    author: {
      avatarURL: "https://github.com/diego3g.png",
      name: "Diego",
      role: "CTO Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala, galera1" },
      { type: "paragraph", content: "Fala, galera2" },
      { type: "paragraph", content: "Fala, galera3" },
      { type: "paragraph", content: "Fala, galera4" },
    ],
    publishedAt: new Date("2022-10-13 10:00:00"),
  },
  {
    id: 2,
    author: {
      avatarURL: "https://github.com/robertasaoriokada.png",
      name: "Roberta Okada",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala, galera1" },
      { type: "paragraph", content: "Fala, galera2" },
      { type: "paragraph", content: "Fala, galera3" },
      { type: "paragraph", content: "Fala, galera4" },
    ],
    publishedAt: new Date("2022-10-22 10:00:00"),
  },
];
function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
export default App;
