import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import supply from "../assets/supply.png";
import { useTranslation } from "react-i18next";

const SupplySection = () => {
	const [t] = useTranslation("global");

	return (
		<div className="px-8 py-12 flex flex-col-reverse bg-primaryWhite gap-10 md:flex-row-reverse md:items-center md:justify-between md:py-28 md:px-14">
			<div className="font-nunito">
				<p className="text-primaryBlue font-semibold">
					{t("supplySection.dataProduk")}
				</p>
				<h2 className="text-primaryBlack font-extrabold text-3xl">
					Supply-chain Visibility
				</h2>
				<div className="flex flex-col gap-5 mt-5 text-secondaryBlack">
					<p>{t("supplySection.paragraphOne")}</p>
					<p>{t("supplySection.paragraphTwo")}</p>
				</div>
				<p className="flex items-start md:items-center md:gap-2 text-primaryBlue font-bold mt-3 w-[70%] cursor-pointer">
					{t("supplySection.pelajariDistribution")}
					<span>
						<BsArrowRightShort size={25} />
					</span>
				</p>
			</div>
			<div className="flex justify-center items-center md:justify-start">
				<img src={supply} alt="protection" className="md:w-4/5" />
			</div>
		</div>
	);
};

export default SupplySection;
