# Panel



#Instalação:
via cdnjs:
```html
<!-- Lembre-se de incluir jQuery :) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>

<!-- jQuery Window Panel Modal -->
<script src="./panel.min.js"></script> <!-- seu caminho para o panel.min.js-->
<link rel="stylesheet" href="./panel.min.css" /> <!-- seu caminho para o panel.min.css-->
```

# Abrindo a janela

```js
$('#button').panel();
```
### Elemento target
a janela abre com animação partindo de um target. 
O elemento target será o elemento que chamar o panel(). 
Nesse exemplo acima, será o nosso botão com id = button.
É possível ainda definir um target diferente dentro dos parâmetros do nosso panel().
* Veja abaixo um exemplo:
```js
$('html').panel({
    target: $("#button")
});
```
perceba que foi necessário mandarmos o elemento como target, 
e não uma referência ao seu id, ou class
#Identificação da Janela
nossa janela precisa ser única, e por isso é gerado um id de identificação da janela.
o id é gerado de forma aleatória com números que variam de 0 a 10000000.
De todo modo, se você precisar manipular esse id, é necessário fornecer seu próprio id.
* Observe o modelo abaixo:
```js
$('#button').panel({
    id: 'id-da-minha-janela-de-post'
});
```
#Header
Cabeçalho da janela, podemos nomear nossa janela aqui, e atribuir estilo,
basta colocarmos o atributo 'header'.
* vejamos abaixo:
```js
$('#button').panel({
    header: {
        html: 'Minha Janela',
        css: {
            background: 'cyan'
        }
    }
});
```
o header.html é o nome da sua janela, e serve para identificação do usuário 
ao utilizar mais que uma janela. Ao minimizar uma janela, somente este título ficará
a amostra para identificação. O html do header tem por padrão largura de 140px, 
tendo espaço para cerca de 18 caracteres. Para alterar este tamanho, modifique no panel.css

#Conteúdo da Janela
Para controlar o conteúdo da janela, é preciso atacarmos o atributo 'body'. 
Onde é possível determinarmos seu conteúdo ('html') e seu estilo ('css').
* Veja o exemplo abaixo
###Exemplo de aplicação de estilo:
```js
$('#button').panel({
    body: {
        html: '<div><h2>Corpo da janela</h2></div>', 
        css: {
            'padding': '20px',
            'font-size': '1.3em'
        }
    }
});
```
#Estilo da Janela
Para modificar o estilo da janela, basta utilizar-mos o atributo 'css'.
* Veja abaixo
```js
$('#button').panel({
    css: {
        'background': '#EEEEEE', 
        'color': 'darkcyan',
        'opacity': 0.8
    }
});
```
#Atributos da Janela
Também é possível definir nossos atributos da janela, tanto para uso de classes,
quanto para outras atividades.
* Veja um exemplo
```js
$('#button').panel({
    attr: {
        title: 'Olá, eu sou o title da janela',
        class: 'minhaClasse outraClasse',
        'data-alguma-coisa': 'guarde algo útil para controle'
    }
});
```
#Botões de Cabeçalho da Janela
por padrão, a janela inicia com 3 botões, o de minimizar, maximizar e fechar.
É possível determinar quais botões você quer para sua janela. 
Para isso, iremos atacar o atributo 'control'.
#### close: 
* Descrição: Fecha a janela permanentemente, excluíndo todos os dados da janela.
* Valor Padrão: true,
* Valores Aceitos: true, false, 1, 0.

#### maximize: 
* Descrição: Coloca a janela em tamanho máximo do site. Dando total foco a essa janela
* Valor Padrão: true,
* Valores Aceitos: false, true, 1, 0.

#### minimize: 
* Descrição: Minimiza a janela tirando o foco dela, 
a janela fica no final do site fixado, com tamanho mínimo.
* Valor Padrão: true,
* Valores Aceitos: false, true, 1, 0.

### Confira este exemplo abaixo:
```js
$("#button").panel({
    control: {
        minimize: false,
        maximize: false,
        close: true // não precisa informar o close, pois o valor padrão já é true
    }
});
```
#Gatilho dos Botões
Para definirmos outras ações extras para serem executadas ao clicar em close, minimize ou maximize.
Basta atacarmos o atributo 'control' com os valores 'onClose', 'onMinimize', 'onMaximize'.

#### onClose: 
* Descrição: Executa uma ação ao fechar a janela.
* Valor Padrão: null,
* Valores Aceitos: function()

#### onMinimize: 
* Descrição: Executa uma ação ao minimizar a janela.
* Valor Padrão: null,
* Valores Aceitos: function()

#### onMaximize: 
* Descrição: Executa uma ação ao maximizar a janela.
* Valor Padrão: null,
* Valores Aceitos: function()

### Veja um exemplo
```js
$("#button").panel({
    control: {
        maximize: false, //remove o botão maximize, conforme vimos no exemplo anterior
        onMinimize: function() {
          alert('ok'); //dispara um alert quando clicado em minimize
          return true; //cancela a função padrão de minimizar.
        },
        onClose: minhaFuncaoClose() //minha função declarada em outro local sendo chamada ao fechar a janela.
    }
});
```
percebam, que no exemplo acima, no atributo 'onMinimize', 
foi retornado true na função atribuída,
isso irá cancelar a função padrão de minimizar a janela. Também é aplicável ao 'onClose' e ao 'onMaximize'

#Drag e Resize
Para não permitir o drag (arrasto da janela), basta atacar o atributo 'control.drag',
e para não permitir o resize da janela, basta atacar o atributo 'control.resize'.

#### drag: 
* Descrição: Define se a janela poderá ser movida (drag).
* Valor Padrão: true,
* Valores Aceitos: true, false, 1, 0.

#### resize: 
* Descrição: Define se a janela poderá ser reajustada de tamanho (resize).
* Valor Padrão: true,
* Valores Aceitos: true, false, 1, 0.

### Veja o exemplo
```js
$("#button").panel({
    control: {
        drag: false,// não permite drag da janela
        resize: true // não precisa informar, pois o padrão já é true.
    }
});
```
#Gatilho Drag e Resize
assim como os botões close, minimize e maximize, drag e resize também podem disparar funções.
Porém somente irá disparar, ao finalizar a ação de drag, ou de resize. 
E não é possível cancelar a ação padrão, como nos botões close, minimize e maximize.

#### onDrag: 
* Descrição: Executa uma ação ao finalizar a ação de drag.
* Valor Padrão: null,
* Valores Aceitos: function()

#### onResize: 
* Descrição: Executa uma ação ao finalizar a ação de resize.
* Valor Padrão: null,
* Valores Aceitos: function()

### Veja a aplicação do drag e resize abaixo
```js
$("#button").panel({
    control: {
        onDrag: function() {
            console.log("você moveu a janela");
        },
        onResize: minhaFuncaoResize()
    }
});
```
# Efeitos
para controlar alguns efeitos, utilizamos o atributo `control`.
#### control.blur: 
* Descrição: Deixa os elementos dentro do body ofuscados, com excessão das janelas.
* Valor Padrão: true,
* Valores Aceitos: true, false, 1, 0.

#### control.speed: 
* Descrição: controla velocidade das transições entre ações em segundos.
* Valor Padrão: 0.25,
* Valores Aceitos: 0.01 ~ 10

#### control.clickOut: 
* Descrição: executa ação de fechamento ao clicar fora da janela quando for true. 
Minimiza janela quando valor for 'minimize'
* Valor Padrão: false,
* Valores Aceitos: false, true, 'minimize'
#
#### Confira um exemplo de aplicação do controle de efeitos
```js
$('#button').panel({
    control: {
        blur: false, //remove efeito de blur do fundo
        speed: 0.01, //para remover transição.
        clickOut: 'minimize' // minimaliza janela se clicar fora dela.
    }
});
```

#Exemplo Completo
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>
<script src="./panel.min.js"></script>
<link rel="stylesheet" href="./panel.min.css" />

<button id="btnWin">Janela</button>

<sctipt>
    $("#btnWin").panel({
        header: { // cabeçalho da janela
            html: 'Demo Janela',
            css: {
                background: 'tomato'
            }
        },
        body: { // conteúdo da janela
            html: '<h2>Conteúdo da janela</h2>',
            css: {
                background: '#EEEEEE',
                padding: '15px 30px'
            }
        },
        css: {//janela estilo
            width: '400px', //inicia com 400px largura
            height: '500px', //inicia com 500px de altura
            left: '300px' //inicia com 300px da esquerda
            // top é deixado no padrão, pois não foi definido
        }
        control: { //controle
            resize: false,
            speed: 0.5,
            clickOut: 'minimize',
            onClose: function() {
                $('html').panel({
                    header: {
                        html: 'Fechamento'
                    },
                    body: {
                        html: '<b> Obrigado por usar</b>',
                        css: {
                            padding: '20px',
                            'text-align': 'center',
                            'font-size': '3em'
                        }
                    },
                    control: {
                        clickOut: true
                    }
                });
            }
        }
    });
</sctipt>
```
# Autor
* Desenvolvedor: Edinei J. Bauer
* Email: `edineibauer@gmail.com`
# Updates
Qualquer melhoria do código, seja para redução do código, 
implementação de funções extras ou melhoria do desempenho, vair ser bem-vinda, 
* ``Aguardo sua sugestão.``