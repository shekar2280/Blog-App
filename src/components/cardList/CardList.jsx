import React from 'react';
import styles from "./cardList.module.css";
import Pagination from '../pagination/Pagination';
import Card from '@/components/card/Card';

const getData = async ({ page, cat }) => {
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
};

const CardList = async ({ page, cat }) => {
  try {
    const { posts, count } = await getData({ page, cat });

    const POST_PER_PAGE = 4;

    const hasPrev = POST_PER_PAGE * (page - 1) > 0;
    const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Recent Posts</h1>
        <div className={styles.posts}>
          {posts?.map((item) => (
            <Card key={item._id} item={item} />
          ))}
        </div>
        <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} category={cat} />
      </div>
    );
  } catch (error) {
    return <div>Error loading posts: {error.message}</div>; // Simple error handling
  }
}

export default CardList;
