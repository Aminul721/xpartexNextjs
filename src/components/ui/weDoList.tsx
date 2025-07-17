import Link from 'next/link'
import React from 'react'
interface ListItem {
  id: number | string;
  list: string;
}

interface PropsType {
  id: number | string;
  title: string;
  listMenu: ListItem[];
}
const WeDoList:React.FC<PropsType> = ({id, title, listMenu}) => {
  return (
    <div key={id}>
        <h4 className='text-h4 font-medium text-yellow-500 mb-4'>{title}</h4>
            <ul className="flex flex-col gap-2 mb-0">
            {
                listMenu.map(({id, list }) =>
                    <li key={id}>
                        <Link href={'#'} className='hover:text-yellow-600' aria-label='page link'>{list}</Link>
                    </li>
                )
            }
            </ul>
    </div>
  )
}

export default WeDoList