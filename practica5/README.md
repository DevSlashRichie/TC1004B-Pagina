# Resumen de Diseño

## Usuario objetivo
Este prototipo está diseñado para dos perfiles de usuario principales:

1.  **Usuarios Residenciales:** Personas y familias que desean una medida de seguridad simple y accesible en su hogar. El sistema utiliza un pequeño sensor que puede colocarse fácilmente en áreas clave como cocinas (cerca de estufas de gas), cuartos de lavado (cerca de calderas o boilers) para detectar fugas de gas a tiempo.

2.  **Personal de Mantenimiento y Seguridad:** Supervisores o administradores de instalaciones en edificios comerciales o residenciales que necesitan una herramienta centralizada para monitorear la calidad del aire y los niveles de gas en múltiples ubicaciones de forma remota.

## Problema que resuelve la interfaz
La interfaz resuelve la necesidad de tener una visión centralizada y en tiempo real del estado de múltiples sensores de gas. Permite a los usuarios identificar rápidamente qué sensores están en niveles normales, cuáles presentan una advertencia y cuáles han alcanzado un nivel crítico que requiere atención inmediata. Facilita el acceso al historial de lecturas para análisis y la toma de decisiones informadas en caso de una alerta.

## Principales decisiones de diseño
- **Navegación Clara y Jerárquica:** La aplicación se divide en cuatro vistas principales (Lista de Sensores, Detalle, Historial y Alerta Crítica) para una navegación intuitiva. El usuario siempre empieza con una vista general y puede profundizar para obtener más detalles.
- **Codificación por Colores:** Se utiliza un sistema de colores simple y universal (verde para 'OK', rojo para 'ALERTA') para que el estado de cada sensor sea identificable de un vistazo. La pantalla de alerta crítica utiliza un fondo rojo intenso para comunicar urgencia de manera efectiva.
- **Feedback Inmediato:** Las acciones del usuario, como hacer clic en un sensor, tienen una respuesta visual inmediata, mostrando la pantalla de detalle correspondiente. La barra de progreso en la vista de detalle proporciona una representación visual rápida del nivel de gas.
- **Priorización de la Información:** La pantalla de detalle muestra la información más relevante en la parte superior (nivel de gas actual), mientras que la información secundaria (historial) es accesible a través de un botón de "Más información".
- **Simplicidad en Alertas:** La pantalla de alerta crítica es minimalista y se centra en la advertencia y las acciones a tomar ("Ya fue atendido", "Más información"), evitando distracciones en un momento potencialmente estresante.
