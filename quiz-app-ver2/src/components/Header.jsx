import logo from "../assets/quiz-logo.png"

export default function Header() {
    return <header>
        <img src={logo} alt="리액트 퀴즈 앱의 로고" />
        <h1>!리액트 퀴즈!</h1>
    </header>
}