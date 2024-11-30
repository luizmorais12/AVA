Sistema de Treinamento - Instituto Alpha
Descrição
O Sistema de Treinamento do Instituto Alpha é uma aplicação web desenvolvida para facilitar o treinamento dos colaboradores no uso do sistema de gestão clínica. A plataforma organiza vídeos explicativos por setores, permitindo que os usuários aprendam de forma direcionada e prática como utilizar cada funcionalidade do sistema.

Desenvolvido com HTML, CSS, Bootstrap e JavaScript, o sistema oferece uma interface amigável e intuitiva para acesso aos materiais de treinamento.

Funcionalidades
Organização por Setores: Os vídeos estão agrupados de acordo com os setores, como:
Recepção
Triagem
Médico Clínico
Medicação
Emergência
Medicação Infantil
Observação
Suporte
Vídeos de Treinamento: Cada setor possui um conjunto de vídeos explicativos detalhando como utilizar o sistema.
Design Responsivo: Interface adaptada para computadores, tablets e dispositivos móveis.
Tecnologias Utilizadas
HTML: Estruturação das páginas.
CSS e Bootstrap: Para estilização e design responsivo.
JavaScript: Para navegação dinâmica entre os módulos.
Interface do Sistema
A interface é simples e funcional, com um menu lateral para navegação entre os setores e um painel principal onde os vídeos de treinamento são exibidos.

Exemplo de setores no menu lateral:

Recepção
Triagem
Médico Clínico
Medicação
Emergência
Medicação Infantil
Observação
Suporte

Adicione aqui uma captura de tela do sistema.

Como Executar o Projeto
Clone este repositório:

bash
Copiar código
git clone https://github.com/seu-usuario/sistema-treinamento.git
Navegue até a pasta do projeto:

bash
Copiar código
cd sistema-treinamento
Abra o arquivo principal no navegador:

bash
Copiar código
index.html
Use o menu lateral para acessar os vídeos de treinamento por setor.

Estrutura do Projeto
plaintext
Copiar código
sistema-treinamento/
├── index.html        # Página inicial
├── css/
│   ├── style.css     # Estilos personalizados
│   └── bootstrap.css # Framework Bootstrap
├── js/
│   ├── script.js     # Scripts para navegação dinâmica
├── videos/           # Pasta contendo os vídeos de treinamento
│   ├── recepcao/     # Vídeos do setor de recepção
│   ├── triagem/      # Vídeos do setor de triagem
│   ├── medico/       # Vídeos do setor médico
│   └── ...           # Outros setores
├── img/              # Imagens utilizadas no sistema
└── README.md         # Documentação do projeto
Melhorias Futuras
Implementação de um sistema de login para restringir o acesso aos vídeos.
Registro de progresso dos usuários nos treinamentos.
Adição de quizzes interativos após cada módulo de treinamento.
Integração com um banco de dados para rastrear o desempenho dos usuários.
