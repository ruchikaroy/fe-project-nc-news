import ArticlesList from "./ArticlesList";

function ArticleByTopic({ topic, searchParams }) {
  return (
    <div>
      <ArticlesList topic={topic} searchParams={searchParams} />
    </div>
  );
}
export default ArticleByTopic;
