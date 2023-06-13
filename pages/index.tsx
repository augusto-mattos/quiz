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
    setQuestao(questao.responderCom(indice))
    }

    function tempoEsgotado() {
      if(questao.naoRespondida) {
        setQuestao(questao.responderCom(-1))
      }
    }

    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}>
        <Questao valor={questao} 
          tempoPraReposta={5}
          respostaFornecida={respostaFornecida} 
          tempoEsgotado={tempoEsgotado} />
      </div>
  )
}
