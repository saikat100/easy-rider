import React from "react";
import "./Home.css";
import { useEffect, useState } from "react";
import fakedata from "../../fakedata/mainfake.json";
import Carts from "../Carts/Carts";

const Home = () => {
	const [Data, setData] = useState([]);
	useEffect(() => {
		setData(fakedata);
	}, []);
	return (
		<div>
			<div className="d-flex justify-content-center mt-5 pt-5">
				<div className="row row-cols-1 row-cols-md-4 g-4 py-5 rounded w-75">
					{Data.map((data) => (
						<Carts data={data} key={data.type}></Carts>
					))}
				</div>
			</div>
		</div>
	);
};

export default Home;
