import { Service } from "typedi";
import * as mysql from "mysql";
import { reject } from "bluebird";

@Service()
export class DBManager {
    private connectionPool: any;
    constructor(){
        this.connectionPool = mysql.createPool({
            // Database Properties 
        });
    }
    public async executeQuery(query: string, params?: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.connectionPool.getConnection(function(err: mysql.MysqlError, connection: mysql.PoolConnection){
                if(err) {
                    reject(err);
                } else {
                    connection.query(query, params, function(err, rows) {
                        connection.release();
                        if(err) {
                            reject(err);
                        }else {
                            resolve(rows);
                        }
                    });
                }
            });
        });
    }
}