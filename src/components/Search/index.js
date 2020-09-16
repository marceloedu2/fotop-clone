import React from 'react'
import { SearchContainer } from '@/components/Search/styles'
import Input from '@/components/Input'
import { FiSearch } from 'react-icons/fi'

const Search = () => {
  return (
    <SearchContainer>
      <span>Participou de um evento? Busque aqui suas fotos.</span>
      <div>
        <Input
          type="text"
          placeholder="DIGITE AQUI O NOME DO EVENTO..."
          icon={FiSearch}
        />
        <button>BUSCAR</button>
      </div>
    </SearchContainer>
  )
}

export default Search
