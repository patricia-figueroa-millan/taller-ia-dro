<script setup lang="ts">
import { computed, ref } from 'vue'

interface ComponentePrompt {
  id: string
  titulo: string
  base: string
  indicacion: string
  precision: string
}

const componentes = ref<ComponentePrompt[]>([
  {
    id: 'rol',
    titulo: '1. Rol',
    base: `Actúa como asistente especializado en organización y análisis de documentación técnica para apoyar las actividades de un Director Responsable de Obra.

  Tu función es preparar instrumentos de trabajo para revisión profesional. No debes sustituir el juicio técnico del DRO ni emitir dictámenes de cumplimiento.`,
    indicacion: 'Enfoque específico de la asistencia',
    precision: ''
  },
  {
    id: 'contexto',
    titulo: '2. Contexto',
    base: `Se prepara una visita de supervisión de un proyecto de construcción ubicado en el estado de Colima, México.

  El DRO cuenta con documentación técnica del proyecto y necesita transformar la información disponible en una lista de verificación específica, organizada y trazable.`,
    indicacion: 'Etapa de obra, actividad o situación de supervisión',
    precision: ''
  },
  {
    id: 'objetivo',
    titulo: '3. Objetivo',
    base: `Elaborar una lista preliminar de verificación de supervisión que pueda utilizarse durante una visita de obra y actualizarse posteriormente con observaciones y evidencias.`,
    indicacion: 'Prioridad o propósito particular de la visita',
    precision: ''
  },
  {
    id: 'tareas',
    titulo: '4. Tareas',
    base: `1. Identifica especificaciones y requisitos técnicos expresamente documentados que sean relevantes para la supervisión.

  2. Convierte cada requisito en un punto concreto de verificación.

  3. Relaciona cada punto con su documento de origen.

  4. Propón el tipo de evidencia que permitiría documentar su revisión.

  5. Distingue entre verificaciones visuales, documentales y aquellas que requieren medición, ensayo o inspección especializada.

  6. Identifica información insuficiente o ilegible que impida formular una verificación específica.

  7. Organiza los resultados para que el DRO pueda utilizarlos durante una visita.`,
    indicacion: 'Elementos o verificaciones prioritarias',
    precision: ''
  },
  {
    id: 'entradas',
    titulo: '5. Entradas',
    base: `Analiza exclusivamente los documentos adjuntos, que pueden incluir planos arquitectónicos, planos estructurales y fragmentos de memoria de cálculo.

  Identifica claramente cada documento utilizado.`,
    indicacion: 'Documentos y secciones que deberán priorizarse',
    precision: ''
  },
  {
    id: 'restricciones',
    titulo: '6. Restricciones',
    base: `No inventes dimensiones, resistencias, materiales, especificaciones ni procedimientos constructivos.

  No incorpores requisitos normativos que no estén respaldados por una fuente normativa proporcionada y verificada.

  No declares que un elemento cumple o incumple.

  No confundas una especificación del proyecto con una obligación normativa.

  No supongas que una fotografía o inspección visual permite comprobar características ocultas.

  Si una especificación no puede leerse con suficiente certeza, indícalo y solicita revisar el documento original.

  No mezcles información de proyectos diferentes.`,
    indicacion: 'Restricciones adicionales',
    precision: ''
  },
  {
    id: 'formato',
    titulo: '7. Formato de salida',
    base: `Genera una tabla con las columnas:

  - ID.
  - Elemento o actividad.
  - Requisito documentado.
  - Fuente específica.
  - Verificación propuesta.
  - Tipo de evidencia requerida.
  - Limitaciones de la verificación.
  - Estado.

  Utiliza inicialmente el estado «Pendiente de revisión».

  Al finalizar, incluye una sección titulada «Información adicional necesaria», con los documentos o datos que permitirían completar la lista.`,
    indicacion: 'Columnas o criterios de organización adicionales',
    precision: ''
  },
  {
    id: 'calidad',
    titulo: '8. Criterios de calidad',
    base: `Cada punto de verificación debe estar vinculado con información identificable en los documentos.

  La referencia a la fuente debe ser suficientemente precisa para localizarla en el original.

  Los puntos deben ser específicos, verificables y útiles para una visita de supervisión.

  Separa los datos documentados de las recomendaciones de verificación.

  Cuando la evidencia sea insuficiente, expresa la incertidumbre en lugar de completar información mediante suposiciones.`,
    indicacion: '¿Qué otras comprobaciones debería realizar la IA antes de entregar el instrumento de supervisión?',
    precision: ''
  }
])

const promptIntegrado = computed(() =>
  componentes.value
    .map((componente) => {
      const precision = componente.precision.trim()

      return [
        componente.titulo.toUpperCase(),
        componente.base.replace(/^[ \t]+/gm, ''),
        precision ? `Precisión adicional:\n${precision}` : ''
      ]
        .filter(Boolean)
        .join('\n\n')
    })
    .join('\n\n---\n\n')
)
const sugerenciasValidacion = [
  'Comprueba que no existan contradicciones entre la tabla de verificación, los hallazgos y las conclusiones.',
  'Contrasta cada especificación técnica con su fuente documental e identifica las referencias que no puedan verificarse.',
  'Revisa especialmente las anotaciones manuscritas, abreviaturas, dimensiones y símbolos técnicos. Señala cualquier interpretación ambigua.',
  'Identifica posibles omisiones de aspectos relevantes presentes en los documentos proporcionados.',
  'Diferencia los datos expresamente documentados de las interpretaciones, inferencias y recomendaciones generadas.',
  'Si detectas contradicciones o interpretaciones dudosas, no las resuelvas mediante suposiciones. Indica qué documento debe revisarse.'
]

const sugerenciasSeleccionadas = ref<number[]>([])

function alternarSugerencia(indice: number) {
  const seleccionadas = sugerenciasSeleccionadas.value

  sugerenciasSeleccionadas.value = seleccionadas.includes(indice)
    ? seleccionadas.filter((i) => i !== indice)
    : [...seleccionadas, indice]
}

function incorporarSugerencias() {
  const componenteCalidad = componentes.value.find(
    (componente) => componente.id === 'calidad'
  )

  if (!componenteCalidad) return

  const instrucciones = sugerenciasSeleccionadas.value
    .sort((a, b) => a - b)
    .map((indice) => sugerenciasValidacion[indice])
    .join('\n\n')

  if (!instrucciones) return

  componenteCalidad.precision = [
    componenteCalidad.precision.trim(),
    instrucciones
  ]
    .filter(Boolean)
    .join('\n\n')

  sugerenciasSeleccionadas.value = []
  mensaje.value = 'Sugerencias incorporadas al prompt.'
}

const mensaje = ref('')

async function copiarPrompt() {
  try {
    await navigator.clipboard.writeText(promptIntegrado.value)
    mensaje.value = 'Prompt copiado correctamente.'
  } catch {
    mensaje.value = 'No fue posible copiar automáticamente. Selecciona el texto de la vista previa.'
  }
}

function restablecer() {
  sugerenciasSeleccionadas.value = []

  componentes.value.forEach(componente => {
    componente.precision = ''
  })

  mensaje.value = 'Plantilla restablecida'
}
</script>

<template>
  <div class="prompt-dro">
    <div class="prompt-introduccion">
      <h2>Mejoremos un prompt profesional para el DRO</h2>

      <p>
        Partimos de un prompt profesional previamente probado con
        documentación técnica de un proyecto real.
        A partir de los errores, contradicciones u omisiones identificados
        en la respuesta de la IA, incorporaremos las precisiones
        propuestas por los participantes.
      </p>
    </div>

    <div
      v-for="componente in componentes"
      :key="componente.id"
      class="prompt-componente"
    >
      <h3>{{ componente.titulo }}</h3>

      <div class="texto-base">
        <strong>Texto base preparado</strong>
        <p>{{ componente.base }}</p>
      </div>

      <div
      v-if="componente.id === 'calidad'"
      class="sugerencias-validacion"
    >
      <h4>Sugerencias de validación preparadas</h4>

      <p>
        Selecciona las instrucciones que correspondan a las
        aportaciones de los participantes. Estas sugerencias
        no forman parte del prompt B3 original.
      </p>

      <div
        v-for="(sugerencia, indice) in sugerenciasValidacion"
        :key="indice"
        class="sugerencia-item"
      >
        <label>
          <input
            type="checkbox"
            :checked="sugerenciasSeleccionadas.includes(indice)"
            @change="alternarSugerencia(indice)"
          />
          <span>{{ sugerencia }}</span>
        </label>
      </div>

      <button
        type="button"
        class="boton-secundario"
        :disabled="sugerenciasSeleccionadas.length === 0"
        @click="incorporarSugerencias"
      >
        Incorporar sugerencias seleccionadas
      </button>
    </div>

      <div class="campo-precision">
        <label :for="componente.id">
          Precisión del grupo
        </label>

        <textarea
          :id="componente.id"
          v-model="componente.precision"
          :placeholder="componente.indicacion"
          rows="3"
        />
      </div>
    </div>

    <section class="prompt-resultado">
      <h3>Vista previa del prompt profesional</h3>

      <p>
        El resultado integra el texto base y únicamente las precisiones
        completadas.
      </p>

      <pre>{{ promptIntegrado }}</pre>

      <div class="prompt-acciones">
        <button
          type="button"
          class="boton-principal"
          @click="copiarPrompt"
        >
          Copiar prompt
        </button>

        <button
          type="button"
          class="boton-secundario"
          @click="restablecer"
        >
          Restablecer plantilla
        </button>
      </div>

      <p
        v-if="mensaje"
        class="mensaje-estado"
        role="status"
      >
        {{ mensaje }}
      </p>
    </section>
  </div>
</template>

<style scoped>
.prompt-dro {
  max-width: 1000px;
  margin: 2rem auto;
  font-size: 16px;
}

.prompt-introduccion {
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
}

.prompt-introduccion h2 {
  margin-top: 0;
}

.prompt-componente {
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
}

.prompt-componente h3 {
  margin-top: 0;
  margin-bottom: 1rem;
}

.texto-base {
  padding: 1rem;
  border-left: 4px solid var(--vp-c-brand-1);
  background: var(--vp-c-bg-soft);
  border-radius: 6px;
}

.texto-base strong {
  color: var(--vp-c-brand-1);
}

.texto-base p {
  margin: 0.75rem 0 0;
  white-space: pre-line;
  line-height: 1.7;
}

.campo-precision {
  margin-top: 1.25rem;
}

.campo-precision label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.campo-precision textarea {
  width: 100%;
  min-height: 100px;
  padding: 0.85rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font: inherit;
  line-height: 1.5;
  resize: vertical;
}

.campo-precision textarea:focus {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}

.prompt-resultado {
  margin-top: 2rem;
  padding: 1.5rem;
  border: 2px solid var(--vp-c-brand-1);
  border-radius: 12px;
}

.prompt-resultado h3 {
  margin-top: 0;
}

.prompt-resultado pre {
  max-height: 500px;
  overflow: auto;
  padding: 1.25rem;
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  font-family: inherit;
  font-size: 0.95rem;
  line-height: 1.6;
}

.prompt-acciones {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1.5rem;
}

.prompt-acciones button {
  padding: 0.8rem 1.25rem;
  border-radius: 8px;
  font: inherit;
  font-weight: 600;
  cursor: pointer;
}

.boton-principal {
  background: var(--vp-c-brand-1);
  color: white;
}

.boton-secundario {
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
}

.prompt-acciones button:hover {
  opacity: 0.85;
}

.mensaje-estado {
  margin-top: 1rem;
  color: var(--vp-c-brand-1);
  font-weight: 600;
}

.sugerencias-validacion {
  margin-top: 1.25rem;
  padding: 1.25rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  background: var(--vp-c-bg-soft);
}

.sugerencias-validacion h4 {
  margin: 0 0 0.75rem;
  color: var(--vp-c-brand-1);
}

.sugerencias-validacion p {
  margin-bottom: 1rem;
  line-height: 1.6;
}

.sugerencia-item {
  margin-bottom: 0.85rem;
}

.sugerencia-item label {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  cursor: pointer;
  line-height: 1.5;
}

.sugerencia-item input {
  margin-top: 0.3rem;
  flex-shrink: 0;
  accent-color: var(--vp-c-brand-1);
}

.sugerencias-validacion button {
  margin-top: 0.75rem;
  padding: 0.8rem 1.25rem;
  border-radius: 8px;
  font: inherit;
  font-weight: 600;
  cursor: pointer;
}

.sugerencias-validacion button:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

@media (max-width: 640px) {
  .prompt-dro {
    font-size: 15px;
  }

  .prompt-componente,
  .prompt-resultado,
  .prompt-introduccion {
    padding: 1rem;
  }

  .prompt-acciones {
    flex-direction: column;
  }

  .prompt-acciones button {
    width: 100%;
  }
}
</style>