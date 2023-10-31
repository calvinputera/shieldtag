import React from "react";
import { useTranslation } from "react-i18next";

const QandA = () => {
	const [t] = useTranslation("global");

	const questions = [
		{
			question: t("qna.questionOneTitle"),
			answer: t("qna.questionOne"),
		},
		{
			question: t("qna.questionTwoTitle"),
			answer: t("qna.questionTwo"),
		},
		{
			question: t("qna.questionThreeTitle"),
			answer: t("qna.questionThree"),
		},
		{
			question: t("qna.questionFourTitle"),
			answer: t("qna.questionFour"),
		},
		{
			question: t("qna.questionFiveTitle"),
			answer: t("qna.questionFive"),
		},
	];

	return (
		<div className="p-8 md:px-14 flex flex-col gap-16">
			<div className="flex flex-col justify-center gap-4 text-primaryBlack">
				<h1 className="font-nunito text-3xl font-extrabold text-center">
					{t("qna.title")}
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
