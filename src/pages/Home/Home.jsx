import { Anons } from "../../components/Anons/Anons";
import { Header } from "../../components/Header/Header";
import { Main } from "../../components/Main/Main";
import "./home.scss";

export const Home = () => {
  return (
    <div>
      <Anons />
      <Header />
      <Main />
    </div>
  );
};
