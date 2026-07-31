const express = require("express");
const router = express.Router();
 
router.get("/", (req, res)=>{
      res.render("pages/index",{"resultado":null,"valores":{"Dia correspondente":"digite um numero"}});  
});
 
 
router.post("/classificar", (req, res)=>{
 
    let numero = parseInt(req.body.numero);
 
    if(numero == 1){
        var categoria = "Domingo";
    } else if(numero == 2 ){
        var categoria = "Segunda-feira";
    } else if(numero == 3){
        var categoria = "Terça-Feira";
    } else if(numero == 4 ){
        var categoria = "Quarta-feira";
    }else if(numero == 5 ){
        var categoria = "Quinta-feira";
    }else if( numero == 6){
        var categoria = "Sexta-feira"
    }else if( numero == 7){
        var categoria = "Sábado"
    }else{
        var categoria = "Valor inválido"
    }
 
    let objJson = {"categoria":categoria}
 
    res.render("pages/index", {"resultado":objJson,"valores":{"dia":req.body.numero}})
 
});
 
 
module.exports = router;
 