import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
	const [isLoading, setLoading] = useState(true);
	const [country, setCountry] = useState();

	const baseurl = "'http://jagah2-env.eba-m3zawypz.us-east-2.elasticbeanstalk.com:80";

	useEffect(() => {
		axios.get(`${baseurl}/api/getCountries`).then((response) => {
			setCountry(response.data);
			setLoading(false);
		});
	}, []);

	if (isLoading) {
		return (
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					height: "100vh",
					backgroundColor: "grey",
				}}
			>
				Loading...
			</div>
		);
	}

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				height: "100vh",
				backgroundColor: "grey",
			}}
		>
			<div>{country.country_name}</div>
			<img alt={country.name} src={country.sprites.front_default} />
		</div>
	);
}

export default App;
