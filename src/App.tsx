import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Country from './pages/Country'
import Istanbul from './pages/places/Istanbul'

export default function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/about-me" element={<AboutMe />} />
					<Route path="/destination/:country" element={<Country />} />
					<Route path="/destination/turkey/istanbul" element={<Istanbul />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
