import React, { useState } from "react";
import Button from "./Button";
import logo from "../assets/logo.png";
import ina from "../assets/indonesia.png";
import usa from "../assets/usa.png";
import { BsChevronDown, BsList } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const Navbar = () => {
	const [t, i18n] = useTranslation("global");

	const [isOpenMenu, setIsOpenMenu] = useState(false);
	const [isActiveProduk, setIsActiveProduk] = useState(false);
	const [isActiveLayanan, setIsActiveLayanan] = useState(false);
	const [isActiveIndustri, setIsActiveIndustri] = useState(false);
	const [isActiveTentangKami, setIsActiveTentangKami] = useState(false);
	const [changeLanguages, setChangeLanguages] = useState(false);
	const [languages, setLanguages] = useState(ina);

	const produk = ["Hologram Sticker", "Shieldcode"];
	const layanan = [
		"SAVS",
		"GPRS",
		"Authenticator",
		"Data Analytic",
		"Distribution Tracking System",
		"Loyalty Control Program",
		t("layanan.garansiDigital"),
	];

	const industri = [
		t("industri.khc"),
		t("industri.farmasi"),
		"Vape/Liquid",
		"Fashion",
		"F&B",
	];

	const tentangKami = [
		t("navbar.tentangKami"),
		t("tentangKami.klien"),
		t("button.hubungiKami"),
		"Blog",
	];

	const handleLanguanges = (lang) => {
		i18n.changeLanguage(lang);
	};

	return (
		<div className="bg-primaryWhite shadow-md relative font-nunito text-primaryBlack">
			<div className="p-4 md:px-14 flex justify-between items-center">
				<img src={logo} alt="shieldtag logo" className="w-36" />
				<div className="flex gap-8">
					{/* Desktop */}
					<div className="hidden md:flex md:items-center md:gap-6 md:text-sm md:font-semibold">
						<p className="cursor-pointer hover:underline hover:underline-offset-[12px] hover:decoration-primaryBlue hover:decoration-2">
							{t("navbar.beranda")}
						</p>
						<p className="cursor-pointer hover:underline hover:underline-offset-[12px] hover:decoration-primaryBlue hover:decoration-2">
							{t("navbar.kenapaShieldtag")}
						</p>
						<div className="relative">
							<p
								className={`flex items-center justify-between gap-3 cursor-pointer hover:underline hover:underline-offset-[12px] hover:decoration-primaryBlue hover:decoration-2 ${
									isActiveProduk &&
									"text-secondaryBlue underline decoration-2 underline-offset-[12px] hover:decoration-secondaryBlue"
								}`}
								onClick={() => {
									setIsActiveProduk(!isActiveProduk);
									setIsActiveIndustri(false);
									setIsActiveLayanan(false);
									setIsActiveTentangKami(false);
								}}
							>
								{t("navbar.produk")}
								<span>
									<BsChevronDown size={15} />
								</span>
							</p>
							{isActiveProduk && (
								<div className="absolute z-20 p-4 w-64 left-0 top-11 shadow-lg rounded-md bg-primaryWhite flex justify-between gap-2">
									{produk.map((menu) => (
										<p className="hover:text-secondaryBlue cursor-pointer">
											{menu}
										</p>
									))}
								</div>
							)}
						</div>
						<div className="relative">
							<p
								className={`flex items-center justify-between gap-3 cursor-pointer hover:underline hover:underline-offset-[12px] hover:decoration-primaryBlue hover:decoration-2 ${
									isActiveLayanan &&
									"text-secondaryBlue underline decoration-2 underline-offset-[12px] hover:decoration-secondaryBlue"
								}`}
								onClick={() => {
									setIsActiveLayanan(!isActiveLayanan);
									setIsActiveProduk(false);
									setIsActiveIndustri(false);
									setIsActiveTentangKami(false);
								}}
							>
								{t("navbar.layanan")}
								<span>
									<BsChevronDown size={15} />
								</span>
							</p>
							{isActiveLayanan && (
								<div className="absolute z-20 p-4 w-[470px] h-[290px] left-0 top-11 shadow-lg rounded-md bg-primaryWhite flex items-center justify-between gap-2">
									<div className="flex flex-col gap-4 p-3">
										{layanan.map((menu) => (
											<p className="hover:text-secondaryBlue cursor-pointer">
												{menu}
											</p>
										))}
									</div>
									<div className="flex flex-col gap-4 p-3">
										{layanan.map((menu) => (
											<p className="hover:text-secondaryBlue cursor-pointer">
												{menu}
											</p>
										))}
									</div>
								</div>
							)}
						</div>
						<div className="relative">
							<p
								className={`flex items-center justify-between gap-3 cursor-pointer hover:underline hover:underline-offset-[12px] hover:decoration-primaryBlue hover:decoration-2 ${
									isActiveIndustri &&
									"text-secondaryBlue underline decoration-2 underline-offset-[12px] hover:decoration-secondaryBlue"
								}`}
								onClick={() => {
									setIsActiveIndustri(!isActiveIndustri);
									setIsActiveProduk(false);
									setIsActiveLayanan(false);
									setIsActiveTentangKami(false);
								}}
							>
								{t("navbar.industri")}
								<span>
									<BsChevronDown size={15} />
								</span>
							</p>
							{isActiveIndustri && (
								<div className="absolute z-20 p-4 w-64 h-44 left-0 top-11 shadow-lg rounded-md bg-primaryWhite flex flex-col justify-center gap-3">
									{industri.map((menu) => (
										<p className="hover:text-secondaryBlue cursor-pointer">
											{menu}
										</p>
									))}
								</div>
							)}
						</div>
						<div className="relative">
							<p
								className={`flex items-center justify-between gap-3 cursor-pointer hover:underline hover:underline-offset-[12px] hover:decoration-primaryBlue hover:decoration-2 ${
									isActiveTentangKami &&
									"text-secondaryBlue underline decoration-2 underline-offset-[12px] hover:decoration-secondaryBlue"
								}`}
								onClick={() => {
									setIsActiveTentangKami(!isActiveTentangKami);
									setIsActiveProduk(false);
									setIsActiveIndustri(false);
									setIsActiveLayanan(false);
								}}
							>
								{t("navbar.tentangKami")}
								<span>
									<BsChevronDown size={15} />
								</span>
							</p>
							{isActiveTentangKami && (
								<div className="absolute z-20 p-4 w-44 h-36 left-0 top-11 shadow-lg rounded-md bg-primaryWhite flex flex-col justify-center gap-3">
									{tentangKami.map((menu) => (
										<p className="hover:text-secondaryBlue cursor-pointer">
											{menu}
										</p>
									))}
								</div>
							)}
						</div>
						<Button
							bgColor={"bg-gradient-to-r from-secondaryBlue to-primaryBlue"}
							textColor={"text-primaryWhite"}
							padding={"py-3 px-12"}
							weight={"font-semibold"}
							text={t("button.hubungiKami")}
						/>
					</div>
					<div
						className="relative flex gap-4 items-center cursor-pointer"
						onClick={() => setChangeLanguages(!changeLanguages)}
					>
						<img src={languages} alt="ina" className="w-8" />
						<BsChevronDown size={15} />
						{changeLanguages && (
							<div className="absolute p-2 bg-primaryWhite top-14 left-0 shadow-lg w-28 flex rounded-md z-20">
								<div
									className="w-full flex justify-center cursor-pointer hover:bg-blueHover hover:rounded-md"
									onClick={() => {
										handleLanguanges("ina");
										setLanguages(ina);
										setChangeLanguages(false);
									}}
								>
									<img src={ina} alt="ina" className="w-8" />
								</div>
								<div
									className="w-full flex justify-center cursor-pointer hover:bg-blueHover hover:rounded-md"
									onClick={() => {
										handleLanguanges("en");
										setLanguages(usa);
										setChangeLanguages(false);
									}}
								>
									<img src={usa} alt="usa" className="w-7" />
								</div>
							</div>
						)}
					</div>
					<BsList
						className="cursor-pointer md:hidden"
						size={25}
						color="#3450a2"
						onClick={() => setIsOpenMenu(!isOpenMenu)}
					/>
				</div>
			</div>

			{/* Mobile */}
			{isOpenMenu && (
				<div className="flex flex-col gap-4 py-4 px-5 absolute bg-primaryWhite w-full shadow-md max-h-80 overflow-y-scroll no-scrollbar top-14 z-10">
					<p className="cursor-pointer hover:underline hover:underline-offset-[12px] hover:decoration-primaryBlue hover:decoration-2">
						{t("navbar.beranda")}
					</p>
					<p className="cursor-pointer hover:underline hover:underline-offset-[12px] hover:decoration-primaryBlue hover:decoration-2">
						{t("navbar.kenapaShieldtag")}
					</p>
					<p
						className={`flex items-center justify-between w-32 cursor-pointer hover:underline hover:underline-offset-[12px] hover:decoration-primaryBlue hover:decoration-2 ${
							isActiveProduk &&
							"text-secondaryBlue underline decoration-2 underline-offset-[12px] hover:decoration-secondaryBlue"
						}`}
						onClick={() => {
							setIsActiveProduk(!isActiveProduk);
							setIsActiveIndustri(false);
							setIsActiveLayanan(false);
							setIsActiveTentangKami(false);
						}}
					>
						{t("navbar.produk")}
						<span>
							<BsChevronDown size={15} />
						</span>
					</p>
					{isActiveProduk && (
						<div className="ml-4 flex flex-col gap-2">
							{produk.map((menu) => (
								<p className="hover:text-secondaryBlue cursor-pointer">
									{menu}
								</p>
							))}
						</div>
					)}
					<p
						className={`flex items-center justify-between w-32 cursor-pointer hover:underline hover:underline-offset-[12px] hover:decoration-primaryBlue hover:decoration-2 ${
							isActiveLayanan &&
							"text-secondaryBlue underline decoration-2 underline-offset-[12px] hover:decoration-secondaryBlue"
						}`}
						onClick={() => {
							setIsActiveLayanan(!isActiveLayanan);
							setIsActiveProduk(false);
							setIsActiveIndustri(false);
							setIsActiveTentangKami(false);
						}}
					>
						{t("navbar.layanan")}
						<span>
							<BsChevronDown size={15} />
						</span>
					</p>
					{isActiveLayanan && (
						<>
							<div className="ml-4 flex flex-col gap-2">
								{layanan.map((menu) => (
									<p className="hover:text-secondaryBlue cursor-pointer">
										{menu}
									</p>
								))}
							</div>
							<div className="ml-4 -mt-2 flex flex-col gap-2">
								{layanan.map((menu) => (
									<p className="hover:text-secondaryBlue cursor-pointer">
										{menu}
									</p>
								))}
							</div>
						</>
					)}
					<p
						className={`flex items-center justify-between w-32 cursor-pointer hover:underline hover:underline-offset-[12px] hover:decoration-primaryBlue hover:decoration-2 ${
							isActiveIndustri &&
							"text-secondaryBlue underline decoration-2 underline-offset-[12px] hover:decoration-secondaryBlue"
						}`}
						onClick={() => {
							setIsActiveIndustri(!isActiveIndustri);
							setIsActiveProduk(false);
							setIsActiveLayanan(false);
							setIsActiveTentangKami(false);
						}}
					>
						{t("navbar.industri")}
						<span>
							<BsChevronDown size={15} />
						</span>
					</p>
					{isActiveIndustri && (
						<div className="ml-4 flex flex-col gap-2">
							{industri.map((menu) => (
								<p className="hover:text-secondaryBlue cursor-pointer">
									{menu}
								</p>
							))}
						</div>
					)}
					<p
						className={`flex items-center justify-between w-32 cursor-pointer hover:underline hover:underline-offset-[12px] hover:decoration-primaryBlue hover:decoration-2 ${
							isActiveTentangKami &&
							"text-secondaryBlue underline decoration-2 underline-offset-[12px] hover:decoration-secondaryBlue"
						}`}
						onClick={() => {
							setIsActiveTentangKami(!isActiveTentangKami);
							setIsActiveProduk(false);
							setIsActiveIndustri(false);
							setIsActiveLayanan(false);
						}}
					>
						{t("navbar.tentangKami")}
						<span>
							<BsChevronDown size={15} />
						</span>
					</p>
					{isActiveTentangKami && (
						<div className="ml-4 flex flex-col gap-2">
							{tentangKami.map((menu) => (
								<p className="hover:text-secondaryBlue cursor-pointer">
									{menu}
								</p>
							))}
						</div>
					)}
					<Button
						bgColor={"bg-gradient-to-r from-secondaryBlue to-primaryBlue"}
						textColor={"text-primaryWhite"}
						padding={"py-3 px-12"}
						weight={"font-semibold"}
						text={t("button.hubungiKami")}
					/>
				</div>
			)}
		</div>
	);
};

export default Navbar;
