import Exam from "../exam/Exam";

import { exams } from "../helpers/examLists";

const Exams = () => {
	return (
		<>
			<div className="exams">
				<div className="exams__container _container">
					<h1 className="exams__title main__title">
						Предстоящие экзамены
					</h1>
					<ul className="exams__list">

						{exams.map((exam) => {

							return <Exam time={exam.time} day={exam.day} />;

						})}


					</ul>
				</div>
			</div>
		</>
	);
}

export default Exams;