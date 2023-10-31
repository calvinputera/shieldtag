import React from "react";

const QandA = () => {
	const questions = [
		{
			question: "Apa itu Shieldtag?",
			answer:
				"Shieldtag adalah hologram sticker berteknologi yang digunakan untuk memastikan keaslian sebuah produk.",
		},
		{
			question: "Bagaimana cara penggunaannya?",
			answer:
				"Download aplikasi Shieldtag, lalu scan QR code dari hologram Shieldtag, lalu masukan PIN code yang unik di QR code kamu, dan pastikan keaslian produk kamu.",
		},
		{
			question: "Brand apa aja yg sudah menggunakan Shieldtag?",
			answer:
				"Azarine, Dr. Soap, Zoya, ProShop adalah salah satu dari brand-brand ternama yang telah menggunakan Shieldtag.",
		},
		{
			question: "Shieldtag adalah perusahaan yang berasal darimana?",
			answer:
				"Kami berasal dari Jakarta, Indonesia, dan beroperasi atas nama PT Karya Generasi Biru dan telah beroperasi dari tahun 2020.",
		},
		{
			question: "Bagaimana cara mendapatkan aplikasi Shieldtag?",
			answer:
				"Anda dapat download aplikasi Shieldtag yang tersedia di Google Play maupun App Store.",
		},
	];

	return (
		<div className="p-8 md:px-14 flex flex-col gap-16">
			<div className="flex flex-col justify-center gap-4 text-primaryBlack">
				<h1 className="font-nunito text-3xl font-extrabold text-center">
					Pertanyaan Yang Sering Diajukan
				</h1>
				<hr className="border border-secondaryBlue w-20 mx-auto" />
			</div>
			<div className="flex flex-col gap-10 pb-24">
				{questions.map((item) => (
					<div className="text-primaryBlack flex flex-col gap-2">
						<p className="text-xl font-semibold">{item.question}</p>
						<p className="text-primaryGray">{item.answer}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default QandA;
