import React, { useState } from "react";
import Button from "./Button";
import logo from "../assets/logo.png";
import ina from "../assets/indonesia.png";
import usa from "../assets/usa.png";
import { BsChevronDown, BsList } from "react-icons/bs";

const Navbar = () => {
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
		"Dsitribution Tracking System",
		"Loyalty Control Program",
		"Generasi Digital",
	];

	const industri = [
		"Kosmetik dan Perawatan Rumah",
		"Farmasi",
		"Vape/Liquid",
		"Fashion",
		"F&B",
	];

	const tentangKami = ["Tentang Kami", "Klien Kami", "Hubungi Kami", "Blog"];

	return (
		<div className="bg-primaryWhite shadow-md relative font-nunito text-primaryBlack">
			<div className="p-4 flex justify-between items-center">
				<img src={logo} alt="shieldtag logo" className="w-36" />
				<div className="flex gap-8">
					<div
						className="relative flex gap-4 items-center cursor-pointer"
						onClick={() => setChangeLanguages(!changeLanguages)}
					>
						<img src={languages} alt="ina" className="w-8" />
						<BsChevronDown size={15} />
						{changeLanguages && (
							<div className="absolute bg-primaryWhite top-9 right-0 shadow-lg w-20 flex flex-col rounded-md z-20">
								<div
									className="w-full flex justify-center cursor-pointer hover:bg-blueHover hover:rounded-t-md"
									onClick={() => {
										setLanguages(ina);
										setChangeLanguages(false);
									}}
								>
									<img src={ina} alt="ina" className="w-10" />
								</div>
								<div
									className="w-full flex justify-center cursor-pointer hover:bg-blueHover hover:rounded-b-md"
									onClick={() => {
										setLanguages(usa);
										setChangeLanguages(false);
									}}
								>
									<img src={usa} alt="usa" className="w-9" />
								</div>
							</div>
						)}
					</div>
					<BsList
						className="cursor-pointer"
						size={25}
						color="#3450a2"
						onClick={() => setIsOpenMenu(!isOpenMenu)}
					/>
				</div>
			</div>
			{isOpenMenu && (
				<div className="flex flex-col gap-4 py-4 px-5 absolute bg-primaryWhite w-full shadow-md max-h-80 overflow-y-scroll no-scrollbar top-14">
					<p className="cursor-pointer hover:underline hover:underline-offset-[12px] hover:decoration-primaryBlue hover:decoration-2">
						Home
					</p>
					<p className="cursor-pointer hover:underline hover:underline-offset-[12px] hover:decoration-primaryBlue hover:decoration-2">
						Kenapa Shieldtag?
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
						Produk{" "}
						<span>
							<BsChevronDown size={15} />
						</span>
					</p>
					{isActiveProduk && (
						<div className="flex flex-col gap-2">
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
						Layanan{" "}
						<span>
							<BsChevronDown size={15} />
						</span>
					</p>
					{isActiveLayanan && (
						<div className="flex flex-col gap-2">
							{layanan.map((menu) => (
								<p className="hover:text-secondaryBlue cursor-pointer">
									{menu}
								</p>
							))}
						</div>
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
						Industri{" "}
						<span>
							<BsChevronDown size={15} />
						</span>
					</p>
					{isActiveIndustri && (
						<div className="flex flex-col gap-2">
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
						Tentang Kami{" "}
						<span>
							<BsChevronDown size={15} />
						</span>
					</p>
					{isActiveTentangKami && (
						<div className="flex flex-col gap-2">
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
					/>
				</div>
			)}
		</div>
	);
};

export default Navbar;
