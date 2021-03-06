import { Info } from "../types/info";
import { infoCollection, db } from "../connections/FirebaseConnection";
import { doc, getDocs, setDoc, updateDoc } from "@firebase/firestore";

export const getInfos = async () => {
    let list : Info[] = [];
    const infoDocs = await getDocs(infoCollection);
    infoDocs.docs.forEach((infoDoc) => {
        list.push({
            id: infoDoc.id,
            title: infoDoc.data().title,
            description: infoDoc.data().description
        });
    });
    return list;
}

export const insertInfo = async (novo: Info) => {
    const infoRef = doc(infoCollection)
    try {
        await setDoc(infoRef, {
            title: novo.title,
            description: novo.description
        })
    } catch (e) {
        console.log("Erro ao inserir: "+ e);
    }
}

export const updateInfo = async (payload: Info) => {
    const docRef = doc(infoCollection, payload.id);

    if(docRef){
        try {
            await updateDoc(docRef, payload);
        } catch (e) {
            console.log("Erro ao atualizar:"+ e);
        }
    }
}