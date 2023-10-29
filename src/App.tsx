import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Country from './pages/Country'

export default function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/about-me" element={<AboutMe />} />
					{/*<Route path="/turkey" element={<Turkey />} />*/}
					<Route path="/destination/:country" element={<Country />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
