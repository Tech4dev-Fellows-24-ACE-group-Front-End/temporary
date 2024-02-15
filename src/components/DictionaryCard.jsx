
function DictionaryCard(props) {
  return (
    <>
        <div className="container">
          <div className="inner-content">
          <div className="top">
                <h1 className="title">{props.title}</h1>
            </div>
            
            <div className="btm">
                <p className="description">{props.desc}</p>
            </div>
          </div>
            
        </div>
    </>
  )
}

export default DictionaryCard