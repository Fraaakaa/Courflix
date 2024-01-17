import './style.scss';
import NavBar from '../../components/NavBar';
import InfoContent from '../../components/InfoContent';
import Content from '../../components/Content';
import Progress from '../../components/Progress';

function Home() {
  return (
    <div className="Home">
      <NavBar/>
      <section className='menuContainer'>
        <InfoContent/>
      </section>
      <section className='seriesContainer'>
        <h1 className='title'>Series</h1>
        <Content/>
      </section>
      <section className='seriesContainer'>
        <h1 className='title'>Seguir viendo contenido de Usuario</h1>
        <div className='progressContainer'>
        <Progress/>
        </div>
      </section>
      <section className='seriesContainer'>
        <h1 className='title'>Agregados recientemente</h1>
        <Content/>
      </section>
      
    </div>
  );
}

export default Home;
