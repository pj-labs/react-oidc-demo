import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage.tsx';
import ProfilePage from '../pages/ProfilePage.tsx';

/**
 * Define all Routes and Sub-Routes
 *
 * @author Pavan Kumar Jadda
 * @since 1.0.0
 */
export default function AppRoutes(): JSX.Element {
	return (
		<div>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/profile" element={<ProfilePage/>} />
				<Route path="/home"  element={<HomePage />} />
			</Routes>
		</div>
	);
}
