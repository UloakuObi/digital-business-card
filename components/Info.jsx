function Info() {
    return (
        <header>
            <img src="../assets/Profile-photo.png" alt="Profile photo"></img>
            <h1>
                Laura Smith
            </h1>
            <p>Frontend Developer</p>
            <a href="#"><small>laurasmith.website</small></a>
            <div className="btn-wrapper">
                <button className="btn-email">
                    <img className="btn-icon" src="../assets/Email Icon.png"/>
                    Email
                </button>
                <button className="btn-linkedin">
                    <img src="../assets/LinkedIn Vector.png"/>
                    LinkedIn
                </button>
            </div>
        </header>
    )
}

export default Info