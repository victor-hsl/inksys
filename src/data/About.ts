
import { homePageCollection } from "../connections/FirebaseConnection";
import { doc, getDoc, updateDoc } from "@firebase/firestore";

export const getDescription = async () => {
    const docRef = doc(homePageCollection, "about");
    const docSnap = await getDoc(docRef);
    if(docSnap.exists()){
        return docSnap.data().description;
    }
}
