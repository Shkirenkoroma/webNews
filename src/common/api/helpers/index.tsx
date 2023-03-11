import axios from "axios";
import { numberLine, stringLine } from "types";
import { url } from "../constants";

export const fetchPosts = async () => {
	const response = await axios.get(url);
	let arrPosts = response.data;
	const result = await Promise.all(
	arrPosts.map(async (item: numberLine) => {
		const response = await axios.get(
			`https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`,
			);
			return response.data ;
		}),
	);
	return result;
};

export const fetchComments = async (kids: stringLine[]) => {
	let result = [];
	if (kids) {
		result = await Promise.all(
			kids.map(async (itemElement) => {
				const response = await axios.get(
					`https://hacker-news.firebaseio.com/v0/item/${itemElement}.json?print=pretty`,
				);
				return response.data;
			}),
		);
	} else {
		return "комментариев пока нет";
	}
	return result;
};
