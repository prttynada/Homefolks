import Article from '../Article';
import StyledArticles from './Articles.Styled';

function Articles() {
  return (
    <StyledArticles>
      <section className="articles">
        <h2 className="articles__title">
          Baca Artikel Menarik Seputar Keluarga
        </h2>
        <div className="article__container">
          {/* {movies.map(function (movie) {
            return <Movie key={movie.id} movie={movie} />;
          })} */}
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
        </div>
      </section>
    </StyledArticles>
  );
}

export default Articles;
