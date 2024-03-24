# ZuelFrend  
#### (1.0.5)

## Multiplica y vencerás!

### ¿Qué es ZuelFrend?
Hola! Somos ZuelFrend.  
  
Brindamos un sistema de apoyo para los profesores y alumnos de todo el mundo, sean de cualquier grado o sistema; nuestro enfoque es en globalizar la educación.  
  
  ZuelFrend provee un sistema de materiales de estudio: sean clases, textos, guías, prácticas u otro, podrás comprar, vender, brindar y recibir los materiales que necesites!  
  ### ¿Cómo funciona?
  ZuelFrend es un proyecto de ReactJS generado a partir de la idea de un e-commerce. Tal como todos, posee productos, categorías, un carrito y órdenes de compra.  
  ### Productos
  "pages/itemList/ItemListContainer.jsx":
  ```javascript
   const [ products , setProducts ] = useState([]);
  ```
  ### Categorías
  "pages/itemList/ItemListContainer.jsx":
  ```javascript
   const {category} = useParams();
  ```
  ### Carrito 
  "context/CartContext.jsx"
   ```javascript
  export const CartContext = createContext();
  ```
  ### Órdenes de compra
  "pages/checkout/CheckoutContainer.jsx"
   ```javascript
    let order = { 
      buyer: userInfo,
      items: cart,
      total: getTotalPrice()
    }
  ```
 - Luego, se trabaja con ello a partir de herramientas como Firestore, mediante colecciones y documentos.

### IMPORTANTE: Credenciales a configurar del proyecto

- VITE_API_KEY
- VITE_AUTH_DOMAIN
- VITE_PROJECT_ID
- VITE_STORAGE_BUCKET
- VITE_MESSAGING_SENDER_ID
- VITE_APP_ID