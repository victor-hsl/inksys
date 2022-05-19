import {Post} from '../model/Post'
import { postCollection } from '../util/FirebaseConnection'
import { getDocs } from 'firebase/firestore'

export const getPosts = async () => {
    let list : Post[] = [];
    const postDocs = await getDocs(postCollection);
    postDocs.docs.forEach((postDoc) => {
        list.push({
            id: postDoc.id,
            title: postDoc.data().title,
            description: postDoc.data().description,
            duration: postDoc.data().duration,
            material: postDoc.data().material,
            category: postDoc.data().category,
            urlPhoto: postDoc.data().urlPhoto,
            date: postDoc.data().date
        });
    });
    return list;
}
