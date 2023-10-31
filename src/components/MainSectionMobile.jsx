import React from "react";
import main from "../assets/main.png";
import key from "../assets/key.png";
import scan from "../assets/scan.png";
import check from "../assets/check.png";
import verified from "../assets/verified.png";
import Button from "./Button";
import { useTranslation } from "react-i18next";

const MainSectionMobile = () => {
	const [t] = useTranslation("global");

	return (
		<div className="w-full bg-gradient-to-tr from-blueHover via-primaryWhite to-blueHover md:hidden">
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
			<div className="font-poppins pl-8 mt-20 flex flex-col gap-2 pb-12 md:w-1/2">
				<h2 className="text-3xl text-secondaryBlue">Leading Brand</h2>
				<h1 className="text-5xl font-extrabold text-primaryBlue">
					Protection Solution
				</h1>
				<div className="flex items-start">
					<img src={verified} alt="verified" className="w-10 -ml-2" />
					<p className="text-primaryBlack font-nunito w-[80%] md:w-[70%]">
						{t("mainPragraph.paragraph")}
					</p>
				</div>
				<div className="mt-7">
					<Button
						bgColor={"bg-gradient-to-r from-secondaryBlue to-primaryBlue"}
						textColor={"text-primaryWhite"}
						padding={"py-3 px-12"}
						weight={"font-semibold"}
						text={t("button.hubungiKami")}
					/>
				</div>
			</div>
		</div>
	);
};

export default MainSectionMobile;
