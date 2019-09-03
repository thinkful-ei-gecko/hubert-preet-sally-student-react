function App(props) {
    console.log(props)
    return (
        <div>
            <header>
                <address> 
                    <h1>Sally Student's Resume</h1>
                    <h2>Contact Information:</h2>
                    <a href="mailto:sallystudent@gmail.com">Sally.student@gmail.com</a><br /><a href="tel:111-111-1111">111-111-1111</a><br />
                    <img src="https://ia.media-imdb.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_UX214_CR0,0,214,317_AL_.jpg" alt="Picture of Sally Student" title="Sally Student" />
                </address>
            </header>
            <main>
            <h2>Education:</h2>
            <ul>
                <li>M.S, Chemical Engineering, University of Somewhere, 2015 – 2018</li><br />
                <li>B.Eng, Chemical Engineering, University of Somewhere, 2011 - 2015</li>
            </ul>
            <h2>Employment History:</h2>
            <ul>
                <li>Kumon Learning Center, Science Tutor, 2015 - Present</li>
                    <p>lorem ipsum</p><br />
                <li>Starbucks, Barista, 2010 - 2015</li>
                    <p>lorem ipsum</p>
            </ul>
            </main>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.querySelector('#application-root')
);