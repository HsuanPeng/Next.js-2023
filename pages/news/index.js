// 網址our-domain/news
import Link from "next/link";

const NewsPage = () => {
  return (
    <>
      <h1>NewsPage</h1>;
      <ul>
        <li>
          <Link href="news/ddd">Next.js is a good tool</Link>
        </li>
        <li>something else</li>
      </ul>
    </>
  );
};

export default NewsPage;
