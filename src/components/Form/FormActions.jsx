const buscarProdutos = () =>{
  const produtos = localStorage.getItem('produtos');
  if (!produtos) return [];
  return JSON.parse(produtos);
}


const cadastrarProduto = (produto) =>{
  const produtos = buscarProdutos();
  const novoArray = [...produtos]
  novoArray.push(produto)
  localStorage.setItem('produtos',JSON.stringify(novoArray))
}

const FormActions = {
  cadastrarProduto,
  buscarProdutos
}

export default FormActions