import React, {useState} from 'react'

const NavItem = ({name, isActive, onClick, onSelect}) => {
  function handleClick(){
    onClick()
    onSelect()
  }

  return <button className={isActive ? "nav-link active" : "nav-link"} onClick={handleClick}>{name}</button>
}

const Navbar = ({setTag}) => {
  const tags = ["home", /* "coding", "nutrition", "mental health" */]
  const [active, setActive] = useState("home")

  return(
    <nav>
      <div id="logo">
        <p>Strange Loops</p>
      </div>
      <div className="nav-wrap" id="nav-wrap">
        {tags.map(tag => (
          <NavItem name={tag} key={tag} isActive={active === tag} onSelect={() => setActive(tag)} onClick={() => setTag(tag)} />
        ))}
      </div>
    </nav>
  )
}

export default Navbar