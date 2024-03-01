import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const { user, logout } = useAuth();
  const router = useRouter();

  return (
    <>
      <main className="main">
        <header className="header">
          <a href="#">
            <img src="./src//image/logo-estimate.png" alt="logo" />
          </a>

          <nav className="menu">
            <ul>
              <li>
                <a href="https://estimate-dev.vercel.app/login" target="_blank">
                  Entrar
                </a>
              </li>
              <li>
                <a
                  className="register"
                  href="https://estimate-dev.vercel.app/register"
                  target="_blank"
                >
                  Cadastrar
                </a>
              </li>
            </ul>
          </nav>

          <nav className="nav-mobile">
            <div className="center">
              <div></div>
            </div>
            <div className="container">
              <ul className="nav navegation-mobile">
                <li>
                  <a
                    href="https://estimate-dev.vercel.app/login"
                    target="_blank"
                  >
                    Entrar
                  </a>
                </li>
                <li>
                  <a
                    className="register"
                    href="https://estimate-dev.vercel.app/register"
                    target="_blank"
                  >
                    Cadastrar
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        <section className="home">
          <div className="info">
            <img src="./src/image/logomarca-cubo-menor.png" alt="logo" />

            <div className="description">
              <h1>Estime Melhor, Desenvolva Mais Rápido.</h1>
              <p>
                Você está pronto para simplificar o processo de estimativa de
                esforço para seus projetos de software? EstiMate recompensa a
                precisão dos desenvolvedores com ganhos monetários e eleva sua
                reputação profissional, enquanto auxilia empresas na avaliação
                eficiente do trabalho necessário.
              </p>

              <a
                href="https://estimate-dev.vercel.app/register"
                className="btn"
                target="_blank"
              >
                Junte-se ao EstiMate
              </a>
            </div>
          </div>

          <div className="images-home">
            <img
              className="woman"
              src="./src/image/garota-propaganda.png"
              alt=""
            />
            <img
              className="logo"
              src="./src/image/logomarca-cubo-maior.png"
              alt=""
            />
          </div>
        </section>
      </main>

      <section className="service">
        <div className="container">
          <h1>
            A chave para o sucesso é estimar com sabedoria, e EstiMate é a sua
            ferramenta para conquistá-lo
          </h1>

          <div className="description-service">
            <div className="text">
              <p>
                Rápido e prático, EstiMate redefine a estimativa de projeto,
                garantindo agilidade e precisão em cada fase
              </p>
              <img src="./src/image/pagina-da-plataforma.png" alt="" />
            </div>
            <div className="results">
              <span>45%</span>
              <p>
                Melhore em até 45% os resultados de estimativa de esforço do seu
                projeto.
              </p>
              <a
                href="https://estimate-dev.vercel.app/register"
                target="_blank"
              >
                Cadastrar
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="about-me">
        <h1>SOBRE NÓS</h1>

        <div className="container">
          <div className="description-left">
            <img src="./src/image/freelancer 1.png" alt="" />

            <div className="text">
              <p>
                EstiMate transforma suas estimativas de projetos em recompensas
                e crescimento profissional. A plataforma amplia sua visibilidade
                no mercado, promovendo sua reputação através de integração com o
              </p>

              <p>
                LinkedIn. Com EstiMate, cada estimativa é um passo em direção ao
                sucesso na sua carreira.
              </p>
            </div>
          </div>

          <div className="description-rigth">
            <img src="./src/image/predio.png" alt="" />

            <div className="text">
              <p>
                EstiMate oferece às empresas um processo de estimativa de
                projetos rápido, preciso e validado por especialistas. A
                plataforma assegura otimização recursos, precisão e tempo.
              </p>

              <p>
                Com EstiMate, cada projeto é uma oportunidade de superar
                expectativas e impulsionar inovação.
              </p>
            </div>
          </div>
        </div>

        <p>
          Você está pronto para simplificar o processo de estimativa de esforço
          para seus projetos de software? EstiMate recompensa a precisão dos
          desenvolvedores com ganhos monetários e eleva sua reputação
          profissional, enquanto auxilia empresas na avaliação eficiente do
          trabalho necessário.
        </p>
      </section>

      <section className="status-number">
        <div className="status">
          <span>100+</span>
          <p>Tasks cadastradas</p>
        </div>
        <div className="status">
          <span>50+</span>
          <p>Devs cadastrados</p>
        </div>
        <div className="status">
          <span>100+</span>
          <p>Projetos finalizados</p>
        </div>
      </section>

      <section className="faq">
        <h1>FAQ</h1>

        <div className="container">
          <div className="questions-container-right">
            <img src="src/image/cliente.png" alt="" className="client" />

            <ul className="questions">
              <li>
                <p>
                  Como EstiMate assegura a precisão nas recompensas distribuídas
                  por estimativas corretas?
                </p>
                <a href="#">
                  <img src="src/image/+.png" alt="" className="view" />
                </a>
              </li>

              <li>
                <p>
                  Existem limitações ou critérios específicos para as tarefas
                  que posso estimar na plataforma?
                </p>
                <a href="#">
                  <img src="src/image/+.png" alt="" className="view" />
                </a>
              </li>

              <li>
                <p>
                  Como a plataforma garante a confidencialidade e a propriedade
                  intelectual das informações dos projetos estimados?
                </p>
                <a href="#">
                  <img src="src/image/+.png" alt="" className="view" />
                </a>
              </li>

              <li>
                <p>
                  Qual é a frequência de atualização dos projetos disponíveis
                  para estimativa e como posso ser notificado sobre novas
                  oportunidades?
                </p>
                <a href="#">
                  <img src="src/image/+.png" alt="" className="view" />
                </a>
              </li>
            </ul>
          </div>

          <div className="questions-container-left">
            <ul className="questions">
              <li>
                <p>
                  Como EstiMate garante a qualidade e a confiabilidade das
                  estimativas fornecidas pelos desenvolvedores?
                </p>
                <a href="#">
                  <img src="src/image/+.png" alt="" className="view" />
                </a>
              </li>

              <li>
                <p>
                  Existe um limite ou escala de custo para as tarefas que podem
                  ser estimadas através da plataforma?
                </p>
                <a href="#">
                  <img src="src/image/+.png" alt="" className="view" />
                </a>
              </li>

              <li>
                <p>
                  De que maneira a plataforma ajuda a alinhar as estimativas dos
                  desenvolvedores com o escopo real e as necessidades do
                  projeto?
                </p>
                <a href="#">
                  <img src="src/image/+.png" alt="" className="view" />
                </a>
              </li>

              <li>
                <p>
                  Como EstiMate contribui para a otimização do tempo e dos
                  recursos durante o planejamento do projeto?
                </p>
                <a href="#">
                  <img src="src/image/+.png" alt="" className="view" />
                </a>
              </li>
            </ul>

            <img className="company" src="src/image/predio-p.png" alt="" />
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="text-button">
            <h2>Mude a forma que você estima seus projetos</h2>

            <a href="https://estimate-dev.vercel.app/register" target="_blank">
              Começe agora mesmo
            </a>
          </div>

          <div className="container-img">
            <img src="src/image/Mask group.png" alt="" />
          </div>
        </div>
      </footer>
    </>
  );
}
