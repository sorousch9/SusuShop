import { Anons } from "../components/Anons/Anons";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Main } from "../components/Main/Main";

export const Home = () => {
  return (
    <div>
      <Anons />
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
