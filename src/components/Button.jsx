import React from "react";

const Button = ({ bgColor, textColor, padding, weight }) => {
	return (
		<button
			className={`${bgColor} ${textColor} ${padding} rounded-md text-center text-sm font-nunito ${weight}`}
		>
			Hubungi Kami
		</button>
	);
};

export default Button;
