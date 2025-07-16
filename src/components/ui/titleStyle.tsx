import React from "react";
interface PropsType {
  id?: number | string;
  img?: string | any;
  title?: string;
  desc?: string;
}
const TitleStyle:React.FC<PropsType> = ({title, desc}) => {
    return (
        <div className='text-center max-w-[50rem] mx-auto mb-8'>
            <h2 className='text-h2 mb-4 lg:mb-5'>{title}</h2>
            <p>{desc}</p>
        </div>
    )
};

export default TitleStyle;
