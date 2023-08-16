import Link from 'next/link';
import PagesMetaHead from '../components/PagesMetaHead';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import Button from '../components/reusable/Button';
import AppBanner from '../components/shared/AppBanner';

export default function Home() {
	return (
		<div className="container mx-auto">
			<PagesMetaHead title="Home" />

			<AppBanner />

			<ProjectsGrid />

			<div className="flex justify-center mt-10 sm:mt-15">
				<div className="flex items-center px-6 py-3 text-lg text-white duration-300 bg-indigo-500 rounded-lg shadow-lg font-general-medium hover:shadow-xl hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 sm:text-xl">
					<Link href="/projects" aria-label="More Projects" passHref>
						<Button title="More Projects" />
					</Link>
				</div>
			</div>
		</div>
	);
}
