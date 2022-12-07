import '../css/info_help.css'


const Info_helps = (props) => {
 

  return (
    <>
  
            <div className="info_help">
                <div className="img">
                    <img src={require("../resources/"+ props.names +".png")} alt="" />
                </div>
                <div className="title">
                    <h1>{props.title}</h1>
                </div>
          
    </div>
    </>
  )
}

export default Info_helps

