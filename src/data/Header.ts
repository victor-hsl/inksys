import { Header } from "../types/Header";
import { headersCollection } from "../connections/FirebaseConnection";
import { doc, getDoc, query, where, updateDoc } from "@firebase/firestore";

export const getHeader = async (id: string) => {
    const docRef = doc(headersCollection, id);
    const docSnap = await getDoc(docRef);
    let header: Header = {docId: 'N/A', title: '', subtitle: ''};
    if(docSnap.exists()){
        header = {docId: docSnap.id, title: docSnap.data().title, subtitle: docSnap.data().subtitle};
    }
    return header;
}

export const updateHeader = async (payload: Header) => {
    const docRef = doc(headersCollection, payload.docId);

    if(docRef){
        try {
            await updateDoc(docRef, payload);
        } catch (e) {
            console.log("Erro ao atualizar:"+ e);
        }
    }
}