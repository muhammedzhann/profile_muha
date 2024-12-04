import Image from 'next/image';
import React from 'react';

const Projects = () => {
	const portfolioList = [
		{
			id: 1,
			img: '/portfolio1.png',
			title: 'Website for a Company',
			description:
				'Sites of varying complexity and functionality, starting from corporate websites',
			project: {
				type1: 'Web Development',
				type2: 'E-Commerce',
				type3: 'Optimization and Analytics',
			},
		},
		{
			id: 2,
			img: '/portfolio2.png',
			title: 'Website for a Company',
			description:
				'Sites of varying complexity and functionality, starting from corporate websites',
			project: {
				type1: 'Web Development',
				type2: 'E-Commerce',
				type3: 'Optimization and Analytics',
			},
		},
		{
			id: 3,
			img: '/portfolio3.png',
			title: 'Website for a Company',
			description:
				'Sites of varying complexity and functionality, starting from corporate websites',
			project: {
				type1: 'Web Development',
				type2: 'E-Commerce',
				type3: 'Optimization and Analytics',
			},
		},
		{
			id: 4,
			img: '/portfolio1.png',
			title: 'Website for a Company',
			description:
				'Sites of varying complexity and functionality, starting from corporate websites',
			project: {
				type1: 'Web Development',
				type2: 'E-Commerce',
				type3: 'Optimization and Analytics',
			},
		},
		{
			id: 5,
			img: '/portfolio1.png',
			title: 'Website for a Company',
			description:
				'Sites of varying complexity and functionality, starting from corporate websites',
			project: {
				type1: 'Web Development',
				type2: 'E-Commerce',
				type3: 'Optimization and Analytics',
			},
		},
	];

	return (
		<section
			id='projects'
			className='flex flex-col items-center gap-5 bg-secondary py-20'
		>
			<h4 className='text-4xl font-semibold'>Projects</h4>
			<p className='w-2/3 lg:w-full text-lg text-center text-secondary'>
				Here I proudly present some of my best <br />
				projects completed for valued clients.
			</p>
			<div className='flex gap-10 w-[100%] overflow-scroll px-10 lg:px-20 pb-10'>
				{portfolioList.map(item => (
					<div
						key={item.id}
						className='flex flex-col gap-5 max-w-[300px] min-w-[300px] items-center lg:items-start'
					>
						<div className='flex relative'>
							<Image
								width={300}
								height={300}
								src={item.img}
								alt='website example'
								className='rounded-[40px]'
							/>
							<div className='z-10 absolute bottom-0 flex flex-col items-start text-white p-5 gap-2 text-sm'>
								<button className='white-btn'>{item.project.type1}</button>
								<button className='white-btn'>{item.project.type2}</button>
								<button className='white-btn'>{item.project.type3}</button>
							</div>
						</div>
						<div className='pl-2'>
							<h5 className='text-xl font-medium mb-2'>{item.title}</h5>
							<p className='text-xs text-secondary'>{item.description}</p>
						</div>
						<button className=' text-white  rounded-full w-40 h-10 bg-violet'>
							Read More
						</button>
					</div>
				))}
			</div>
		</section>
	);
};

export default Projects;
