### Los controllers!! (Capa de presentacion)
- Son objetos usados para no repetir logica, son mediadores
- Responsabilidad very important:Transforma o adapta el mundo rest al mundo
de mi dominio
- Son objetos del tipo aPlatoRest o dePlatoRest, es decir pasa de algo del dominio a algo rest 
o de algo rest a algo del dominio

### Los services!!! (Capa de aplicacion)
- Son los orquestadores, no transforman.
- Dirigen y ordenan una colaboracion entre otros objetos, es decir orquestar el caso de uso
- A veces los servicios y controllers son la misma cosa
- Instancia los objetos de dominio, les habla y pide cosas
- A veces estan a veces no. Depende si hay mucho para hacer en el caso de uso
- NO ROMPEN ENCAPSULAMIENTO, USO LO QUE YA ESTA

### DTO (Data Transfer Object)
- Usado por los controllers
- Comanda rest: DTO data transfer object, esta en el controller, tiene que
mapear a clase de dominio lo q me dan en json. Esto es responsabilidad del **controller**
hace que la representacion de mi dominio coincida con la de mi rest

### Los query params 
- Viven en req.query
- No estan en la ruta, o sea en el app.post no pongo los query params sino q los uso desde el controller directmanete
- Los mando cuando hago el post o lo q sea desde postman