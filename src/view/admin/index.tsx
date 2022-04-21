import * as C from './styles'
import { ReactNode } from 'react'
import AdminNav from './template/nav'
import AdminContent from './template/content'
import Tabs from './template/tabs'
import {Fragment} from 'react'
type Props = {
  children: ReactNode;
}

const Admin = ({children}: Props) => {
    return(
      <Fragment>
        <AdminNav/>
        <Tabs/>
        <AdminContent children/>
      </Fragment>
    );
};

export default Admin;