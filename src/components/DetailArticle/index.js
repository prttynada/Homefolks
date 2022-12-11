import StyledDetailArticle from './DetailArticle.Styled';
import woman from '../../assets/images/woman.png';

function DetailArticle() {
  return (
    <StyledDetailArticle>
      <div className="poster">
        <img src={woman} alt="poster" />
      </div>
      <div className="info">
        <h2>Sebuah Artikel</h2>
        <h3>Penulis</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque qui
          nobis, explicabo similique nostrum eaque consequatur rerum. Quos
          maxime harum enim magni consectetur quidem. Quidem doloribus
          doloremque quos iste perspiciatis.
        </p>
      </div>
    </StyledDetailArticle>
  );
}

export default DetailArticle;
