import React, { useState } from 'react';

function App(): JSX.Element {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [response, setResponse] = useState<string | null>(null);

  const handleCreateUser = async () => {
    try {
      const user = await window.api.createUser({ name, email }); // Chama a função exposta no preload
      setResponse(`Usuário criado: ${user.name} (${user.email})`);
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      setResponse('Erro ao criar usuário.');
    }
  };



  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Electron + React + Prisma</h1>
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ margin: '10px', padding: '10px' }}
      />
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ margin: '10px', padding: '10px' }}
      />
      <button onClick={handleCreateUser} style={{ padding: '10px', fontSize: '16px' }}>
        Criar Usuário
      </button>
      {response && <p>{response}</p>}
    </div>
  )
}

export default App
