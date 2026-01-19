
import { IconUserCheck, IconUsersGroup } from "@tabler/icons-react";
import { cn } from "../../lib/utils";

const FormsBanner = ({ logo, eventName, eventDescription, eventEligibility, fees, min_team_size, max_team_size, className, ...props }) => {
	return (
		<div className={cn("w-full max-w-7xl mx-auto relative p-px", className)}
		{...props}
		>
			<span className="absolute inset-0 bg-gradient-to-r from-dark-blue via-light-blue to-orange-100"></span>

			<div className="w-full sm:px-6 sm:py-4 max-sm:px-2 p-4 flex flex-col sm:flex-row max-sm:items-center gap-6 sm:gap-8 bg-tertiary relative">

				<img loading='lazy'  src={logo} alt={eventName + '_logo'} className="w-[120px] sm:w-[180px] sm:pr-8 sm:border-r-[1px] flex flex-col items-center justify-center"/>
				<div className="flex max-sm:flex-col justify-between max-sm:gap-4 w-full">
				<div className='flex flex-col items-center sm:items-start justify-center gap-2 sm:flex-[0.8]'>
					<h1 className="font-bold text-3xl">{eventName}</h1>
					{eventDescription && (
						<h2
						className="font-normal text-xl max-sm:text-center"
						dangerouslySetInnerHTML={{ __html: eventDescription }}
						/>
					)}
				</div>
				<div className="flex flex-col items-center sm:items-end justify-center gap-4">
					{min_team_size && max_team_size && <p className='px-2 py-1 text-sm bg-slate-800 font-semibold rounded-md flex items-center gap-2'><IconUsersGroup /> {min_team_size}-{max_team_size} members</p>}
					{fees && <ul className='flex sm:gap-4 gap-1'>
						<li className='bg-slate-800 text-green-400 font-semibold px-2 py-1 rounded-md'>National: <span dangerouslySetInnerHTML={{__html: fees}}></span></li>
						<li className='bg-slate-800 text-green-400 font-semibold px-2 py-1 rounded-md'>International: {'Free'}</li>
					</ul>}
					{eventEligibility && <p className='px-2 py-1 text-sm bg-slate-800 font-semibold rounded-md text-green-400 flex items-center gap-2'><IconUserCheck /> Eligibility</p>}
					{eventEligibility && <ul className='flex flex-col gap-2'>
						{
							eventEligibility.split('#$').map(criteria => (
								<li key={criteria} className="bg-black-100 text-sm px-2 py-1 rounded-md">{criteria}</li>
							))
						}
					</ul>}
				</div>
				</div>
			</div>	
		</div>
	);
}

export default FormsBanner;