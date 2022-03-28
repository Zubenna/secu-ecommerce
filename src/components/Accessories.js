import React, {useState} from "react";

export const Accessories = () => {
    const [style, setStyle] = useState({display: 'none'});

    return (
        <div>
            <button className="h-12 px-2 font-bold text-white hover:bg-white hover:text-blue-800 hover:border-t"
                 onMouseEnter={e => {
                     setStyle({display: 'block'});
                 }}
                 onMouseLeave={e => {
                     setStyle({display: 'none'})
                 }}
            >Accessories
            </button>
             <div style={style} className="productbox" onMouseEnter={e => {
              setStyle({display: 'block'});
            }}
            onMouseLeave={e => {
              setStyle({display: 'none'})
            }}>
              
             
             </div>
        </div> 
    );

}

export default Accessories;
