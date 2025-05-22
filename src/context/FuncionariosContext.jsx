import React, { createContext, useContext, useState } from 'react';

// Cria o contexto
const FuncionariosContext = createContext();

// Provider para envolver o app
export function FuncionariosProvider({ children }) {
  const [funcionarios, setFuncionarios] = useState([]);

  // Função para adicionar novo funcionário
  function adicionarFuncionario(novoFuncionario) {
    setFuncionarios((prev) => [...prev, novoFuncionario]);
  }

  return (
    <FuncionariosContext.Provider value={{ funcionarios, adicionarFuncionario }}>
      {children}
    </FuncionariosContext.Provider>
  );
}

// Hook para usar o contexto
export function useFuncionarios() {
  return useContext(FuncionariosContext);
}
