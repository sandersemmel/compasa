import * as mysql from 'mysql';
import { ENUM } from './util/magicstrings.js';
const DISCONNECTED = 'disconnected';


// lol at this require
import { v4 as uuidv4 } from 'uuid';


var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'admin',
    password : 'yourpass',
    database : 'teradata'
  });



export async function createUser(){
    let created = await getCurrentDate();
    let key = await uuidv4();
    let sql = `INSERT INTO USER (key,created) VALUES (${key}, "${created}")`;

    return "something returend"

}


export async function getKey(){
    let sql = "SELECT * FROM USER"
    connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results[0].solution);
      });

    
}

export async function test(){
    let sql = "SELECT * FROM USER";
    return runQuery(sql);
}


export async function jestFunction(num1, num2){
    return num1 + num2;
}




export async function isConnected(){
    //'connected' | 'authenticated' | 'disconnected' | 'protocol_error'

    if(connection.state == ENUM.DATABASE_CONNECTION_STATUS_CONNECTED || 
        connection.state == ENUM.DATABASE_CONNECTION_STATUS_AUTHENTICATED){
        return true;
    }

    return false;
}


// PRIVATE STUFF


async function connect(){

    return new Promise((resolve,reject)=>{
        connection.connect((error,args)=>{
            if(error){
                console.error("OOPS, error connecting to MYSQL!", error)
                reject(ENUM.NOT_CONNECTED_TO_DATABASE)
            }else{
                console.log(ENUM.CONNECTED_TO_DATABASE)
                resolve(ENUM.CONNECTED_TO_DATABASE)
            }     
        })
    })

}

async function endConnection(){
    return new Promise((resolve,reject)=>{
        if(connection.state == ENUM.DATABASE_CONNECTION_STATUS_DISCONNECTED){
            return resolve(ENUM.DATABASE_CONNECTION_ALREADY_CLOSED_BRO);
        }

        connection.end((error)=>{
            if(error){
                console.error("error with closing connection", error);
                return reject(ENUM.ERROR_CLOSING_CONNECTION_TO_DB);
            }
            console.log("Successful close connection")


        });
        return resolve(ENUM.SUCCESSFUL_CLOSE_OF_CONNECTION_TO_DB)
    })

}


async function runQuery(query){
    try {
        let isConn = await isConnected();
        if(!isConn){
            await connect();
        }
        let queryStatus = await actuallyRunQuery(query); 
        return (queryStatus === ENUM.SUCCESSFUL_QUERY)

    } catch (error) {
        return false;
    } finally {
        //let endConnectionStatus = await endConnection();
    } 
}

async function actuallyRunQuery(query){


    return new Promise((resolve,reject)=>{

            console.log("About to run QUERY: ", query)
            connection.query(query,async (error,results,fields)=>{
                if(error){
                    console.error("There was an error with the query", error);
                    reject(ENUM.ERROR_WITH_RUNNING_QUERY)

                }

                //let endConnectionStatus = await endConnection();

                return resolve(ENUM.SUCCESSFUL_QUERY);
        
            })
       
    })
}

async function getCurrentDate(){
    return new Date();
}