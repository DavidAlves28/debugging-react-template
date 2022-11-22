import React from 'react'
import  {Comentario}  from './styled'

export default function Comentar(props) {
    console.log(props.comentarioDoPost)
    return (
        <Comentario>
            <input value={props.comentario} onChange={props.onChangeComentario} placeholder="Adicionar comentario" />
            <button onClick={props.adicionaComentario} > Post</button>
            <p>{props && props.comentarioDoPost}</p>
            <p>{props && props.comentarioDoPost}</p>
        
        </Comentario>
    )
}
