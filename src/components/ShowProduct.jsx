import { useParams , useNavigate } from "react-router-dom"


const ShowProduct = () => {

  const myParams = useParams()

  const navigate = useNavigate()
  console.log(myParams)

  if (+myParams.id === 404) {
    return (
      <div className="my-2 alert alert-dismissible alert-danger">
         <h1>Page not found</h1>
      </div>
     
    )
  }

  const redirectToHome = () => {
    navigate('/')
  }
  const redirectToAbout = () => {
    navigate('/about')
  }
  const redirectToContact = () => {
    navigate('/contact')
  }

  return (
    <>
      <div className=" my-2 alert alert-dismissible alert-info " >
        <h1>Product</h1>
        <div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, amet?</p>
          
        </div>
        

       
       
      </div>
      <button onClick={redirectToHome} className="btn btn-success mx-2 my-5">Back To Home</button>
      <button onClick={redirectToAbout} className="btn btn-success mx-2 my-5">Back To About</button>
      <button onClick={redirectToContact} className="btn btn-success mx-2 my-5">Back To Contact</button>
    </>
  );
};

export default ShowProduct;
