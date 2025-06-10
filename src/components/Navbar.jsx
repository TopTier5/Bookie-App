function Navbar() {
    return (
        <nav className="bg-[#6B7280] px-6 py-4 shadow-sm w-full">
            <div className="">
                <h2 className="text-xl font-semibold text-white">Library Dashboard</h2>
                <p className="text-sm text-white">Manage your collection</p>
            </div>

              <div className="flex items-center gap-4">
                <input type="text" placeholder="search books..." className="border border-gray-300 rounded-md px-3 py-1 text-sm" />
              </div>
        </nav>
    );
}
export default Navbar