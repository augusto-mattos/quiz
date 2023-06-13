import Questao from '@/components/Questao'
import QuestaoModel from '@/model/questao'
import RespostaModel from '@/model/resposta'
import { useState } from 'react'

const questaoMock = new QuestaoModel(1, 'Melhor cor?', [
  RespostaModel.errada('verde'),
  RespostaModel.errada('roxo'),
  RespostaModel.errada('amarelo'),
  RespostaModel.certa('preto'),
])

export default function Home() {
  const [questao, setQuestao] = useState(questaoMock)

  function respostaFornecida(indice: number) {
    console.log(indice)
    setQuestao(questao.responderCom(indice))
    }

    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}>
        <Questao valor={questao} respostaFornecida={respostaFornecida} />
      </div>
  )
}
