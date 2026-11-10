
# Módulo 3. Revisión documental y consulta normativa con IA

**Duración:** 30 minutos  
**Caso de estudio:** Proyecto B  
**Modalidad:** Demostración en vivo con participación del grupo

## 1. Objetivo

Demostrar cómo la inteligencia artificial generativa y multimodal puede apoyar al Director Responsable de Obra (DRO) en la revisión de documentación técnica, la identificación de aspectos que requieren verificación y la consulta de disposiciones normativas aplicables.

> **Principio fundamental:** La IA es una herramienta de apoyo. No sustituye la interpretación normativa, la inspección física ni la responsabilidad profesional del DRO.

## 2. Documentación para la demostración

Utilizaremos la documentación del proyecto B:

- Plano estructural y notas técnicas.
- Memoria de cálculo.
- Primeros cinco folios de la bitácora de obra.
- Portada de la bitácora, cuando resulte necesaria para identificar el documento.
- Reglamento de Construcción para el Municipio de Colima
  (documento de referencia con reformas hasta octubre de 2022).

Se reutilizarán los archivos empleados en la experiencia B del módulo 2.

**Importante:** Las observaciones del perito y/o corresponsables deben distinguirse de las observaciones del inspector. No se atribuirán anotaciones a quien no las haya realizado.

## 3. Secuencia de la demostración

| Tiempo | Actividad |
|---|---|
| 0–5 min | Introducción a la revisión documental y normativa asistida |
| 5–12 min | Ejecutar el prompt con los documentos del proyecto B |
| 12–20 min | Identificar aspectos técnicos y consultar la normativa |
| 20–27 min | Verificar una referencia normativa con los participantes |
| 27–30 min | Discutir resultados, limitaciones y responsabilidad profesional |

## 4. Prompt profesional listo para ejecutar

**Instrucciones para el instructor:**

1. Abrir ChatGPT en una conversación nueva.
2. Adjuntar los documentos del proyecto B.
3. Copiar el siguiente prompt.
4. Ejecutarlo y revisar la matriz generada.
5. Seleccionar con los participantes un aspecto técnico para profundizar.

### Prompt: Revisión documental y consulta normativa asistida

```text
ROL

Actúa como asistente de revisión documental y consulta normativa
para un Director Responsable de Obra (DRO) que ejerce en Colima,
México.

CONTEXTO

Se proporciona documentación de un proyecto residencial real,
identificado como Proyecto B: plano estructural, notas técnicas,
memoria de cálculo y extractos de bitácora de obra.

El propósito es identificar aspectos que ameriten verificación
documental y normativa, sin emitir un dictamen técnico ni afirmar
incumplimientos.

TAREAS

FASE 1. REVISIÓN DOCUMENTAL

1. Identifica cinco aspectos técnicos relevantes que puedan
   verificarse con la documentación disponible.

2. Indica para cada aspecto el documento y la evidencia concreta
   que lo sustenta.

3. Distingue entre información explícita, interpretación e
   información no disponible.

4. Si existe texto manuscrito ambiguo o ilegible, indícalo sin
   completar su significado mediante suposiciones.

FASE 2. CONSULTA NORMATIVA

Utiliza el Reglamento de Construcción para el Municipio de Colima
que se adjunta como fuente normativa principal.

Para cada disposición identificada, indica el artículo exacto,
la página del documento y su relación con la evidencia del proyecto.

No presupongas que el documento incorpora reformas posteriores
a octubre de 2022. Señala que su vigencia debe comprobarse
antes de utilizarlo para una conclusión profesional.

5. Identifica qué disposiciones del reglamento de construcción
   aplicable a la ubicación del proyecto sería necesario consultar.

6. Utiliza exclusivamente fuentes normativas proporcionadas o
   verificables mediante una fuente oficial accesible.

7. No inventes artículos, numerales, requisitos ni valores técnicos.

8. Cuando no puedas comprobar una disposición, escribe:
   "Referencia normativa pendiente de verificación".

FASE 3. MATRIZ DE VERIFICACIÓN

Presenta una tabla con las columnas:

- Aspecto por verificar.
- Evidencia documental y ubicación.
- Disposición normativa y artículo verificable.
- Resultado preliminar: documentado, pendiente o información
  insuficiente.
- Acción de verificación recomendada.

CRITERIOS DE CALIDAD

- No confundas una observación de la bitácora con una certificación
  de cumplimiento.
- No atribuyas al inspector anotaciones realizadas por el perito
  o los corresponsables.
- No infieras características constructivas a partir de texto
  ilegible.
- No declares cumplimiento o incumplimiento sin evidencia suficiente.
- Señala expresamente las limitaciones de la revisión.

Finaliza con tres preguntas que un DRO debería resolver antes de
utilizar los resultados en una revisión profesional.
```

## 5. Consulta normativa en vivo

Una vez obtenida la matriz preliminar, seleccionar un aspecto técnico
con los participantes.

### Segunda instrucción para ChatGPT

```text
De la matriz anterior, selecciona el aspecto técnico que tenga
mayor potencial para una verificación normativa.

Antes de citar artículos, identifica qué reglamento corresponde
a la ubicación del proyecto y qué información falta para
determinar su aplicabilidad.

Si se proporciona un reglamento oficial, localiza las disposiciones
relacionadas con ese aspecto y presenta:

1. Nombre del instrumento normativo.
2. Artículo o apartado exacto.
3. Requisito identificado.
4. Evidencia disponible en el proyecto.
5. Información faltante para evaluar el requisito.
6. Resultado preliminar.

No inventes referencias. Si no puedes verificar un artículo,
indícalo expresamente.

No emitas un dictamen de cumplimiento normativo.
```

### Verificación por el instructor

Abrir el reglamento oficial y comprobar con el grupo:

- Que el instrumento corresponde a la jurisdicción del proyecto.
- Que el artículo citado existe.
- Que el texto se interpretó en su contexto.
- Que el requisito realmente corresponde al aspecto revisado.
- Que la documentación disponible permite o no evaluarlo.

**Nota:** Antes del taller debe identificarse el municipio del proyecto B y obtenerse la fuente normativa oficial correspondiente. La IA no debe asumir que un reglamento estatal o municipal resulta aplicable sin comprobarlo.

## 6. Actividad participativa

**Pregunta para el grupo:**

> Si la IA identifica un requisito normativo y encuentra información relacionada en el plano estructural, ¿podemos afirmar que la obra cumple con ese requisito?

Orientar la discusión hacia tres niveles:

1. **Identificación:** la IA localizó un posible requisito.
2. **Verificación documental:** existe información del proyecto que puede contrastarse.
3. **Comprobación profesional:** se requiere validar la normativa, los documentos y, cuando corresponda, la ejecución física.

## 7. Resultado esperado

Al finalizar, los participantes habrán observado cómo utilizar IA para:

- Organizar evidencia documental.
- Identificar aspectos que ameritan revisión.
- Orientar consultas normativas.
- Elaborar una matriz preliminar de verificación.
- Reconocer incertidumbres y referencias no comprobadas.

**Mensaje de cierre:** El valor profesional de la IA no consiste en declarar que una obra cumple, sino en facilitar una revisión más organizada, trazable y crítica.
```
