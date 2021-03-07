import React, {useState,useEffect} from 'react';

const defaultImageSrc ='/img/add2.gif'

const initialFieldValues={
    companyId : 0 ,
    companyName : '',
    located_distric : '',
    located_province : '',
    min_package: '',
    mid_package :'',
    max_package: '',
    imageName : '',
    imageSrc : defaultImageSrc,
    imagefile : null
}



export default  function Employee(props) {
    const {addOrEdit} = props

    const [values, setValues] = useState(initialFieldValues)
    const [errors, setErrors] = useState({})
    const handleInputChange =e => {
        const {name, value } = e.target;
        setValues({
            values,
            [name]:value
        })
        
    }

    const showPreview = e =>{
        if (e.target.files && e.target.files[0]){
            let imageFile = e.target.files[0]
            const reader = new FileReader();
            reader.onload = x =>{
    
                setValues({
    
                    ...values,
                    imageFile,
                    imageSrc: x.target.result
                })
            }
            reader.readAsDataURL(imageFile)
        }
        else{
            setValues({
    
                ...values,
                imageFile:null,
                imageSrc: defaultImageSrc
            })

        }
    }
    
    const validate = () =>{
        let temp={}
        temp.companyName=values.companyName==""?false:true;
        temp.located_distric=values.loacted_distric==""?false:true;
        temp.located_province=values.located_province==""?false:true;
        temp.imageSrc=values.imageSrc==defaultImageSrc?false:true;
        setErrors(temp)
        return Object.values(temp).every(x => x==true)
    }

    const resetForm = () =>{
        setValues(initialFieldValues)
        document.getElementById('image-uploader').value = null;
        setErrors({})
    }

    const handleFormSubmit = e =>{
        e.preventDefault()
        if(validate()){
           const formData = new FormData()
           formData.append('companyId',values.companyId)
           formData.append('companyName',values.companyName)
           formData.append('located_distric',values.located_distric)
           formData.append('located_province',values.located_province)
           formData.append('min_package',values.min_package)
           formData.append('mid_package',values.mid_package)
           formData.append('max_package',values.max_package)
           formData.append('imageName',values.imageName)
           formData.append('imageFile',values.imageFile)
           addOrEdit(formData,resetForm)
           
        }
    }


   
    


    const applyErrorClass = field => ((field in errors && errors[field]==false)?' invalid-field':'')

    return (
      <>

      <div className="container text-center">
        <p className="lead" >Your Addvertisment</p>
    
       
        <form autoComplete="off" noValidate onSubmit={handleFormSubmit}>
         <div className="card">
               <div className="card-body">
                  <img src={values.imageSrc} className="card-img-top" />
                  <div className="form-group">
                      <input type ="file" accept="image/*" className={"form-control-file" + applyErrorClass('imageSrc')} onChange={showPreview} id="image-uploader"/>
                  </div>
                  <div className="form-group">
                      <input type="text" className={"form-control-file" + applyErrorClass('companyName')} placeholder="Company name" name="companyName" value={values.companyName} onChange={handleInputChange} />
                  </div>

                  <div className="form-group">
                      <input className={"form-control-file" + applyErrorClass('located_distric')} placeholder="Located Distric" name="located_distric" value={values.located_distric} onChange={handleInputChange}/>
                  </div>

                  <div className="form-group">
                      <input className={"form-control-file" + applyErrorClass('located_province')} placeholder="Located Province" name="located_province" value={values.located_province} onChange={handleInputChange}/>
                  </div>

                  <div className="form-group">
                      <input className={"form-control-file" + applyErrorClass(' min_package')} placeholder=" Min Package" name=" min_package" value={values.min_package} onChange={handleInputChange}/>
                  </div>

                  <div className="form-group">
                      <input className={"form-control-file" + applyErrorClass(' mid_package')} placeholder=" Mid Package" name=" mid_package" value={values.mid_package} onChange={handleInputChange}/>
                  </div>

                  <div className="form-group">
                      <input className={"form-control-file" + applyErrorClass(' max_package')} placeholder=" Max Package" name=" max_package" value={values.max_package} onChange={handleInputChange}/>
                  </div>

                  <div className="form-group text-center">
                      <button type="submit" className="btn btn-light" >Submit</button>
                  </div>
               </div>
         </div>
       </form>
     </div> 
       
     </>
      
    );
}

