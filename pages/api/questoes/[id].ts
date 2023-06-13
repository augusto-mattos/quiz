/* import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
} */

import questoes from "../bancoDeQuestoes"

export default (req: any, res: any) => {
  const idSelecionado = +req.query.id

  const unicaQuestaoOuNada = questoes.filter(questao => questao.id === idSelecionado)

  if(unicaQuestaoOuNada.length === 1) {
    const questaoSelecionada = unicaQuestaoOuNada[0].embaralharRespostas()
    res.status(200).json(questaoSelecionada.converterParaObjeto())
  } else {
    res.status(204).send()
  }
  
}