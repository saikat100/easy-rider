import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';
import { TheContext } from '../../App';
import "./Search.css";
import Map from "../Map/Map";

const Search = () => {
    //....Set values of the input
    const[place, setplace] = useState({
        isSubmitted: false,
        pickup: "",
        pickdown: ""
    })
    //....The context api....
    const[pic, setpic] = useContext(TheContext);
    const{type} = useParams()

    //Handle submit event
    const handleSubmit = (e) =>{
        if(place.pickup && place.pickdown){
            const newplace = {...place};
            newplace.isSubmitted = true;
            setplace(newplace);
        }
        e.preventDefault()
    }

    //Handle change event
    const handleChange = (e) =>{
        let isValid = true;
        if(e.target.name === "pickup"){
            isValid = /^[A-Za-z\s]+$/.test(e.target.value);
        }
        if(e.target.name === "pickdown"){
            isValid = /^[A-Za-z\s]+$/.test(e.target.value);
        }
        if(isValid){
            const newplace = {...place};
            newplace[e.target.name] = e.target.value;
            setplace(newplace);
        }
    }

    return (
			<div>
				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-5">
							<div className="container d-flex justify-content-center">
								{place.isSubmitted ? (
									//....If the form is not submitted
									<div className="my-5 bg-primary py-2 px-3 rounded custom_w">
										<div className="row gx-5 bg-warning m-0 rounded">
											<div className="col py-2">
												<h5 className="custom_font_weight">
													<i class="bi bi-geo-alt-fill text-primary"></i>{" "}
													{place.pickup}
												</h5>
												<h5 className="custom_font_weight">
													<i class="bi bi-geo-alt-fill text-danger"></i>{" "}
													{place.pickdown}
												</h5>
											</div>
										</div>
										<div className="row gx-5 my-2">
											<div className="col d-flex justify-content-around align-items-center bg-light rounded mx-3">
												<img
													src={pic.picture}
													className="img_custom_width"
													alt=""
												/>
												<p className="type_fonts">{type}</p>
												<p className="type_fonts">
													<i className="bi bi-people type_fonts"></i> 4
												</p>
												<p className="type_fonts">$55</p>
											</div>
										</div>
										<div className="row gx-5 my-2">
											<div className="col d-flex justify-content-around align-items-center bg-light rounded mx-3">
												<img
													src={pic.picture}
													className="img_custom_width"
													alt=""
												/>
												<p className="type_fonts">{type}</p>
												<p className="type_fonts">
													<i className="bi bi-people type_fonts"></i> 4
												</p>
												<p className="type_fonts">$55</p>
											</div>
										</div>
										<div className="row gx-5 my-2">
											<div className="col d-flex justify-content-around align-items-center bg-light rounded mx-3">
												<img
													src={pic.picture}
													className="img_custom_width"
													alt=""
												/>
												<p className="type_fonts">{type}</p>
												<p className="type_fonts">
													<i className="bi bi-people type_fonts"></i> 4
												</p>
												<p className="type_fonts">$55</p>
											</div>
										</div>
									</div>
								) : (
									//....If the form is submitted
									<div className="my-5 w-50 bg-primary py-2 px-3 rounded">
										<form onSubmit={handleSubmit}>
											<div className="my-2">
												<label
													htmlFor="pickup"
													className="form-label custom_font_weight"
												>
													Origin
												</label>
												<input
													onChange={handleChange}
													type="text"
													name="pickup"
													className="form-control"
													id="pickup"
													aria-describedby="emailHelp"
													placeholder="enter palce..."
													required
												/>
											</div>
											<div className="my-2">
												<label
													htmlFor="pickup"
													className="form-label custom_font_weight"
												>
													Destination
												</label>
												<input
													onChange={handleChange}
													type="text"
													name="pickdown"
													className="form-control"
													id="pickdown"
													aria-describedby="emailHelp"
													placeholder="enter palce..."
													required
												/>
											</div>

											<div className="text-center">
												<input
													type="submit"
													className="btn btn-danger mt-2 w-100"
													value="Search"
												/>
											</div>
										</form>
									</div>
								)}
							</div>
						</div>
						<div className="col-md-5">
							<Map></Map>
						</div>
					</div>
				</div>
			</div>
		);
};

export default Search;