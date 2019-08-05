import React, {useState} from 'react'

const NavItem = ({name, isActive, onClick, onSelect}) => {
  function handleClick(){
    onClick()
    onSelect()
  }

  return <button className={isActive ? "nav-link active" : "nav-link"} onClick={handleClick}>{name}</button>
}

const Navbar = ({setTag}) => {
  const tags = ["home", "coding", "health", "books"]
  const [active, setActive] = useState("home")

  return(
    <nav>
      <div id="logo">
        <p>Things I Learned Today</p>
      </div>
      <div className="nav-wrap" id="nav-wrap">
        {tags.map(tag => (
          <NavItem name={tag} key={tag} isActive={active === tag} onSelect={() => setActive(tag)} onClick={() => setTag(tag)} />
        ))}

        {/* <a id="burger" href="javascript:void(0);">&#9776;</a> */}
      </div>
    </nav>
  )
}

export default Navbar