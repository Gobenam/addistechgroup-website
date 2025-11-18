/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const config = {
	runtime: "edge",
};

export async function GET(req: NextRequest) {
	try {
		const { origin, searchParams } = new URL(req.url);

		const slug = searchParams.has("slug") && searchParams.get("slug");
		const title = searchParams.has("title") && searchParams.get("title");
		const description = searchParams.has("description") && searchParams.get("description");

		return new ImageResponse(
			(
				<div tw="h-[630px] w-[1200px] flex flex-col  overflow-hidden justify-between bg-[#1A1B1E]">
					<div tw="flex justify-between mr-18">
						<div tw="flex w-7/12 flex-col my-18 ml-18 justify-around pr-10">
							<div tw=" flex items-center">
								<svg
									preserveAspectRatio="xMidYMid meet"
									data-bbox="20.303 25.565 159.393 148.871"
									viewBox="20.303 25.565 159.393 148.871"
									height="70"
									width="70"
									xmlns="http://www.w3.org/2000/svg"
									data-type="color"
									role="img"
									aria-label="Logo"
								>
									<g>
										<path
											d="M179.398 97.035c-2.089-12.835-17.014-19.402-28.953-14.029l-12.537 5.671c-11.94 5.373-25.371 5.373-37.311 0L88.06 83.006C76.12 77.633 61.196 84.2 59.107 97.035c-.299.895-.299 2.089-.299 3.283 0 .895 0 2.089.299 3.283 2.089 12.835 17.014 19.402 28.953 14.029l12.537-5.671c11.94-5.373 25.371-5.373 37.311 0l12.537 5.671c11.94 5.373 26.864-1.194 28.953-14.029.298-.895.298-2.089.298-3.283 0-.895 0-2.089-.298-3.283z"
											fill="#09ADC3"
										></path>
										<path
											d="M49.556 62.112l12.537-5.671c11.94-5.373 25.371-5.373 37.311 0l12.537 5.671c11.94 5.373 26.864-1.194 28.953-14.029.298-.895.298-2.089.298-3.283 0-.895 0-2.089-.298-3.283-2.089-12.835-17.014-19.402-28.953-14.029l-12.537 5.671c-11.94 5.373-25.371 5.373-37.311 0l-12.537-5.671c-11.94-5.373-26.864.895-28.953 14.029-.299.895-.299 2.089-.299 3.283 0 .896 0 2.089.299 3.283 2.089 12.835 17.013 19.402 28.953 14.029z"
											fill="#09ADC3"
										></path>
										<path
											d="M111.94 137.928l-12.537 5.671c-11.94 5.373-25.371 5.373-37.311 0l-12.537-5.671c-11.94-5.373-26.864 1.194-28.953 14.029-.299.895-.299 2.089-.299 3.283 0 .896 0 2.089.299 3.283 2.089 12.835 17.014 19.402 28.953 14.029l12.537-5.671c11.94-5.373 25.371-5.373 37.311 0l12.537 5.671c11.94 5.373 26.864-1.194 28.953-14.029.298-.896.298-2.089.298-3.283 0-.895 0-2.089-.298-3.283-2.089-12.836-17.014-19.402-28.953-14.029z"
											fill="#09ADC3"
										></path>
									</g>
								</svg>
								<div tw="text-zinc-50 flex flex-col ml-8">
									<h1 tw="text-5xl font-bold m-0 mb-2 p-0">ADDIS.TECH</h1>
									{slug ? (
										<p tw="text-zinc-300 m-0 p-0">{`${origin}/${slug}`}</p>
									) : (
										<p tw="text-zinc-300 m-0 p-0">{`${origin}`}</p>
									)}
								</div>
							</div>
							<div tw="text-zinc-50 flex flex-col">
								<p tw="text-3xl text-zinc-400 overflow-hidden mb-4">
									{description
										? description
										: "Control, Measure, Manage and Locate your Things from the Internet"}
								</p>
								<h1 tw="mb-4 text-6xl font-bold mt-0 pt-0">
									{title ? title : "Move-in to the Future"}
								</h1>
							</div>
							<div tw="flex flex-col w-full">
								<div tw="my-5 flex items-center w-full justify-between text-2xl">
									<div tw="rounded-xl bg-[#09ADC3] py-4 px-15 text-center w-full flex justify-center text-lg text-zinc-50 mr-8">
										Request a Demo
									</div>
									<div
										tw="rounded-xl py-4 px-15 text-center w-full flex justify-center text-lg text-zinc-50"
										style={{
											border: "2px solid #09ADC3",
										}}
									>
										Contact Us
									</div>
								</div>
							</div>
						</div>
						<div tw="w-4/12 overflow-hidden flex flex-col">
							{slug ? (
								<img
									src={`${origin}/${slug}.jpg`}
									height={512}
									width={512}
									alt={slug ? slug : "Home"}
									style={{
										width: "100%",
										height: "100%",
										objectFit: "cover",
										boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
									}}
								/>
							) : (
								<img
									src={`${origin}/images/home-bg.jpg`}
									height={330}
									width={282}
									alt={"lasagna"}
									style={{
										width: "100%",
										height: "100%",
										objectFit: "cover",
										boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
									}}
								/>
							)}
						</div>
					</div>
				</div>
			),
			{
				width: 1200,
				height: 630,
				emoji: "twemoji",
			}
		);
		// eslint-disable-next-line @typescript-eslint/no-explicit-any,, @typescript-eslint/no-unused-vars
	} catch (e: any) {
		return new Response(`Failed to generate the image`, {
			status: 500,
		});
	}
}
