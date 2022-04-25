import { ReactNode } from 'react'
import AdminNav from './template/nav'
import {Fragment} from 'react'
import './styles.css'
type Props = {
  children: ReactNode;
}

const Admin = ({children}: Props) => {
    return(
      <Fragment>
        <AdminNav/>
        {children}
      </Fragment>
    );
};

export default Admin;