import axios from "axios";
import { numberLine, stringLine } from "types";
import { url } from "../constants";

export const getPosts = async () => {
	const response = await axios.get(url);
	let arrayOfPosts = response.data;
	const result = await Promise.all(
		arrayOfPosts.map(async (item: numberLine) => {
			const response = await axios.get(
				`https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`,
			);
			return response.data;
		}),
	);
	return result;
};

export const getComments = async (kids: stringLine[]) => {
	let result = [];
	result = await Promise.all(
		kids.map(async (itemElement) => {
			const response = await axios.get(
				`https://hacker-news.firebaseio.com/v0/item/${itemElement}.json?print=pretty`,
			);
			return response.data;
		}),
	);
	return result;
};
