const NewsItem = ({ title, description, image, url }) => {
  return (
    <div className="card h-100 border-0 shadow ">
      <img src={image} className="card-img-top " alt={title.slice(0, 50)} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">{description.slice(0, 90)}...</p>
        <a
          href={url}
          className="btn btn-dark mt-auto"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
