# Tarea FINAL

## ¿Qué se busca evaluar?

- Diseño de la interfaz de usuario usando la herramienta penpot.app.

- Componentes en angular maquetados con base en el diseño anterior.

- Desarrollo del backen-usando PHP/LARAVEL

### Entregable

Se evaluará el último día de clase el desarrollo de la Actividad.

#### Mínimo entregable

- Un CRUD funcional con Angular PHP/LARAVEL o la lista completa de casos de uso del ejercicio planteado.
- El código desarrollado se debe publicar en github/gitlab.
- Incluir en el código desarrollado un Readme.md personalizado con información que considere pertinente.
- El enlace al repositorio de Git se debe de entregar al correo [msc.jaime](msc.jaime@outlook.com).

#### Adicional

- Test.
- Dockerfile (despliegue en local usando Docker compose.).
- Tipografía y paleta de colores (Incluir en código desarrollado).
- Generación de PDF y CSV/EXCEL.
- Prototipo funcional con todos los casos de uso.
- Autenticación.

## Ejercicio

Se desea administrar el acceso de vehículos a un estacionamiento de pago. El estacionamiento no se encuentra automatizado, por lo que existe un empleado encargado de registrar las entradas y salidas de vehículos.

Los vehículos se identifican por su número de placa. Cuando un vehículo entra en el estacionamiento, el empleado registra su entrada y al salir registra su salida y, en algunos casos, cobra el importe correspondiente por el tiempo de estacionamiento.

El importe cobrado depende del tipo de vehículo:

- Los vehículos oficiales no pagan, pero se registran sus estancias para llevar el control. (Una estancia consiste en una hora de entrada y una de salida)

- Los residentes pagan a final de mes a razón de $0.02 USD el minuto. La aplicación irá acumulando el tiempo (en minutos) que han permanecido estacionados.

- Los no residentes pagan a la salida del estacionamiento a razón de $0.2 USD por minuto.
Se prevé que en el futuro puedan incluirse nuevos tipos de vehículos, por lo que la aplicación desarrollada deberá ser fácilmente extensible en ese aspecto.

### Casos de uso

A continuación se describen los casos de uso. No se entra en detalles de la interacción entre el empleado y la aplicación (punto 1 de cada caso de uso), puesto que no va a ser tarea de este ejercicio desarrollar esa parte.

#### Caso de uso "Registra entrada"

1. El empleado elige la opción "registrar entrada" e introduce el número de placa del coche
que entra.

2. La aplicación apunta la hora de entrada del vehículo.

#### Caso de uso "Registra salida"

1. El empleado elige la opción "registrar salida" e introduce el número de placa del coche
que sale.

2. La aplicación realiza las acciones correspondientes al tipo de vehículo:

- Oficial: asocia la estancia (hora de entrada y hora de salida) con el vehículo.

- Residente: suma la duración de la estancia al tiempo total acumulado.

- No residente: obtiene el importe a pagar

#### Caso de uso "Da de alta vehículo oficial"

1. El empleado elige la opción "dar de alta vehículo oficial" e introduce su número de placa.

2. La aplicación añade el vehículo a la lista de vehículos oficiales

#### Caso de uso "Da de alta vehículo de residente"

1. El empleado elige la opción "dar de alta vehículo de residente" e introduce su número de placa.

2. La aplicación añade el vehículo a la lista de vehículos de residentes.

#### Caso de uso "Comienza mes"

1. El empleado elige la opción "comienza mes".

2. La aplicación elimina las estancias registradas en los coches oficiales y pone a cero el tiempo estacionado por los vehículos de residentes.

#### Caso de uso "Pagos de residentes"

1. El empleado elige la opción "genera informe de pagos de residentes" e introduce el nombre del archivo en el que quiere generar el informe.

2. La aplicación genera un archivo que detalla el tiempo estacionado y el dinero a pagar por cada uno de los vehículos de residentes. El formato del archivo será el mostrado a continuación:

```Formato
Núm. placa Tiempo estacionado (min.) Cantidad a pagar S1234A 20134 1006.70 4
567ABC 4896 244.80 ... ..... .....
```

### Nota

Puede desarrollar los CRUD que considere pertinente. Por ejemplo, el CRUD para gestión de los vehículos.
