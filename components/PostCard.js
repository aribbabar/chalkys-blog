import styles from "../styles/PostCard.module.css";
import Image from "next/image";

const PostCard = ({ post }) => {
  console.log(post);

  const imageSrc = `https:${post.fields.coverImage.fields.file.url}`;
  const imageAlt = post.fields.coverImage.fields.description;
  const imageWidth = post.fields.coverImage.fields.file.details.image.width;
  const imageHeight = post.fields.coverImage.fields.file.details.image.height;

  const author = post.fields.author;
  const title = post.fields.title;

  const date = new Date(post.sys.createdAt);
  const month = date.toLocaleString("default", { month: "long" });
  const day = date.getDate();

  console.log(month, day);

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
        />
      </div>
      <p>By {author}</p>
      <p>
        Published on {month} {day}
      </p>
      <h2>{title}</h2>
    </div>
  );
};

export default PostCard;
