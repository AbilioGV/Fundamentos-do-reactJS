import { Header } from "./components/Header";
import { Post, PostType } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

// author: { avatar_url: "" , name: "" , role: "" }
// publishedAt: Date
// Content: String

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/AbilioGV.png",
      name: "Abilio Gonçalves",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋" },
      {
        type: "paragraph",
        content:
          "Ainda assim, existem dúvidas a respeito de como a expansão dos mercados mundiais obstaculiza a apreciação da importância das novas proposições.",
      },
      { type: "paragraph", content: "Nome do projeto é 🚀" },
      { type: "link", content: "abilio.design/foguete" },
    ],
    publishedAt: new Date("2024-09-29 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/lucasbarbosaalves.png",
      name: "Lucas Barbosa",
      role: "Java Senior",
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋" },
      {
        type: "paragraph",
        content:
          "Ainda assim, existem dúvidas a respeito de como a expansão dos mercados mundiais obstaculiza a apreciação da importância das novas proposições.",
      },
      { type: "paragraph", content: "Nome do projeto é Java" },
      { type: "link", content: "abilio.design/javapro" },
    ],
    publishedAt: new Date("2024-09-30 22:49:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                post={post}
            />
            )
          })}
        </main>
      </div>
    </div>
  );
}
