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

Se utiliza documentación técnica seleccionada del proyecto B, correspondiente a una obra real ubicada en el estado de Colima.

Para las pruebas de los prompts B1, B2 y B3 se emplearon fotografías de los siguientes documentos:

- **Plano estructural:** notas y especificaciones técnicas del proyecto.
- **Memoria de cálculo:** fragmentos de información técnica disponible.
- **Bitácora de obra:** portada y cinco folios con registros de obra, incluyendo anotaciones en el apartado de observaciones del perito y/o corresponsables.

El proyecto también cuenta con un plano arquitectónico, aunque este no formó parte del conjunto de fotografías utilizado en la comparación documentada.

Los tres prompts se evaluaron utilizando el mismo conjunto de 12 fotografías, con el propósito de comparar sus respuestas bajo condiciones documentales equivalentes.

Los resultados se presentan en la sección 10.

**Alcance:** La información disponible corresponde a fotografías y fragmentos documentales. Por tanto, las verificaciones generadas son preliminares y no sustituyen la consulta de los documentos originales ni la inspección profesional de la obra.

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

::: tip Consideración para la demostración
Los prompts B1, B2 y B3 se conservan en su versión original para permitir una comparación de sus resultados.

El prompt B3 incorpora instrucciones para limitar las suposiciones y exigir trazabilidad documental. Sin embargo, estas instrucciones no garantizan que la IA interprete correctamente todos los datos, especialmente cuando proceden de fotografías o anotaciones manuscritas.

La experiencia permitirá identificar una inconsistencia real en la interpretación de la bitácora de obra y utilizarla como punto de partida para mejorar el prompt mediante una actividad participativa.

**El propósito no es demostrar que un prompt más extenso siempre produce una respuesta correcta, sino que la calidad de las instrucciones y la validación profesional son necesarias para obtener resultados útiles.**
:::

---

## 10. Comparación de los resultados {#lista-verificacion}


Los tres prompts (B1, B2 y B3) se ejecutaron utilizando el mismo conjunto de documentos del proyecto B.

Las respuestas obtenidas se analizaron mediante los siguientes criterios, con el propósito de identificar diferencias en organización, especificidad, trazabilidad documental y utilidad para preparar una visita de supervisión.

Los resultados corresponden a las ejecuciones documentadas de esta experiencia y no constituyen una evaluación estadística ni permiten generalizar el desempeño de los prompts.


| Criterio | B1. Básico | B2. Estructurado | B3. Profesional |
|---|---|---|---|
| Puntos de verificación | 53 | 33 | 12 priorizados |
| Organización | 7 áreas | 5 áreas | Tabla de verificaciones priorizadas |
| Especificidad | Variable | Mayor estructuración | Enfoque en verificaciones concretas |
| Referencias documentales | Limitadas | Identificación de documentos | Referencias más específicas |
| Utilidad operativa | Lista extensa que requiere depuración | Instrumento más organizado | Lista más breve y orientada a prioridades |
| Identificación de limitaciones | Insuficiente | Parcial | Más explícita, pero con inconsistencias |
| Principal área de oportunidad | Exceso de elementos y necesidad de validar su pertinencia | Mejorar la precisión y trazabilidad | Corregir contradicciones y revisar posibles omisiones |

::: tip Interpretación de los resultados

Los tres prompts generaron listas de verificación con diferentes niveles de detalle, organización y trazabilidad.

El prompt profesional B3 produjo una lista más breve y priorizada, pero presentó una inconsistencia en la interpretación de una anotación de la bitácora.

Esto demuestra que una mayor estructuración del prompt no garantiza respuestas correctas.

**La utilidad profesional de la IA depende tanto de la calidad de las instrucciones como de la revisión crítica de sus resultados.**

:::

### Caso de análisis: inconsistencia en la interpretación documental

Durante la evaluación de la respuesta generada con el prompt profesional B3, se identificó una inconsistencia relacionada con la interpretación de una anotación manuscrita de la bitácora de obra.

**Primera interpretación:**

En la verificación V-04, la IA relacionó una anotación del folio 0005 con un castillo de concreto de dimensiones 10 × 12 cm, con refuerzo de 3/8" a cada 20 cm.

**Interpretación posterior:**

En otra parte de la misma respuesta, la IA señaló que la anotación probablemente hacía referencia a una losa maciza de 10 y 12 cm de espesor, con refuerzo de 3/8" a cada 20 cm.

**Problema identificado:**

La respuesta presenta dos interpretaciones diferentes de una misma anotación documental.

La segunda interpretación no demuestra por sí misma cuál es la correcta. Es necesario consultar la bitácora original y contrastarla con los planos y demás documentación técnica disponible.

::: warning Pregunta para los participantes

**¿Qué instrucciones adicionales incorporarían al prompt para reducir el riesgo de que la IA entregue interpretaciones contradictorias de un mismo documento?**

:::

**Aprendizaje esperado:** reconocer que una respuesta estructurada, con referencias y terminología técnica, puede contener inconsistencias que deben ser detectadas y verificadas por el profesional.


### Instrumento de supervisión reutilizable

Como producto de esta experiencia, se propone una plantilla de lista de verificación que el DRO puede adaptar a las características de cada proyecto.

La plantilla contempla los siguientes campos:

- ID de verificación.
- Elemento o actividad.
- Requisito documentado.
- Fuente específica.
- Verificación propuesta.
- Tipo de evidencia requerida.
- Limitaciones de la verificación.
- Estado de revisión.

La estructura de la lista de verificación presentada en esta sección puede utilizarse como referencia para preparar instrumentos de supervisión adaptados a las características de cada proyecto.

Los resultados generados por IA deben revisarse antes de incorporarlos al instrumento de trabajo. En particular, las especificaciones ambiguas o contradictorias deben permanecer pendientes de validación documental.

El instrumento debe distinguir entre información documentada, propuestas generadas por IA y observaciones verificadas por el profesional.

---

# Actividad participativa guiada

## 11. Mejoremos un prompt profesional a partir de un error real

**Duración:** 5 minutos.  
**Modalidad:** Colectiva, asistida por el instructor.  
**Herramienta:** ChatGPT.  
**Recurso:** Plantilla interactiva del portal.  
**Caso:** Documentación técnica y bitácora de obra del proyecto B.

### Objetivo de la actividad

Mejorar un prompt profesional previamente probado, incorporando instrucciones que permitan identificar contradicciones, interpretaciones inciertas y posibles omisiones en los resultados generados por IA.

### Situación inicial

El instructor mostrará la inconsistencia detectada en la respuesta B3:

- **Verificación V-04:** interpretación de una anotación como especificación de un castillo.
- **Análisis posterior:** interpretación de la misma anotación como posible especificación de una losa maciza.

Se solicitará a los participantes identificar el problema y proponer cómo mejorar las instrucciones proporcionadas a la IA.

### Desarrollo paso a paso


### Desarrollo paso a paso

| Tiempo | Actividad | Participación |
|---|---|---|
| 0:00–1:00 | Presentar la inconsistencia identificada en B3 | Reconocer las dos interpretaciones contradictorias del folio 0005 |
| 1:00–2:00 | Mostrar las seis sugerencias de validación disponibles en la plantilla | Proponer cuáles incorporar y justificar su elección |
| 2:00–3:00 | Seleccionar las sugerencias acordadas y complementar las precisiones cuando sea necesario | Observar cómo se construye el prompt B3 mejorado |
| 3:00–4:00 | Copiar y enviar el prompt mejorado en ChatGPT, con los documentos del proyecto B disponibles | Observar el procedimiento y, si la respuesta no está lista, utilizar el respaldo preparado |
| 4:00–5:00 | Comparar el resultado disponible con la inconsistencia original | Identificar si la IA reconoce la ambigüedad, solicita verificación documental y evita afirmar interpretaciones no sustentadas |


**Secuencia didáctica:**

**DETECTAR → MEJORAR → EJECUTAR → EVALUAR**


### Instrucciones para el instructor

1. Mostrar la inconsistencia identificada en la respuesta original B3, correspondiente al folio 0005 de la bitácora de obra.

2. Abrir la plantilla interactiva `PromptDRO.vue` disponible en el portal y comprobar que contiene los ocho componentes del prompt B3 original.

3. Presentar las seis sugerencias de validación preparadas en el componente 8, «Criterios de calidad».

4. Solicitar a los participantes que seleccionen las sugerencias que consideran más útiles para prevenir interpretaciones contradictorias y expliquen brevemente sus razones.

5. Marcar las sugerencias acordadas y hacer clic en «Incorporar sugerencias seleccionadas». Si los participantes proponen alguna instrucción adicional, incorporarla en el campo editable correspondiente.

6. Mostrar cómo se integran las nuevas instrucciones al prompt B3, conservando sus ocho componentes originales.

7. Copiar el prompt mejorado y enviarlo a ChatGPT utilizando los mismos documentos del proyecto B.

8. Evaluar específicamente si la nueva respuesta identifica la ambigüedad del folio 0005, evita presentar interpretaciones contradictorias como hechos y señala la necesidad de contrastar la información con los documentos originales.

9. Si la respuesta no se genera oportunamente, utilizar el resultado de respaldo preparado antes del taller.

**Criterio de evaluación:** La mejora no se determina por la cantidad de verificaciones generadas, sino por la capacidad de la respuesta para reconocer incertidumbres, mantener la trazabilidad documental y evitar afirmaciones técnicas no sustentadas.



### Preparación previa

Antes del taller, el instructor deberá contar con:

- **Documentación del proyecto B:** las 12 fotografías seleccionadas y anonimizadas, organizadas para su utilización durante la demostración.
- **Conversación de ChatGPT preparada:** con los documentos adjuntos y disponible para ejecutar el prompt mejorado durante la actividad.
- **Plantilla interactiva:** accesible desde el portal, con los ocho componentes originales del prompt B3 y las seis sugerencias de validación.
- **Resultado original B3:** fragmento de la respuesta que contiene las interpretaciones contradictorias del folio 0005.
- **Prompt mejorado de respaldo:** versión preparada previamente mediante la incorporación de sugerencias de validación.
- **Respuesta de respaldo:** resultado generado y revisado previamente con ese prompt mejorado y los mismos documentos del proyecto B.

**Uso del respaldo:** Si no es posible obtener una respuesta durante la actividad, el instructor mostrará el resultado previamente preparado, aclarando que corresponde a una ejecución anterior y especificando las mejoras utilizadas.

El respaldo servirá para ilustrar cómo puede cambiar la respuesta al incorporar instrucciones de validación, sin atribuirle resultados a modificaciones que no hayan sido probadas.

::: warning Consideración para la demostración

La actividad se realizará desde la computadora del instructor, con pantalla proyectada.

Si la generación de la respuesta tarda demasiado, se presenta un error de carga o se alcanza un límite de uso, se utilizará la respuesta de respaldo.

La autoverificación de la IA no sustituye la revisión profesional ni garantiza la detección de todos los errores.

:::

---

## 12. Plantilla interactiva para mejorar el prompt B3 {#plantilla-interactiva}

Esta herramienta permite mejorar el prompt profesional B3 utilizado en la experiencia anterior, incorporando instrucciones adicionales de validación documental.

**No se parte de un prompt vacío:** la plantilla contiene los ocho componentes originales de B3, que se conservan como punto de partida para evaluar el efecto de las mejoras.

### Elementos de la plantilla

Cada componente contiene:

- **Texto base:** instrucciones originales del prompt B3.
- **Precisión del grupo:** campo editable para incorporar aportaciones de los participantes.

Adicionalmente, el componente 8, **Criterios de calidad**, incluye seis sugerencias de validación preparadas para apoyar la actividad participativa.

Los participantes pueden seleccionar las sugerencias que consideren pertinentes e incorporarlas al prompt mediante el botón **«Incorporar sugerencias seleccionadas»**.

La vista previa integra las instrucciones originales y las precisiones incorporadas, omitiendo los campos vacíos.

<ClientOnly>
  <PromptDRO />
</ClientOnly>

### Cómo utilizar la plantilla durante el taller

1. Revisar el prompt B3 original y recordar la inconsistencia identificada en el folio 0005 de la bitácora de obra.
2. Examinar las seis sugerencias de validación del componente 8.
3. Seleccionar, con la participación del grupo, las sugerencias que puedan ayudar a reducir interpretaciones contradictorias.
4. Hacer clic en **«Incorporar sugerencias seleccionadas»**.
5. Agregar, cuando sea necesario, precisiones propuestas por los participantes en los campos editables.
6. Revisar la vista previa para identificar las instrucciones adicionales incorporadas.
7. Seleccionar **«Copiar prompt»**.
8. Ejecutar el prompt mejorado en ChatGPT utilizando los mismos documentos del proyecto B.
9. Evaluar si la respuesta reconoce la ambigüedad documental y evita presentar interpretaciones no verificadas como hechos.

El botón **«Restablecer plantilla»** elimina las precisiones adicionales, desmarca las sugerencias seleccionadas y recupera el prompt B3 original.

**Importante:** La plantilla no envía automáticamente información a ChatGPT. El instructor debe copiar el prompt y ejecutarlo en una conversación que tenga disponibles los documentos correspondientes.

::: warning Alcance de la actividad

Incorporar instrucciones de autoverificación puede ayudar a identificar inconsistencias, pero no garantiza respuestas correctas.

El DRO debe contrastar las especificaciones y referencias con la documentación original antes de utilizar la lista de verificación como instrumento de supervisión.
:::

---

## 13. Limitaciones y verificación profesional

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

## 14. Referencias

[1] OpenAI, “Prompt engineering,” *OpenAI API Documentation*. Disponible en la documentación oficial de OpenAI.

[2] OpenAI, “Images and vision,” *OpenAI API Documentation*. Disponible en la documentación oficial de OpenAI.

[3] National Institute of Standards and Technology, *Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile*, NIST AI 600-1, 2024, doi: 10.6028/NIST.AI.600-1.

[4] F. Miao and W. Holmes, *Guidance for Generative AI in Education and Research*. Paris, France: UNESCO, 2023.

> **Pendiente editorial:** verificar los metadatos bibliográficos, los enlaces oficiales y la correspondencia entre las afirmaciones del módulo y las referencias antes de la publicación definitiva.

---


## 15. Estado de las demostraciones

| Elemento | Estado |
|---|---|
| Fundamentos de ingeniería de prompts | Preparados |
| Estructura de ocho componentes | Preparada |
| Prompt profesional de arquitectura | Preparado |
| Experiencia A: renovación visual de vivienda | Ejecutada; resultados visuales incorporados |
| Matriz de evaluación visual | Preparada; pendiente de completar la evaluación documentada |
| Tres prompts para DRO (B1, B2 y B3) | Preparados |
| Respuestas reales de los tres prompts | Ejecutadas y comparadas |
| Lista de verificación generada con B3 | Generada y revisada; se identificaron inconsistencias de interpretación documental |
| Plantilla interactiva `PromptDRO.vue` | Implementada, compilada y probada localmente |
| Actividad participativa de mejora del prompt | Diseñada y preparada; pendiente de realizarse con los asistentes |
| Diapositivas de la experiencia B | Pendientes de revisión e integración |

**Estado general:** El módulo 2 cuenta con sus demostraciones principales desarrolladas y resultados documentados. Está pendiente completar la evaluación visual de la experiencia A, revisar la integración de las diapositivas y preparar la ejecución de la actividad participativa de la experiencia B.

**Consideración metodológica:** Las listas de verificación generadas por IA son instrumentos preliminares de apoyo. Su contenido debe contrastarse con la documentación original y validarse mediante el juicio profesional del DRO.
