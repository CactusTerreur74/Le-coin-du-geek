function Header() {
    return (
        <header>
            <div className="title"><Link to={"/Astroid"}>Astroid</Link></div>
            <button className="button" onClick={panel_click}><p>Click me</p></button>
            <nav className="navbar"><Link to={"play"}>Play</Link><Link to={"credit"}>Credit</Link><ThemeChoice /></nav>
        </header>
    )
}

function panel_click () {
    const button = document.getElementById("left-tab");

    if (button.style.display == "none") {
        button.style.display="flex";
        document.getElementById("content").style.display="flex";
        document.getElementById("content").style.paddingRight = document.getElementById("content")?.style.paddingTop
    }
    else {
        button.style.display="none";
        document.getElementById("content").style.display="block";
        document.getElementById("content").style.paddingRight=0;
    }

}
