# Clase 16/09/2025 (Presencial en Campus)

## Testing

### Que es?
- Probar que nuestro sistema haga lo esperado, que funcione como nosotros queremos.
- Hacer control de calidad 
- QC (Quality Control) aka Testing
- El **objetivo**: Encontrar BUGS
- Se contrastan los resultados esperados contra los resultados obtenidos
- Demostrar que mi programa funciona
- Probamos el camino feliz del caso de uso y todos los otros caminos que salgan, forzamos el error

#### Cobertura
Porcentaje de lineas ejecutadas al correr un test.
Esto no garantiza que la linea de codigo funciona correctamente para todos los escenarios posibles
Un alto porcentaje de cobertura no es lo mismo q perfeccion

#### Objetivo: Buscar que mi sistema sea *Good Enough*
Nunca podemos probar que no tenga bugs

### Como determino que camino probar?
- Nos basamos en los requerimientos (sus criterios de aceptacion)
  - Los requerimientos buenos tienen criterios de aceptacion, es decir lo q me da la pauta de si esta cumplido o no
- Una vez q testeo un camino no vuelvo a testear el mismo pero con otro test distinto
- Clase de test VS Caso de test.
  - Clase de test: Camino generico, todos los tests q testeen el mismo camino son **equivalentes**
  - Caso de test: Instancia del camino

### Como armo los tests?

