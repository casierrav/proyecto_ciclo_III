# FrontEnd de Cajero
El front de este ejercicio está siendo hecho con Vue.js. Para instalarlo debe prestar atención a las siguientes indicaciones:

## Pre-requisitos
1. Tener instalado Node.JS (se recomienda una versión 12 o superior). Para verificar si lo tiene instalado, puede usar el siguiente comando:
```
node --version
```
2. Tener RPM que es el manejador de paquetes de Node.js, instalado:
```
npm --version
```

# Instación de Vue.JS
Si usted está en Windows, debe abrir una ventana del Línea de Comandos como Adminsitrador, para asegurarse que no tenga problemas de permisos.
En una carpeta definida para el front-end de la aplicación debe hacer la ejecución de los comandos presentados a continuación.

Para instalar y configurar Vue.js, debe ejecutar lo siguiente:
- Linux (si genera fallas, debe intentarlo dos veces):
```
sudo npm install -g @vue/cli
sudo npm i -g @vue/cli-init
```
- Windows:
```
npm install -g @vue/cli
npm install -g @vue/cli-init
```

Para verificar que Vue esté correctamente instalado, puede usar el siguiente comando:
```
vue --version
```

Ahora, para crear el proyecto a trabajar, utilice el siguiente comando:
```
vue init webpack cajero_app
```

Ahora, vaya adentro de la carpeta nueva que se ha creado, con el mismo nombre del proyecto (en este caso __cajero_app__):
```
cd cajero_app
```

Estando allí, ejecute el comando de corrección de proyectos de Node.JS, solo para verificar que dependencias y configuraciones estén lo mejor ajustadas posible (si está en Linux debe colocar __sudo__ al inicio):
```
npm audit fix
```

Llisto, ya su proyecto se encuentra creado, y configurado de la mejor manera posible para que pueda empezar a trabajar.
Sigua las instrucciones del material de clase, y podrá llegar a tener el mismo contenido que se encuentra en la carpeta __cajero_app__. 

Para ejecutar, y verificar esto, estando unicado en la carpeta __cajero_app__, es decir donde se han ejecutado los últimos comandos, ahora debe colocar el siguiente comando:
```
npm run start
```

Este le mostrará en cual puerto del localhost está corriendo la aplicación (tradicionalmente es 8080, pero en algunos casos se conecta al 8081), y puede ir al navegador usando la dirección correcta para ver el resultado del ejercicio.
