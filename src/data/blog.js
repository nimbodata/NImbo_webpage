export const posts = [
  {
    slug: 'conciliacion-bancaria-automatica-ia-pyme',
    title: 'Conciliación bancaria automática con IA para pymes argentinas: qué se cruza solo y qué revisa una persona',
    description:
      'Cómo cruzar todos los días los extractos del banco y de Mercado Pago con tu sistema, marcar solo las diferencias y dejar registro. Qué ofrecen Tango, Xubio y Colppy.',
    date: '2026-11-23',
    category: 'Automatización & IA',
    readTime: '14 min',
    content: `
## Respuesta corta

Sí, en parte. Se pueden traer los movimientos del banco y los reportes de Mercado Pago, cruzarlos con lo cargado en el sistema de gestión y dejar que una persona revise solo las diferencias, con un registro de cada match y de cada excepción. Sistemas como Tango, Xubio y Colppy ya ofrecen conciliación bancaria en su documentación oficial; Mercado Pago publica reportes (panel o API) pensados para conciliar con el sistema de gestión. La IA no reemplaza esa revisión cuando el importe no cierra, hay un contracargo o hay que crear un asiento.

**Puntos clave**

- Lo que coincide en fecha, importe y referencia se puede marcar conciliado, con registro. Va a revisión lo que no mata, una comisión no cargada, un contracargo o una transferencia entre cuentas.
- Mercado Pago no es un banco, pero sus reportes oficiales sirven para conciliar. El neto, las comisiones y los retiros no son lo mismo que el total de las ventas.
- Tango, Xubio y Colppy ya tienen conciliación bancaria, según sus páginas oficiales. El hueco suele estar en Mercado Pago, en las cuentas que no entran solas y en qué se aprueba.
- Nadie deja que la herramienta cree o borre asientos sensibles sin que alguien lo vea.

¿Querés ver cómo está hoy tu conciliación y qué parte se puede cruzar con controles? Lo vemos en un **[diagnóstico de 20 minutos, sin cargo](/diagnostico)**.

## Qué es conciliar en una pyme que cobra por banco y por Mercado Pago

El problema no es tener un extracto: es no enterarte de las diferencias a tiempo. En una pyme argentina la plata casi nunca está en un solo lugar. Hay una o varias cuentas bancarias y, casi siempre, Mercado Pago. En el sistema de gestión están las cobranzas, los pagos y las comisiones que se cargaron y las que no. Conciliar es cruzar esas fuentes, marcar lo que cierra y dejar que una persona mire solo lo que no cierra, con un registro. Hoy eso suele hacerse a mano, cerca del cierre, y las diferencias aparecen tarde.

El 20 de noviembre de 2026, [TIVIT Latam](https://latam.tivit.com/prensa/de-la-consulta-al-trabajo-las-tareas-que-las-pymes-ya-se-animan-a-hacer-con-ia-para-ser-m%C3%A1s-productivas) publicó una nota, a cargo de Marjorie Guerra, Gerente Digital Studios, sobre las tareas en las que las pymes ya se animan a usar IA. Una de las cinco que lista es **comparar información de distintas fuentes para encontrar diferencias o inconsistencias**. Como ejemplo, describe la conciliación: la IA puede hacerse cargo de *parte* de esa tarea, cruzar movimientos bancarios con registros contables, detectar diferencias y señalar cuáles requieren revisión. La persona interviene sobre esos casos. Ese listado es el recorte de TIVIT, no de la encuesta que cita.

El dato de adopción viene de [nadIA](https://nadia.ar/investigacion/encuesta-pymes.html): el **41,6%** de las empresas encuestadas (170 sobre 402) declara usar al menos una tecnología de IA. El universo son pymes **industriales y de software**, de **10 a 249 ocupados**, relevadas en **noviembre y diciembre de 2025**, con apoyo del BID y de la Fundación Observatorio PyME. Si se excluye software/IT, el mismo informe da **36,4%**. No es «las pymes argentinas» en general, ni significa que el 41,6% ya concilie con IA. Más contexto, en [IA para pymes argentinas](/blog/ia-para-pymes-argentinas-guia-2026). El mismo informe señala que el **72,5%** opera sin ninguna pauta ni política sobre el uso de IA: por eso importa que quede registro y que alguien apruebe lo que no cierra.

| Dato | Qué dice, con precisión | Fuente |
| --- | --- | --- |
| Adopción de IA | El **41,6%** de las empresas encuestadas (170 sobre 402) declara usar al menos una tecnología de IA. Universo: pymes industriales y de software, de 10 a 249 ocupados, relevadas en noviembre y diciembre de 2025. Sin software/IT: **36,4%** | [Encuesta nadIA](https://nadia.ar/extras/nadia_encuesta_pymesARG2026.pdf) (abril 2026), con apoyo del BID y de la Fundación Observatorio PyME |
| Tareas con IA | TIVIT lista cinco tareas en las que las pymes ya usan IA; una es comparar información de distintas fuentes. Como ejemplo, describe la conciliación: cruzar movimientos bancarios con registros contables, detectar diferencias y señalar las que requieren revisión | [Nota de TIVIT Latam, 20 de noviembre de 2026](https://latam.tivit.com/prensa/de-la-consulta-al-trabajo-las-tareas-que-las-pymes-ya-se-animan-a-hacer-con-ia-para-ser-m%C3%A1s-productivas) |

*Fuentes consultadas el 23 de noviembre de 2026. El 41,6% no significa que el 41,6% de las pymes ya concilie con IA.*

Esta es una guía de proceso, no un tutorial de un software ni un reemplazo del contador.

## El circuito de punta a punta

La herramienta propone pares y marca lo que cierra; una persona resuelve lo que no cierra. Es un circuito de control, no un cierre impositivo: los asientos y el tratamiento de comisiones o impuestos los define tu administración o tu contador.

| Paso | Qué pasa | Quién interviene |
| --- | --- | --- |
| 1. Traer movimientos | Entra el extracto del banco (archivo, Interbanking u otra conexión que el sistema ya tenga) y el reporte de Mercado Pago (panel o API) | Automático o una importación periódica; una persona controla que el archivo sea el del período correcto |
| 2. Cruzar con el sistema | Se comparan fecha, importe, referencia o comprobante con cobranzas, pagos y otros movimientos ya cargados | La herramienta propone pares; no «cierra» en silencio lo dudoso |
| 3. Lo que cierra | Coincidencia clara: se marca conciliado y queda el registro (qué con qué, cuándo, con qué regla) | Puede entrar solo o con un clic, según el criterio que defina la empresa |
| 4. Lo que no cierra | Diferencia de importe, movimiento de un lado y no del otro, comisión, contracargo, rechazo, transferencia entre cuentas | Bandeja de revisión de administración (o del estudio) |
| 5. Decisión y registro | Se carga lo que faltaba, se consulta al banco o a Mercado Pago, o se deja pendiente. Cada decisión queda anotada | Una persona aprueba; la herramienta no borra historial |

:::flow
{ "title": "Del extracto y de Mercado Pago al registro", "steps": [
  { "title": "1. Traer movimientos", "text": "Entra el extracto del banco (archivo, Interbanking u otra conexión del sistema) y el reporte de Mercado Pago (panel o API)." },
  { "title": "2. Cruzar con el sistema", "text": "Se comparan fecha, importe, referencia o comprobante con lo ya cargado. La herramienta propone pares." },
  { "title": "3. Lo que cierra", "text": "Si la coincidencia es clara, se marca conciliado y queda el registro: qué con qué, cuándo y con qué regla." },
  { "title": "4. Lo que no cierra", "text": "Una diferencia de importe, una comisión, un contracargo o un movimiento de un solo lado van a la bandeja de revisión." },
  { "title": "5. Decisión y registro", "text": "Una persona carga lo que faltaba, consulta o deja pendiente. Cada decisión queda anotada y se puede deshacer un emparejamiento." }
] }
:::

### 1. Traer los movimientos

Del banco, el extracto puede entrar por un archivo (Excel o PDF), por Interbanking —una plataforma que algunas empresas usan para conectar sus cuentas con el sistema, sin cargar un archivo— o por otra conexión que el sistema ya tenga. De Mercado Pago, el reporte se descarga desde el panel o se pide por API (una interfaz para que un sistema lo genere solo). Si un día no llega el extracto, o el reporte queda «en preparación», el circuito no inventa movimientos: avisa y espera. Una persona controla que el archivo sea el del período correcto.

### 2. Cruzar con el sistema

Se comparan fecha, importe y, cuando está, una referencia o un comprobante con lo ya cargado. La herramienta propone pares. No da por cerrado, en silencio, lo que no mata con claridad.

### 3. Lo que cierra

Si el importe, la fecha (o una tolerancia que ustedes definieron) y la referencia coinciden con una cobranza o un pago ya cargado, se marca conciliado y queda asentado qué se emparejó con qué, cuándo y con qué regla. Puede entrar solo o con un clic.

### 4. Lo que no cierra

Va a una bandeja: una diferencia de importe, un movimiento de un solo lado, una comisión no cargada, un contracargo, un rechazo o una transferencia entre cuentas. Lo mira alguien de administración o del estudio.

### 5. Decisión y registro

Se carga lo que faltaba, se consulta o se deja pendiente. Cada decisión queda anotada: qué se hizo, cuándo, con qué datos y quién aprobó. Si el emparejamiento estaba mal, se puede deshacer. La herramienta no borra el historial.

## Qué se automatiza y qué aprueba una persona

No todo tiene que esperar un clic, ni conviene que se cierre todo solo. Un semáforo simple alcanza. Es la misma lógica que en un [agente de IA](/blog/agentes-de-ia-para-pymes-como-implementarlos): lo rutinario se marca solo y lo dudoso lo aprueba alguien de administración.

| Color | Ejemplos | Qué pasa |
| --- | --- | --- |
| Verde | Mismo importe, misma fecha (o con una tolerancia que ustedes definieron) y una referencia que mata con la cobranza o el pago ya cargado | Se marca conciliado; queda registro |
| Amarillo | Importe parecido pero no igual; fecha corrida; comisión o impuesto bancario no cargado; retiro de Mercado Pago a la cuenta; un movimiento que podría ser de dos comprobantes | Va a la bandeja; alguien confirma o corrige |
| Rojo | Contracargo o disputa, rechazo de cheque o de transferencia, cliente o proveedor que no está, diferencia grande o inexplicable, pedido de borrar o reprocesar un período ya cerrado | No se cierra solo; lo ve una persona. Si hace falta un asiento, lo firma quien corresponda |

Las tolerancias de fecha o de importe —Xubio, por ejemplo, deja configurarlas en su [ayuda de autoconciliación](https://ayuda.xubio.com/es-ar/autoconciliacion-de-movimientos-bancarios/)— no son un permiso para redondear a ciegas. Si hay diferencia de monto, la persona la ve. Y si la herramienta puede crear un asiento, un pago o una cobranza, eso también lo aprueba alguien.

## Qué dicen Tango, Xubio y Colppy en su documentación

Antes de armar un circuito paralelo, mirá lo que ya trae tu sistema. Tango, Xubio y Colppy, según sus páginas oficiales, ya ofrecen conciliación bancaria. La IA no viene a reemplazar eso: se apoya en lo que el sistema ya hace y cubre los huecos (Mercado Pago, un banco que no entra solo, comisiones, excepciones y el registro de lo que se aprobó).

| Sistema | Qué dice la fuente oficial (consultada el 23/11/2026) | Qué no afirmar |
| --- | --- | --- |
| **Tango** (Axoft) | En la [página de Tesorería](https://www.axoft.com/tango/software-de-gestion/soluciones/tesoreria.php): «Generar la conciliación bancaria en forma automática». En el listado de funciones: «Conciliación bancaria» y «Conciliación bancaria automática con extracto electrónico». También menciona integración con Interbanking y Banco Galicia (Tango Banking). Los [PDF de asistencia](https://www.axoft.com/img/asistencia/tesoreria/Tesoreria_Conciliacion-Bancaria_Parametrizacion.pdf) describen importar el extracto electrónico, definir el formato del archivo y cruzarlo con los movimientos de la cuenta | No decimos que Tango se conecta solo a todos los bancos ni listamos entidades |
| **Xubio** | El centro de ayuda (es-AR) documenta **Finanzas > Conciliación Bancaria Automática**. Se pueden traer movimientos por [Interbanking](https://ayuda.xubio.com/es-ar/como-importo-mis-movimientos-bancarios-a-xubio-mediante-interbanking/) (si la cuenta está vinculada, entran al aplicar los filtros, sin archivo), por Excel o por [PDF](https://ayuda.xubio.com/es-ar/importar-movimientos-bancarios-pdf/). En el PDF, Xubio lee el extracto o el resumen de tarjeta con inteligencia artificial, muestra los movimientos para revisarlos y recién después se confirman. La [autoconciliación](https://ayuda.xubio.com/es-ar/autoconciliacion-de-movimientos-bancarios/) sugiere pares por fecha y monto (exactos o con tolerancias); las coincidencias exactas van aparte de las que entraron por tolerancia; si el importe no calza, avisa que genera un asiento y pide confirmación. Se puede [desconciliar](https://ayuda.xubio.com/es-ar/como-desconcilio-mis-movimientos-conciliados/) | No afirmamos que cubre todos los bancos. La lectura del PDF no es infalible: la propia ayuda pide revisar antes de confirmar. La [integración con Mercado Pago](https://ayuda.xubio.com/es-ar/como-facturo-mis-cobros-de-mercadopago/) sirve para importar cobros y facturarlos; no está documentada ahí como una conciliación del saldo contra el mayor |
| **Colppy** | En «[Conciliación bancaria automática para contadores](https://colppy.com/conciliacion-bancaria-autom%C3%A1tica-para-contadores)»: «Conectá tu banco», el extracto online se actualiza, se puede preconciliar por reglas y resolver partidas abiertas, con trazabilidad a la contabilidad. La FAQ dice que se pueden conectar cuentas empresa en pesos de las entidades listadas al iniciar la conexión; que se empieza desde Tesorería, eligiendo la cuenta y «Conectar»; y que se puede deshacer un emparejamiento. El texto comercial dice que el extracto online se actualiza todos los días | No inventamos el listado de bancos (Colppy dice que se ven al conectar). «Se actualiza todos los días» es lo que dice la página de Colppy, no una promesa nuestra |

*Fuentes: páginas oficiales de Axoft, Xubio y Colppy, consultadas el 23 de noviembre de 2026. Las funciones dependen del plan, de la versión y de la configuración. Verificá en tu sistema o con tu implementador qué está habilitado en tu cuenta.*

## Cómo sacar los movimientos de Mercado Pago

Mercado Pago no es un banco, pero su [documentación de reportes](https://www.mercadopago.com.ar/developers/es/docs/reports/introduction) dice que esos reportes facilitan la conciliación de las ventas y otras operaciones con los sistemas de gestión internos. Se pueden descargar desde el panel (Informes y facturación) o generar por API, en CSV o Excel.

| Tipo de reporte (docs AR) | Para qué lo presenta Mercado Pago | Cómo se genera |
| --- | --- | --- |
| **[Liquidaciones](https://www.mercadopago.com.ar/developers/es/docs/reports/released-money/introduction)** | Composición del saldo disponible en un período; historial del dinero liberado (transferencias, disputas, reembolsos, cuotas liquidadas frente a las pendientes). El propio texto lo presenta como herramienta de conciliación | Panel: Informes y facturación > Reportes de ventas y extractos de cuenta > Liquidaciones > Crear reporte. También por API. Hasta que esté listo, puede figurar «en preparación» |
| **[Todas las transacciones](https://www.mercadopago.com.ar/developers/es/docs/reports/account-money/introduction)** (en la intro general aparece como «Dinero en cuenta») | Operaciones que afectaron el balance: pagos, ingresos, contracargos, devoluciones; bruto y neto. Incluye dinero disponible, a liquidar y retenido. La documentación lo usa para conciliar movimientos de dinero **aprobados** (los pendientes o rechazados no entran) | Panel: misma ruta > Todas las transacciones > Crear reporte. También por API. Se puede [programar](https://www.mercadopago.com.ar/developers/es/docs/reports/account-money/generate) diario, semanal o mensual. Descarga CSV o XLSX. **Período máximo: 60 días**. Las columnas de fecha están en GMT-4, según la documentación |

La intro también lista Actividades, Facturación (Marketplace de Mercado Libre) y ventas con split de pagos; no hace falta desarrollarlos acá.

- El total de las ventas **no tiene por qué coincidir** con lo liberado o con el saldo. La documentación de Liquidaciones lo dice: plazos, tasas, reclamaciones y contracargos afectan la liberación.
- El error habitual es conciliar el **bruto de las ventas** contra lo que entró al banco. Hay que cruzar el reporte correcto con lo registrado, y tratar comisiones, retenciones, contracargos y retiros (payout) como movimientos propios.
- «Extracto de cuenta» es el nombre que usa Mercado Pago en el menú; no es el extracto del banco donde después aterriza el retiro.

Los menús pueden cambiar. Si las rutas del panel no coinciden, confirmalo en la documentación oficial de Mercado Pago Argentina. Información verificada el 23 de noviembre de 2026.

## Cómo arrancar con un banco y un sistema

No hace falta conciliar todas las cuentas el primer día. Arrancá por una, compará contra un período que ya hayas cerrado a mano y, recién después, sumá la segunda.

1. **Elegí una sola cuenta** (un banco o la cuenta de Mercado Pago) y un período corto que ya hayas conciliado a mano, para comparar.
2. **Anotá cómo lo hacés hoy:** de dónde sacás el extracto, qué tildás, cuánto tarda y cuáles son las diferencias que más aparecen. Si más adelante querés medir el cambio, partí de ese tiempo actual, como en [cómo medir el ROI de una automatización](/blog/como-medir-el-roi-de-una-automatizacion).
3. **Mirá primero lo que ya trae tu sistema.** Si Tango, Xubio o Colppy ya importan el extracto o ya tienen el banco conectado, partí de ahí. No armes un circuito paralelo que duplique la conciliación nativa.
4. **Sumá Mercado Pago como una fuente más**, con su reporte, no como si fuera la misma cuenta bancaria.
5. **Definí el semáforo** con quien lleva la administración: qué se puede marcar solo, qué va a revisión, quién aprueba y dónde queda el registro.
6. **Recién después** sumá la segunda cuenta. Si el primer circuito no deja un registro claro, no lo ensanches.

Cruzar todos los días, o con una frecuencia fija, es una práctica recomendada para enterarte antes de las diferencias. No es una obligación legal que citemos acá: la frecuencia la define cada empresa con su administración o su contador.

Cuando los números ya entran con regularidad, un [tablero](/datos-y-tableros) ayuda a ver saldos y cobranzas en un solo lugar. Eso es un complemento: no reemplaza el cruce del extracto con lo registrado.

## Qué controles pedirle a quien te arme la conciliación

Antes de automatizar, estas son las preguntas que vale la pena hacerle a quien te arme el circuito.

**Sobre las fuentes**

- [ ] ¿De qué cuentas sale la información (bancos y Mercado Pago) y qué reporte o extracto se usa en cada una?
- [ ] ¿Cómo entra: conexión del sistema, Interbanking, archivo, panel o API?
- [ ] ¿Qué pasa si un día no llega el extracto o el reporte queda «en preparación»?

**Sobre el cruce**

- [ ] ¿Con qué reglas se propone un match (fecha, importe, referencia, comprobante)?
- [ ] ¿Qué tolerancias hay y quién las cambia?
- [ ] ¿Qué se marca solo y qué va a revisión? ¿Lo puedo cambiar yo?

**Sobre la aprobación y el registro**

- [ ] ¿Quién aprueba las diferencias y queda asentado (qué, cuándo, con qué datos, quién)?
- [ ] ¿Se puede deshacer un emparejamiento si nos equivocamos?
- [ ] ¿La herramienta puede crear asientos, pagos o cobranzas? Si sí, ¿con qué aprobación?

**Sobre los permisos y los datos**

- [ ] ¿Qué permisos tiene en el sistema y en Mercado Pago? ¿Alcanza con lectura donde no hace falta escribir?
- [ ] ¿Dónde quedan los extractos, los reportes y el historial, y quién accede?
- [ ] ¿Cómo lo freno si algo sale mal?

Nimbo arma [automatizaciones e integraciones](/automatizacion-e-integracion) entre los extractos, los reportes y el sistema de gestión, con aprobación humana donde hace falta ([automatizaciones](/automatizaciones)). Si además querés ver saldos y cobranzas juntos, hay [tableros](/datos-y-tableros) que juntan esos números. En [Automatizá tu negocio con IA](/blog/automatiza-tu-negocio-con-ia) ampliamos cómo encarar este tipo de procesos en una pyme.

## En resumen

Sí se puede automatizar una parte de la conciliación bancaria: traer los movimientos del banco y de Mercado Pago, cruzarlos con lo cargado en el sistema y marcar lo que cierra, con registro. Tango, Xubio y Colppy, según su documentación oficial, ya tienen conciliación bancaria; la IA rinde cuando se apoya en eso y cubre los huecos, no cuando pretende reemplazar al sistema. Mercado Pago se concilia con el reporte correcto, no como si fuera un extracto bancario, y una persona revisa las diferencias, las comisiones, los contracargos y cualquier asiento nuevo. Arrancá por una cuenta, definí el semáforo y no ensanches el circuito hasta que quede un historial claro.

Si querés ver cómo está hoy tu conciliación y qué parte se puede cruzar con controles, **[agendá un diagnóstico de 20 minutos, sin cargo](/diagnostico)**. Lo vemos con lo que tengas hoy.

## Preguntas frecuentes

### ¿Se puede hacer la conciliación bancaria automática con IA en una pyme argentina?

Sí, en parte. Se pueden traer los movimientos del banco y los reportes de Mercado Pago, cruzarlos con lo cargado en el sistema de gestión y dejar que una persona revise solo las diferencias, con un registro de cada match y de cada excepción. Sistemas como Tango, Xubio y Colppy ya ofrecen conciliación bancaria en su documentación oficial; Mercado Pago publica reportes (panel o API) pensados para conciliar con el sistema de gestión. La IA no reemplaza esa revisión cuando el importe no cierra, hay un contracargo o hay que crear un asiento.

### ¿Cómo se concilia Mercado Pago con el sistema de gestión?

Mercado Pago no es un banco, pero sus reportes oficiales sirven para conciliar. Desde Informes y facturación se descarga el reporte de Liquidaciones o el de Todas las transacciones; también se puede generar por API, en CSV o Excel, con un tope de 60 días en ese último reporte. El neto, las comisiones, los contracargos y los retiros a la cuenta bancaria no son lo mismo que el total de las ventas: hay que cruzar el reporte correcto con lo registrado y revisar lo que no mata.

### ¿Qué tiene que aprobar una persona en una conciliación automática?

Lo que coincide en fecha, importe y referencia se puede marcar conciliado, con registro. Una persona tiene que ver las diferencias de importe, las comisiones no cargadas, los retiros, los contracargos, los rechazos y cualquier movimiento que la herramienta quiera convertir en un asiento, un pago o una cobranza nueva. También tiene que poder deshacer un emparejamiento y cortar el proceso si algo sale mal.

### ¿Tango, Xubio o Colppy ya tienen conciliación bancaria?

Sí, según sus páginas oficiales consultadas el 23 de noviembre de 2026. Tango publica conciliación bancaria automática con extracto electrónico; Xubio, un módulo de conciliación bancaria automática (Interbanking, Excel o PDF, con autoconciliación por fecha y monto); Colppy, «Conectá tu banco», preconciliación por reglas y la posibilidad de deshacer un emparejamiento. Las funciones dependen del plan, de la versión y de la configuración. La integración de Xubio con Mercado Pago, en la ayuda oficial, es para importar cobros y facturarlos, no para conciliar el saldo como un extracto bancario.

### ¿Por dónde empiezo si hoy lo hago a mano?

Por una sola cuenta (un banco o Mercado Pago) y un período corto que ya hayas conciliado a mano. Anotá cómo lo hacés hoy, usá primero lo que ya trae tu sistema, definí qué se marca solo y qué va a revisión, y recién después sumá la segunda cuenta.

### ¿La IA puede dar por cerrado un movimiento que no cierra?

No. Si el importe no mata, hay un contracargo, un rechazo o hay que crear un asiento, una persona lo tiene que ver. La herramienta propone pares y deja registro; no «cierra» la caja por su cuenta.

### ¿Con qué frecuencia conviene conciliar?

Con una frecuencia fija, todos los días si se puede, para enterarte antes de las diferencias. No es una obligación legal que citemos acá: la frecuencia la define cada empresa con su administración o su contador.
`,
  },
  {
    slug: 'whatsapp-business-api-precio-2026-ventana-24-horas-agente-ia',
    title: 'WhatsApp Business API ya no es gratis dentro de las 24 horas: cuánto le cuesta ahora a tu pyme el agente de IA y cómo gastar menos',
    description:
      'Desde el 1/10/2026 Meta cobra las respuestas de servicio después de 1.000 gratis por número y las plantillas de utilidad desde el primer mensaje. Tarifas de Argentina y cómo gastar menos.',
    date: '2026-11-23',
    category: 'Automatización & IA',
    readTime: '11 min',
    content: `
## Respuesta corta

No del todo. Desde el 1 de octubre de 2026, Meta cobra las respuestas libres (mensajes de servicio) a partir del mensaje 1.001 de cada mes, por número de teléfono, y cobra las plantillas de utilidad aunque se manden dentro de la ventana de 24 horas. En Argentina, ambos cuestan USD 0,026 por mensaje entregado. Los mensajes que escribe el cliente siguen siendo gratis.

¿Querés saber cuántos mensajes manda hoy tu WhatsApp y dónde se pueden ahorrar? Lo vemos en un **[diagnóstico de 20 minutos, sin cargo](/diagnostico)**.

## Qué cambió el 1 de octubre de 2026

Meta cobra por mensaje entregado, según la **categoría** del mensaje y el **país de quien lo recibe**. La ventana de 24 horas se abre (o se renueva) cada vez que el cliente escribe: mientras está abierta, podés responder con un mensaje libre. Hasta el 30 de septiembre de 2026 esas respuestas, y las plantillas de utilidad enviadas dentro de esa ventana, eran gratis. Desde el 1 de octubre dejaron de serlo.

| Mensaje que manda tu negocio | Hasta el 30/9/2026 | Desde el 1/10/2026 |
| --- | --- | --- |
| Respuesta libre dentro de las 24 h (servicio), de una persona o de una IA de terceros | Gratis (desde el 1/11/2024) | **Se cobra desde el mensaje 1.001 del mes**, por número de teléfono |
| Plantilla de utilidad dentro de las 24 h (ej.: confirmación de pedido) | Gratis (desde el 1/7/2025) | **Se cobra desde el primer mensaje** |
| Plantilla de utilidad fuera de las 24 h | Se cobraba | Se cobra (sin cambio) |
| Plantilla de marketing o autenticación | Se cobraba | Se cobra (sin cambio) |
| Mensaje que te manda el cliente | Gratis | Gratis (sin cambio) |
| Todo lo que se manda en la ventana gratuita de anuncios de clic a WhatsApp (hasta 7 días) | Gratis | Gratis, salvo el agente de IA de Meta |

*Fuente: Meta, [Pricing on the WhatsApp Business Platform](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing) (secciones “Prior updates – Effective October 1, 2026”, “Free tier of monthly service messages” y “When Meta does not charge”), consultada el 23/11/2026. Información verificada el 23 de noviembre de 2026.*

Para una pyme con un [agente de IA en WhatsApp](/blog/automatizar-pyme-ia-chatbot-whatsapp) (no un [chatbot de respuestas fijas](/blog/agentes-de-ia-vs-chatbots)), el cambio es concreto: cada mensaje que manda el agente tiene precio, después de los 1.000 mensajes de **servicio** del mes. Un agente mal diseñado manda de más: «un momento, lo reviso», una respuesta partida en tres burbujas o una confirmación con plantilla cuando bastaba un texto.

### Lo que sigue siendo gratis

Siguen sin costo los mensajes que manda el cliente; los primeros 1.000 mensajes de **servicio** del mes, por número de teléfono; y todo lo que se manda dentro de la ventana gratuita que abren los anuncios de clic a WhatsApp (hasta 7 días), excepto el agente de IA de Meta. Meta solo cobra mensajes **entregados**, no los que se mandan y no llegan. Los 1.000 no se acumulan: se reinician cada mes y no cubren plantillas ni al agente de Meta.

Si la cuenta no tiene un medio de pago cargado, Meta entrega los mensajes de servicio del tramo gratis y deja de entregar los siguientes.

## Cuánto cobra Meta en Argentina (tabla oficial)

La tarifa depende del país del **destinatario** (código +54), no de dónde está tu empresa. La moneda de la cuenta (USD o pesos) se elige al crearla. Estos son los valores de lista oficiales, vigentes desde el 1 de octubre de 2026:

| Tipo de mensaje | Para qué | USD por mensaje entregado | ARS por mensaje (cuentas en pesos) |
| --- | --- | --- | --- |
| Servicio (respuesta libre dentro de las 24 h) | Contestar consultas | 0,026 (los primeros 1.000 por número y por mes, gratis) | 37,6798 |
| Utilidad (plantilla) | Confirmación de pedido, aviso de envío, recordatorio de turno | 0,026 | 37,6798 |
| Autenticación (plantilla) | Códigos de verificación | 0,026 | 37,6798 |
| Marketing (plantilla) | Promociones, novedades | 0,0618 | 89,562 |
| Agente de IA de Meta (Meta Business Agent) | Respuestas del agente de Meta | USD 2 por millón de tokens (≈ USD 0,04–0,05 por mensaje, según Meta); sin mensajes gratis | Tarifa global en USD |

*Fuente: tarifarios oficiales de Meta “List rates” en USD y en ARS, vigentes desde el 1/10/2026, enlazados desde [Pricing on the WhatsApp Business Platform](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing), consultados el 23/11/2026. La tarifa depende del país del número que recibe el mensaje. Los montos en pesos son los de la columna oficial, para cuentas facturadas en ARS; no son una conversión propia. Meta puede actualizar tarifas el 1/1, el 1/4, el 1/7 y el 1/10: revisá la tabla al presupuestar.*

Utilidad y autenticación tienen descuentos por volumen recién desde los 100.001 y 120.001 mensajes al mes, respectivamente. Eso no aplica a casi ninguna pyme.

## Cuánto te puede costar por mes: una cuenta simple

Lo que cuenta no es cuántas consultas recibís, sino **cuántos mensajes manda tu negocio**. Un agente que contesta cada consulta en tres mensajes triplica lo que se paga a Meta.

| Mensajes de servicio que manda tu negocio en el mes | Se cobran | USD (0,026 c/u) | ARS (37,6798 c/u, cuentas en pesos) |
| --- | --- | --- | --- |
| 1.000 | 0 | 0 | 0 |
| 1.500 | 500 | 13 | 18.839,90 |
| 3.000 | 2.000 | 52 | 75.359,60 |
| 4.500 | 3.500 | 91 | 131.879,30 |
| 10.000 | 9.000 | 234 | 339.118,20 |

*Ejemplo para entender la regla, no una cotización. Solo incluye lo que cobra Meta por mensajes de servicio. No incluye plantillas, el consumo del modelo de IA ni lo que cobra quien arma y mantiene el agente: eso va aparte.*

Un ejemplo ilustrativo, no de un cliente real: 1.500 consultas en el mes contestadas en un solo mensaje son 1.500 mensajes, y pagás 500 (USD 13). Las mismas consultas contestadas con un «un momento» más dos mensajes de respuesta son 4.500, y pagás 3.500 (USD 91).

Ese costo de Meta es una parte del costo de la automatización; en [cómo medir el ROI de una automatización](/blog/como-medir-el-roi-de-una-automatizacion) hablamos de mirar el conjunto, no un renglón suelto.

## Seis decisiones de diseño para que el agente gaste menos

Como Meta cobra por mensaje entregado, el diseño del agente pesa tanto como la tarifa. Estas seis decisiones bajan la cantidad de mensajes cobrables, sin inventar un porcentaje de ahorro.

1. **Una respuesta completa, no tres burbujas.** Cada mensaje entregado es un cobro. Precio, stock y plazo de entrega van en un solo mensaje, no en tres.

2. **Nada de «un momento, lo reviso».** Ese texto también es un mensaje de servicio y, después de los 1.000, se cobra. Si el agente necesita consultar el sistema, que responda cuando tenga el dato. Si la demora es larga, un solo aviso alcanza.

3. **Plantillas solo cuando la ventana está cerrada.** Dentro de las 24 horas, una confirmación de pedido puede ir como mensaje libre (servicio, que tiene tramo gratis) en vez de como plantilla de utilidad, que se cobra desde el primero. Fuera de la ventana, la plantilla es obligatoria.

4. **Separar ventas y soporte en dos números, solo si la operación ya lo pide.** Cada número tiene su propio tramo de 1.000 mensajes de servicio gratis. No es un truco para no pagar: dos números son dos canales para el cliente y más gestión. Conviene únicamente si ya tenías motivos para separarlos.

5. **No mandar marketing «de paso».** Una promo es plantilla de marketing (USD 0,0618, la más cara en Argentina). Que el agente no la sume a una respuesta de soporte.

6. **Medir mensajes por conversación.** Pedile a quien arma el agente un [tablero](/datos-y-tableros) con los mensajes enviados por categoría y por día. Meta informa en cada mensaje si fue gratis o cobrado.

| Decisión | Regla de Meta que la explica |
| --- | --- |
| Responder en un solo mensaje completo | Se cobra por mensaje entregado |
| Sin mensajes de relleno («un momento») | El relleno también es un mensaje de servicio |
| Mensaje libre en vez de plantilla dentro de la ventana | Las plantillas de utilidad se cobran desde el primero; el servicio tiene 1.000 gratis |
| Dos números si la operación ya lo pide | El tramo gratis es por número de teléfono |
| No sumar promos a respuestas de soporte | Marketing es la categoría más cara en Argentina |
| Medir mensajes por categoría | Meta informa en cada mensaje si fue gratis o cobrado |

Ahorrar mensajes no puede empeorar la atención. Si el cliente necesita una respuesta en dos partes, se manda en dos partes. Y la política de WhatsApp exige ofrecer siempre una vía clara a una persona.

## ¿Y si uso el agente de IA de Meta?

El agente de IA de Meta (Meta Business Agent) se cobra distinto: USD 2 por millón de tokens, que según Meta son unos 4 a 5 centavos de dólar por mensaje. No tiene tramo de 1.000 mensajes de servicio gratis y se cobra incluso en la ventana gratuita de los anuncios. Para ese agente, mandar menos mensajes y más cortos también baja la cuenta.

## Qué pedirle a tu proveedor

**Sobre los mensajes**

- [ ] ¿Cuántos mensajes manda el agente, en promedio, por conversación?
- [ ] ¿Usa mensajes de relleno («un momento», «lo reviso»)? ¿Se pueden sacar?
- [ ] ¿Qué confirmaciones salen como plantilla y cuáles como mensaje libre?
- [ ] ¿El agente evita mandar promociones dentro de respuestas de soporte?

**Sobre la cuenta de Meta**

- [ ] ¿La cuenta de WhatsApp está a nombre de mi empresa y tiene un medio de pago cargado?
- [ ] ¿En qué moneda factura (USD o pesos)?
- [ ] ¿Cuántos números uso y para qué?

**Sobre la medición**

- [ ] ¿Puedo ver cada mes los mensajes enviados por categoría y cuántos fueron gratis?
- [ ] ¿Quién revisa la tabla de Meta cuando cambia (1/1, 1/4, 1/7, 1/10)?

**Sobre la atención**

- [ ] ¿El agente deriva a una persona cuando hace falta? (lo exige la política de Meta)

Nimbo arma [agentes de IA](/agentes-de-ia) para WhatsApp e Instagram conectados a stock, precios y pedidos, que derivan a una persona cuando hace falta. También implementamos la [API oficial de WhatsApp](/wsp) y [tableros](/datos-y-tableros) para ver qué pasa en la operación.

## En resumen

Desde octubre de 2026, cada mensaje que manda tu agente (después de los 1.000 de servicio del mes) tiene precio, y las plantillas de utilidad se cobran desde el primero, aunque sea dentro de las 24 horas. La diferencia la hace el diseño, no solo la tarifa: menos burbujas, sin relleno, plantillas solo cuando la ventana está cerrada y medición por categoría.

Si querés ver cuántos mensajes manda hoy tu WhatsApp y dónde se pueden ahorrar, **[agendá un diagnóstico de 20 minutos, sin cargo](/diagnostico)**. Lo vemos con lo que tengas hoy.

## Preguntas frecuentes

### ¿WhatsApp Business API sigue siendo gratis dentro de las 24 horas?

No del todo. Desde el 1 de octubre de 2026, Meta cobra las respuestas libres (mensajes de servicio) a partir del mensaje 1.001 de cada mes, por número de teléfono, y cobra las plantillas de utilidad aunque se manden dentro de la ventana de 24 horas. En Argentina, ambos cuestan USD 0,026 por mensaje entregado. Los mensajes que escribe el cliente siguen siendo gratis.

### ¿Qué cambió el 1 de octubre de 2026?

Meta volvió a cobrar dos cosas que eran gratis: los mensajes de servicio (gratis desde el 1/11/2024) y las plantillas de utilidad enviadas dentro de la ventana de 24 horas (gratis desde el 1/7/2025). Sumó un tramo de 1.000 mensajes de servicio gratis por número y por mes.

### ¿Cuánto cobra Meta por mensaje en Argentina?

Según el tarifario oficial vigente desde el 1/10/2026, para destinatarios con código +54: servicio, utilidad y autenticación salen USD 0,026 por mensaje entregado; marketing, USD 0,0618. En cuentas facturadas en pesos, ARS 37,6798 y ARS 89,562, respectivamente. Los primeros 1.000 mensajes de servicio del mes, por número, son gratis.

### ¿Cómo funcionan los 1.000 mensajes gratis de WhatsApp Business API?

Cada número de teléfono tiene 1.000 mensajes de servicio gratis por mes. Son solo las respuestas libres dentro de la ventana de 24 horas, de una persona o de una IA de terceros. No cubren plantillas de marketing, utilidad ni autenticación, ni el agente de IA de Meta. No se acumulan: se reinician cada mes.

### ¿Cómo hago para que mi agente de IA gaste menos en WhatsApp?

Como Meta cobra por mensaje entregado, conviene que el agente responda en un solo mensaje completo, no mande mensajes de relleno como «un momento», use mensajes libres en vez de plantillas mientras la ventana de 24 horas está abierta, no sume promociones a respuestas de soporte y deje medir cuántos mensajes manda por conversación.

### ¿Me cobran los mensajes que me mandan los clientes?

No. Meta cobra solo los mensajes que el negocio le entrega al usuario, no los que el cliente te escribe.

### ¿Las plantillas de utilidad (confirmación de pedido, aviso de envío) se pagan?

Sí. Desde el 1 de octubre de 2026 se cobran desde el primer mensaje, también si se mandan dentro de la ventana de 24 horas. En Argentina salen USD 0,026 por mensaje entregado (ARS 37,6798 en cuentas en pesos). Fuera de la ventana, la plantilla sigue siendo la forma de escribirle al cliente.

### ¿Hay algún caso en que Meta no cobra?

Sí: los mensajes que te manda el cliente; los primeros 1.000 mensajes de servicio del mes, por número; y los mensajes de marketing, utilidad, autenticación y servicio dentro de la ventana gratuita de un anuncio de clic a WhatsApp (hasta 7 días). El agente de IA de Meta se cobra también en esa ventana.
    `.trim(),
  },
  {
    slug: 'cargar-facturas-de-proveedores-con-ia-erp-sircip',
    title: 'Cargar las facturas de proveedores sin tipear: IA que lee el PDF y lo pasa a tu sistema, con controles (y qué cambia con SIRCIP desde el 1° de diciembre)',
    description:
      'Cómo cargar facturas de proveedores con IA sin perder el control: validaciones de CUIT, CAE y percepciones, aprobación humana y qué cambia con SIRCIP.',
    date: '2026-11-23',
    category: 'Automatización & IA',
    readTime: '12 min',
    content: `
## Respuesta corta

Sí, se pueden cargar las facturas de proveedores automáticamente con IA. Las facturas llegan a una casilla de mail dedicada, una IA lee el PDF y extrae los datos, y antes de cargarlas el sistema valida el CUIT del emisor y del receptor, el CAE en ARCA, que no estén duplicadas y que neto, IVA y percepciones sumen el total. Lo que no pasa un control va a revisión de una persona; el resto entra al sistema de gestión.

¿Querés ver cuánto tiempo se va hoy en cargar facturas y qué parte se puede automatizar con controles? Lo vemos en un **[diagnóstico de 20 minutos, sin cargo](/diagnostico)**.

## Por qué la carga manual de facturas sigue comiendo horas

En una pyme las facturas de proveedores suelen llegar por mail, cada una en un PDF con un formato distinto. Alguien las abre, las tipea en el sistema de gestión y las archiva. El trabajo es repetitivo, y los errores típicos no son raros: una factura que se carga dos veces, un importe mal tipeado o una percepción que termina en la cuenta equivocada.

Hoy casi cualquier herramienta de IA lee un PDF. El problema no es leer la factura: es confiar en lo que se cargó. Sin validar CUIT, CAE y percepciones, una carga automática puede meter un error en silencio, más rápido que una persona.

## El circuito completo, paso a paso

La IA lee; los controles deciden. El circuito tiene seis pasos, y una persona interviene cuando algo no cierra.

| Paso | Qué pasa | Quién |
| --- | --- | --- |
| 1. Recepción | Las facturas llegan a una casilla dedicada y se toman los adjuntos | Automático |
| 2. Lectura | La IA extrae los datos del PDF (y se contrastan con el QR si está) | Automático |
| 3. Validación | CUIT, CAE, duplicados, sumas, percepciones, orden de compra | Automático |
| 4. Aprobación | Lo que no pasa un control va a una bandeja de revisión | Persona |
| 5. Alta | Entra al sistema de gestión por API, importador o borrador | Automático o persona, según el sistema |
| 6. Registro | Se guarda el original, lo leído, los controles y quién aprobó | Automático |

:::flow
{ "title": "De la casilla de mail al sistema de gestión", "steps": [
  { "title": "1. Recepción", "text": "Las facturas llegan a una casilla dedicada y se toman los adjuntos (PDF y, si viene, XML o imagen)." },
  { "title": "2. Lectura", "text": "La IA extrae emisor, CUIT, tipo, número, fecha, CAE, importes y percepciones, y se contrasta con el QR si está." },
  { "title": "3. Validación", "text": "Se controlan CUIT, CAE, duplicados, sumas, percepciones y, si se usa, la orden de compra o el remito." },
  { "title": "4. Aprobación", "text": "Lo que no pasa un control va a una bandeja de revisión: una persona decide si entra, se consulta o se rechaza." },
  { "title": "5. Alta", "text": "La factura entra al sistema de gestión por API, por un importador o como borrador, según lo que permita el sistema." },
  { "title": "6. Registro", "text": "Quedan el PDF original, lo que leyó la IA, qué controles pasó, quién aprobó y cuándo." }
] }
:::

### 1. Recepción: una casilla solo para facturas

Pedile a tus proveedores que manden las facturas a una dirección dedicada (por ejemplo, facturas@tuempresa). El sistema toma los adjuntos (PDF y, si viene, XML o imagen) y descarta lo que no es un comprobante. Mezclarlas con el mail cotidiano es la forma más fácil de perder una.

### 2. Lectura con IA

La IA extrae el emisor, el CUIT, el tipo y la letra, el punto de venta y el número, la fecha, el CAE y su vencimiento, el neto, el IVA por alícuota, las percepciones y el total. Las facturas electrónicas traen un [código QR obligatorio](https://www.arca.gob.ar/fe/qr/conceptos-generales.asp) (RG 4291/2018) con datos del comprobante y del emisor: sirve para contrastar lo que leyó la IA. Si un dato no se puede leer, el circuito no lo inventa: lo manda a revisión.

### 3. Validaciones automáticas

La IA no decide si una factura es válida; lo deciden los controles. Antes de que entre al sistema, conviene verificar al menos esto:

| Control | Qué se verifica | Si falla |
| --- | --- | --- |
| Emisor | El CUIT existe en tu maestro de proveedores | Proveedor nuevo: revisión |
| Receptor | El CUIT del receptor es el de tu empresa | Rechazo o consulta |
| Autorización | El CAE es válido según la [constatación de comprobantes de ARCA](https://servicioscf.afip.gob.ar/publico/comprobantes/cae.aspx) | Revisión y consulta al proveedor |
| Duplicado | No hay otra factura con el mismo CUIT, tipo, punto de venta y número | Bloqueo |
| Sumas | Neto + IVA + percepciones + otros = total | Revisión |
| Percepciones | Cada una identificada (SIRCIP, provincial, IVA) y con su cuenta | Revisión si no se reconoce |
| Compra | Coincide con la orden de compra o el remito (si se usan) | Revisión |
| Importe | Dentro de lo habitual para ese proveedor | Revisión |

*Ejemplo de controles, no una lista cerrada. Cada empresa define los suyos con su contador.*

### 4. Aprobación humana de lo dudoso

No todo tiene que esperar un clic, ni conviene que entre todo solo. Un semáforo simple alcanza:

| Color | Cuándo | Qué pasa |
| --- | --- | --- |
| Verde | Proveedor conocido, todo valida, importe habitual | Entra solo (o queda listo para un clic) |
| Amarillo | Proveedor nuevo, importe fuera de lo habitual, percepción no reconocida o por falta de inscripción / no inscripto, no coincide con la orden de compra | Bandeja de revisión de administración |
| Rojo | CAE que no valida, CUIT receptor ajeno, duplicado | No entra; se consulta al proveedor |

Una persona revisa siempre lo que el semáforo manda a amarillo o a rojo. Es la misma lógica que en un [agente de IA](/blog/agentes-de-ia-para-pymes-como-implementarlos): lo rutinario entra solo y lo dudoso lo aprueba alguien de administración.

### 5. Alta en el sistema de gestión

Hay tres caminos habituales, y cuál se puede usar depende del sistema y de la versión: por API, por un importador de archivos del propio sistema, o dejando un borrador para que la administración lo confirme. Preguntáselo al proveedor del sistema antes de armar nada. Si estás buscando cómo leer facturas en PDF con IA y pasarlas, por ejemplo, a Tango, no asumas que el módulo ya hace todo: confirmá qué trae tu versión. Si el sistema no tiene API ni importador, a veces hace falta un [desarrollo a medida](/software-a-medida), siempre partiendo de lo que el sistema realmente permite.

### 6. Registro

Guardá el PDF original, lo que leyó la IA, qué controles pasó, quién aprobó y cuándo. Sirve para una auditoría, para el contador y para ver qué falló si una factura se cargó mal.

## SIRCIP: qué cambia desde el 1 de diciembre para quien recibe facturas

SIRCIP es el Sistema Informático de Recaudación, Control e Información de Percepciones de la Comisión Arbitral del Convenio Multilateral (COMARB). Lo aprobó la [Resolución General CA 9/2025](https://www.argentina.gob.ar/normativa/nacional/norma-411698/texto) y unifica la administración de las percepciones de Ingresos Brutos (IIBB) de las jurisdicciones adheridas.

Rige desde el **1 de diciembre de 2026** en **seis jurisdicciones**: Chaco, La Pampa, Río Negro, San Juan, Santiago del Estero y Tierra del Fuego, según el anexo actualizado por la [Disposición 13/2026](https://www.boletinoficial.gob.ar/detalleAviso/primera/350641/20261120), publicada el 20 de noviembre de 2026 en el Boletín Oficial. Las demás, incluidas Buenos Aires y CABA, siguen por ahora con sus regímenes propios. Los agentes se incorporan de forma gradual.

Lo aplican los proveedores **designados como agentes de percepción**. La nómina inicial se publica en sircip.comarb.gob.ar, al que se accede desde la [página de SIRCIP de la Comisión Arbitral](https://www.ca.gob.ar/sistemas/sircip).

| Norma | Fecha | Qué hizo |
| --- | --- | --- |
| Res. Gral. CA 9/2025 | Sancionada el 9/4/2025, Boletín Oficial del 14/4/2025 | Aprobó SIRCIP (sircip.comarb.gob.ar) para los regímenes de percepción de Ingresos Brutos de las jurisdicciones adheridas |
| Disp. de Presidencia 7/2026 | Boletín Oficial del 11/6/2026 | Postergó la entrada en vigencia al 1/12/2026 |
| Disp. de Presidencia 12/2026 | 21/10/2026, Boletín Oficial del 22/10/2026 | Confirmó el inicio el 1/12/2026 y el anexo de jurisdicciones de ese momento; la incorporación de agentes es gradual |
| **Disp. 13/2026** | 19/11/2026, **Boletín Oficial del 20/11/2026** | Actualizó el anexo del arranque: Chaco, La Pampa, Río Negro, San Juan, Santiago del Estero y Tierra del Fuego |

*Fuente: Comisión Arbitral del Convenio Multilateral ([ca.gob.ar](https://www.ca.gob.ar/sistemas/sircip)) y Boletín Oficial, consultados el 23/11/2026. Verificá las jurisdicciones vigentes y la nómina de agentes en sircip.comarb.gob.ar. Información verificada el 23 de noviembre de 2026.*

Un padrón mensual asigna a cada contribuyente una **alícuota única**, dentro de una escala oficial que va de 0% a 5%, que define cada jurisdicción. Además de la percepción general, puede haber percepciones por **falta de inscripción en una jurisdicción** o por **no inscripto**, que los agentes tienen que identificar. Según las [preguntas frecuentes de COMARB](https://www.ca.gob.ar/preguntas-frecuentes/sistemas/sircip), esas percepciones pueden aplicarse aunque la empresa figure con alícuota 0 o no esté en el padrón.

El detalle de las percepciones viene en la factura o en un documento equivalente, y eso sirve de comprobante. Quien es de Convenio Multilateral deduce lo percibido en SIFERE WEB; el contribuyente local, en el aplicativo de su provincia.

Para quien **recibe** facturas, el cambio concreto está en la carga: van a aparecer percepciones SIRCIP que conviven con las provinciales de siempre, y el circuito tiene que distinguirlas, no meterlas todas en la misma bolsa.

| En la factura del proveedor | Qué tiene que hacer tu circuito de carga |
| --- | --- |
| Percepción SIRCIP (general) | Reconocerla como concepto propio, separada de las percepciones provinciales y del IVA |
| Percepción por falta de inscripción en una jurisdicción o por no inscripto | Mandarla siempre a revisión y avisar al contador |
| Percepciones provinciales de siempre (jurisdicciones que todavía no están en SIRCIP) | Seguir cargándolas como hasta ahora, sin mezclarlas con SIRCIP |
| Factura sin el detalle de la percepción | Revisión: el detalle viene en la factura o documento equivalente |

Si te corresponden, cuánto y cómo se computan, lo ve **tu contador** con el padrón y la nómina oficiales de COMARB. Este post no es asesoramiento impositivo.

## Qué preguntarle a quien te arme la carga automática

Antes de automatizar, conviene medir cuánto tarda hoy la carga: en [cómo medir el ROI de una automatización](/blog/como-medir-el-roi-de-una-automatizacion) hablamos de arrancar por ese número. Estas son las preguntas que vale la pena hacerle a quien te arme el circuito.

**Sobre la lectura**

- [ ] ¿Qué datos extrae y qué hace cuando no puede leer uno?
- [ ] ¿Contrasta con el QR de la factura electrónica?
- [ ] ¿Distingue percepciones SIRCIP, provinciales y de IVA?

**Sobre los controles**

- [ ] ¿Valida CUIT del emisor y del receptor?
- [ ] ¿Constata el CAE en ARCA?
- [ ] ¿Bloquea duplicados?
- [ ] ¿Verifica que las sumas den el total?

**Sobre la aprobación**

- [ ] ¿Qué entra solo y qué va a revisión? ¿Lo puedo cambiar yo?
- [ ] ¿Quién aprueba y queda registrado?

**Sobre el sistema de gestión**

- [ ] ¿Entra por API, por importador o como borrador?
- [ ] ¿Qué pasa si el sistema está caído o rechaza la carga?

**Sobre los datos**

- [ ] ¿Dónde quedan los PDF y lo que leyó la IA? ¿Quién tiene acceso?

Nimbo arma [automatizaciones e integraciones](/automatizacion-e-integracion) entre el mail, las planillas y el sistema de gestión, con aprobación humana donde hace falta ([automatizaciones](/automatizaciones)), y [tableros](/datos-y-tableros) para ver lo que falta pagar.

## En resumen

La IA lee un PDF rápido, pero lo que da tranquilidad son los controles y la aprobación humana de lo dudoso: CUIT, CAE, duplicados, sumas y percepciones bien clasificadas. SIRCIP, que arranca el 1 de diciembre de 2026 en seis jurisdicciones, es un buen motivo para revisar hoy cómo se clasifican las percepciones. Si te corresponden, cuánto y cómo se computan, lo ve tu contador con la nómina y el padrón de COMARB.

Si querés ver cuánto tiempo se va hoy en cargar facturas y qué parte se puede automatizar con controles, **[agendá un diagnóstico de 20 minutos, sin cargo](/diagnostico)**. Lo vemos con lo que tengas hoy.

## Preguntas frecuentes

### ¿Se pueden cargar las facturas de proveedores automáticamente con IA?

Sí. Las facturas llegan a una casilla de mail dedicada, una IA lee el PDF y extrae los datos, y antes de cargarlas el sistema valida el CUIT del emisor y del receptor, el CAE en ARCA, que no estén duplicadas y que neto, IVA y percepciones sumen el total. Lo que no pasa un control va a revisión de una persona; el resto entra al sistema de gestión.

### ¿Qué controles hay que hacer antes de que una factura entre al sistema?

Que el CUIT del emisor sea un proveedor dado de alta y el del receptor sea tu empresa; que el comprobante esté autorizado por ARCA (constatación del CAE); que no esté cargado; que neto, IVA y percepciones den el total; y que coincida con la orden de compra o el remito, si los usás.

### ¿Qué es SIRCIP y desde cuándo rige?

SIRCIP es el Sistema Informático de Recaudación, Control e Información de Percepciones de la Comisión Arbitral ([Res. Gral. CA 9/2025](https://www.argentina.gob.ar/normativa/nacional/norma-411698/texto)), que unifica la administración de percepciones de Ingresos Brutos. Rige desde el 1 de diciembre de 2026 en Chaco, La Pampa, Río Negro, San Juan, Santiago del Estero y Tierra del Fuego, según la [Disposición 13/2026](https://www.boletinoficial.gob.ar/detalleAviso/primera/350641/20261120).

### ¿SIRCIP me afecta si recibo facturas, aunque no sea agente de percepción?

Puede afectarte aunque no seas agente de percepción. Si un proveedor tuyo es agente SIRCIP, tus facturas pueden traer percepciones SIRCIP, que conviven con las provinciales y tienen que cargarse por separado. Si te corresponden, cuánto y cómo se computan lo define tu contador con el padrón oficial de COMARB.

### ¿Qué facturas tiene que revisar siempre una persona?

Proveedores nuevos, un CUIT o un CAE que no validan, totales que no cierran, posibles duplicados, importes fuera de lo habitual y percepciones que la carga no sabe clasificar, por ejemplo una percepción por falta de inscripción en una provincia o por no inscripto.

### ¿Cómo sé si una factura electrónica es válida?

Constátalo con el CAE en el [servicio de constatación de comprobantes de ARCA](https://servicioscf.afip.gob.ar/publico/comprobantes/cae.aspx). El [código QR](https://www.arca.gob.ar/fe/qr/conceptos-generales.asp) de la factura electrónica también trae datos del comprobante y del emisor. Si el CAE no valida, no la cargues: consultá al proveedor.

### ¿Se puede pasar a Tango u otro sistema de gestión?

Depende del sistema y de la versión. Algunos permiten la carga por API, otros por un importador de archivos y otros dejan un borrador para que la administración lo confirme. Preguntale a tu proveedor del sistema qué trae antes de armar el circuito. No afirmamos acá funciones de un ERP en particular.

### ¿Qué provincias aplican SIRCIP desde el 1 de diciembre?

Al 23 de noviembre de 2026, según la Disposición 13/2026, el arranque del 1 de diciembre es en seis jurisdicciones: Chaco, La Pampa, Río Negro, San Juan, Santiago del Estero y Tierra del Fuego. Las demás siguen por ahora con sus regímenes propios. Verificá el listado vigente y la nómina de agentes en sircip.comarb.gob.ar, desde la [página de SIRCIP de la Comisión Arbitral](https://www.ca.gob.ar/sistemas/sircip).
    `.trim(),
  },
  {
    slug: 'ia-en-las-sombras-empleados-chatgpt-agente-oficial-pyme',
    title: 'Tus empleados ya usan ChatGPT por su cuenta: cómo pasar de la IA en las sombras a un agente oficial y seguro en tu pyme',
    description:
      'El 72,5% de las pymes encuestadas no tiene pautas para usar IA. Política de una página, qué datos no cargar y cómo pasar a un agente oficial.',
    date: '2026-11-23',
    category: 'Inteligencia Artificial',
    readTime: '10 min',
    content: `
## Respuesta corta

La IA en las sombras (shadow AI) es el uso de herramientas de inteligencia artificial, como ChatGPT, por parte de empleados que las adoptan por su cuenta, muchas veces desde cuentas personales, sin que la empresa sepa qué herramienta usan ni qué datos cargan. En la encuesta nacional de CEPE Di Tella y Fundar, en el 44,4% de las pymes que usan IA son las áreas y los empleados quienes la adoptan sin coordinación central, y el 72,5% opera sin ninguna pauta sobre su uso.

¿Querés saber qué tareas de tu equipo conviene pasar a un agente oficial? Lo vemos en un **[diagnóstico de 20 minutos, sin cargo](/diagnostico)**.

## Tu equipo ya usa IA: lo que dicen los números

En muchas pymes la IA ya entró por abajo: cada uno usa la herramienta que conoce, desde su cuenta, y a veces pega ahí una lista de clientes, un presupuesto o un CV. No es un fenómeno raro, y los números lo muestran.

| Dato | % | Fuente |
| --- | --- | --- |
| Pymes encuestadas que usan al menos una tecnología de IA | 41,6% | nadIA (CEPE Di Tella, Fundar; relevamiento Fundación Observatorio PyME) |
| De las que usan IA, las que usan generación de texto y código (tipo ChatGPT) | 77,9% | nadIA |
| De las que usan IA, en las que las áreas y empleados la adoptan por su cuenta, sin coordinación central | 44,4% | nadIA |
| Operan sin ninguna pauta ni política sobre el uso de IA | 72,5% | nadIA |
| Tienen una política formal escrita | 3,3% | nadIA |
| Empresas argentinas que incorporaron IA formalmente (2025) | 11,2% | UdeSA |
| Medianas / pequeñas que la incorporaron formalmente | 16% / 8,5% | UdeSA |

*Fuentes: [Encuesta nacional sobre adopción de IA en pymes de la Argentina](https://nadia.ar/extras/nadia_encuesta_pymesARG2026.pdf) (nadIA, CEPE Di Tella y Fundar, abril de 2026): 402 empresas de 10 a 249 ocupados, manufactureras y de software y servicios informáticos, relevadas en noviembre y diciembre de 2025. Universidad de San Andrés, [«Una estrategia de competitividad en inteligencia artificial para la Argentina»](https://www.udesa.edu.ar/noticias/la-ia-podria-aportar-usd-17700-millones-la-economia-argentina-hacia-2030) (octubre de 2026), datos de 2025.*

Los porcentajes de nadIA describen a las pymes de esa encuesta, no a todas las pymes del país ni a comercio o servicios en general. El 44,4% es sobre las que ya usan IA. Según UdeSA, la adopción formal sigue siendo baja, y al mismo tiempo crece lo que el estudio llama shadow AI: empleados que usan herramientas de consumo desde cuentas personales, sin que lo sepa el área de tecnología.

El problema no es que el equipo las use. Es que nadie coordinó cómo.

## Qué es la IA en las sombras (y por qué no conviene prohibirla)

La shadow AI es, en criollo, que cada uno use ChatGPT, Gemini, Copilot u otra herramienta por su cuenta, muchas veces con una cuenta personal, sin que la empresa sepa qué se usa ni qué datos se cargan.

Prohibirla de un día para el otro suele fallar: la gente la sigue usando desde el celular, y la empresa pierde la ganancia de productividad y, además, queda sin visibilidad. Tiene más sentido dar un camino oficial: reglas claras, herramientas aprobadas y, cuando hace falta, un agente conectado a los sistemas.

Tampoco hace falta asustar al equipo. Que estén usándola muestra que hay tareas que se pueden hacer mejor. El riesgo aparece cuando no hay reglas.

## Los riesgos concretos para una pyme

No hace falta un escenario extremo. Alcanza con lo de todos los días: un vendedor que pega la cartera para «armar una campaña», un presupuesto que sale con un precio inventado, o un historial de chats que se va con la persona que se va.

| Riesgo | Ejemplo | Qué lo evita |
| --- | --- | --- |
| Datos de clientes en cuentas personales | Un vendedor pega la cartera de clientes con teléfonos para «armar una campaña» | Lista de datos que no se cargan + herramienta aprobada |
| Respuesta incorrecta que sale sin revisar | Un presupuesto con un precio o una condición inventada | Una persona revisa todo lo que sale a un cliente |
| Información sensible expuesta | Un contrato o un CV completo en un chat personal | Herramienta de empresa con controles + anonimizar |
| Nadie sabe qué se usó | No hay forma de saber qué datos salieron ni a dónde | Herramientas aprobadas y registro de uso |
| La cuenta se va con la persona | El empleado se va y se lleva el historial de chats con datos de la empresa | Cuentas de la empresa, no personales |

*Ejemplos ilustrativos; no son de un cliente real.*

OWASP, en su lista de riesgos para aplicaciones con modelos de lenguaje (2025), advierte que un modelo puede devolver información incorrecta con apariencia creíble ([LLM09, «Misinformation»](https://genai.owasp.org/llmrisk/llm092025-misinformation/)) y que puede revelar información sensible ([LLM02](https://genai.owasp.org/llmrisk/llm022025-sensitive-information-disclosure/)). Por eso una persona tiene que revisar lo que sale a un cliente, y hay datos que no se cargan en una herramienta personal.

En Argentina, el marco es la [Ley 25.326](https://www.argentina.gob.ar/normativa/nacional/ley-25326-64790/texto) de Protección de Datos Personales: el artículo 9 pide medidas de seguridad para evitar un tratamiento no autorizado, y el artículo 10 establece un deber de confidencialidad. Esto no es asesoramiento legal. Qué datos personales se pueden tratar, con qué consentimiento y con qué proveedor, lo tiene que revisar un abogado (o el responsable de protección de datos); la parte laboral de la política, también. Si la herramienta se paga como gasto de la empresa, el tratamiento impositivo lo ve el contador.

## Paso 1: una política de uso de IA en una página

No hace falta un reglamento de 20 hojas. Alcanza una página que se pueda copiar, comunicar y revisar. Abajo hay un modelo. Adaptalo con tu abogado (datos personales y aspectos laborales), hacelo firmar o, al menos, comunicalo por escrito, y revisalo cada seis meses.

**Política de uso de inteligencia artificial — [Empresa] — versión [fecha]**

1. **Para qué sí:** redactar, resumir, ordenar ideas, corregir textos, armar borradores.
2. **Herramientas aprobadas:** [lista]. Siempre con la cuenta de la empresa, nunca con una personal, para cualquier cosa que tenga datos de la empresa.
3. **Datos que nunca se cargan** en una herramienta no aprobada: datos personales de clientes y empleados, datos bancarios, contraseñas, contratos, precios internos y márgenes (ver semáforo).
4. **Revisión humana:** todo lo que sale a un cliente, proveedor u organismo (presupuestos, mails, respuestas) lo revisa una persona antes de mandarse. La IA puede equivocarse con seguridad.
5. **Decisiones:** la IA no decide sola sobre plata, precios, créditos, personal ni compromisos con clientes.
6. **Responsable:** [nombre] aprueba herramientas nuevas y responde dudas.
7. **Herramienta nueva:** se pide a [responsable] antes de usarla con datos de la empresa.
8. **Si algo salió mal** (se cargó un dato que no correspondía): se avisa a [responsable] el mismo día, sin castigo por avisar.
9. **Revisión:** esta política se revisa cada seis meses.

*Modelo orientativo. Adaptalo con tu abogado (datos personales y aspectos laborales).*

La idea de cada punto es simple. El «para qué sí» evita que la política suene a prohibición. Las herramientas aprobadas y la cuenta de la empresa evitan que los datos queden en un chat personal. La revisión humana y la regla de no decidir sola cubren lo que más puede costar caro: un precio, un mail o un compromiso que salió sin que nadie lo viera. Y el aviso sin castigo sirve para que, si alguien se equivoca, lo diga el mismo día.

Para redactar, un buen prompt ayuda; para eso está la guía de [cómo escribir prompts para ChatGPT](/blog/como-escribir-prompts-chatgpt). Con datos de la empresa, primero van las reglas.

## Paso 2: qué datos nunca se cargan en una herramienta personal

Si hay una sola regla que el equipo tiene que recordar, es esta: hay datos que no se pegan en un ChatGPT personal, aunque «sea solo para armar un texto».

| Rojo: nunca en una herramienta personal | Amarillo: solo en la herramienta aprobada por la empresa | Verde: libre |
| --- | --- | --- |
| DNI, CUIT, teléfonos, domicilios y mails de clientes o empleados; datos de salud; CV; datos bancarios y de tarjetas; contraseñas y accesos; contratos; listas de precios internas y márgenes | Datos de clientes anonimizados; informes internos; textos de propuestas sin datos personales | Textos públicos de la web de la empresa; borradores sin datos; ideas; correcciones de redacción |

*Orientativo. Qué datos puede tratar tu empresa y con qué proveedor, revisalo con un abogado.*

En la práctica: un mail genérico o un párrafo de la web, sí. La planilla de clientes con teléfonos, un contrato o los márgenes, no. Si hace falta trabajar con información de clientes, que sea en la herramienta aprobada y, cuando se pueda, con datos anonimizados.

## Paso 3: de cada uno con su ChatGPT a un agente oficial conectado a tus sistemas

Una cuenta de empresa ya es un paso adelante respecto de que cada uno use su ChatGPT personal. Un agente oficial, conectado a los sistemas, va más lejos: no depende de copiar y pegar, y se puede controlar qué ve cada persona y qué se puede hacer.

| | ChatGPT personal de cada empleado | Cuenta de empresa (por ejemplo, ChatGPT Business) | Agente oficial conectado a tus sistemas |
| --- | --- | --- | --- |
| Quién controla las cuentas | Cada empleado | La empresa (administradores) | La empresa |
| Uso de los datos para entrenar modelos | Según la configuración de cada cuenta | Por defecto no, según OpenAI | Depende del proveedor del modelo y del contrato; preguntarlo |
| Acceso a los sistemas | No (copiar y pegar) | Con conectores que habilita la empresa | Sí, con permisos definidos por persona |
| Registro de lo que se hizo | No para la empresa | Sí, para administradores (según plan) | Sí, diseñado desde el inicio |
| Acciones (cargar un pedido, mandar un mensaje) | No | Limitadas | Sí, con aprobación humana para lo que importa |

*Según la [página de privacidad empresarial de OpenAI](https://openai.com/enterprise-privacy/), consultada el 19 de noviembre de 2026. Otras herramientas tienen condiciones propias: revisalas.*

Según OpenAI, en ChatGPT Business, Enterprise y la API los datos de la empresa no se usan para entrenar modelos por defecto, y hay controles de administración (en Business, los administradores pueden ver, exportar y borrar conversaciones del espacio de trabajo). En las cuentas personales las reglas son otras. Eso no convierte a ninguna herramienta en «100% segura»: sigue haciendo falta una política sobre qué datos se cargan.

Un agente oficial se conecta a los sistemas de la pyme (gestión, CRM, planillas) con **solo los permisos que necesita** —OWASP lo señala como riesgo de «agencia excesiva» ([LLM06](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/))—, cada persona ve lo que le toca, **queda registro** de lo que se preguntó y se hizo, y lo que mueve plata, precios o compromisos **lo aprueba una persona**. No es lo mismo que un chatbot que solo responde frases armadas: la diferencia la explicamos en [agentes de IA vs. chatbots](/blog/agentes-de-ia-vs-chatbots) y en cómo [implementar un agente](/blog/agentes-de-ia-para-pymes-como-implementarlos).

La [guía de la AAIP](https://www.argentina.gob.ar/noticias/guia-de-la-aaip-para-usar-la-inteligencia-artificial-de-manera-responsable) para usar IA de manera responsable recomienda una evaluación de impacto antes de implementar. No reemplaza el criterio de un abogado, pero es un buen punto de partida.

### Por dónde empezar

Preguntale al equipo para qué están usando IA hoy: es la mejor fuente. Elegí dos o tres de esas tareas, arrancá por una, midé si sirve, y recién después sumá otras. No hace falta un plan de doce meses para dar el primer paso.

En Nimbo armamos [agentes de IA](/agentes-de-ia) conectados a los sistemas de la pyme, que conocen precios, horarios, stock y políticas, atienden WhatsApp e Instagram, toman pedidos y turnos, y te pasan la conversación cuando hace falta una persona. También publicamos un [asistente con IA](/proyectos) conectado a la base de datos de un negocio, donde el equipo pregunta en lenguaje natural. Si el camino es conectar sistemas, eso es [automatización e integración](/automatizacion-e-integracion).

## En resumen

La IA ya está en tu pyme; prohibirla no suele servir. Una página de reglas, una lista de datos que no se cargan en una herramienta personal y un agente oficial, con permisos, registro y revisión humana, la convierten en una herramienta de la empresa.

Si querés ver qué tareas de tu equipo conviene pasar a un agente oficial, **[agendá un diagnóstico de 20 minutos, sin cargo](/diagnostico)**. Lo vemos con lo que el equipo ya está haciendo.

## Preguntas frecuentes

### ¿Qué es la shadow AI o IA en las sombras?

La shadow AI es el uso de herramientas de inteligencia artificial, como ChatGPT, por parte de empleados que las adoptan por su cuenta, muchas veces desde cuentas personales, sin que la empresa sepa qué herramienta usan ni qué datos cargan. En la encuesta nacional de CEPE Di Tella y Fundar, en el 44,4% de las pymes que usan IA son las áreas y los empleados quienes la adoptan sin coordinación central, y el 72,5% opera sin ninguna pauta sobre su uso.

### ¿Está mal que mis empleados usen ChatGPT?

No: muestra que hay tareas que se pueden hacer mejor. El problema es hacerlo sin reglas: datos de clientes en cuentas personales, respuestas que salen sin revisar y nadie que sepa qué se usó.

### ¿Qué datos no hay que cargar nunca en ChatGPT?

En una herramienta personal, no cargues datos personales de clientes o empleados (DNI, CUIT, teléfonos, domicilios, datos de salud, CV), datos bancarios y de tarjetas, contraseñas y accesos, listas de precios internas y márgenes, contratos ni lo que la empresa marque como confidencial. En una herramienta aprobada, igual conviene anonimizar cuando se pueda y revisar el caso con un abogado.

### ¿Qué tiene que decir una política de uso de IA para una pyme?

Una política de uso de IA para una pyme puede entrar en una página: qué herramientas están aprobadas y con qué cuenta, qué datos no se cargan nunca (datos personales de clientes y empleados, datos bancarios, contraseñas, contratos, precios internos), qué revisa siempre una persona antes de mandarse, que la IA no decide sola sobre plata o compromisos, quién responde dudas y cada cuánto se revisa.

### ¿Es seguro usar ChatGPT en una empresa?

Depende del plan y de las reglas internas. Según OpenAI, en ChatGPT Business, Enterprise y la API los datos de la empresa no se usan para entrenar modelos por defecto y hay controles de administración, mientras que las cuentas personales tienen otras condiciones. Igual hace falta una política sobre qué datos se cargan y, para tareas con los sistemas de la empresa, un agente con permisos limitados, registro y aprobación humana.

### ¿Qué es un agente oficial y en qué se diferencia de que cada uno use su ChatGPT?

Un agente oficial lo controla la empresa, se conecta a los sistemas con permisos por persona, deja registro de lo que se preguntó y se hizo, y una persona aprueba lo que mueve plata, precios o compromisos. El ChatGPT personal de cada empleado no tiene ese control: la empresa no ve las cuentas ni los datos que se cargaron.

### ¿Conviene prohibir la IA en la empresa?

En general, no. Suele seguir usándose por fuera, y se pierde el beneficio de usarla bien. Es más útil una política breve, una lista de datos que no se cargan y un camino oficial para las tareas que más se están resolviendo con IA.
    `.trim(),
  },
  {
    slug: 'kit-4-0-automatizar-pyme-ia-como-pedirlo-proveedor',
    title: 'Kit 4.0 para automatizar tu pyme con IA: qué cubre, cómo pedirlo y cómo elegir proveedor',
    description:
      'Desde septiembre, el Kit 4.0 cubre hasta el 50% de kits de IA, CRM y comercio digital para pymes de cualquier sector. Requisitos, topes y pasos.',
    date: '2026-11-23',
    category: 'Transformación Digital',
    readTime: '12 min',
    content: `
## Respuesta corta

El Kit 4.0 es un programa del Ministerio de Economía ([Res. 8/2026](https://www.argentina.gob.ar/normativa/nacional/norma-425190/texto)) que cofinancia hasta el 50% del monto neto de kits estandarizados de transformación digital, con topes de $15 o $20 millones según el kit. Desde el 1 de septiembre de 2026 ([Res. 343/2026](https://www.argentina.gob.ar/normativa/nacional/norma-429516/texto)) pueden pedirlo empresas de cualquier sector con 2 años o más en la actividad, sin deuda fiscal ni previsional exigible y con Certificado MiPyME vigente, a través de un proveedor del listado oficial.

¿No sabés qué proceso de tu pyme conviene automatizar primero? Lo vemos en un **[diagnóstico de 20 minutos, sin cargo](/diagnostico)**.

## Qué cambió en septiembre: el Kit 4.0 ya no es solo para la industria

El programa nació con la [Res. 8/2026](https://www.argentina.gob.ar/normativa/nacional/norma-425190/texto) de la Secretaría de Industria, Comercio y PyME (Boletín Oficial del 27 de abril de 2026): un cofinanciamiento, a través del Beneficio FONPEC (el Fondo Fiduciario para la Promoción de la Economía del Conocimiento), para kits estandarizados. Al principio, solo para empresas industriales.

En septiembre hubo dos cambios, y no son el mismo.

| Norma | Publicada en el Boletín Oficial | Qué hizo |
| --- | --- | --- |
| Resolución 8/2026 (Secretaría de Industria, Comercio y PyME) | 27/04/2026 | Creó el Programa Kit 4.0 y sus Bases y Condiciones: cofinanciamiento mediante Beneficio FONPEC para kits estandarizados. Al principio, solo para empresas industriales |
| Resolución 343/2026 (misma Secretaría) | 01/09/2026 | Abrió el programa a empresas de cualquier sector económico y eliminó la nómina de actividades industriales (Anexo IV) |
| Disposición 106/2026 (Subsecretaría de Industria y Economía del Conocimiento) | 25/09/2026 | Sumó al catálogo los kits COM-01 Canales y Comercio Digital, COM-02 CRM, Automatización y Experiencia de Cliente, COM-03 Analítica e Inteligencia Artificial Comercial y CAL-01 Sistema de Gestión (ISO) |

La apertura a todos los sectores es de la [Res. 343/2026](https://www.argentina.gob.ar/normativa/nacional/norma-429516/texto), no de la [Disp. 106/2026](https://www.argentina.gob.ar/normativa/nacional/norma-430493/texto). La disposición es la que suma los kits de comercio, CRM e IA. Para una pyme de servicios, comercio o distribución que quiere automatizar, es la primera vez que este programa le aplica. En [transformación digital para pymes en Argentina](/blog/transformacion-digital-pymes-argentina) hablamos de por dónde empezar, más allá de un programa de financiamiento.

## Quién puede pedirlo

Según la Res. 343/2026, la empresa tiene que acreditar:

- 2 años o más en la actividad por la que se postula
- Actividad en la Argentina, sin distinción de sector
- No tener deuda fiscal ni previsional exigible al presentar
- Certificado MiPyME vigente

Las bases ([Res. 8/2026](https://www.argentina.gob.ar/normativa/nacional/norma-425190/texto), art. 6) también excluyen a quien figura como proveedor en el listado oficial: esa empresa no puede pedir el Kit como destinataria.

El encuadre de tu empresa (Certificado MiPyME, deudas, facturación, cómo se registra el beneficio) lo ve **tu contador**. Este post explica el programa en general; no es asesoramiento impositivo ni legal.

Los kits los presta un Proveedor PEC (Proveedor de la Economía del Conocimiento) del [listado oficial](https://www.argentina.gob.ar/economia/industria-y-economia-del-conocimiento/kit-40/kits-de-soluciones-digitales), habilitado para ese kit. El trámite es por TAD (Trámites a Distancia). Los requisitos de acceso están en «[Acceder al Kit 4.0](https://www.argentina.gob.ar/servicio/acceder-al-kit-40)».

## Qué kits le sirven a una pyme que quiere automatizar o usar IA

No es un cheque en blanco para cualquier proyecto. El programa financia kits estandarizados, con alcance acotado y entregables que se pueden verificar. Para automatizar o usar IA, los que más tienen sentido están en los [kits de comercio](https://www.argentina.gob.ar/economia/industria-y-economia-del-conocimiento/kit-40/kits-de-comercio):

| Kit | Para qué sirve | Alcance según la ficha | Tope del beneficio |
| --- | --- | --- | --- |
| COM-01 Canales y Comercio Digital | Un canal donde el cliente compra, pide, cotiza, reserva o saca turno (tienda online, portal B2B, catálogo con pedido, reservas) | Hasta 3 integraciones simples (por ejemplo, cobros, stock, gestión, mensajería o agenda); licencias hasta 12 meses | $15 M |
| COM-02 CRM, Automatización y Experiencia de Cliente | Ordenar clientes y el seguimiento comercial, con alertas y automatizaciones | Hasta 8 reglas o automatizaciones, 2 integraciones simples, 2 tableros con 15 indicadores en total, migración de hasta 5.000 registros | $15 M |
| COM-03 Analítica e Inteligencia Artificial Comercial | 1 o 2 casos de IA: priorizar clientes, pronosticar demanda, analizar conversaciones o un asistente que responde con información de la empresa | Hasta 4 fuentes de datos, 2 integraciones automatizadas, 15 usuarios finales; piloto de 4 a 8 semanas; licencias hasta 12 meses | $15 M |

*Resumen de las fichas oficiales y del Anexo I de la Disp. 106/2026. El detalle de componentes, entregables y exclusiones está en cada ficha técnica.*

El COM-02 es, en criollo, un [CRM](/blog/que-es-un-crm-y-por-que-tu-pyme-lo-necesita) con seguimiento, alertas y algunos tableros, no un proyecto abierto. También existe un Kit de Gestión (pedidos, compras, stock y producción básica), con el mismo tope de $15 millones; la ficha está escrita para una empresa industrial, así que si tu rubro es otro, revisala antes de armar el presupuesto.

### El kit de IA (COM-03), en detalle

El [COM-03](https://argentina.gob.ar/sites/default/files/kit_com-03_analitica_e_inteligencia_artificial_comercial.pdf) financia uno o dos casos de uso. La ficha prevé tres modalidades: **A)** predicción, priorización o recomendación (por ejemplo, a qué cliente contactar primero); **B)** inteligencia de conversaciones; **C)** un asistente comercial con IA que responde a partir de información de la empresa.

Pide un piloto de 4 a 8 semanas con datos reales y una implementación típica de 12 a 20 semanas. Incluye controles de acceso, revisión humana, trazabilidad y una evaluación de privacidad. Las licencias entran hasta 12 meses, para hasta 15 usuarios finales.

No financia tableros descriptivos como único resultado, ni un diagnóstico, un estudio o un prototipo que no quede en operación. Está pensado para una empresa que ya vende y tiene datos, no para arrancar de cero. Si lo que imaginás es un [agente de IA](/blog/agentes-de-ia-para-pymes-como-implementarlos) sobre información de la empresa, el encuadre más cercano es la modalidad C; que entre o no lo define la ficha y la evaluación del programa.

## ¿Mi proyecto entra? Tres ejemplos típicos

Ejemplos orientativos, no de un cliente real. La elegibilidad la define la ficha del kit y la evaluación de la Subsecretaría, no este artículo.

| Proyecto | Kit que podría corresponder | Qué hay que confirmar |
| --- | --- | --- |
| Tomar pedidos por WhatsApp y cargarlos en el sistema | COM-01 (catálogo con pedido o cotización, más integración con mensajería y el sistema de gestión) o COM-03 modalidad C (asistente con información de la empresa) | Si un agente de WhatsApp, por sí solo, cuenta como «canal» o como «asistente» elegible **no está confirmado**. La ficha de COM-01 habla de mensajería, no nombra WhatsApp. Confirmalo con el proveedor contra la ficha y, si hace falta, con la Subsecretaría |
| Un tablero de ventas, stock y cobranzas | Como parte de COM-02 (hasta 2 tableros) o como componente auxiliar de COM-03 | En COM-03 los tableros puramente descriptivos no se financian como único resultado |
| Conectar la tienda, el CRM o el WhatsApp con el sistema de gestión | Las integraciones simples que incluye cada kit (COM-01: hasta 3; COM-02: hasta 2; COM-03: hasta 2 automatizadas) | Que la integración esté dentro del alcance del kit; lo que exceda va aparte y sin el beneficio |

Si el caso es más grande que el kit, se puede hacer: se factura aparte, sin el beneficio. Eso tiene que quedar escrito en el presupuesto.

## Cuánto cubre de verdad (y quién cobra el beneficio)

Cubre **hasta el 50% del monto neto** facturado del kit, solo sobre componentes elegibles del catálogo, y con un tope según el tipo de kit. No es «el Estado paga la mitad» de cualquier proyecto.

| Tema | Qué dice la norma |
| --- | --- |
| Antigüedad | 2 años o más en la actividad por la que se postula |
| Sector | Cualquiera, con actividad en la Argentina (desde el 1/9/2026) |
| Situación fiscal | Sin deuda fiscal ni previsional exigible al presentar |
| Tamaño | Certificado MiPyME vigente |
| Cobertura | Hasta el 50% del monto neto facturado del kit (solo componentes elegibles del catálogo) |
| Tope por kit | $15.000.000 en kits básicos, de gestión, de comercio (incluido el COM-03 de IA) y de calidad; $20.000.000 en kits avanzados |
| Tope por empresa | $45.000.000 en la convocatoria; un kit por vez |
| IVA | Siempre a cargo de la empresa; no integra la base del beneficio |
| Quién recibe el beneficio | El proveedor, acreditado en su cuenta tributaria de ARCA después de que se aprueba la rendición |
| Cupo total | $9.000.000.000, hasta agotarlo |

*Fuente: [Res. 8/2026](https://www.argentina.gob.ar/normativa/nacional/norma-425190/texto) y [Res. 343/2026](https://www.argentina.gob.ar/normativa/nacional/norma-429516/texto) (SICyPyME), [Disp. 106/2026](https://www.argentina.gob.ar/normativa/nacional/norma-430493/texto) (SSIYEC) y el sitio oficial del [Kit 4.0](https://www.argentina.gob.ar/servicio/acceder-al-kit-40), consultados el 19 de noviembre de 2026. Los montos pueden cambiar: verificá en el sitio oficial antes de presentar.*

Tres puntos que cambian la cuenta:

1. **El kit de IA (COM-03) tiene tope de $15 millones, no de $20 millones.** Los $20 millones son solo para los kits avanzados (mantenimiento predictivo, visión artificial y otros de planta). El COM-03 está en banda básica, según el Anexo I de la Disp. 106/2026. Lo mismo vale para COM-01 y COM-02.
2. **El beneficio no es plata que te depositan a vos.** Se acredita en la cuenta tributaria de ARCA del proveedor, una vez aprobada la rendición (el TRC). La destinataria no es dueña de ese beneficio. En la factura se discrimina qué parte queda sujeta a una eventual cancelación mediante el Beneficio FONPEC.
3. **Si la rendición no se aprueba, total o parcialmente, la diferencia la paga la empresa.** El IVA, los adicionales y todo saldo neto que no se cancele con el beneficio quedan a su cargo.

Un ejemplo solo para entender la regla, **no es un precio** de un proveedor ni de un proyecto real: si el kit se factura $20 millones netos, el beneficio máximo sería $10 millones (el 50%). Si se factura $40 millones netos en un kit de banda básica, el tope sigue siendo $15 millones, no la mitad de 40.

Hay además un tope de $45 millones por empresa en la convocatoria, y se pide un kit por vez: el siguiente arranca cuando se aprueba la rendición del anterior. El cupo total es de $9.000 millones, hasta agotarlo. Este artículo no afirma cuánto cupo queda: eso no está publicado de un modo que se pueda decir acá.

Aunque el programa cubra hasta la mitad, la otra mitad (más el IVA y lo que quede afuera) tiene que rendir. En [cómo medir el ROI de una automatización](/blog/como-medir-el-roi-de-una-automatizacion) explicamos cómo mirar ese número.

## Cómo se pide, paso a paso

Necesitás CUIT y clave fiscal activos en ARCA, TAD adherido a ARCA y, si lo hace alguien en nombre de la empresa, la delegación de servicios. Los plazos de abajo son los de la norma; no hay un dato público de cuánto tarda en la práctica la aprobación o la acreditación.

:::flow
{ "title": "De la solicitud al beneficio", "steps": [
  { "title": "1. Kit, proveedor y presupuesto", "text": "Elegís el kit y un proveedor del listado, y pedís el presupuesto con la proforma oficial." },
  { "title": "2. Solicitud por TAD", "text": "Presentás la Solicitud de Elegibilidad (TSE) por Trámites a Distancia, con ese presupuesto." },
  { "title": "3. Ticket de reserva", "text": "Si la solicitud está completa, se emite el Ticket de Elegibilidad y Reserva de Cupo (TER) en hasta 10 días hábiles." },
  { "title": "4. Acta de inicio e implementación", "text": "Firman el acta de inicio dentro de 60 días corridos (si no, el ticket caduca). Después hay hasta 300 días más para implementar." },
  { "title": "5. Recepción, rendición y acreditación", "text": "Se firma el acta de recepción, el proveedor rinde (TRC) y, si se aprueba, el beneficio se acredita en su cuenta de ARCA." }
] }
:::
| Paso | Quién | Plazo según la norma |
| --- | --- | --- |
| 1. Elegir kit y proveedor del listado y pedir presupuesto (proforma oficial) | Pyme + proveedor | — |
| 2. Solicitud de Elegibilidad (TSE) por TAD, con el presupuesto | Pyme | — |
| 3. Ticket de Elegibilidad y Reserva de Cupo (TER) | Subsecretaría | Hasta 10 días hábiles desde la solicitud completa |
| 4. Acta de Inicio y Puesta en Marcha | Pyme + proveedor | Dentro de 60 días corridos del TER; si no, el TER caduca |
| 5. Implementación | Proveedor | Hasta 300 días corridos adicionales desde el acta de inicio |
| 6. Acta de Recepción Conforme | Pyme | Al terminar |
| 7. Rendición de cuentas y solicitud del beneficio (TRC) | Proveedor | Al terminar |
| 8. Acreditación del beneficio en ARCA | Programa → proveedor | Tras aprobar la rendición |

El detalle operativo está en «[Acceder al Kit 4.0](https://www.argentina.gob.ar/servicio/acceder-al-kit-40)».

## Cómo elegir proveedor (y qué tener por escrito antes de firmar)

El proveedor tiene que estar en el [listado oficial](https://www.argentina.gob.ar/economia/industria-y-economia-del-conocimiento/kit-40/kits-de-soluciones-digitales) y habilitado para **ese** kit. Un kit solo está «disponible» si hay al menos tres proveedores para él.

Eso no alcanza. El listado es **declarativo**: la Res. 8/2026 dice que no implica homologación, aval, recomendación ni auditoría técnica previa del Estado. Elegir sigue siendo tu responsabilidad.

**Checklist: cómo elegir un proveedor del Kit 4.0**

**Antes de pedir presupuesto**

- [ ] Figura en el listado oficial y está habilitado para el kit que querés
- [ ] Muestra proyectos parecidos al tuyo (rubro, tamaño, sistemas)
- [ ] Te explica qué caso de uso entra en el kit y qué queda afuera

**En el presupuesto**

- [ ] Discriminado con los ítems y nombres de la ficha del kit
- [ ] Adicionales separados (no entran en el beneficio)
- [ ] IVA a la vista
- [ ] Qué costos siguen después de los 12 meses de licencia

**Por escrito, antes de firmar**

- [ ] Qué pasa si la rendición no se aprueba total o parcialmente
- [ ] De quién son los accesos, los datos y lo que se desarrolla
- [ ] Capacitación y documentación para que tu equipo lo use sin depender del proveedor
- [ ] En proyectos de IA: revisión humana y quién ve qué datos

El contrato, si tenés dudas, lo revisa **un abogado**. El encuadre impositivo y el Certificado MiPyME, **tu contador**.

En Nimbo podemos ayudarte a delimitar el proyecto y a ver qué kit encaja con lo que necesitás: [agentes de IA](/agentes-de-ia) para WhatsApp e Instagram, [automatizaciones e integraciones](/automatizacion-e-integracion) con el sistema de gestión y [tableros](/datos-y-tableros) de ventas, stock y cobranzas. El diagnóstico es una videollamada de 20 minutos, sin cargo. El proveedor con el que presentes la solicitud tiene que figurar en el [listado oficial del programa](https://www.argentina.gob.ar/economia/industria-y-economia-del-conocimiento/kit-40/kits-de-soluciones-digitales): confirmalo ahí antes de avanzar.

## En resumen

El Kit 4.0, desde septiembre de 2026, está abierto a pymes de cualquier sector y suma kits de comercio, CRM e inteligencia artificial. Cubre hasta el 50% del monto neto, con un tope de $15 millones en los kits de IA y CRM (los $20 millones son solo para los kits avanzados). El beneficio se le acredita al proveedor, y si la rendición no se aprueba, la diferencia la paga la empresa. Lo importante es elegir bien el caso, el kit y el proveedor, y dejar por escrito qué pasa si algo no se aprueba.

Si querés ver qué proceso de tu pyme conviene automatizar primero, **[agendá un diagnóstico de 20 minutos, sin cargo](/diagnostico)**. Lo vemos con lo que tengas hoy.

## Preguntas frecuentes

### ¿Qué es el Kit 4.0 y quién puede pedirlo?

El Kit 4.0 es un programa del Ministerio de Economía ([Res. 8/2026](https://www.argentina.gob.ar/normativa/nacional/norma-425190/texto)) que cofinancia hasta el 50% del monto neto de kits estandarizados de transformación digital, con topes de $15 o $20 millones según el kit. Desde el 1 de septiembre de 2026 ([Res. 343/2026](https://www.argentina.gob.ar/normativa/nacional/norma-429516/texto)) pueden pedirlo empresas de cualquier sector con 2 años o más en la actividad, sin deuda fiscal ni previsional exigible y con Certificado MiPyME vigente, a través de un proveedor del listado oficial.

### ¿El Kit 4.0 cubre proyectos de inteligencia artificial?

Sí. Desde el 25 de septiembre de 2026 ([Disp. 106/2026](https://www.argentina.gob.ar/normativa/nacional/norma-430493/texto)) el catálogo incluye el kit COM-03 de Analítica e Inteligencia Artificial Comercial, que financia uno o dos casos de uso, como un asistente que responde con información de la empresa o el análisis de conversaciones, con un tope de beneficio de $15 millones y hasta el 50% del monto neto elegible. Tiene que quedar funcionando con usuarios reales: no cubre diagnósticos, estudios ni tableros descriptivos como único resultado.

### ¿Cuánto cubre el Kit 4.0?

Hasta el 50% del monto neto facturado del kit, con tope de $15 millones para kits básicos, de gestión, de comercio (incluido el de IA) y de calidad, y de $20 millones para los kits avanzados. El IVA y lo que exceda los paga la empresa. El beneficio se le acredita al proveedor, no se deposita en la cuenta de la pyme.

### ¿Cómo se pide el Kit 4.0, paso a paso?

Elegís kit y proveedor del listado, pedís el presupuesto con la proforma oficial, presentás la Solicitud de Elegibilidad por TAD, recibís el ticket de reserva, firmás el acta de inicio dentro de 60 días, se implementa y, al terminar, firmás el acta de recepción y el proveedor rinde. Los plazos son los de la norma; no hay un dato público de cuánto tarda en la práctica.

### ¿Cómo elijo un proveedor del Kit 4.0?

El proveedor tiene que figurar en el listado oficial del programa y estar habilitado para el kit elegido, pero el listado es declarativo: no implica aval ni auditoría del Estado. Conviene pedir casos parecidos, un presupuesto discriminado según la ficha del kit, por escrito qué pasa si la rendición no se aprueba, y la transferencia de accesos, datos y documentación al terminar.

### ¿El Estado me deposita la plata?

No. Se acredita en la cuenta tributaria de ARCA del proveedor, después de aprobarse la rendición. La pyme no es dueña de ese beneficio ni puede exigir que se lo transfieran.

### ¿Qué pasa si el proyecto no se aprueba en la rendición?

Si la rendición no se aprueba, total o parcialmente, el saldo que no se cancele con el beneficio lo paga la empresa, igual que el IVA y los adicionales. Dejá ese escenario por escrito antes de firmar.

### ¿Puedo pedir más de un kit?

Sí, hasta $45 millones de beneficio por empresa en la convocatoria, pero de a un kit por vez: el siguiente arranca cuando se aprueba la rendición del anterior.
    `.trim(),
  },
  {
    slug: 'preguntarle-a-tus-datos-con-ia-ventas-stock-cobranzas',
    title: 'Tu pyme quiere IA pero no mira sus datos: cómo preguntarles a tus ventas, stock y cobranzas en castellano',
    description:
      'El 55% de las pymes ve a la IA como clave y solo el 12% menciona el análisis de datos. Qué ordenar y qué preguntarle a un agente.',
    date: '2026-11-23',
    category: 'Inteligencia Artificial',
    readTime: '10 min',
    content: `
## Respuesta corta

¿Puedo preguntarle a los datos de ventas, stock y cobranzas de mi pyme con IA? Sí, siempre que estén ordenados y conectados. Un agente conectado a tu sistema de gestión, tus planillas y tus cobros puede responder en castellano preguntas como «¿qué clientes me deben hace más de 60 días?» o «¿qué vendí este mes por vendedor?», consultando los datos reales, no inventando. Si el dato no existe o no está cargado, tiene que decirlo en vez de estimar, y los números que deciden plata los confirma una persona.

¿Querés saber qué preguntas podrías hacerle a tus datos? Lo vemos en un **[diagnóstico de 20 minutos, sin cargo](/diagnostico)**.

## Querés IA, pero ¿cuándo fue la última vez que miraste tus números?

Si ya usaste ChatGPT para un mail o un resumen, es natural preguntarse si también puede hablar con los números de la empresa. Para eso necesita datos ordenados: un código por cliente, una sola versión de las ventas, cobranzas imputadas a tiempo. Sin eso, no tiene a qué preguntarle. Para escribir mails sirve el [ChatGPT suelto](/blog/como-escribir-prompts-chatgpt); para tus números, es otra cosa.

El [Barómetro de Pymes 2025 de Chubb](https://www.chubb.com/content/dam/chubb-sites/chubb-com/ar-es/empresas/recursos/estudio-barometro-pymes-arg-v2.pdf) (encuesta de agosto-septiembre de 2025, difundida en prensa en octubre y noviembre de 2026) muestra la brecha: el 55% de las pymes encuestadas considera a la inteligencia artificial la tecnología más relevante para su futuro, el 30% menciona ChatGPT y asistentes virtuales, y solo el 12% menciona la analítica y el Big Data.

| Tecnología | % de pymes que la menciona |
| --- | --- |
| Inteligencia artificial | 55% |
| GPT y asistentes virtuales | 30% |
| Conectividad 5G | 24% |
| Internet de las cosas | 19% |
| Robotización de procesos | 16% |
| Nube | 13% |
| Analítica y Big Data | 12% |

*Fuente: Chubb, Barómetro de Pymes 2025 (Argentina). Encuesta online a 202 propietarios y empleados de pymes de grandes centros urbanos, del 29 de agosto al 4 de septiembre de 2025; margen de error ±6,9%. Respuesta múltiple. Dos de cada tres pymes de la muestra tienen entre 1 y 9 trabajadores.*

La pregunta es qué tecnologías consideran relevantes para el futuro, no cuántas las usan ni cuánto invierten. La muestra es de 202 casos y, en su mayoría, de empresas de 1 a 9 personas: no es un retrato de todas las pymes. Aun así, la brecha es clara: muchas piensan en la IA que conversa y pocas en los datos que esa IA necesitaría.

## Tablero y agente: para qué sirve cada uno

No compiten. El tablero muestra lo de todos los días y avisa cuando algo sale de lo normal; el agente responde la pregunta puntual que el tablero no tiene. Los dos miran los mismos datos ordenados.

|  | Tablero | Agente |
| --- | --- | --- |
| Para qué | Ver lo de todos los días de un vistazo | Responder la pregunta puntual |
| Cómo se usa | Lo abrís o te llega un aviso | Le escribís en castellano |
| Ejemplo | Cobranzas vencidas por tramo, ventas del mes vs. el anterior | «¿Qué clientes de zona norte me deben hace más de 60 días?» |
| Necesita | Datos ordenados y actualizados | Los mismos datos, más reglas de qué puede ver cada uno |
| Riesgo | Que nadie lo mire | Que responda algo incorrecto con seguridad |

Si todavía no tenés clara la diferencia entre un agente y un bot de respuestas fijas, arrancá por [agentes de IA vs. chatbots](/blog/agentes-de-ia-vs-chatbots). Para un panorama más amplio, está la [guía de IA para pymes argentinas](/blog/ia-para-pymes-argentinas-guia-2026).

## Qué tenés que ordenar antes

Antes de preguntarle nada a un agente, hay que poner un poco de orden. No hace falta ordenar toda la empresa: alcanza con lo que necesitan las preguntas que sí querés hacer.

- Un código único por cliente y por producto, sin duplicados. Si el mismo cliente figura dos veces, el saldo sale mal.
- Una sola fuente por dato. Si las ventas viven en el sistema y en dos planillas, el agente no sabe cuál es la buena.
- Fechas, montos y moneda en un formato consistente: con o sin IVA, pesos o dólares, un criterio solo.
- Definiciones escritas: qué es una venta (¿el pedido, la factura, lo cobrado?), qué es «cobrado» y qué es un saldo vencido.
- Datos que se actualizan solos, no un Excel que alguien sube cuando puede.
- Quién puede ver qué. El vendedor ve su cartera, no la de todos.

Sin esto, el agente puede contestarte con seguridad un número que no cierra.

## Qué conexiones hacen falta

Para que el agente consulte datos reales, hay que conectar las fuentes. Una **API** es la puerta que el sistema deja abierta para que otro programa lea o cargue datos, con una llave que generás vos.

Las conexiones típicas son tres:

- **El sistema de gestión**, por API o por exportaciones programadas. Sistemas como Xubio tienen una API oficial que expone clientes, productos, stock, comprobantes y cobranzas (documentación consultada el 18 de noviembre de 2026). Si usás Tango u otro sistema, consultá con tu distribuidor qué datos se pueden leer: no lo relevamos para este post. Si no hay API, se puede arrancar con exportaciones que salgan solas.
- **Planillas de Google o Excel** que hoy son la «verdad» de algún proceso.
- **Banco y Mercado Pago**, para cruzar lo cobrado con lo facturado.

Conectar esas fuentes, para que cada dato se cargue una sola vez, es el trabajo de [automatización e integración](/automatizacion-e-integracion).

## Qué preguntas responde bien un agente (y cuáles no)

El agente traduce tu pregunta en castellano a una consulta sobre los datos y te devuelve el resultado. Si no encuentra el dato, lo tiene que decir. No predice el mes que viene ni adivina el porqué de una caída.

| Área | Responde bien | Cuidado | No le pidas |
| --- | --- | --- | --- |
| Cobranzas | «¿Quién me debe hace más de 60 días y cuánto?» | Si los pagos se imputan tarde en el sistema, el saldo puede estar viejo | Que mande reclamos de deuda solo |
| Ventas | «¿Qué vendí este mes por vendedor comparado con el anterior?» | Definir si es con o sin IVA, facturado o pedido | «¿Por qué bajaron las ventas?» como si supiera la causa |
| Stock | «¿Qué productos tienen menos de una semana de stock al ritmo actual?» | Depende de que el stock esté bien cargado | Que haga la compra al proveedor sin aprobación |
| Clientes | «¿Qué clientes compraron el año pasado y este año no?» | Cruzar bien clientes con dos códigos | Datos de un cliente a quien no corresponde |

*Ejemplos ilustrativos; no son de un cliente real.*

En resumen: consultas concretas sobre datos que existen, sí. Preguntas vagas, datos que nadie cargó o predicciones, no.

## Lo que tiene que revisar una persona

Un semáforo corto alcanza:

- **Verde:** ver datos. «¿Cuánto me deben en este tramo?» o «¿qué se vendió esta semana?» puede responderlo el agente, siempre que los datos estén al día.
- **Amarillo:** números para decidir. Antes de cortarle el crédito a un cliente o de definir cuánto comprar, una persona confirma el número.
- **Rojo:** el agente no cambia datos ni manda reclamos de deuda solo. Consultar es una cosa; actuar sobre la cuenta de un cliente, otra.

No es capricho. OWASP, en su lista de riesgos para aplicaciones con modelos de lenguaje (2025), señala que los modelos pueden dar información incorrecta con apariencia creíble ([LLM09](https://genai.owasp.org/llmrisk/llm092025-misinformation/)) y que hay que darles solo los permisos que necesitan ([LLM06](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/)). Para consultar, el acceso tiene que ser de solo lectura. Los controles mínimos están en [agentes de IA para pymes](/blog/agentes-de-ia-para-pymes-como-implementarlos).

## Privacidad: los datos de tus clientes

Estás trabajando con saldos, nombres y movimientos. No es un chat suelto: permisos por persona, registro de lo que se preguntó, acceso de solo lectura para el agente, y no subir bases con datos personales a una herramienta externa sin un acuerdo. Mandar un Excel a ChatGPT para «una consulta rápida» deja datos de clientes en un servicio que no es tu sistema.

En Argentina, el marco es la [Ley 25.326](https://www.argentina.gob.ar/normativa/nacional/ley-25326-64790/texto) de Protección de Datos Personales y la [guía de la AAIP](https://www.argentina.gob.ar/noticias/guia-de-la-aaip-para-usar-la-inteligencia-artificial-de-manera-responsable) para usar IA de manera responsable. Esto no es asesoramiento legal. OWASP también advierte el riesgo de que un sistema con IA revele información sensible ([LLM02](https://genai.owasp.org/llmrisk/llm022025-sensitive-information-disclosure/)).

## Por dónde empezar

No hace falta ordenar toda la empresa de entrada. Tres pasos alcanzan:

:::flow
{ "title": "Por dónde empezar", "steps": [
  { "title": "1. Elegí tres preguntas", "text": "Las que hoy te cuestan una mañana de Excel: quién debe, qué se vendió, qué se está por quedar sin stock." },
  { "title": "2. Ordená y conectá solo eso", "text": "Códigos, una sola fuente, definiciones y la conexión de esas fuentes. El resto puede esperar." },
  { "title": "3. Tablero primero, agente encima", "text": "El tablero cubre lo de todos los días; el agente entra después, para la pregunta puntual." }
] }
:::

**Checklist: antes de preguntarle a tus datos con IA**

**Ordenar**

- [ ] Código único por cliente y por producto (sin duplicados)
- [ ] Una sola fuente por dato (no tres planillas de ventas)
- [ ] Fechas, montos y moneda en formato consistente (con o sin IVA, pesos o dólares)
- [ ] Definiciones escritas: qué es venta, cobrado, vencido
- [ ] Datos que se actualizan solos, no un Excel que alguien sube

**Conectar y cuidar**

- [ ] Conexión de solo lectura para el agente
- [ ] Permisos por persona: cada uno ve lo que le toca
- [ ] Registro de qué se preguntó y qué respondió
- [ ] Que el agente diga «no tengo ese dato» en vez de estimar
- [ ] Una persona confirma los números que deciden plata

En Nimbo armamos [tableros](/datos-y-tableros) que juntan ventas, stock y cobranzas y avisan cuando algo sale de lo normal. También publicamos un [asistente con IA](/proyectos) conectado a la base de datos de un negocio de salas de juego: el equipo pregunta en castellano y recibe números y gráficos reales. No publicamos métricas de ese proyecto. Si el paso siguiente es un [agente de IA](/agentes-de-ia) para el día a día, lo vemos con tus fuentes.

## En resumen

La IA que conversa necesita datos ordenados. El tablero sirve para lo de todos los días; el agente, para la pregunta puntual sobre esos mismos datos. Y una persona confirma los números que deciden plata.

Si querés ver qué preguntas podrías hacerle a tus datos, **[agendá un diagnóstico de 20 minutos, sin cargo](/diagnostico)**. Lo vemos con tus sistemas y tus planillas.

## Preguntas frecuentes

### ¿Puedo preguntarle a los datos de ventas de mi pyme con IA?

Sí, siempre que los datos estén ordenados y conectados. Un agente de IA conectado al sistema de gestión, las planillas y los cobros de una pyme puede responder en castellano preguntas como «¿qué clientes me deben hace más de 60 días?» o «¿qué vendí este mes por vendedor?», consultando los datos reales. Si el dato no existe o no está cargado, el agente tiene que decirlo en vez de estimar, y los números que deciden plata los confirma una persona.

### ¿Qué tengo que ordenar antes de usar IA con los datos de mi empresa?

Antes de usar IA con los datos de una pyme conviene tener un código único por cliente y por producto, una sola fuente para cada dato, fechas, montos y moneda en formato consistente, definiciones escritas de qué es una venta, una cobranza o un saldo vencido, y datos que se actualicen solos. También hay que definir qué puede ver cada persona y darle al agente acceso de solo lectura.

### ¿Qué tecnologías consideran más relevantes las pymes argentinas, según Chubb?

Según el Barómetro de Pymes 2025 de Chubb (encuesta online a 202 pymes argentinas, agosto-septiembre de 2025), el 55% considera a la inteligencia artificial la tecnología más relevante para su futuro, el 30% menciona ChatGPT y asistentes virtuales y solo el 12% menciona la analítica y el Big Data. La brecha muestra que muchas pymes piensan en la IA que conversa antes que en ordenar los datos que esa IA necesita. Dos de cada tres pymes de la muestra tienen entre 1 y 9 trabajadores.

### ¿Puedo subir mi Excel a ChatGPT y listo?

Para una pregunta suelta puede servir, pero no es un sistema: el archivo queda viejo al día siguiente, no se cruza con el resto de las fuentes y subís datos de clientes a una herramienta externa. Para el día a día conviene un agente conectado a datos que se actualizan solos.

### ¿Necesito un tablero si ya tengo un agente?

El tablero no reemplaza al agente, ni al revés. El tablero muestra lo de todos los días y avisa cuando algo sale de lo normal; el agente responde la pregunta puntual. Los dos se apoyan en los mismos datos ordenados.

### ¿La IA puede inventar un número?

Sí. Los modelos pueden dar información incorrecta con apariencia creíble (OWASP, riesgo LLM09). Por eso el agente tiene que consultar datos reales, decir cuando no tiene el dato, y una persona confirma los números que deciden plata.

### ¿Qué pasa con la privacidad de los datos de mis clientes?

Hay que limitar qué ve cada persona, registrar lo que se preguntó, darle al agente acceso de solo lectura y no subir bases con datos personales a herramientas externas sin un acuerdo. En Argentina aplica la Ley 25.326 y la guía de la AAIP sobre IA responsable. Esto no reemplaza un asesoramiento legal.
    `.trim(),
  },
  {
    slug: 'sincronizar-stock-tiendanube-mercado-libre-sistema-de-gestion',
    title: 'Cómo sincronizar el stock de Tiendanube y Mercado Libre con tu sistema de gestión (sin sobrevender)',
    description:
      'Por qué se sobrevende, qué traen Tango, Bejerman y Xubio, qué permiten Tiendanube y Mercado Libre y qué pruebas pedir antes de confiar en la integración.',
    date: '2026-11-23',
    category: 'Automatización & IA',
    readTime: '10 min',
    content: `
## Respuesta corta

¿Cómo sincronizo el stock de Mercado Libre y Tiendanube con mi sistema de gestión? Se elige un solo lugar que manda sobre el stock, casi siempre el sistema de gestión, y se lo conecta con cada canal por su integración oficial o por API (la puerta que el sistema deja abierta para que otro programa lea o cargue datos). Las ventas de Mercado Libre y Tiendanube bajan al sistema, que descuenta y actualiza el número en todos los canales. Las dos plataformas tienen API oficial para actualizar stock, también por depósito, y avisos (notificaciones) que avisan cuando entra una venta.

¿Te pasó de vender algo que ya no tenías? Revisamos cómo se mueve tu stock en un **[diagnóstico de 20 minutos, sin cargo](/diagnostico)**.

## La última unidad: cómo se sobrevende una pyme

Un sábado se vende en el mostrador la última caja de un producto. A la noche entra una compra por Mercado Libre de ese mismo producto. El lunes hay que cancelar, el cliente se enoja y la publicación queda mal parada.

El problema casi nunca es «vender en muchos canales». Es que cada canal tiene su propio número, y durante un rato esos números no se hablan. Mientras la publicación sigue mostrando una unidad, alguien la puede comprar. Sobrevender no es mala suerte: es una ventana de tiempo sin sincronizar.

## Primero, una regla: un solo lugar manda sobre el stock

La regla de oro es simple: el stock se corrige en un solo lugar (casi siempre el sistema de gestión) y desde ahí se publica a los canales. Las ventas de los canales bajan a ese mismo lugar. Si corregís stock a mano en Mercado Libre y también en el sistema, la sincronización se pisa y nadie sabe cuál es el número bueno.

:::flow
{ "title": "Un solo lugar manda", "steps": [
  { "title": "1. Entra una venta", "text": "En el local, en Tiendanube o en Mercado Libre." },
  { "title": "2. Baja al sistema", "text": "La venta se registra en el sistema de gestión, que es quien manda." },
  { "title": "3. El sistema descuenta", "text": "Ahí se resta la unidad y queda el saldo real." },
  { "title": "4. Se actualizan los canales", "text": "El mismo número se publica en todos lados, o la publicación se pausa si ya no hay stock." }
] }
:::

## Los seis casos que rompen cualquier sincronización

Estos son los casos que, en la práctica, rompen una integración que «en teoría anda». Debajo, qué pedir en cada uno.

| Caso | Qué sale mal | Qué pedir |
| --- | --- | --- |
| Última unidad | Se vende en dos canales antes de que se actualice | Actualización apenas entra la venta (por aviso, no solo cada tantas horas) y stock de seguridad en productos de alta rotación |
| Reservas y cancelaciones | Una orden sin pagar descuenta stock que nunca se vende, o una cancelación no lo devuelve | Regla escrita: cuándo descuenta, cuándo devuelve, y qué pasa con las órdenes pendientes |
| Varios depósitos | El canal muestra el total de todos los depósitos, o el de uno solo que no corresponde | Mapa de qué depósito alimenta qué canal |
| Combos y kits | El combo sigue publicado aunque falte un componente | Stock del combo calculado desde sus componentes |
| Variantes | Se descuenta el talle o el sabor equivocado | SKU único por variante, igual en sistema y canales |
| Fallas y reintentos | La API no responde, el aviso llega dos veces o desordenado | Reintentos, control de duplicados y aviso cuando una actualización queda pendiente |

*Criterio de Nimbo a partir de la documentación de Tiendanube y Mercado Libre, consultada el 18 de noviembre de 2026; no es una norma.*

### La última unidad

El riesgo está en el tiempo entre la venta y la actualización en los otros canales. Con pocas unidades y mucha rotación, ese rato alcanza para vender dos veces lo mismo. No hay una frecuencia universal: depende del producto. En los que rotan mucho, conviene publicar un poco menos de lo que hay (un stock de seguridad) y actualizar apenas entra la venta, por el aviso de la plataforma, no solo en un lote cada tantas horas.

### Reservas, pagos pendientes y cancelaciones

Una orden sin pagar o una cancelación tiene que devolver el stock o no descontarlo, según la regla que elijas. Esa regla tiene que estar escrita. En Tiendanube, al cancelar una venta se elige si se restaura el stock, y la acción se aplica a todos los productos de la orden, no a algunos (ayuda de Tiendanube, actualizada el 18/09/2026). No encontramos documentado en qué momento exacto Tiendanube descuenta el stock (al crear la orden o al pagarla), así que no lo afirmamos: confirmalo con tu configuración y con una prueba.

### Varios depósitos

Mercado Libre y Tiendanube permiten manejar stock por ubicación. Hay que decidir qué depósito alimenta qué canal. Si el canal muestra el total de todos los depósitos, vas a vender algo que está en un lado y se necesita en otro. El detalle de cómo lo resuelve cada plataforma está en la tabla de más abajo.

### Combos y kits

Un combo no tiene stock propio: depende de sus componentes. Si el canal no lo entiende, hay que calcularlo en el sistema o en la integración. Si se vende el combo, tiene que bajar el stock de cada componente, y si falta uno, el combo no debería seguir publicado.

### Variantes (talle, color, sabor)

El stock vive en cada variante, no en el producto «genérico». Se cruza por un código único (SKU) que tiene que ser el mismo en el sistema y en cada canal. Sin eso, se descuenta el talle o el sabor equivocado y la sincronización no es confiable.

### Cuando la actualización falla

Las APIs tienen límites y a veces no responden; los avisos pueden llegar repetidos o desordenados. La integración tiene que reintentar, no duplicar ventas y avisar si algo quedó sin actualizar. Qué exige cada plataforma (tiempos de respuesta, reintentos, límites) está en esta tabla:

|  | Tiendanube | Mercado Libre |
| --- | --- | --- |
| Dónde vive el stock | En cada variante del producto, con un código (SKU) por variante | En la publicación, o por ubicación si la cuenta usa varios orígenes |
| Varios depósitos | Con varias ubicaciones, se actualiza por depósito; el total ya no sirve para actualizar | Por depósito del vendedor, por domicilio de despacho (en Argentina, editable por API) o en Full (lo gestiona Mercado Libre) |
| Sumar o reemplazar | Se puede reemplazar el número o sumar o restar una cantidad | Al actualizar por ubicación hay un control de versión: si otro proceso cambió el stock antes, hay que volver a leer |
| Avisos de venta | Cuando se crea, se paga o se cancela una orden, y cuando cambia un producto | Avisos de órdenes, de publicaciones y de cambios de stock por ubicación |
| Ojo con | Los avisos pueden llegar repetidos o desordenados. Si no hay respuesta en 3 segundos, reintenta 48 horas | Responder en 500 milisegundos; reintenta 1 hora y después se pierde. En varios orígenes, actualizar el número de la publicación puede dar «OK» sin cambiar el stock |
| Límites | 2 pedidos por segundo, con ráfagas de 40; las variantes tienen un límite según lo «pesado» del pedido | No se relevó un número general para este post |

*Fuente: documentación de Tiendanube de [variantes](https://tiendanube.github.io/api-documentation/resources/product-variant) y [avisos](https://tiendanube.github.io/api-documentation/resources/webhook) (actualizadas el 8/10/2026) y [límites de la API](https://tiendanube.github.io/api-documentation/intro), y de Mercado Libre de [stock distribuido](https://developers.mercadolibre.com.ar/stock-distribuido) (20/04/2026), [stock multiorigen](https://developers.mercadolibre.com.ar/stock-multiwarehouse) (14/08/2026) y [notificaciones](https://developers.mercadolibre.com.ar/es_ar/productos-recibe-notificaciones) (03/11/2026). Consultado el 18/11/2026.*

## Qué traen de fábrica Tango, Bejerman y Xubio

Lo que sigue sale de la documentación de cada sistema y de las plataformas, consultada el 18 de noviembre de 2026. Puede cambiar: confirmalo con tu proveedor. No recomendamos un sistema sobre otro ni migrar: la idea es que sepas qué trae el que ya usás.

|  | Tango (Tango Tiendas) | Bejerman (con Facturante) | Xubio |
| --- | --- | --- | --- |
| Baja ventas de Mercado Libre / Tiendanube | Sí, como órdenes de pedido en Tango | Sí, según el folleto (también otros canales) | Sí: importar y facturar ventas de Tiendanube; vincular y facturar ventas de Mercado Libre |
| Sube stock a las publicaciones | Sí, con licencia «Tiendas Full» (saldos y precios) | El folleto dice «sincronizar tus productos y mantener el stock actualizado» | No confirmado (no hay ayuda vigente sobre stock) |
| Frecuencia | Básica cada 6 horas; más frecuencia, consultar al área comercial (según la ayuda de Tango Tiendas; confirmalo con tu distribuidor) | No confirmado | No aplica / no confirmado |
| API para integraciones propias | Sí, API de Tango Tiendas (órdenes y consulta de datos, con aviso de cambios de stock) | No relevado | Sí, API de Xubio |

*«No confirmado» quiere decir que no lo encontramos publicado, no que no exista. Confirmalo con tu proveedor.*

### Tango

Tango Tiendas baja las ventas de Mercado Libre y Tiendanube como órdenes de pedido en Tango. Según la ayuda de Tango Tiendas, sincronizar saldos y precios hacia las publicaciones requiere la licencia «Tiendas Full», y la frecuencia básica es cada 6 horas; para más frecuencia hay que consultar al área comercial. Esa frecuencia no aparece en un sitio de Axoft (esas URLs dan 404): confirmala con tu distribuidor. También hay una API oficial de Tango Tiendas que recibe órdenes, consulta datos y avisa cuando cambia el saldo de stock, con un ambiente de prueba.

### Bejerman

Según el folleto «Omnicanalidad digital» de Thomson Reuters (© 2025), el módulo de omnicanalidad con Facturante integra Mercado Libre, Tiendanube y otros canales, y promete «sincronizar tus productos y mantener el stock actualizado». No encontramos detalle publicado de frecuencia, depósitos o combos. Es un folleto comercial: pedí esas respuestas a tu proveedor y comprobala con las pruebas de más abajo.

### Xubio

La ayuda de Xubio documenta vincular Tiendanube y Mercado Libre para importar y facturar ventas. No encontramos documentación vigente de sincronización de stock: la página de ayuda que aparece en buscadores da 404 (18/11/2026). No afirmamos que Xubio sincronice stock. Sí tiene API propia. Si lo necesitás, confirmalo con Xubio o armá una integración a medida.

## Cuando lo de fábrica no alcanza: qué hace una integración a medida

Si necesitás más frecuencia, varios depósitos, combos o reglas propias, se arma una integración con la API del sistema y de cada canal (con herramientas como n8n o Make, o con código). Es el tipo de conexión entre herramientas que describimos en [automatizá tu negocio con IA](/blog/automatiza-tu-negocio-con-ia). Lo que tiene que tener, sí o sí:

- Escuchar los avisos de venta de cada canal (no consultar solo cada tantas horas).
- Reintentar cuando falla, sin duplicar ventas.
- Registrar cada cambio de stock.
- Avisar cuando una actualización queda pendiente.

En Nimbo conectamos las herramientas para que [cada dato se cargue una sola vez](/automatizacion-e-integracion) y armamos [tableros de ventas, stock y cobranzas](/datos-y-tableros) con alertas. No decimos que ya tengamos hecha la integración con Tango, Bejerman, Xubio, Tiendanube o Mercado Libre: depende de cada caso. Si tu sistema no tiene integración ni API, el camino puede ser un [desarrollo a medida](/software-a-medida). Un [agente de IA](/agentes-de-ia) que responda stock por WhatsApp necesita este mismo número bien sincronizado.

## Las pruebas que tenés que pedir antes de dar el trabajo por terminado

Antes de confiar en la integración, pedí que prueben esto y te muestren el resultado:

- [ ] Vendo la última unidad en el sistema (o en el local) y la publicación pasa a cero en cada canal. ¿En cuánto tiempo?
- [ ] Entra una venta en Mercado Libre y otra en Tiendanube del mismo producto casi al mismo tiempo: ¿qué pasa?
- [ ] Cancelo una venta: ¿vuelve el stock donde corresponde?
- [ ] Una orden queda sin pagar: ¿descuenta o no, y por cuánto tiempo?
- [ ] Vendo un combo: ¿baja el stock de cada componente y se pausa el combo si falta uno?
- [ ] Vendo una variante (talle, color o sabor): ¿baja solo esa?
- [ ] Muevo mercadería de un depósito a otro: ¿cambia lo publicado en el canal correcto?
- [ ] Corto la conexión un rato: ¿se pone al día sola después, sin duplicar ventas?
- [ ] ¿Dónde veo el registro de cada cambio de stock y quién lo hizo?
- [ ] ¿A quién le llega el aviso cuando una actualización falla?

## Un tablero que te avise antes del quiebre

La sincronización evita sobrevender; el tablero te avisa antes de que duela. Sirve ver productos con stock bajo por canal, diferencias entre el sistema y cada canal, ventas canceladas por falta de stock y actualizaciones que fallaron. En Nimbo armamos ese tipo de [tableros](/datos-y-tableros), que se actualizan solos y avisan cuando algo se sale de lo normal. Para medir si vale la pena, está [cómo medir el ROI de una automatización](/blog/como-medir-el-roi-de-una-automatizacion).

## En resumen

Un solo lugar manda sobre el stock. Probá los seis casos (la última unidad, reservas, depósitos, combos, variantes y fallas) antes de dar el trabajo por terminado, y pedí una alerta cuando una actualización falle.

Si querés revisar cómo se mueve el stock entre tu sistema, Tiendanube y Mercado Libre, **[agendá un diagnóstico de 20 minutos, sin cargo](/diagnostico)**.

## Preguntas frecuentes

### ¿Cómo sincronizo el stock de Mercado Libre y Tiendanube con mi sistema de gestión?

Se elige un solo lugar que manda sobre el stock, casi siempre el sistema de gestión, y se lo conecta con cada canal por su integración oficial o por API. Las ventas de Mercado Libre y Tiendanube bajan al sistema, que descuenta y actualiza el número en todos los canales. Las dos plataformas tienen API oficial para actualizar stock, también por depósito, y notificaciones que avisan cuando entra una venta.

### ¿Cómo evito vender en Mercado Libre algo que no tengo?

Para no sobrevender hay que achicar el tiempo entre una venta y la actualización del stock en los otros canales, publicar un stock de seguridad en los productos que rotan mucho, definir qué pasa con las órdenes sin pagar y las cancelaciones, calcular los combos desde sus componentes y tener una alerta cuando una actualización falla. Antes de aceptar la integración, conviene probar la venta de la última unidad en dos canales a la vez.

### ¿Tango sincroniza el stock con Mercado Libre y Tiendanube?

Tango tiene Tango Tiendas, que baja las ventas de Mercado Libre y Tiendanube como órdenes de pedido. Según su ayuda, sincronizar saldos y precios hacia las publicaciones requiere la licencia «Tiendas Full», con una frecuencia básica de cada 6 horas; para más frecuencia hay que consultar al área comercial. También tiene una API para integraciones propias (noviembre de 2026). Confirmalo con tu distribuidor.

### ¿Xubio sincroniza el stock con Tiendanube y Mercado Libre?

La ayuda de Xubio documenta vincular esas cuentas para importar y facturar ventas. No encontramos documentación vigente de sincronización de stock (la página de ayuda que aparece en buscadores da 404). Confirmalo con Xubio o evaluá una integración a medida. Xubio sí tiene API propia.

### ¿Qué permiten Tiendanube y Mercado Libre por API?

Las dos permiten leer y actualizar stock, también por depósito o ubicación, y avisan cuando entra o se cancela una venta. En cuentas con varios depósitos, hay que actualizar por ubicación: en Mercado Libre, tocar solo el número de la publicación puede responder «OK» sin cambiar el stock real. Documentación consultada el 18 de noviembre de 2026.

### ¿Cada cuánto se tiene que actualizar el stock?

Depende de cuánto vendés y de cuántas unidades tenés de cada producto. Con pocas unidades y mucha rotación, cada minuto cuenta; con stock alto, alcanza con menos frecuencia. No hay un número universal: definilo producto por producto.

### ¿Qué pruebas pido antes de aceptar la integración?

Como mínimo: vender la última unidad y ver en cuánto tiempo llega a cero en cada canal; dos ventas casi al mismo tiempo en canales distintos; una cancelación y una orden sin pagar; un combo, una variante y un pase de depósito; cortar la conexión y ver si se pone al día sin duplicar; y dónde queda el registro y el aviso si algo falla.
    `.trim(),
  },
  {
    slug: 'documentar-con-ia-sistema-viejo-pyme',
    title: 'El sistema lo entiende una sola persona: cómo documentar con IA el software viejo de tu pyme antes de cambiarlo',
    description:
      'Cómo usar IA para entender y documentar el sistema viejo de tu pyme, qué te tienen que entregar, qué revisa una persona y cómo decidir qué conservar.',
    date: '2026-11-23',
    category: 'Transformación Digital',
    readTime: '9 min',
    content: `
## Respuesta corta

¿Qué hago si el programador que hizo mi sistema se fue? Primero, asegurá que la empresa tenga el código fuente (el texto del programa), el acceso a la base de datos (donde están guardados clientes, stock y facturas), los servidores, el dominio y las contraseñas, y una copia de seguridad probada. Después, documentá qué hace el sistema antes de tocarlo: qué procesos cubre, qué reglas de negocio tiene y con qué se conecta. Con ese mapa podés decidir si conviene conservarlo, integrarlo con herramientas nuevas o reescribir partes, y pedir presupuestos comparables.

¿Tu sistema lo entiende una sola persona? Lo charlamos en un **[diagnóstico de 20 minutos, sin cargo](/diagnostico)**.

## «Eso lo sabe Carlos»: el riesgo que no aparece en el balance

Sale una factura con un descuento raro y la única explicación es «así lo programó el que lo hizo». El sistema tiene reglas de negocio escondidas (descuentos por cliente, redondeos, comisiones, listas de precios) que nadie escribió. Funciona, hasta que la persona que lo entiende se va, se enferma o deja de atender el teléfono.

Ese riesgo no aparece en el balance. El 16 de noviembre de 2026, [Revista Mercado](https://mercado.com.ar/ruta-digital/pymes-la-ia-como-herramienta-para-documentar-sistemas-y-preservar-know-how-critico) publicó una nota sobre el conocimiento concentrado en pocas personas y sobre una pyme argentina que usó IA para documentar su sistema. Según la nota, en tres meses se documentó una plataforma de más de 800.000 líneas de código. Es un caso de la prensa, no un plazo típico ni un trabajo de Nimbo. La idea que sí sirve: antes de tirar el sistema viejo, entendelo.

## Cinco señales de que tu sistema es un riesgo

| Señal | Por qué importa |
| --- | --- |
| Lo entiende una sola persona | Si no está, nadie puede arreglar ni cambiar nada |
| El código no está en manos de la empresa | Sin código no hay documentación, arreglo ni migración |
| Cada cambio chico tarda o cuesta mucho | Suele indicar un sistema frágil o sin documentación |
| Nadie sabe con qué se conecta | Un cambio en un lado puede romper la facturación o el stock |
| No hay copia de seguridad probada | Un error o un ataque puede dejar a la empresa sin datos |

*Criterio de Nimbo; no es una norma.*

Si marcaste dos o más, el primer paso no es cambiar todo: es documentar. En [transformación digital para pymes en Argentina](/blog/transformacion-digital-pymes-argentina) hablamos de por dónde empezar cuando el sistema propio se volvió el centro de la operación.

## Antes de todo: asegurá el acceso

Sin acceso, no hay documentación posible. Y tiene que quedar a nombre de la empresa, no de una persona.

- [ ] Código fuente completo y actualizado
- [ ] Acceso a la base de datos
- [ ] Servidores o hosting, dominio y contraseñas
- [ ] Copia de seguridad reciente y probada (que se pueda restaurar)

Si alguna de estas cosas está en la computadora o en la cuenta de quien lo programó, resolvelo antes de pedir un presupuesto o de dejar que alguien «le pegue una mirada al código».

## Qué puede hacer la IA (y qué no)

Hoy un equipo puede usar agentes de IA para leer el código y la estructura de la base de datos y armar un mapa del sistema mucho más rápido que leyendo línea por línea. En noviembre de 2025, el Technology Radar de [Thoughtworks](https://www.thoughtworks.com/radar/techniques/using-genai-to-understand-legacy-codebases) pasó a la categoría Adopt el uso de IA generativa para entender sistemas heredados (o *legacy*): dice que ayuda a encontrar reglas de negocio, resumir la lógica e identificar dependencias, y que el esfuerzo crece con el tamaño y la complejidad del código.

Eso no significa que la IA «entienda todo» ni que no se equivoque.

| La IA ayuda a… | La IA no puede… |
| --- | --- |
| Resumir qué hace cada módulo, pantalla o archivo | Saber por qué se tomó una decisión de negocio |
| Encontrar reglas escondidas (descuentos, redondeos, comisiones) | Distinguir siempre un error de una regla a propósito |
| Listar las tablas de la base de datos y cómo se relacionan | Garantizar que lo que resume es correcto sin revisión |
| Detectar conexiones con otros sistemas (facturación, bancos, archivos) | Reemplazar la charla con quienes usan el sistema |
| Señalar partes frágiles o repetidas | Decidir qué conservar y qué reescribir |

OWASP, en su lista de riesgos para aplicaciones con modelos de lenguaje (2025), advierte que los modelos pueden generar información incorrecta con apariencia creíble ([LLM09, «Misinformation»](https://genai.owasp.org/llmrisk/llm092025-misinformation/)). El mapa que produce la IA lo tiene que validar una persona que conozca el negocio.

## Qué te tienen que entregar

Pedí entregables en lenguaje de negocio, no solo un informe técnico. Vos tenés que poder leer la documentación funcional.

| Entregable | Qué tiene | Para quién |
| --- | --- | --- |
| Documentación funcional | Qué hace cada proceso y pantalla, en lenguaje de negocio, con las reglas encontradas | Dueño y equipo |
| Mapa de datos | Tablas principales, qué guarda cada una y cómo se relacionan | Quien mantenga o reemplace el sistema |
| Mapa de integraciones | Con qué se conecta el sistema y cómo (archivos, APIs, procesos manuales) | Dueño y proveedor |
| Lista de riesgos | Partes frágiles, dependencias viejas, falta de copias, accesos | Dueño |
| Preguntas abiertas | Lo que no se pudo confirmar, marcado «a confirmar» | Dueño y usuarios clave |
| Recomendación | Qué conservar, qué integrar, qué reescribir, en qué orden | Dueño |

Todo eso tiene que quedar a nombre de la empresa.

## Qué valida una persona

Cada regla de negocio que encuentra la IA se confirma con quien usa el sistema: administración, ventas, depósito. Si nadie puede confirmarla, se anota como «a confirmar», no se da por buena. La IA acelera el mapa; no reemplaza esa charla.

Los controles de sentido común (qué puede hacer sola, qué revisa una persona) son los mismos que describimos en [agentes de IA para pymes](/blog/agentes-de-ia-para-pymes-como-implementarlos).

## Cuidá los datos de tus clientes en el proceso

Para documentar alcanza con el código y la **estructura** de la base (qué tablas hay y cómo se relacionan), no con los datos reales de clientes. Si hacen falta datos, que sea una copia con datos personales ocultos o de prueba. Pedí un acuerdo de confidencialidad a quien lo haga.

En Argentina, el marco es la [Ley 25.326](https://www.argentina.gob.ar/normativa/nacional/ley-25326-64790/texto) de Protección de Datos Personales y la [guía de la AAIP](https://www.argentina.gob.ar/noticias/guia-de-la-aaip-para-usar-la-inteligencia-artificial-de-manera-responsable) para usar IA de manera responsable. Esto no es asesoramiento legal. OWASP también señala el riesgo de que un sistema con IA revele información sensible ([LLM02](https://genai.owasp.org/llmrisk/llm022025-sensitive-information-disclosure/)).

## Con el mapa en la mano: conservar, integrar o reescribir

Con el mapa se puede decidir con más claridad, y se puede ir por partes, empezando por lo que más duele.

| Camino | Cuándo conviene | Riesgo principal |
| --- | --- | --- |
| Conservar (y documentar) | El sistema funciona y el problema es solo que nadie lo entiende | Seguir dependiendo de tecnología vieja |
| Integrar | Funciona, pero hay que conectarlo con WhatsApp, la web, un tablero o Mercado Libre | Que la integración dependa de partes frágiles |
| Reescribir por partes | Hay módulos rotos o que frenan el negocio | Perder reglas si no se documentaron antes |
| Reemplazar por un sistema de mercado | Lo que hace el sistema ya existe hecho y no hay un proceso propio | Adaptarse al sistema nuevo y migrar datos |

Reescribir todo de cero sin entender lo viejo es la forma más cara de perder reglas que nadie anotó. Si el camino es conectar el sistema con otras herramientas, eso es [automatización e integración](/automatizacion-e-integracion). Y con el mapa de datos también se puede armar un [tablero](/datos-y-tableros).

**Checklist: antes de documentar o cambiar tu sistema**

**Acceso (a nombre de la empresa)**

- [ ] Código fuente completo y actualizado
- [ ] Acceso a la base de datos
- [ ] Servidores o hosting, dominio y contraseñas
- [ ] Copia de seguridad reciente y probada (que se pueda restaurar)

**Lo que tenés que pedirle a quien documente**

- [ ] Documentación funcional en lenguaje de negocio, no solo técnica
- [ ] Mapa de datos e integraciones
- [ ] Lista de riesgos y preguntas abiertas marcadas «a confirmar»
- [ ] Que trabaje con la estructura de la base o con datos de prueba, no con datos reales de clientes
- [ ] Acuerdo de confidencialidad
- [ ] Que los entregables queden a nombre de la empresa
- [ ] Revisión de cada regla de negocio con quien usa el sistema

En Nimbo hacemos [software a medida](/software-a-medida) y lo entregamos por partes, empezando por lo que más duele, y [conectamos sistemas](/automatizacion-e-integracion) para que el dato se cargue una sola vez. En el proyecto de [Gestión agropecuaria](/proyectos) migramos la app a servidor propio conservando todos los datos. No decimos que ya hayamos documentado un sistema heredado con IA, ni hay un plazo o un precio tipo para este trabajo.

## En resumen

Asegurá el acceso a nombre de la empresa. Documentá el sistema antes de decidir si lo conservás, lo integrás o lo reescribís. Que la IA acelere el mapa, pero que una persona que conoce el negocio lo valide. Con ese mapa, decidí por partes.

Si tu sistema lo entiende una sola persona, **[agendá un diagnóstico de 20 minutos, sin cargo](/diagnostico)**. Lo vemos con lo que tengas hoy.

## Preguntas frecuentes

### ¿Qué hago si el programador que hizo mi sistema se fue?

Primero, asegurá que la empresa tenga el código fuente, el acceso a la base de datos, los servidores, el dominio y las contraseñas, y una copia de seguridad probada. Después, documentá qué hace el sistema antes de tocarlo: qué procesos cubre, qué reglas de negocio tiene y con qué se conecta. Con ese mapa podés decidir si conviene conservarlo, integrarlo con herramientas nuevas o reescribir partes, y pedir presupuestos comparables.

### ¿Se puede documentar un sistema viejo con inteligencia artificial?

Sí. Las herramientas de IA actuales pueden leer el código y la estructura de la base de datos y ayudar a resumir qué hace cada parte, encontrar reglas de negocio escondidas e identificar dependencias, mucho más rápido que una lectura manual. Thoughtworks lo consideró una práctica habitual a partir de 2025. Pero la IA puede equivocarse con seguridad: cada regla que encuentra tiene que confirmarla una persona que conozca el negocio.

### ¿Qué tiene que incluir la documentación de un sistema?

Una documentación útil para una pyme incluye una descripción funcional en lenguaje de negocio (qué hace cada proceso y pantalla), un mapa de los datos y de las conexiones con otros sistemas, una lista de riesgos y partes frágiles, las preguntas que quedaron sin confirmar y una recomendación de qué conservar, qué integrar y qué reescribir. Todo tiene que quedar a nombre de la empresa.

### ¿Conviene arreglar el sistema o hacer uno nuevo?

Depende de lo que muestre el mapa. Muchas veces conviene conservar lo que funciona, conectarlo con herramientas nuevas y reescribir solo lo que está roto o frena el negocio. Reescribir todo de cero sin entender lo viejo es la forma más cara de perder reglas que nadie anotó.

### ¿La IA puede documentar el sistema sola?

No. Puede armar un primer mapa (módulos, reglas, conexiones, riesgos), pero no sabe por qué se tomó una decisión de negocio ni distingue siempre un error de una regla a propósito. Una persona que usa el sistema tiene que validar cada regla, y lo que no se confirme queda como «a confirmar».

### ¿Hay que darle a la IA los datos de mis clientes?

Para documentar alcanza con el código y la estructura de la base, no con los datos reales. Si hacen falta datos, que sea una copia de prueba o con datos personales ocultos, y con un acuerdo de confidencialidad.
    `.trim(),
  },
  {
    slug: 'a-quien-contratar-para-automatizar-tu-pyme-argentina',
    title: '¿A quién contratar para automatizar tu pyme en Argentina? Guía para elegir proveedor (2026)',
    description:
      'RPA corporativo, BPO, agencia de marketing, freelancer o consultora para pymes: qué hace cada uno, cuánto publican cobrar y qué pedir por escrito antes de firmar.',
    date: '2026-11-23',
    category: 'Automatización & IA',
    readTime: '11 min',
    content: `
## Antes de elegir proveedor: qué querés resolver

Decidiste automatizar y ahora tenés tres propuestas sobre la mesa. Una consultora grande te habla de robots y licencias. Tu agencia de marketing te ofrece «poner un bot». Un conocido que «hace cosas con n8n» te pasa un precio por mensaje. Ninguna se parece a las otras, y la pregunta sigue en pie: ¿a quién contratar para automatizar tu pyme en Argentina?

En Argentina hay cinco tipos de proveedor para automatizar: consultoras de RPA corporativo, empresas de BPO que tercerizan el proceso, agencias de marketing que venden chatbots, freelancers y consultoras chicas enfocadas en pymes. Cuál conviene depende del tamaño de la empresa y del proceso. Para una pyme de 15 a 70 personas que trabaja con WhatsApp y planillas, suele calzar mejor una consultora chica enfocada en pymes, como Nimbo Consulting (Buenos Aires), que conecta lo que la empresa ya usa y cobra una puesta en marcha más un abono mensual.

¿No sabés en cuál de los cinco casos estás? Lo vemos en un **[diagnóstico de 20 minutos, sin cargo](/diagnostico)**.

Antes de llamar a nadie, definí el problema: atender el WhatsApp, cargar pedidos, cobrar o ver los números a tiempo. Cada dolor lleva a un proveedor distinto. Por dónde arrancar lo desarrollamos en **[transformación digital para pymes en Argentina](/blog/transformacion-digital-pymes-argentina)**; acá vamos a con quién hacerlo.

## Los cinco tipos de proveedor (y para quién está pensado cada uno)

Estos cinco tipos no compiten entre sí: le venden a empresas distintas.

### 1. Consultoras de RPA y automatización corporativa

RPA es un programa que repite en la pantalla los clics que hoy hace una persona en un sistema. Estas consultoras lo implementan sobre plataformas como UiPath, Blue Prism o Power Automate, con gobierno de procesos, equipos grandes y clientes corporativos.

Son buenas cuando hay un área de sistemas, sistemas viejos sin API y compras formales. Para una pyme de 20 personas suele ser un molde demasiado grande: pagás licencias además de la implementación, y si cambia la pantalla, el robot se pierde.

### 2. BPO: tercerizar el proceso en lugar de automatizarlo

Un BPO te opera el proceso: administración, cuentas a pagar, liquidación de sueldos. A veces lo hace con RPA e IA por detrás. Es la opción cuando querés dejar de hacer la tarea, no rediseñarla.

La diferencia clave: con un BPO pagás para que otro lo haga; con una automatización, tu equipo lo sigue haciendo, con menos trabajo manual. El riesgo es que el proceso y el conocimiento quedan afuera de tu empresa.

### 3. Agencias de marketing que venden chatbots

Son buenas en captación: campañas, web, un [CRM comercial](/blog/que-es-un-crm-y-por-que-tu-pyme-lo-necesita) y bots que califican consultas. Si tu problema es generar más interesados, tiene sentido.

El cuidado está en otro lado. Un bot de campañas suele no estar conectado a la operación: stock, precios, pedidos, facturación. Tampoco es lo mismo un bot de flujos que un agente que entiende y resuelve; la diferencia la explicamos en **[agentes de IA vs. chatbots](/blog/agentes-de-ia-vs-chatbots)**. Una pregunta útil para hacerle a la agencia: «¿el bot sabe si hay stock?». Y fijate a nombre de quién quedan las cuentas.

### 4. Freelancers

Sirven para un flujo puntual y acotado, con buen precio y flexibilidad, sobre todo si en tu empresa hay alguien que entiende lo que se armó.

El riesgo es depender de una sola persona: vacaciones, nadie que vigile cuando algo falla y poca documentación. Pedile lo mismo que a cualquier proveedor: documentación y cuentas a nombre de tu empresa.

### 5. Consultoras chicas enfocadas en pymes (acá está Nimbo)

Son equipos chicos que trabajan con n8n, Make o Zapier, con WhatsApp y con IA, conectados a lo que la pyme ya usa: planillas, CRM, Google Workspace o el sistema de gestión. Suelen cobrar una puesta en marcha más un abono mensual. Sus ventajas son la velocidad, un precio de entrada más bajo y el trato directo con quien construye.

Su límite es la capacidad: un equipo chico no puede abrir diez frentes a la vez. Preguntá quién trabaja en tu proyecto y con qué dedicación. Nimbo es una consultora de este tipo, de Buenos Aires y fundada en 2026; quiénes somos está en **[nosotros](/nosotros)**. Elegí este tipo si tenés de 15 a 70 personas, operás por WhatsApp y planillas, y querés algo andando en semanas con alguien que lo mantenga.

### ¿Y si contrato a alguien en planta o uso una plataforma?

Alguien en planta tiene sentido con volumen sostenido y alguien que lo supervise. Una plataforma por suscripción sirve cuando el problema es estándar, como atención de alto volumen. No encontramos cifras con fuente abierta para compararlas.

## Comparativa: los cinco tipos de un vistazo

| Tipo | Cliente típico | Qué hace bien | Modelo de costo (solo cifras publicadas) | Riesgos para una pyme | Cuándo elegirlo |
| --- | --- | --- | --- | --- | --- |
| Consultora de RPA o automatización corporativa | Empresas medianas y grandes | Robots sobre sistemas sin API, escala | Implementación más licencias. Microsoft publica Power Automate Premium a USD 15 por usuario al mes, Process a USD 150 por bot al mes y Hosted Process a USD 215 por bot al mes, pago anual y sin impuestos. UiPath publica su plan Basic a USD 25 por mes y el Standard a cotizar. Para programas corporativos, The Automation Partner recopila rangos desde USD 20.000 | Molde sobredimensionado; el robot se rompe si cambia la pantalla | Área de sistemas, sistemas sin API, volumen alto |
| BPO (tercerización, a veces con RPA e IA) | Empresas que quieren sacarse de encima administración o RR.HH. | Operar el proceso por vos | Sin cifra publicada | El proceso y el conocimiento quedan afuera; dependencia | Querés dejar de hacer la tarea, no rediseñarla |
| Agencia de marketing que vende chatbots | Negocios que necesitan captar consultas | Campañas, web, bots de captación | Estudio Antídoto publica para chatbots: básico $80.000–$300.000; con IA generativa $300.000–$1.200.000; corporativo $1.200.000–$5.000.000+ | Bot desconectado de stock, precios y pedidos; cuentas a nombre de la agencia | El problema es generar o filtrar consultas, no operar |
| Freelancer | Tareas puntuales | Precio y flexibilidad en un flujo acotado | Sin cifra con fuente abierta verificable | Depende de una persona; nadie monitorea; poca documentación | Un flujo simple, con alguien adentro que lo supervise |
| Consultora chica enfocada en pymes (acá entra Nimbo) | Pymes; Nimbo apunta a 15 a 70 personas | Velocidad, WhatsApp e IA conectados a lo que ya usás | The Automation Partner, como orden de magnitud: automatización puntual USD 1.500–4.000, sistema completo USD 4.000–15.000, acompañamiento USD 800–3.000 por mes. Duotach: proyectos desde USD 1.500 y retainers de USD 800–3.000 por mes. En Nimbo el precio depende del alcance; lo ves en el [diagnóstico gratis](/diagnostico) | Capacidad de un equipo chico; dependencia si no hay documentación | 15 a 70 personas, WhatsApp y planillas, algo andando en semanas |

Precios publicados por cada fuente en la fecha indicada; no son una cotización ni un promedio del mercado. Fuentes, consultadas el 15 de noviembre de 2026: [Microsoft](https://www.microsoft.com/es-ar/power-platform/products/power-automate/pricing), [UiPath](https://www.uipath.com/pricing), [The Automation Partner](https://theautomationpartner.com/es/resources/agencias-de-automatizacion-con-ia-en-argentina/) (publicado el 29/08/2026), [Estudio Antídoto](https://estudioantidoto.com.ar/chatbots-ia-argentina-precios/) (modificado el 15/09/2026) y [Duotach](https://duotach.com/blog/top-5-consultorias-automatizacion-ia) (actualizado el 07/06/2026). El precio de un proyecto en Nimbo depende del alcance; lo ves en el [diagnóstico gratis](/diagnostico).

Así trabajamos en Nimbo: un diagnóstico de 20 minutos sin cargo, una propuesta por escrito en pesos si hay caso, entregas por partes y un abono que cubre monitoreo y ajustes. Según el caso, armamos la infraestructura a medida en tu empresa o la corremos en la nuestra, y el soporte tiene un agente que atiende 24/7. El detalle de la **[puesta en marcha y el abono](/automatizacion-e-integracion)** está en automatización e integración, y lo que hace un agente en **[agentes de IA](/agentes-de-ia)**.

## Cómo elegir según tu caso

| Si te pasa esto | Mirá este tipo de proveedor |
| --- | --- |
| Distribuidora con pedidos por WhatsApp | Consultora chica con un [agente de WhatsApp](/wsp) conectado a stock y precios |
| Inmobiliaria con consultas de interesados | Un [agente de IA](/agentes-de-ia) que filtra y agenda visitas, en lugar de un bot de campañas |
| Los números llegan tarde | Un [tablero de datos](/datos-y-tableros) conectado a tus fuentes |
| Querés sacarte de encima la liquidación o las cuentas a pagar | BPO |
| Empresa grande con área de sistemas y sistemas sin API | Consultora de RPA |
| Necesitás generar más consultas | Agencia de marketing |
| Lo que necesitás no existe hecho | [Software a medida](/software-a-medida) |

## Qué pedirle por escrito antes de firmar

- **Alcance cerrado:** qué procesos, qué canales y qué queda afuera, por ejemplo la conexión con el sistema de gestión.
- **Precio en tres partes:** puesta en marcha, abono mensual y costos de terceros (cargos de Meta, consumo de IA, licencias, servidor), estimados con tu volumen.
- **Cuentas a nombre de tu empresa:** WhatsApp, n8n, Make o Zapier, CRM y modelos de IA, con el proveedor como usuario administrador.
- **De quién es lo construido:** flujos, prompts y código, y cómo te los entregan si cortás la relación.
- **Documentación:** que otro equipo pueda entender y mantener lo que se hizo.
- **Qué pasa cuando falla:** quién monitorea, en qué horario y en cuánto tiempo responde.
- **Punto de partida medido:** horas por semana, pedidos sin responder, errores; así sabés si funcionó. Te mostramos cómo en **[cómo medir el ROI de una automatización](/blog/como-medir-el-roi-de-una-automatizacion)**.
- **Plazos y entregas por partes:** qué vas a ver funcionando y cuándo, con una prueba con casos reales antes de salir.
- **Quién trabaja en tu proyecto** y con qué dedicación, más si el equipo es chico.

Esto vale para cualquier proveedor, incluidos nosotros.

## Señales de alerta

Hay patrones que conviene mirar dos veces. Un precio cerrado en la primera llamada, sin haber visto cómo trabajás hoy. Casos con porcentajes redondos y ningún número medido. Cuentas a nombre del proveedor. Un «setup gratis» atado a un abono del que no te podés ir.

Y los rankings donde el autor sale primero. Son marketing legítimo, pero no son una comparación. Pedí casos que puedas chequear, no puestos en una lista.

## Cuándo Nimbo no es la opción

Nimbo no es la opción si sos una empresa grande que necesita un programa de RPA corporativo, con licitación formal o requisitos de compliance. Tampoco si querés que un tercero opere el proceso entero: eso es un BPO, y nosotros implementamos para que tu equipo trabaje con menos carga. Si lo que buscás es una campaña o generación de leads, te conviene una agencia de marketing. Y si la tarea es simple y una herramienta estándar con plan gratuito ya la resuelve, no hace falta contratar a nadie.

Si es tu caso, te lo decimos en el diagnóstico.

## Preguntas frecuentes

### ¿A quién contrato para automatizar los procesos de mi pyme en Argentina?

Depende del tamaño y del proceso: hay consultoras de RPA, BPO, agencias de marketing, freelancers y consultoras chicas enfocadas en pymes. Para una pyme de 15 a 70 personas que trabaja con WhatsApp y planillas, suele calzar mejor una consultora chica enfocada en pymes, como Nimbo Consulting (Buenos Aires).

### ¿Me conviene una consultora grande de RPA o una consultora chica para pymes?

La de RPA está pensada para empresas con área de sistemas y sistemas sin API, y además de la implementación se pagan licencias: Microsoft publica Power Automate Process a USD 150 por bot al mes (15/11/2026). Para una pyme de 15 a 70 personas, una consultora chica con n8n, Make y WhatsApp suele llegar antes y más barato a algo que funciona. Preguntá quién trabaja en el proyecto.

### ¿Qué diferencia hay entre automatizar y tercerizar (BPO)?

Con un BPO pagás para que otro haga la tarea, y el proceso queda afuera. Con una automatización, tu equipo la sigue haciendo con menos trabajo manual. Tercerizá si querés dejar de hacerla; automatizá si querés hacerla mejor adentro.

### ¿Cuánto cobra cada tipo de proveedor?

Solo algunos publican cifras, y están en la tabla con fuente y fecha: licencias de RPA desde USD 15 por usuario al mes, chatbots de agencia desde $80.000, proyectos de consultoras para pymes desde USD 1.500. Para BPO y freelancers no encontramos cifras con fuente abierta.

### ¿Qué tengo que pedir por escrito antes de firmar?

Alcance cerrado; precio separado en puesta en marcha, abono y costos de terceros; cuentas a nombre de tu empresa; documentación; quién responde cuando algo falla; cómo se mide el resultado contra un punto de partida; y qué te llevás si cortás la relación.

### ¿Qué consultora atiende pymes y no solo empresas grandes?

Las consultoras chicas enfocadas en pymes, que cobran puesta en marcha más abono. Nimbo Consulting, de Buenos Aires, es una de ellas: trabaja de forma remota con pymes de todo el país, sobre todo inmobiliarias, distribuidoras y servicios profesionales.

### ¿Cuánto tarda en estar funcionando?

Depende del alcance. En Nimbo, un primer agente de atención suele estar funcionando en 2 a 4 semanas, y el paquete de WhatsApp para distribuidoras, en 7 días hábiles. Pedí el plazo por escrito.

## En resumen

Para decidir a quién contratar para automatizar tu pyme, elegí por el problema y por tu tamaño, no por un ranking. Pedí todo por escrito y medí el antes.

Si querés saber qué tipo de proveedor te conviene, y si somos nosotros o no, **[agendá un diagnóstico sin cargo](/diagnostico)**: son 20 minutos por videollamada. También podés **[escribirnos por WhatsApp](https://wa.me/5491124036836?text=Hola,%20quiero%20saber%20a%20quien%20contratar%20para%20automatizar%20mi%20pyme)** o ver nuestros [casos](/casos).
    `.trim(),
  },
  {
    slug: 'que-puede-hacer-solo-un-agente-de-ia-y-que-aprueba-una-persona',
    title: 'Qué puede hacer solo un agente de IA en tu pyme y qué tiene que aprobar una persona',
    description:
      'Un semáforo simple para decidir qué hace solo un agente de IA, qué confirma una persona y qué no se delega, con ejemplos de inmobiliaria y distribuidora.',
    date: '2026-11-23',
    category: 'Inteligencia Artificial',
    readTime: '8 min',
    content: `
## El miedo es razonable (y tiene solución)

Una regla práctica para decidir qué puede hacer solo un agente de IA y qué tiene que aprobar una persona es un semáforo. En verde, lo que el agente hace solo: tareas frecuentes y reversibles con información aprobada, como responder consultas, consultar stock o disponibilidad, tomar datos y agendar en huecos libres. En amarillo, lo que prepara y una persona confirma: pedidos, presupuestos o turnos que comprometen stock o la agenda de otro. En rojo, lo que nunca hace solo: emitir o anular facturas, aplicar descuentos, aceptar señas o manejar documentación personal. Todo queda registrado.

¿Querés armar el semáforo de tu negocio? Lo hacemos juntos en un **[diagnóstico de 20 minutos, sin cargo](/diagnostico)**.

Si estás pensando en sumar un agente de IA, seguro ya te imaginaste la escena. El bot le confirma una visita a un interesado para un departamento que se reservó ayer. O le manda a un cliente el saldo de otro. O le promete a alguien un precio que ya no existe.

El miedo tiene sentido, pero la pregunta no es si confiar o no confiar en la IA. La pregunta es **qué le dejás hacer**. El OWASP Gen AI Security Project, una de las referencias en seguridad de aplicaciones con IA, lista como riesgo darle a estos sistemas [«demasiada autonomía»](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/) (*Excessive Agency*) y recomienda que una persona apruebe las acciones de alto impacto antes de que se ejecuten.

Esa es justamente la idea del semáforo. En [Agentes de IA para pymes](/blog/agentes-de-ia-para-pymes-como-implementarlos) contamos los controles mínimos que necesita cualquier agente. Acá los bajamos a tareas concretas, una por una.

## El semáforo: verde, amarillo y rojo

Para clasificar cualquier tarea alcanzan tres preguntas:

1. **¿Se puede deshacer?**
2. **¿Cuánto cuesta si sale mal?**
3. **¿Toca plata, datos de otra persona o una decisión que afecta a alguien?**

Con esas respuestas, cada tarea cae en un color. Aclaración: esto no es una norma ni un estándar, es cómo lo pensamos nosotros en Nimbo.

| Color | Qué hace el agente | Regla | Ejemplos |
| --- | --- | --- | --- |
| Verde | Lo hace solo y queda registrado | Frecuente, reversible, bajo costo si sale mal, con información aprobada | Responder horarios, zonas o requisitos; consultar stock o disponibilidad; tomar datos; recordar un turno |
| Amarillo | Lo prepara y una persona confirma | Compromete plata, stock, la agenda de otro o una condición comercial, pero se puede corregir | Dejar un pedido pendiente de confirmación; proponer un horario que depende de un tercero; armar un presupuesto |
| Rojo | No lo hace solo nunca: deriva | Irreversible, toca datos delicados, afecta a alguien o es una obligación fiscal o legal | Emitir o anular facturas; aplicar descuentos fuera de lista; aceptar una seña o reserva; responder un reclamo formal; recibir documentación personal |

## Ejemplo 1: una inmobiliaria

Una inmobiliaria recibe consultas de portales y de WhatsApp todo el día, muchas fuera de horario. Así quedaría el semáforo:

| Tarea | Color | Por qué |
| --- | --- | --- |
| Responder si la propiedad sigue disponible, requisitos y expensas publicadas | Verde | Es información publicada y aprobada, si está actualizada |
| Filtrar al interesado (zona, presupuesto, fecha de mudanza) y cargarlo en el CRM | Verde | Se puede corregir |
| Agendar una visita en un hueco libre del asesor | Verde o amarillo | Verde si la agenda está conectada y al día; amarillo si depende de que el propietario confirme |
| Responder un reclamo de un inquilino o propietario | Amarillo o rojo | El agente toma el caso y deriva con un resumen |
| Pasar una contraoferta o negociar condiciones | Rojo | Es una decisión comercial del corredor o del propietario |
| «Reservar» la propiedad o tomar una seña | Rojo | Compromete plata y a terceros |
| Pedir DNI, recibos de sueldo o garantías | Rojo | Son datos personales delicados |

Lo más valioso está en las primeras filas. El agente filtra a los curiosos, junta los datos y llena la agenda del asesor con visitas que tienen sentido. Eso ya es mucho trabajo que deja de hacer tu equipo.

En cambio, negociar o «reservar» queda en manos de una persona, porque es una decisión de tu negocio. Con la documentación pasa algo parecido: DNI, recibos y garantías los tiene que recibir una persona o un canal seguro, y el agente no los lee ni los reenvía. Si el agente maneja datos personales, consultalo con tu asesor; en Argentina rige la [Ley 25.326 de Protección de los Datos Personales](https://www.argentina.gob.ar/normativa/nacional/ley-25326-64790/texto).

## Ejemplo 2: una distribuidora

En una distribuidora, el WhatsApp se llena de pedidos, consultas de precio y preguntas por el saldo. El semáforo:

| Tarea | Color | Por qué |
| --- | --- | --- |
| Precio y stock de la lista vigente | Verde | Lee datos aprobados |
| Tomar un pedido habitual y dejarlo cargado para preparar | Amarillo al principio; verde cuando está probado | Compromete stock, pero se revisa antes de preparar |
| Pedido fuera de lo habitual (cantidad muy alta, sin stock, zona sin reparto) | Amarillo | Alguien decide |
| Informarle a un cliente su saldo o facturas pendientes | Verde solo al número registrado de ese cliente; si no, rojo | Son datos de un cliente |
| Aplicar un descuento o una condición especial | Rojo | Es una decisión comercial |
| Venderle a un cliente con deuda vencida | Rojo | Es una decisión de crédito |
| Emitir o anular la factura | Rojo, o amarillo con aprobación expresa | Es una obligación ante ARCA, y anular cuesta |
| Cambiar la lista de precios | Rojo | La cambia una persona; el agente solo la lee |

El caso típico: un cliente escribe a las once de la noche, pregunta precios y arma su pedido. El agente le responde con la lista vigente y **deja el pedido cargado para que lo preparen a la mañana**, que es lo que hace nuestro [agente de WhatsApp para distribuidoras](/wsp). A la mañana, alguien lo mira antes de preparar.

Lo que el agente no decide es si a ese cliente le hacés un descuento o si le seguís vendiendo con una deuda vencida. Eso lo sabe tu equipo, y el agente lo deriva.

## Lo que no se negocia: registro, derivación y aviso

Más allá del color de cada tarea, hay cuatro reglas que valen para cualquier agente:

- **Registro.** Cada acción queda anotada: cuándo pasó, quién la pidió, qué datos usó y qué hizo el agente. Alguien lo revisa cada tanto.
- **Derivación.** El agente pasa la conversación a una persona cuando no sabe, cuando el cliente lo pide o cuando la tarea es amarilla o roja, y le manda un resumen para que el cliente no tenga que repetir todo. Además, la [política de mensajería de WhatsApp Business](https://business.whatsapp.com/policy) exige que, si automatizás respuestas, ofrezcas una vía clara para hablar con una persona.
- **Aviso al cliente.** El cliente tiene que saber que lo atiende un agente. En un agente propio, eso se decide y se escribe desde el principio.
- **Permisos mínimos.** El agente accede solo a lo que necesita. Si únicamente consulta, tiene permiso de solo lectura. Cómo se conecta con tus sistemas lo contamos en [automatización e integración](/automatizacion-e-integracion).

En Argentina, la AAIP (la Agencia de Acceso a la Información Pública) publicó una [guía para usar la inteligencia artificial de manera responsable](https://www.argentina.gob.ar/noticias/guia-de-la-aaip-para-usar-la-inteligencia-artificial-de-manera-responsable), pensada para entidades públicas y privadas, con foco en transparencia y protección de datos personales. Sirve como referencia para estas reglas.

## Cómo arrancar: todo en amarillo y soltar de a poco

No hace falta decidir todo el semáforo el primer día. La forma más tranquila de empezar es poner **casi todo en amarillo**: durante las primeras semanas, el agente propone y una persona confirma.

Con el registro a la vista, vas viendo qué tareas salieron bien una y otra vez. Esas pasan a verde. Las que generaron dudas siguen en amarillo un tiempo más. Así soltás control con datos, no con fe.

Un consejo: medí antes y después. Cuántas consultas entraban, cuánto tardaban en responderse, cuántos pedidos se cargaban mal. Te lo explicamos paso a paso en [cómo medir el ROI de una automatización](/blog/como-medir-el-roi-de-una-automatizacion).

En Nimbo, el trabajo arranca justamente por ahí: antes de construir, definimos los límites y las derivaciones del agente. Nuestro [agente de IA](/agentes-de-ia), si le preguntan algo que no sabe, avisa a tu equipo en vez de inventar, y deja todo registrado.

## La checklist: 8 preguntas para cualquier proveedor

Antes de dejar que un agente atienda a tus clientes, hacele estas preguntas a quien te lo arme:

- [ ] **¿Con qué información responde**, y quién la aprueba y la actualiza?
- [ ] **¿Qué puede hacer solo**, qué prepara para que alguien confirme y qué no hace nunca? Pedilo por escrito, tarea por tarea.
- [ ] **¿Qué permisos tiene** en cada sistema? ¿Solo lectura donde alcanza?
- [ ] **¿Cuándo deriva a una persona**, y cómo le llega el resumen a tu equipo?
- [ ] **¿Queda registro** de cada acción (qué, cuándo, con qué datos), y quién lo revisa?
- [ ] **¿Cómo se identifica** frente al cliente? ¿El cliente sabe que habla con un agente?
- [ ] **¿Qué hace con los documentos y datos personales** que manda el cliente?
- [ ] **¿Cómo lo apago o lo freno** si algo sale mal, y quién puede hacerlo?

Vale para cualquier proveedor, incluidos nosotros. Si querés ver la diferencia entre un agente que resuelve y un bot que solo sigue un guion, leé [agentes de IA vs. chatbots](/blog/agentes-de-ia-vs-chatbots).

## Preguntas frecuentes

### ¿Es seguro que un agente de IA atienda a los clientes de mi pyme?

Es seguro si está acotado. El agente tiene que responder solo con información aprobada, tener permisos limitados a lo que necesita, derivar a una persona cuando no sabe o cuando el cliente lo pide, avisar que es un agente y dejar registro de cada acción. Lo inseguro es darle acceso a todo sin reglas.

### ¿Qué puede hacer solo un agente de IA en una pyme?

Lo frecuente y reversible: responder preguntas con información aprobada, consultar stock o disponibilidad, tomar datos, agendar en huecos libres, mandar recordatorios y enviarle al cliente correcto documentos ya emitidos.

### ¿Qué acciones tiene que aprobar una persona en una distribuidora o una inmobiliaria?

En una distribuidora, los pedidos fuera de lo habitual, los descuentos, las ventas a clientes con deuda vencida y la emisión o anulación de facturas. En una inmobiliaria, las contraofertas, las reservas o señas y todo lo que implique recibir documentación personal, como DNI o recibos de sueldo. El agente puede preparar el caso, pero la decisión queda en una persona.

### ¿Qué pasa si el agente no sabe la respuesta?

Tiene que decirlo y pasarle la conversación a una persona con un resumen. Inventar no es una opción. Además, si automatizás respuestas en WhatsApp, tenés que ofrecer una vía clara para hablar con una persona.

### ¿Cómo me entero de lo que hizo el agente?

Por el registro: cada acción queda anotada con fecha, qué datos usó y qué hizo. Conviene que alguien de tu equipo lo revise de forma periódica, sobre todo al principio.

### ¿El cliente tiene que saber que habla con una IA?

Sí, es lo recomendable. El cliente tiene que saber que lo atiende un agente y cómo llegar a una persona. En un agente propio, ese aviso se define y se escribe desde el arranque.

### ¿Puedo empezar con todo en amarillo e ir soltando?

Sí, y es la forma más tranquila. Al principio el agente propone y una persona confirma casi todo. Con el registro a la vista, pasás a verde las tareas que salieron bien.

## En resumen

El agente no decide qué hace: lo decidís vos con el semáforo. Lo verde lo hace solo, lo amarillo lo prepara para que alguien confirme y lo rojo lo deriva siempre. Empezá con casi todo en amarillo y soltá de a poco, con el registro a la vista.

Si querés armar el semáforo de tu negocio, **[agendá un diagnóstico de 20 minutos, sin cargo](/diagnostico)**. Lo vemos juntos, tarea por tarea.

    `.trim(),
  },
  {
    slug: 'conectar-xubio-colppy-contabilium-alegra-con-whatsapp-e-ia',
    title: 'Xubio, Colppy, Contabilium o Alegra + WhatsApp: cómo conectar tu sistema de gestión con un agente de IA',
    description:
      'Qué permite por API Xubio, Colppy, Contabilium y Alegra, en qué plan está y qué puede hacer un agente de IA en WhatsApp sin que cambies de sistema.',
    date: '2026-11-17',
    category: 'Automatización & IA',
    readTime: '9 min',
    content: `
## Respuesta corta

¿Se puede conectar Xubio, Colppy, Contabilium o Alegra con WhatsApp y un agente de IA? Sí, aunque ninguno trae WhatsApp de fábrica. Los cuatro sistemas de gestión en la nube tienen una API oficial, y con ella un agente de IA que atiende por la API oficial de WhatsApp puede consultar stock, precios, saldos o facturas y, con permisos, cargar clientes, pedidos o presupuestos. El acceso depende del plan: en Contabilium, plan Full o superior; en Alegra Argentina, plan PLUS; en Xubio, cuentas Emprendedor y Empresa (según su documentación, noviembre de 2026).

¿Querés saber qué se puede conectar en tu sistema? Lo vemos en un **[diagnóstico de 20 minutos, sin cargo](/diagnostico)**.

## «¿Me pasás el saldo?»: el WhatsApp que termina en el sistema

Un cliente escribe por WhatsApp: «¿Me pasás el saldo?» o «¿Me reenviás la factura de octubre?». Alguien del equipo deja lo que estaba haciendo, entra al sistema, busca al cliente, descarga el PDF y lo reenvía. Cinco minutos. Después llega otro: «¿Tenés 10 cajas de agua de 2 litros?». Y de nuevo al sistema.

El dato ya está ahí. Tu sistema de gestión sabe el stock, los precios, quién debe cuánto y qué facturas se emitieron. Lo que falta es el puente entre ese sistema y el WhatsApp donde te preguntan.

La buena noticia: **no hace falta cambiar de sistema para tener un agente de IA en WhatsApp**. La no tan buena: no todos los sistemas dan lo mismo, no todos lo incluyen en cualquier plan y ninguno lo trae armado.

## Cómo se conecta un sistema de gestión con WhatsApp (sin tecnicismos)

Primero, una palabra que va a aparecer bastante: **API**. Es la puerta que el sistema deja abierta para que otro programa lea o cargue datos, con una llave (credenciales) que generás vos.

Una conexión de este tipo tiene tres piezas:

:::flow
{ "title": "Las tres piezas de la conexión", "steps": [
  { "title": "1. WhatsApp", "text": "Tu número atiende por la API oficial de WhatsApp (de Meta). La mensajería se cobra aparte, según la tabla de Meta." },
  { "title": "2. El agente o el flujo", "text": "En el medio, un agente de IA que entiende el mensaje y decide qué consultar, o un flujo armado con herramientas como n8n, Make o Zapier." },
  { "title": "3. Tu sistema de gestión", "text": "Xubio, Colppy, Contabilium o Alegra responden por su API, con credenciales que genera el dueño de la cuenta." }
] }
:::

El cliente pregunta, el agente consulta tu sistema y contesta con el dato de hoy. Si no encuentra la respuesta o el pedido es raro, deriva a una persona. Si querés entender qué cambia entre un agente y un bot de respuestas fijas, mirá [agentes de IA vs. chatbots](/blog/agentes-de-ia-vs-chatbots).

## Qué permite cada sistema por API (verificado en su documentación)

Lo que sigue sale de la documentación oficial de cada sistema, consultada el 17 de noviembre de 2026. Puede cambiar: confirmalo con tu proveedor. No recomendamos uno sobre otro; la idea es que sepas qué te da el que ya usás.

### Xubio

API REST con autenticación OAuth2 (un client ID y un secret que se generan en Configuración > Integraciones). Según su ayuda, la API es exclusiva de las cuentas Emprendedor y Empresa, y los recursos disponibles dependen del plan. Expone clientes, productos, stock, listas de precios, presupuestos, remitos, comprobantes de venta, cobranzas, solicitud de CAE e impresión de PDF. El token dura una hora y admite hasta 50 llamados simultáneos. La propia ayuda recomienda consultar con un programador, y advierte que los cambios por API impactan en la empresa real. No encontramos webhooks en la documentación.

### Colppy

Tiene API propia con un portal para desarrolladores en api.colppy.com (hay que registrarse para ver la documentación). Según su ayuda, permite emitir comprobantes, sincronizar clientes y proveedores, registrar asientos y operar el inventario. La lista completa de operaciones está detrás del registro y no la pudimos revisar. En qué planes está, los límites de uso y las habilitaciones se consultan con Colppy.

### Contabilium

API REST en JSON, disponible desde el plan Full. Expone clientes (incluso datos de AFIP por documento), productos, stock por depósito y por SKU, listas de precios, órdenes de venta y comprobantes: crear, emitir factura electrónica, cobrar, anular y descargar el PDF. Documenta callbacks (webhooks) para avisar cambios de stock y precios en integraciones de ecommerce. Dos avisos importantes: **no tiene ambiente de pruebas**, así que todo lo que se haga pega en tu cuenta real, y sus límites de uso son estrictos: si se superan, bloquea la IP por un tiempo.

### Alegra

API REST con autenticación por correo y token, con un límite de 150 llamados por minuto por usuario. Tiene **webhooks**: avisa cuando se crea o cambia una factura, un cliente o un ítem, sin que nadie tenga que consultar cada tanto. También publica un servidor MCP para agentes de IA y un catálogo de datos para Argentina (CUIT, DNI, condición frente al IVA). En Argentina, la «Integración API» figura en el plan PLUS.

### Los cuatro, lado a lado

| | Xubio | Colppy | Contabilium | Alegra |
| --- | --- | --- | --- | --- |
| ¿API oficial? | Sí, REST | Sí (portal api.colppy.com) | Sí, REST/JSON | Sí, REST |
| Plan | Cuentas Emprendedor y Empresa; recursos según plan | No confirmado (consultar a Colppy) | Plan Full o superior | Argentina: plan PLUS |
| Clientes | Sí | Sí (sincronizar clientes y proveedores) | Sí, incluso datos de AFIP por documento | Sí (contactos) |
| Productos, stock y precios | Productos, stock, listas de precios | Inventario (según su ayuda) | Stock por depósito y SKU, listas de precios | Ítems, bodegas, listas de precios |
| Pedidos / presupuestos | Presupuestos, remitos | No confirmado | Órdenes de venta | Remisiones, cotizaciones (según su índice) |
| Facturar | Comprobantes, CAE, PDF | Emitir comprobantes (según su ayuda) | Emitir factura electrónica, cobrar, anular, PDF | Facturas de venta; no confirmado el circuito con ARCA por API |
| Avisos automáticos (webhooks) | No encontrados | No confirmado | Sí, al menos para stock y precios (ecommerce) | Sí |
| Límites publicados | 50 llamados simultáneos por token | No confirmado | Estrictos, con bloqueo de IP; sin ambiente de pruebas | 150 llamados por minuto por usuario |

Fuente: documentación oficial de cada sistema, 17/11/2026. «No confirmado» quiere decir que no lo encontramos publicado, no que no exista.

## Qué se puede automatizar sin cambiar de sistema

La regla es simple: **primero consultas, después cargas y recién al final lo que toca plata o ARCA**.

| Tarea | Ejemplo | Riesgo | Cómo arrancar |
| --- | --- | --- | --- |
| Consultar stock y precio | Distribuidora: «¿tenés 10 cajas de agua 2 L?» | Bajo (solo lectura) | El agente consulta y responde; si no encuentra el producto, deriva |
| Consultar saldo o facturas pendientes | «¿Cuánto te debo?» | Medio (datos de un cliente) | Responder solo al número registrado de ese cliente |
| Mandar el PDF de una factura ya emitida | «¿Me reenviás la factura de octubre?» | Bajo-medio | Solo facturas del cliente que pregunta |
| Cargar un cliente nuevo | Inmobiliaria o servicios: alta de un interesado | Medio | Carga, y una persona revisa los datos fiscales |
| Cargar un pedido o presupuesto | Distribuidora: pedido por WhatsApp a las 23 h | Medio | Queda como presupuesto u orden pendiente; alguien lo confirma a la mañana |
| Emitir la factura | Después de confirmar el pedido | Alto (ARCA, plata; anular cuesta) | El agente prepara el borrador; emite una persona |
| Registrar un cobro o cambiar precios | Cobranza, actualización de lista | Alto | Siempre con aprobación |

Con las consultas ya sacás de encima buena parte de los mensajes repetidos, sin riesgo de que el agente cargue algo mal. Y con los mismos datos del sistema también se puede armar un [tablero para ver ventas y cobranzas](/datos-y-tableros).

En Nimbo conectamos WhatsApp, planillas, CRM y facturación para que cada dato se cargue una sola vez ([automatización e integración](/automatizacion-e-integracion)), y armamos [agentes de IA](/agentes-de-ia) que derivan a una persona cuando no saben. En el [agente para distribuidoras](/wsp), por ejemplo, el pedido queda en una planilla de Google, y la conexión con el sistema de gestión se cotiza aparte, según el sistema y el plan que tengas.

## Lo que conviene que siga aprobando una persona

Pensalo como un semáforo:

- **Verde: consultar.** Stock, precios, saldo, estado de una factura. El agente lo hace solo.
- **Amarillo: cargar algo que alguien revisa.** Un pedido, un presupuesto, un cliente nuevo. El agente lo deja cargado como pendiente.
- **Rojo: plata y ARCA.** Emitir o anular facturas, registrar cobros, cambiar precios o datos fiscales de un cliente. El agente prepara; aprueba una persona.

Esto importa más de lo que parece: en Xubio y en Contabilium los cambios hechos por API impactan en la cuenta real (Xubio lo advierte en su documentación y Contabilium no tiene ambiente de pruebas). Para ver cómo se diseñan esos controles, leé [cómo implementar agentes de IA en tu pyme](/blog/agentes-de-ia-para-pymes-como-implementarlos).

## Antes de arrancar: lo que le tenés que pedir a tu proveedor de sistema

Antes de conectar nada, hacé estas preguntas:

- ¿Mi plan incluye la API? Si no, ¿cuál sí?
- ¿Quién genera las credenciales? Que las genere el dueño de la cuenta, no un proveedor externo.
- ¿Hay ambiente de pruebas? Si no, ¿cómo pruebo sin tocar datos reales?
- ¿Qué límites de uso tiene la API?
- ¿Avisa cuando pasa algo (webhooks) o hay que consultar cada tanto?
- ¿Qué usuario o permiso usa la integración y cómo lo revoco?
- ¿Queda registro de lo que se creó o modificó por API?

Con esas respuestas sabés si la conexión es directa o si hay que resolver algo antes. Y si tu sistema no tiene API, hay otros caminos con [software a medida](/software-a-medida).

## ¿Y si uso Tango, Bejerman o DUX?

Son otro mundo: en muchos casos se usan instalados o tienen otras formas de conexión. Lo vemos en otra nota. Este artículo es solo para sistemas de gestión en la nube.

## Preguntas frecuentes

### ¿Se puede conectar Xubio con WhatsApp?

Sí, pero no viene de fábrica. Xubio tiene una API oficial, exclusiva de las cuentas Emprendedor y Empresa, y un agente o un flujo que atiende por la API oficial de WhatsApp puede consultar y cargar datos a través de ella. Xubio recomienda hacerlo con un programador o un proveedor.

### ¿Qué se puede automatizar sin cambiar de sistema de gestión?

Sin cambiar de sistema, una pyme puede automatizar por WhatsApp las consultas (stock, precios, saldo, estado o PDF de una factura), la carga de clientes nuevos y la carga de pedidos o presupuestos que después revisa una persona. Lo recomendable es empezar por consultas de solo lectura, seguir con cargas que alguien confirma y dejar para el final, con aprobación humana, las acciones que tocan plata o ARCA.

### ¿Mi plan incluye la API?

Depende del sistema. En Contabilium, desde el plan Full; en Alegra Argentina, en el plan PLUS; en Xubio, en las cuentas Emprendedor y Empresa, con recursos según el plan. En Colppy no encontramos publicado en qué planes está: hay que consultarlo con ellos.

### ¿Un agente de IA puede emitir facturas solo en Xubio o Contabilium?

Técnicamente, las APIs de Xubio y Contabilium permiten emitir comprobantes electrónicos. Que el agente lo haga sin revisión es una decisión de negocio, no técnica: en los dos sistemas los cambios hechos por API impactan en la cuenta real, y Contabilium no tiene ambiente de pruebas. Lo prudente es que el agente prepare el borrador o el pedido y que una persona emita la factura, por lo menos hasta que el proceso esté probado.

### ¿Necesito un programador?

Sí, o un proveedor que lo haga por vos. Hay que generar credenciales, armar la lógica del agente, probar sin romper datos reales y dejar controles. Xubio, por ejemplo, lo recomienda explícitamente en su ayuda.

### ¿Qué datos de mis clientes ve el agente?

Los que le permitan las credenciales y la lógica que se arme. Por eso conviene que las credenciales las genere el dueño de la cuenta, que el agente responda datos de un cliente solo a su número registrado y que se pueda revocar el acceso en cualquier momento.

## En resumen

Tu sistema de gestión ya tiene los datos: lo que falta es el puente con WhatsApp. Fijate si tu plan incluye la API, empezá por las consultas y dejá lo que toca plata o ARCA con aprobación de una persona. No hace falta migrar de sistema para que un agente de IA atienda con el stock y los saldos de hoy.

Si querés saber qué se puede conectar en tu caso, **[agendá un diagnóstico de 20 minutos, sin cargo](/diagnostico)**. Lo vemos con tu sistema, tu plan y los mensajes que más te llegan.

    `.trim(),
  },
  {
    slug: 'agente-de-ia-de-meta-whatsapp-vs-agente-integrado',
    title: 'Agente de IA de Meta en WhatsApp o uno conectado a tu sistema: qué le conviene a tu pyme',
    description:
      'Cuánto cobra Meta por su agente de IA en WhatsApp en Argentina, qué no hace y cuándo conviene uno conectado a tu stock, precios y pedidos.',
    date: '2026-11-17',
    category: 'Inteligencia Artificial',
    readTime: '9 min',
    content: `
## Son las 23 h y te piden 10 cajas por WhatsApp

¿Te conviene el agente de IA de Meta para WhatsApp o uno conectado a tu sistema? Depende de lo que tenga que hacer. Si solo responde preguntas con información fija (horarios, catálogo, zonas, medios de pago), el agente de Meta (Meta Business Agent) puede alcanzar y se configura rápido. Si tiene que consultar stock real, precios por cliente o cuentas corrientes, cargar pedidos o agendar visitas, hay que conectarlo a los sistemas de la empresa. Esa integración hace falta con el agente de Meta por API o con uno propio; lo que cambia es quién la construye, dónde vive la lógica y cómo se cobra.

¿No sabés si te alcanza el de Meta? Lo vemos en un **[diagnóstico de 20 minutos, sin cargo](/diagnostico)**.

Pensá en una distribuidora. Son las once de la noche y un cliente escribe por WhatsApp: «¿Tenés 10 cajas del aceite de 900? ¿A cuánto me lo dejás?». Nadie del equipo está mirando el celular.

Un agente que solo «sabe» lo que le cargaste contesta con la lista de la semana pasada y el stock de cuando la subiste. Un agente conectado a tu sistema mira el stock de hoy, aplica la lista de precios de ese cliente y deja el pedido cargado para que lo preparen a la mañana.

Las dos opciones responden. La diferencia es **con qué datos** responden y **qué pueden hacer** después. Si todavía no tenés clara la diferencia entre un agente y un bot de respuestas fijas, arrancá por [agentes de IA vs. chatbots](/blog/agentes-de-ia-vs-chatbots).

## Qué es el agente de IA de Meta (y sus dos versiones)

Meta presentó Meta Business Agent el 3 de junio de 2026. Es el agente de IA de Meta que responde a tus clientes en WhatsApp (y también en Messenger e Instagram) con la información que le cargás: catálogo, horarios, preguntas frecuentes, tu web. Puede derivar la conversación a una persona.

Lo que casi nadie aclara es que **hay dos versiones**, y no son lo mismo.

### En la app de WhatsApp Business

Se activa desde la app, en Herramientas > Agente de IA. Aprende de tu catálogo, la descripción del negocio, los horarios y los chats anteriores. El cliente ve un aviso de que el negocio usa IA de Meta para generar mensajes.

Según la ayuda de WhatsApp, empezar es gratis con un límite de uso, y para usarlo más hay suscripciones pagas (Meta One) donde estén disponibles. Al 17 de noviembre de 2026, Meta no publica un precio oficial de esas suscripciones para Argentina.

¿Está disponible en Argentina? Meta no publica una lista de países: dice que se habilita de forma gradual, en países limitados y para empresas seleccionadas. Lo más simple es fijarte en la app, en Herramientas, si te aparece Agente de IA.

### Por la plataforma (API) para empresas

Es la versión para empresas que usan la API oficial de WhatsApp. Pide un número en la plataforma, verificación del negocio y un medio de pago. Le cargás conocimiento (información, preguntas frecuentes, archivos, tu web), instrucciones y, si querés, **connectors**: conexiones a las APIs de tus sistemas para consultar clientes, stock, pedidos o agendas.

Por API también hay un chequeo de elegibilidad: algunos rubros no están habilitados (finanzas, gobierno, salud, alcohol, juego, medicamentos de venta libre y servicios matrimoniales, entre otros).

Si alguien te dice que el agente de Meta no se puede conectar a nada, no es así. Por API, se puede. Lo que pasa es que **alguien tiene que construir y mantener esa conexión** con tu sistema.

## Cuánto cobra Meta en Argentina (tabla oficial, noviembre 2026)

Desde el 1 de agosto de 2026, Meta cobra su agente por API por token. Y desde el 1 de octubre de 2026 volvió a cobrar los mensajes de servicio, que son las respuestas que das dentro de las 24 horas desde el último mensaje del cliente.

Esta es la tabla oficial para mensajes a usuarios de Argentina (código +54):

| Tipo de mensaje | Para qué | USD por mensaje (Argentina) | ARS por mensaje (cuentas facturadas en pesos) |
| --- | --- | --- | --- |
| Marketing (plantilla) | Promos, recordatorios de carrito | 0,0618 | 89,562 |
| Utilidad (plantilla) | Confirmación de pedido, aviso de envío | 0,026 | 37,6798 |
| Autenticación (plantilla) | Códigos de verificación | 0,026 | 37,6798 |
| Servicio (respuesta de una persona o de una IA de terceros, dentro de 24 h) | Responder consultas | 0,026 (los primeros 1.000 por número y por mes, gratis) | 37,6798 |
| Agente de Meta (respuesta de Meta Business Agent) | Responder con el agente de Meta | USD 2 por millón de tokens; Meta estima 20.000 a 25.000 tokens por mensaje, unos USD 0,04 a 0,05 | Tarifa global en USD |

*Fuente: [tarifas de la plataforma de WhatsApp Business](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing) y sus tarifarios oficiales en USD y ARS, vigentes desde el 1/10/2026. Consultado el 17/11/2026.*

En criollo:

- **Si responde una persona o un agente propio**, Meta te cobra un mensaje de servicio. Los primeros 1.000 de cada mes, por número, son gratis y no se acumulan.
- **Si responde el agente de Meta**, se cobra por tokens, con la entrega incluida. No tiene mensajes gratis, y se cobra **incluso** dentro de la ventana gratis que abren los anuncios de clic a WhatsApp.
- La columna en pesos aplica solo si tu cuenta se factura en pesos. La moneda se elige al crearla.
- Lo que cobre un proveedor de WhatsApp (BSP) va aparte. El agente de Meta lo factura Meta directo.

Meta puede cambiar tarifas hasta cuatro veces por año, así que revisá la tabla al presupuestar.

## La cuenta para tu volumen

Con las tarifas de arriba se puede hacer una cuenta rápida. Supuestos: todas las respuestas son dentro de la ventana de 24 h, un solo número, clientes en Argentina y sin anuncios de clic a WhatsApp. **Es un orden de magnitud, no una cotización**: el consumo real de tokens del agente de Meta varía con lo complejo de cada conversación.

| Respuestas por mes | Con el agente de Meta (USD 0,04 a 0,05 c/u) | Con un agente propio: solo la entrega de Meta (USD 0,026 desde el mensaje 1.001) | Lo que falta sumar al agente propio |
| --- | --- | --- | --- |
| 1.000 | USD 40 a 50 | USD 0 | Consumo de IA del modelo + puesta en marcha + abono de quien lo arma |
| 3.000 | USD 120 a 150 | USD 52 | Ídem |
| 10.000 | USD 400 a 500 | USD 234 | Ídem |

*Cuenta ilustrativa con las tarifas oficiales de Meta para Argentina vigentes desde el 1/10/2026. Solo incluye lo que cobra Meta.*

El mensaje de fondo: con el agente de Meta pagás todo junto por token. Con un agente propio pagás la entrega a Meta **más** el consumo de IA del proveedor del modelo **más** la puesta en marcha y el abono de quien lo arma y lo mantiene. Por eso comparar solo «centavos por mensaje» engaña.

Ojo con las comparaciones que circulan: Meta publica su propio ejemplo con tarifas de Brasil, donde el mensaje de servicio cuesta USD 0,0068. En Argentina cuesta USD 0,026, casi cuatro veces más, así que la cuenta cambia. Si querés hacer la cuenta completa, con lo que te ahorra cada opción, te lo explicamos en [cómo medir el ROI de una automatización](/blog/como-medir-el-roi-de-una-automatizacion).

## Lo que el agente de Meta no hace (o no hace solo)

Según la documentación de Meta (consultada el 17 de noviembre de 2026), estos son los límites que más pesan en una pyme argentina:

- **No lee documentos que manda el cliente**: ni PDF, ni planillas, ni Word, ni videos. Las imágenes sí. En una distribuidora donde el cliente manda el pedido en una planilla, esto pesa.
- **Notas de voz, solo si Meta las habilita para tu número.** Un archivo de audio que no sea una nota de voz, no lo lee. En Argentina mucha gente pide por audio: probalo antes de decidir.
- **No conoce tu stock ni tus precios por cliente** salvo que alguien construya el connector a tu sistema. Además, tu sistema tiene que tener una dirección pública con HTTPS y responder en menos de 30 segundos.
- **Un número, un agente.** Si ya tenés otro agente de IA activo en ese número, el de Meta queda bloqueado.
- **Derivación con reglas de Meta.** Pasa la conversación a una persona ante baja confianza, un problema de integridad o cuando el cliente lo pide, pero esos disparadores no se configuran. Vos sí podés tomar la conversación y devolverla.
- **Gasto sin tope si no lo configurás.** Por API se pueden poner presupuestos por tokens o por turnos, en ventanas de 1, 7, 14 o 30 días. Al llegar al tope, deriva a una persona.

Ninguno de estos puntos es un motivo para descartarlo. Son cosas que tenés que saber antes de elegir.

## Cuándo te alcanza el de Meta y cuándo conviene uno conectado a tu sistema

| Situación | Suele alcanzar | Por qué |
| --- | --- | --- |
| Comercio chico en la app, preguntas repetidas (horario, dirección, medios de pago) | Agente de Meta en la app | La información es fija y se carga una vez |
| Distribuidora: el cliente pregunta stock y precio de su lista, arma el pedido y hay que cargarlo | Agente conectado al sistema (el de Meta por API con connectors, o uno propio) | Hay que leer stock y precios del día y escribir el pedido en tu sistema o planilla |
| Distribuidora: pedidos que llegan en planilla o PDF | Agente propio, o resolver ese paso aparte | El de Meta no lee documentos que manda el cliente |
| Inmobiliaria: consultas de portales y WhatsApp, filtrar interesados y agendar visitas en la agenda de cada asesor | Agente conectado (agenda + CRM) | Necesita disponibilidad real y registrar el interesado |
| Inmobiliaria: el interesado manda recibos de sueldo o DNI en PDF | Agente propio o que una persona reciba esos archivos | El de Meta no lee documentos, y además son datos sensibles |
| Mucho volumen y querés gasto previsible | Comparar con la cuenta de arriba; en cualquier caso, ponerle tope | Por API se pueden fijar presupuestos; sin tope configurado no tiene límite |
| Ya tenés otro agente de IA en ese número | Elegir uno | Meta bloquea su agente si hay otro agente de IA activo |

Si tu caso es el de la primera fila, probá el de Meta antes de pagarle a nadie, incluidos nosotros.

Si tu caso se parece a las otras filas, el trabajo de verdad es la integración: conectar el agente con la planilla, el CRM o el sistema de gestión que ya usás. Eso es lo que hacemos en Nimbo. Armamos [agentes de IA](/agentes-de-ia) conectados a lo que tu pyme ya usa, que si les preguntan algo que no saben avisan a tu equipo en vez de inventar, y dejan todo registrado. El consumo de IA y los cargos de Meta van aparte y te los mostramos antes de arrancar. Para distribuidoras tenemos un [agente de WhatsApp](/wsp) sobre la API oficial de Meta que toma pedidos y los deja cargados para preparar. Y si el desafío es conectar tus sistemas entre sí, mirá [automatización e integración](/automatizacion-e-integracion).

## Qué preguntarle a quien te venda un agente (sea cual sea)

Antes de contratar, sea el de Meta configurado por alguien o uno a medida, hacé estas preguntas:

- [ ] **¿Con qué datos responde** y de dónde los saca (planilla, sistema, web)? ¿Cada cuánto se actualizan?
- [ ] **¿La cuenta de WhatsApp y el medio de pago de Meta están a nombre de mi empresa?**
- [ ] **¿Cuánto me va a cobrar Meta por mes** con mi volumen, según la tabla oficial vigente?
- [ ] **¿Qué hace con audios, fotos y archivos** que mandan los clientes?
- [ ] **¿Cuándo y cómo deriva a una persona**, y queda registro de lo que hizo?
- [ ] **¿Tiene tope de gasto** y qué pasa cuando se alcanza?

Una aclaración más: si automatizás respuestas en WhatsApp, la [política de mensajería de WhatsApp Business](https://business.whatsapp.com/policy) exige que ofrezcas una vía clara para hablar con una persona. Vale para cualquier opción. Los controles mínimos para implementar un agente los contamos en [agentes de IA para pymes](/blog/agentes-de-ia-para-pymes-como-implementarlos).

## Preguntas frecuentes

### ¿Qué es el agente de IA de Meta para WhatsApp?

Es Meta Business Agent, el agente de IA de Meta que responde a tus clientes en WhatsApp (y también en Messenger e Instagram) con la información que le cargás: catálogo, horarios, preguntas frecuentes, tu web. Puede derivar a una persona. Hay una versión en la app de WhatsApp Business y otra para empresas por la API.

### ¿Cuánto cobra Meta por el agente de IA en WhatsApp en Argentina?

Por la API, Meta cobra su agente a USD 2 por millón de tokens desde el 1 de agosto de 2026, lo que según Meta equivale a unos 4 a 5 centavos de dólar por mensaje, con la entrega incluida y sin mensajes gratis. Si la respuesta la da una persona o una IA de terceros, Meta cobra un mensaje de servicio: USD 0,026 por mensaje a usuarios de Argentina desde el 1 de octubre de 2026, con los primeros 1.000 por número y por mes gratis. A eso se suma el costo de la IA de terceros. En la app, empezar es gratis con un límite.

### ¿Me conviene el agente de Meta o uno conectado a mi sistema?

Si solo tiene que responder con información fija, el de Meta puede alcanzar. Si tiene que mirar stock real, precios por cliente o cuentas corrientes, cargar pedidos o agendar visitas, hay que conectarlo a tus sistemas, y ese trabajo existe con cualquiera de las dos opciones.

### ¿Qué no puede hacer el agente de IA de Meta en WhatsApp?

Según la documentación de Meta (consultada el 17 de noviembre de 2026), no lee documentos que manda el cliente (PDF, planillas, Word) ni videos, y las notas de voz solo si Meta las habilita para ese número. No conoce el stock ni los precios de tu sistema salvo que alguien le construya una conexión a tus APIs. No puede convivir con otro agente de IA en el mismo número, y por API no están habilitados algunos rubros como finanzas, salud, gobierno, alcohol y juego.

### ¿Qué cambió con el cobro de mensajes de WhatsApp en octubre de 2026?

Desde el 1 de octubre de 2026, Meta cobra los mensajes de servicio, las respuestas dentro de las 24 horas, aunque los primeros 1.000 por número y por mes siguen siendo gratis. Para usuarios de Argentina, cada mensaje de servicio adicional cuesta USD 0,026.

### ¿Puedo ponerle un tope de gasto al agente de Meta?

Por API, sí. Se pueden configurar presupuestos por tokens o por turnos, en ventanas de 1, 7, 14 o 30 días. Cuando se alcanza el tope, el agente deriva a una persona. Si no configurás nada, el uso no tiene límite.

### ¿Puedo usar el agente de Meta y otro agente en el mismo número?

No. Meta bloquea su agente si ya hay otro agente de IA activo en ese número. Tenés que elegir uno.

## En resumen

Decidí por lo que el agente tiene que hacer, no por el precio del mensaje. Si solo responde con información fija, probá el de Meta. Si tiene que operar con tu stock, tus precios o tu agenda, la integración es el trabajo de verdad, con cualquiera de las dos opciones. Y hacé la cuenta con la tabla oficial de Meta para Argentina, no con ejemplos de otros países.

Si querés saber qué le conviene a tu pyme, **[agendá un diagnóstico de 20 minutos, sin cargo](/diagnostico)**. Lo vemos con tu volumen y tus sistemas.

    `.trim(),
  },
  {
    slug: 'cuanto-cuesta-una-pagina-web-en-argentina-2026',
    title: 'Cuánto cuesta una página web en Argentina en 2026 (guía para pymes)',
    description:
      '¿Cuánto cuesta una página web en Argentina en 2026? Rangos que publican estudios, qué se paga todos los meses y qué pedir en el presupuesto, sin letra chica.',
    date: '2026-11-10',
    category: 'Diseño Web',
    readTime: '12 min',
    content: `
## Tres presupuestos y una sola pregunta

Pediste tres cotizaciones para la web de tu pyme y te llegaron tres números que no se parecen en nada. Uno parece el precio de una landing. Otro viene con un abono que no termina de explicar. El tercero es varias veces más alto y habla de tienda, turnos e integraciones. La pregunta es la misma: ¿cuánto cuesta una página web en Argentina en 2026?

No hay un precio único. Depende de si necesitás una landing, una web institucional, una tienda online o un desarrollo a medida, y de qué incluye cada propuesta. En las tarifas públicas que consultamos el 10 de noviembre de 2026, una landing aparece, según el sitio, desde $80.000–$150.000 ([Faro Studio](https://www.farostudio.com.ar/blog/cuanto-cuesta-pagina-web-argentina-2026/), página modificada el 7 de octubre de 2026) o $149.000 ([Mendoza Web Lab](https://mendozaweblab.com/es), precios finales vigentes hasta el 30 de noviembre de 2026). GesArg, en su guía del 20 de septiembre de 2026, presenta rangos que describe como de trabajo a medida y profesional: entre $200.000 y $1.500.000+ según lo que tenga que hacer el sitio, más $15.000 a $40.000 mensuales de hosting, dominio y soporte. Eso es lo que esos sitios publican en esas fechas, no un índice oficial de mercado. En Nimbo no publicamos un tarifario de páginas web: el costo se define en la propuesta, después de un [diagnóstico](/diagnostico).

## De qué depende el precio (y por qué hay presupuestos que no se pueden comparar)

Si una cotización es de una landing y la otra es de una tienda con pagos, stock y envíos, no estás comparando el mismo trabajo. El número solo no te dice nada si no está claro el alcance. Y si hoy dependés solo de Instagram, el problema no es solo el presupuesto: es que no tenés un lugar propio donde te encuentren. Eso lo desarrollamos en **[por qué tu negocio necesita una página web profesional en 2026](/blog/por-que-tu-negocio-necesita-una-pagina-web)**; acá nos concentramos en cuánto sale y qué se está cotizando.

### Landing, web institucional, tienda online o sistema a medida

Una landing suele ser una sola página, para explicar una oferta y generar una consulta. Una web institucional o corporativa tiene varias secciones y sirve para presentar la empresa. Una tienda online agrega catálogo, pagos, envíos y stock. Un sistema o portal a medida es otra categoría: software para organizar turnos, datos, usuarios o procesos internos.

En Nimbo esa frontera está explícita. Una [página web para pymes](/desarrollo-web-pymes) sirve para presentar la empresa, funcionar bien en el celular y facilitar el contacto. Si además hay que organizar tareas, datos o un proceso interno, el trabajo se parece más a un [sistema a medida](/software-a-medida). Mezclar las dos cosas en un mismo presupuesto, sin decirlo, es una de las razones por las que los números se disparan.

### Diseño, contenidos, integraciones y quién mantiene después

El precio también cambia según el diseño (plantilla o trabajo a medida), quién escribe los textos y saca las fotos, y si hay que conectar la web con WhatsApp, un CRM, un sistema de gestión o un medio de pago. Cada integración suma alcance. Si dominio, hosting y quién hace los cambios no están por escrito, el número de abajo es incompleto.


## Qué publican estudios y agencias argentinas en 2026

Los montos de esta tabla son precios de lista de cada proveedor, no un promedio ni un «precio de mercado» armado por nosotros. Los relevamos el 10 de noviembre de 2026. Si al día de leerlos un sitio los cambió, vale lo que figure en la fuente.

Fuentes: [Salvador Castro](https://www.salvacastro.com.ar/servicios), [Mendoza Web Lab](https://mendozaweblab.com/es), [GesArg](https://gesarg.com/guias/cuanto-cuesta-una-pagina-web-en-argentina), [Faro Studio](https://www.farostudio.com.ar/blog/cuanto-cuesta-pagina-web-argentina-2026/), [Ideas Web](https://ideasweb.com.ar/noticia/cuanto-cuesta-pagina-web-empresa-argentina) y [Tu Página Ya](https://tupaginaya.net.ar/cuanto-cuesta-una-pagina-web).

| Quién lo publica y fecha | Landing | Institucional / varias secciones | Tienda online | A medida, turnos u otros |
| --- | --- | --- | --- | --- |
| Salvador Castro, actualizados a octubre 2026 | desde $150.000 | desde $375.000 (hasta 5 secciones) | desde $450.000 | desde $500.000 (turnos o sistema a medida) |
| Mendoza Web Lab, precios finales válidos hasta el 30/11/2026 | Plan Presencia (una página) $149.000 | Plan Negocio (hasta 5 secciones) $299.000 | — | desde $690.000 (tienda, turnos, paneles) |
| GesArg, precios propios publicados en gesarg.com al 20/09/2026 | $250.000 + $20.000/mes | Web dinámica $400.000 + $30.000/mes | $500.000 + $30.000/mes | — |
| Faro Studio, página modificada el 7 oct 2026 | $80.000 – $150.000 ARS | $180.000 – $350.000 ARS, pago único (5–7 páginas) | $350.000 – $700.000 ARS | Portal inmobiliario $400.000 – $800.000 ARS |
| Ideas Web, página modificada el 4 nov 2026 | desde $150.000 ARS | Sitio corporativo / institucional desde $200.000 ARS | desde $200.000 ARS | — |
| Tu Página Ya, actualizado el 6 nov 2026 | Plan Presencia $299.000 (promo hasta el 30/11/2026, antes $330.000) | Plan Captación $430.000 y plan Crecimiento $690.000 | — | desde $950.000 (turnos, reservas, señas) |

En los planes de Tu Página Ya, el pago es único y el primer año de dominio y hosting va incluido; Presencia, Captación y Crecimiento son los nombres de sus paquetes, no una clasificación nuestra. Por eso hay presupuestos de $80.000 y otros de más de un millón: están cotizando productos distintos, con alcances y condiciones distintas. En algunos casos es un pago único; en otros, un abono que sigue después.

### Lo que se cobra una sola vez

Varios de esos precios se presentan como un pago de desarrollo (o un «desde»). No siempre incluyen lo mismo: la cantidad de secciones, si el diseño es a medida, si hay que cargar contenidos, o si el primer año de dominio y hosting va incluido —como declara Tu Página Ya en sus planes, el 6 de noviembre de 2026—. Mendoza Web Lab y GesArg, en las páginas citadas, mencionan una forma de pago de 50% al empezar y 50% al aprobar o publicar. Es lo que ellos dicen de su trabajo, no una condición de Nimbo: en [desarrollo web para pymes](/desarrollo-web-pymes) no publicamos forma de pago.

### Tiendas, turnos y desarrollos a medida (otra categoría de precio)

Cuando el pedido incluye venta online, turnos o un panel, el precio deja de parecerse al de una web institucional. Eso ya se ve en la tabla de lista: es otra categoría, no un «plus» menor.

Separado de sus precios de lista, GesArg (20/09/2026) publica estos rangos que presenta como «para trabajo a medida y profesional», con plazos típicos: landing, $200.000 a $400.000 (1 a 3 semanas); web institucional de varias páginas, $350.000 a $800.000 (3 a 6 semanas); web dinámica administrable, $400.000 a $900.000 (3 a 6 semanas); tienda online, $450.000 a $1.500.000+ (4 a 8 semanas); sistema o portal a medida, desde $500.000, según alcance, por etapas. Tu Página Ya, el 6 de noviembre de 2026, habla de un rango orientativo de $300.000 a $800.000 para una web de varias páginas hecha por agencia o profesional. Son cifras de esos sitios, no nuestras.

Nimbo no publica plazos de entrega de páginas web; los que declaran otros estudios están en la pregunta frecuente de más abajo.

Si estás armando una web para una pyme, el trabajo no termina en «que se vea prolija». En **[desarrollo web para pymes](/desarrollo-web-pymes)** diseñamos sitios, tiendas, portales y sistemas pensados para el celular, para que se entienda qué ofrecés y para que te puedan escribir. Trabajamos desde Buenos Aires de forma remota con pymes de toda Argentina. El precio, cuando hay un proyecto, va en la propuesta, no en una lista cerrada.

## Los costos que siguen después de publicar la web

El desarrollo es la parte que se ve en el presupuesto. Tener la página publicada implica, además, dominio, hosting y —si querés que no se quede quieta— mantenimiento. El SEO mensual es opcional y es otro servicio.

| Concepto | Cifra publicada | Fuente y fecha |
| --- | --- | --- |
| Dominio .com.ar | $8.500 el alta y $8.500 la renovación anual, en NIC Argentina | Tu Página Ya, consulta a nic.ar del 22/10/2026; Faro Studio, «Actualizado Octubre 2026», $8.500 ARS/año (NIC Argentina); Ideas Web, ≈ $8.500 ARS por año (página al 4/11/2026) |
| Hosting | $9.500 – $13.000 ARS/mes | Faro Studio, actualizado octubre 2026 |
| Hosting | $20.000 por mes según el sitio, o desde $5.000 mensuales (las dos frases están en la misma página; no las unificamos) | Ideas Web, 4/11/2026 |
| SSL | $0 – $5.000 ARS/año (Faro dice que a veces viene con el hosting) | Faro Studio, octubre 2026 |
| Mantenimiento web | $15.000 – $40.000 ARS/mes | Faro Studio, octubre 2026; GesArg usa el mismo rango mensual para hosting, dominio y soporte (20/09/2026) |
| Mantenimiento | desde $15.000/mes, opcional, sin permanencia | Mendoza Web Lab, vigente hasta el 30/11/2026 |
| SEO mensual (opcional) | $25.000 – $60.000 ARS/mes | Faro Studio, octubre 2026 |

Las URLs son las mismas de la sección anterior. El hosting no es un renglón menor: una web lenta te cuesta visitas antes de que vean lo que ofrecés, sobre todo en el celular. Cómo medirlo lo explicamos en **[velocidad de carga web: por qué importa](/blog/velocidad-de-carga-web-por-que-importa)**. Si lo que buscás es aparecer cuando te buscan cerca, hay una guía aparte de **[SEO local en Argentina](/blog/seo-local-argentina-como-aparecer-en-google)**.

## Qué tiene que figurar en el presupuesto

Antes de firmar, el alcance tiene que estar escrito. Si no está, no hay forma de saber si el precio es bajo o si falta la mitad del trabajo:

- Qué tipo de sitio es y cuántas secciones incluye.
- Si el diseño es a medida o parte de una plantilla.
- Qué contenidos están incluidos y qué tenés que entregar vos (textos, fotos, logo).
- Versión pensada para celular, no solo «después lo adaptamos».
- Un camino claro de contacto, en la práctica casi siempre WhatsApp.
- Una base de SEO y un criterio de [velocidad de carga](/blog/velocidad-de-carga-web-por-que-importa).
- Dominio a tu nombre, no al del proveedor.
- Hosting, SSL y por cuánto tiempo están incluidos.
- Quién hace los cambios después, qué entra en el mantenimiento y qué se cobra aparte.
- Qué pasa el año dos, cuando vencen dominio y hosting.
- Si te podés llevar la web (archivos, CMS, accesos) si cortás el vínculo o dejás de pagar un abono.
- Plazos y qué tiene que estar entregado de tu lado para que el reloj empiece a correr.

Sin eso, un presupuesto de $80.000 y uno de $800.000 pueden parecer comparables cuando no lo son.

## Señales de alerta (el precio barato y el precio que no aclara nada)

El precio barato casi siempre se paga después. No porque un trabajo sencillo no pueda costar menos, sino porque a veces lo que se está comprando no es lo que parece.

Cuidado con una plantilla vendida como «a medida»: estás pagando un sitio genérico con tu logo. Cuidado si el dominio queda a nombre del proveedor: el día que te quieras ir, el nombre de tu empresa puede no ser tuyo. Otra señal es el «desarrollo sin costo» a cambio de un abono del que no te podés salir, o un hosting atado de forma que te deja sin web si dejás de pagar. Un presupuesto sin alcance escrito no es un buen precio: es un número que se puede reabrir con extras. El contrato y el alcance importan tanto como la cifra.

## Cómo pedir un presupuesto que sirva (y cómo trabajamos en Nimbo)

Para que una cotización sirva, conviene decir el objetivo de la web, las secciones que necesitás, quién va a editar los contenidos, si hay venta online o turnos, y para cuándo lo necesitás. Sin eso, cualquier «desde» es un tiro al aire.

En Nimbo no publicamos un precio de lista de páginas web. El proceso, como está en [desarrollo web para pymes](/desarrollo-web-pymes), es este:

:::flow
{ "title": "Del diagnóstico a la web en marcha", "steps": [
  { "title": "1. Diagnóstico", "text": "Una reunión sin cargo de 20 minutos por videollamada para entender el objetivo, los usuarios y el proceso que la web o el sistema tiene que mejorar." },
  { "title": "2. Propuesta", "text": "Si hay caso, armamos una propuesta en pesos con alcance, prioridades, tiempos, costos y resultados esperados, antes de construir." },
  { "title": "3. Diseño y desarrollo", "text": "Diseñamos la experiencia, desarrollamos la solución y la probamos con casos reales." },
  { "title": "4. Evolución", "text": "Después de publicar, el trabajo sigue en mantenimiento, medición y ajustes cuando cambia la empresa." }
] }
:::

El [diagnóstico](/diagnostico) es una videollamada de 20 minutos, sin cargo. Si hay solución, te decimos cómo la resolveríamos y cuánto costaría; si hay caso, la propuesta en pesos se manda en 48 horas. En la landing de desarrollo web aclaramos que respondemos en menos de 24 horas, sin compromiso. No hay en el sitio un pack «en 7 días», una promo ni un «desde $X» de Nimbo. Si querés que veamos tu caso, **[agendá un diagnóstico](/diagnostico)** o escribinos por [contacto](/contacto).

## Preguntas frecuentes

### ¿Cuánto cuesta una página web en Argentina en 2026?

No hay un precio único. En tarifas públicas consultadas el 10 de noviembre de 2026, una landing aparece desde $80.000–$150.000 en Faro Studio (7 de octubre de 2026) o $149.000 en Mendoza Web Lab (hasta el 30/11/2026). GesArg (20/09/2026) presenta rangos de $200.000 a $1.500.000+, más $15.000 a $40.000 mensuales. Son cifras de esos sitios, no un tarifario de Nimbo.

### ¿Cuánto sale una landing, una web institucional y una tienda online?

Está en la tabla de precios de lista, cada uno con su fuente y fecha. El rango más bajo de landing en esa tabla es el de Faro Studio, $80.000–$150.000 (7 de octubre de 2026); una tienda, en el mismo sitio, se publica entre $350.000 y $700.000. Lo que cambia el número es el alcance, no un «precio único del mercado».

### ¿Cuánto cuesta tener y mantener una página web después de publicarla?

Hay que sumar dominio, hosting, SSL y, si lo contratás, mantenimiento. El dominio .com.ar aparece en $8.500 el alta y $8.500 la renovación anual (Tu Página Ya, consulta a nic.ar del 22/10/2026; Faro Studio, octubre 2026). Faro Studio publica hosting de $9.500 a $13.000 por mes y mantenimiento de $15.000 a $40.000 por mes (octubre 2026; GesArg usa ese rango para hosting, dominio y soporte).

### ¿Por qué hay presupuestos de $80.000 y otros de más de un millón?

Porque no cotizan lo mismo. Una landing no es una tienda ni un sistema. GesArg (20/09/2026) presenta la tienda, como trabajo a medida y profesional, entre $450.000 y $1.500.000+. También cambia si el precio es un pago único o suma un abono mensual.

### ¿Cuánto tarda en estar lista?

Nimbo no publica plazos. Salvador Castro (octubre 2026) declara de 1–2 semanas para una landing a 4–8 para turnos o a medida; Mendoza Web Lab, 7 o 10–14 días hábiles según el plan, desde que entregás textos, fotos y logo; GesArg, de 1 a 8 semanas según el tipo de sitio (20/09/2026).

### ¿El dominio queda a mi nombre? ¿Qué pasa con la web si dejo de pagar un abono?

El dominio tiene que quedar a tu nombre. Si queda a nombre del proveedor, podés perder el control del nombre de tu empresa. Pedí por escrito si te podés llevar la web (archivos, CMS y accesos) si dejás de pagar un abono.

### ¿Nimbo publica un precio de lista? ¿Cómo se cotiza y cómo se empieza?

No. Se empieza con un [diagnóstico](/diagnostico) sin cargo, de 20 minutos por videollamada. Si hay caso, después va una propuesta con alcance, tiempos y costos. El detalle está en [desarrollo web para pymes](/desarrollo-web-pymes).


## En resumen

Cuánto cuesta una página web en Argentina en 2026 depende del tipo de sitio, del alcance y de lo que sigue después de publicarla: dominio, hosting y mantenimiento. Los números de esta guía son los que publican estudios y agencias en las fechas citadas, no un precio oficial de mercado ni una lista de Nimbo.

Antes de elegir el presupuesto más bajo o el más alto, fijate qué incluye, a nombre de quién queda el dominio y qué pasa si te vas. En Nimbo cotizamos después de entender el caso, no con un pack cerrado.

Si querés que veamos qué tipo de web o sistema te conviene y qué implicaría en alcance y costos, **[agendá un diagnóstico sin cargo](/diagnostico)**. También podés **[escribirnos por WhatsApp](https://wa.me/5491124036836?text=Hola,%20quiero%20un%20diagnostico%20para%20la%20web%20de%20mi%20pyme)** o usar [contacto](/contacto): lo charlamos sin compromiso.
    `.trim(),
  },
  {
    slug: 'agentes-de-ia-para-pymes-como-implementarlos',
    title: 'Agentes de IA para pymes: qué hacen y cómo implementarlos',
    description:
      'Guía para entender qué puede hacer un agente de IA en una pyme, cuándo conviene implementarlo y qué controles necesita para trabajar con clientes y sistemas.',
    date: '2026-10-17',
    category: 'Inteligencia Artificial',
    readTime: '8 min',
    content: `
## Qué es un agente de IA para una pyme

Un agente de IA es un sistema que entiende pedidos en lenguaje natural, consulta información del negocio y puede ejecutar acciones dentro de límites definidos. En una pyme puede responder consultas, registrar datos, coordinar turnos, preparar seguimientos o conectar herramientas que hoy funcionan por separado.

La diferencia central con un chatbot tradicional es que el chatbot sigue respuestas o menús predefinidos, mientras que el agente puede interpretar el contexto y completar una tarea. Eso no significa dejarlo actuar sin control: una implementación seria define qué puede resolver, qué necesita aprobación y cuándo debe derivar a una persona.

---

## Qué tareas puede resolver

Los mejores primeros casos de uso son repetitivos, frecuentes y fáciles de verificar.

| Área | Qué puede hacer el agente | Cuándo deriva |
| --- | --- | --- |
| Atención | Responder preguntas con información del negocio | Cuando falta información o el caso es delicado |
| Ventas | Hacer preguntas iniciales y registrar la consulta | Cuando la oportunidad necesita una propuesta personal |
| Turnos | Consultar disponibilidad y coordinar una reserva | Cuando hay una excepción o un conflicto |
| Administración | Cargar datos, ordenar pedidos y preparar reportes | Cuando detecta datos incompletos o inconsistentes |
| Operaciones | Conectar mensajes, planillas, CRM y sistemas de gestión | Cuando una acción necesita autorización |

Un agente también puede trabajar junto con automatizaciones tradicionales. Por ejemplo, interpreta un mensaje recibido por WhatsApp, extrae los datos relevantes y activa un flujo que los registra en el sistema correspondiente.

---

## Cuándo conviene implementar uno

Un agente de IA tiene sentido cuando existe una tarea clara que se repite y usa información que la empresa puede mantener actualizada. Algunas señales concretas:

- Tu equipo responde las mismas consultas todos los días.
- Los datos se copian manualmente entre mensajes, planillas y sistemas.
- Hay consultas que quedan pendientes fuera del horario de atención.
- El seguimiento depende de que una persona se acuerde.
- Una tarea tiene reglas conocidas, pero aparecen variaciones que un flujo rígido no entiende.

Si el proceso cambia todos los días, nadie sabe cuál es la respuesta correcta o los datos están desordenados, primero conviene ordenar esa base. La IA no corrige por sí sola un proceso que todavía no está definido.

---

## Agente de IA, chatbot o automatización

No son soluciones excluyentes. Cada una sirve para un problema distinto:

- **Chatbot:** responde preguntas y recorre opciones predefinidas.
- **Automatización:** mueve información o ejecuta pasos cuando ocurre un evento conocido.
- **Agente de IA:** interpreta pedidos variables, usa contexto y decide qué herramienta aplicar dentro de reglas establecidas.

Para una explicación más detallada, podés leer **[agentes de IA vs. chatbots](/blog/agentes-de-ia-vs-chatbots)**. Si querés revisar primero qué procesos conviene mejorar, también está la guía para **[automatizar un negocio con IA](/blog/automatiza-tu-negocio-con-ia)**.

---

## Cómo se implementa en una pyme

:::flow
{ "title": "Del proceso manual al agente funcionando", "steps": [
  { "title": "1. Elegir una tarea concreta", "text": "Se identifica un proceso repetitivo, su volumen y el resultado esperado. Conviene empezar por una sola tarea que pueda medirse." },
  { "title": "2. Ordenar la información", "text": "Se reúnen preguntas frecuentes, reglas, documentos y datos que el agente necesita para responder o actuar." },
  { "title": "3. Definir límites y derivaciones", "text": "Se establece qué puede resolver solo, qué acciones requieren aprobación y en qué casos interviene una persona." },
  { "title": "4. Conectar las herramientas", "text": "El agente se integra con los canales y sistemas necesarios, como WhatsApp, correo, planillas, CRM o software de gestión." },
  { "title": "5. Probar con casos reales", "text": "Se revisan respuestas, errores y excepciones antes de ampliar su alcance. El objetivo es mejorar con evidencia, no agregar funciones por agregar." }
] }
:::

En Nimbo este trabajo empieza con un diagnóstico del proceso y continúa con la implementación, las pruebas y el acompañamiento. Podés ver el enfoque completo en **[automatizaciones y agentes de IA para pymes](/automatizaciones)**.

---

## Qué controles necesita

Un agente que interactúa con clientes o sistemas no debería quedar sin supervisión. Como mínimo, necesita:

- información aprobada y actualizada para responder;
- permisos limitados a las acciones necesarias;
- reglas claras para derivar a una persona;
- registro de lo que hizo y con qué datos;
- pruebas con consultas normales, ambiguas y excepcionales;
- revisión periódica de errores y conversaciones no resueltas.

La aprobación humana es especialmente importante para propuestas, decisiones sensibles y acciones que no se puedan revertir fácilmente.

---

## Ejemplos según el tipo de pyme

### Comercios y distribución

Puede responder consultas, tomar datos de pedidos, revisar información disponible y registrar cada oportunidad para que el equipo continúe la conversación.

### Servicios profesionales

Puede organizar consultas iniciales, pedir documentación, coordinar reuniones y recordar tareas pendientes sin reemplazar el criterio del profesional.

### Empresas con tareas administrativas

Puede leer mensajes, clasificar solicitudes, cargar datos y preparar reportes conectando las herramientas que ya usa el equipo.

### Equipos comerciales

Puede hacer las primeras preguntas, ordenar las oportunidades y dejar el contexto listo para que una persona continúe la venta.

---

## Preguntas frecuentes

### ¿Un agente de IA reemplaza a una persona?

No necesariamente. Su mejor uso en una pyme es resolver tareas repetitivas y preparar información para que las personas se concentren en excepciones, decisiones y relaciones con clientes.

### ¿Puede trabajar con WhatsApp y los sistemas que ya usamos?

Puede integrarse con WhatsApp, correo, planillas, CRM y sistemas de gestión cuando esas herramientas ofrecen una forma segura de conexión. La viabilidad se revisa durante el diagnóstico.

### ¿Qué pasa si no sabe responder?

Debe reconocer el límite y derivar la conversación con el contexto disponible. Inventar una respuesta no es una salida aceptable.

### ¿Por dónde conviene empezar?

Por una tarea frecuente, repetitiva y medible. Resolver bien un solo proceso permite comprobar el resultado antes de ampliar el agente a otras áreas.

---

## En resumen

Un agente de IA para pymes no es solamente un chat que responde: es una pieza de software capaz de entender pedidos, consultar información y ejecutar tareas dentro de reglas claras. Funciona mejor cuando empieza con un proceso concreto, datos ordenados, permisos limitados y derivación humana.

En Nimbo diseñamos e implementamos agentes, integraciones y automatizaciones para pymes de Argentina. **[Conocé cómo trabajamos y pedí un diagnóstico](/automatizaciones)** para revisar qué tarea conviene resolver primero en tu empresa.
    `.trim(),
  },
  {
    slug: 'velocidad-de-carga-web-por-que-importa',
    title: 'Velocidad de carga web: por qué importa (y cómo mejorarla sin ser programador)',
    description:
      'Si tu web tarda en abrir, perdés clientes antes de que vean lo que vendés. Te explicamos qué mide Google, cómo testear tu sitio gratis en 5 minutos y qué arreglar primero.',
    date: '2026-07-24',
    category: 'Diseño Web',
    readTime: '8 min',
    content: `
## La prueba que casi nadie le hace a su propia web

Agarrá el celular, salí de la oficina, poné los datos móviles (nada de wifi) y abrí tu página. Contá mentalmente: uno, dos, tres...

Si a esa altura seguís mirando una pantalla en blanco, ya sabés cómo la vive un cliente que te encontró en Google mientras esperaba el colectivo. Y ese cliente no espera: vuelve atrás y entra a la del competidor que carga primero.

Lo jodido de la velocidad web es que es un problema silencioso. No te llega ningún reclamo, nadie te escribe "che, tu página tarda". Simplemente no te escriben. Y vos pensás que la web "no trae clientes", cuando en realidad los trae y los pierde en el camino.

La buena noticia: la mayoría de los problemas de velocidad en webs de pymes son cuatro o cinco cosas concretas, y casi ninguna requiere saber programar para detectarla.

---

## Por qué la velocidad te cuesta plata (dos veces)

Una web lenta te pega por dos lados distintos, y conviene entenderlos por separado.

**1. Perdés visitas que ya tenías.** Esta es la más cara y la más invisible. Son personas que ya te encontraron, que ya hicieron clic, que ya estaban interesadas. Pagaste (con SEO, con publicidad o con tiempo) para que llegaran, y se van antes de ver un solo producto. Es como tener el local abierto pero con la puerta trabada.

**2. Google te muestra menos.** Google usa la experiencia de página —y dentro de ella, la velocidad— como una de sus señales para ordenar resultados. No es la más importante (el contenido relevante manda), pero cuando dos sitios compiten parejo por la misma búsqueda, el más rápido tiene ventaja. Y en búsquedas locales, donde casi todos los competidores tienen contenido parecido, ese desempate pesa.

O sea: primero te llega menos gente, y de la que llega, una parte se va antes de leerte.

---

## Las tres métricas que mira Google (en criollo)

Google resume la experiencia de carga en tres números llamados **Core Web Vitals**. Suenan técnicos, pero cada uno responde a una pregunta muy humana:

| Métrica | La pregunta que responde | Umbral "bueno" |
| --- | --- | --- |
| LCP (Largest Contentful Paint) | ¿Cuánto tarda en aparecer lo importante de la pantalla? | 2,5 segundos o menos |
| INP (Interaction to Next Paint) | Cuando toco un botón, ¿reacciona al toque o queda colgado? | 200 milisegundos o menos |
| CLS (Cumulative Layout Shift) | ¿Se me mueve todo de lugar mientras carga y termino tocando lo que no quería? | 0,1 o menos |

Fuente: Google, documentación oficial de Core Web Vitals (web.dev, 2026). Google evalúa estos umbrales en el percentil 75 de las visitas reales: para "aprobar", tres de cada cuatro personas que entran tienen que tener esa experiencia o mejor.

Ese detalle del percentil 75 es clave y casi nadie lo entiende: no alcanza con que tu web ande rápida en tu notebook con fibra óptica. Tiene que andar rápida en el celular de gama media de tu cliente, con la señal que hay en la calle. Ese es el examen real.

El tercero, el CLS, es el que más bronca genera en la vida real: es cuando estás por tocar "Comprar", carga una imagen arriba, todo se corre para abajo y terminás tocando otra cosa. No es solo velocidad, es sensación de sitio hecho a las apuradas.

---

## Cómo medir tu web gratis en 5 minutos

No hace falta contratar a nadie para saber cómo estás parado:

1. Entrá a **PageSpeed Insights** de Google (es gratis y no hay que registrarse).
2. Pegá la dirección de tu web y dale analizar.
3. **Mirá la solapa de celular, no la de escritorio.** La enorme mayoría de las visitas de una pyme argentina llegan desde el teléfono, así que ese es el número que importa.
4. Ignorá por un rato el puntaje sobre 100 y fijate en las tres métricas de arriba: ¿están en verde, amarillo o rojo?
5. Bajá hasta la sección de oportunidades. Ahí Google te dice, en orden, qué es lo que más te está frenando.

Un consejo: no te obsesiones con llegar a 100. Un puntaje verde y estable rinde mucho más que perseguir la perfección. La diferencia entre 45 y 80 la siente el cliente; entre 92 y 98, no la siente nadie.

---

## Las causas típicas en webs de pymes

Después de mirar decenas de sitios de pymes, los culpables se repiten muchísimo. Van en orden de "cuánto pesa" versus "qué fácil es arreglarlo":

**Las imágenes sin optimizar.** Es, lejos, el problema número uno. Alguien subió la foto tal cual salió de la cámara o del celular: varios megas para mostrarse en un recuadro chiquito. El navegador se la baja entera igual. Redimensionar las fotos y guardarlas en formatos modernos (WebP) suele ser el arreglo que más mejora por menos trabajo.

**Demasiados plugins.** Típico de WordPress: se van sumando plugins para el chat, el pop-up, las estadísticas, el carrusel, las cookies... y cada uno agrega código que el visitante tiene que descargar. Muchos quedan instalados por algo que se probó una vez y nunca se usó.

**Scripts de terceros.** Píxeles de publicidad, chats, mapas embebidos, videos incrustados, tipografías traídas de afuera. Cada uno es una llamada a un servidor ajeno, y tu web va tan rápido como el más lento de ellos.

**Hosting barato o mal ubicado.** Si el servidor está saturado o físicamente lejos de tus visitantes, todo arranca tarde por más liviana que sea la página. Es la parte menos glamorosa y una de las que más se nota.

**Sitios armados con plantillas pesadas.** Muchas plantillas prometen "todo incluido" y cargan animaciones, íconos y estilos que tu web no usa. Se paga el peso completo igual.

---

## El orden en que conviene atacarlo

No hagas todo junto ni de una. Este orden te da la mayor mejora con el menor riesgo de romper algo:

:::flow
{ "title": "Plan para acelerar tu web", "steps": [
  { "title": "1. Medí y anotá el punto de partida", "text": "Corré PageSpeed Insights en celular y guardá una captura. Sin ese antes, después no vas a saber si mejoraste o te lo estás imaginando." },
  { "title": "2. Arreglá las imágenes", "text": "Redimensionalas al tamaño real en que se muestran, convertilas a WebP y activá carga diferida para las que están más abajo. Es el mayor ahorro de peso por unidad de esfuerzo." },
  { "title": "3. Limpiá lo que no usás", "text": "Desinstalá plugins que no aportan y sacá scripts de terceros que ya no mirás. Cada cosa que borrás es peso que el cliente no descarga." },
  { "title": "4. Revisá el hosting", "text": "Si el servidor responde lento con la web ya liviana, el problema es la casa, no los muebles. Un plan mejor o un CDN suele resolverlo." },
  { "title": "5. Volvé a medir y dejalo monitoreado", "text": "Compará contra la captura del paso 1 y repetí la medición cada par de meses. Las webs se vuelven lentas de a poco, sin que nadie lo note." }
] }
:::

Los pasos 2 y 3 los podés encarar vos mismo o con quien te mantiene la web, y en general resuelven la mayor parte del problema. Recién si después de eso seguís en rojo, vale la pena meterse en cuestiones más técnicas.

---

## Tres errores que empeoran las cosas

- **Instalar un plugin de caché y darlo por resuelto.** Ayuda, pero no achica una foto de 4 megas. Si el problema es el peso, la caché solo te lo entrega rápido... y pesado.
- **Perseguir el 100 de puntaje.** Se pueden pasar semanas en los últimos puntos, que nadie percibe, mientras la web sigue sin explicar bien qué vendés. La velocidad es un medio, no la meta.
- **Optimizar la velocidad de un sitio que no convierte.** Si tu web carga volando pero no dice claro qué hacés, para quién y cómo contactarte, el problema no era la velocidad. Sobre eso escribimos en **[por qué tu negocio necesita una página web](/blog/por-que-tu-negocio-necesita-una-pagina-web)**.

---

## En resumen

La velocidad de carga no es un capricho de programadores: es la puerta de entrada de tu negocio. Google mira tres cosas concretas —cuánto tarda en aparecer el contenido, si responde al toque y si no se mueve todo de lugar— y las mide en el celular de tu cliente, no en tu computadora.

Medirla es gratis y toma cinco minutos. Arreglar el 80% del problema suele ser optimizar imágenes y sacar lo que sobra. Y el beneficio se nota donde importa: más gente que llega, se queda y te escribe.

En Nimbo diseñamos y optimizamos webs para pymes argentinas pensando desde el primer día en que carguen rápido en el celular, no solo en que se vean lindas en una notebook.

**[Escribinos y revisamos gratis la velocidad de tu web](https://wa.me/5491124036836?text=Hola,%20quiero%20que%20revisen%20la%20velocidad%20de%20mi%20web)** — te decimos qué la está frenando y qué conviene arreglar primero.
    `.trim(),
  },
  {
    slug: 'como-medir-el-roi-de-una-automatizacion',
    title: 'Cómo medir el ROI de una automatización (sin planillas imposibles)',
    description:
      '¿Vale la pena automatizar? Te mostramos cómo calcular el retorno (ROI) de una automatización en tu pyme, paso a paso y con un ejemplo, para saber si te conviene antes de gastar un peso.',
    date: '2026-07-13',
    category: 'Automatización & IA',
    readTime: '8 min',
    content: `
## "Che, ¿y esto se paga solo?"

Es la pregunta que hace todo dueño de pyme antes de automatizar algo. Y está perfecta: nadie quiere gastar plata en una herramienta linda que no mueve la aguja.

El problema es que muchos automatizan por moda, o directamente no automatizan por miedo a tirar la plata, y en los dos casos deciden a ojo. La buena noticia es que el retorno de una automatización se puede calcular con la matemática de la primaria y en una servilleta.

En esta guía te muestro cómo medir el ROI (retorno de la inversión) de una automatización de forma simple, para que decidas con números y no con la intuición.

---

## Qué es el ROI, en criollo

ROI es cuánto te devuelve cada peso que ponés. La fórmula de toda la vida es:

**ROI = (lo que ganás o ahorrás − lo que te costó) ÷ lo que te costó**

Si te da 1, significa que por cada peso que pusiste, recuperaste ese peso y ganaste uno más (100% de retorno). Si te da 2, ganaste dos por cada uno. Si te da negativo, estás perdiendo.

Con las automatizaciones hay una ventaja: el costo suele ser fijo y mensual, mientras que el beneficio se repite mes a mes. Por eso una automatización que "empata" el primer mes, del segundo en adelante es casi todo ganancia.

---

## Los 4 números que necesitás

No hace falta un sistema contable. Con estos cuatro datos te alcanza:

:::flow
{ "title": "Los datos para calcular tu retorno", "steps": [
  { "title": "El costo de la automatización", "text": "Lo que pagás por armarla y mantenerla. Puede ser un plan mensual, un desarrollo a medida, o las dos cosas." },
  { "title": "El tiempo que te ahorra", "text": "Cuántas horas por semana dejás de hacer esa tarea vos o tu equipo. Cronometralo una semana, no lo estimes de memoria." },
  { "title": "Cuánto vale esa hora", "text": "El costo por hora de quien hoy hace la tarea. Si sos vos, usá lo que cobrás tu hora de trabajo productivo." },
  { "title": "El ingreso extra que genera", "text": "Ventas que antes se perdían: consultas sin responder, turnos que nadie confirmaba, clientes que no volvían." }
] }
:::

Los primeros tres miden el **ahorro**. El cuarto mide el **ingreso extra**, y suele ser el más grande, aunque también el más difícil de estimar. Empezá midiendo solo el ahorro de tiempo: si con eso ya se justifica, el ingreso extra es todo yapa.

---

## Un ejemplo, paso a paso

Veamos un caso ilustrativo (números de ejemplo, para que veas la mecánica; poné los tuyos). Una pyme automatiza la respuesta a consultas frecuentes por WhatsApp:

| Concepto | Valor mensual |
| --- | --- |
| Costo de la automatización | $80.000 |
| Horas ahorradas por semana | 8 hs |
| Horas ahorradas por mes (x4,3) | 34 hs |
| Valor de la hora | $6.000 |
| Ahorro por tiempo (34 × $6.000) | $206.000 |
| Ingreso extra por consultas respondidas a tiempo | $120.000 |

Con esos números:

- **Beneficio total:** $206.000 + $120.000 = **$326.000 por mes**
- **Costo:** $80.000 por mes
- **ROI = (326.000 − 80.000) ÷ 80.000 = 3,07**

Un ROI de 3 quiere decir que por cada peso invertido, la pyme recupera ese peso y **gana tres más**. Y ojo: si sacás el ingreso extra y mirás solo el ahorro de tiempo, el ROI sigue siendo positivo (más de 1,5). O sea, se justifica aunque no vendas ni un peso de más.

---

## El número que casi nadie mira: el punto de equilibrio

Más útil todavía que el ROI es el **punto de equilibrio**: en cuánto tiempo la automatización se paga sola.

Es una cuenta sola: costo total inicial dividido por el beneficio mensual. Si armar una automatización te costó $240.000 una vez y te deja $326.000 por mes, se paga sola en menos de un mes. De ahí en adelante, es ganancia neta que se repite sin que hagas nada.

Este es el número que conviene tener a mano cuando dudás si vale la pena: no "cuánto cuesta", sino **en cuántas semanas se paga solo**.

---

## El costo invisible: lo que perdés por NO automatizar

Cuando calculás el retorno, es fácil ver el costo de automatizar. Lo difícil es ver el costo de **no** hacerlo, porque no aparece en ninguna factura. Pero está, y suele ser más caro:

- Las consultas que llegan a la noche o el finde y nadie responde hasta el lunes (para entonces el cliente ya compró en otro lado).
- Los turnos que se pisan o quedan libres porque nadie confirmó.
- Los clientes que no volvieron porque nadie les hizo seguimiento.
- Tus horas —o las de tu equipo— gastadas en tareas repetitivas en vez de en vender o mejorar el negocio.

Eso es lo que se llama costo de oportunidad, y aunque no lo veas en el banco, te lo está sacando igual. Cuando lo sumás al cálculo, el retorno de automatizar casi siempre crece.

---

## Errores comunes al medir el retorno

Para que tu cálculo no te mienta, evitá estas trampas:

| Error | Por qué te confunde |
| --- | --- |
| Mirar solo el costo, no el beneficio | La automatización parece "un gasto" cuando en realidad es una inversión que se repite. |
| Estimar las horas de memoria | Casi siempre subestimás cuánto tiempo te come una tarea. Cronometrala una semana. |
| Esperar resultados el día uno | Una automatización necesita un par de semanas de ajuste antes de rendir a full. |
| Olvidar el ingreso extra | El ahorro de tiempo es solo la mitad; las ventas rescatadas suelen ser la otra mitad. |
| Automatizar algo que casi no usás | Un proceso que pasa dos veces por mes no mueve la aguja, por más lindo que quede. |

---

## Cómo empezar sin arriesgar de más

La forma más segura de tener un buen ROI es no jugarte todo de una:

1. **Elegí la tarea que más tiempo te come.** Suele ser responder consultas o coordinar turnos. Ahí el retorno aparece rápido.
2. **Medí una semana antes de automatizar.** Anotá horas reales y consultas perdidas. Ese es tu punto de partida.
3. **Automatizá esa sola tarea y medí de nuevo.** Compará contra el punto de partida. Si el número cierra, escalás a la siguiente.

Este orden lo desarrollamos en la guía de **[cómo automatizar tu negocio con IA](/blog/automatiza-tu-negocio-con-ia)**, que te sirve para elegir por dónde arrancar antes de sacar la calculadora.

---

## En resumen

Medir el ROI de una automatización no requiere una planilla imposible ni un contador: necesitás cuatro números (costo, horas ahorradas, valor de la hora e ingreso extra) y una división. Con eso sabés si te conviene antes de gastar un peso, y sobre todo, en cuántas semanas se paga sola.

En Nimbo automatizamos negocios argentinos con IA a medida y te ayudamos a hacer justamente este cálculo para tu caso, con tus números reales, antes de arrancar. Sin humo y sin comprometerte a nada.

**[Escribinos y calculamos juntos el retorno de automatizar tu negocio](https://wa.me/5491124036836?text=Hola,%20quiero%20saber%20si%20me%20conviene%20automatizar%20mi%20negocio)** — te decimos con números si te conviene.
    `.trim(),
  },
  {
    slug: 'automatiza-tu-negocio-con-ia',
    title: 'Automatizá tu negocio con IA: la guía práctica para pymes argentinas',
    description:
      '¿Querés automatizar tu negocio con IA pero no sabés por dónde empezar? Guía práctica para pymes en Argentina: qué se puede automatizar, cómo hacerlo paso a paso y cuánto cuesta, sin vueltas.',
    date: '2026-07-06',
    category: 'Automatización & IA',
    readTime: '9 min',
    content: `
## Automatizá tu negocio con IA: de la frase de moda a algo concreto

"Automatizá tu negocio con IA" suena por todos lados. Pero cuando sos dueño de una pyme y estás tapado de tareas, la frase sola no te sirve: necesitás saber **qué** se automatiza, **cómo** se hace y **cuánto** cuesta, en criollo.

Esta guía es justo eso. Sin humo, sin promesas mágicas: lo que hoy una pyme argentina puede automatizar con inteligencia artificial para vender más y trabajar menos.

La idea de fondo es simple: hay un montón de tareas que hacés todos los días, que te comen horas y no requieren tu criterio. Esas son las que la IA puede hacer por vos, mientras vos te dedicás a lo que sí importa.

---

## Qué se puede automatizar en tu negocio

No hace falta automatizar todo. Estas son las áreas donde una pyme gana más tiempo, ordenadas de la más común a la más avanzada:

| Área | Qué se automatiza | Con qué |
| --- | --- | --- |
| Atención al cliente | Responder consultas frecuentes al instante, 24/7 | Chatbot o agente de IA en WhatsApp |
| Turnos y reservas | Agendar, confirmar y recordar solo | Sistema de turnos automático |
| Ventas | Filtrar y calificar los mejores leads | Agente de IA |
| Post-venta | Seguimiento y recontacto de clientes | Automatización de mensajes y email |
| Tareas internas | Cargar datos, armar reportes, avisos | Flujos automáticos entre tus apps |

Si querés profundizar en la atención al cliente, tenemos una guía dedicada: **[cómo automatizar tu pyme con IA y un chatbot de WhatsApp](/blog/automatizar-pyme-ia-chatbot-whatsapp)**.

---

## Cómo automatizar tu negocio, paso a paso

El error más común es querer automatizar todo de golpe, comprar cinco herramientas y terminar sin usar ninguna. Lo que funciona es ir de a poco:

:::flow
{ "title": "El camino para automatizar tu negocio", "steps": [
  { "title": "Detectá qué te hace perder tiempo", "text": "Durante una semana, prestá atención a qué tareas repetís todo el día. Esas son las candidatas." },
  { "title": "Empezá por UNA sola", "text": "Elegí la que más tiempo te come —normalmente la atención de consultas— y resolvela bien antes de pasar a la siguiente." },
  { "title": "Elegí la herramienta o un desarrollo a medida", "text": "Para lo estándar alcanza con herramientas existentes; para procesos propios conviene una solución a medida." },
  { "title": "Medí y escalá", "text": "Mirá cuánto tiempo ganaste y cuántas consultas se resolvieron solas. Lo que funciona, lo replicás en otra área." }
] }
:::

---

## ¿Chatbot o agente de IA?

Acá hay una diferencia importante que conviene entender antes de contratar nada. Un **chatbot** sigue guiones fijos y responde preguntas frecuentes. Un **agente de IA** entiende lenguaje natural, toma decisiones y ejecuta acciones: agenda, filtra, vende y deriva a una persona cuando hace falta.

Para automatizar de verdad tu negocio, casi siempre querés un agente de IA. Lo explicamos en detalle acá: **[agentes de IA vs. chatbots](/blog/agentes-de-ia-vs-chatbots)**.

---

## Cuánto cuesta automatizar tu negocio

Depende del alcance, pero mucho menos de lo que la mayoría cree. Para la mayoría de las pymes, arrancar con una automatización bien hecha cuesta menos que sumar una persona part-time, y trabaja las 24 horas.

Muchas herramientas tienen planes gratuitos o de bajo costo mensual (para turnos, respuestas automáticas, email). El desarrollo a medida tiene sentido cuando tenés procesos propios que ninguna herramienta estándar cubre. La pregunta correcta no es "cuánto cuesta", sino **cuánto te está costando NO hacerlo**: las horas que perdés y las consultas que no respondés a tiempo.

---

## Ejemplos por rubro

Así se ve automatizar un negocio, según el rubro:

- **Comercio / tienda**: respuestas automáticas a talles, colores, precios y envíos; el dueño recupera horas de responder Instagram y WhatsApp.
- **Servicios con turnos** (salud, estética, oficios): agenda automática con recordatorio, menos ausentes y menos turnos pisados.
- **Profesionales** (contadores, estudios): seguimiento automático de documentación y recordatorios, sin perseguir a cada cliente.
- **Ventas**: un agente de IA filtra los curiosos de los que quieren comprar y te pasa solo las oportunidades calientes.

Todo esto es parte de algo más grande: la **[transformación digital de tu pyme](/blog/transformacion-digital-pymes-argentina)**.

---

## Probá un agente de IA ahora mismo

Mejor que contártelo: probalo. Escribile al asistente como si fueras un cliente tuyo y fijate cómo atiende.

:::chatbot
{ "title": "Asistente de IA de Nimbo", "intro": "Es el mismo tipo de agente que implementamos a medida para cada negocio. Preguntale lo que quieras:" }
:::

---

## Empezá a automatizar tu negocio hoy

No necesitás un plan gigante ni un presupuesto enorme. Necesitás empezar por la tarea que más tiempo te come y resolverla bien. El resto viene solo.

En Nimbo automatizamos negocios argentinos con IA a medida: atención, turnos, ventas y tareas internas. Lo conectamos a tu WhatsApp, lo entrenamos con tu forma de trabajar y lo dejamos funcionando 24/7.

**[Agendá una llamada gratuita de diagnóstico](https://wa.me/5491124036836?text=Hola,%20quiero%20automatizar%20mi%20negocio%20con%20IA)** y te mostramos qué se podría automatizar en tu caso puntual.
    `.trim(),
  },
  {
    slug: 'agentes-de-ia-vs-chatbots',
    title: 'Agentes de IA vs. Chatbots: qué son, en qué se diferencian y cómo atienden a tus clientes 24/7',
    description:
      '¿Chatbot o agente de IA? Te explicamos qué son, en qué se diferencian y cómo un agente puede atender, filtrar y agendar a tus clientes las 24 horas, sin que se pierda ni un mensaje.',
    date: '2026-07-06',
    category: 'Inteligencia Artificial',
    readTime: '6 min',
    content: `
## Son las 22:30 y tu negocio sigue recibiendo mensajes

Estás cenando, mirando el partido o ya en la cama. En el teléfono del negocio entra un mensaje: "Hola, ¿tenés turno para mañana?". No lo ves hasta la mañana siguiente. Cuando contestás, la persona ya resolvió en otro lado.

Esa escena se repite todos los días en miles de negocios argentinos. Cada consulta que no respondés a tiempo es una oportunidad que se enfría. Y el problema no es que no quieras atender: es que no podés estar disponible las 24 horas.

La buena noticia es que hoy la tecnología puede atender esas consultas por vos, al instante, a cualquier hora. La menos conocida es que no todo lo que "responde solo" es lo mismo. Hay una diferencia grande entre un **chatbot** y un **agente de IA**, y entenderla te puede cambiar la forma de atender.

**Respuesta corta:** un chatbot responde con guiones y menús fijos; un agente de IA entiende lo que la persona escribe en lenguaje natural, tiene en cuenta el contexto y ejecuta acciones, como agendar un turno, filtrar consultas o derivar a una persona cuando hace falta.

---

## ¿Qué es un chatbot?

Un chatbot es un programa que responde mensajes siguiendo reglas y guiones fijos. Vos definís de antemano las preguntas y las respuestas, y muchas veces funciona con menús: "Escribí 1 para horarios, 2 para precios, 3 para hablar con un asesor".

Sirve para lo más básico y repetitivo: horarios, dirección, formas de pago. Es como un contestador un poco más inteligente.

Su límite aparece cuando el cliente se sale del guión. Si escribe algo que no estaba previsto —"¿me lo pueden mandar a Escobar el sábado?"— el chatbot no entiende, responde "no comprendí tu consulta" o te devuelve al menú. Ahí es donde el cliente se frustra y se va.

---

## ¿Qué es un agente de IA?

Un agente de IA juega en otra liga. Usa inteligencia artificial para **entender lo que la persona quiere en lenguaje natural**, tener en cuenta el contexto de la conversación y —lo más importante— **actuar**.

No solo responde: decide y ejecuta. Puede agendar un turno mirando tu disponibilidad real, filtrar si una consulta es un cliente potencial o alguien que solo está preguntando, armar un presupuesto tipo, tomar los datos de contacto y derivar a una persona cuando la charla lo amerita.

Entiende un mensaje como "che, ¿tenés lugar el jueves a la tarde para dos?" y lo resuelve como lo haría un buen empleado: sin menús, sin guiones rígidos, con una conversación que se siente natural.

La diferencia en una frase: **el chatbot informa; el agente de IA resuelve.**

Si querés ver qué tareas conviene delegarle a un agente y cómo se implementa paso a paso, leé la guía de [agentes de IA para pymes](/blog/agentes-de-ia-para-pymes-como-implementarlos).

---

## Chatbot vs. Agente de IA: la comparación

| Aspecto | Chatbot | Agente de IA |
| --- | --- | --- |
| Cómo entiende | Palabras clave y menús fijos | Lenguaje natural y contexto |
| Qué hace | Responde guiones predefinidos | Decide y ejecuta acciones |
| Ante algo inesperado | Se traba o te manda al menú | Razona, resuelve o deriva a una persona |
| Tareas que cubre | Informar (horarios, precios) | Agendar, filtrar leads, vender, derivar |
| Cómo lo siente el cliente | Robótico y limitado | Como hablar con alguien del equipo |

---

## Casos de uso por rubro

Así se ve un agente de IA trabajando, según lo que necesite tu negocio:

### Atención al cliente

Responde las consultas frecuentes al instante y a cualquier hora. Cuando la pregunta se complica, deriva a una persona con todo el contexto ya cargado. Tu cliente nunca queda esperando y vos no vivís pegado al teléfono.

Si la mayoría de tus consultas entran por WhatsApp, en [cómo automatizar tu pyme con IA y un chatbot de WhatsApp](/blog/automatizar-pyme-ia-chatbot-whatsapp) te contamos cómo se arma.

### Ventas

El agente hace las primeras preguntas ("¿qué estás buscando?", "¿para cuándo?", "¿en qué zona?"), separa a los curiosos de los que realmente quieren comprar y te pasa solo las oportunidades calientes, ya calificadas. Dejás de perder tiempo con consultas que no van a ningún lado y dejás de perder ventas por no contestar a tiempo.

### Agendamiento

Muestra tu disponibilidad real, toma la reserva, la confirma y manda el recordatorio automático. Menos turnos pisados, menos ausentes y menos ida y vuelta para coordinar un horario.

---

## ¿Cómo sé si mi negocio necesita un agente de IA?

No todos los negocios lo necesitan hoy. Pero si te cruzás con varias de estas señales, es momento de mirarlo en serio:

:::flow
{ "title": "4 señales de que te conviene un agente de IA", "steps": [
  { "title": "Recibís muchos mensajes repetidos", "text": "Si contestás las mismas cinco preguntas todo el día, un agente las resuelve solo y te libera horas." },
  { "title": "Perdés consultas fuera de horario", "text": "Los mensajes de la noche y el fin de semana que quedan sin responder son ventas que se van a la competencia." },
  { "title": "Tu equipo (o vos) está saturado", "text": "Cuando atender el WhatsApp te come el tiempo de lo importante, es momento de delegar lo repetitivo." },
  { "title": "Los leads se enfrían por la demora", "text": "Mientras más tardás en responder, menos chances de cerrar. Un agente contesta en segundos, siempre." }
] }
:::

---

## Probá un agente de IA ahora mismo

En vez de contártelo, mejor que lo veas. Escribile al asistente de acá abajo como si fueras un cliente tuyo —preguntale por precios, horarios o pedile un turno— y fijate cómo responde:

:::chatbot
{ "title": "Asistente de IA de Nimbo", "intro": "Es el mismo tipo de agente que implementamos a medida para cada negocio. Probalo:" }
:::

## Que tu negocio no dependa de que vos estés mirando el teléfono

Un agente de IA bien implementado atiende, filtra y agenda por vos —durante el partido, de madrugada y el domingo— y te pasa a las personas solo cuando de verdad hace falta.

En Nimbo implementamos **agentes de IA a medida** para negocios argentinos: los conectamos a tu WhatsApp, los entrenamos con tu información y tu forma de atender, y los dejamos trabajando 24/7. Podés ver cómo trabajamos en **[automatizaciones y agentes de IA para pymes](/automatizaciones)**.

**[Agendá una llamada gratuita de diagnóstico](https://wa.me/5491124036836?text=Hola,%20quiero%20la%20llamada%20de%20diagnostico%20sobre%20agentes%20de%20IA)** y te mostramos cómo sería un agente de IA funcionando en tu negocio.

Si preferís, también podés **[pedir un diagnóstico desde la web](/diagnostico)**.
    `.trim(),
  },
  {
    slug: 'que-es-un-crm-y-por-que-tu-pyme-lo-necesita',
    title: 'Qué es un CRM y por qué tu pyme lo necesita (aunque creas que no)',
    description:
      'Si guardás a tus clientes en la cabeza, en un cuaderno y en el WhatsApp, estás perdiendo ventas sin darte cuenta. Te explicamos qué es un CRM, cómo saber si ya lo necesitás y cómo empezar sin marearte.',
    date: '2026-07-06',
    category: 'Transformación Digital',
    readTime: '7 min',
    content: `
## "Lo tengo todo en la cabeza"

Es la frase que más escuchamos de dueños de pymes. Y es verdad: te acordás de casi todo. El problema es "casi".

Te acordás del cliente que te escribió el lunes, pero no del que consultó hace tres semanas y quedó en "lo pienso y te aviso". Ese nunca te avisó, y vos tampoco le escribiste. No porque no quisieras: porque se te traspapeló entre el WhatsApp, el cuaderno, los mails y la memoria. Esa venta no se perdió por precio ni por competencia. Se perdió porque nadie le hizo seguimiento.

Un CRM es, básicamente, la herramienta que evita que eso vuelva a pasar. Y no, no es solo para empresas grandes.

**En corto:** un CRM es un sistema donde centralizás a tus clientes, sus consultas y el próximo paso de cada venta, para que ningún seguimiento dependa de tu memoria. Le sirve a cualquier pyme que hoy pierde consultas entre el WhatsApp, el mail y las planillas.

---

## Qué es un CRM, sin vueltas

CRM son las siglas de *Customer Relationship Management* (gestión de la relación con clientes). Suena a algo corporativo, pero la idea es simple: es **un solo lugar donde vive todo lo que necesitás saber de cada cliente y de cada oportunidad de venta**.

Quién es, qué te consultó, qué le ofreciste, cuándo fue la última vez que hablaron, qué quedó pendiente y cuál es el próximo paso. En vez de tener esa información desparramada en cinco lugares (y en tu cabeza), está toda junta, ordenada y accesible.

Pensalo así: si tu negocio fuera un local, el CRM es el mostrador donde está la ficha de cada cliente. No importa quién atienda ni qué día sea: la información está ahí.

---

## Las señales de que ya lo necesitás

No hace falta ser una gran empresa. Si te pasan varias de estas, un CRM te va a cambiar la semana:

| Señal | Qué está pasando en realidad |
| --- | --- |
| "Uh, me olvidé de contestarle a fulano" | Estás perdiendo ventas por falta de seguimiento |
| Buscás una conversación vieja y no la encontrás | Tu información está desordenada y te hace perder tiempo |
| No sabés cuántas consultas tenés abiertas | No tenés visibilidad de tu propio embudo de ventas |
| Si te vas de vacaciones, se frena todo | El negocio depende de que vos te acuerdes de cada cosa |
| Sumaste a alguien y no sabe con quién hablaste | El conocimiento está en tu cabeza, no en el negocio |

Si leíste esto asintiendo, no es un problema de organización personal. Es que tu negocio creció más rápido que tus herramientas.

---

## Qué hace un CRM por tu negocio

Más allá de "ordenar", un CRM te da cosas concretas:

- **Nadie se cae del mapa.** Cada consulta queda registrada con su próximo paso. El cliente que dijo "la semana que viene" te aparece la semana que viene, sin que dependas de tu memoria.
- **Ves tu embudo completo.** Cuántas oportunidades tenés abiertas, en qué etapa está cada una y cuáles están por enfriarse. Dejás de manejar a ciegas.
- **El seguimiento deja de ser un esfuerzo.** Recordatorios automáticos para volver a contactar, mensajes de post-venta, avisos cuando algo lleva mucho sin moverse.
- **El conocimiento queda en el negocio, no en vos.** Si sumás a alguien, o te tomás una semana, la información sigue estando. El negocio no se para.
- **Decidís con datos.** De dónde vienen tus mejores clientes, qué se te cae en la etapa de presupuesto, cuánto tardás en cerrar. Números reales en lugar de sensaciones. Y si querés ver esos números en un tablero que se actualice solo, eso es lo que armamos en [datos y tableros](/datos-y-tableros).

---

## CRM vs. la planilla de Excel

Mucha gente arranca con una planilla, y está perfecto como primer paso. Pero tiene un techo. Esta es la diferencia:

| | Planilla de Excel | CRM |
| --- | --- | --- |
| Guardar contactos | Sí | Sí |
| Recordarte los seguimientos | No, te acordás vos | Sí, te avisa solo |
| Ver en qué etapa está cada venta | A mano y engorroso | Visual, de un vistazo |
| Que la use más de una persona | Se pisan los cambios | Todos ven lo mismo, siempre |
| Conectar con WhatsApp o mail | No | Sí, según la herramienta |
| Registrar cada conversación | Muy manual | Queda solo |

La planilla te sirve para empezar. El CRM te sirve para crecer sin que se te escape nada.

---

## Cómo empezar sin marearte

El error más común es elegir un CRM enorme, lleno de funciones que nunca vas a usar, y abandonarlo a las dos semanas. La forma que funciona es al revés: simple primero, complejo después.

:::flow
{ "title": "El camino en 4 pasos", "steps": [
  { "title": "Definí tus etapas de venta", "text": "Escribí el recorrido real de un cliente en tu negocio: por ejemplo Consulta nueva, Presupuesto enviado, En negociacion, Cerrado. Ese mapa simple es el corazon de tu CRM." },
  { "title": "Cargá lo que ya tenés", "text": "Volcá tus contactos y las oportunidades abiertas de este momento. No hace falta migrar diez anios de historia: arranca con lo que esta vivo hoy." },
  { "title": "Usalo todos los días, aunque sea básico", "text": "Cada consulta nueva entra al CRM y cada una tiene un proximo paso con fecha. Esta es la unica regla que importa al principio. La constancia vale mas que las funciones." },
  { "title": "Automatizá recién cuando ya lo usás", "text": "Cuando el habito esta instalado, sumas recordatorios automaticos, mensajes de seguimiento y conexion con WhatsApp. Ahi el CRM pasa de ordenar a trabajar por vos." }
] }
:::

No necesitás la herramienta más cara ni la más completa. Necesitás una que uses de verdad. Hay opciones gratuitas o de bajo costo que alcanzan y sobran para la mayoría de las pymes que están empezando.

Cuando llegue el momento de automatizar, conectar el CRM con WhatsApp, el mail o tu sistema de gestión es justo el tipo de [automatización e integración](/automatizacion-e-integracion) que hacemos en Nimbo. Si querés ver cómo se ve un seguimiento automático por WhatsApp, te contamos [cómo automatizar tu pyme con un chatbot de WhatsApp](/blog/automatizar-pyme-ia-chatbot-whatsapp), y para saber si te conviene, [cómo medir el ROI de una automatización](/blog/como-medir-el-roi-de-una-automatizacion).

---

## Tres mitos que te frenan

**"Es para empresas grandes."** Al revés: cuanto más chico sos, más te duele perder una venta por olvido. Una empresa grande tiene un equipo que compensa; vos sos el equipo.

**"Es muy complicado de usar."** Los CRM de hoy están pensados para arrancar en una tarde. Si elegís uno simple y lo usás para lo básico, la curva es corta. Lo complicado es seguir perdiendo clientes sin saber por qué.

**"No tengo tantos clientes como para eso."** Justamente por eso: cada cliente pesa más. Cuando tenés pocos, cuidar a cada uno y no dejar ninguna consulta sin responder es lo que te hace crecer.

---

## En resumen

Un CRM no es un software más ni un lujo de empresa grande. Es la diferencia entre un negocio que depende de que vos te acuerdes de todo y uno que funciona ordenado, donde ninguna consulta se cae y cada cliente recibe seguimiento.

No se trata de la herramienta más sofisticada. Se trata de dejar de perder ventas por desorden. Empezá simple, usalo todos los días, y automatizá cuando el hábito ya esté instalado.

Si estás ordenando el negocio de punta a punta, mirá también nuestra guía de [transformación digital para pymes en Argentina](/blog/transformacion-digital-pymes-argentina).

En Nimbo ayudamos a pymes argentinas a ordenar sus clientes y automatizar el seguimiento para que no se les escape ninguna venta. Si querés que veamos qué CRM te sirve y cómo dejarlo andando, **[agendá un diagnóstico sin cargo](/diagnostico)** o **[escribinos por WhatsApp](https://wa.me/5491124036836)** y lo charlamos sin compromiso.
    `.trim(),
  },
  {
    slug: 'transformacion-digital-pymes-argentina',
    title: 'Transformación digital para pymes en Argentina: por dónde empezar en 2026',
    description:
      'Transformación digital no es comprar tecnología: es rediseñar cómo trabaja tu negocio. Te mostramos los pasos concretos para empezar en tu pyme sin frustrarte ni gastar de más.',
    date: '2026-07-05',
    category: 'Transformación Digital',
    readTime: '8 min',
    content: `
## Qué es (y qué no es) la transformación digital

Cuando un dueño de pyme escucha "transformación digital", suele imaginar dos cosas: o algo carísimo reservado para grandes empresas, o comprar una computadora nueva y un software. Las dos ideas están equivocadas.

Transformación digital es **rediseñar la forma en que tu negocio trabaja usando tecnología para hacerlo más rápido, más barato y menos dependiente de que vos estés en todo**. No se trata de la herramienta. Se trata del proceso.

Un ejemplo simple: no es "comprar un sistema de turnos". Es lograr que un cliente reserve solo, reciba el recordatorio automático, y que vos te enteres sin tocar el teléfono. La herramienta es el medio; el resultado es menos tiempo perdido y menos ausencias.

---

## Por qué ahora sí conviene (y antes no tanto)

Hace unos años, digitalizar un proceso en una pyme argentina era caro y complejo: había que contratar desarrollo a medida, servidores, soporte. Hoy la foto cambió por completo. Las herramientas se volvieron accesibles, muchas tienen planes gratuitos o de bajo costo, y la inteligencia artificial permite automatizar tareas que antes requerían una persona.

En 2026, una pyme puede automatizar su atención al cliente, sus turnos y su seguimiento post-venta por menos de lo que cuesta un empleado part-time. La barrera ya no es el dinero: es saber por dónde empezar.

:::bar
{ "title": "Adopción de IA en pymes argentinas, por sector (2025)", "unit": "%", "highlightIndex": 0, "data": [["Software / IT", 85.4], ["Textil", 47.4], ["Metalmecánica", 40.6], ["Madera y papel", 35.1], ["Química y plástico", 34.7], ["Alimentos", 29.9], ["Minerales", 16.3]], "note": "En promedio, el 41,6% de las pymes argentinas ya usa alguna herramienta de IA, y más del 85% empezó entre 2024 y 2025. Fuente: Encuesta Nacional de Adopción de IA en PyMEs — nadIA (CEPE-UTDT y Fundar, con apoyo del BID), 2025." }
:::

---

## Los 4 frentes de la transformación digital en una pyme

No hace falta transformar todo. En la práctica, casi toda pyme puede mejorar en estos cuatro frentes:

| Frente | Qué mejora | Ejemplo concreto |
| --- | --- | --- |
| Presencia digital | Que te encuentren | Página web + Google Business |
| Automatización | Que trabajes menos | Turnos y respuestas automáticas |
| Inteligencia artificial | Que escales sin contratar | Chatbot que atiende 24/7 |
| Datos | Que decidas con información | Tablero con tus números clave |

### 1. Presencia digital (que te encuentren)

Es la base. Si cuando te buscan en Google no aparecés, todo lo demás no importa. Una página web profesional, un perfil de Google Business optimizado y presencia en las redes donde está tu cliente. Este frente es el que convierte desconocidos en consultas.

### 2. Automatización de tareas repetitivas (que trabajes menos)

Todo lo que hacés todos los días y no requiere tu criterio es candidato a automatizarse: responder las mismas preguntas, coordinar turnos, mandar recordatorios, cargar datos de un lado a otro. Acá es donde más tiempo se recupera.

### 3. Inteligencia artificial aplicada (que escales sin contratar)

La IA permite que una pyme haga cosas que antes necesitaban un equipo: un chatbot que atiende 24 horas, respuestas automáticas bien redactadas, generación de contenido, análisis de consultas. No reemplaza tu criterio, pero multiplica tu capacidad.

### 4. Datos y decisiones (que dejes de manejar a ciegas)

La mayoría de las pymes toma decisiones por intuición porque no mira sus números. ¿Qué producto deja más margen? ¿En qué horario vendés más? ¿Cuántos clientes vuelven? Ordenar esos datos en un tablero simple cambia la calidad de tus decisiones.

---

## Por dónde empezar sin frustrarte

El error más común es querer transformar todo de golpe. Se compra software, se arma un plan ambicioso, y a las tres semanas todo queda abandonado porque nadie tiene tiempo de mantenerlo. La transformación digital que funciona es gradual, en cuatro pasos:

:::flow
{ "title": "El camino en 4 pasos", "steps": [
  { "title": "Encontrá tu cuello de botella", "text": "¿Qué te consume más tiempo o te hace perder más plata? ¿Las consultas repetidas, los turnos que se pisan, los clientes que no vuelven? Empezá por ahí, no por lo que está de moda." },
  { "title": "Resolvé UNA sola cosa, bien", "text": "Automatizá ese cuello de botella completo antes de pasar al siguiente. Una solución que usás todos los días vale más que cinco a medio implementar." },
  { "title": "Medí el resultado", "text": "Horas ahorradas, consultas respondidas fuera de horario, turnos agendados solos, ventas recuperadas. Si no lo medís, no sabés qué escalar." },
  { "title": "Escalá lo que funciona", "text": "Con una mejora que anda, replicar el proceso en otra área es mucho más fácil. La transformación digital es una bola de nieve: cada paso hace más simple el siguiente." }
] }
:::

---

## Cuánto cuesta transformar digitalmente una pyme

Depende del alcance, pero mucho menos de lo que la mayoría cree:

| Frente | Inversión típica | Ideal para |
| --- | --- | --- |
| Presencia digital | Inicial + mantenimiento bajo | Todo negocio que quiera crecer |
| Automatización de atención o turnos | Desde gratis a bajo costo mensual | Mucho volumen de consultas |
| IA aplicada (chatbot) | Accesible según el volumen | Atender 24/7 sin sumar personal |
| Tableros de datos | Con herramientas que ya usás | Decidir con números, no intuición |

La pregunta correcta no es "cuánto cuesta", sino "cuánto me está costando NO hacerlo": las horas que perdés, las consultas que no respondés a tiempo, los clientes que se van a la competencia que sí les contesta.

---

## Conclusión

La transformación digital no es un proyecto gigante ni un gasto de lujo. Es una serie de mejoras concretas que, sumadas, hacen que tu negocio venda más y dependa menos de que vos estés en todos lados a la vez.

Lo importante es empezar por el cuello de botella real, resolver una cosa a la vez, y medir. El resto viene solo.

En Nimbo acompañamos a pymes argentinas en ese camino: automatización, IA, web y datos, un paso a la vez. Si querés que veamos juntos por dónde te conviene empezar, **[escribinos por WhatsApp](https://wa.me/5491124036836)** y lo charlamos sin compromiso.
    `.trim(),
  },
  {
    slug: 'automatizar-pyme-ia-chatbot-whatsapp',
    title: 'Cómo automatizar tu pyme con IA y un chatbot de WhatsApp',
    description:
      'Un chatbot de WhatsApp bien hecho responde la mayoría de las consultas solo. Te explicamos cómo automatizar la atención al cliente y las tareas repetitivas de tu negocio con IA.',
    date: '2026-07-03',
    category: 'Automatización & IA',
    readTime: '7 min',
    content: `
## El teléfono que no para de sonar

Si tenés una pyme, esto te suena: el WhatsApp del negocio no para. "¿Están abiertos?", "¿Cuánto sale?", "¿Hacen envíos?", "¿Tenés turno para el martes?". Las mismas cinco preguntas, todo el día, todos los días. Y cada una que no contestás rápido es un cliente que se va a otro lado.

La buena noticia: la gran mayoría de esas consultas se pueden responder solas, al instante, las 24 horas, con un chatbot de WhatsApp bien configurado. Y no hace falta ser una empresa grande ni gastar una fortuna.

:::bar
{ "title": "Horas por día en atención de consultas", "unit": "h", "data": [["Sin chatbot", 3], ["Con chatbot bien configurado", 0.75]], "note": "Estimación típica en un comercio con volumen medio de consultas por WhatsApp. El tiempo liberado se reinvierte en las consultas que sí cierran ventas." }
:::

En esta guía te explicamos qué se puede automatizar de verdad, cómo funciona, y cómo empezar sin que salga mal.

---

## Qué es un chatbot de WhatsApp con IA

Un chatbot es un asistente automático que responde los mensajes de tus clientes. Los básicos siguen un menú de opciones fijas. Los que usan inteligencia artificial entienden lo que la persona escribe en lenguaje natural y responden de forma conversacional, como lo harías vos.

La diferencia es enorme: un menú rígido frustra ("no era ninguna de esas opciones"), mientras que un chatbot con IA entiende "hola, quería saber si el martes a la tarde tenés lugar" y responde con lo que corresponde. Si querés ver la diferencia en detalle, leé nuestra guía de [agentes de IA vs. chatbots](/blog/agentes-de-ia-vs-chatbots).

Se conecta a WhatsApp Business —la misma app que ya usás— a través de su API oficial. Para el cliente es transparente: le escribe a tu número de siempre y recibe respuesta al instante.

---

## Qué conviene automatizar primero

No automatices todo de golpe. Empezá por lo que más se repite y menos requiere tu criterio.

| Qué automatizar | Qué hace el chatbot | Resultado |
| --- | --- | --- |
| Preguntas frecuentes | Responde horarios, precios, envíos | Contesta la mayoría de los mensajes solo |
| Turnos y reservas | Muestra disponibilidad y confirma | Menos ausencias y turnos pisados |
| Calificación de consultas | Filtra y te pasa las que importan | Dejás de perder tiempo en curiosos |
| Seguimiento post-venta | Mensajes automáticos tras la compra | Clientes que vuelven |

### Preguntas frecuentes

Horarios, ubicación, precios, formas de pago, si hacés envíos, tiempos de entrega. Son la mayoría de los mensajes de cualquier negocio y las respuestas casi nunca cambian. El chatbot las resuelve al toque.

### Turnos y reservas

Si trabajás con turnos, el chatbot puede mostrar disponibilidad, tomar la reserva, confirmarla y mandar un recordatorio automático 24 horas antes. Menos ausencias, menos ida y vuelta, menos turnos pisados.

### Calificación de consultas

No todas las consultas valen lo mismo. El chatbot puede hacer las primeras preguntas ("¿qué servicio buscás?", "¿para cuándo?") y pasarte solo las conversaciones que realmente necesitan tu atención, ya con contexto. Vos dejás de perder tiempo en curiosos y te enfocás en los que compran.

### Seguimiento post-venta

Un mensaje automático a los días de la compra, una encuesta de satisfacción, un recordatorio para volver. Todo eso mantiene el vínculo sin que vos tengas que acordarte de cada cliente.

---

## Lo que NO hay que hacer

Hay un error que arruina cualquier automatización: **automatizar sin supervisión ni derivación**.

Un chatbot que responde mal, que no entiende y repite lo mismo en loop, o que nunca te pasa a un humano cuando hace falta, genera más bronca que no tener chatbot. La clave es un modelo híbrido: la IA atiende lo rutinario y deriva a una persona en cuanto la consulta se complica o el cliente lo pide.

Otro error: prometer lo que el bot no puede cumplir. Si el chatbot dice "un asesor te contacta en 5 minutos" a las 11 de la noche, mejor que sea verdad. Sé honesto con los horarios y las expectativas.

---

## Más allá del chatbot: automatizar tareas internas

El chatbot es la punta del iceberg. Con las mismas herramientas de automatización e IA se pueden resolver tareas internas que hoy hacés a mano:

- **Cargar datos de un lado a otro**: que un pedido de WhatsApp se anote solo en tu planilla o sistema
- **Generar respuestas y presupuestos**: borradores automáticos que después revisás y mandás
- **Avisos automáticos**: que te llegue una alerta cuando pasa algo importante (un pago, un stock bajo, una reseña nueva)
- **Reportes**: un resumen automático de cómo vino la semana, sin que armes la planilla

Si querés ir un paso más allá, los [agentes de IA para pymes](/blog/agentes-de-ia-para-pymes-como-implementarlos) no solo responden: ejecutan tareas de punta a punta. Y para saber si vale la pena, te dejamos cómo [medir el ROI de una automatización](/blog/como-medir-el-roi-de-una-automatizacion). Mirá también qué hacemos en [automatizaciones con IA](/automatizaciones).

---

## Cómo empezar

### 1. Anotá tus preguntas frecuentes

Durante una semana, prestá atención a qué te preguntan por WhatsApp. Vas a ver que se repiten muchísimo. Esa lista es la base de tu chatbot.

### 2. Definí qué resuelve el bot y qué pasás a un humano

Decidí el límite claro: hasta acá contesta la IA, de acá en adelante interviene una persona. Esa frontera bien definida es lo que hace que funcione.

### 3. Empezá simple y mejorá con el uso

No busques el chatbot perfecto de entrada. Lanzá uno que resuelva las 5 preguntas más comunes, mirá qué consultas no supo responder, y andá agregando. En pocas semanas cubrís la enorme mayoría.

---

## Conclusión

Automatizar la atención de tu pyme no es reemplazarte con un robot: es sacarte de encima lo repetitivo para que uses tu tiempo en lo que sí importa. Un chatbot de WhatsApp con IA bien configurado te contesta las consultas al instante, no pierde clientes por demora, y trabaja mientras dormís.

Lo importante es empezar por lo que más se repite, mantener siempre la opción de hablar con una persona, e ir mejorando con el uso.

En Nimbo armamos automatizaciones y chatbots de WhatsApp a medida para pymes argentinas. Si tenés una distribuidora, mirá cómo funciona nuestro [agente de WhatsApp para distribuidoras](/wsp). Y si querés ver qué se podría automatizar en tu caso, **[pedí tu diagnóstico](/diagnostico)** o **[escribinos por WhatsApp](https://wa.me/5491124036836)** y lo analizamos juntos.
    `.trim(),
  },
  {
    slug: 'como-escribir-prompts-chatgpt',
    title: 'Cómo escribir buenas prompts para ChatGPT: guía práctica con ejemplos',
    description:
      'La diferencia entre una respuesta mediocre y una excelente de ChatGPT está en cómo pedís. Aprendé a escribir prompts efectivos con una fórmula simple y ejemplos reales.',
    date: '2026-07-01',
    category: 'Inteligencia Artificial',
    readTime: '6 min',
    content: `
## Por qué la mayoría le saca poco jugo a ChatGPT

Casi todos probaron ChatGPT alguna vez. La mayoría le pidió algo genérico, recibió una respuesta genérica, y concluyó que "está bueno pero tampoco es para tanto".

El problema casi nunca es la herramienta. Es el prompt: cómo le pedís las cosas. La diferencia entre una respuesta mediocre y una que te ahorra una hora de trabajo está enteramente en cómo formulás el pedido.

La buena noticia: escribir buenas prompts no es un arte místico. Es una habilidad que se aprende con una fórmula simple y un poco de práctica.

---

## La fórmula de una buena prompt

Una prompt efectiva casi siempre tiene cuatro ingredientes. No hacen falta todos siempre, pero cuantos más incluyas, mejor el resultado:

:::flow
{ "title": "Los 4 ingredientes de una buena prompt", "steps": [
  { "title": "Rol — quién querés que sea", "text": "Decile desde qué perspectiva responder. \"Actuá como un contador especializado en monotributo\" enfoca el conocimiento." },
  { "title": "Tarea — qué querés que haga", "text": "Sé específico. No \"escribime algo de marketing\", sino \"3 ideas de posts de Instagram para una panadería sin TACC\"." },
  { "title": "Contexto — la información que necesita", "text": "No sabe nada de tu situación salvo lo que le cuentes: a quién le hablás, qué tono usás, qué querés evitar." },
  { "title": "Formato — cómo querés el resultado", "text": "¿Lista, tabla, 100 palabras, tono formal? Pedilo explícito y te ahorrás reformatear después." }
] }
:::

---

## Ejemplos: de una prompt floja a una buena

Mirá la diferencia lado a lado. La columna de la derecha aplica los cuatro ingredientes de arriba:

| Objetivo | Prompt floja | Prompt buena |
| --- | --- | --- |
| Redactar un texto | "Escribí una descripción para mi producto." | "Actuá como redactor publicitario. Descripción de 60 palabras para una vela de lavanda artesanal, tono cálido, para quien busca relajarse en casa. Cerrá invitando a comprar." |
| Resolver un problema | "¿Cómo consigo más clientes?" | "Peluquería en Buenos Aires con poco movimiento entre semana. Actuá como consultor de marketing y dame 5 acciones baratas para llenar turnos de martes a jueves, de más fácil a más difícil." |
| Procesar información | "Resumime esto." | "Resumí en 5 puntos clave, en lenguaje simple para alguien que no conoce el tema, y agregá una línea de conclusión. Texto: [lo pegás acá]" |

La columna izquierda te da respuestas genéricas que podrían ser de cualquiera. La derecha te da algo casi listo para usar.

---

## Trucos que mejoran cualquier prompt

- **Pedí que te haga preguntas primero.** "Antes de responder, haceme las preguntas que necesites para darme la mejor respuesta." Esto solo mejora muchísimo el resultado.
- **Iterá.** La primera respuesta rara vez es la final. "Está bien, pero hacelo más corto y más informal" es parte del proceso, no un fracaso.
- **Dale ejemplos.** Si querés que copie un estilo, mostráselo: "escribí en este tono: [ejemplo]".
- **Pedí varias opciones.** "Dame 3 versiones diferentes" te da de dónde elegir en vez de una sola apuesta.

---

## Errores comunes

- **Ser vago:** cuanto más general el pedido, más genérica la respuesta.
- **Asumir que sabe tu contexto:** no sabe nada de tu negocio, tu cliente ni tu historia salvo lo que le cuentes.
- **Rendirte en el primer intento:** la magia está en la segunda y tercera vuelta.
- **No revisar:** la IA se equivoca y a veces inventa datos con total seguridad. Siempre revisá antes de usar, sobre todo números y hechos.

---

## De la prompt a la automatización

Aprender a escribir buenas prompts es el primer paso. El siguiente, para un negocio, es dejar de escribir la misma prompt una y otra vez: convertir esos pedidos que repetís en automatizaciones que corren solas.

Por ejemplo, en vez de pedirle a ChatGPT que redacte cada respuesta a una reseña, se puede armar un sistema que las genere automáticamente con tu tono. Ahí es donde la IA pasa de ser un juguete útil a una herramienta que le ahorra horas a tu negocio.

En Nimbo ayudamos a pymes argentinas a llevar la IA de "probé ChatGPT" a "tengo procesos que funcionan solos". Si te da curiosidad qué se podría automatizar en tu negocio, **[escribinos por WhatsApp](https://wa.me/5491124036836)** y lo vemos juntos.
    `.trim(),
  },
  {
    slug: 'por-que-tu-negocio-necesita-una-pagina-web',
    title: '¿Por qué tu negocio necesita una página web profesional en 2026?',
    description:
      'Tener solo Instagram ya no alcanza. Te explicamos por qué una página web propia es la base de cualquier negocio que quiera crecer en serio.',
    date: '2026-06-10',
    updated: '2026-10-25',
    category: 'Diseño Web',
    readTime: '5 min',
    content: `
## El problema con "solo tengo Instagram"

En Argentina, miles de negocios arrancaron su presencia digital abriendo un perfil en Instagram. Funciona para empezar, pero tiene un techo muy bajo. Cuando un cliente potencial te busca en Google y no encuentra nada, o peor, encuentra un perfil con 200 seguidores y el último post de hace tres meses, la duda aparece sola: *¿este negocio sigue abierto? ¿Es confiable?*

Una página web profesional no es un lujo. En 2026, es la diferencia entre existir en el mercado digital y ser invisible.

---

## Lo que Google ve cuando no tenés web

Google indexa texto, estructura y datos. Las redes sociales bloquean en gran parte el acceso de los bots de búsqueda. Eso significa que aunque tengas miles de seguidores en Instagram, prácticamente todo ese contenido no existe para Google.

Cuando alguien busca "diseño de interiores en Palermo" o "contador público en Córdoba", Google muestra resultados de páginas web, no de perfiles de Instagram. Si no tenés un sitio propio con esas palabras clave, simplemente no aparecés.

La enorme mayoría de los usuarios casi nunca pasa de la primera página de resultados. Si no estás ahí, prácticamente no existís para ese cliente.

---

## 5 razones concretas para tener web en 2026

### 1. Credibilidad que se siente antes de hablar

Antes de contactarte, tu cliente futuro te googlea. Una web bien hecha comunica en segundos que sos serio, que tenés experiencia, y que sabés lo que hacés. Una web descuidada o inexistente genera el efecto contrario.

### 2. Aparecés cuando te buscan activamente

La diferencia entre Instagram y Google es la intención. En Instagram la gente está explorando. En Google está **buscando activamente** lo que ofrecés. Ese tráfico convierte mucho mejor porque ya tiene intención de compra.

### 3. No dependés de los algoritmos de nadie

Las redes sociales cambian sus algoritmos constantemente. Lo que funcionaba en 2023 ya no funciona hoy. Con una página web propia, el tráfico orgánico que construiste es tuyo. Nadie te lo puede quitar de un día para el otro.

### 4. Tu web trabaja las 24 horas

Un formulario de contacto bien armado, una sección de preguntas frecuentes, una descripción clara de tus servicios y tus precios: todo eso responde las dudas de tu cliente a las 3 de la mañana, cuando vos estás durmiendo. Tu Instagram no hace eso.

### 5. Medís todo lo que pasa

Con herramientas como Google Analytics sabés exactamente quién entra a tu web, desde dónde, cuánto tiempo se queda y qué hace. Esa información vale oro para tomar decisiones de negocio. Las redes sociales te dan datos muy limitados y sesgados.

---

## ¿Cuánto pierden los negocios sin web?

Los negocios con una web propia y bien posicionada captan consultas que, sin ella, se van directo a la competencia: cuando alguien busca en Google lo que ofrecés y no aparecés, ese cliente termina escribiéndole a otro. En rubros donde la gente busca activamente en Google —gastronomía, salud, educación, servicios profesionales— esa diferencia es enorme.

Cada mes sin web es tráfico que se va a la competencia.

---

## El error más común: "Después lo hago"

Hablar con dueños de negocios en Argentina, el "después lo hago" suele convertirse en dos o tres años. Mientras tanto, un competidor que sí apostó por su presencia digital ya tiene posicionamiento en Google, reseñas acumuladas y clientes que llegaron orgánicamente.

El SEO —el posicionamiento en buscadores— no es instantáneo. Requiere tiempo. Cada mes que pasás sin web es un mes que tu competencia se lleva ventaja.

---

## ¿Qué tiene que tener una web que funcione?

No alcanza con tener cualquier web. Hay características básicas que hacen la diferencia:

- **Carga rápida en celular**: la mayor parte del tráfico web en Argentina viene de dispositivos móviles
- **Diseño profesional y coherente con tu marca**
- **Contenido claro**: quién sos, qué ofrecés, cómo contactarte
- **SEO básico**: título de página, descripción, palabras clave relevantes
- **Formulario o botón de contacto visible**
- **Certificado de seguridad (HTTPS)**: Google penaliza los sitios sin SSL

---

## Desarrollo web para pymes desde Buenos Aires

En Nimbo diseñamos y desarrollamos páginas web para pymes, además de aplicaciones internas, portales y sistemas de gestión cuando el negocio necesita algo a medida. Trabajamos desde Buenos Aires de forma remota con empresas de todo el país.

Una web para una pyme tiene que explicar con claridad qué ofrece, funcionar bien desde el celular, cargar rápido y facilitar el contacto. Podés conocer el enfoque de **[desarrollo web y software a medida de Nimbo](/desarrollo-web-pymes)** o **[contarnos tu proyecto](/contacto)** para revisar qué tipo de solución necesitás.

---

## Conclusión

Si estás leyendo esto y todavía no tenés web, el mejor momento para empezar era el año pasado. El segundo mejor momento es hoy.

Una página web profesional no es un gasto: es una inversión que trabaja por tu negocio todos los días, que te da visibilidad donde tus clientes te buscan activamente, y que construye credibilidad que ningún perfil de Instagram puede igualar.

En Nimbo diseñamos páginas web para negocios argentinos que quieren crecer en serio. Si querés saber cómo podemos ayudarte, **[escribinos por WhatsApp](https://wa.me/5491124036836)** y charlamos sin compromiso.
    `.trim(),
  },
  {
    slug: 'ia-para-pymes-argentinas-guia-2026',
    title: 'IA para pymes argentinas: cómo automatizar tu negocio sin gastar una fortuna',
    description:
      'El 41,6% de las pymes argentinas ya usa IA, y la mayoría empezó en el último año. Te mostramos qué herramientas existen, cuáles sirven de verdad para pymes, y cómo empezar sin riesgos.',
    date: '2026-06-17',
    updated: '2026-10-27',
    category: 'Automatización & IA',
    readTime: '7 min',
    content: `
## Ya no es ciencia ficción

Hace tres años, hablar de inteligencia artificial para una pyme argentina sonaba a algo lejano, caro o directamente innecesario. Hoy la foto es completamente distinta: el 41,6% de las pymes argentinas ya usa alguna herramienta de IA —y más del 85% empezó entre 2024 y 2025—, y el costo de implementar un sistema básico bajó drásticamente.

En 2026, una PyME puede tener un sistema de IA funcional por menos de 100 dólares mensuales. Lo que antes requería un equipo de tecnología, hoy se puede configurar en días.

Pero hay una brecha enorme entre "implementar IA de verdad" y "usar ChatGPT para escribir emails". En este artículo te mostramos qué es lo que realmente funciona para negocios chicos y medianos en Argentina.

Si necesitás entender cómo un sistema interpreta pedidos, consulta información y ejecuta tareas, leé la guía sobre **[agentes de IA para pymes](/blog/agentes-de-ia-para-pymes-como-implementarlos)**. Para conocer cómo Nimbo lleva esos casos a producción, visitá **[automatización con IA para pymes en Argentina](/automatizaciones)**.

---

## ¿Qué tareas conviene automatizar primero?

La clave es no automatizar todo de golpe. Los mejores resultados vienen de identificar las tareas que más tiempo consumen y menor valor agregado tienen. Estas son las más comunes:

### Atención al cliente básica

La gran mayoría de las preguntas que recibe un negocio son siempre las mismas: horarios, precios, disponibilidad, formas de pago. Un chatbot bien configurado puede responder todo eso al instante, las 24 horas, sin que vos tengas que estar.

**Herramientas útiles**: WhatsApp Business API + ManyChat, Tidio, o un chatbot custom con IA.

**Ahorro típico**: varias horas por día en atención de consultas repetitivas.

### Gestión de turnos y reservas

Si trabajás con turnos —ya sea un consultorio, una peluquería, un servicio de limpieza— la coordinación manual por WhatsApp es un caos que se puede eliminar casi por completo. Sistemas como Calendly, Reservio o soluciones custom permiten que el cliente agenda solo, recibe recordatorio automático y vos te enterás de todo sin intervenir.

**Resultado**: menos no-shows, menos tiempo al teléfono, menos errores de doble reserva.

### Seguimiento post-venta

¿Cuántos clientes te compraron una vez y nunca más supiste de ellos? La automatización de emails o mensajes post-venta te permite mantener el contacto sin esfuerzo: un mensaje de seguimiento a los 7 días, una encuesta de satisfacción, una oferta para clientes que no compraron en 60 días.

**Herramientas**: ActiveCampaign, Brevo (antes Sendinblue), o integraciones con WhatsApp.

### Generación de contenido asistida

La IA no reemplaza tu voz ni tu criterio, pero puede acelerar enormemente la creación de contenido. Borradores de posts, respuestas a reseñas de Google, descripciones de productos, presupuestos tipo. Lo que antes llevaba 2 horas puede hacerse en 20 minutos.

---

## Lo que NO hay que hacer

Hay un error frecuente que cometen muchos negocios cuando empiezan con IA: **automatizar sin supervisión**.

Un chatbot que responde mal daña más que no tener chatbot. Una automatización de emails que manda mensajes en momentos inapropiados genera rechazo. La IA es una herramienta, no un piloto automático que podés olvidar.

Lo que funciona es un modelo híbrido: la IA atiende lo rutinario, y vos intervenís en lo que requiere juicio o relación.

---

## Ejemplos de lo que se puede automatizar

Para que quede concreto, algunos escenarios típicos según el rubro:

**Consultorio o profesional de la salud**: un sistema de turnos por WhatsApp con recordatorio automático 24 hs antes reduce mucho los ausentes, porque el paciente confirma o reprograma con un solo mensaje.

**Tienda de indumentaria**: respuestas automáticas a las preguntas más frecuentes (talles, colores, tiempos de envío) le sacan al dueño buena parte del tiempo que pasa contestando Instagram, para dedicarlo a las consultas que sí requieren atención personalizada.

**Estudio contable**: automatizar el seguimiento de documentación pendiente —un recordatorio automático cuando un documento está por vencer o falta información— evita tener que perseguir a cada cliente por teléfono.

---

## Por dónde empezar (sin volverse loco)

### Paso 1: Auditá tu tiempo

Durante una semana, registrá cuánto tiempo dedicás a cada tipo de tarea. Las que más se repiten y menos requieren tu criterio son las candidatas perfectas para automatizar.

### Paso 2: Elegí una sola cosa

No intentes automatizar todo a la vez. Elegí una tarea, implementá bien la solución, medí el resultado, y recién después pasás a la siguiente.

### Paso 3: Medí el impacto

Tiempo ahorrado, consultas respondidas fuera de horario, turnos que se agendaron solos. Sin datos no sabés si funcionó.

### Paso 4: Escalá lo que funciona

Una vez que tenés una automatización que funciona bien, es mucho más fácil replicar el proceso en otras áreas.

---

## ¿Cuánto cuesta implementar IA en una pyme?

El rango es muy amplio dependiendo de la solución:

- **Chatbot básico con respuestas predefinidas**: $0 a $50/mes (herramientas como ManyChat o Tidio tienen planes gratuitos)
- **Chatbot con IA real (GPT-4)**: $50 a $150/mes
- **Automatización de turnos**: $20 a $80/mes (Calendly, Reservio)
- **Automatización de email marketing**: $30 a $100/mes (Brevo, ActiveCampaign)
- **Solución custom integrada**: desde $500 de inversión inicial + mantenimiento mensual

Para la mayoría de las pymes, arrancar con herramientas existentes bien configuradas es más que suficiente. El desarrollo custom tiene sentido cuando tenés procesos específicos que ninguna herramienta estándar cubre.

---

## Conclusión

La IA no es el futuro. Es el presente. Y en Argentina, las pymes que están aprovechando estas herramientas ya tienen una ventaja concreta sobre las que siguen haciendo todo a mano.

Lo importante no es implementar la tecnología más sofisticada. Es identificar dónde perdés tiempo todos los días y resolver eso primero.

En Nimbo diseñamos automatizaciones y agentes de IA para pymes argentinas. Podés conocer **[qué implementamos y cómo trabajamos](/automatizaciones)** o **[pedir un diagnóstico](/diagnostico)** para revisar qué proceso conviene resolver primero.
    `.trim(),
  },
  {
    slug: 'seo-local-argentina-como-aparecer-en-google',
    title: 'SEO local en Argentina: cómo aparecer en Google cuando te buscan cerca',
    description:
      'Las búsquedas locales vienen creciendo fuerte en Argentina. Si tenés un negocio con presencia física o trabajás por zona, esta guía es para vos.',
    date: '2026-06-23',
    category: 'SEO',
    readTime: '6 min',
    content: `
## "Plomero en Flores", "dentista cerca mío", "pizzería en Palermo"

Esas son búsquedas reales que miles de argentinos hacen todos los días. Las búsquedas locales —las que incluyen una ciudad, un barrio, o la frase "cerca mío"— vienen creciendo año a año en Argentina.

Hay un motivo: la gente ya confía en Google para encontrar proveedores locales antes de preguntarle a conocidos. Si tu negocio tiene presencia física o trabajás por zona, aparecer en esas búsquedas puede ser la diferencia entre tener agenda llena o depender del boca en boca.

Esta guía es práctica. Sin tecnicismos innecesarios.

---

## Qué es el SEO local y por qué importa

SEO local es el conjunto de acciones que hacés para que tu negocio aparezca en los resultados de Google cuando alguien busca algo relacionado con lo que ofrecés **en tu zona**.

Google muestra tres tipos de resultados para búsquedas locales:

1. **El "Pack de 3"**: el bloque de mapa con tres negocios destacados que aparece arriba de los resultados orgánicos. Es el lugar más valioso que podés ocupar.
2. **Resultados orgánicos locales**: páginas web que Google considera relevantes para esa búsqueda y zona.
3. **Google Maps**: las búsquedas directas dentro de la aplicación.

Para aparecer en los dos primeros, necesitás combinar dos cosas: un **perfil de Google Business bien optimizado** y una **página web con contenido local relevante**.

---

## Paso 1: Reclamá y optimizá tu Google Business Profile

Si todavía no tenés tu negocio registrado en Google Business (antes llamado Google My Business), esto es lo primero que tenés que hacer hoy.

**Cómo empezar**: buscá tu negocio en Google Maps. Si ya existe un perfil sin reclamar, pedí la verificación. Si no existe, crealo en [business.google.com](https://business.google.com).

**Qué completar sí o sí**:
- Nombre exacto del negocio (igual a como figura en tu web)
- Categoría principal (elegila con cuidado, es la más importante)
- Dirección completa o zona de cobertura si trabajás sin local fijo
- Teléfono y sitio web
- Horarios actualizados
- Descripción de 750 caracteres bien redactada con tus palabras clave

**Qué más suma**:
- Fotos reales del local, del equipo, de tu trabajo (mínimo 10)
- Responder todas las reseñas —las positivas y las negativas—
- Publicar actualizaciones periódicas (ofertas, novedades, cambios de horario)

Google premia los perfiles activos. Un perfil abandonado ranquea mucho peor que uno actualizado regularmente.

---

## Paso 2: Las reseñas son la moneda del SEO local

Las reseñas de Google son uno de los factores de ranking local más importantes. Y hay algo que pocas pymes aprovechan: **pedir reseñas activamente**.

La mayoría de los clientes satisfechos están dispuestos a dejar una reseña si se lo pedís. El problema es que no lo hacen solos porque no recuerdan, no saben cómo, o simplemente no les resulta urgente.

**Estrategia simple que funciona**:
1. Cuando terminás un trabajo o servicio, mandá un mensaje de seguimiento por WhatsApp
2. Incluí el link directo a tu perfil de Google para dejar reseña (podés generarlo en Google Business)
3. Agradecé siempre las reseñas que te dejan, con una respuesta personalizada

Una pyme con 50 reseñas de 4.8 estrellas le gana a una con 5 reseñas de 5 estrellas. La cantidad y la regularidad importan tanto como el puntaje.

---

## Paso 3: Tu página web tiene que hablar de dónde estás

Este es el error más común: tener una web que describe perfectamente qué hacés, pero nunca menciona dónde lo hacés.

Google necesita entender tu ubicación geográfica para mostrarte en búsquedas locales. Algunas acciones concretas:

**En el texto de tu web**:
- Mencioná tu ciudad, barrio o zona de cobertura de forma natural en los títulos y párrafos
- Ejemplo: "Diseño web para pymes en Buenos Aires" en vez de solo "Diseño web"
- Si trabajás en múltiples zonas, creá una sección o página para cada una

**En el title de tu página**:
- Malo: "Plomería profesional"
- Bueno: "Plomería en Caballito y Flores | Reparaciones 24hs"

**En el footer**:
- Dirección completa o zona de cobertura
- Teléfono con código de área argentino
- Horarios de atención

**Schema markup** (dato estructurado):
Es un código que le dice a Google exactamente que sos un negocio local, cuál es tu dirección, teléfono y horario. No lo ve el usuario, pero Google lo lee. Si tu web está en React o cualquier otro framework, se agrega una vez y funciona solo.

---

## Paso 4: Consistencia de datos en toda la web

Google verifica que tu nombre, dirección y teléfono sean **idénticos** en todas partes donde aparece tu negocio: tu web, tu Google Business, directorios como Páginas Amarillas, Yelp, o cualquier otro sitio donde hayas registrado tu negocio.

Si en tu web dice "Av. Corrientes 1234" y en Google Business dice "Corrientes 1234" (sin el "Av."), eso genera confusión para Google y baja tu ranking.

Revisá todos los lugares donde aparece tu negocio y asegurate de que los datos sean siempre exactamente iguales.

---

## Paso 5: Contenido local en tu blog o noticias

Acá es donde pocas pymes llegan, y donde está la mayor oportunidad.

Crear contenido que responda preguntas que hacen los clientes de tu zona te da dos ventajas: aparecer en búsquedas informacionales (como ésta que estás leyendo ahora) y aumentar la relevancia local de tu web.

**Ideas de contenido según rubro**:
- Contador: "Cuándo vence el monotributo en Argentina en 2026"
- Dentista en Belgrano: "¿Cuánto cuesta una ortodoncia en Buenos Aires?"
- Empresa de mudanzas: "Cómo presupuestar una mudanza en CABA"
- Diseñador web: "¿Cuánto cuesta una página web profesional en Argentina?"

No necesitás publicar todos los días. Un artículo útil por mes, bien escrito y enfocado en preguntas reales, ya es más de lo que hace la mayoría de tus competidores.

---

## Resultados realistas: ¿cuánto tiempo lleva?

El SEO local no es instantáneo, pero tampoco tarda años como el SEO nacional.

- **Google Business optimizado**: resultados en 4 a 8 semanas
- **Acumulación de reseñas**: resultados a partir de 10-15 reseñas genuinas
- **Posicionamiento web local**: 3 a 6 meses para búsquedas de baja competencia

Lo importante es empezar ahora. Cada mes que pasa es un mes que tu competencia toma ventaja.

---

## Conclusión

El SEO local es una de las estrategias de marketing digital con mejor relación costo-beneficio para negocios argentinos. No requiere una inversión enorme, pero sí requiere hacerlo bien y de forma consistente.

Los tres pilares son simples: Google Business optimizado, reseñas activas, y una web que hable de quién sos y dónde estás.

En Nimbo ayudamos a negocios argentinos a aparecer donde sus clientes los buscan. Si querés que analicemos la presencia digital de tu negocio, **[escribinos por WhatsApp](https://wa.me/5491124036836)** y te contamos qué podríamos mejorar.
    `.trim(),
  },
]

export function getPost(slug) {
  return posts.find((p) => p.slug === slug) ?? null
}
