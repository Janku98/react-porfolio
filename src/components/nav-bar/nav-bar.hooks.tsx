import { useState } from 'react';

const NavBarHooks = () => {

    const [itemSelected, setItemSelected]= useState(1)

    const selectItem = (value:number) => {
        if(value){
            setItemSelected(value)
        }
    }

    return{itemSelected, selectItem}
}


export default NavBarHooks;