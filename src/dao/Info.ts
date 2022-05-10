import { Info } from "../model/Info";
import { infoCollection } from "../util/FirebaseConnection";
import { doc, getDocs, setDoc } from "@firebase/firestore";

export const getInfos = async () => {
    let list : Info[] = [];
    const infoDocs = await getDocs(infoCollection);
    infoDocs.docs.forEach((infoDoc) => {
        list.push({
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