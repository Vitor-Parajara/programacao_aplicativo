import { response } from "express";
import ParafusoModel from "../Models/ParafusoModel.js";

class ParafusoController {
    constructor() {
    }

    create(req, res) {
        const nome = req.body.nome;
        ParafusoModel.create(nome).then(
            resposta => {
                console.debug("Inserindo Parafuso");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("ERRO: Inserindo Parafuso");
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    read(req, res) {
        ParafusoModel.read().then(
            resposta => {
                console.debug("Mostrando Parafusos")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("ERRO: Mostrando Parafusos")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    update(req, res) {
        const id_parafuso = req.params.id_parafuso;
        const nome = req.body.nome;

        ParafusoModel.update(id_parafuso,nome).then(
            resposta => {
                console.debug("Atualizando Parafusos");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("ERRO: Atualizando Parafusos");
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    delete(req,res){
        const id_parafuso = req.params.id_parafuso;
        
        ParafusoModel.delete(id_parafuso);
        res.status(200).json("Parafuso Deletado");
    }
}

export default new ParafusoController();