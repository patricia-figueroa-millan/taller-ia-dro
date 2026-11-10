# Módulo 2. Ingeniería de prompts

**Ingeniería de prompts aplicada a la Arquitectura y a la práctica profesional del DRO**

**Duración:** 20 minutos  
**Modalidad:** Demostrativa-participativa  
**Dirigido a:** Arquitectos y Directores Responsables de Obra (DRO)

## 1. Propósito del módulo

La inteligencia artificial generativa y multimodal puede apoyar distintas actividades profesionales de la arquitectura y la supervisión de obra. Sin embargo, la utilidad de sus resultados depende, entre otros factores, de cómo se define la tarea, qué información se proporciona y qué restricciones se establecen.

En este módulo aprenderemos a construir instrucciones profesionales mediante dos experiencias:

| Experiencia | Aplicación | Producto esperado |
|---|---|---|
| **A. Arquitectura** | Renovación estética de una edificación existente | Propuesta visual conceptual |
| **B. DRO** | Preparación de una visita de supervisión | Lista preliminar de verificación |

### Resultado de aprendizaje

Al finalizar, el participante podrá estructurar un prompt profesional mediante ocho componentes, aplicarlo a una tarea de arquitectura o supervisión de obra y evaluar críticamente su resultado.

### ¿Dónde está el valor agregado?

| Pregunta | Arquitectura | DRO |
|---|---|---|
| ¿Qué problema resuelve? | Explorar alternativas de renovación | Preparar una visita de supervisión |
| ¿Qué trabajo facilita? | Visualización y comparación de alternativas | Organización de información técnica |
| ¿Qué producto genera? | Propuesta visual conceptual | Lista preliminar de verificación |
| ¿Qué debe verificar el profesional? | Fidelidad, factibilidad, materiales e instalaciones | Fuentes, requisitos, evidencias y alcance |

> **Principio del taller:** la IA propone y organiza información; el profesional verifica y decide.

---

## 2. ¿Qué es un prompt?

Un **prompt** es una instrucción o conjunto de información proporcionada a un sistema de inteligencia artificial para orientar la realización de una tarea.

Dependiendo de las capacidades de la herramienta, puede integrar:

- Texto.
- Fotografías e imágenes.
- Planos y documentos.
- Tablas y datos estructurados.
- Otros recursos multimodales.

En el contexto profesional, un prompt puede funcionar como una **especificación de trabajo**, porque establece qué se necesita, con qué información, bajo qué restricciones y cómo debe presentarse el resultado.

### De una pregunta a una instrucción profesional

**Pregunta general → Prompt profesional → Resultado evaluable**

Por ejemplo:

**Pregunta general:**

> Revisa estos documentos y dime si todo está bien.

Esta instrucción no especifica qué debe revisarse, qué documentos tienen prioridad, qué producto se espera ni cómo se comprobarán las afirmaciones.

**Solicitud profesional:**

> Analiza exclusivamente los documentos técnicos adjuntos e identifica requisitos expresamente documentados que puedan convertirse en puntos de verificación para una visita de supervisión. Presenta una tabla con el requisito, su fuente específica, la verificación propuesta, la evidencia requerida y las limitaciones. No inventes especificaciones ni declares cumplimiento o incumplimiento.

La segunda solicitud establece un producto más concreto y permite evaluar su utilidad.

---

## 3. ¿Qué es la ingeniería de prompts?

La **ingeniería de prompts** es un proceso de diseño, prueba, evaluación y mejora de instrucciones para orientar las respuestas de un sistema de IA hacia un objetivo.

### Ciclo de trabajo

**Definir → Construir → Ejecutar → Evaluar → Ajustar**

| Etapa | Pregunta orientadora |
|---|---|
| Definir | ¿Qué problema profesional queremos resolver? |
| Construir | ¿Qué instrucciones, entradas y restricciones necesitamos? |
| Ejecutar | ¿Qué respuesta produce la herramienta? |
| Evaluar | ¿El resultado es útil, verificable y adecuado? |
| Ajustar | ¿Qué debemos precisar o corregir? |

Un prompt más largo no necesariamente es mejor.

Su utilidad depende de la claridad del objetivo, la calidad de las entradas, la coherencia de las instrucciones y la posibilidad de evaluar el resultado.

---

## 4. Los ocho componentes de un prompt profesional {#componentes-prompt}

Para este taller utilizaremos una estructura didáctica de ocho componentes.

**Esta estructura es una propuesta del taller; no constituye una clasificación universal u oficial.**

| Componente | Pregunta que responde | Ejemplo para DRO |
|---|---|---|
| **1. Rol** | ¿Desde qué perspectiva debe trabajar? | Asistente de análisis documental |
| **2. Contexto** | ¿Cuál es la situación profesional? | Preparación de una visita |
| **3. Objetivo** | ¿Qué resultado necesitamos? | Lista preliminar de verificación |
| **4. Tareas** | ¿Qué operaciones debe realizar? | Identificar requisitos y proponer verificaciones |
| **5. Entradas** | ¿Qué información utilizará? | Planos y memoria de cálculo |
| **6. Restricciones** | ¿Qué no debe hacer? | No inventar datos ni declarar cumplimiento |
| **7. Formato de salida** | ¿Cómo entregará el resultado? | Tabla estructurada |
| **8. Criterios de calidad** | ¿Cómo evaluaremos su utilidad? | Especificidad, trazabilidad y verificabilidad |

### ¿Por qué incluir criterios de calidad?

Porque obtener una respuesta no significa que esta sea correcta o útil.

En arquitectura y supervisión de obra debemos evaluar, entre otros aspectos:

- Correspondencia con la información proporcionada.
- Fidelidad a las restricciones.
- Precisión de las referencias documentales.
- Posibilidad de verificar las afirmaciones.
- Identificación de incertidumbres y limitaciones.
- Utilidad del resultado para una tarea profesional concreta.

---

# Experiencia A. Arquitectura

## 5. De una fotografía existente a una propuesta de renovación arquitectónica con IA

**Duración de la demostración:** 4 minutos.

### Problema profesional

Un arquitecto desea explorar alternativas de renovación estética para una vivienda existente.

La IA puede generar imágenes atractivas, pero también modificar elementos arquitectónicos que deberían conservarse.

El reto consiste en producir una transformación visual significativa **sin rediseñar la edificación**.

### Recursos utilizados

- Fotografía original del patio del proyecto B.
- Prompt utilizado en el módulo 1.
- Resultado visual del módulo 1.
- Nuevo prompt profesional.
- Imagen generada con el nuevo prompt.
- Matriz de evaluación.

La comparación principal debe utilizar la misma fotografía original y la misma herramienta de generación.

### ¿Qué cambia respecto al módulo 1?

| Elemento | Módulo 1 | Módulo 2 |
|---|---|---|
| Objetivo | Cambiar acabados | Renovación estética integral |
| Muros | Cambio de color o material | Acabados y revestimientos |
| Pavimentos | Conservar | Permitir renovación superficial |
| Paisajismo | No incorporar | Incorporar |
| Iluminación | No incorporar | Incorporar |
| Mobiliario | No incorporar | Incorporar |
| Volumetría | Conservar | Conservar |
| Cubiertas | Conservar | Conservar |
| Puertas y ventanas | Conservar | Conservar ubicación y geometría |
| Arcos | Conservar | Conservar |
| Resultado esperado | Cambio limitado | Transformación visual significativa |

::: warning Precisión didáctica
La diferencia entre los resultados no debe atribuirse exclusivamente a una mejor redacción del prompt.

En el módulo 2 también modificamos deliberadamente el alcance de la intervención, permitiendo recursos de diseño que antes estaban restringidos.

La enseñanza consiste en comprender que las restricciones deben corresponder al objetivo profesional.
:::

## 6. Prompt profesional de renovación arquitectónica {#prompt-arquitectura}

El siguiente prompt está diseñado para utilizarse con la fotografía original del proyecto B.

### Renovación arquitectónica visual de alto impacto

```text
1. ROL

Actúa como arquitecto especializado en renovación residencial, diseño de espacios exteriores y visualización arquitectónica fotorrealista.

2. CONTEXTO

La fotografía adjunta corresponde a una vivienda existente.

Se desea explorar una propuesta de renovación estética de alto impacto visual, manteniendo la identidad arquitectónica y la configuración física principal de la edificación.

La propuesta debe ser contemporánea, elegante, cálida y arquitectónicamente plausible.

3. OBJETIVO

Transformar visualmente el espacio existente mediante una propuesta integral de materiales, acabados, iluminación, paisajismo y ambientación.

El resultado debe producir una diferencia estética claramente perceptible respecto a la fotografía original, sin convertir la vivienda en una edificación distinta.

4. TAREAS

Desarrolla una propuesta de estilo contemporáneo cálido, con inspiración en la arquitectura residencial mexicana actual.

Utiliza una paleta equilibrada de blanco cálido, gris suave, piedra natural, madera y tonos neutros.

Busca una composición sofisticada, armoniosa y visualmente impactante.

Realiza las siguientes intervenciones:

1. Renueva los colores, texturas y acabados de los muros exteriores.
2. Incorpora revestimientos decorativos de piedra natural en superficies seleccionadas, respetando su geometría.
3. Renueva los acabados superficiales del pavimento del patio, conservando sus niveles y configuración espacial aparente.
4. Incorpora vegetación ornamental, maceteros y elementos de paisajismo que no requieran modificar elementos estructurales.
5. Propón iluminación arquitectónica cálida mediante luminarias decorativas e iluminación indirecta.
6. Incorpora mobiliario exterior contemporáneo de proporciones adecuadas.
7. Renueva visualmente los acabados de puertas, marcos y cancelería, conservando su ubicación, geometría y dimensiones.
8. Mejora la ambientación mediante iluminación natural atractiva, sombras realistas y una composición visual profesional.

5. ENTRADAS

Utiliza la fotografía adjunta como referencia principal.

La fotografía representa la configuración arquitectónica existente y debe conservarse como base geométrica de la propuesta.

6. RESTRICCIONES

Conserva:

- La volumetría general de la edificación.
- La ubicación y geometría de los muros.
- La forma, pendiente y configuración de las cubiertas.
- La posición, forma y dimensiones de puertas y ventanas.
- Los arcos y demás elementos arquitectónicos permanentes.
- La distribución espacial del patio.
- La altura aparente de los elementos constructivos.
- El encuadre, la perspectiva y el punto de vista de la fotografía original.

No agregues niveles, habitaciones, ampliaciones, muros, puertas ni ventanas.

No elimines elementos constructivos existentes.

No modifiques elementos estructurales.

No sustituyas las cubiertas por otras de diferente geometría.

Evita intervenciones que impliquen modificaciones estructurales evidentes.

Las propuestas de materiales, luminarias, pavimentos y paisajismo deben entenderse como alternativas conceptuales sujetas a revisión técnica posterior.

7. FORMATO DE SALIDA

Genera una sola imagen arquitectónica fotorrealista de alta calidad.

Mantén el punto de vista y el encuadre general de la fotografía original para facilitar la comparación visual.

La imagen debe transmitir una renovación arquitectónica significativa, elegante y profesional.

8. CRITERIOS DE CALIDAD

La propuesta será satisfactoria si:

1. Se reconoce claramente la edificación original.
2. La transformación estética es significativa.
3. Se conserva la configuración arquitectónica principal.
4. Los materiales presentan una combinación armoniosa.
5. El paisajismo y la iluminación enriquecen el espacio.
6. La propuesta resulta arquitectónicamente plausible.
7. No se introducen modificaciones estructurales aparentes.

Prioriza simultáneamente la fidelidad a la edificación existente y el impacto visual de la renovación.

La imagen generada es una exploración conceptual. No constituye una validación de viabilidad constructiva, seguridad, instalaciones, presupuesto ni cumplimiento normativo.
```

## 7. Comparación visual de resultados {#evaluacion-visual}

La comparación utiliza la misma fotografía original del proyecto B y dos resultados generados con Gemini.

- **Referencia:** fotografía original.
- **Gemini C (módulo 1):** intervención estética limitada.
- **Gemini D (módulo 2):** renovación más amplia mediante un prompt profesional de ocho componentes.

### Resultados visuales

<div style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;align-items:start;margin-top:20px;">
  <div style="text-align:center;min-width:0;">
    <img src="/imagenes/modulo-1/fachada-referencia.jpg" alt="Fotografía original del proyecto B" style="width:100%;height:260px;object-fit:contain;margin:0;">
    <p style="margin-top:12px;"><strong>Fotografía original</strong></p>
  </div>
  <div style="text-align:center;min-width:0;">
    <img src="/imagenes/modulo-1/fachada-gemini-c.jpg" alt="Resultado Gemini C del módulo 1" style="width:100%;height:260px;object-fit:contain;margin:0;">
    <p style="margin-top:12px;"><strong>Gemini C · Módulo 1</strong></p>
  </div>
  <div style="text-align:center;min-width:0;">
    <img src="/imagenes/modulo-2/fachada-gemini-d.jpg" alt="Resultado Gemini D del módulo 2" style="width:100%;height:260px;object-fit:contain;margin:0;">
    <p style="margin-top:12px;"><strong>Gemini D · Módulo 2</strong></p>
  </div>
</div>

### Dimensión A. Impacto estético

| Criterio | Gemini C | Gemini D |
|---|---|---|
| Diferencia visual respecto al original | Baja | Alta |
| Coherencia estética | Alta | Alta |
| Armonía de materiales | Alta | Alta |
| Cambio de acabados | Limitado | Significativo |
| Renovación de pavimentos | Moderada | Significativa |
| Paisajismo | Mínimo | Adecuado |
| Iluminación arquitectónica | Sin cambios relevantes | Adecuada |
| Mobiliario exterior | No incorpora | Incorpora |

**Interpretación:** Gemini C conserva una apariencia cercana a la fotografía original. Gemini D produce una transformación más significativa mediante revestimientos, iluminación, vegetación y mobiliario.

### Dimensión B. Fidelidad arquitectónica

| Elemento | Gemini C | Gemini D |
|---|---|---|
| Volumetría general | Conservada aparentemente | Conservada con variaciones aparentes |
| Disposición de cubiertas | Conservada aparentemente | Conservada con diferencias en detalles |
| Geometría de arcos | Aproximadamente conservada | Parcial |
| Ubicación de puertas y ventanas | Conservada aparentemente | Conservada aparentemente |
| Proporciones de vanos | Aproximadamente conservadas | Parcial |
| Configuración espacial del patio | Conservada aparentemente | Conservada aparentemente |
| Modificaciones estructurales aparentes | No evidentes | Dudosas |

### Hallazgos de la comparación

**Cubiertas metálicas.** Gemini C reproduce de manera más cercana la geometría visible de las cubiertas. Gemini D conserva su disposición general, pero presenta variaciones en algunos perfiles y encuentros.

**Arcos y cancelería.** Ambos resultados conservan los vanos principales. Gemini D introduce diferencias en detalles de cancelería y proporciones que requieren revisión.

**Pavimentos y jardinería.** Gemini C introduce cambios limitados. Gemini D transforma el tratamiento superficial e incorpora vegetación ornamental y mobiliario, intervenciones autorizadas por el prompt del módulo 2.

**Muro posterior.** Gemini D incorpora un revestimiento de apariencia pétrea. Esta intervención corresponde a un cambio de acabado permitido, siempre que no implique modificar la geometría del muro.

### Evaluación respecto a los objetivos

| Aspecto | Gemini C · Módulo 1 | Gemini D · Módulo 2 |
|---|---|---|
| Objetivo principal | Cambio limitado de acabados | Renovación estética integral |
| Transformación visual | Limitada | Significativa |
| Fidelidad arquitectónica aparente | Mayor | Parcial |
| Cumplimiento de todas las restricciones | No demostrado | No demostrado |
| Valoración global | Cumplimiento parcial | Cumplimiento parcial |

::: tip Conclusión de la experiencia A
**Gemini C conserva mejor la configuración arquitectónica aparente, pero ofrece una intervención estética limitada. Gemini D logra una renovación visual más significativa, aunque introduce variaciones en detalles arquitectónicos que requieren revisión.**

La calidad visual no equivale a fidelidad arquitectónica, y la fidelidad arquitectónica no demuestra viabilidad constructiva.
:::

### Limitaciones metodológicas

Esta comparación constituye una evaluación visual cualitativa de dos generaciones particulares.

Aunque se mantiene la misma herramienta y fotografía de entrada, los prompts difieren tanto en su estructura como en el alcance de las intervenciones permitidas.

Por ello, no es posible atribuir las diferencias exclusivamente a la estructura de ocho componentes.

Tampoco se han realizado mediciones geométricas ni verificaciones estructurales.

**Conclusión profesional:** la IA permite explorar alternativas, pero el arquitecto debe revisar su correspondencia con el proyecto real antes de utilizarlas como base para decisiones de diseño o construcción.

---

# Experiencia B. DRO

## 8. De documentación técnica a un instrumento de supervisión de obra

**Duración de la demostración:** 4 minutos.

### Problema profesional

Un Director Responsable de Obra dispone de planos y documentación técnica de un proyecto y necesita preparar una visita de supervisión.

La IA puede ayudar a transformar información documental dispersa en una lista preliminar de verificación específica, organizada y trazable.

**El valor agregado no consiste en identificar elementos constructivos evidentes, sino en convertir requisitos documentados en un instrumento operativo.**

### Producto esperado

**Requisito documentado → Fuente → Verificación propuesta → Evidencia requerida → Estado**

La lista debe permitir identificar qué se pretende verificar, de dónde procede el requisito y qué evidencia sería necesaria.

### Documentos de entrada

Se utilizará documentación seleccionada del proyecto B:

- Plano arquitectónico, cuando resulte pertinente.
- Plano estructural.
- Fragmentos de memoria de cálculo.

Los tres prompts deberán ejecutarse utilizando exactamente los mismos documentos.

::: warning Protección de información
Antes de utilizar documentación real, deberán revisarse y anonimizarse los datos personales, firmas, domicilios, identificadores y cualquier información sensible.

No se publicarán documentos originales sin autorización.
:::

---

## 9. Tres niveles de prompts para el DRO {#prompts-dro}

Compararemos tres formas de solicitar una misma tarea.

### Nivel 1. Prompt básico

```text
Revisa los documentos adjuntos y genera una lista de aspectos que debo verificar durante la supervisión de esta obra.
```

Este prompt expresa una intención general, pero deja sin definir diversos elementos del resultado.

### Nivel 2. Prompt estructurado

```text
Actúa como asistente de apoyo documental para un Director Responsable de Obra.

Estoy preparando una visita de supervisión de un proyecto de construcción.

Analiza los documentos técnicos adjuntos y elabora una lista de verificación de los aspectos constructivos que requieren supervisión.

Para cada aspecto, indica:

1. Elemento o actividad que debe verificarse.
2. Especificación identificada en la documentación.
3. Documento del que procede la información.
4. Evidencia que sería conveniente recopilar durante la supervisión.

No inventes especificaciones ni valores técnicos.

Cuando la información no esté disponible o no sea legible, indícalo.

Presenta el resultado en una tabla.
```

### Nivel 3. Prompt profesional multimodal

**Generación de un instrumento de supervisión de obra**

```text
1. ROL

Actúa como asistente especializado en organización y análisis de documentación técnica para apoyar las actividades de un Director Responsable de Obra.

Tu función es preparar instrumentos de trabajo para revisión profesional. No debes sustituir el juicio técnico del DRO ni emitir dictámenes de cumplimiento.

2. CONTEXTO

Se prepara una visita de supervisión de un proyecto de construcción ubicado en el estado de Colima, México.

El DRO cuenta con documentación técnica del proyecto y necesita transformar la información disponible en una lista de verificación específica, organizada y trazable.

3. OBJETIVO

Elaborar una lista preliminar de verificación de supervisión que pueda utilizarse durante una visita de obra y actualizarse posteriormente con observaciones y evidencias.

4. TAREAS

1. Identifica especificaciones y requisitos técnicos expresamente documentados que sean relevantes para la supervisión.
2. Convierte cada requisito en un punto concreto de verificación.
3. Relaciona cada punto con su documento de origen.
4. Propón el tipo de evidencia que permitiría documentar su revisión.
5. Distingue entre verificaciones visuales, documentales y aquellas que requieren medición, ensayo o inspección especializada.
6. Identifica información insuficiente o ilegible que impida formular una verificación específica.
7. Organiza los resultados para que el DRO pueda utilizarlos durante una visita.

5. ENTRADAS

Analiza exclusivamente los documentos adjuntos, que pueden incluir planos arquitectónicos, planos estructurales y fragmentos de memoria de cálculo.

Identifica claramente cada documento utilizado.

6. RESTRICCIONES

No inventes dimensiones, resistencias, materiales, especificaciones ni procedimientos constructivos.

No incorpores requisitos normativos que no estén respaldados por una fuente normativa proporcionada y verificada.

No declares que un elemento cumple o incumple.

No confundas una especificación del proyecto con una obligación normativa.

No supongas que una fotografía o inspección visual permite comprobar características ocultas.

Si una especificación no puede leerse con suficiente certeza, indícalo y solicita revisar el documento original.

No mezcles información de proyectos diferentes.

7. FORMATO DE SALIDA

Genera una tabla con las columnas:

- ID.
- Elemento o actividad.
- Requisito documentado.
- Fuente específica.
- Verificación propuesta.
- Tipo de evidencia requerida.
- Limitaciones de la verificación.
- Estado.

Utiliza inicialmente el estado «Pendiente de revisión».

Al finalizar, incluye una sección titulada «Información adicional necesaria», con los documentos o datos que permitirían completar la lista.

8. CRITERIOS DE CALIDAD

Cada punto de verificación debe estar vinculado con información identificable en los documentos.

La referencia a la fuente debe ser suficientemente precisa para localizarla en el original.

Los puntos deben ser específicos, verificables y útiles para una visita de supervisión.

Separa los datos documentados de las recomendaciones de verificación.

Cuando la evidencia sea insuficiente, expresa la incertidumbre en lugar de completar información mediante suposiciones.
```

---

## 10. Comparación de los resultados {#lista-verificacion}

Los tres prompts deberán ejecutarse con las mismas entradas documentales.

Posteriormente se compararán mediante los siguientes criterios:

| Criterio | Nivel 1 | Nivel 2 | Nivel 3 |
|---|---|---|---|
| Especificidad para el proyecto | Por evaluar | Por evaluar | Por evaluar |
| Referencias a fuentes | Por evaluar | Por evaluar | Por evaluar |
| Utilidad operativa | Por evaluar | Por evaluar | Por evaluar |
| Identificación de limitaciones | Por evaluar | Por evaluar | Por evaluar |
| Trazabilidad | Por evaluar | Por evaluar | Por evaluar |

::: info Resultados pendientes
Esta matriz se completará después de ejecutar los tres prompts con los mismos documentos del proyecto B y revisar las respuestas obtenidas.

No se asignan valoraciones anticipadas.
:::

### Plantilla del instrumento de supervisión

| ID | Elemento | Requisito | Fuente | Verificación | Evidencia | Limitación | Estado |
|---|---|---|---|---|---|---|---|
| V-01 | Por identificar | Por extraer | Por localizar | Por definir | Por definir | Por evaluar | Pendiente |
| V-02 | Por identificar | Por extraer | Por localizar | Por definir | Por definir | Por evaluar | Pendiente |

**Esta tabla es una plantilla ilustrativa, no contiene hallazgos reales del proyecto.**

El instrumento final deberá distinguir claramente entre:

- Información expresamente documentada.
- Verificaciones propuestas por la IA.
- Evidencias necesarias.
- Limitaciones de la comprobación.
- Estado registrado por el profesional.

---

# Actividad participativa guiada

## 11. Construyamos un prompt profesional para el DRO

**Duración:** 7 minutos.  
**Modalidad:** Colectiva, asistida por el instructor.  
**Herramienta:** ChatGPT.  
**Recurso:** Plantilla interactiva del portal.  
**Caso:** Documentación seleccionada del proyecto B.

### Situación inicial

El instructor proyectará:

> Revisa estos documentos y dime si todo está bien.

**Pregunta para los participantes:**

¿Qué le falta a esta instrucción para convertirse en una solicitud profesional útil?

### Desarrollo de la actividad

| Minuto | Paso | Participación |
|---|---|---|
| 12–13 | Identificar el problema | Detectar ambigüedades |
| 13–14 | Precisar contexto y objetivo | Proponer el alcance |
| 14–15 | Precisar entradas y tareas | Seleccionar prioridades |
| 15–16 | Establecer restricciones | Identificar riesgos |
| 16–17 | Definir formato y calidad | Proponer columnas y criterios |
| 17–18 | Ejecutar | Observar la respuesta |
| 18–19 | Evaluar | Revisar uno o dos puntos |

**Secuencia de trabajo:**

**CONSTRUIR → EJECUTAR → EVALUAR**

### Condiciones de ejecución

Antes de iniciar el taller, el instructor deberá tener preparados:

1. Los documentos seleccionados y anonimizados.
2. La plantilla interactiva abierta.
3. Una sesión de ChatGPT.
4. Una respuesta real previamente generada como respaldo.

La actividad se realizará desde la computadora del instructor, con pantalla proyectada.

---

## 12. Plantilla interactiva de ocho componentes {#plantilla-interactiva}

La siguiente herramienta permite construir un prompt profesional sin redactarlo desde cero.

Cada componente contiene:

- **Texto base:** instrucciones profesionales preparadas.
- **Precisión del grupo:** campo editable para incorporar las aportaciones de los participantes.

La vista previa integra ambos elementos y omite los campos vacíos.

<ClientOnly>
  <PromptDRO />
</ClientOnly>

### Cómo utilizar la plantilla

1. Revisa el texto base de cada componente.
2. Incorpora las precisiones necesarias.
3. Consulta la vista previa del prompt integrado.
4. Selecciona **Copiar prompt**.
5. Adjunta los documentos pertinentes en la herramienta de IA.
6. Ejecuta la instrucción.
7. Evalúa críticamente el resultado.

El botón **Restablecer plantilla** elimina las precisiones y recupera el estado inicial.

La plantilla no envía automáticamente información a un sistema de IA.

---

# Kit digital del módulo 2

## 13. Recursos reutilizables

Los siguientes recursos están disponibles en esta página para consulta y reutilización:

| Recurso | Ubicación |
|---|---|
| Estructura de ocho componentes | [Consultar](#componentes-prompt) |
| Prompt de renovación arquitectónica | [Consultar y copiar](#prompt-arquitectura) |
| Matriz de evaluación visual | [Consultar](#evaluacion-visual) |
| Tres prompts para DRO | [Consultar y copiar](#prompts-dro) |
| Plantilla de lista de verificación | [Consultar](#lista-verificacion) |
| Plantilla interactiva | [Abrir herramienta](#plantilla-interactiva) |

### Rúbrica breve para evaluar un prompt profesional

| Criterio | Pregunta de evaluación |
|---|---|
| Claridad | ¿La tarea está definida sin ambigüedades importantes? |
| Contexto | ¿Se describe suficientemente la situación profesional? |
| Entradas | ¿Se identifican las fuentes de información? |
| Restricciones | ¿Se delimitan las acciones y afirmaciones no permitidas? |
| Formato | ¿Se especifica un producto útil? |
| Trazabilidad | ¿Es posible localizar y verificar las fuentes? |
| Calidad | ¿Existen criterios para evaluar la respuesta? |
| Seguridad profesional | ¿Se reconoce la necesidad de revisión humana? |

### Actividad autónoma

Selecciona una tarea de tu práctica profesional relacionada con arquitectura o supervisión de obra.

1. Redacta una solicitud inicial breve.
2. Identifica qué información falta.
3. Construye un prompt mediante los ocho componentes.
4. Ejecútalo utilizando información que tengas autorización para compartir.
5. Evalúa la respuesta mediante la rúbrica anterior.
6. Ajusta el prompt si identificas omisiones o errores.
7. Documenta qué cambió entre la primera respuesta y la versión ajustada.

**Producto de la actividad:** prompt profesional, resultado obtenido y reflexión breve sobre su utilidad y limitaciones.

---

## 14. Limitaciones y verificación profesional

### Un prompt estructurado no garantiza un resultado correcto

Aunque las instrucciones sean claras, la IA puede omitir restricciones, interpretar incorrectamente información o generar afirmaciones no respaldadas.

### Una imagen atractiva no demuestra viabilidad constructiva

Las propuestas visuales son exploraciones conceptuales.

No acreditan seguridad estructural, viabilidad de instalaciones, presupuesto ni cumplimiento normativo.

### Una lista de verificación no constituye un dictamen

El instrumento generado por IA debe revisarse, ajustarse y validarse por el profesional competente.

### Las referencias documentales deben comprobarse

La IA puede interpretar erróneamente planos, notas, dimensiones o especificaciones.

Cada referencia debe contrastarse con el documento original.

### La normativa debe verificarse en fuentes oficiales

La aplicación de disposiciones normativas depende, entre otros factores, del municipio, tipo de proyecto y fecha de aplicación.

**La revisión normativa específica se abordará en el módulo 3.**

---

## 15. Referencias

[1] OpenAI, “Prompt engineering,” *OpenAI API Documentation*. Disponible en la documentación oficial de OpenAI.

[2] OpenAI, “Images and vision,” *OpenAI API Documentation*. Disponible en la documentación oficial de OpenAI.

[3] National Institute of Standards and Technology, *Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile*, NIST AI 600-1, 2024, doi: 10.6028/NIST.AI.600-1.

[4] F. Miao and W. Holmes, *Guidance for Generative AI in Education and Research*. Paris, France: UNESCO, 2023.

> **Pendiente editorial:** verificar los metadatos bibliográficos, los enlaces oficiales y la correspondencia entre las afirmaciones del módulo y las referencias antes de la publicación definitiva.

---

## 16. Estado de las demostraciones

| Elemento | Estado |
|---|---|
| Fundamentos de ingeniería de prompts | Preparado |
| Estructura de ocho componentes | Preparada |
| Prompt profesional de arquitectura | Preparado |
| Resultado visual del módulo 2 | Pendiente de generar y validar |
| Matriz de evaluación visual | Preparada, sin resultados |
| Tres prompts para DRO | Preparados |
| Respuestas reales de los tres prompts | Pendientes de ejecutar y validar |
| Lista de verificación real | Pendiente de generar y revisar |
| Plantilla interactiva | Implementada y probada localmente |
| Actividad participativa | Diseñada |

**Este módulo se encuentra en preparación. Las demostraciones pendientes se incorporarán después de su ejecución y validación.**