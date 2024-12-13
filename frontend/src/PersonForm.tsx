import React from "react";

type PersonFormState = {
    name: string;
    role: ""|"student"|"teacher"|"staff";
    grade?: number|undefined;
    subjects?: string[];
    department?: string;
    message: string;
}


export const initPersonFormState : PersonFormState = {
    name: "",
    role: "",
    grade: undefined,
    subjects: undefined,
    department: undefined,
    message: "",
}


export class PersonForm extends React.Component<{}, PersonFormState>{
    constructor(props: {}) {
        super(props);
        this.state = initPersonFormState;
    }
    render() {
        return (
            <div>
                <div key={"name"}>
                    Name: <input value={this.state.name} onChange={(e) => this.setState({name: e.target.value, message: ""})}/>
                </div>
                <select value={this.state.role}
                    onChange={(e) => this.setState({ role: e.target.value as "student" | "teacher" | "staff" }) } >
                    <option value="">Select Role</option>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                    <option value="staff">Staff</option>
                </select>
                {this.state.role === "student" && (
                    <div key={"grade"}>
                        Grade: <input value={this.state.grade} onChange={(e) => this.setState({grade: e.target.valueAsNumber, message: ""})}/>
                    </div>
                )}
                {this.state.role === "teacher" && (
                    <div key={"subjects"}>
                        Subjects: <input value={this.state.subjects} onChange={(e) => this.setState({subjects: e.target.value.split(",").map(part => part.trim()), message: ""})}/>
                    </div>
                )}
                {this.state.role === "staff" && (
                    <div key={"department"}>
                        Department: <input value={this.state.department} onChange={(e) => this.setState({department: e.target.value, message: ""})}/>
                    </div>
                )}
                <button onClick={() => {
                    this.state.role === "student" && this.state.grade !== undefined ? this.setState({name: "", role:"", message: `Created student ${this.state.name} with grade ${this.state.grade}`}) : this.state.role === "teacher" && this.state.subjects !== undefined ? this.setState({name: "", role:"", message: `Created teacher ${this.state.name} with subjects ${this.state.subjects.join(", ")}`}) : this.state.role === "staff" && this.state.department !== undefined ? this.setState({name: "", role:"", message: `Created staff ${this.state.name} in department ${this.state.department}`}) : this.setState({message: "Please fill in all fields"});
                }}>Create Person</button>
                <div>
                    {this.state.message}
                </div>
            </div>
        )
    }
}