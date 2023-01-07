import React, {FC} from 'react';

type HeaderProps = {
    title: string
}
const Header: FC<HeaderProps> = ({title}) => {
    return (
        <div>
            {<title></title>}
        </div>
    );
};

export default Header;