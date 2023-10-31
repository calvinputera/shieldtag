import DashboardSection from "./components/DashboardSection";
import Footer from "./components/Footer";
import MainSection from "./components/MainSection";
import Navbar from "./components/Navbar";
import ProtectionSection from "./components/ProtectionSection";
import QandA from "./components/QandA";
import SupplySection from "./components/SupplySection";

function App() {
	return (
		<>
			<Navbar />
			<MainSection />
			<ProtectionSection />
			<SupplySection />
			<QandA />
			<DashboardSection />
			<Footer />
		</>
	);
}

export default App;
