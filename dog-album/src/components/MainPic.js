import React, { useContext } from 'react'
import {AlbumContext} from '../App'

const MainPic = () => {

    const context = useContext(AlbumContext)

    return (
        <div>
            {
                context.dog ===null ? <div style={{height :'34rem'}} className="d-flex justify-content-center align-items-center"><i class="far fa-image fa-9x"></i></div> : <img src={context.dog} alt={context.dog} style={{height : '34rem'}} className="img-fluid" />
            }
        </div>
    )
}

export default MainPic
