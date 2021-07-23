import React from "react";
import { Link } from "react-router-dom";
function Settings_Sidebar() {
	return (
		<nav className='container h-screen w-full flex flex-col content-around'>
			<Link className='hover:bg-pinkred hover:text-white' to='/settings/username'>
				<div className=' h-auto flex flex-row mx-4 my-8'>
					<p>Change Username</p>
				</div>
			</Link>
			<Link className='hover:bg-pinkred hover:text-white' to='/settings/password'>
				<div className='h-auto flex flex-row mx-4 my-8 '>
					<p>Change Password</p>
				</div>
			</Link>
			<div className='hover:bg-pinkred hover:text-white'>
				<Link to='/settings/email'>
					<div className='h-auto flex flex-row mx-4 my-8 '>
						<p>Change Email</p>
					</div>
				</Link>
			</div>
		</nav>
	);
}

export default Settings_Sidebar;
