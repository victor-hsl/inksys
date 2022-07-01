import * as C from './styles';
import {Link} from 'react-router-dom'
import {ReactComponent as User} from '../../../assets/svg/user-solid.svg'
import {ReactComponent as Lamp} from '../../../assets/svg/lightbulb.svg'
import {ReactComponent as Calendar} from '../../../assets/svg/calendar.svg'
import {ReactComponent as At} from '../../../assets/svg/at-solid.svg'
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
                    {icon === '@' &&
                        <At fill="white" width={24} height={24} />
                    }
                    {icon === 'person' &&
                        <User fill="white" width={24} height={24} />
                    }
                    {icon === 'date' &&
                        <Calendar fill="white" width={24} height={24} />
                    }
                    {icon === 'lamp' &&
                        <Lamp fill="white" width={24} height={24} />
                    }
                </C.IconArea>
                <C.Point active={active}></C.Point>
            </Link>
        </C.Container>
    );
}