import express from "express";
//Fix para _dirname
import path from 'path';
import {fileURLToPath}  from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

//Server configuracion
const app = express();
app.set("port",4000);
app.listen(app.get("port"));
console.log("Servidor corriendo en el puerto",app.get("port"));

//Configuracion con esta se enlaza el css
app.use(express.static(__dirname+"/public"))

//para que el puerto 4000 muestre algo de lo del backend
//Rutas (Se hacen EndPoints)
app.get("/",(req,res)=> res.sendFile(__dirname + "/pages/login.html"));
//direccion para la pagina de registro
app.get("/register",(req,res)=> res.sendFile(__dirname + "/pages/register.html"));
//direccion para la pagina de registro
app.get("/admin",(req,res)=> res.sendFile(__dirname + "/pages/admin/admin.html"));

