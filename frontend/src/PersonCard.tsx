import React from 'react';
import { Person } from './types';

export const PersonCard = (props: Person) : JSX.Element => {
    return (
        <div>
            {props.role === 'student' && (
                <div>
                    <div>
                        Name: {props.name}
                    </div>
                    <div>
                        Grade: {props.grade}
                    </div>
                </div>
            )}
            {props.role === 'teacher' && (
                <div>
                <div>
                    Name: {props.name}
                </div>
                <div>
                    Subjects: {props.subjects.join(', ')}
                </div>
            </div>
            )}
            {props.role === 'staff' && (
                <div>
                <div>
                    Name: {props.name}
                </div>
                <div>
                    Department: {props.department}
                </div>
            </div>
            )}
        </div>
    )
} 