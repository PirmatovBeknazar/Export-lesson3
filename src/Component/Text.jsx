

const Text = (props) => {
    const userYear = +props.date.getFullYear() 
    const nowYear = +new Date().getFullYear()

    return(
        <div>
            <main>
                <ul>
                    <li>
                        <h1>{props.userName}</h1>
                        <h4>{props.age}</h4>
                        <h1>{props.country}</h1>
                        <h4>{userYear}</h4>
                        <h3>{(nowYear - userYear) > 0 ? nowYear - userYear + " Years Ago" : "ushul jyly" } </h3>
                    </li>
                    
                </ul>
          
            </main>
        </div>
    )
}



export default Text