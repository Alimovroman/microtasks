import React, {FC} from 'react';

type FooterProps = {
    contacts: string
}
const Footer: FC<FooterProps> = ({contacts}) => {
    return (
        <div>
            {contacts}
        </div>
    );
};

export default Footer;