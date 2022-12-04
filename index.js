<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hotel Muito Louco</title>
</head>
<body>
    
    <script>

var nomeHotel = prompt("Insira o nome do hotel: ");
alert(`O nome do Hotel é ${nomeHotel}`);

var nomeUsuario = prompt("Insira o nome do Usuario: ");

function inicio_validacao(){ //VALIDAÇÃO DE LOGIN DO USÚARIO 

    let senha = 2678;
    let senhaValidacao = parseInt(prompt("Insira a senha: "));

        if (senhaValidacao != senha){

            alert("Senha Invalida!! Tente novamente o processo de Validação");
            inicio_validacao();

        }

    alert(`Bem vindo ao ${nomeHotel}, ${nomeUsuario}. É um imenso prazer ter você aqui`);

}

 function erro_processamento(){

    alert("Erro");

}

function inicio_hotel(){  //INICIAÇÃO DO MENU DE OPÇÕES

    let opcao = parseInt(prompt("Insira a opção desejada: \n 1). Reserva de Quartos \n 2). Cadastro de Hóspedes \n 3). Cadastro e Pesquisa de Hóspedes \n 4). Reserva para eventos  \n 5). Reserva de Buffet \n 6). Reserva de auditório \n 7).Reserva do restaurante \n 8). Verificação de preços Alcool/Gasolina. \n 9). Aluguel de ar condicionado \n 10) Sair."));

    switch(opcao){

        case 1:

            reserva_quartos(); //OK
            inicio_hotel();

        case 2:

            cadastro_hospedes_2(); //OK
            inicio_hotel();
        
        case 3:

            cadastro_hospedes_3(); //OK
            inicio_hotel();

        case 4:
            
            reserva_evento();
            inicio_hotel();
        
        case 5:

            reserva_buffet();
            inicio_hotel();

        case 6:

            reserva_auditorio();
            inicio_hotel();

        case 7:

            reserva_restaurante();
            inicio_hotel();

        case 8:

            abastecimento_carro();
            inicio_hotel();

        case 9:

            aluguel_arCondicionado();
            inicio_hotel();

        case 10:
            sair();

        default:

            erro_processamento();

    }
}

function reserva_quartos(){  //RESERVA DE QUARTOS ANTECIPADA

    let diaria_hotel = parseInt(prompt("Insira o valor de uma diária do Hotel: "));

        if(diaria_hotel <= 0 || isNaN(diaria_hotel)){

            alert(`${nomeUsuario}, este valor é inválido. Tente novamente !!`);
            inicio_hotel();

        }

    let dia_hospedagem = parseInt(prompt("Insira a quantidade de dias que deseja reservar: "));
    
        if(dia_hospedagem <= 0 || isNaN(dia_hospedagem)){

            alert(`Valor Invalido, ${nomeUsuario}`);
            inicio_hotel();

        }else if(dia_hospedagem > 30){

            alert(`Valor Invalido, ${nomeUsuario}`);
            inicio_hotel();

        }
    
    let valor_hospedagem = diaria_hotel * dia_hospedagem;

    let nome_hospede1 = prompt("Insira o nome do Hóspede: ");

    let confirma_reserva = prompt(`${nomeUsuario}, você confirma reserva para ${nome_hospede1}? (S/N)`);

        if(confirma_reserva == "S"){

            alert(`${nomeUsuario}, reserva efetuada para ${nome_hospede1}. O valor total é de R$ ${valor_hospedagem}.`);

        }else if(confirma_reserva == "N"){

            alert(`${nomeUsuario}, reserva não efetuada`);
        
        }else if(confirma_reserva != "S" && confirma_reserva != "N"){

            alert(`${nomeUsuario}, insira um valor válido (S/N)`);
            inicio_hotel();
        }
        
}

function cadastro_hospedes_2(){ //CADASTRO DE HÓSPEDES QUE FAZEM A COMPRA DE QUARTOS NA HORA

    alert("Iremos cadastrar os hóspedes, caso queria para de cadastrar digite 'PARE' a qualquer momento! \n Dependendo da idade do hóspede o valor muda conforme abaixo: \n Hóspede menor de 6 anos - Possui direito a gratuidade! \n Hóspede maior de 60 anos - Possui direito a meia diária!");

    let valor_diaria = parseInt(prompt("Insira o valor da Diária: "));

        while(isNaN(valor_diaria) || valor_diaria <= 0){

            alert("Insira um valor válido");
            valor_diaria = parseInt(prompt("Insira o valor da diária"));

        }
    
    let nome_hospede2;
    let idade_hospede2;
    let diaria_porPesssoa = 0;
    let valorMeia_diaria = 0;
    let qtdMeia_diaria = 0;
    let qtdGratuidade = 0;
    let total_diaria = 0;


    nome_hospede2 = prompt("Insira o nome do hóspede: ");
        
        while(nome_hospede2 != "PARE"){

            idade_hospede2 = parseInt(prompt("Insira a idade do hóspede: "));

                while(isNaN(idade_hospede2) || idade_hospede2 < 0){

                    alert(`Idade do hóspede ${nome_hospede2} inválida. Tente novamente!!`);
                    idade_hospede2 = parseInt(prompt("Insira a idade do hóspede: "));

                }

                if(idade_hospede2 <= 6){

                    alert(`${nome_hospede2} possui gratuidade.`);
                    qtdGratuidade++;
                    
                }else if(idade_hospede2 >= 60){

                    alert(`${nome_hospede2} paga meia diária.`);
                    valorMeia_diaria += valor_diaria / 2;
                    qtdMeia_diaria++;
                    
                }else{

                    diaria_porPesssoa += valor_diaria;
                    alert(`${nome_hospede2} paga diária inteira.`);
                    
                }

                nome_hospede2 = prompt("Insira o nome do hóspede: ");

        }
            
    total_diaria = valorMeia_diaria + diaria_porPesssoa;
    
    alert(`${nomeUsuario}, o valor total da hospedagem é R$ ${total_diaria} com: ${qtdGratuidade} de gratuidades e ${qtdMeia_diaria} de meia diária.`);

}

function cadastro_hospedes_3(){ //CASDASTRO DE HÓSPEDE FEITO NA HORA COM OPÇÃO DE PESQUISA DE HÓSPEDES CADASTRADOS

    var lista_hospedes_function3 = []

        function inicio_cadastroFunction_hospedes_3(){

            let opcao = parseInt(prompt("Insira a opção desejada: \n 1). Cadastrar \n 2). Pesquisar \n 3). Sair \n"));

            switch(opcao){

                case 1:

                    cadastro_function_3();
                    inicio_cadastroFunction_hospedes_3();

                case 2:

                    pesquisa_function_3();
                    inicio_cadastroFunction_hospedes_3();

                case 3:

                    sair();
                
                default:

                    erro_funtion_3();

            }

        function cadastro_function_3(){

            if(lista_hospedes_function3.length >= 15){

                alert("Número máximo de Hóspedes cadastrados.");


            }else{

                var nome_hospede3 = prompt("Por favor, insira o nome da(o) Hóspede: ");
                
                lista_hospedes_function3.push(nome_hospede3);
                console.log(lista_hospedes_function3);
                alert(`Sucesso!! Hóspede ${nome_hospede3}, foi cadastrado com sucesso. \n`);

            }


        }

        function pesquisa_function_3(){

            var nome_hospede3 = prompt("Por favor, insira o nome da(o) Hóspede: ");
            
            if(lista_hospedes_function3.includes(nome_hospede3)){

                alert(`${nome_hospede3}, encontrada(o).`);

            }else{

                alert(`${nome_hospede3}, não foi econtrada(o).`);

            }

        }

        function sair(){

            let confirma = confirm("Você deseja sair? ");

            if(confirma){

                inicio_hotel();

            }else{

                inicio_cadastroFunction_hospedes_3();
            }
        }

        function erro_funtion_3(){

            alert("Opção inválida !! \n Insira uma opção de 1 a 3. ");
            inicio_cadastroFunction_hospedes_3();

        }
    }

    inicio_cadastroFunction_hospedes_3();

}

function reserva_evento(){
    let qtdHorasevento = parseInt(prompt("Insira a duração prevista para o evento"))
    if(qtdHorasevento == NaN || qtdHorasevento== ""){
        alert("Valor inválido");
        reserva_evento();
    }
    let qtdGarcom = parseInt(prompt("Insira a quantidade de garçons que deseja contratar para o evento. \n *OBS: cada garçon custa 10.50R$*"))
    if(qtdGarcom == NaN || qtdGarcom == ""){
        alert("Valor inválido");
        reserva_evento();
    }

    let precoGarcom = qtdGarcom * 10.50;
    let precoTotalevento = precoGarcom * qtdHorasevento;

    alert("O custo total de seu evento será de: R$" + precoTotalevento);

    let confirmarReserva= confirm("Deseja confirmar sua reserva?")
    if(confirmarReserva){
        alert(nomeUsuario + "Sua reserva foi confirmada")
    }

    else{
        alert("Sua reserva não foi efetuada")
    }
}

function reserva_buffet(){ //FAZ RESERVA DE BUFFET CALCULANDO SALGADO, ÁGUA, CAFÉ E QUANTIDADE MÁX DE PESSOAS

    let qtdConvidados = parseInt(prompt("Insira a quantidade de convidados:"));

    if(qtdConvidados > 350){

        alert("Quantidade de convidados supera a capacidade máxima de locação. \n Insira um número menor de convidados");
        reserva_buffet();
    }

    let qtdCafe = qtdConvidados * 0.2;
    let qtdAgua = qtdConvidados * 0.5;
    let qtdSalgado = qtdConvidados * 7;

    let precoSalgado_total; 

        if(qtdSalgado < 100){

            precoSalgado_total = qtdSalgado * 2.94; 

        }else if(qtdSalgado == 100){

            precoSalgado_total = 34;

        }else if(qtdSalgado > 100){

            precoSalgado_total = 34;
            qtdSalgado - 100;
            precoSalgado_total += qtdSalgado * 2.94;

        }else if(qtdSalgado == 200){

            precoSalgado_total = 34 * 2;

        }else if(qtdSalgado > 200){

            precoSalgado_total = 34 * 2;
            qtdSalgado - 200;
            precoSalgado_total += qtdSalgado * 2.94;

        }else if(qtdSalgado == 300){

            precoSalgado_total = 34 * 3;

        }else if(qtdSalgado > 300){

            precoSalgado_total = 34 * 3;
            qtdSalgado - 300;
            precoSalgado_total += qtdSalgado * 2.94;

        }

    let precoCafe_total = qtdCafe * 0.80;
    let precoAgua_total = qtdAgua * 0.40;
    let precoEvento_total = precoAgua_total + precoCafe_total + precoSalgado_total;


    let confirma_reservaEvento = confirm(`O evento precisará de ${qtdCafe} litros de Café, ${qtdAgua} litros de Água e ${qtdSalgado} unidades de Salgado. O custo total do evento é R$ ${precoEvento_total}. 
    
    Gostaria de efetuar a reserva?`);

    if(confirma_reservaEvento){

        alert(`${nomeUsuario}, reserva foi efetuada com sucesso!!`);

    }else{

        alert("Reserva não efetuada! ");

    }

}

function reserva_auditorio(){
    let qtdconvidados_auditorio = parseInt(prompt("Insira a quantidade de convidados para o evento: "))
    if (qtdconvidados_auditorio == NaN || qtdconvidados_auditorio == ""){
        alert("Valor inválido!");
        reserva_auditorio();
    }

    if (qtdconvidados_auditorio > 350){
        alert("Capacidade máxima excendida, insira um número menor de pessoas");
        reserva_auditorio();
    }

    if (qtdconvidados_auditorio <= 220){
        if (qtdconvidados_auditorio <= 150){
           alert("Use o auditório Laranja");

        }
        else if(qtdconvidados_auditorio>150){
            let qtdConvidadosAuditorio_total = 150;
            let qtdconvidados_adicional = qtdconvidados_auditorio - qtdConvidadosAuditorio_total;
            alert ("Use o auditório Laranja(inclua mais:" + qtdconvidados_adicional + "cadeiras)");
        }
        
    }
    else{
        alert("Use o auditório Colorado");
    }

    let confirmar_reservaAuditorio = confirm("Deseja confirmar a reserva?")
    if(confirmar_reservaAuditorio){
        alert("A reserva foi efetuada")
    }
    else{
        alert("A reserva não foi efetuada")
    }
}

function reserva_restaurante(){

    let diaSemana = prompt("Insira o dia do evento (Ex: sabado)");
    let lista_dia = ["segunda","quarta","quinta","sabado","domingo"]

    if (diaSemana == "" || diaSemana== Number){
        alert("Insira um dia válido");
        reserva_restaurante();
    }
    else if(lista_dia.includes(diaSemana)){
        alert(diaSemana + "dia disponivel");
    }
    else{
        alert(diaSemana + "dia não disponivel");
        reserva_restaurante();
    }

    var lista_restaurante=["nirvana","metalica", "redhot","foofoods"];
    var horario_disponivelSem=[10,12,14,16,18,20,22,23];
    var horario_disponivelFds=[7,9,12,13,15];

    let restaurante = prompt("Insira o restaurante desejado: \n" + lista_restaurante);
    if(restaurante == "" || restaurante == Number){
        alert("Nome inválido. Coloque um nome válido");
        reserva_restaurante();
    }
    else if (lista_restaurante.includes(restaurante)){
        alert("Restaurante selecionado!");
    }
    else{
        alert("Restaurante inválido");
        reserva_restaurante();
    }

    if(diaSemana=="sabado" || diaSemana=="domingo"){
        let horario = parseInt(prompt("Insira o horario desejado: \n" + horario_disponivelFds));
        if (horario == "" || horario == NaN){
            alert("Dados inválidos, tente novamente")
            reserva_restaurante();
        }
        if(horario_disponivelFds.includes(horario)){
            let empresa = prompt("Insira o nome da empresa que está reservando o horário:")
            if(empresa == "" || empresa == Number){
                alert("Dado inválido, tente novamente")
                reserva_restaurante();
            }

            let confirma_reservaRest = confirm("Deseja confirmar a reserva para " + empresa + ", no dia" + diaSemana + "ás" + horario )
                if(confirma_reservaRest){
                    alert("Restaurante " + restaurante + "reservado para a empresa" + empresa + "na(o)" + diaSemana + "ás" + horario);
                }
                else{
                    alert("reserva não efetuada!");
                }
                }else{
                    alert("Ops, houve um erro, tente novamente.");
                    inicio_hotel();
                }
        }else{
            let horario = parseInt(prompt("Insira o horario desejado: \n" + horario_disponivelSem));
            if (horario == "" || horario == NaN){
                alert("Dados inválidos, tente novamente")
                reserva_restaurante();
            }
            else if(horario_disponivelSem.includes(horario)){
            let empresa = prompt("Insira o nome da empresa que está reservando o horário:")
            if(empresa == "" || empresa == Number){
                alert("Dado inválido, tente novamente")
                reserva_restaurante();
            }

            let confirma_reservaRest = confirm("Deseja confirmar a reserva para " + empresa + ", no dia" + diaSemana + "ás" + horario )
                if(confirma_reservaRest){
                alert("Restaurante " + restaurante + "reservado para a empresa" + empresa + "na(o)" + diaSemana + "ás" + horario);
                }
                else{
                alert("reserva não efetuada!");
                }
                }else{
                alert("Ops, houve um erro, tente novamente.");
                inicio_hotel();
                }
        }
    }

function abastecimento_carro(){
    let alcoolWayne = parseFloat(prompt("Insira o preço do Alcool no Posto Wayne: "));
    let gasolinaWayne = parseFloat(prompt("Insira o preço da Gasolina no Posto Wayne"));

    
    let melhorOpcaoAlcoolWayne;
    let melhorOpcaoGasolinaWayne;

   
    let alcoolStark = parseFloat(prompt("Insira o preço da Alcool no Posto Stark"));
    let gasolinaStark = parseFloat(prompt("Insira o preço da Gasolina no Posto Stark"));


    let melhorOpcaoAlcoolStark;
    let melhorOpcaoGasolinaStark;

   
    let percentual_AlcoolGasolinaWayne = ((gasolinaWayne * (30/100)) + alcoolWayne);

        if(percentual_AlcoolGasolinaWayne <= gasolinaWayne){        
            
            melhorOpcaoAlcoolWayne = alcoolWayne;

        }else{                                                         
        
            melhorOpcaoGasolinaWayne = gasolinaWayne;

        }
    
   
    let percentual_AlcoolGasolinaStark = ((gasolinaStark * (30/100)) + alcoolStark);

        if(percentual_AlcoolGasolinaStark <= gasolinaStark){

            melhorOpcaoAlcoolStark = alcoolStark;                
        }else{

            melhorOpcaoGasolinaStark = gasolinaStark;

        }

    let melhorOpcaoFinalAlcool;
    let melhorOpcaoFinalGasolina;
    let percentual_Final = 0;

        if(melhorOpcaoAlcoolWayne < melhorOpcaoAlcoolStark){    

            melhorOpcaoFinalAlcool = melhorOpcaoAlcoolWayne;

        }else{

            melhorOpcaoFinalAlcool = melhorOpcaoAlcoolStark;
            
        }

        if(melhorOpcaoGasolinaWayne < melhorOpcaoGasolinaStark){

            melhorOpcaoFinalGasolina = melhorOpcaoGasolinaWayne;

        }else{

            melhorOpcaoFinalGasolina = melhorOpcaoGasolinaStark;
            
        }

        
        if(melhorOpcaoFinalAlcool == melhorOpcaoAlcoolStark && melhorOpcaoFinalGasolina == melhorOpcaoGasolinaWayne){ 

            percentual_Final = (melhorOpcaoFinalGasolina * (30/100)) + melhorOpcaoAlcoolStark;
                if(percentual_Final <= melhorOpcaoFinalGasolina){

                    alert(`${nomeUsuario}, melhor abastecer com o Alcool do Posto Stark`);

                }else{

                    alert(`${nomeUsuario}, melhor abastecer com a Gasolina do Posto Wayne`);
                    
                }
               }else if(melhorOpcaoFinalAlcool == melhorOpcaoAlcoolWayne && melhorOpcaoFinalGasolina == melhorOpcaoGasolinaStark){

            percentual_Final = (melhorOpcaoFinalGasolina * (30/100)) + melhorOpcaoFinalAlcool;
                if(percentual_Final <= melhorOpcaoFinalGasolina){

                    alert(`${nomeUsuario}, melhor abastecer com o Alcool do Posto Wayne`);

                }else{

                    alert(`${nomeUsuario}, melhor abastecer com a Gasolina do Posto Stark`);

                }

        }else if(melhorOpcaoAlcoolWayne < melhorOpcaoAlcoolStark){

            melhorOpcaoFinalAlcool = melhorOpcaoAlcoolWayne;

        }else if(melhorOpcaoAlcoolStark < melhorOpcaoAlcoolWayne){

            melhorOpcaoFinalAlcool = melhorOpcaoAlcoolStark;
            
        }else if(melhorOpcaoGasolinaWayne < melhorOpcaoGasolinaStark){ 

            melhorOpcaoFinalGasolina = melhorOpcaoGasolinaWayne;

        }else{

            melhorOpcaoFinalGasolina = melhorOpcaoGasolinaStark;
}
}

function aluguel_arCondicionado(){  // CALCULA O PREÇO DE MANUNTENÇÃO DE AR CONDICIONADO COM DESCONTO APLICAVEL E PARA MAIS DE UMA EMPRESA

    var menor_empresa;      //Variavel para armazenar a empresa que tiver o menor custo de serviço
    let menor_custo = 100000000000;     //Variavel para armazenar o menor custo da empresa, inicialmente ela armazena um alto valor para depois ser feita a comparação na condicional com operador logico e armazenar em seguida em valor abaixo e seguir fazendo a substituição por um valor menor

    let insercao_novosDados;      //Variavel para receber resposta do usuario para inserir novos dados ou não

    do{                           //Laço de repetição para repetir conforme a resposta do usuario, enquanto for "S" irá executar o laço se não deixa de executar

        let nome_empresa = prompt("Insira o nome da empresa:");         //Recebe o nome da empresa de manutenção

            if(nome_empresa == Number || nome_empresa == ""){       //Condicional para verificar dados recebidos do nome da empresa

                alert("Dado inválido. Tente novamente!");               //Exibe mensagem de erro
                aluguel_arCondicionado();                              //Chama a função que retorna para inserção de dados
                
            }

        let custo_porAparelho = parseInt(prompt("Insira o valor por aparelho:"));       //Recebe o valor de manuntenção por aparelho
            
            if(custo_porAparelho == "" || custo_porAparelho == NaN){      //Condicional para verificar dados recebidos do custo por aparelho

                alert("Valor inválido. Tente novamente!");                  //Exibe mensagem de erro
                aluguel_arCondicionado();                                  //Chama a função que retorna para inserção de dados

            }

        let qtdAparelhos = parseInt(prompt("Qual a quantidade de aparelhos?"));         //Recebe a quantidade de aparelhos que vão para manutenção

            if(qtdAparelhos == "" || qtdAparelhos == NaN){          //Condicional para verificar dados recebidos da quantidade de aparelhos

                alert("Valor inválido. Tente novamente!");           //Exibe mensagem de erro
                aluguel_arCondicionado();                           //Chama a função que retorna para inserção de dados

            }

        let porcentagem_desconto = parseInt(prompt("Qual a porcentagem de desconto?"));         //Recebe a porcentagem de desconto estipulada pelo usuario

            if(porcentagem_desconto == "" || porcentagem_desconto == NaN){          //Condicional para verificar dados recebidos da porcentagem de desconto

                alert("Valor inválido. Tente novamente!");        //Exibe mensagem de erro          
                aluguel_arCondicionado();                         //Chama a função que retorna para inserção de dados     

            }

        let qtdMinimaAparelho_desconto = parseInt(prompt("Qual a quantidade minima de aparelhos para desconto?"));      //Recebe quantidade minima de aparelho que vão para manuntenção para ser aplicado a porcentagem de desconto

            if(qtdMinimaAparelho_desconto == "" || qtdMinimaAparelho_desconto == NaN){          //Condicional para verificar dados recebidos da quantidade minima de aparelhos para desconto 

                alert("Valor inválido. Tente novamente!");          //Exibe mensagem de erro
                aluguel_arCondicionado();                           //Chama a função que retorna para inserção de dados

            }

        let custo_totalAparelho = custo_porAparelho * qtdAparelhos;         //Calculo de custo total da manuntenção de todos aparelhos

            if(qtdAparelhos >= qtdMinimaAparelho_desconto){                 //Condicional para verificar se é aplicavel o desconto

                custo_totalAparelho -= (custo_totalAparelho * (porcentagem_desconto/100));      //Calculo para apliacação do desconto

            }
        
        alert(`O serviço da ${nome_empresa} custará R$ ${custo_totalAparelho}`);            //Exibe para o usuario o nome da empresa e o custo total do serviço

            if(custo_totalAparelho < menor_custo){          //Condicional para verificar o menor custo

                menor_empresa = nome_empresa;               //Recebe o nome da empresa que possui o menor custo de serviço
                menor_custo = custo_totalAparelho;          //Recebe o valor de menor custo de serviço

            }

        insercao_novosDados = prompt("Deseja informar novos dados? (S/N)");         //Exibe um prompt para usuario perguntando se deseja inserir novos dados

            while(insercao_novosDados != "S" || insercao_novosDados != "N"){       //Laço de repetição para verificar dados da resposta de novos dados e receber uma resposta valida, enquanto não for enviada uma resposta valida o laço continuara executando

                alert("Dado inválido. Se deseja inserir novos dados digite 'S', se não digite 'N' ");       //Exibe uma mensagem de erro com uma orientação ao usuario
                insercao_novosDados = prompt("Deseja informar novos dados? (S/N)");             //recebe uma nova resposta

            }

            }while(insercao_novosDados == "S")          //Laço de repetição verifica a resposta do é "S" e repete todo processo, do contrario finaliza e sai do laço

            alert(`O orçamento de menor valor é o de ${menor_empresa} por R$ ${menor_custo}`);          //Exibe para o usuario o orçamento da empresa de menor custo
            
        }

    function sair() {
        alert("Sair")
        if (confirm("Deseja sair?")) {
            window.close();
        }
    }
   
    inicio_validacao();
    inicio_hotel();

    </script>
</body>
</html>
