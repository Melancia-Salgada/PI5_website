import { use, useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import Form from "./components/Form";
import Title from "./components/Title";
import Footer from "./components/Footer";
import Button from "./components/Button";

function App() {
  const [segundoParticipante, setSegundoParticipante] = useState("");
  const [dadosPart1, setDadosPart1] = useState({});
  const [dadosPart2, setDadosPart2] = useState({});
  const [resetForm, setResetForm] =useState(false)

  function onClick(evento) {
    evento.preventDefault()
    console.log("Dados Participante 1:", dadosPart1);
    if (segundoParticipante) {
      console.log("Dados Participante 2:", dadosPart2);
    }

    setResetForm(true)
    setDadosPart1({})
    setDadosPart2({})
    window.scrollTo(0, 0) //Lembrar de quando realmente forfazer a requisição sócolocar isso caso aprovado
  }

  return (
    <>
      <main className="content-container">
        <Header />
        
          <form onSubmit={onClick}>
            <div className="aaa">
              <div className="engloba">
              <div>
                {segundoParticipante && (
                  <>
                    <Title nome={"Participante 1"} />
                  </>
                )}
                <Form
                  segundoParticipante={segundoParticipante}
                  setDados={(valor) => setDadosPart1(valor)}
                  onChangePart={(valor) => setSegundoParticipante(valor)}
                  resetForm={resetForm}
                  setResetForm={(valor) => setResetForm(valor)}
                />
              </div>
              <div>
                {segundoParticipante && (
                  <>
                    <Title nome={"Participante 2"} />
                    <Form isSegundo setDados={(valor) => setDadosPart2(valor)} setResetForm={(valor) => setResetForm(valor)}/>
                  </>
                )}
              </div>
            </div>
            
            
            </div>
            <div className="btn">
              <Button nome="Enviar" type="submit" onClick={onClick}/> 
            </div>
          </form>
          
        <Footer />
      </main>
    </>
  );
}

export default App;
