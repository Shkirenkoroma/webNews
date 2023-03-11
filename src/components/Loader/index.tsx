import * as S from "./index.styles";
import { Triangle } from  'react-loader-spinner';
import { FC } from "react";

const Loader:FC = ():JSX.Element => {

	return (
		<S.ContainerLoader>
			<Triangle
				height="280"
				width="280"
				color="#000"
				ariaLabel="triangle-loading"
				visible={true}
			/>
		</S.ContainerLoader>
	);
};

export default Loader;
