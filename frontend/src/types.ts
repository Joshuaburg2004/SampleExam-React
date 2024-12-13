export type Person = Student | Teacher | Staff;
type Student = {
  name: string;
  grade: number;
  role: "student";
};
type Teacher = {
  name: string;
  subjects: string [];
  role: "teacher";
};
type Staff = {
  name: string;
  department: string;
  role: "staff";
};