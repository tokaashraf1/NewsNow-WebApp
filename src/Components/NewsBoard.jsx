import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    let url = `https://api.currentsapi.services/v1/latest-news?language=en&category=${category}&apiKey=${apiKey}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setArticles(data.news || []);
      })
      .catch((err) => console.error(err));
  }, [category]);

  return (
    <div className="container">
      <h3 className="text-center mt-4">
        Latest <span className="badge">News</span>
      </h3>
      <div className="row mt-4">
        {articles.map((news, index) => (
          <div className="col-md-4 col-lg-3 mb-4" key={index}>
            <NewsItem
              title={news.title}
              description={news.description}
              image={news.image}
              url={news.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsBoard;
