import logo from '/image/aslab-logo.jpeg'
const Nav = () => {
    return(
        <div className="w-full h-16 sticky top-0 aslab-bg drop-shadow-md flex justify-center items-center gap-2">
            <img src={logo} className='w-10 h-10' />
            <h1 className="text-white italic font-bold text-xl dark:text-white">ASLAB</h1>
        </div>
    )
}
export default Nav;