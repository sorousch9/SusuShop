import { Anons } from "../components/Anons";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header";

import { Main } from "../components/Main";

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
