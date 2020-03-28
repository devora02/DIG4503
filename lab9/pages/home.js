import Head from 'next/head';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
    <h1>POKEMON!</h1>
    <h2>ID:</h2>
    <IdSearch/>
    <h2>NAME:</h2>
    <NameSearch/>
    <h2>TYPE:</h2>
    <TypeSearch/>
    <div id="results"></div>
    </div>
  );
}

export default Home;