import { use, useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import Form from "./components/Form";
import Title from "./components/Title";
import Footer from "./components/Footer";

function App() {
  const [segundoParticipante, setSegundoParticipante] = useState("");
  const [dadosPart1, setDadosPart1] = useState({});
  const [dadosPart2, setDadosPart2] = useState({});

  useEffect(() => {
    console.log(dadosPart1, dadosPart2)
  }, [dadosPart1 || dadosPart2]);

  return (
    <>
      <main className="content-container">
        <Header />
        
        {segundoParticipante && (
          <>
            <Title nome={"Participante 1"} />
          </>
        )}
        <div className="engloba">
          <Form
            segundoParticipante={segundoParticipante}
            setDados={(valor) => setDadosPart1(valor)}
            onChangePart={(valor) => setSegundoParticipante(valor)}
          />
        </div>
        {segundoParticipante && (
          <>
            <Title nome={"Participante 2"} />
            <div className="engloba">
              <Form isSegundo setDados={(valor) => setDadosPart2(valor)} onChangePart={(valor) => setSegundoParticipante(valor)}/>
            </div>
          </>
        )}

        <Footer />
      </main>
    </>
  );
}

export default App;
