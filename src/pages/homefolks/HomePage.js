import Steps from '../../components/Steps';
import Summary from '../../components/Summary';
import Welcome from '../../components/Welcome';

function HomePage({ user }) {
  return (
    <>
      <Welcome user={user} />
      <Steps />
      <Summary />
    </>
  );
}

export default HomePage;
