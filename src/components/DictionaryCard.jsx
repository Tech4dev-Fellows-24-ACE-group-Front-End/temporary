
function DictionaryCard(props) {
  return (
    <>
        <div className="container">
            <div className="top">
                <h1>{props.title}</h1>
            </div>
            
            <div className="btm">
                <p>{props.desc}</p>
            </div>
            
        </div>
    </>
  )
}

export default DictionaryCard