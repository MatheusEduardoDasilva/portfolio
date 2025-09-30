
import NavBar from "../../components/NavBar/NavBar";
import Hero from "./sections/Hero/Hero";


const Home = () => {
  return (
    <>
      <NavBar darkMode={false} toggleDarkMode={function (): void {} } />
      <Hero />
    </>
  );
};

export default Home;
