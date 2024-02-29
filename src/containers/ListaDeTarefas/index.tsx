import Tarefa from '../../Components/Tarefa'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'Estudar TypeScript',
    descricao: 'Ver aula 3 da EBAC',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'Pagar fatura de internet',
    descricao: 'Baixar fatura no gmail',
    prioridade: 'urgente',
    status: 'concluida'
  },
  {
    titulo: 'Ir para a academia',
    descricao: 'Fazer treino B',
    prioridade: 'importante',
    status: 'pendente'
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 Tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            prioridade={t.prioridade}
            titulo={t.titulo}
            status={t.status}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
