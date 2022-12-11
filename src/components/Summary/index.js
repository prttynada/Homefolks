import love from '../../assets/images/love.png';
import { Container } from '../Hero/Hero.Styled';
import StyledSummary from './Summary.Styled';

function Summary() {
  return (
    <Container>
      <StyledSummary>
        <div className="summary__left">
          <img src={love} alt="giving love illustration" />
        </div>
        <div className="summary__right">
          <h2>Provide The Best Service For You</h2>
          <p>
            Dalam rumah tangga penting untuk dapat tumbuh dan berkembang dalam
            rangka membangun kebutuhan rumah tangga yang baik. Guna mewujudkan
            hal ini, perlu adanya setiap tindakan dari masing-masing anggota
            keluarga. Tetapi, di dalam sebuah rumah tangga pasti ada masalah
            yang sering terjadi dalam keluarga. Masalah yang timbul ini kadang
            mengakibatkan keutuhan dan kerukunan rumah tangga dapat terganggu.
            Pada kebanyakan kasus yang terjadi, upaya dalam menyelesaikan
            masalah keluarga berakhir dengan kebuntuan bahkan sampai saling
            memusuhi. Jika masalah semakin besar, terkadang perceraian adalah
            jalan terakhir untuk menyelesaikan masalah. Oleh karena itu,
            HomeFolks hadir untuk mengatasi masalah yang Anda hadapi. Dengan
            para ahli yang akan mendampingi Anda selama konsultasi dan
            memberikan Anda solusi mengenai masalah yang Anda hadapi.
          </p>
        </div>
      </StyledSummary>
    </Container>
  );
}

export default Summary;
