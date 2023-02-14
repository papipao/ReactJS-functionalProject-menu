import './Index.css';
import Review from './Review';

function Index() {
  return (
    <main>
      <section className='container'>
        <div className='title'>
          <h2>Our reviews</h2>
          <div className='underline'></div>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default Index;
