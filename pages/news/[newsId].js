import { useRouter } from "next/router";

// 網址our-domain/news/something-important

const DetailPage = () => {
  const router = useRouter();

  const newsId = router.query.newsId;

  // send a request to the backend API
  // to fetch the news item with newsId

  return <div>DetailPage</div>;
};

export default DetailPage;
