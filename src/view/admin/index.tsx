import * as C from './styles'
import { ReactNode } from 'react'
import AdminNav from './template/nav'
type Props = {
  children: ReactNode;
}

const Admin = ({children}: Props) => {
    return(
        <AdminNav/>
    );
};

export default Admin;