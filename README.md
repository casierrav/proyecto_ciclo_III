# Proyecto de Ciclo III
Para el proyecto del Ciclo III hay varias cosas a tener en cuenta.

## Gestión del Proyecto
Recuerde usar Trello, crear todo con el template de Kanban en [este link](https://trello.com/templates/engineering/kanban-template-LGHXvZNL).

Organice bien las tareas de todo el proyecto en el backlog, estime cuál cree debería ser el ojetivo de cada __sprint__, priorice las tareas, y calcule la medida del esfuerzo usando algún sitio web gratuito para el Planning Poker.

Asigne las tareas por sprint de acuerdo al esfuerzo máximo por cada integrante, haga los dailly (reunión diaria de 15 minutos), y asegurese que el proyecto avance a buen ritmo.

## Arquitectura del Proyecto
Defina una buena arquitectura de software, la cual estará bien fundamentada si hace lo siguiente:
1. Defina el modelo entidad-relación, y la mejor definición del modelo de datos completo. De esta manera, tendrá una excelente base para el desarrollo de capas.
2. Defina diseños (mockups) de las interfaces gráficas de su proyecto, que sean coherentes con el modelo de datos y los requerimientos que ha definido para su proyecto. Esto le ayudará a validar rápidamente dichos requerimientos con el usuario final, y a tener claro que es lo que debe tener al final del proyecto en términos de funcionalidades.
3. Defina los componentes que va a tener su proyecto, agrupando correctamente funcionalidades, y definiendo cuales de los diseños de interfaz gráfica y de las partes del modelo de datos quedan relacionadas con cada componente.
4. Cree su repositorio en Github. Defina cómo lo van a trabajar, bien va a hacer la revisión de códigos y a aprobar los Pull Request (PR). Quien aprueba los PR normalmente es quien hace los merge (agregar) la rama al main (o rama principal).
5. Recuerde en las tareas de Trello siempre colocar sus avances a diario, mantener informado a todo el equipo, y recordar que un proyecto es una responsabilidad compartida.
6. Defina los diagramas de despliegue, donde quede clara la arquitectura de servidores, componentes de front-end y back-end, y cuáles van a ser sus entorno de desarrollo y de producción.

## Motivación
Como grupo, han ido adquiriendo de forma bastante intensiva muchos conocimientos técnicos acerca de desarrollo, frameworks, bases de datos, lenguajes de programación, y demás. Ahora, es momento de seguirle dando orden a todos esos conceptos para lograr proyectos como los que va a enfrentar en la realidad de la industria de desarrollo de software.

Normalmente un buen diseño, una buena planeación, un buen manejo del equipo de trabajo, se considera más importante que las habilidades técnicas por si mismas...tenga paciencia, y recuerde que el equipo de trabajo no es para echar culpas ni subestimar a los demás, es para ayudarse entre todos a ser mejores, y lograr una meta común.

## Comandos de GIT
A continuacuón se mencionan los comandos más regulares de GIT para cada tarea:

### Clonación inicial del Proyecto (computador personal o servidor)
```
git init
git remote add origin link_github
git fetch
git pull origin main
```

Para configurar las credenciales de su usuario de GitHub, agregue la siguiente línea. La primera vez que haga un push, usted deberá ingresar el usuario y contraseña de Github, y para el proyecto nunca más le serán solicitadas.
```
git config credential.helper store

```

### Subir cambios realizados (solo desde el computador personal)
Para verificar cuales archivos han sido modificados, pero que aún no se han subido al repositorio puede utilizar:
```
git status
```

Para subir uno o varios archivos puede hacer la siguiente secuencia:
```
git add archivo_1
git add archivo_2
...
git commit -m "Mensaje que explique el cambio"
git push origin nombre_rama
```

### Descargar los últimos cambios del repositorio (computador personal o servidor)
Para bajar los cambios de una rama específica, puede usar el siguiente comando:
```
git pull origin nombre_rama
```

Si desea bajar todos los cambios asociados a todas las ramas, puede utilizar esto:
```
git fetch
```

### Comandos de GIT adicionales
```
git log
```

```
git rebase
```

