import React, { useState } from 'react'

const Table = ({produtos,setProdutos}) => {
    if(produtos && produtos.length <= 0){
        return <h3>Nenhum Produto cadastrado !</h3>
    }
    const [isAscendingByWord, setIsAscendingByWord] = useState(true);
    const [isAscendingByNumber, setIsAscendingByNumber] = useState(true);
    
    
    const toggleSortByPrice = () => {
      const arrayOrdenado = [...produtos].sort((a,b)=> a.valor - b.valor);
       if(!isAscendingByNumber){
          arrayOrdenado.reverse();
       }
      
      setIsAscendingByNumber((prev) => !prev)

      setProdutos(arrayOrdenado)

    };

    
    const toggleSortByWord = () =>{
      const sortedArray = [...produtos].sort((a, b) =>
        a.nome.localeCompare(b.nome)
      );
  
      if (!isAscendingByWord) {
        sortedArray.reverse(); 
      }
  
      setIsAscendingByWord((prev) => !prev);
  
      return setProdutos(sortedArray);
    }
  return (
    <>
    <table>
        <thead>
        <tr>
            <th onClick={toggleSortByWord}>Produto</th>
            <th onClick={toggleSortByPrice}>Preço</th>
        </tr>
        </thead>
        <tbody>
          {produtos && produtos.map((p,i)=>(
            <tr key={i}>
             <td>{p.nome}</td>
             <td>{"R$ "+ p.valor}</td>
            </tr>
          ))}
        </tbody>
    </table>
    </>
  )
}

export default Table