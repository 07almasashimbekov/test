import "./style.css"
import "./script.js"


import myStudents from "./../img/icons/my-students.svg"
import myStudentsDark from "./../img/icons/"

import dbQuestions from "./../img/icons/db-questions.svg"
import dbQuestionsDark from "./../img/icons/db-questions_black.svg"

import analyzeQuestions from "./../img/icons/analyze-questions"
import analyzeQuestionsDark from "./../img/icons/analyze-questions_black"

import signOut from "./../img/icons/sign-out"
import signOutDark from "./../img/icons/sign-out_black"


const SideBarTeacher = () => {
	return (
		<>
			<sidebar className="sidebar " id="sidebar">
				<div className="sidebar__container">

					<div className="sidebar-item-menu" id="sidebar-item-menu">
						<div className="sidebar_burger" id="sidebar_burger">
							<button type="button" className="menu-mobile-toggle">
								<span className="first_line"></span>
								<span className="second_line"></span>
							</button>
						</div>
					</div>

					<nav className="navbar">
						<h1 className="navbar__menu-title _hidden" id="navbar__menu-title">Мой класс</h1>
						<ul className="navbar__menu">
							<a href="" className="navbar__menu-list">
								<div className="navbar__list-icon">
									<img className="navbar__list_desktop-img" src={myStudents} alt="" />
									<img className="navbar__list_mobile-img" src={myStudentsDark} alt="" />
								</div>
								<div className="navbar__list-link _hidden" id="navbar__list-link">
									Мои экзамены
								</div>
							</a>
							<a href="" className="navbar__menu-list">
								<div className="navbar__list-icon">
									<img className="navbar__list_desktop-img" src={dbQuestions} alt="" />
									<img className="navbar__list_mobile-img" src={dbQuestionsDark} alt="" />
								</div>
								<div className="navbar__list-link _hidden">
									База вопросов
								</div>
							</a>
							<a href="" className="navbar__menu-list">
								<div className="navbar__list-icon">
									<img className="navbar__list_desktop-img" src={analyzeQuestions} alt="" />
									<img className="navbar__list_mobile-img" src={analyzeQuestionsDark} alt="" />
								</div>
								<div className="navbar__list-link _hidden">
									Анализ предмета
								</div>
							</a>

							<a href="" className="navbar__menu-list">
								<div className="navbar__list-icon">
									<img className="navbar__list_desktop-img" src={signOut} alt="" />
									<img className="navbar__list_mobile-img" src={signOutDark} alt="" />
								</div>
								<div className="navbar__list-link _hidden">
									Выйти
								</div>
							</a>
						</ul>
					</nav>
				</div>
			</sidebar>
		</>
	);
}

export default SideBar;

