import Link from "next/link";
import React from "react";
interface PropsType {
  id: number | string;
  title: string;
  desc: string;
  desc2: string;
  link: string;
}
const MockCard:React.FC<PropsType> = ({id, title, desc, desc2, link}) => {
    return (
        <div className="mock-item bg-white py-5 px-4" key={id}>
            <h3 className="text-h3 font-medium mb-3 text-black">{title}</h3>
            <p className="mb-3 text-black">{desc}</p>
            {desc2 && link && <p className="mb-3 text-black">{desc2} <Link href={'#'}>{link}</Link></p>}
        </div>
    )
};

export default MockCard;
