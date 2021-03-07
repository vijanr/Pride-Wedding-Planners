import React from 'react';
import Vendor from './Vendor';
import axios from "axios"



export default function VendorList() {

    const employeeAPI = (url = 'https://localhost:5001/api/uploads') =>{
    
        return {
          fetchAll : ()=> axios.get(url),
          create : newRecord => axios.post(url,newRecord),
          update: (id,updateRecord) =>  axios.put(url+ id,updateRecord),
          delete: id => axios.delete(url+id)


        }
            
    }

    const addOrEdit = (formData,onSuccess) =>{
    employeeAPI().create(formData)
    .then(res =>{
        onSuccess();
    })
    .catch(err => console.log(err))
    }



    return (
        <div className="row">
            <div className="col-md-12">
              <div class="jumbotron jumbotron-fluid py-4">
                 <div>
                     <h1 class="display-4 text-center" >Publish Addvertisments</h1>
                 </div>
               </div>
            </div>

            <div className="col-md-5">
                  <Vendor
                  addOrEdit={addOrEdit}
                  />
            </div>
            <div className="col-md-7">
                 <div>List of Advertisment records</div>
            </div>
            
        </div>
    );
}

