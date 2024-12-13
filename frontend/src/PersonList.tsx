import { PersonCard } from "./PersonCard";
import { Person } from "./types";
import React from 'react';

type PersonListProps = {
    people: Person[];
}

interface PersonListState {
    people: Person[];
    ascending: boolean;
    filter: "" | "student" | "teacher" | "staff";
}


export class PersonList extends React.Component<PersonListProps, PersonListState>{
    constructor(props: PersonListProps) {
        super(props);
        this.state = {people: props.people, ascending: true, filter: ""};
    }
    showPerson = (person: Person) : JSX.Element => {
        return PersonCard(person);
    }
    printPeople = (people: Person[]) : JSX.Element[] => this.state.ascending ? people.map(this.showPerson) : people.reverse().map(this.showPerson)
    render() {
        return (
            <div>
                <li>
                    {this.state.filter === "" ? this.printPeople(this.state.people) : this.printPeople(this.state.people.filter(person => person.role === this.state.filter))}
                </li>
                <button onClick={_ => this.setState({ascending: !this.state.ascending})}>Reverse Order</button>
                <select value={this.state.filter}
                    onChange={(e) => this.setState({ filter: e.target.value as "" | "student" | "teacher" | "staff" }) } >
                    <option value="">Select Filter</option>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                    <option value="staff">Staff</option>
                </select>
            </div>
        )
    }
}