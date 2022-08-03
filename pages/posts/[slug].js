import styles from "../../styles/Post.module.css";
import client from "../../lib/client";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Skeleton from "../../components/Skeleton";
import Head from "next/head";

const renderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      return (
        <div className={styles.imageContainer}>
          <Image
            src={`https:${node.data.target.fields.file.url}`}
            alt={node.data.target.fields.description}
            height={node.data.target.fields.file.details.image.height}
            width={node.data.target.fields.file.details.image.width}
          />
        </div>
      );
    },
  },
};

export default function PostDetails({ post }) {
  if (!post)
    return (
      <div className={styles.container}>
        <Skeleton />
      </div>
    );

  const imageSrc = `https:${post.fields.coverImage.fields.file.url}`;
  const imageAlt = post.fields.coverImage.fields.description;
  const imageWidth = post.fields.coverImage.fields.file.details.image.width;
  const imageHeight = post.fields.coverImage.fields.file.details.image.height;

  const author = post.fields.author;
  const title = post.fields.title;

  const date = new Date(post.sys.createdAt);
  const month = date.toLocaleString("default", { month: "long" });
  const day = date.getDate();

  const body = post.fields.body;

  return (
    <>
      <Head>
        <title>Chalky&apos;s Blog | {title}</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.postContainer}>
          <div className={styles.coverImageContainer}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <p className={`${styles.author} text-align-right tertiary-color`}>
            By {author}
          </p>
          <p className={`${styles.date} text-align-right tertiary-color`}>
            Published on {month} {day}
          </p>
          <h2 className="text-align-center">{title}</h2>
          <div className="break-line"></div>
          <div className={styles.bodyContainer}>
            {documentToReactComponents(body, renderOptions)}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "post",
    "fields.slug": params.slug,
  });

  if (!items.length) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }

  return {
    props: { post: items[0] },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const { items } = await client.getEntries({
    content_type: "post",
  });

  const paths = items.map((item) => {
    return {
      params: {
        slug: item.fields.slug,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
}
