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
    base: `Actúa como asistente especializado en organización y análisis de documentación técnica para apoyar las actividades de un Director Responsable de Obra.`,
    indicacion: 'Enfoque específico de la asistencia',
    precision: ''
  },
  {
    id: 'contexto',
    titulo: '2. Contexto',
    base: `Se prepara una visita de supervisión de un proyecto de construcción. Se dispone de documentación técnica que debe utilizarse como referencia para organizar los aspectos por verificar.`,
    indicacion: 'Etapa de obra, actividad o situación de supervisión',
    precision: ''
  },
  {
    id: 'objetivo',
    titulo: '3. Objetivo',
    base: `Elaborar una lista preliminar de verificación de supervisión que permita organizar los aspectos técnicos que deberán revisarse durante la visita.`,
    indicacion: 'Prioridad o propósito particular de la visita',
    precision: ''
  },
  {
    id: 'tareas',
    titulo: '4. Tareas',
    base: `Identifica los requisitos expresamente documentados, conviértelos en puntos de verificación, relaciona cada punto con su fuente y propone la evidencia necesaria para documentar su revisión.`,
    indicacion: 'Elementos o verificaciones prioritarias',
    precision: ''
  },
  {
    id: 'entradas',
    titulo: '5. Entradas',
    base: `Utiliza exclusivamente los documentos técnicos adjuntos. Identifica el documento del que procede cada especificación.`,
    indicacion: 'Documentos y secciones que deberán priorizarse',
    precision: ''
  },
  {
    id: 'restricciones',
    titulo: '6. Restricciones',
    base: `No inventes especificaciones, dimensiones, resistencias ni materiales.

No declares cumplimiento o incumplimiento.

No incorpores requisitos normativos sin una fuente oficial proporcionada y verificada.

Identifica información insuficiente o ilegible.

No mezcles información de proyectos diferentes.`,
    indicacion: 'Restricciones adicionales',
    precision: ''
  },
  {
    id: 'formato',
    titulo: '7. Formato de salida',
    base: `Presenta una tabla con ID, elemento, requisito documentado, fuente, verificación propuesta, evidencia requerida, limitaciones y estado.

Utiliza inicialmente el estado «Pendiente de revisión».`,
    indicacion: 'Columnas o criterios de organización adicionales',
    precision: ''
  },
  {
    id: 'calidad',
    titulo: '8. Criterios de calidad',
    base: `Cada punto debe ser específico, verificable y estar respaldado por una fuente identificable.

Distingue los datos documentados de las recomendaciones de verificación.

Cuando no exista información suficiente, expresa la incertidumbre.`,
    indicacion: 'Criterios adicionales para evaluar el resultado',
    precision: ''
  }
])

const promptIntegrado = computed(() =>
  componentes.value
    .map((componente) => {
      const precision = componente.precision.trim()

      return [
        componente.titulo.toUpperCase(),
        componente.base,
        precision ? `Precisión adicional:\n${precision}` : ''
      ]
        .filter(Boolean)
        .join('\n\n')
    })
    .join('\n\n---\n\n')
)

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
  componentes.value.forEach((componente) => {
    componente.precision = ''
  })

  mensaje.value = 'Plantilla restablecida.'
}
</script>

<template>
  <div class="prompt-dro">
    <div class="prompt-introduccion">
      <h2>Construyamos un prompt profesional para el DRO</h2>

      <p>
        La plantilla contiene instrucciones profesionales preparadas.
        Completa únicamente las precisiones propuestas por los participantes.
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