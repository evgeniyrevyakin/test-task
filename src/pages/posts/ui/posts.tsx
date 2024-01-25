import { FC, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import styles from "./styles.module.css";
import { Props } from "./types";
import { PostItem } from "../../post-item";

export const Posts: FC<Props> = ({ data, isLoading, setPostStart }) => {
  const { ref: firstCard, inView: inViewFirstCard } = useInView({
    threshold: 0.5,
  });

  const { ref: lastCard, inView: inViewLastCard } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inViewFirstCard) {
      setPostStart((prev) => (prev > 0 ? prev - 1 : prev));
    }
  }, [inViewFirstCard]);

  useEffect(() => {
    if (inViewLastCard) {
      setPostStart((prev) => prev + 1);
    }
  }, [inViewLastCard]);

  return (
    <div>
      <ul className={styles.list}>
        {data?.map((post, index, arr) =>
          index === 0 ? (
            <li key={post.id} ref={firstCard}>
              <PostItem post={post} />
            </li>
          ) : index === arr.length - 1 ? (
            <li key={post.id} ref={lastCard}>
              <PostItem post={post} />
            </li>
          ) : (
            <li key={post.id}>
              <PostItem post={post} />
            </li>
          )
        )}
      </ul>
      {isLoading && <p>Loading...</p>}
    </div>
  );
};