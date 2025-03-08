import mongoose from 'mongoose'
import { dbName } from '../constant.js'

export const db_connect  = async()=>{
    try {
        const connect = await mongoose.connect(`${process.env.DB_URI}/${dbName}`)
        if (connect) {
            console.log("Database connected sucessfuly")
        } else {
            console.log("Database connected Failed")
        }
    } catch (error) {
        console.log.error(error)
    }
}