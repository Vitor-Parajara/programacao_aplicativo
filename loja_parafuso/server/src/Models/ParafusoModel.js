import mysql from "mysql2"
import config from "../Config.js";

class ParafusoModel {
    constructor() {
        this.conexao = mysql.createConnection(config.db);
    }

    create(nome) {
        let sql = `INSERT INTO parafusos (nome) VALUES("${nome}");`;
        
       return new Promise((resolve,reject)=>{
        this.conexao.query(sql,(erro,retorno)=>{
            if(erro){
                reject([400,erro])
            }
            resolve([201,"Parafuso Adicionado"])
        })
       });
    
    }

    read() {
        let sql = `SELECT * FROM parafusos;`
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    reject([400,erro])
                }
                resolve([200,retorno])
            })
        });
    }

    update(id_parafuso, nome) {
        let sql = `update parafusos set nome="${nome}" where id_parafuso = "${id_parafuso}"`

        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    reject([400],erro)
                }else if(retorno.affectedRows>0){
                    resolve([200],retorno)
                }else{
                    resolve([404],"Parafuso não encontrado")
                }
                
            })
        });
    }

    delete(index) {
        let sql = `delete from parafusos where id_parafuso = "${id_parafuso}"`

        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    reject([400],erro)
                }
                resolve([200],retorno)
            })
        });
    }
}

export default new ParafusoModel();