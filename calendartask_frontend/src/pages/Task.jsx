

export default function Task(props) {
    var task = props.task
    return (
        <>
            <div className="bg-purple-200 p-1 cursor-default rounded hover:bg-orange-100">
                <div className="font-bold">TickTok Clone Ideation{task.title}</div>
                <div>Meet with all department heads ....{props.task.description}</div>
                <div className="italic">Due: Tue, 15 Dec, 2024{props.task.duedate}</div>
            </div>

        </>
    );
}