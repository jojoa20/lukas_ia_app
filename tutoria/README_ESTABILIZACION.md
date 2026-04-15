# Lukas AI - Tutoria & Roadmap

Esta carpeta contiene la documentación y el plan de acción extraído de la rama `profesor` del repositorio original.

## Estado Actual de la Estabilización (Fase 1 completada)

1.  **Seguridad**: 
    - Se han separado las llaves de Supabase en `.env`.
    - Se ha eliminado el uso de `service_role` en el cliente.
2.  **Rendimiento**:
    - Se ha inyectado `"use client"` en componentes pesados (`D3`, `ElevenLabs`).
    - Se ha configurado `next/dynamic` para evitar bloqueos de SSR.
3.  **Backend & IA**:
    - Integración real con OpenAI Assistant.
    - Llamada a funciones (`get_finscore`, `create_meta`, `add_gasto_hormiga`).
    - Memoria a largo plazo con `pgvector` lista para usar.
4.  **Endpoints MVP**:
    - Se han creado los 8 endpoints críticos en `src/app/api/`.

## Instrucciones para el Usuario

- **Variables de Entorno**: Asegúrate de configurar las variables en el archivo `.env`.
- **Base de Datos**: Debes ejecutar el SQL para habilitar `pgvector` y crear las tablas de `chat_memories` si no están en tu instancia de Supabase.
- **Autenticación**: El sistema ya no usa `dummyUserId`. Debes estar autenticado para que las llamadas a la API funcionen.

Para más detalles, consulta los archivos `mejoras-repo.md` y `endpoints.md` en la rama `profesor` del repositorio central.
