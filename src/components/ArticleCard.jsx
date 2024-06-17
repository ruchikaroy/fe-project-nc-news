function ArticleCard({ article }) {
  return (
    <li key={article.article_id}>
      <h4>{article.title}</h4>
      <img src={article.article_img_url} alt="article image" />
    </li>
  );
}
export default ArticleCard;