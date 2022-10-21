import { Outlet } from 'react-router-dom'
import Welcome from '../components/Welcome'
import LayoutList from './globalComponents/LayoutList'
import TeamMem from './teamMembers/TeamMem'
import Yourprojects from './yourProject/YourProjects'
const Layout = () => {
	return (
		<div className="flex w-full">
			<nav className="hidden md:block md:w-4/12 lg:w-2/12 bg-white w-[220px] h-1/12 rounded-md mx-[12px] my-[12px]">
				<div className="py-[10px] pb-[25px]">
					<Welcome name={'John Doe'} />
				</div>
				<div className="divide-y divide-lightgray">
					<LayoutList />
					<div>
						<Yourprojects />
					</div>
					<div className='className="border-b divide-lightgray'>
						<TeamMem />
					</div>
				</div>
			</nav>

			<div className="md:bg-transparent px-[12px] lg:px-0 w-full md:w-8/12 lg:w-10/12">
				<Outlet />
			</div>
		</div>
	)
}

export default Layout
