const Footer =() =>  {
    return ( <>
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-700">
        <div className="md:w-2/3 w-full px-4 text-white flex flex-col">
            <div className="w-full text-7xl font-bold">
                <h1 className="w-full md:w-2/3">Best tour in CITY-TOUR</h1>
            </div>
            <div className="flex mt-8 flex-col md:flex-row md:justify-between">
                <p className="w-full md:w-2/3 text-gray-400">To ensure that all Wikipedia content is verifiable, anyone may question an uncited claim. If your work has been tagged</p>
                <div className="w-44 pt-6 md:pt-0">
                    <a className="bg-teal-500 justify-center text-center rounded-lg shadow px-10 py-3 flex items-center" href="/">Contact US</a>
                </div>
            </div>
            <div>
                
                <hr className="border-gray-600 mt-5"/>
                <p className="w-full text-center my-12 text-gray-600">© 2018 - 2022 CITY-TOUR</p>
            </div>
        </div>
    </div></> );
}

export default Footer;