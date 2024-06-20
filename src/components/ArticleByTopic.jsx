import ArticlesList from "./ArticlesList";

function ArticleByTopic({ topic }) {
  return (
    <div>
      <ArticlesList topic={topic} />
    </div>
  );
}
export default ArticleByTopic;
