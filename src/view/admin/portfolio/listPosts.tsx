import Content from '../template/content'
import Tabs from '../template/tabs'
import {Fragment, useState, useEffect} from 'react'
import { getPosts } from '../../../dao/Post';
import { Post } from '../../../model/Post';
import { deleteDoc, doc } from 'firebase/firestore';
import { db, storage } from '../../../util/FirebaseConnection';
import styled from 'styled-components';
import { deleteObject, ref } from 'firebase/storage';


const Id = styled.p`
    text-decoration: line-through;
    color: #cbcbcb;

    :hover {
        text-decoration: none;
        color: #000;
    }
`

const ListPosts = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const getAll = async () => {
            setPosts(await getPosts());
        }
        try{
            getAll();
        } catch (error) {
            console.error("Erro ao buscar posts: ", error);
        }
    }, []);

    const deleteImage = async(id: string) => {
        const fileRef = ref(storage, 'Portfolio/'+id);
        await deleteObject(fileRef);
    }

    const deletePost = async (id: string) => {
        try{
            const postDoc = doc(db, "portfolio", id);
            await deleteDoc(postDoc);
            await deleteImage(id);
            document.location.reload();
        } catch (error) {
            console.error("Erro ao excluir arquivo: ", error);
        }
    }
    return(
        <Fragment>
            <Tabs title1="Novo" link1="/admin/portfolio/newpost" title2="Listar" link2="/admin/portfolio/listposts" active={1}/>
            <Content>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Titulo</th>
                            <th scope="col">Data</th>
                            <th scope="col">Estilo</th>
                            <th scope="col">Editar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((item, key) => (
                            <tr key={key}>
                                <td><Id>{item.id}</Id></td>
                                <td>{item.title}</td>
                                <td>{item.date}</td>
                                <td>{item.category}</td>
                                <td>
                                    <button className="botaoEsq btn btn-primary"><i className="bi bi-pencil-square"></i></button>
                                    <button className="botaoDir btn btn-danger" onClick={() => {deletePost(item.id)}}><i className="bi bi-trash3"></i></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Content>
        </Fragment>
    );
};

export default ListPosts;