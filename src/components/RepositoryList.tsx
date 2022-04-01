import { RepositoryItem } from './RepositoryItem'
import { useState, useEffect } from 'react'

import '../style/repository.scss'

interface Repository{

  id: number,
  name: string,
    description: string,
    html_url: string

}

interface getRepoProps{

  repo: string
  

}



export function RepositoryList() {

    const [newnameRepo, setnewnameRepo] = useState('')    
    const [repositories, setRepositories] = useState<Repository[]>([])

    function click(){
      fetch(`https://api.github.com/users/${newnameRepo}/repos`)
      .then(response => response.json())
      .then(data => setRepositories(data))
  }

    
    
  return (
    
      <section className="task-list container">
        <header>
          <h2>Meus Repositorios</h2>
  
          <div className="input-group">
            <input 
              type="text" 
              placeholder="Digite seu repositorio" 
              onChange={(e) => setnewnameRepo(e.target.value)}
              value={newnameRepo}
            />
            <button type="submit" data-testid="add-task-button" onClick={() => click()} >
            </button>
          </div>
        </header>
  
        <main>
          <ul>
          {repositories.map(repository => {
          return <RepositoryItem key={repository.id} repository={repository} />
        })}
            
          </ul>
        </main>
      </section>
    )
}


