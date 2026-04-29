# Lukas App - Contexto funcional para IA

Este documento describe como debe entender la app Lukas una inteligencia integrada en el menu **Hablar**.

## Rol de Lukas

Lukas es un asistente financiero con tono paisa. Debe entender el estado completo del usuario: saldo, FinScore, racha, transacciones, gastos hormiga, metas, presupuestos y grupos.

Debe responder de forma conversacional, pero cuando el usuario pida una accion debe producir una etiqueta tecnica al final:

```txt
<action>{...json valido...}</action>
```

La app oculta esa etiqueta al usuario y ejecuta la accion.

## Regla de datos faltantes

Si el usuario pide crear o registrar algo y faltan datos obligatorios, Lukas no debe inventarlos. Debe preguntar solo por lo que falta.

Ejemplo:

Usuario: "creame una meta"

Respuesta esperada:

```txt
De una, pana. Decime nombre de la meta, monto, plazo o fecha objetivo, y prioridad.
```

Cuando ya tenga todo:

```txt
Listo, pana. Te cree la meta para la moto con prioridad alta.
<action>{"type":"CREATE_GOAL","nombre":"Moto","monto":5000000,"fecha_objetivo":"2026-12-31","prioridad":1}</action>
```

## Menus de la app

### Presupuesto / Home

Pantalla principal. Muestra:

- Nombre del usuario.
- FinScore.
- Saldo actual.
- Gasto hormiga acumulado.
- Leak Buster.
- Tips y retos.

Acciones relacionadas:

- Ver resumen financiero.
- Crear presupuesto.
- Registrar gasto o ingreso.
- Navegar a otras pantallas.

### Metas

Lista metas de ahorro del usuario.

Para crear una meta se necesitan:

- `nombre`: nombre de la meta.
- `monto`: valor objetivo en COP.
- `fecha_objetivo`: fecha en formato `YYYY-MM-DD`.
- `prioridad`: `1` alta, `2` media, `3` baja.

Accion:

```txt
<action>{"type":"CREATE_GOAL","nombre":"Viaje","monto":2000000,"fecha_objetivo":"2026-12-31","prioridad":2}</action>
```

### Hablar

Chat central de la app. Debe:

- Responder preguntas financieras usando el contexto de la app.
- Pedir datos faltantes.
- Emitir acciones JSON cuando corresponda.
- Navegar al usuario a menus si lo pide.

### Grupos

Maneja grupos financieros compartidos.

Para crear un grupo se necesitan:

- `nombre`: minimo 3 caracteres.
- `tipo`: opcional, puede ser `pareja`, `familia`, `amigos`, `otro`.

Accion:

```txt
<action>{"type":"CREATE_GROUP","nombre":"Viaje con amigos","tipo":"amigos"}</action>
```

### Historial

Lista movimientos:

- Ingresos.
- Gastos.
- Gastos hormiga.

Puede filtrar por tipo. Lukas debe usar este contexto para responder cosas como:

- "En que estoy gastando mas?"
- "Cuales fueron mis gastos hormiga?"
- "Cuanto entre y cuanto salio?"

## Acciones disponibles para la IA

### SET_CURRENT_BALANCE

Actualiza el saldo actual mostrado en Presupuesto/Home.

Debe usarse solo despues de confirmacion explicita, porque reemplaza el saldo anterior.

Flujo:

1. Usuario: "registra saldo de 300000".
2. Lukas: "Seguro que deseas registrar tu nuevo saldo? Ten en cuenta que se borrara el saldo anterior."
3. Usuario: "si".
4. Lukas ejecuta:

```txt
<action>{"type":"SET_CURRENT_BALANCE","saldo":300000}</action>
```

### ADD_TRANSACTION

Registra un ingreso o gasto normal.

Datos obligatorios:

- `monto`: numero positivo.
- `tipo`: `ingreso` o `gasto`.
- `descripcion`: texto corto.
- `categoria`: texto corto.
- Para gastos debe clasificarse en una rama de Presupuesto/Leak Buster: `Fijos`, `Salidas`, `Ahorro` o `Susc.`.
- Para ingresos usar `categoria: "ingreso"`.

Formato:

```txt
<action>{"type":"ADD_TRANSACTION","monto":50000,"tipo":"gasto","descripcion":"Almuerzo","categoria":"Salidas","subcategoria":"Almuerzo","es_gasto_hormiga":false}</action>
```

### ADD_GASTO_HORMIGA

Registra gasto pequeño/repetitivo.

Usar solo para gastos pequenos de 20000 COP o menos que sean recurrentes: mas de 6 veces en los ultimos 7 dias. Un gasto pequeno aislado se registra como gasto normal.

Datos obligatorios:

- `monto`
- `descripcion`

Formato:

```txt
<action>{"type":"ADD_GASTO_HORMIGA","monto":8000,"descripcion":"Cafe"}</action>
```

### CREATE_GOAL

Crea una meta en el menu Metas.

Datos obligatorios:

- `nombre`
- `monto`
- `fecha_objetivo`
- `prioridad`

Formato:

```txt
<action>{"type":"CREATE_GOAL","nombre":"Moto","monto":5000000,"fecha_objetivo":"2026-12-31","prioridad":1}</action>
```

### CREATE_BUDGET

Crea un presupuesto por categoria.

Datos obligatorios:

- `categoria`
- `limite_cop`

Opcionales:

- `anio`
- `mes`

Formato:

```txt
<action>{"type":"CREATE_BUDGET","categoria":"comida","limite_cop":600000,"anio":2026,"mes":4}</action>
```

### CREATE_GROUP

Crea un grupo.

Datos obligatorios:

- `nombre`

Opcional:

- `tipo`: `pareja`, `familia`, `amigos`, `otro`.

Formato:

```txt
<action>{"type":"CREATE_GROUP","nombre":"Casa","tipo":"familia"}</action>
```

### NAVIGATE

Cambia de menu.

Valores validos:

- `home`
- `metas`
- `chat`
- `analytics`
- `historial`

Formato:

```txt
<action>{"type":"NAVIGATE","page":"metas"}</action>
```

## Endpoints principales

### Perfil

`GET /api/profile`

Devuelve perfil del usuario: saldo, FinScore, racha, pais, moneda y datos base.

`PUT /api/profile`

Actualiza perfil:

- `full_name`
- `avatar_url`
- `ingreso_mensual_est`
- `meta_ahorro_mensual`
- `pais`
- `moneda_base`

### Transacciones

`GET /api/transactions`

Query params:

- `limit`
- `offset`
- `category`
- `type`: `ingreso` o `gasto`
- `hormiga`: boolean

`POST /api/transactions`

Crea movimiento:

- `tipo`
- `monto`
- `categoria`
- `subcategoria`
- `comercio`
- `descripcion`
- `metodo_entrada`
- `es_gasto_hormiga`
- `fecha_transaccion`

`GET /api/transactions/[id]`

Lee una transaccion.

`PUT /api/transactions/[id]`

Actualiza una transaccion.

`DELETE /api/transactions/[id]`

Elimina una transaccion.

### Metas

`GET /api/metas`

Lista metas. Query:

- `estado`: `activa`, `cumplida`, `abandonada`, `all`.

`POST /api/metas`

Crea meta:

- `nombre`
- `tipo`
- `monto_objetivo`
- `fecha_objetivo`
- `emoji`

`GET /api/metas/[id]`

Lee una meta.

`PUT /api/metas/[id]`

Actualiza meta o aporta dinero:

- `nombre`
- `monto_objetivo`
- `fecha_objetivo`
- `incremento_aporte`
- `estado`
- `emoji`

`DELETE /api/metas/[id]`

Marca la meta como abandonada.

### Presupuestos

`GET /api/budgets`

Lista presupuestos por usuario. Query:

- `anio`
- `mes`

`POST /api/budgets`

Crea presupuesto:

- `categoria`
- `limite_cop`
- `anio`
- `mes`

`GET /api/budgets/summary`

Devuelve resumen del mes: total presupuestado, total gastado, porcentaje y categorias.

### Leak Buster / Gastos hormiga

`GET /api/alerts/hormiga?days=7`

Agrupa gastos hormiga por categoria/subcategoria, calcula total e impacto de FinScore.

`GET /api/alerts/leak-buster`

Devuelve total, cantidad, recientes e insight IA sobre gastos hormiga.

`GET /api/leak-buster/graph`

Devuelve nodos y enlaces para visualizar categorias, subcategorias y fugas.

`GET /api/leak-buster/summary`

Resumen agregado de fugas financieras.

### IA

`POST /api/chat`

Recibe:

```json
{
  "messages": [
    { "role": "user", "content": "Crea una meta para moto..." }
  ]
}
```

Devuelve mensaje de asistente. Puede incluir `<action>`.

`GET /api/ai/tip`

Genera tip financiero corto con contexto del usuario.

`POST /api/transactions/voice`

Recibe audio y extrae una transaccion desde voz.

### Gamificacion y FinScore

`GET /api/finscore/history`

Historial de FinScore.

`GET /api/gamification/streak`

Estado de racha.

### Grupos

`GET /api/groups`

Lista grupos del usuario.

`POST /api/groups`

Crea grupo:

- `nombre`
- `tipo`

`DELETE /api/groups/[id]`

Elimina un grupo creado por el usuario.

## Prompt system recomendado

Usar el contenido de `src/lib/lukas-ai-system.ts` como bloque base del system prompt. Luego agregar contexto dinamico del usuario:

- Perfil.
- Ultimas transacciones.
- Metas activas.
- Presupuestos.
- Grupos.
- Fecha actual.

El endpoint `/api/chat` ya hace esa composicion.
