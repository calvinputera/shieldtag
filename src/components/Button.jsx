import React from "react";

const Button = ({ bgColor, textColor, padding, weight, text }) => {
	return (
		<button
			className={`${bgColor} ${textColor} ${padding} rounded-md text-center text-sm font-nunito ${weight}`}
		>
			{text}
		</button>
	);
};

export default Button;
