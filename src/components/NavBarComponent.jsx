function Navbar() {
    return (
        <nav className= "navbar">
            <a href="#home" className="navLink">Home</a>
            <a href="#my-lists" className="navLink">My Lists</a>
            <input type="text" placeholder="Search Comics..." className="navSearch"/>
        </nav>
    );
}
export default Navbar;