import React from 'react'
import './Input.scss'

function Input({label=false, type ='', name, placeholder='', valor, onChange, obrigatorio}) {
  

  const formatarTelefone = (valor) => {
    const numeros = valor.replace(/\D/g, '').slice(0, 11);
    const temNoveDigitos = numeros.length > 10;
    
    return numeros
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(temNoveDigitos ? /(\d{5})(\d)/ : /(\d{4})(\d)/, '$1-$2');
  };


  const formatarCPF = (valor) => {
    return valor
      .replace(/\D/g, '')
      .slice(0, 11) 
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
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
  } 
  if (type === 'cpf') {
    valorDigitado = formatarCPF(valorDigitado);
  } 
  if (type === 'money') {
    valorDigitado = formatarDinheiro(valorDigitado);
  } 
  if (type === 'data') {
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