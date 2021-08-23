## Projeto backend Node

Trata-se de um backend que fornece os jogos da steam, e permite cliente (um possível frontend), buscar um jogo, obter mais informações, favoritar e avaliar seus itens preferidos.

Requisitos básicos
- [x] As rotas devem partir de / (sem "api" nem nada antes)
- [x] GET em / deve retornar todos os registros
- [x] GET em /:id deve retornar o registro com todos os detalhes (type, is_free, detailed_description...)


Recursos adicionais
- POST em /favorite/ deve incluir um favorito para um jogo, podendo receber a nota (⭐️⭐️⭐️⭐️)
- DEL em /favorite/:appid deve remover o favorito daquele jogo
- GET em /favorite/ deve obter a lista de favoritos, juntamente com os detalhes de cada jogo (type, is_free, detailed_description...)


## Projeto backend

- [x] A rota da raiz da API deve retornar apenas o appid e name, não tem que trazer os detalhes
- [x] A rota de detalhe é que obtem os detalhes adicionais (quando o usuário pedir um jogo específico)
- [] A rota de post do favotiro, deverá receber de alguma forma o appId para salvar que é um jogo favorito, e poderá receber um campo "rating" para o usuário informar, tipo de 0 a 5, o quanto gosta do jogo
- [] Quando o usuário obter favoritos, devem ser os favoritos dele
- [] Usar o header para saber quem é o usuário que está pedindo informações
- [x] A rota de listar jogos e detalhes de jogos, não é necessário o header indicando o usuário
- [] As rotas de favoritos, dependem deste header
- [] Salvar favoritos no seu banco ou cache, não salvar na steam, não precisa incluir em wishlist lá nem nada
- [x] Se obter dados da steam está muito pesado e você não estiver conseguindo avançar por causa do volume, criamos uma rota aqui que você pode usar como sua lista de jogos, passando um parametro de filtro (title), para vir menos jogos e facilitar sua vida, filtre como quiser.  https://simple-api-selection.herokuapp.com/list-games/?title=race 

Excendendo as expectativas
- Fazer cache de todos os dados obtidos da API da steam, para não consumir nada duas vezes, só irá buscar lá uma informação se não tiver sido obtida anteriorimente - fazer cache na memória
- Publicar online

Se publicar não precisa enviar credenciais de banco de dados, nem chave de api

Banco de dados?
Você pode escolher entre salvar os dados em um banco de dados, ou só manter todas as informações na memória enquanto o projeto estiver rodando, ou o servidor estiver "acordado".
Pra gente testar o projeto e ter que conectar a um banco de dados, será mais difícil. 😬

APIs para consumo do Backend
Rota de listagem de apps: https://api.steampowered.com/ISteamApps/GetAppList/v0002/?format=json
Rota de detalhe de um app: https://github.com/Revadike/InternalSteamWebAPI/wiki/Get-App-Details

Se precisar de mais informações, veja a documentação da Steam Web API e Interal Steam.


## Anotações
Usar o headers para saber o usuário que está pedindo informação

