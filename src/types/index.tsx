export type stringLine = string;
export type numberLine = number;

export interface IButtonProps {
	updatePosts?: () => void;
	buttonName: string;
	className?: string;
}

export interface IState {
	post: any;
	posts: any[];
	comments: any[];
	loading: boolean;
	postError:string;
	commentError:string,
}

export interface IPostsType {
	by: string;
	descendants: number;
	id: number;
	score: number;
	time: number;
	title: string;
	type: string;
	url: string;
	kids:number[];
}

export interface IPostsData {
	items: IPostsType[],
	error?:stringLine,
}



export interface ICommentsType {
		by: string;
		id: number;
		parent?: number;
		text?: string;
		time: number;
		type: string;
}

export interface ICommentData {
	item: ICommentsType,
}

export interface IPost {
	post:IPostsType;
}