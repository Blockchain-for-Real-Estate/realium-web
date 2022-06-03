import Image from "next/image"

export default function Contact(props) {
	return (
		<div className="relative bg-white overflow-hidden">
			<div className="relative h-96 lg:h-full lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
				<Image
					src="/images/contact-form.png"
					alt="contact image"
					layout="fill"
					objectFit="cover"
					priority
				/>
			</div>
			<div className="max-w-7xl mx-auto">
				<div className="relative bg-white lg:max-w-2xl lg:w-full px-4 lg:pl-8 lg:pr-16 pt-5 lg:pt-16">
					<ContactForm />
				</div>
			</div>
		</div>
	)
}

function ContactForm(props) {
	return (
		<div>
			<div className="text-4xl leading-10 font-extrabold">
				Have a question for the Realium Team?
			</div>
			<div className="text-lg leading-7 font-normal mt-3">
				Send us a message to get the ball rolling.
			</div>
			<form
				action="https://mailthis.to/realium"
				method="POST"
				className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
			>
				<div className="sm:col-span-2">
					<label
						htmlFor="name"
						className="block text-sm font-medium text-gray-700"
					>
						Name
					</label>
					<div className="mt-1">
						<input
							id="name"
							name="name"
							type="text"
							className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
						/>
					</div>
				</div>
				<div className="sm:col-span-2">
					<label
						htmlFor="email"
						className="block text-sm font-medium text-gray-700"
					>
						Email
					</label>
					<div className="mt-1">
						<input
							id="email"
							name="email"
							type="email"
							autoComplete="email"
							className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
						/>
					</div>
				</div>
				<div className="sm:col-span-2">
					<div className="flex justify-between">
						<label
							htmlFor="message"
							className="block text-sm font-medium text-gray-700"
						>
							Message
						</label>
					</div>
					<div className="mt-1">
						<textarea
							id="message"
							name="mesage"
							aria-describedby="message body"
							rows={4}
							className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
							defaultValue={""}
						/>
					</div>
				</div>
				<div className="text-right sm:col-span-2">
					<button
						type="submit"
						className="inline-flex justify-center py-2 px-4 btn-primary"
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	)
}
