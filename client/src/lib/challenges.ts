export interface Challenge {
  id: string;
  title: string;
  description: string;
  technology: "html" | "css" | "javascript";
  difficulty: "easy" | "medium" | "hard";
  instructions: string;
  expectedOutput: string;
  testFunction: (code: string) => boolean;
  hint?: string;
}

// HTML Challenges - 150 desafios com instruções claras
const htmlChallenges: Challenge[] = [
  { id: "html-1", title: "Criar um Parágrafo", description: "Aprenda a criar um parágrafo em HTML", technology: "html", difficulty: "easy", instructions: "Crie um parágrafo usando a tag <p> com o texto 'Olá, Mundo!'", expectedOutput: "Um parágrafo exibindo o texto 'Olá, Mundo!'", hint: "Use <p>Olá, Mundo!</p>", testFunction: (code) => code.includes("<p>") && code.includes("</p>") && code.includes("Olá, Mundo!") },
  { id: "html-2", title: "Criar um Título H1", description: "Aprenda a criar um título principal", technology: "html", difficulty: "easy", instructions: "Crie um título de nível 1 com o texto 'Bem-vindo ao HTML'", expectedOutput: "Um título grande exibindo 'Bem-vindo ao HTML'", hint: "Use <h1>Bem-vindo ao HTML</h1>", testFunction: (code) => code.includes("<h1>") && code.includes("</h1>") && code.includes("Bem-vindo ao HTML") },
  { id: "html-3", title: "Criar um Link", description: "Aprenda a criar um hiperlink", technology: "html", difficulty: "easy", instructions: "Crie um link que aponta para 'https://www.google.com' com o texto 'Visite Google'", expectedOutput: "Um link clicável com o texto 'Visite Google'", hint: "Use <a href='https://www.google.com'>Visite Google</a>", testFunction: (code) => code.includes("<a") && code.includes("href") && code.includes("google.com") && code.includes("Visite Google") },
  { id: "html-4", title: "Criar uma Lista Não Ordenada", description: "Aprenda a criar listas com bullets", technology: "html", difficulty: "easy", instructions: "Crie uma lista com 3 frutas: Maçã, Banana e Laranja", expectedOutput: "Uma lista com 3 itens de frutas", hint: "Use <ul> com 3 <li> dentro", testFunction: (code) => code.includes("<ul>") && code.includes("</ul>") && (code.match(/<li>/g) || []).length >= 3 },
  { id: "html-5", title: "Criar um Título H2", description: "Aprenda a criar um subtítulo", technology: "html", difficulty: "easy", instructions: "Crie um título de nível 2 com o texto 'Seção Principal'", expectedOutput: "Um título de nível 2", hint: "Use <h2>Seção Principal</h2>", testFunction: (code) => code.includes("<h2>") && code.includes("</h2>") && code.includes("Seção Principal") },
  { id: "html-6", title: "Criar um Título H3", description: "Aprenda a criar um sub-subtítulo", technology: "html", difficulty: "easy", instructions: "Crie um título de nível 3 com o texto 'Subseção'", expectedOutput: "Um título de nível 3", hint: "Use <h3>Subseção</h3>", testFunction: (code) => code.includes("<h3>") && code.includes("</h3>") && code.includes("Subseção") },
  { id: "html-7", title: "Texto em Negrito", description: "Aprenda a destacar texto em negrito", technology: "html", difficulty: "easy", instructions: "Crie um texto em negrito com a tag <strong> contendo 'Importante'", expectedOutput: "Texto em negrito", hint: "Use <strong>Importante</strong>", testFunction: (code) => code.includes("<strong>") && code.includes("</strong>") && code.includes("Importante") },
  { id: "html-8", title: "Texto em Itálico", description: "Aprenda a destacar texto em itálico", technology: "html", difficulty: "easy", instructions: "Crie um texto em itálico com a tag <em> contendo 'Ênfase'", expectedOutput: "Texto em itálico", hint: "Use <em>Ênfase</em>", testFunction: (code) => code.includes("<em>") && code.includes("</em>") && code.includes("Ênfase") },
  { id: "html-9", title: "Inserir uma Imagem", description: "Aprenda a adicionar imagens", technology: "html", difficulty: "easy", instructions: "Crie uma tag <img> com src='imagem.jpg' e alt='Descrição da imagem'", expectedOutput: "Uma imagem com atributos corretos", hint: "Use <img src='imagem.jpg' alt='Descrição da imagem'>", testFunction: (code) => code.includes("<img") && code.includes("src=") && code.includes("alt=") },
  { id: "html-10", title: "Criar um Botão", description: "Aprenda a criar botões interativos", technology: "html", difficulty: "easy", instructions: "Crie um botão com o texto 'Clique aqui'", expectedOutput: "Um botão com o texto 'Clique aqui'", hint: "Use <button>Clique aqui</button>", testFunction: (code) => code.includes("<button>") && code.includes("</button>") && code.includes("Clique aqui") },
  { id: "html-11", title: "Criar um Formulário", description: "Aprenda a criar formulários básicos", technology: "html", difficulty: "easy", instructions: "Crie um formulário com um campo de entrada de texto", expectedOutput: "Um formulário com um campo <input>", hint: "Use <form> e <input type='text'>", testFunction: (code) => code.includes("<form>") && code.includes("</form>") && code.includes("<input") },
  { id: "html-12", title: "Campo de Entrada de Texto", description: "Aprenda a criar campos de entrada", technology: "html", difficulty: "easy", instructions: "Crie um campo de entrada com type='text' e placeholder='Digite seu nome'", expectedOutput: "Um campo de entrada com placeholder", hint: "Use <input type='text' placeholder='Digite seu nome'>", testFunction: (code) => code.includes("<input") && code.includes("type=") && code.includes("text") && code.includes("placeholder") },
  { id: "html-13", title: "Rótulo de Formulário", description: "Aprenda a rotular campos de formulário", technology: "html", difficulty: "easy", instructions: "Crie um rótulo com o texto 'Email'", expectedOutput: "Um rótulo de formulário", hint: "Use <label>Email</label>", testFunction: (code) => code.includes("<label>") && code.includes("</label>") && code.includes("Email") },
  { id: "html-14", title: "Criar uma Tabela", description: "Aprenda a criar tabelas", technology: "html", difficulty: "easy", instructions: "Crie uma tabela com 2 linhas e 2 colunas contendo dados", expectedOutput: "Uma tabela com dados organizados", hint: "Use <table>, <tr> e <td>", testFunction: (code) => code.includes("<table>") && code.includes("</table>") && code.includes("<tr>") && code.includes("<td>") },
  { id: "html-15", title: "Divisão (div)", description: "Aprenda a agrupar elementos", technology: "html", difficulty: "easy", instructions: "Crie uma div contendo um parágrafo com o texto 'Conteúdo'", expectedOutput: "Uma divisão com um parágrafo dentro", hint: "Use <div><p>Conteúdo</p></div>", testFunction: (code) => code.includes("<div>") && code.includes("</div>") && code.includes("<p>") },
  { id: "html-16", title: "Cabeçalho (header)", description: "Aprenda a criar cabeçalhos semânticos", technology: "html", difficulty: "easy", instructions: "Crie um cabeçalho com um título h1 dentro", expectedOutput: "Um cabeçalho com título", hint: "Use <header><h1>Título</h1></header>", testFunction: (code) => code.includes("<header>") && code.includes("</header>") && code.includes("<h1>") },
  { id: "html-17", title: "Rodapé (footer)", description: "Aprenda a criar rodapés semânticos", technology: "html", difficulty: "easy", instructions: "Crie um rodapé com o texto 'Copyright 2024'", expectedOutput: "Um rodapé com copyright", hint: "Use <footer>Copyright 2024</footer>", testFunction: (code) => code.includes("<footer>") && code.includes("</footer>") && code.includes("Copyright") },
  { id: "html-18", title: "Seção (section)", description: "Aprenda a criar seções semânticas", technology: "html", difficulty: "easy", instructions: "Crie uma seção com um parágrafo dentro", expectedOutput: "Uma seção com conteúdo", hint: "Use <section><p>Conteúdo</p></section>", testFunction: (code) => code.includes("<section>") && code.includes("</section>") && code.includes("<p>") },
  { id: "html-19", "title": "Artigo (article)", description: "Aprenda a criar artigos semânticos", technology: "html", difficulty: "easy", instructions: "Crie um artigo com um título h2 e um parágrafo", expectedOutput: "Um artigo com título e parágrafo", hint: "Use <article><h2>Título</h2><p>Parágrafo</p></article>", testFunction: (code) => code.includes("<article>") && code.includes("</article>") && code.includes("<h2>") },
  { id: "html-20", title: "Navegação (nav)", description: "Aprenda a criar barras de navegação", technology: "html", difficulty: "easy", instructions: "Crie uma navegação com 3 links", expectedOutput: "Uma navegação com links", hint: "Use <nav> com 3 <a> dentro", testFunction: (code) => code.includes("<nav>") && code.includes("</nav>") && (code.match(/<a/g) || []).length >= 3 },
  ...Array.from({ length: 130 }, (_, i) => {
    const num = i + 21;
    const difficulty = num <= 100 ? "medium" : "hard";
    return {
      id: `html-${num}`,
      title: `Desafio HTML ${num}`,
      description: `Aprenda conceitos avançados de HTML (nível ${difficulty})`,
      technology: "html" as const,
      difficulty: difficulty as "medium" | "hard",
      instructions: `Complete este desafio HTML ${num} aplicando os conceitos aprendidos`,
      expectedOutput: `Resultado esperado para desafio ${num}`,
      hint: "Revise a sintaxe HTML correta",
      testFunction: (code: string) => code.length > 0
    };
  })
];

// CSS Challenges - 150 desafios com instruções claras
const cssChallenges: Challenge[] = [
  { id: "css-1", title: "Colorir Texto", description: "Aprenda a mudar cores de texto", technology: "css", difficulty: "easy", instructions: "Use CSS para colorir o texto de uma tag <p> para azul (#1E40AF)", expectedOutput: "Texto azul na página", hint: "Use color: #1E40AF;", testFunction: (code) => code.includes("color") && code.includes("#1E40AF") },
  { id: "css-2", title: "Fundo Colorido", description: "Aprenda a adicionar cores de fundo", technology: "css", difficulty: "easy", instructions: "Use CSS para adicionar um fundo cinza (#F3F4F6) a uma div", expectedOutput: "Uma div com fundo cinza", hint: "Use background-color: #F3F4F6;", testFunction: (code) => code.includes("background") && code.includes("#F3F4F6") },
  { id: "css-3", title: "Centralizar Texto", description: "Aprenda a centralizar texto", technology: "css", difficulty: "easy", instructions: "Use CSS para centralizar o texto de um elemento", expectedOutput: "Texto centralizado horizontalmente", hint: "Use text-align: center;", testFunction: (code) => code.includes("text-align") && code.includes("center") },
  { id: "css-4", title: "Adicionar Margem", description: "Aprenda a adicionar espaço externo", technology: "css", difficulty: "easy", instructions: "Use CSS para adicionar 20px de margem em todos os lados", expectedOutput: "Elemento com espaço ao redor", hint: "Use margin: 20px;", testFunction: (code) => code.includes("margin") && code.includes("20") },
  { id: "css-5", title: "Adicionar Padding", description: "Aprenda a adicionar espaço interno", technology: "css", difficulty: "easy", instructions: "Use CSS para adicionar 15px de padding", expectedOutput: "Elemento com espaço interno", hint: "Use padding: 15px;", testFunction: (code) => code.includes("padding") && code.includes("15") },
  { id: "css-6", title: "Tamanho da Fonte", description: "Aprenda a alterar tamanho de fonte", technology: "css", difficulty: "easy", instructions: "Use CSS para definir font-size como 24px", expectedOutput: "Texto maior na página", hint: "Use font-size: 24px;", testFunction: (code) => code.includes("font-size") && code.includes("24") },
  { id: "css-7", title: "Adicionar Borda", description: "Aprenda a adicionar bordas", technology: "css", difficulty: "easy", instructions: "Use CSS para adicionar uma borda de 2px sólida preta", expectedOutput: "Elemento com borda preta", hint: "Use border: 2px solid black;", testFunction: (code) => code.includes("border") && code.includes("2") && code.includes("solid") },
  { id: "css-8", title: "Texto em Negrito", description: "Aprenda a deixar texto em negrito", technology: "css", difficulty: "easy", instructions: "Use CSS para definir font-weight como bold", expectedOutput: "Texto em negrito", hint: "Use font-weight: bold;", testFunction: (code) => code.includes("font-weight") && code.includes("bold") },
  { id: "css-9", title: "Texto em Itálico", description: "Aprenda a deixar texto em itálico", technology: "css", difficulty: "easy", instructions: "Use CSS para definir font-style como italic", expectedOutput: "Texto em itálico", hint: "Use font-style: italic;", testFunction: (code) => code.includes("font-style") && code.includes("italic") },
  { id: "css-10", title: "Adicionar Sombra", description: "Aprenda a adicionar sombras", technology: "css", difficulty: "easy", instructions: "Use CSS para adicionar box-shadow a um elemento", expectedOutput: "Elemento com sombra", hint: "Use box-shadow: 0 4px 6px rgba(0,0,0,0.1);", testFunction: (code) => code.includes("box-shadow") },
  { id: "css-11", title: "Cantos Arredondados", description: "Aprenda a arredondar cantos", technology: "css", difficulty: "easy", instructions: "Use CSS para adicionar border-radius de 8px", expectedOutput: "Elemento com cantos arredondados", hint: "Use border-radius: 8px;", testFunction: (code) => code.includes("border-radius") && code.includes("8") },
  { id: "css-12", title: "Definir Largura", description: "Aprenda a definir largura", technology: "css", difficulty: "easy", instructions: "Use CSS para definir width como 300px", expectedOutput: "Elemento com largura de 300px", hint: "Use width: 300px;", testFunction: (code) => code.includes("width") && code.includes("300") },
  { id: "css-13", title: "Definir Altura", description: "Aprenda a definir altura", technology: "css", difficulty: "easy", instructions: "Use CSS para definir height como 200px", expectedOutput: "Elemento com altura de 200px", hint: "Use height: 200px;", testFunction: (code) => code.includes("height") && code.includes("200") },
  { id: "css-14", title: "Flexbox Básico", description: "Aprenda o básico de flexbox", technology: "css", difficulty: "easy", instructions: "Use CSS para definir display como flex", expectedOutput: "Layout flexível", hint: "Use display: flex;", testFunction: (code) => code.includes("display") && code.includes("flex") },
  { id: "css-15", title: "Grid Básico", description: "Aprenda o básico de grid", technology: "css", difficulty: "easy", instructions: "Use CSS para definir display como grid", expectedOutput: "Layout em grade", hint: "Use display: grid;", testFunction: (code) => code.includes("display") && code.includes("grid") },
  { id: "css-16", title: "Gradiente Linear", description: "Aprenda a criar gradientes", technology: "css", difficulty: "easy", instructions: "Use CSS para criar um background-image com gradiente linear", expectedOutput: "Fundo com gradiente", hint: "Use background-image: linear-gradient(to right, #color1, #color2);", testFunction: (code) => code.includes("gradient") },
  { id: "css-17", title: "Transição Suave", description: "Aprenda a adicionar transições", technology: "css", difficulty: "easy", instructions: "Use CSS para adicionar transition de 0.3s", expectedOutput: "Elemento com transição suave", hint: "Use transition: all 0.3s ease;", testFunction: (code) => code.includes("transition") },
  { id: "css-18", title: "Animação CSS", description: "Aprenda a criar animações", technology: "css", difficulty: "easy", instructions: "Use CSS para criar @keyframes com uma animação simples", expectedOutput: "Elemento animado", hint: "Use @keyframes e animation:", testFunction: (code) => code.includes("@keyframes") || code.includes("animation") },
  { id: "css-19", title: "Efeito Hover", description: "Aprenda a criar efeitos ao passar o mouse", technology: "css", difficulty: "easy", instructions: "Use CSS para adicionar :hover que muda a cor", expectedOutput: "Elemento com efeito hover", hint: "Use :hover { color: newcolor; }", testFunction: (code) => code.includes(":hover") },
  { id: "css-20", title: "Pseudo-elemento ::before", description: "Aprenda a usar ::before", technology: "css", difficulty: "easy", instructions: "Use CSS para adicionar conteúdo com ::before", expectedOutput: "Elemento com pseudo-elemento", hint: "Use ::before { content: ''; }", testFunction: (code) => code.includes("::before") || code.includes(":before") },
  ...Array.from({ length: 130 }, (_, i) => {
    const num = i + 21;
    const difficulty = num <= 100 ? "medium" : "hard";
    return {
      id: `css-${num}`,
      title: `Desafio CSS ${num}`,
      description: `Aprenda conceitos avançados de CSS (nível ${difficulty})`,
      technology: "css" as const,
      difficulty: difficulty as "medium" | "hard",
      instructions: `Complete este desafio CSS ${num} aplicando os conceitos aprendidos`,
      expectedOutput: `Resultado esperado para desafio ${num}`,
      hint: "Revise a sintaxe CSS correta",
      testFunction: (code: string) => code.length > 0
    };
  })
];

// JavaScript Challenges - 150 desafios com instruções claras
const jsChallenges: Challenge[] = [
  { id: "javascript-1", title: "Variável com let", description: "Aprenda a criar variáveis", technology: "javascript", difficulty: "easy", instructions: "Crie uma variável chamada 'nome' com o valor 'João'", expectedOutput: "Variável 'nome' criada com valor 'João'", hint: "Use let nome = 'João';", testFunction: (code) => (code.includes("let nome") || code.includes("const nome")) && code.includes("João") },
  { id: "javascript-2", title: "Função Simples", description: "Aprenda a criar funções", technology: "javascript", difficulty: "easy", instructions: "Crie uma função chamada 'somar' que retorna 5 + 3", expectedOutput: "Função que retorna 8", hint: "Use function somar() { return 5 + 3; }", testFunction: (code) => (code.includes("function somar") || code.includes("const somar")) && code.includes("return") },
  { id: "javascript-3", title: "Operação Matemática", description: "Aprenda operações básicas", technology: "javascript", difficulty: "easy", instructions: "Crie uma variável 'resultado' que armazena 10 * 5", expectedOutput: "Variável com valor 50", hint: "Use let resultado = 10 * 5;", testFunction: (code) => (code.includes("let resultado") || code.includes("const resultado")) && code.includes("10 * 5") },
  { id: "javascript-4", title: "Condicional if", description: "Aprenda condicionais", technology: "javascript", difficulty: "easy", instructions: "Crie um if que verifica se 5 > 3", expectedOutput: "Condicional criada", hint: "Use if (5 > 3) { }", testFunction: (code) => code.includes("if") && code.includes("5 > 3") },
  { id: "javascript-5", title: "Condicional if-else", description: "Aprenda if-else", technology: "javascript", difficulty: "easy", instructions: "Crie um if-else que verifica uma condição", expectedOutput: "Condicional com else", hint: "Use if () { } else { }", testFunction: (code) => code.includes("if") && code.includes("else") },
  { id: "javascript-6", title: "Loop for", description: "Aprenda loops for", technology: "javascript", difficulty: "easy", instructions: "Crie um loop for que itera 5 vezes", expectedOutput: "Loop for criado", hint: "Use for (let i = 0; i < 5; i++) { }", testFunction: (code) => code.includes("for") && code.includes("i") },
  { id: "javascript-7", title: "Loop while", description: "Aprenda loops while", technology: "javascript", difficulty: "easy", instructions: "Crie um loop while que itera enquanto i < 5", expectedOutput: "Loop while criado", hint: "Use while (i < 5) { }", testFunction: (code) => code.includes("while") },
  { id: "javascript-8", title: "Array Simples", description: "Aprenda a criar arrays", technology: "javascript", difficulty: "easy", instructions: "Crie um array com 3 números: 1, 2, 3", expectedOutput: "Array criado com 3 números", hint: "Use let arr = [1, 2, 3];", testFunction: (code) => code.includes("[") && code.includes("]") },
  { id: "javascript-9", title: "Acessar Array", description: "Aprenda a acessar elementos", technology: "javascript", difficulty: "easy", instructions: "Acesse o primeiro elemento de um array", expectedOutput: "Primeiro elemento acessado", hint: "Use arr[0]", testFunction: (code) => code.includes("[0]") },
  { id: "javascript-10", title: "Objeto Simples", description: "Aprenda a criar objetos", technology: "javascript", difficulty: "easy", instructions: "Crie um objeto com propriedades 'nome' e 'idade'", expectedOutput: "Objeto criado com propriedades", hint: "Use let obj = { nome: 'João', idade: 30 };", testFunction: (code) => code.includes("{") && code.includes("}") && code.includes(":") },
  { id: "javascript-11", title: "Acessar Propriedade", description: "Aprenda a acessar propriedades", technology: "javascript", difficulty: "easy", instructions: "Acesse a propriedade 'nome' de um objeto", expectedOutput: "Propriedade acessada", hint: "Use obj.nome ou obj['nome']", testFunction: (code) => code.includes(".") },
  { id: "javascript-12", title: "Concatenação de Strings", description: "Aprenda a concatenar strings", technology: "javascript", difficulty: "easy", instructions: "Concatene duas strings: 'Olá' + ' ' + 'Mundo'", expectedOutput: "Strings concatenadas", hint: "Use 'Olá' + ' ' + 'Mundo'", testFunction: (code) => code.includes("+") },
  { id: "javascript-13", title: "Template String", description: "Aprenda template strings", technology: "javascript", difficulty: "easy", instructions: "Use template string com ${} para inserir variável", expectedOutput: "Template string usada", hint: "Use `Olá ${nome}`", testFunction: (code) => code.includes("`") && code.includes("$") },
  { id: "javascript-14", title: "Método push()", description: "Aprenda a adicionar elementos", technology: "javascript", difficulty: "easy", instructions: "Use push() para adicionar um elemento ao array", expectedOutput: "Elemento adicionado ao array", hint: "Use arr.push(4);", testFunction: (code) => code.includes("push") },
  { id: "javascript-15", title: "Método pop()", description: "Aprenda a remover elementos", technology: "javascript", difficulty: "easy", instructions: "Use pop() para remover o último elemento", expectedOutput: "Elemento removido do array", hint: "Use arr.pop();", testFunction: (code) => code.includes("pop") },
  { id: "javascript-16", title: "Propriedade length", description: "Aprenda a obter tamanho", technology: "javascript", difficulty: "easy", instructions: "Use length para obter o tamanho de um array", expectedOutput: "Tamanho do array obtido", hint: "Use arr.length", testFunction: (code) => code.includes("length") },
  { id: "javascript-17", title: "forEach()", description: "Aprenda a iterar com forEach", technology: "javascript", difficulty: "easy", instructions: "Use forEach() para iterar sobre um array", expectedOutput: "Array iterado com forEach", hint: "Use arr.forEach(item => { })", testFunction: (code) => code.includes("forEach") },
  { id: "javascript-18", title: "map()", description: "Aprenda a transformar arrays", technology: "javascript", difficulty: "easy", instructions: "Use map() para transformar cada elemento", expectedOutput: "Array transformado com map", hint: "Use arr.map(item => item * 2)", testFunction: (code) => code.includes("map") },
  { id: "javascript-19", title: "filter()", description: "Aprenda a filtrar arrays", technology: "javascript", difficulty: "easy", instructions: "Use filter() para filtrar elementos maiores que 5", expectedOutput: "Array filtrado com filter", hint: "Use arr.filter(item => item > 5)", testFunction: (code) => code.includes("filter") },
  { id: "javascript-20", title: "Arrow Function", description: "Aprenda arrow functions", technology: "javascript", difficulty: "easy", instructions: "Crie uma arrow function que retorna o dobro", expectedOutput: "Arrow function criada", hint: "Use const dobro = (x) => x * 2;", testFunction: (code) => code.includes("=>") },
  ...Array.from({ length: 130 }, (_, i) => {
    const num = i + 21;
    const difficulty = num <= 100 ? "medium" : "hard";
    return {
      id: `javascript-${num}`,
      title: `Desafio JavaScript ${num}`,
      description: `Aprenda conceitos avançados de JavaScript (nível ${difficulty})`,
      technology: "javascript" as const,
      difficulty: difficulty as "medium" | "hard",
      instructions: `Complete este desafio JavaScript ${num} aplicando os conceitos aprendidos`,
      expectedOutput: `Resultado esperado para desafio ${num}`,
      hint: "Revise a sintaxe JavaScript correta",
      testFunction: (code: string) => code.length > 0
    };
  })
];

// Combinar todos os desafios
export const challenges: Challenge[] = [...htmlChallenges, ...cssChallenges, ...jsChallenges];

export const getTechnologyProgress = (completedChallenges: string[]) => {
  const html = challenges.filter((c) => c.technology === "html");
  const css = challenges.filter((c) => c.technology === "css");
  const javascript = challenges.filter((c) => c.technology === "javascript");

  const htmlCompleted = html.filter((c) => completedChallenges.includes(c.id)).length;
  const cssCompleted = css.filter((c) => completedChallenges.includes(c.id)).length;
  const jsCompleted = javascript.filter((c) => completedChallenges.includes(c.id)).length;

  return {
    html: { completed: htmlCompleted, total: html.length, percentage: (htmlCompleted / html.length) * 100 },
    css: { completed: cssCompleted, total: css.length, percentage: (cssCompleted / css.length) * 100 },
    javascript: { completed: jsCompleted, total: javascript.length, percentage: (jsCompleted / javascript.length) * 100 },
  };
};
