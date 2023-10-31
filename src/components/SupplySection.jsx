import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import supply from "../assets/supply.png";

const SupplySection = () => {
	return (
		<div className="px-8 py-12 flex flex-col-reverse bg-primaryWhite gap-10 md:flex-row-reverse md:items-center md:justify-between md:py-28 md:px-14">
			<div className="font-nunito">
				<p className="text-primaryBlue font-semibold">Data Produk</p>
				<h2 className="text-primaryBlack font-extrabold text-3xl">
					Supply-chain Visibility
				</h2>
				<div className="flex flex-col gap-5 mt-5 text-secondaryBlack">
					<p>
						Di dalam bisnis manufaktur, kita menciptakan suatu produk untuk kita
						jual kepada masyarakat, baik jual secara online, agent, reseller,
						dan berbagai cara lainnya. Namun, kita tidak tau dimana produk kita
						telah terjual di pasar. Kita hanya tau angka penjualan tapi hampir
						tidak mungkin untuk mengetahui dimana produk itu telah terjual.
					</p>
					<p>
						Shieldtag membuat hal tersebut dari tidak mungkin menjadi bisa dan
						mudah. Melalui setiap sticker hologram berteknologi dari Shieldtag,
						anda dapat melacak pendistribusian produk anda di pasar.
						Barang-barang tersebut dapat di lacak dengan akurat dan aktual juga
						semua data yang tersaji secara real-time.
					</p>
				</div>
				<p className="flex items-center gap-2 text-primaryBlue font-bold mt-3">
					Pelajari Distribution Tracking System
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
