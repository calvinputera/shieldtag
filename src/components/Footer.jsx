import React from "react";
import playstore from "../assets/google.png";
import appstore from "../assets/appstore.png";
import logo from "../assets/logo.png";
import {
	BsTwitter,
	BsInstagram,
	BsLinkedin,
	BsWhatsapp,
	BsEnvelopeFill,
} from "react-icons/bs";
import { useTranslation } from "react-i18next";

const Footer = () => {
	const [t] = useTranslation("global");

	const sosmed = [
		<BsTwitter size={20} color="#FFFFFF" />,
		<BsInstagram size={20} color="#FFFFFF" />,
		<BsLinkedin size={20} color="#FFFFFF" />,
		<BsEnvelopeFill size={20} color="#FFFFFF" />,
		<BsWhatsapp size={20} color="#FFFFFF" />,
	];

	const industri = [
		"Hologram Shieldtag",
		"Shielcode",
		t("industri.kosmetik"),
		t("industri.obat"),
		"Vape",
		t("industri.pakaian"),
		t("industri.mnp"),
	];

	const layanan = [
		"SAVS",
		"GPRS",
		"Authenticator",
		"Data Analytic",
		"Distribution Tracking System",
		"Loyality Control Program",
		t("layanan.garansiDigital"),
		"Forum",
	];

	const tentangKami = [
		t("navbar.tentangKami"),
		t("tentangKami.klien"),
		"Blog",
		t("tentangKami.snk"),
		t("tentangKami.kebijakanPrivasi"),
	];

	return (
		<>
			<div className="bg-blueHoverSecondary p-8 md:px-14 md:mt-72">
				<div className="font-nunito flex flex-col md:flex-row gap-6 md:gap-12">
					<div className="flex flex-col gap-5">
						<img src={logo} alt="logo" className="w-40" />
						<p className="text-primaryBlack md:text-sm">
							Jl. Mampang Prapatan Raya no.17C, Mampang Prapatan, Jakarta
							Selatan, Indonesia, 12790
						</p>
						<div className="flex gap-3">
							<img
								src={playstore}
								alt="playstore"
								className="w-36 cursor-pointer"
							/>
							<img
								src={appstore}
								alt="appstore"
								className="w-36 cursor-pointer"
							/>
						</div>
						<div className="flex gap-5">
							{sosmed.map((item) => (
								<div className="bg-primaryBlue p-3 rounded-full cursor-pointer">
									{item}
								</div>
							))}
						</div>
					</div>
					<div className="flex gap-20 md:gap-9 md:text-sm">
						<div className="text-primaryBlack flex flex-col gap-2">
							<p className="font-bold">{t("navbar.industri")}</p>
							{industri.map((item) => (
								<p className="text-primaryGray hover:text-secondaryBlue cursor-pointer">
									{item}
								</p>
							))}
						</div>
						<div className="text-primaryBlack flex flex-col gap-2">
							<p className="font-bold">{t("navbar.layanan")}</p>
							{layanan.map((item) => (
								<p className="text-primaryGray hover:text-secondaryBlue cursor-pointer">
									{item}
								</p>
							))}
						</div>
					</div>
					<div className="flex flex-col gap-2 md:text-sm">
						{tentangKami.map((item) => (
							<p className="text-primaryGray font-bold hover:text-secondaryBlue cursor-pointer">
								{item}
							</p>
						))}
					</div>
				</div>
			</div>
			<div className="bg-primaryBlue text-primaryWhite p-2 text-center">
				<p className="text-sm">Copyright 2022 PT.Karya Generasi Biru</p>
			</div>
		</>
	);
};

export default Footer;
