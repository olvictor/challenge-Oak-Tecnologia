import { useState } from 'react'

import './App.css'
import Boxul from './components/boxUL/BoxUl'
import { Form } from './components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Boxul />
      <div className='container'>
        <Form.Root>
            <Form.Header title={"Produtos"} />
            <Form.Content>
              <label htmlFor="nome">
              Nome do Produto :
                <input type="text" name="nome" id="nome"  />
              </label>
              
              <label htmlFor="nome">
                Descrição :
                <input type="text" name="nome" id="nome" />
              </label>
              
              <label htmlFor="valor">
                Valor:
                <input type="number" name="valor" id="valor" />
              </label> 
              
              <label htmlFor="disponivel">
                Disponível para venda :
                <select defaultValue={"null"}>
                  <option value="null">Selecionar...</option>
                  <option value="true">Sim</option>
                  <option value="false">Não</option>
                </select>
              </label>
            <Form.Footer>
                <button>Cadastrar</button>
            </Form.Footer>
            </Form.Content>
        </Form.Root>
      </div>
    </>
  )
}

export default App
