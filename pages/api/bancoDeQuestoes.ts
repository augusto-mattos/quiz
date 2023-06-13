import QuestaoModel from "@/model/questao";
import RespostaModel from "@/model/resposta";

const questoes: QuestaoModel[] = [
    new QuestaoModel(301, 'Qual bicho transmite a doença de chagas?', [
        RespostaModel.errada('Abelha'),
        RespostaModel.errada('Pulga'),
        RespostaModel.errada('Macaco'),
        RespostaModel.certa('Barbeiro'),
    ]),
    new QuestaoModel(302, 'O que é conhecido no nordeste como "Jerimum"?', [
        RespostaModel.errada('Caju'),
        RespostaModel.errada('Côco'),
        RespostaModel.errada('Chuchu'),
        RespostaModel.certa('Abóbora'),
    ]),
    new QuestaoModel(303, 'Qual o coletivo de cães?', [
        RespostaModel.errada('Manada'),
        RespostaModel.errada('Alcatéia'),
        RespostaModel.errada('Rebanho'),
        RespostaModel.certa('Matilha'),
    ]),
    new QuestaoModel(304, 'Qual é o nome do triângulo que tem todos os lados diferentes?', [
        RespostaModel.errada('Equilátero'),
        RespostaModel.errada('Isóceles'),
        RespostaModel.errada('Trapézio'),
        RespostaModel.certa('Escaleno'),
    ]),
]

export default questoes