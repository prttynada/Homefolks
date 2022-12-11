import Article from '../Article';
import StyledArticles from './Articles.Styled';

function Articles({ articles }) {
  return (
    <StyledArticles>
      <section className="articles">
        <h2 className="articles__title">
          Baca Artikel Menarik Seputar Keluarga
        </h2>
        <div className="article__container">
          {articles.map((article) => (
            <Article key={article.id} article={article} />
          ))}
        </div>
      </section>
    </StyledArticles>
  );
}

export default Articles;
