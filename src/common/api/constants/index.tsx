import { stringLine } from "types";

export const basicUrl:stringLine ='https://hacker-news.firebaseio.com/v0';

export const url:stringLine =  `${basicUrl}/newstories.json?print=pretty&orderBy="$key"&limitToFirst=100`;