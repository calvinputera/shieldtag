import React from "react";
import main from "../assets/main.png";
import key from "../assets/key.png";
import scan from "../assets/scan.png";
import check from "../assets/check.png";
import verified from "../assets/verified.png";
import Button from "./Button";

const MainSectionDesktop = () => {
	return (
		<div className="hidden w-full bg-gradient-to-tr from-blueHover via-primaryWhite to-blueHover md:pb-36 md:flex md:items-center justify-between">
			<div className="font-poppins pl-16 mt-20 flex flex-col gap-2 pb-8 md:w-1/2">
				<h2 className="text-3xl text-secondaryBlue">Leading Brand</h2>
				<h1 className="text-5xl font-extrabold text-primaryBlue">
					Protection Solution
				</h1>
				<div className="flex items-start">
					<img src={verified} alt="verified" className="w-10 -ml-2" />
					<p className="text-primaryBlack font-nunito md:w-[70%]">
						Jaga keaslian produk kamu dengan stiker hologram berteknologi
						tinggi.
					</p>
				</div>
				<div className="mt-7">
					<Button
						bgColor={"bg-gradient-to-r from-secondaryBlue to-primaryBlue"}
						textColor={"text-primaryWhite"}
						padding={"py-3 px-12"}
						weight={"font-semibold"}
						text="Hubungi Kami"
					/>
				</div>
			</div>
			<div className="relative md:w-1/2">
				<img src={main} alt="main" />
				<img
					src={key}
					alt="key"
					className="absolute w-24 md:w-32 top-12 left-6"
				/>
				<img
					src={check}
					alt="check"
					className="absolute w-24 md:w-32 -bottom-16 md:-bottom-24 left-5"
				/>
				<img
					src={scan}
					alt="scan"
					className="absolute w-24 md:w-32 right-2 -bottom-6 md:bottom-0"
				/>
			</div>
		</div>
	);
};

export default MainSectionDesktop;
