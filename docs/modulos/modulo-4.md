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

Adjuntar en una misma conversación:

1. Plano estructural de cimentación A-1.
2. Plano estructural de losas de planta baja y planta alta A-1, como referencia complementaria.
3. Plano arquitectónico A-1, como referencia espacial.
4. Las cuatro fotografías seleccionadas de esta página.

Copiar y ejecutar:

```text
Actúa como asistente de apoyo documental y visual para un Director Responsable de Obra (DRO) en México.

CONTEXTO
Se analiza documentación de una vivienda identificada didácticamente como Proyecto A-1. Se adjuntan planos arquitectónicos y estructurales, así como fotografías del proceso constructivo. El ejercicio se concentra en el sistema de cimentación y la zona identificada en el plano como losa de planta baja.

OBJETIVO
Apoyar una revisión preliminar mediante el contraste entre la información expresamente documentada en los planos y las características que pueden observarse en las fotografías.

TAREAS
1. Identifica los documentos adjuntos y describe qué información relevante aporta cada uno.
2. En el plano estructural de cimentación, localiza la planta de losa de planta baja, los detalles y secciones que puedan relacionarse con las fotografías.
3. Examina cada fotografía por separado. Describe únicamente elementos y condiciones que sean visualmente observables.
4. Identifica posibles correspondencias entre lo representado en los planos y lo visible en las fotografías. Para cada correspondencia, explica qué rasgos la sustentan y qué información falta para confirmarla.
5. Distingue entre:
   a) dato expresamente indicado en el plano;
   b) observación visual de la fotografía;
   c) interpretación o correspondencia probable;
   d) aspecto que no puede determinarse con los archivos disponibles.
6. Identifica aspectos que podrían requerir verificación en obra, por ejemplo: ubicación y continuidad del acero, recubrimientos, separaciones, diámetros, anclajes, traslapes, posición de elementos perimetrales, conducciones embebidas, cimbra y condiciones previas al colado. Inclúyelos solo cuando sean pertinentes a lo que muestran los archivos.
7. Para cada aspecto propuesto, indica qué evidencia adicional sería necesaria: medición, consulta del detalle correspondiente, fotografía de acercamiento, registro de obra, prueba o inspección especializada.
8. Señala contradicciones, falta de legibilidad o ausencia de información. No completes datos mediante suposiciones.

RESTRICCIONES
- No inventes dimensiones, diámetros, separaciones, resistencias, materiales ni especificaciones.
- No afirmes que una fotografía corresponde a un eje, elemento o detalle específico si no puede establecerse con claridad.
- No determines cumplimiento o incumplimiento a partir de fotografías.
- No afirmes que el acero tiene un diámetro o separación determinados por apreciación visual.
- No infieras características ocultas después del colado.
- No confundas una observación visual con una medición o comprobación técnica.
- No emitas dictamen estructural ni sustituyas el juicio del DRO.
- Si el texto de un plano no es legible, indícalo y solicita revisar el original.

FORMATO DE SALIDA
A. Documentos examinados.
B. Descripción objetiva de cada fotografía.
C. Matriz de contraste con estas columnas:
   - ID
   - Elemento o aspecto
   - Información documentada en el plano
   - Observación visual y fotografía de origen
   - Correspondencia: confirmada, probable o no determinable
   - Verificación adicional requerida
   - Limitaciones
D. Cinco verificaciones prioritarias que el DRO podría considerar en una visita.
E. Información que no puede determinarse con los archivos proporcionados.

CRITERIO FINAL
La finalidad es orientar la revisión profesional y organizar evidencias. La IA propone observaciones y verificaciones; el DRO contrasta los documentos originales, realiza las comprobaciones necesarias y toma las decisiones profesionales.
```

## Preguntas para conducir la revisión con los participantes

1. ¿Qué información del plano puede identificarse realmente en las fotografías?
2. ¿Qué características parecen visibles, pero requieren medición para comprobarse?
3. ¿Qué elementos ya no podrían verificarse visualmente después del colado?
4. ¿Qué dato adicional solicitarían antes de considerar una observación como hallazgo?

## Aprendizaje esperado

La IA multimodal puede relacionar información gráfica y visual, describir evidencias y orientar verificaciones. Sin embargo, una fotografía no reemplaza la medición, la inspección presencial ni la consulta del proyecto autorizado.

**Cierre del taller: IA analiza y propone; el profesional verifica y decide.**
