import styles from "../styles/PostCard.module.css";
import Image from "next/image";
import Link from "next/link";

const PostCard = ({ post }) => {
  const slug = post.fields.slug;

  const imageSrc = `https:${post.fields.coverImage.fields.file.url}`;
  const imageAlt = post.fields.coverImage.fields.description;
  const imageWidth = post.fields.coverImage.fields.file.details.image.width;
  const imageHeight = post.fields.coverImage.fields.file.details.image.height;

  const author = post.fields.author;
  const title = post.fields.title;

  const date = new Date(post.sys.createdAt);
  const month = date.toLocaleString("default", { month: "long" });
  const day = date.getDate();
  const year = date.getFullYear();

  return (
    <Link href={`/posts/${slug}`}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={imageSrc} alt={imageAlt} />
        </div>
        <p className={`${styles.author} text-align-right tertiary-color`}>
          By {author}
        </p>
        <p className={`${styles.date} text-align-right tertiary-color`}>
          Published on {month} {day}, {year}
        </p>
        <h2 className="text-align-center">{title}</h2>
      </div>
    </Link>
  );
};

export default PostCard;
