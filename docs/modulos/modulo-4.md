# Módulo 4. Supervisión multimodal: contraste entre planos y fotografías

## Propósito

Demostrar cómo la IA multimodal puede apoyar al Director Responsable de Obra (DRO) al analizar conjuntamente información gráfica del proyecto y fotografías del proceso constructivo, para organizar observaciones y proponer verificaciones.

La IA no certifica la correcta ejecución, no sustituye mediciones ni inspecciones y no emite dictámenes de cumplimiento.

## Caso de demostración: Proyecto A-1

Se utilizará documentación de una vivienda identificada didácticamente como Proyecto A-1.

### Documentos disponibles

- Plano arquitectónico A-1.
- Plano estructural de cimentación A-1.
- Plano estructural de losas de planta baja y planta alta A-1.
- Fotografías seleccionadas del proceso constructivo.

Para esta demostración se priorizará el plano estructural de cimentación, que incluye la planta denominada **losa planta baja** y una **sección tipo de losa de cimentación**, junto con fotografías que muestran acero de refuerzo, elementos perimetrales y conducciones visibles antes del colado.

La correspondencia exacta entre cada fotografía y un elemento, eje o detalle del plano deberá ser confirmada; no se asumirá únicamente por semejanza visual.

## Fotografías de apoyo

Las fotografías siguientes son una selección didáctica del archivo fotográfico A-1. Sus fechas visibles corresponden al 9 de noviembre de 2006.

![Fotografía A-1: vista de armado y conducciones](/imagenes/modulo-4/a1/foto-057.jpg )

![Fotografía A-1: detalle de malla de refuerzo y conducción](/imagenes/modulo-4/a1/foto-059.jpg )

![Fotografía A-1: vista general de armado y elementos perimetrales](/imagenes/modulo-4/a1/foto-060.jpg )

![Fotografía A-1: elemento perimetral y preparación constructiva](/imagenes/modulo-4/a1/foto-061.jpg )

## Secuencia de la demostración

Duración sugerida: 25 minutos.

| Tiempo | Actividad |
|---|---|
| 0–4 min | Explicar qué aporta el análisis multimodal y cuáles son sus límites |
| 4–8 min | Mostrar el plano estructural de cimentación y las fotografías |
| 8–17 min | Ejecutar el prompt multimodal |
| 17–22 min | Revisar observaciones, incertidumbres y verificaciones propuestas |
| 22–25 min | Recuperar aprendizajes y cerrar el taller |


## Prompt profesional multimodal

Para esta demostración se utilizarán cinco archivos del Proyecto A1.

### Documentos de entrada

Adjuntar en una misma conversación de ChatGPT:

1. Plano estructural de cimentación A1, en formato PDF.
2. `foto-057.jpg`
3. `foto-059.jpg`
4. `foto-060.jpg`
5. `foto-061.jpg`

### Prompt para ejecutar

Copiar el siguiente prompt y ejecutarlo con los cinco archivos adjuntos.

```text
1. ROL

Actúa como asistente técnico especializado en interpretación de planos estructurales, análisis de evidencias fotográficas de procesos constructivos y apoyo a la supervisión de obra.

Tu función es apoyar el análisis preliminar de un Director Responsable de Obra (DRO), sin sustituir su criterio profesional, la inspección física ni las verificaciones técnicas correspondientes.


2. CONTEXTO

Se proporciona documentación de un proyecto real identificado como Proyecto A1, consistente en:

- Un plano estructural de cimentación en formato PDF.
- Cuatro fotografías del proceso constructivo: foto-057.jpg, foto-059.jpg, foto-060.jpg y foto-061.jpg.

El propósito es explorar cómo la inteligencia artificial multimodal puede relacionar información de planos con evidencias fotográficas para apoyar las actividades de supervisión de obra.


3. OBJETIVO

Realizar un análisis técnico preliminar que identifique elementos constructivos visibles, los contraste con la información legible del plano y proponga verificaciones pertinentes para el DRO.

No se solicita emitir un dictamen estructural ni certificar el cumplimiento del proyecto.


4. ACTIVIDADES

FASE 1. INTERPRETACIÓN DE LAS EVIDENCIAS

1. Identifica los elementos constructivos que pueden reconocerse en cada fotografía.
2. Describe las características observables, distinguiendo hechos visibles de interpretaciones.
3. Identifica las especificaciones relevantes que puedan leerse con suficiente claridad en el plano estructural.
4. Señala expresamente cualquier texto, cota, símbolo o detalle del plano que no pueda interpretarse con certeza.


FASE 2. CONTRASTE ENTRE PLANO Y FOTOGRAFÍAS

1. Relaciona los elementos visibles en las fotografías con los detalles o especificaciones identificables en el plano.
2. Identifica posibles coincidencias, diferencias o aspectos que requieren verificación.
3. No afirmes que existe una discrepancia cuando la evidencia sea insuficiente para demostrarla.
4. No infieras dimensiones exactas, diámetros de acero, separaciones de refuerzo, resistencias de materiales ni cumplimiento estructural exclusivamente a partir de fotografías.
5. Cuando no sea posible establecer una correspondencia entre un elemento fotografiado y un detalle específico del plano, indícalo.


FASE 3. APOYO A LA SUPERVISIÓN DEL DRO

Elabora una matriz con las siguientes columnas:

- Fotografía o evidencia.
- Elemento identificado.
- Referencia del plano.
- Observación preliminar.
- Nivel de certeza.
- Verificación recomendada.

Para cada observación:

- Indica la fotografía que la sustenta.
- Identifica la referencia del plano, cuando sea legible.
- Clasifica el nivel de certeza como alto, medio o bajo, justificándolo brevemente.
- Propón una acción concreta de verificación documental o en obra.


FASE 4. ANÁLISIS CRÍTICO

Responde:

1. ¿Qué aspectos pudieron analizarse razonablemente con la documentación proporcionada?
2. ¿Qué aspectos no pueden verificarse mediante estas fotografías y el plano?
3. ¿Qué información adicional sería necesaria para mejorar el análisis?
4. ¿Qué observaciones podrían ser útiles para preparar una visita de supervisión del DRO?
5. ¿Qué riesgos existirían si las interpretaciones de la IA se aceptaran sin validación profesional?


5. RESTRICCIONES

- Trabaja únicamente con la documentación proporcionada.
- No inventes especificaciones, dimensiones, detalles constructivos ni referencias del plano.
- No asumas que las fotografías muestran necesariamente todos los elementos definidos en el plano.
- Distingue entre evidencia observable, inferencia y aspecto no verificable.
- No emitas conclusiones definitivas sobre seguridad estructural, calidad de ejecución o cumplimiento normativo.
- Si la documentación no permite responder alguna cuestión, indícalo explícitamente.


6. FORMATO DE RESPUESTA

Presenta los resultados en este orden:

1. Identificación de evidencias por fotografía.
2. Especificaciones legibles del plano.
3. Matriz de contraste entre plano y fotografías.
4. Limitaciones e incertidumbres.
5. Lista priorizada de verificaciones recomendadas para el DRO.
6. Conclusión breve sobre el valor y las limitaciones de la IA multimodal para la supervisión de obra.
```



## Preguntas para conducir la revisión con los participantes

1. ¿Qué información del plano puede identificarse realmente en las fotografías?
2. ¿Qué características parecen visibles, pero requieren medición para comprobarse?
3. ¿Qué elementos ya no podrían verificarse visualmente después del colado?
4. ¿Qué dato adicional solicitarían antes de considerar una observación como hallazgo?

## Aprendizaje esperado

La IA multimodal puede relacionar información gráfica y visual, describir evidencias y orientar verificaciones. Sin embargo, una fotografía no reemplaza la medición, la inspección presencial ni la consulta del proyecto autorizado.

**Cierre del taller: IA analiza y propone; el profesional verifica y decide.**
