import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase/firebaseConfig"

export async function getProducts() {
  const productsCollection = collection(db, "products")
  const snapshot = await getDocs(productsCollection)

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }))
}
