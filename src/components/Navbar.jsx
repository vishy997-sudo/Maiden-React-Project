const Navbar =()=> {
    return(
    <nav className="container">
      <div className='logo'><img src="https://th.bing.com/th/id/R.7ecb22fd61fcaf57bf8b9a17b0098a63?rik=TPhIcpZgIBuO4A&riu=http%3a%2f%2fpngimg.com%2fuploads%2fnike%2fnike_PNG12.png&ehk=S%2bcMWpHgbfcTZOdLleeHaSQtTCy%2fJlsSgGQ343nc5DY%3d&risl=&pid=ImgRaw&r=0" width='200px' height='100px' alt="logo" /></div>
      <ul>
      <li>Menu</li>
      <li>Location</li>
      <li>About</li>
      <li>Contact</li>
      </ul>

      <button>Login</button>
    </nav>

    )
}
export default Navbar