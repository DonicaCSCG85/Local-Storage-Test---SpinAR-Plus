# Local-Storage-Test---SpinAR-Plus
A simple app for a test

INSTRUCCIONES DE USO:

Se trata de una app sencilla en donde se crean tareas o items en un espacio del Localstorage asignado llamado "items".
Para crear un item, debe ingresar el título y la descripción y a continuación se muestra el item creado, con la opción de
mostrar la descripción más detallada y de eliminar el item.

Lógicamente, al ser un proyecto local, se debe inicializar con el comando ng serve, el proyecto está alojado en el puerto 4200.

OBSERVACIONES:

La implementación de un Socket por medio de Socket IO presentó errores, está hecha pero por incompatibilidades se descartó al último momento. Para que un item creado
aparezca en otras pestañas, tendrá que actualizarse el sitio.

La función de eliminar presentó error al iniciar por primera vez el programa, no lo volvió a presentar. En caso de presentarse de nuevo, detener y ejecutar nuevamente ng serve.