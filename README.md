<h1 align="center"> Sprint 02 FrontEnd - Alura Geek (E-Commerce)</h1>

<br>
<div align="center">
  <img src="https://user-images.githubusercontent.com/112449858/220230904-ff71c07e-42de-4ebe-bb62-25ec9bc65745.svg">
</div>
<br>
<br>

Alura Geek es un E-Commerce en el cual se pueden encontrar productos que como el nombre del proyecto lo dice, cumplen una temática "geek", podemos encontrar
desde consolas de videjuegos hasta artículos coleccionables tales tazas, figuras de acción, etc. 

Este proyecto es el 2do de la ruta de Front-End y es el mas ambicioso, ya que constó de dos etapas. En la primera se realizaron las maquetas o "pantallas" de
como es que iba a lucir el sitio web una vez ya estuviera en funcionamiento, para ello se tomaron en cuenta todos los conocimientos adquiridos hasta ese momento
en HTML, CSS y JavaScript. En la segunda etapa, para que el proyecto tomara mas forma, todos los elementos que se pueden visualizar en el sitio son tomados de 
forma dínamica usando los métodos CRUD de un archivo json, el cual funge como una base de datos.

## :hammer:Funcionalidad del proyecto

<div align="center">
  <img src="">
</div>

<div align="center">
  <img src="https://user-images.githubusercontent.com/112449858/220478002-f5da1281-ae75-4f3c-b714-361e4c8d0392.JPG">
</div>
<br>

- La pantalla principal del proyecto luce como una tienda online la cual tiene el siguiente aspecto y todos los productos que uno puede visualizar en ella, están
  ordenados por categoría según el tipo de producto, tal como lo muestra la siguiente imagen:

<div align="center">
  <img src="https://user-images.githubusercontent.com/112449858/220478098-60025bb2-17b8-4ed0-9cfc-a51c1854f8d5.JPG" width="600">
</div>
<br> <br>

- Desde el comienzo, es necesario hacer énfasis en que ya se está utilizando los métodos de CRUD. En este apartado el método en particular que se está ejecutando
  es READ, ya que está trayendo toda la información de un archivo de tipo "json". Conectando con éste "Fake API" es como traemos a la pantalla todo el contenido
  de los productos que estamos visualizando, ya que ninguna información de ellos está en el código HTML de la página.
  
<div align="center">
  <img src="https://user-images.githubusercontent.com/112449858/220481097-cbb67aad-33e0-4d43-81d1-34bd480526d9.JPG" width="700">
</div>
<br> <br>

- Pareciera que la página solo es una que permite a los clientes hacer compras, sin embargo, también brinda al administrador(es) modificar el contenido de los 
  productos que se muestran en ella, para tener acceso a ello, en la esquina superior derecha de la pantalla principal, al lado de la barra de búsqueda, hay
  un boton "Login", el cuál nos dirige a una nueva pantalla, la cual tiene un formulario en el que debemos ingresar un usuario y una contraseña. Por motivos
  de practicidad, decidí colocar estas credenciales a la vista en el mismo campo que va a ser llenado como un "placeholder". Por lo que los datos serían:
  
      - Usuario: user@correo.com
      - Contraseña: 12345678
  
  Ingresamos las credenciales en los campos correspondientes y presionamos el botón de "Entrar".
  
<div align="center">
  <img src="https://user-images.githubusercontent.com/112449858/220478142-b1dffb36-b24f-4384-b201-e3cd7e610f98.JPG">
</div>
<br> <br>

- Una vez dentro, nos mostrará una pantalla de "Administrador", en la que podremos visualizar absolutamente todos los productos que han sido creados y que el
  cliente puede ver en la pantalla principal, sólo que están ordenados tal y como están listados en el archivo db.json, es decir, por orden de #Id. En ésta pantalla
  también existe un botón que nos permite agregar un producto nuevo.
  
<div align="center">
  <img src="https://user-images.githubusercontent.com/112449858/220478172-6dc89b92-0ab8-430c-a6ef-0928c1fead19.JPG" width="700">
</div>
<br> <br>
 





![productos]()
![agregar producto](https://user-images.githubusercontent.com/112449858/220478206-7d590fd8-ec2a-4e38-81d6-415439063f2b.JPG)
![nuevo producto](https://user-images.githubusercontent.com/112449858/220478222-c2caf2b0-26f8-4727-b35e-e47658bc7336.JPG)
![editando](https://user-images.githubusercontent.com/112449858/220478239-bb47af0e-04ae-4043-90e1-91cd0883c9e2.JPG)
![actualizado](https://user-images.githubusercontent.com/112449858/220478253-a71978d0-b599-4ac4-a2cc-b360149238e7.JPG)
![pie](https://user-images.githubusercontent.com/112449858/220478265-28941097-b09b-4d1f-913c-2343fafddb9f.JPG)
![movil](https://user-images.githubusercontent.com/112449858/220478276-146b9004-d93d-416b-890f-9f866de7979c.JPG)
