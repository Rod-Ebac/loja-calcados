// $(function(){
//     $('form').validate({
//         rules:{
//             nome: {
//                 required: true
//             },
//             telefone: {
//                 required: true
//             },
//             email: {
//                 required: true,
//                 email: true
//             },
//             mensagem:{
//                 required: true
//             }
//         },
//         messages:{
//             nome: 'Nome é obrigatório'
//         },
//         submitHandler: function(form){
//             console.log(form);
//         },
//         invalidHandler: function(events, validador){
//             let camposIncorretos = validador.numberOfInvalids();

//             if(camposIncorretos){
//                 alert(`Existem ${camposIncorretos} campos incorretos.`)
//             }
//         }
//     });

// });