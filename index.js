const onClickLogin = () =>{
    const email = document.getElementById('input-email').value;
    //getElem é a funcao para pegar a referencia de email e o value pega os dados, o valor
    if (email.length < 5 || !email.includes('@')){
//Se o tamanho do email for menor que se ou se o email nao incluir @ emitir alerta
        alert("E-mail inválido!");
        return; //Para que pare de executar a função a partir daqui.
    }
    localStorage.setItem("@WalletApp:userEmail", email);
    //Para salvar o email no navegador, poderia usar o setstorage tbm, mas ele só guarda por sessão
    window.open("./src/pages/home/index.html", "_self");
    //Qndo colocar o email e clicar em acessar, vai para a pag home, o _self é p/ que 
    // ele abra na mesma página

};
    