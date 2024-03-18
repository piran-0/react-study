import logo from "../assets/quiz-logo.png"

export default function Header() {
    return <header>
        <img src={logo} alt="" />
        <h1>!리액트 퀴즈!</h1>
    </header>
}