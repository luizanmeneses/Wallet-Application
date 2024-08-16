//Depois que faz o login, é necessário chamar a API para que ela retorne se o email existe na base de dados

const validateUser = async (email) => {//faz uma requisição p/ verif se o usuario com o email fornec existe
    //Async: funcao é assincrona, ou seja, pode lidar com op assincronas
    try{
    //Try/catch: P/ capturar e lidar com os futuros erros
        const result = fetch(`https://mp-wallet-app-api.herokuapp.com/users?email=${email}`);//A string de ref/url deve ser entre crases
    //Fetch: faz uma requisicao http p/ a url fornecida (API) e esta retorna os dados do usuario baseado no email. 
        const user = await result.json();//converte a resp da requisicao em objeto js
        return user;//Se requis bem sucedida, a funcao retorna os dados do usuario
} catch (error){
    return {error};
}
};

//Qndo clica no botao de login, essa funcao valida o email, tenta buscar o usuario e salva os dados no localStorage e manda o usuario p/ home
const onClickLogin = async () =>{
    const email = document.getElementById('input-email').value;
    //getElem é a funcao para pegar a referencia de email e o value pega os dados, o valor
    if (email.length < 5 || !email.includes('@')){
//Se o tamanho do email for menor que se ou se o email nao incluir @ emitir alerta
        alert("E-mail inválido!");
        return; //Para que pare de executar a função a partir daqui.
    }
    const result = await validateUser(email);
    if (result.error){
        alert("Falha ao validar e-mail.");
        return;
    }
    localStorage.setItem("@WalletApp:userEmail", result.email);
    //Para salvar o email no navegador, poderia usar o setstorage tbm, mas ele só guarda por sessão
    localStorage.setItem("@WalletApp:userName", result.name);
    localStorage.setItem("@WalletApp:userId", result.id);
    window.open("./src/pages/home/index.html", "_self");
    //Qndo colocar o email e clicar em acessar, vai para a pag home, o _self é p/ que ele abra na mesma página

};
/*Explicação:
 Autenticação básica de usuário. Quando o usuario insere o email e clica no login, o sistema valida o email, consulta o servidor remoto
 p/ ver se o usuario existe, depois armazena os dados do mesmo localmente e depois manda para a home.
*/
    