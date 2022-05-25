import * as C from './styles';
import {Link} from 'react-router-dom'
import {ReactComponent as ProfileIcon} from '../../../assets/svg/profile.svg'
import {ReactComponent as BookIcon} from '../../../assets/svg/book.svg'
import {ReactComponent as MailIcon} from '../../../assets/svg/mail.svg'

type Props = {
    title: string;
    description: string;
    icon: string;
    path: string;
    active: boolean
}

export const SidebarItem = ({title, description, icon, path, active} : Props) => {
    return (
        <C.Container className="">
            <Link to={path}>
                <C.Info>
                    <C.Title>
                        {title}
                    </C.Title>
                    <C.Description>
                        {description}
                    </C.Description>
                </C.Info>
                <C.IconArea active={active}>
                    {icon === 'profile' &&
                        <ProfileIcon fill="white" width={24} height={24} />
                    }
                    {icon === 'book' &&
                        <BookIcon fill="white" width={24} height={24} />
                    }
                    {icon === 'mail' &&
                        <MailIcon fill="white" width={24} height={24} />
                    }
                </C.IconArea>
                <C.Point active={active}></C.Point>
            </Link>
        </C.Container>
    );
}