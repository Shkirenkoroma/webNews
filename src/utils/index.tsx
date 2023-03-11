import { numberLine, stringLine } from "types";
import moment from "moment";
import "moment/locale/en-gb";

export const getTime = (time: numberLine):stringLine => {
	const timeNews = moment(time * 1000).toDate();

	return moment(timeNews).locale("en-gb").format("LL");
};
