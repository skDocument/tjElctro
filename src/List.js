import React from "react";


const List = ({data})=> {
    return(
        <tr>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.birthDate}</td>
        </tr>
    )
}


export default List;