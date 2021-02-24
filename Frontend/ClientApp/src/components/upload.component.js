
import { Link } from 'react-router-dom';

import React,{Component} from 'react';

export default class Upload extends Component {
render() {
    return (
        <div className="outer">
        <div className="inner">
		<form>
            <h1 position="center">Publish Information Here...</h1>

            <div className="form-group">
                    <label classname="font_size">Company Category;</label>
                    <input  type="text" className="font_size_2" placeholder="|Company Category|" />
            </div>

			<div className="form-group">
                    <label classname="font_size">Company name ;</label>
                    <input  type="text" className="font_size_2" placeholder="|Company name|" />
            </div>

            <div className="form-group">
                    <label classname="font_size">Telephone number ;</label>
                     <input type="text" className="font_size_2" placeholder="|Telephone number|" />
            </div>

			<div className="form-group">
                    <label classname="font_size">Experience(YEARS) ;</label>
                     <input type="text" className="font_size_2" placeholder="|Experience|" />
            </div>

            <div  className="form-group">

			   
                <label for="Province">Province ;</label>
                <input name="Province" placeholder="|Province|" type="text" />
                <label for="Distric">Distric ;</label>
                <input name="Distric"  placeholder="|Distric|" type="text" /> 
                
            </div>

			<div  className="form-group">

               <label classname="font_size" for="Packages">Packages(LKR) ;</label>
			   <label classname="font_size"> </label>
               <input name="Package_1"  type="text"  placeholder="Package_1"/>
               <input name="Package_2" type="text" placeholder="Package_2" /> 
			   <input name="Package_3" type="text" placeholder="Package_3"  /> 
			   
			</div>

			<div className="form-group">
				<label>Addvertisment ;</label>
				<input type="file"   accept="image/*" onChange={this.onFileChange} />
				<button onClick={this.onFileUpload}>
				Upload!
				</button>
			</div>

			<div class="flex-parent jc-center">
                <Link to="/upload2">
                        <button  class="magenta">Next</button>
                 </Link>
            </div>

		</form>
</div>
</div>
        );
    }
}

