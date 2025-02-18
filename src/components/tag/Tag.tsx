import Link from 'next/link';
import {FC} from 'react';

type PropsType = {
    tag: string
};

const Tag: FC<PropsType> = ({tag}) => {
    return (
        <div>
            <Link href={`/auth/recipes/tag/${tag}`}>{tag}</Link>
        </div>
    );
};

export default Tag;