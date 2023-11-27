const Footer = () => {
    return(
        <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-900" data-aos="fade-up">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 " alt="Flowbite Logo" />
                        <span className="self-center italic font-bold text-xl whitespace-nowrap dark:text-white">ASLAB</span>
                    </a>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Asisten Labolatorium™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}
export default Footer;