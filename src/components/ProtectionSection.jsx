import React from "react";
import protection from "../assets/protection.png";
import { BsArrowRightShort } from "react-icons/bs";

const ProtectionSection = () => {
	return (
		<div className="px-8 py-12 flex flex-col-reverse bg-primaryWhite gap-10 md:flex-row md:items-center md:justify-between md:py-28 md:px-14">
			<div className="font-nunito">
				<p className="text-primaryBlue font-semibold">Fitur keamanan</p>
				<h2 className="text-primaryBlack font-extrabold text-3xl">
					Fraud Protection
				</h2>
				<div className="flex flex-col gap-5 mt-5 text-secondaryBlack">
					<p>
						Shieldtag adalah hologram sticker berteknologi yang digunakan untuk
						memastikan sebuah keaslian produk. Kamu bisa menggunakan aplikasi
						yang sudah Shieldtag sediakan untuk memastikan keaslian produk yang
						kamu beli.
					</p>
					<p>
						Ada dua cara untuk mengecek keaslian produk dengan aplikasi
						Shieldtag. Pastinya gampang dan mudah banget. Yuk cari tahu di bawah
						ini bagaimana cara menggunakan aplikasi Shieldtag, untuk mengetahui
						keaslian produk kamu!
					</p>
				</div>
				<p className="flex items-center gap-2 text-primaryBlue font-bold mt-3">
					Pelajari Selengkapnya{" "}
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
