import ObjectDetection from "@/components/object-detection";

export default function Home() {
	return (
		<main className='flex flex-col min-h-screen items-center p-8'>
			<h1 className='gradient-title text-3xl font-extrabold md:text-6xl lg:text-7xl tracking-tighter md:px-6 text-center'>
				Object Detection
			</h1>
			<ObjectDetection />
		</main>
	);
}
