import StyledAbout, { Container } from './About.Styled';
import backend from '../../assets/images/backend.png';
import frontend from '../../assets/images/frontend.png';
import database from '../../assets/images/database.png';

function About() {
  return (
    <Container>
      <StyledAbout>
        <div className="hero__left">
          <div className="backend">
            <img src={backend} alt="backend developer" />
            <h2>Reta Tri Amelia Putri</h2>
            <p>Backend Developer</p>
          </div>
          <div className="frontend">
            <img src={frontend} alt="frontend developer" />
            <h2>Pretti Nada Cahaya Irawan</h2>
            <p>Frontend Developer</p>
          </div>
          <div className="database">
            <img src={database} alt="database developer" />
            <h2>Khusna Mutabiatul Afifah</h2>
            <p>Database Developer</p>
          </div>
        </div>
        <div className="hero__right">
          <h2>
            Homefolks Assisting Your
            <span> Family Issues </span>
            With Our Best Services
          </h2>
          <p>
            Homefolks merupakan sebuah aplikasi berbasis web yang membantu para
            anggota keluarga menyelesaikan masalah terkait hubungan dengan
            anggota keluarga lainnya.
            <br />
            <br />
            Dalam rumah tangga penting untuk dapat tumbuh dan berkembang dalam
            rangka membangun kebutuhan rumah tangga yang baik. Guna mewujudkan
            hal ini, perlu adanya setiap tindakan dari masing-masing anggota
            keluarga. Tetapi, di dalam sebuah rumah tangga pasti ada masalah
            yang sering terjadi dalam keluarga. Masalah yang timbul ini kadang
            mengakibatkan keutuhan dan kerukunan rumah tangga dapat terganggu.
            Pada kebanyakan kasus yang terjadi, upaya dalam menyelesaikan
            masalah keluarga berakhir dengan kebuntuan bahkan sampai saling
            memusuhi. Jika masalah semakin besar, terkadang perceraian adalah
            jalan terakhir untuk menyelesaikan masalah.
            <br />
            <br />
            Oleh karena itu, Homefolks dalam mediasi menerapkan pertanyaan
            terbuka (open ended), yang mana pertanyaan survei bebas ini
            memungkinkan responden menjawab berdasarkan pengetahuan, perasaan,
            dan pemahaman mereka secara lengkap.
            <br />
            <br />
            Dengan aplikasi Homefolks, kami bertujuan untuk memberikan
            konsultasi mengenai beberapa permasalahan yang ada di dalam hubungan
            keluarga, yang nantinya akan ditangani oleh konseling pernikahan
            sehingga akan mengurangi tingkat perceraian.
          </p>
        </div>
      </StyledAbout>
    </Container>
  );
}

export default About;
