import React from 'react'
import './Input.scss'

function Input({label=false, type ='', name, placeholder='', valor, onChange, obrigatorio}) {
  

  const formatarTelefone = (valor) => {
    return valor
      .replace(/\D/g, '') 
      .replace(/^(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d{1,4})$/, '$1-$2') 
      .slice(0, 15); 
  };

  const formatarCPF = (valor) => {
  return valor
    .replace(/\D/g, '') 
    .replace(/(\d{3})(\d)/, '$1.$2') 
    .replace(/(\d{3})(\d)/, '$1.$2') 
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2') 
    .slice(0, 14); 
  };

  const formatarDinheiro = (valor) => {
    const numeros = valor.replace(/\D/g, ''); 

    const numeroFormatado = (Number(numeros) / 100).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });

    return numeroFormatado;
  };

  const formatarData = (valor) => {
  return valor
    .replace(/\D/g, '') 
    .replace(/(\d{2})(\d)/, '$1/$2') 
    .replace(/(\d{2})(\d)/, '$1/$2') 
    .slice(0, 10); 
};




  const aoAlterar = (e) => {
  let valorDigitado = e.target.value;

  if (type === 'tel') {
    valorDigitado = formatarTelefone(valorDigitado);
  } else if (type === 'cpf') {
    valorDigitado = formatarCPF(valorDigitado);
  } else if (type === 'money') {
    valorDigitado = formatarDinheiro(valorDigitado);
  } else if (type === 'data') {
    valorDigitado = formatarData(valorDigitado);
  }

  onChange(valorDigitado);
};







  
  return (
    <div className={`input ${type}`}>
      {label && 
      <label>{label}</label>
      }
      <input type={type} onChange={aoAlterar} name={name} required={obrigatorio} placeholder={placeholder} value={valor} onWheel={(e) => e.target.blur()}/>
    </div>
  )
}

export default Input