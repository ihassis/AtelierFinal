function CoreConcept({image,titre,description}) {
    return (
        <li>
               <img src={image} alt="uneimage" width={100} />
               <p>{titre}</p>
               <p>{description}</p>  
        </li>
    )
}
export default CoreConcept;
