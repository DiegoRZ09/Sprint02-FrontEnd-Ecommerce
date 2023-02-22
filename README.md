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

- Si presionamos en la etiqueta "Ver producto" en cada uno de los productos listados, podemos ver a detalle su información y en la parte de abajo listará productos
  que compartan la misma categoría.

<div align="center">
  <img src="https://user-images.githubusercontent.com/112449858/220497688-010de3a6-6a75-4f4a-a9d3-ced53abdacc4.JPG" width="600">
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

- En la pantalla anterior hay un botón "Agregar producto", al presionarlo nos va a mandar a la siguiente pantalla en la que encontraremos un formulario para llenar
  todos los datos correspondientes a un nuevo producto, en el campo "URL de la imagen" podemos ingresar cualquier ruta para darle una imagen al nuevo producto.
  Llegado a éste punto, si no te haz dado cuenta, todos los campos de formulario están validados por medio de Expresiones Regulares (RegEx), por lo que, si está mal
  algún dato en algún campo, no nos dejará continuar con el proceso.
  
  Para continuar y agregar el producto nuevo, solo presionamos el botón "Agregar Producto", una vez hecho ésto, toda la información del nuevo producto se guarda en 
  el archivo db.json para poder después ser utilizada dinámicamente. En éste proceso es cuando se usa el método CREATE de CRUD. La página se queda en la misma
  pantalla para que sigamos agregando productos en caso de que así lo deseamos, de lo contrario, presionando el botón "Menú Administrador", en la parte de arriba,
  podemos volver a la pantalla a la que accedimos una vez logeados.
  
<div align="center">
  <img src="https://user-images.githubusercontent.com/112449858/220478206-7d590fd8-ec2a-4e38-81d6-415439063f2b.JPG" width="700">
</div>
<br> <br>

- Prueba de que ya se agregó el producto que recién creamos, aparece listado al final:
 
<div align="center">
  <img src="https://user-images.githubusercontent.com/112449858/220478222-c2caf2b0-26f8-4727-b35e-e47658bc7336.JPG" >
</div>
<br> <br>

- Como se puede observar, sobre cada una de las imágenes de los productos en el menú de administrador hay dos íconos, uno de un lápiz y otro de contenedor de basura,
  ambos para editar y eliminar respectivamente dicho producto. Si presionamos el lápiz, nos envía a una pantalla donde, como se acabda de mencionar, se puede editar
  la información de dicho producto, rellenando previamente los campos con la información contenida en el archivo db.json correspondiente al # de id del producto, en
  el ejemplo siguiente, cambiamos la imagen y el precio.
  
<div align="center">
  <img src="https://user-images.githubusercontent.com/112449858/220478239-bb47af0e-04ae-4043-90e1-91cd0883c9e2.JPG" >
</div>
<br> <br>

- Una vez presionado el botón de "Actualizar Producto" nos regresa a la pantalla del menú de administrador para poder visualizar los cambios hechos en caso de ser
  posible (digo en caso de ser posible porque si modificaramos la descripción del producto, ésta no se puede ver en éste apartado). Aquí ya se realiza el método
  UPDATE del CRUD.
  
<div align="center">
  <img src="https://user-images.githubusercontent.com/112449858/220478253-a71978d0-b599-4ac4-a2cc-b360149238e7.JPG" >
</div>
<br> <br>

- Y si presionaramos el icono del contenedor de basura, se elimina el producto del archivo db.json, por lo que ya estaríamos ejecutando el último método del
  CRUD que sería DELETE.
  
- En el pie de página en cada una de las pantallas con las que tenemos interacción, hay un formulario en el cual podemos guardar un mensaje que los clientes envíen y
  se guardan en el archivo db.json como si se tratara de un producto, solo que lo guarda en un Array de "mensajes". Esto es interesante, ya que si solicitaramos 
  algún dato de contacto, también podría guardarse para crear una base de datos de clientes. También el formulario de mensajes en ésta sección tiene su validación
  para evitar que se ingrese algún texto irrelevante.

<div align="center">
  <img src="https://user-images.githubusercontent.com/112449858/220478265-28941097-b09b-4d1f-913c-2343fafddb9f.JPG" >
</div>
<br> <br>

- Por último en esta sección cabe mencionar que la página es de diseño responsive, por lo que puede adaptarse al tamaño de la pantalla de diversos dispositivos móviles 
  o de escritorio.

<div align="center">
  <img src="https://user-images.githubusercontent.com/112449858/220478276-146b9004-d93d-416b-890f-9f866de7979c.JPG" >
</div>
<br> <br>


## :open_file_folder: :rocket: Abre y ejecuta el proyecto

Se puede obtener una vista previa de la página ingresando al siguiente enlace:

https://diegorz09.github.io/Sprint02-FrontEnd-Ecommerce/

Sin embargo, no podrá mostrarse el contenido de los productos ya que está guardado en el archivo db.json dentro de éste repositorio, y hay que hacer una serie de pasos
(los cuales voy a listar a continuación) para poder conectarse a ese Fake API y obtener dicha información, entonces, para poder visualizar el contenido del proyecto
haremos lo siguiente:

- Descargar todo el contenido de éste repositorio y almacenarlo todo junto en una carpeta o directorio nuevo.
- Debemos tener instalado Node.js, si no lo tienes puedes descargarlo del siguiente enlace. Es recomendable instalar la versión LTS que es la mas estable
  hasta el momento:
  
  https://nodejs.org/es/
  
- Después de la instalación, abrimos la terminal y escribimos el siguiente comando:

      node -v
  
  Esto es para confirmar la versión de node que instalamos.
- También debemos tener instalado Node Package Manager, podemos corroborarlo con el siguiente comando:

      npm -v
- Ahora, abrimos en nuestro Visual Studio Code la carpeta donde está todo el proyecto y aquí mismo abrimos una terminal, verificando que sea la ruta correcta
  donde está guardado el proyecto, o también podemos ingresar la ruta de forma manual en una terminal aparte. Ya una vez dentro ejecutamos el comando:
 
      npm install -g json-server
      
  Este comando es para crear esa Fake API, NO creamos el archivo json ni el package porque ya están en el proyecto, de hecho el comando anterior solo es para
  asegurar que se cree esa API en su equipo.
  
- Por último en esa misma terminal ingresamos ahora éste comando:

      json-server --watch db.json

- Si sale en la terminal un mensaje como el siguiente, es que la conexión se realizó de manera correcta:

<div align="center">
  <img src="https://user-images.githubusercontent.com/112449858/220508336-726d63d7-c11a-491a-baf1-3de5496477c3.JPG" >
</div>
<br>

- Ya solo para visualizar el proyecto, desde tu editor de texto que estés ocupando corre el index.html y !Voilá! Que lo disfrutes 😄


## :heavy_check_mark: Tecnologías aplicadas
    
    - HTML5
    - CSS3
    - JavaScript
    - Node.js
    - NPM
    - JSON SERVER
    
    
## Autores

  | [<img src="https://avatars.githubusercontent.com/u/112449858?s=400&u=6df892a92a87cc656d44f9ecdb9333dc404d5c6e&v=4" width=115><br><sub>Diego Reyes</sub>](https://github.com/DiegoRZ09) |
  | :---: |


 


