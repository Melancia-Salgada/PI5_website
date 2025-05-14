import { use, useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import Form from "./components/Form";
import Title from "./components/Title";
import Footer from "./components/Footer";
import Button from "./components/Button";
import { FaWhatsapp } from "react-icons/fa";
import Bubble from "./components/Bubble";

function App() {
  const [segundoParticipante, setSegundoParticipante] = useState("");
  const [dadosPart1, setDadosPart1] = useState({});
  const [dadosPart2, setDadosPart2] = useState({});
  const [resetForm, setResetForm] = useState(false);

  function onClick(evento) {
    evento.preventDefault();

    const formatDate = (date) => {
      const [day, month, year] = date.split("/");
      return `${year}-${month}-${day}`;
    };

    const formatMoney = (value) => {
      return Number(value.replace("R$", "").replace(".", "").replace(",", "."));
    };

    const dadosFormatados = {
      procura: dadosPart1.procura.toUpperCase(),
      tipoImovel: dadosPart1.tipoImovel.toUpperCase(),
      participante1: {
        nome: dadosPart1.nome,
        cpf: dadosPart1.cpf,
        email: dadosPart1.email,
        telefone1: dadosPart1.telefone1,
        telefone2: dadosPart1.telefone2,
        dataNascimento: formatDate(dadosPart1.nascimento),
        estadoCivil: dadosPart1.estCivil.toUpperCase(),
        restricaoNoNome: dadosPart1.restricao,
        valorRestricao: formatMoney(dadosPart1.valorRestricao) || 0,
        tipoDeRenda: dadosPart1.tipoRenda?.toUpperCase(),
        umMesDeCarteiraAssinada: dadosPart1.tempoCarteira,
        rendaBrutaFormal: Number(dadosPart1.rendaFormal) || 0,
        rendaBrutaInformal: Number(dadosPart1.rendaInformal) || 0,
        tresAnosFgts: dadosPart1.anoFgts,
        vaiUtilizarFgts: dadosPart1.usarFgts,
        declaraIRPF: dadosPart1.imposto,
        possuiImovelRegistradoNoNome: dadosPart1.imovelNome,
        complecaoDeRenda: dadosPart1.segundoParticipante,
      },
      ...(segundoParticipante === true && {
        participante2: {
          nome: dadosPart2.nome,
          cpf: dadosPart2.cpf,
          email: dadosPart2.email,
          telefone1: dadosPart2.telefone1,
          telefone2: dadosPart2.telefone2,
          dataNascimento: formatDate(dadosPart2.nascimento),
          estadoCivil: dadosPart2.estCivil,
          restricaoNoNome: dadosPart2.restricao,
          valorRestricao: formatMoney(dadosPart2.valorRestricao) || 0,
          tipoDeRenda: dadosPart2.tipoRenda?.toUpperCase(),
          umMesDeCarteiraAssinada: dadosPart2.tempoCarteira,
          rendaBrutaFormal: Number(dadosPart2.rendaFormal) || 0,
          rendaBrutaInformal: Number(dadosPart2.rendaInformal) || 0,
          tresAnosFgts: dadosPart2.anoFgts,
          vaiUtilizarFgts: dadosPart2.usarFgts,
          declaraIRPF: dadosPart2.imposto,
          possuiImovelRegistradoNoNome: dadosPart2.imovelNome,
        },
      }),
    };

    console.log(dadosFormatados);

    setResetForm(true);
    setDadosPart1({});
    setDadosPart2({});
    window.scrollTo(0, 0);

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
                    <Title principal nome={"Participante 1"} />
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
                    <Title principal nome={"Participante 2"} />
                    <Form
                      isSegundo
                      setDados={(valor) => setDadosPart2(valor)}
                      setResetForm={(valor) => setResetForm(valor)}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="btn">
            <Button nome="Enviar" type="submit" onClick={onClick} />
          </div>
        </form>

        <Footer />

        <Bubble link={"https://wa.me/"}>
          <FaWhatsapp />
        </Bubble>
      </main>
    </>
  );
}

export default App;
