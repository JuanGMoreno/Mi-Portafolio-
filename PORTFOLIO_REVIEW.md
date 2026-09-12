# Revisión y mejoras pendientes del portafolio

Fecha de revisión: 11 de septiembre de 2026.

## Estado general

El portafolio tiene una identidad visual sólida y consistente. Las secciones comparten correctamente la paleta oscura, los acentos cyan, la tipografía técnica, las superficies, los bordes y el sistema de espaciado.

La secuencia actual —Hero, Sobre mí, Tecnologías, Proyectos y Experiencia— es comprensible y construye una narrativa profesional progresiva.

La sección de experiencia puede considerarse terminada a nivel visual, responsive y técnico.

## Mejoras prioritarias

### 1. Crear la sección de contacto

**Prioridad:** alta.

El menú principal y el botón «Contáctame» apuntan a `#contact`, pero la página todavía no contiene una sección con ese identificador.

La sección debería:

- Incluir correo electrónico y enlaces profesionales.
- Mantener la misma identidad técnica del resto del portafolio.
- Ofrecer una llamada a la acción clara.
- Tener el atributo `id="contact"`.
- Funcionar correctamente en español e inglés.
- Cerrar visualmente la narrativa del sitio.

**Criterio de finalización:** tanto el enlace del menú como el botón del Hero desplazan correctamente hasta una sección de contacto visible y funcional.

### 2. Actualizar los CV

**Prioridad:** alta.

Los PDF en español e inglés deben coincidir con la información presentada en el portafolio.

Fechas correctas:

- Freelance: enero de 2023 a enero de 2024 — 1 año.
- Soluciones Nimrod: junio de 2025 a julio de 2026 — 1 año y 1 mes.
- Ingeniería en Ciencias Informáticas: formación terminada en julio de 2026.

También se debe eliminar cualquier referencia a Soluciones Nimrod como empleo actual y cualquier indicación de que la carrera continúa «en curso».

**Criterio de finalización:** las fechas, duraciones, formación y estado laboral son idénticos en el sitio y en ambos CV.

### 3. Equilibrar la cuadrícula de proyectos

**Prioridad:** media.

En escritorio, los cuatro proyectos forman actualmente una fila de tres tarjetas y una segunda fila con una sola tarjeta. Esto deja demasiado espacio vacío.

Opciones recomendadas:

- Utilizar una cuadrícula de dos columnas y dos filas.
- Crear una composición editorial donde Crisal tenga mayor protagonismo y los demás proyectos completen el espacio de forma equilibrada.

La alternativa 2 × 2 es la solución más sencilla y predecible.

**Criterio de finalización:** las cuatro tarjetas ocupan el espacio disponible de manera equilibrada en escritorio, sin perjudicar la presentación móvil.

### 4. Evitar el scroll interno en Tecnologías

**Prioridad:** media.

La sección de tecnologías utiliza una altura fija junto con `overflow-y-auto`. En pantallas de poca altura puede aparecer un scroll interno dentro del scroll principal.

Se recomienda:

- Sustituir la altura fija por una altura mínima.
- Permitir que la sección crezca según su contenido.
- Conservar la apariencia de sección completa en pantallas amplias.

**Criterio de finalización:** la sección es completamente visible y solo utiliza el desplazamiento general de la página.

## Mejoras opcionales

### Enlaces directos desde Experiencia

Los enlaces «Crisal · BK-Studio» y «Taskrod» conducen actualmente al inicio de Proyectos. Se podrían añadir identificadores a las tarjetas para enlazar directamente al proyecto correspondiente.

### Orden de las secciones

Para priorizar la lectura de reclutadores, se puede evaluar colocar Experiencia antes de Proyectos. No es obligatorio: la secuencia actual también es coherente porque primero muestra capacidades y proyectos, y después los organiza dentro de la trayectoria.

### Nomenclatura interna

Renombrar:

- `Experiencie.tsx` a `Experience.tsx`.
- El namespace de traducciones `Experiencie` a `Experience`.

Este cambio no afecta a la interfaz, pero mejora la claridad del código.

## Aspectos que ya funcionan bien

- Diseño responsive sin desbordamiento horizontal.
- Navegación principal clara, salvo el destino pendiente de Contacto.
- Jerarquía correcta de títulos y contenidos.
- Identidad visual consistente entre secciones.
- Imágenes de proyectos con carga diferida.
- Modal de detalles de proyectos claro y funcional.
- Enlaces externos con apertura segura en una pestaña nueva.
- Enlace para saltar al contenido principal.
- Sección de experiencia legible y visualmente equilibrada.
- Traducciones disponibles en español e inglés.
- Compilación de producción completada correctamente.

## Estado de la sección de experiencia

La sección de experiencia está terminada.

Sus puntos fuertes son:

- Línea temporal fija a la izquierda.
- Tarjetas amplias que aprovechan el espacio disponible.
- Distribución en columnas en escritorio para reducir la altura.
- Fechas y duraciones claramente visibles.
- Relación explícita entre cada experiencia y sus proyectos.
- Adaptación correcta a móvil y escritorio.
- Estética técnica coherente con el resto del portafolio.

Antes de publicar, solo se debe comprobar que todas las afirmaciones profesionales sean exactas y actualizar los CV para eliminar cualquier contradicción.

## Orden recomendado de trabajo

1. Crear la sección de contacto.
2. Actualizar los CV en español e inglés.
3. Equilibrar la cuadrícula de proyectos.
4. Eliminar el scroll interno de Tecnologías.
5. Añadir enlaces directos a proyectos desde Experiencia.
6. Corregir la nomenclatura interna de `Experiencie`.
