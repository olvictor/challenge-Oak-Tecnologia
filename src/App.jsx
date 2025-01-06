import { useEffect, useState } from 'react'

import './App.css'
import Boxul from './components/boxUL/BoxUl'
import { Form } from './components/Form'
import Table from './components/Table/Table'
import FormActions from './components/Form/FormActions'

function App() {
  const [nome, setNome] = useState(null)
  const [descricao, setDescricao] = useState(null)
  const [valor, setValor] = useState(null)
  const [disponivel,setDisponivel] = useState(null)
  const [desabilitado, setDesabilitado] = useState(true)
  const [produtos, setProdutos] = useState([])
  const [openModal,setOpenModal] = useState(false)

  useEffect(()=>{
   const produtosCadastrados = FormActions.buscarProdutos()
   setProdutos(produtosCadastrados)
  },[])

  const handleBlur = (e) =>{
    if(nome,descricao,valor,disponivel != null){
          setDesabilitado(false)
    }
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    const produtoObj = {
      nome,
      valor,
      descricao,
      disponivel
    }

    if(nome === "" || valor ==="" || descricao ===""){
      setDesabilitado(true)
      return
    }

    setProdutos((prevState) => [...prevState , produtoObj])
    FormActions.cadastrarProduto(produtoObj)
    setOpenModal(false)

    setNome("")
    setValor("")
    setDescricao("")
    setDesabilitado(true)
  }
  return (
    <>
      <Boxul />
      <div className='container'>
        {openModal && <Form.Root>
            <Form.Header title={"Produtos"} />
            <Form.Content>
              <label htmlFor="nome">
              Nome do Produto :
                <input type="text" name="nome" id="nome" value={nome || ""} onChange={({target})=> setNome(target.value)} onBlur={handleBlur}/>
              </label>
              
              <label htmlFor="descricao">
                Descrição :
                <input type="text" name="descricao" id="descricao" value={descricao || ""} onChange={({target})=> setDescricao(target.value)} onBlur={handleBlur}/>
              </label>
              
              <label htmlFor="valor">
                Valor:
                <input type="number" name="valor" id="valor" value={valor || ""} onChange={({target})=> setValor(target.value)} onBlur={handleBlur}/>
              </label> 
              
              <label htmlFor="disponivel">
                Disponível para venda :
                <select defaultValue={"null"} onChange={({target})=> setDisponivel(target.value)} onBlur={handleBlur}>
                  <option value="null">Selecionar...</option>
                  <option value="true">Sim</option>
                  <option value="false">Não</option>
                </select>
              </label>
            <Form.Footer>
                <button disabled={desabilitado} onClick={handleSubmit}>Cadastrar</button>
            </Form.Footer>
            </Form.Content>
        </Form.Root>}

        <Table produtos={produtos} setProdutos={setProdutos} />
        <button className='add' onClick={()=>setOpenModal(!openModal)}>
          +
        </button>
      </div>
    </>
  )
}

export default App
