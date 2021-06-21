import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Search from "./Components/Search/Search";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createContext, useState } from "react";
import Nomatch from "./Components/Nomatch/Nomatch";
import Login from "./Components/Login/Login";
import Blogs from "./Components/Blogs/Blogs";
import Privateroute from "./Components/PrivateRoute/Privateroute";

export const TheContext = createContext();
export const InfoContext = createContext();

function App() {
	//....For the context api....
	const [pic, setpic] = useState({});
	const [info, setinfo] = useState({
		istrue: true,
		name: "",
		email: "",
	});

	return (
		<div className="App">
			<TheContext.Provider value={[pic, setpic]}>
				<InfoContext.Provider value={[info, setinfo]}>
					<Router>
						<Header />
						<Switch>
							<Route path="/home">
								<Home />
							</Route>
							<Route path="/Blog">
								<Blogs></Blogs>
							</Route>
							<Privateroute path="/search/:type">
								<Search />
							</Privateroute>
							<Privateroute path="/Destination">
								<Search />
							</Privateroute>
							<Route path="/login">
								<Login />
							</Route>
							<Route exact path="/">
								<Home />
							</Route>
							<Route path="*">
								<Nomatch></Nomatch>
							</Route>
						</Switch>
					</Router>
				</InfoContext.Provider>
			</TheContext.Provider>
		</div>
	);
}

export default App;
