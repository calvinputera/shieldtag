import React from "react";
import background from "../assets/background.png";
import dashboard from "../assets/dashboard.png";
import Button from "./Button";

const DashboardSection = () => {
	return (
		<>
			{/* Desktop */}
			<div
				style={{ backgroundImage: `url(${background})` }}
				className="hidden bg-cover bg-center w-full md:flex md:relative flex-col md:flex-row py-10 md:px-8 md:h-96 md:items-center"
			>
				<div className="px-8 font-nunito text-primaryWhite">
					<p className="font-light">Tertarik dengan teknologi kami?</p>
					<h1 className="font-extrabold text-2xl md:text-4xl md:w-2/3">
						Mari kita melihat Dashboard Shieldtag
					</h1>
					<div className="mt-5">
						<Button
							bgColor={"bg-primaryYellow"}
							textColor={"text-primaryBlack"}
							padding={"py-3 px-9"}
							weight={"font-extrabold"}
							text="Jadwalkan Demo"
						/>
					</div>
				</div>
				<img
					src={dashboard}
					alt="dashboard"
					className="hidden md:block md:absolute md:w-[60%] md:right-0 md:top-10"
				/>
			</div>

			{/* Mobile */}
			<div
				style={{ backgroundImage: `url(${background})` }}
				className="bg-cover bg-center w-full flex flex-col py-10 md:hidden"
			>
				<img src={dashboard} alt="dashboard" />
				<div className="px-8 font-nunito text-primaryWhite">
					<p className="font-light">Tertarik dengan teknologi kami?</p>
					<h1 className="font-extrabold text-2xl">
						Mari kita melihat Dashboard Shieldtag
					</h1>
					<div className="mt-5">
						<Button
							bgColor={"bg-primaryYellow"}
							textColor={"text-primaryBlack"}
							padding={"py-3 px-9"}
							weight={"font-extrabold"}
							text="Jadwalkan Demo"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default DashboardSection;
