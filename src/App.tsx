import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FC } from "react";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import { MainPage } from "./pages/main";
import { NewsPage } from "./pages/news";
import { IState } from "types";

const App: FC = (): JSX.Element => {
	const url = useSelector((state: IState) => state.news.post.id);

	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/*" element={<MainPage />} />
				<Route path={`/news/${url}`} element={<NewsPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
