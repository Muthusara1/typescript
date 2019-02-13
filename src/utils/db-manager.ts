import { Service } from "typedi";
import * as mysql from "mysql";
import { reject } from "bluebird";

@Service()
export class DBManager {
    private connectionPool: any;
    constructor(){
        this.connectionPool = mysql.createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            connectionLimit: process.env.DB_CONNECTION_LIMIT
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