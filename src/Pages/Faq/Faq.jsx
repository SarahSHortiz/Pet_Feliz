import { useState } from "react";
import "./Faq.css";

function Faq() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      setSelected(null);
    } else {
      setSelected(i);
    }
  };

  return (
    <div className="faq-body">
      <div className="wrapper">
      <div className="faq-title">
          <h1>Perguntas e Respostas</h1>
        </div>
        <div className="accordion">
      
          {data.map((item, i) => (
            <div className="item" key={i}>
              <div className="title-faq" onClick={() => toggle(i)}>
                
                <h2>{item.question}</h2>
                <span>{selected === i ? "⮝" : "⮟"}</span>
              </div>
              <div className={selected === i ? "content show" : "content"}>
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


const data = [
  {
    question: "Quem pode realizar uma adoção?",
    answer:
      "Qualquer pessoa interessada em cuidar e proporcionar um lar amoroso a um animal pode realizar uma adoção."
  },
  {
    question: "O que é preciso para adotar um pet?",
    answer:
      "É necessário cumprir os requisitos de bem estar na vida dos animais previsto no Art. 1º número 9605 assegurarando e protegendo a vida e o bem-estar dos animais."
  },
  {
    question: "Quais são os documentos necessários para uma adoção?",
    answer:
      "Os documentos necessários para adoção geralmente incluem identificação pessoal como o CPF e RG."
  },

  {
    question: "Fui aprovado, posso retirar o pet no mesmo dia?",
    answer:
      "Entre em contato com o portador do animal, em alguns casos pode ser possível."
  },
  {
    question: "Os animais que vão para adoção são castrados?",
    answer:
      "Depende do doador ou da organização responsável. Não nos responsabilizamos pela castrção dos animais disponíveis para adoção."
  },
  {
    question: "Os animais são vacinados?",
    answer:
      "A vacinação dos animais para adoção dependerá do doador ou da organização responsável. Não nos responsabilizamos pela vacinação."
  }
];
export default Faq;
