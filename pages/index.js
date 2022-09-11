import Head from "next/head";
import styles from "../styles/Home.module.css";
import client from "../lib/client";
import PostCard from "../components/PostCard";

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chalky&apos;s Blog</title>
        <meta name="description" content="Chalky's Blog" />
        <link rel="icon" href="/favicon.svg" />
        <meta property="og:title" content="Chalky's Blog" />
        <meta
          property="og:description"
          content="Tutorials, Life, and Technology"
        />
        <meta property="og:image" content="/logo.svg" />
      </Head>

      <div className={styles.postsContainer}>
        {posts.map((post) => (
          <PostCard key={post.sys.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await client.getEntries({
    content_type: "post"
  });

  return {
    props: {
      posts: res.items
    },
    revalidate: 1
  };
}
