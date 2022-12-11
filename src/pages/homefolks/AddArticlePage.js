import AddArticleForm from '../../components/AddArticleForm';

function AddArticlePage({ articles, setArticles }) {
  return (
    <>
      <AddArticleForm articles={articles} setArticles={setArticles} />
    </>
  );
}

export default AddArticlePage;
