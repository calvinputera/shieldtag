import React from "react";
import protection from "../assets/protection.png";
import { BsArrowRightShort } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const ProtectionSection = () => {
	const [t] = useTranslation("global");

	return (
		<div className="px-8 py-12 flex flex-col-reverse bg-primaryWhite gap-10 md:flex-row md:items-center md:justify-between md:py-28 md:px-14">
			<div className="font-nunito">
				<p className="text-primaryBlue font-semibold">
					{t("sectionProtection.fiturKeamanan")}
				</p>
				<h2 className="text-primaryBlack font-extrabold text-3xl">
					Fraud Protection
				</h2>
				<div className="flex flex-col gap-5 mt-5 text-secondaryBlack">
					<p>{t("sectionProtection.paragraphOne")}</p>
					<p>{t("sectionProtection.paragraphTwo")}</p>
				</div>
				<p className="flex items-center gap-2 text-primaryBlue font-bold mt-3 cursor-pointer">
					{t("sectionProtection.pelajariSelengkapnya")}
					<span>
						<BsArrowRightShort size={25} />
					</span>
				</p>
			</div>
			<div className="flex justify-center items-center md:justify-end">
				<img src={protection} alt="protection" className="md:w-[80%]" />
			</div>
		</div>
	);
};

export default ProtectionSection;
