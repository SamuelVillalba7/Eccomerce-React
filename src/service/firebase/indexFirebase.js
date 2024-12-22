// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { writeBatch, documentId, addDoc,collection, getDocs, getFirestore,query,where, doc, getDoc} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD347_mDiei6AqK9cJgQDOq40ATuLjxyhM",
  authDomain: "eccomercecoder.firebaseapp.com",
  projectId: "eccomercecoder",
  storageBucket: "eccomercecoder.firebasestorage.app",
  messagingSenderId: "413659243533",
  appId: "1:413659243533:web:d23a62319214d25f28a144"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)




// export async function getProducts(){
//     const ref= collection(db,"products")
//    getDocs(ref)
//    .then((querySnapchot)=>{
//         const products = querySnapchot.docs.map((item)=>{
//             return {id:item.id, ...item.data()}
//         })
//         return products
//    })
//    .catch((err)=>{
//     console.log(err)
//    })

// }

export async function findByCategoryFB(idCategory) {
    try {
        const ref = query(
            collection(db, "products"),
            where("id_category", "==", idCategory)
        );
        const querySnapshot = await getDocs(ref);
        const products = querySnapshot.docs.map((item) => ({
            id: item.id,
            ...item.data(),
        }));

        // console.log()
        return products; // Devuelve el array de productos
    } catch (err) {
        console.error("Error al obtener los productos por categoría:", err);
        throw err;
    }
}

export async function loginFB({mail, password}) {
    try {
        // Crear referencia a la colección 'users'
        const usersRef = collection(db, "users");

        // Consulta Firestore para buscar el usuario por email y password
        const userQuery = query(
            usersRef,
            where("mail", "==", mail),
            where("password", "==", password)
        );

        const querySnapshot = await getDocs(userQuery);

        // Verificar si se encontraron resultados
        if (!querySnapshot.empty) {
            const userDoc = querySnapshot.docs[0]; // Obtener el primer documento encontrado
            return { id: userDoc.id, ...userDoc.data() }; // Devolver el usuario completo
        } else {
            throw new Error("Usuario no encontrado o credenciales inválidas");
        }
    } catch (error) {
        console.error("Error al realizar el login:", error);
        throw error;
    }
}


export async function addUserFB(userData) {
    try {
        // Validar que los datos básicos estén presentes
        const { mail, password, name } = userData;
        if (!mail || !password || !name) {
            throw new Error("Faltan datos obligatorios: email, password, name");
        }

        // Crear referencia a la colección 'users'
        const usersRef = collection(db, "users");

        // Agregar el usuario a Firestore
        const userDoc = await addDoc(usersRef, userData);

        // Devolver el ID del nuevo documento
     
        return { id: userDoc.id, ...userData };
    } catch (error) {
        console.error("Error al registrar el usuario:", error);
        throw error;
    }
} 




export async function findProductByIdFB(id) {
    try {
        const ref = doc(db, "products", id);
        const snapshot = await getDoc(ref);
        if (snapshot.exists()) {
            return { id: snapshot.id, ...snapshot.data() };
        } else {
            const res = `No se encontró el producto con ID: ${id} `
            return res; // Si el producto no existe
        }
    } catch (err) {
        console.error("Error al obtener el producto:", err);
        throw err;
    }
}

export async function findCategoryByIdFB(id) {
    try {
        const ref = doc(db, "categories", id);
        const snapshot = await getDoc(ref);
        if (snapshot.exists()) {
            return { id: snapshot.id, ...snapshot.data() };
        } else {
            console.error("No se encontró la categoria con ID:", id);
            return null; // Si el producto no existe
        }
    } catch (err) {
        console.error("Error al obtener el producto:", err);
        throw err;
    }
}








export async function findAllProductsFB() {
    try {
        const ref = collection(db, "products");
        const querySnapshot = await getDocs(ref);
        const products = querySnapshot.docs.map((item) => {
            return { id: item.id, ...item.data() };
        });
        return products; // Devuelve el array de productos
    } catch (err) {
        console.error("Error al obtener los productos:", err);
        throw err; // Propaga el error si es necesario manejarlo
    }
}

export async function findAllCategoriesFB() {
    try {
        const ref = collection(db, "categories");
        const querySnapshot = await getDocs(ref);
        const categories = querySnapshot.docs.map((item) => {
            return { id: item.id, ...item.data() };
        });
        return categories; // Devuelve el array de productos
    } catch (err) {
        console.error("Error al obtener los productos:", err);
        throw err; // Propaga el error si es necesario manejarlo
    }
}


export async function createOrderFB({cart, getTotal, clearCart, userAux}){
    const total = getTotal();
  
    try {
        const objOrder = {
            buyer: {
                name: userAux.name,
                lastName: userAux.lastname,
                phone: userAux.phone,
                email: userAux.mail
            },
            items: cart,
            total,
            date: new Date()
        };

        // Obtener IDs de productos del carrito
        const ids = cart.map((item) => item.id);
        const productRef = collection(db, "products");

        // Consultar Firestore para obtener los productos en el carrito
        const productsAddedFromFirestore = await getDocs(
            query(productRef, where(documentId(), "in", ids))
        );

        const { docs } = productsAddedFromFirestore;

        const outOfStock = [];
        const batch = writeBatch(db);

        // Verificar stock y preparar actualizaciones en lote
        docs.forEach((doc) => {
            const dataDoc = doc.data();
            const stockDb = dataDoc.stock;

            const productAddedToCart = cart.find((prod) => prod.id === doc.id);
            const prodQuantity = productAddedToCart.quantity;

            if (stockDb >= prodQuantity) {
                batch.update(doc.ref, { stock: stockDb - prodQuantity });
            } else {
                outOfStock.push({ id: doc.id, ...dataDoc });
            }
        });

        if (outOfStock.length === 0) {
            // Ejecutar el batch y agregar la orden
            await batch.commit();
            const orderRef = collection(db, "orders");
            const orderAdded = await addDoc(orderRef, objOrder);

            const res= `El id de su orden es: ${orderAdded.id}`
            clearCart(); // Limpiar el carrito
            return res

        } else {
            const res= `Hay productos sin stock: ${outOfStock}`
            return res
        }
    } catch (error) {
        console.error("Error al crear la orden:", error);
    }
}






